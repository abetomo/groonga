#!/usr/bin/env ruby

require 'English'
require 'optparse'
require 'cgi'
require 'thread'
require 'shellwords'
require 'time'
require 'erb'

class GroongaQueryLogAnaylzer
  class Error < StandardError
  end

  class UnsupportedReporter < Error
  end

  def initialize
    setup_options
  end

  def run(argv=nil)
    log_paths = @option_parser.parse!(argv || ARGV)

    stream = @options[:stream]
    dynamic_sort = @options[:dynamic_sort]
    statistics = SizedStatistics.new
    statistics.apply_options(@options)
    if stream
      streamer = Streamer.new(create_reporter(statistics))
      streamer.start
      parser = QueryLogParser.new(streamer)
    elsif dynamic_sort
      parser = QueryLogParser.new(statistics)
    else
      full_statistics = []
      parser = QueryLogParser.new(full_statistics)
    end
    log_paths.each do |log_path|
      File.open(log_path) do |log|
        parser.parse(log)
      end
    end
    if stream
      streamer.finish
      return
    end
    statistics.replace(full_statistics) unless dynamic_sort

    reporter = create_reporter(statistics)
    reporter.apply_options(@options)
    reporter.report
  end

  private
  def setup_options
    @options = {}
    @options[:n_entries] = 10
    @options[:order] = "-elapsed"
    @options[:color] = :auto
    @options[:output] = "-"
    @options[:slow_operation_threshold] = 0.1
    @options[:slow_response_threshold] = 0.2
    @options[:reporter] = "console"
    @options[:dynamic_sort] = true
    @options[:stream] = false
    @options[:report_summary] = true

    @option_parser = OptionParser.new do |parser|
      parser.banner += " LOG1 ..."

      parser.on("-n", "--n-entries=N",
                Integer,
                "Show top N entries",
                "(#{@options[:n_entries]})") do |n|
        @options[:n_entries] = n
      end

      available_orders = ["elapsed", "-elapsed", "start-time", "-start-time"]
      parser.on("--order=ORDER",
                available_orders,
                "Sort by ORDER",
                "available values: [#{available_orders.join(', ')}]",
                "(#{@options[:order]})") do |order|
        @options[:order] = order
      end

      color_options = [
        [:auto, :auto],
        ["-", false],
        ["no", false],
        ["false", false],
        ["+", true],
        ["yes", true],
        ["true", true],
      ]
      parser.on("--[no-]color=[auto]",
                color_options,
                "Enable color output",
                "(#{@options[:color]})") do |color|
        if color.nil?
          @options[:color] = true
        else
          @options[:color] = color
        end
      end

      parser.on("--output=PATH",
                "Output to PATH.",
                "'-' PATH means standard output.",
                "(#{@options[:output]})") do |output|
        @options[:output] = output
      end

      parser.on("--slow-operation-threshold=THRESHOLD",
                Float,
                "Use THRESHOLD seconds to detect slow operations.",
                "(#{@options[:slow_operation_threshold]})") do |threshold|
        @options[:slow_operation_threshold] = threshold
      end

      parser.on("--slow-response-threshold=THRESHOLD",
                Float,
                "Use THRESHOLD seconds to detect slow operations.",
                "(#{@options[:sloq_response_threshold]})") do |threshold|
        @options[:sloq_response_threshold] = threshold
      end

      available_reporters = ["console", "json", "html"]
      parser.on("--reporter=REPORTER",
                available_reporters,
                "Reports statistics by REPORTER.",
                "available values: [#{available_reporters.join(', ')}]",
                "(#{@options[:reporter]})") do |reporter|
        @options[:reporter] = reporter
      end

      parser.on("--[no-]dynamic-sort",
                "Sorts dynamically.",
                "Memory and CPU usage reduced for large query log.",
                "(#{@options[:dynamic_sort]})") do |sort|
        @options[:dynamic_sort] = sort
      end

      parser.on("--[no-]stream",
                "Outputs analyzed query on the fly.",
                "NOTE: --n-entries and --order are ignored.",
                "(#{@options[:stream]})") do |stream|
        @options[:stream] = stream
      end

      parser.on("--[no-]report-summary",
                "Reports summary at the end.",
                "(#{@options[:report_summary]})") do |report_summary|
        @options[:report_summary] = report_summary
      end
    end

    def create_reporter(statistics)
      case @options[:reporter]
      when "json"
        require 'json'
        JSONQueryLogReporter.new(statistics)
      when "html"
        HTMLQueryLogReporter.new(statistics)
      else
        ConsoleQueryLogReporter.new(statistics)
      end
    end

    def create_stream_reporter
      case @options[:reporter]
      when "json"
        require 'json'
        StreamJSONQueryLogReporter.new
      when "html"
        raise UnsupportedReporter, "HTML reporter doesn't support --stream."
      else
        StreamConsoleQueryLogReporter.new
      end
    end
  end

  class Command
    class << self
      @@registered_commands = {}
      def register(name, klass)
        @@registered_commands[name] = klass
      end

      def parse(input)
        if input.start_with?("/d/")
          parse_uri_path(input)
        else
          parse_command_line(input)
        end
      end

      private
      def parse_uri_path(path)
        name, parameters_string = path.split(/\?/, 2)
        parameters = {}
        parameters_string.split(/&/).each do |parameter_string|
          key, value = parameter_string.split(/\=/, 2)
          parameters[key] = CGI.unescape(value)
        end
        name = name.gsub(/\A\/d\//, '')
        name, output_type = name.split(/\./, 2)
        parameters["output_type"] = output_type if output_type
        command_class = @@registered_commands[name] || self
        command_class.new(name, parameters)
      end

      def parse_command_line(command_line)
        name, *options = Shellwords.shellwords(command_line)
        parameters = {}
        options.each_slice(2) do |key, value|
          parameters[key.gsub(/\A--/, '')] = value
        end
        command_class = @@registered_commands[name] || self
        command_class.new(name, parameters)
      end
    end

    attr_reader :name, :parameters
    def initialize(name, parameters)
      @name = name
      @parameters = parameters
    end

    def ==(other)
      other.is_a?(self.class) and
        @name == other.name and
        @parameters == other.parameters
    end
  end

  class SelectCommand < Command
    register("select", self)

    def sortby
      @parameters["sortby"]
    end

    def scorer
      @parameters["scorer"]
    end

    def query
      @parameters["query"]
    end

    def filter
      @parameters["filter"]
    end

    def conditions
      @conditions ||= filter.split(/(?:&&|&!|\|\|)/).collect do |condition|
        condition = condition.strip
        condition = condition.gsub(/\A[\s\(]*/, '')
        condition = condition.gsub(/[\s\)]*\z/, '') unless /\(/ =~ condition
        condition
      end
    end

    def drilldowns
      @drilldowns ||= (@parameters["drilldown"] || "").split(/\s*,\s*/)
    end

    def output_columns
      @parameters["output_columns"]
    end
  end

  class Statistic
    attr_reader :context_id, :start_time, :raw_command
    attr_reader :elapsed, :return_code
    attr_accessor :slow_operation_threshold, :slow_response_threshold
    def initialize(context_id)
      @context_id = context_id
      @start_time = nil
      @command = nil
      @raw_command = nil
      @operations = []
      @elapsed = nil
      @return_code = 0
      @slow_operation_threshold = 0.1
      @slow_response_threshold = 0.2
    end

    def start(start_time, command)
      @start_time = start_time
      @raw_command = command
    end

    def finish(elapsed, return_code)
      @elapsed = elapsed
      @return_code = return_code
    end

    def command
      @command ||= Command.parse(@raw_command)
    end

    def elapsed_in_seconds
      nano_seconds_to_seconds(@elapsed)
    end

    def end_time
      @start_time + elapsed_in_seconds
    end

    def slow?
      elapsed_in_seconds >= @slow_response_threshold
    end

    def each_operation
      previous_elapsed = 0
      ensure_parse_command
      operation_context_context = {
        :filter_index => 0,
        :drilldown_index => 0,
      }
      @operations.each_with_index do |operation, i|
        relative_elapsed = operation[:elapsed] - previous_elapsed
        relative_elapsed_in_seconds = nano_seconds_to_seconds(relative_elapsed)
        previous_elapsed = operation[:elapsed]
        parsed_operation = {
          :i => i,
          :elapsed => operation[:elapsed],
          :elapsed_in_seconds => nano_seconds_to_seconds(operation[:elapsed]),
          :relative_elapsed => relative_elapsed,
          :relative_elapsed_in_seconds => relative_elapsed_in_seconds,
          :name => operation[:name],
          :context => operation_context(operation[:name],
                                        operation_context_context),
          :n_records => operation[:n_records],
          :slow? => slow_operation?(relative_elapsed_in_seconds),
        }
        yield parsed_operation
      end
    end

    def add_operation(operation)
      @operations << operation
    end

    def operations
      _operations = []
      each_operation do |operation|
        _operations << operation
      end
      _operations
    end

    def select_command?
      command.name == "select"
    end

    private
    def nano_seconds_to_seconds(nano_seconds)
      nano_seconds / 1000.0 / 1000.0 / 1000.0
    end

    def operation_context(label, context)
      case label
      when "filter"
        if @select_command.query and context[:query_used].nil?
          context[:query_used] = true
          "query: #{@select_command.query}"
        else
          index = context[:filter_index]
          context[:filter_index] += 1
          @select_command.conditions[index]
        end
      when "sort"
        @select_command.sortby
      when "score"
        @select_command.scorer
      when "output"
        @select_command.output_columns
      when "drilldown"
        index = context[:drilldown_index]
        context[:drilldown_index] += 1
        @select_command.drilldowns[index]
      else
        nil
      end
    end

    def ensure_parse_command
      return unless select_command?
      @select_command = SelectCommand.parse(@raw_command)
    end

    def slow_operation?(elapsed)
      elapsed >= @slow_operation_threshold
    end
  end

  class SizedGroupedOperations < Array
    def initialize
      @max_size = 10
      @sorter = create_sorter
    end

    def apply_options(options)
      @max_size = options[:n_entries]
    end

    def each
      i = 0
      super do |grouped_operation|
        break if i >= @max_size
        i += 1
        yield(grouped_operation)
      end
    end

    def <<(operation)
      each do |grouped_operation|
        if grouped_operation[:name] == operation[:name] and
            grouped_operation[:context] == operation[:context]
          elapsed = operation[:relative_elapsed_in_seconds]
          grouped_operation[:total_elapsed] += elapsed
          grouped_operation[:n_operations] += 1
          return self
        end
      end

      grouped_operation = {
        :name => operation[:name],
        :context => operation[:context],
        :n_operations => 1,
        :total_elapsed => operation[:relative_elapsed_in_seconds],
      }
      buffer_size = @max_size * 100
      if size < buffer_size
        super(grouped_operation)
        sort_by!(&@sorter)
      else
        if @sorter.call(grouped_operation) < @sorter.call(last)
          super(grouped_operation)
          sort_by!(&@sorter)
          pop
        end
      end
      self
    end

    private
    def create_sorter
      lambda do |grouped_operation|
        -grouped_operation[:total_elapsed]
      end
    end
  end

  class SizedStatistics < Array
    attr_reader :n_responses, :n_slow_responses, :n_slow_operations
    attr_reader :slow_operations, :total_elapsed
    attr_reader :start_time, :last_time
    attr_accessor :slow_operation_threshold, :slow_response_threshold
    def initialize
      @max_size = 10
      self.order = "-elapsed"
      @slow_operation_threshold = 0.1
      @slow_response_threshold = 0.2
      @start_time = nil
      @last_time = nil
      @n_responses = 0
      @n_slow_responses = 0
      @n_slow_operations = 0
      @slow_operations = SizedGroupedOperations.new
      @total_elapsed = 0
      @collect_slow_statistics = true
    end

    def order=(new_order)
      @order = new_order
      @sorter = create_sorter
    end

    def apply_options(options)
      @max_size = options[:n_entries]
      self.order = options[:order]
      @slow_operation_threshold = options[:slow_operation_threshold]
      @slow_response_threshold = options[:slow_response_threshold]
      @collect_slow_statistics = options[:report_summary]
      @slow_operations.apply_options(options)
    end

    def <<(statistic)
      update_statistic(statistic)
      if size < @max_size
        super(statistic)
        sort_by!(&@sorter)
      else
        if @sorter.call(statistic) < @sorter.call(last)
          super(statistic)
          sort_by!(&@sorter)
          pop
        end
      end
      self
    end

    def replace(other)
      super(other)
      sort_by!(&@sorter)
      super(self[0, @max_size])
    end

    def responses_per_second
      _period = period
      if _period.zero?
        0
      else
        @n_responses.to_f / _period
      end
    end

    def slow_response_ratio
      (@n_slow_responses.to_f / @n_responses) * 100
    end

    def period
      if @start_time and @last_time
        @last_time - @start_time
      else
        0
      end
    end

    private
    def create_sorter
      case @order
      when "-elapsed"
        lambda do |statistic|
          -statistic.elapsed
        end
      when "elapsed"
        lambda do |statistic|
          statistic.elapsed
        end
      when "-start-time"
        lambda do |statistic|
          -statistic.start_time
        end
      else
        lambda do |statistic|
          statistic.start_time
        end
      end
    end

    def update_statistic(statistic)
      statistic.slow_response_threshold = @slow_response_threshold
      statistic.slow_operation_threshold = @slow_operation_threshold
      @start_time ||= statistic.start_time
      @start_time = [@start_time, statistic.start_time].min
      @last_time ||= statistic.end_time
      @last_time = [@last_time, statistic.end_time].max
      @n_responses += 1
      @total_elapsed += statistic.elapsed_in_seconds
      return unless @collect_slow_statistics
      if statistic.slow?
        @n_slow_responses += 1
        if statistic.select_command?
          statistic.each_operation do |operation|
            next unless operation[:slow?]
            @n_slow_operations += 1
            @slow_operations << operation
          end
        end
      end
    end
  end

  class QueryLogParser
    attr_reader :statistics
    def initialize(statistics)
      @mutex = Mutex.new
      @statistics = statistics
    end

    def parse(input)
      current_statistics = {}
      input.each_line do |line|
        case line
        when /\A(\d{4})-(\d\d)-(\d\d) (\d\d):(\d\d):(\d\d)\.(\d+)\|(.+?)\|([>:<])/
          year, month, day, hour, minutes, seconds, micro_seconds =
            $1, $2, $3, $4, $5, $6, $7
          context_id = $8
          type = $9
          rest = $POSTMATCH.strip
          time_stamp = Time.local(year, month, day, hour, minutes, seconds,
                                  micro_seconds)
          parse_line(statistics, current_statistics,
                     time_stamp, context_id, type, rest)
        end
      end
    end

    private
    def parse_line(statistics, current_statistics,
                   time_stamp, context_id, type, rest)
      case type
      when ">"
        statistic = Statistic.new(context_id)
        statistic.start(time_stamp, rest)
        current_statistics[context_id] = statistic
      when ":"
        return unless /\A(\d+) (.+)\((\d+)\)/ =~ rest
        elapsed = $1
        name = $2
        n_records = $3.to_i
        statistic = current_statistics[context_id]
        return if statistic.nil?
        statistic.add_operation(:name => name,
                                :elapsed => elapsed.to_i,
                                :n_records => n_records)
      when "<"
        return unless /\A(\d+) rc=(\d+)/ =~ rest
        elapsed = $1
        return_code = $2
        statistic = current_statistics.delete(context_id)
        return if statistic.nil?
        statistic.finish(elapsed.to_i, return_code.to_i)
        statistics << statistic
      end
    end
  end

  class Streamer
    def initialize(reporter)
      @reporter = reporter
    end

    def start
      @reporter.start
    end

    def <<(statistic)
      @reporter.report_statistic(statistic)
    end

    def finish
      @reporter.finish
    end
  end

  class QueryLogReporter
    include Enumerable

    attr_reader :output
    def initialize(statistics)
      @statistics = statistics
      @report_summary = true
      @output = $stdout
    end

    def apply_options(options)
      self.output = options[:output] || @output
      unless options[:report_summary].nil?
        @report_summary = options[:report_summary]
      end
    end

    def output=(output)
      @output = output
      @output = $stdout if @output == "-"
    end

    def each
      @statistics.each do |statistic|
        yield statistic
      end
    end

    def report
      setup do
        report_summary if @report_summary
        report_statistics
      end
    end

    def report_statistics
      each do |statistic|
        report_statistic(statistic)
      end
    end

    private
    def setup
      setup_output do
        start
        yield
        finish
      end
    end

    def setup_output
      original_output = @output
      if @output.is_a?(String)
        File.open(@output, "w") do |output|
          @output = output
          yield(@output)
        end
      else
        yield(@output)
      end
    ensure
      @output = original_output
    end

    def write(*args)
      @output.write(*args)
    end
  end

  class ConsoleQueryLogReporter < QueryLogReporter
    class Color
      NAMES = ["black", "red", "green", "yellow",
               "blue", "magenta", "cyan", "white"]

      attr_reader :name
      def initialize(name, options={})
        @name = name
        @foreground = options[:foreground]
        @foreground = true if @foreground.nil?
        @intensity = options[:intensity]
        @bold = options[:bold]
        @italic = options[:italic]
        @underline = options[:underline]
      end

      def foreground?
        @foreground
      end

      def intensity?
        @intensity
      end

      def bold?
        @bold
      end

      def italic?
        @italic
      end

      def underline?
        @underline
      end

      def ==(other)
        self.class === other and
          [name, foreground?, intensity?,
           bold?, italic?, underline?] ==
          [other.name, other.foreground?, other.intensity?,
           other.bold?, other.italic?, other.underline?]
      end

      def sequence
        sequence = []
        if @name == "none"
        elsif @name == "reset"
          sequence << "0"
        else
          foreground_parameter = foreground? ? 3 : 4
          foreground_parameter += 6 if intensity?
          sequence << "#{foreground_parameter}#{NAMES.index(@name)}"
        end
        sequence << "1" if bold?
        sequence << "3" if italic?
        sequence << "4" if underline?
        sequence
      end

      def escape_sequence
        "\e[#{sequence.join(';')}m"
      end

      def +(other)
        MixColor.new([self, other])
      end
    end

    class MixColor
      attr_reader :colors
      def initialize(colors)
        @colors = colors
      end

      def sequence
        @colors.inject([]) do |result, color|
          result + color.sequence
        end
      end

      def escape_sequence
        "\e[#{sequence.join(';')}m"
      end

      def +(other)
        self.class.new([self, other])
      end

      def ==(other)
        self.class === other and colors == other.colors
      end
    end

    def initialize(statistics)
      super
      @color = :auto
      @reset_color = Color.new("reset")
      @color_schema = {
        :elapsed => {:foreground => :white, :background => :green},
        :time => {:foreground => :white, :background => :cyan},
        :slow => {:foreground => :white, :background => :red},
      }
    end

    def apply_options(options)
      super
      @color = options[:color] || @color
    end

    def report_statistic(statistic)
      @index += 1
      write("%*d) %s" % [@digit, @index, format_heading(statistic)])
      report_parameters(statistic)
      report_operations(statistic)
    end

    def start
      @index = 0
      if @statistics.size.zero?
        @digit = 1
      else
        @digit = Math.log10(@statistics.size).truncate + 1
      end
    end

    def finish
    end

    private
    def setup
      super do
        setup_color do
          yield
        end
      end
    end

    def report_summary
      write("Summary:\n")
      write("  Threshold:\n")
      write("    slow response     : #{@statistics.slow_response_threshold}\n")
      write("    slow operation    : #{@statistics.slow_operation_threshold}\n")
      write("  # of responses      : #{@statistics.n_responses}\n")
      write("  # of slow responses : #{@statistics.n_slow_responses}\n")
      write("  responses/sec       : #{@statistics.responses_per_second}\n")
      write("  start time          : #{format_time(@statistics.start_time)}\n")
      write("  last time           : #{format_time(@statistics.last_time)}\n")
      write("  period(sec)         : #{@statistics.period}\n")
      slow_response_ratio = @statistics.slow_response_ratio
      write("  slow response ratio : %5.3f%%\n" % slow_response_ratio)
      write("  total response time : #{@statistics.total_elapsed}\n")
      report_slow_operations
    end

    def report_slow_operations
      write("  Slow Operations:\n")
      total_elapsed_digit = nil
      total_elapsed_decimal_digit = 6
      n_operations_digit = nil
      @statistics.slow_operations.each do |grouped_operation|
        total_elapsed = grouped_operation[:total_elapsed]
        total_elapsed_digit ||= Math.log10(total_elapsed).truncate + 1
        n_operations = grouped_operation[:n_operations]
        n_operations_digit ||= Math.log10(n_operations).truncate + 1
        parameters = [total_elapsed_digit + 1 + total_elapsed_decimal_digit,
                      total_elapsed_decimal_digit,
                      total_elapsed,
                      total_elapsed / @statistics.total_elapsed * 100,
                      n_operations_digit,
                      n_operations,
                      n_operations / @statistics.n_slow_operations.to_f * 100,
                      grouped_operation[:name],
                      grouped_operation[:context]]
        write("    [%*.*f](%5.2f%%) [%*d](%5.2f%%) %9s: %s\n" % parameters)
      end
    end

    def report_parameters(statistic)
      command = statistic.command
      write("  name: <#{command.name}>\n")
      write("  parameters:\n")
      command.parameters.each do |key, value|
        write("    <#{key}>: <#{value}>\n")
      end
    end

    def report_operations(statistic)
      statistic.each_operation do |operation|
        relative_elapsed_in_seconds = operation[:relative_elapsed_in_seconds]
        formatted_elapsed = "%8.8f" % relative_elapsed_in_seconds
        if operation[:slow?]
          formatted_elapsed = colorize(formatted_elapsed, :slow)
        end
        operation_report = " %2d) %s: %10s" % [operation[:i] + 1,
                                               formatted_elapsed,
                                               operation[:name]]
        if operation[:n_records]
          operation_report << "(%6d)" % operation[:n_records]
        else
          operation_report << "(%6s)" % ""
        end
        context = operation[:context]
        if context
          context = colorize(context, :slow) if operation[:slow?]
          operation_report << " " << context
        end
        write("#{operation_report}\n")
      end
      write("\n")
    end

    def guess_color_availability(output)
      return false unless output.tty?
      case ENV["TERM"]
      when /term(?:-color)?\z/, "screen"
        true
      else
        return true if ENV["EMACS"] == "t"
        false
      end
    end

    def setup_color
      color = @color
      @color = guess_color_availability(@output) if @color == :auto
      yield
    ensure
      @color = color
    end

    def format_heading(statistic)
      formatted_elapsed = colorize("%8.8f" % statistic.elapsed_in_seconds,
                                   :elapsed)
      "[%s-%s (%s)](%d): %s" % [format_time(statistic.start_time),
                                format_time(statistic.end_time),
                                formatted_elapsed,
                                statistic.return_code,
                                statistic.raw_command]
    end

    def format_time(time)
      colorize(time.strftime("%Y-%m-%d %H:%M:%S.%u"), :time)
    end

    def colorize(text, schema_name)
      return text unless @color
      options = @color_schema[schema_name]
      color = Color.new("none")
      if options[:foreground]
        color += Color.new(options[:foreground].to_s, :bold => true)
      end
      if options[:background]
        color += Color.new(options[:background].to_s, :foreground => false)
      end
      "%s%s%s" % [color.escape_sequence, text, @reset_color.escape_sequence]
    end
  end

  class JSONQueryLogReporter < QueryLogReporter
    def report_statistic(statistic)
      write(",") if @index > 0
      write("\n")
      write(format_statistic(statistic))
      @index += 1
    end

    def start
      @index = 0
      write("[")
    end

    def finish
      write("\n")
      write("]\n")
    end

    def report_summary
      # TODO
    end

    private
    def format_statistic(statistic)
      data = {
        "start_time" => statistic.start_time.to_i,
        "end_time" => statistic.end_time.to_i,
        "elapsed" => statistic.elapsed_in_seconds,
        "return_code" => statistic.return_code,
      }
      command = statistic.command
      parameters = command.parameters.collect do |key, value|
        {"key" => key, "value" => value}
      end
      data["command"] = {
        "raw" => statistic.raw_command,
        "name" => command.name,
        "parameters" => parameters,
      }
      operations = []
      statistic.each_operation do |operation|
        operation_data = {}
        operation_data["name"] = operation[:name]
        operation_data["relative_elapsed"] = operation[:relative_elapsed_in_seconds]
        operation_data["context"] = operation[:context]
        operations << operation_data
      end
      data["operations"] = operations
      JSON.generate(data)
    end
  end

  class HTMLQueryLogReporter < QueryLogReporter
    include ERB::Util

    def report_statistic(statistic)
      write(",") if @index > 0
      write("\n")
      write(format_statistic(statistic))
      @index += 1
    end

    def start
      write(header)
    end

    def finish
      write(footer)
    end

    def report_summary
      summary_html = erb(<<-EOH, __LINE__ + 1, binding)
    <h2>Summary</h2>
    <div class="summary">
      <h2>Metrices</h2>
      <dl>
        <dt>slow response threshold</dt>
        <dd><%= h(@statistics.slow_response_threshold) %>sec</dd>
        <dt>slow operation threshold</dt>
        <dd><%= h(@statistics.slow_operation_threshold) %>sec</dd>
        <dt># of responses</dt>
        <dd><%= h(@statistics.n_responses) %></dd>
        <dt># of slow responses</dt>
        <dd><%= h(@statistics.n_slow_responses) %></dd>
        <dt>responses/sec</dt>
        <dd><%= h(@statistics.responses_per_second) %></dd>
        <dt>start time</dt>
        <dd><%= format_time(@statistics.start_time) %></dd>
        <dt>last time</dt>
        <dd><%= format_time(@statistics.last_time) %></dd>
        <dt>period</dt>
        <dd><%= h(@statistics.period) %>sec</dd>
        <dt>slow response ratio</dt>
        <dd><%= h(@statistics.slow_response_ratio) %>%</dd>
        <dt>total response time</dt>
        <dd><%= h(@statistics.total_elapsed) %>sec</dd>
      </dl>
      <h2>Slow Operations</h2>
      <ol>
<% @statistics.slow_operations.each do |grouped_operation| %>
        <li>
          [<%= format_elapsed(grouped_operation[:total_elapsed]) %>]
          (<%= h("%5.2f" % (grouped_operation[:total_elapsed] / @statistics.total_elapsed * 100)) %>%)
          [<%= grouped_operation[:n_operations] %>]
          (<%= h("%5.2f" % (grouped_operation[:n_operations] / @statistics.n_slow_operations.to_f * 100)) %>%)
          <%= span({:class => "name"}, h(grouped_operation[:name])) %>:
          <%= span({:class => "context"}, h(grouped_operation[:context])) %>
        </li>
<% end %>
      </ol>
    </div>
      EOH
      write(summary_html)
    end

    def report_statistics
      write(statistics_header)
      super
      write(statistics_footer)
    end

    def report_statistic(statistic)
      command = statistic.command
      statistic_html = erb(<<-EOH, __LINE__ + 1, binding)
      <div class="statistic-heading">
        <h3>Command</h3>
        <div class="metrics">
          [<%= format_time(statistic.start_time) %>
           -
           <%= format_time(statistic.end_time) %>
           (<%= format_elapsed(statistic.elapsed_in_seconds,
                               :slow? => statistic.slow?) %>)]
          (<%= span({:class => "return-code"}, h(statistic.return_code)) %>)
        </div>
        <%= div({:class => "raw-command"}, h(statistic.raw_command)) %>
      </div>
      <div class="statistic-parameters">
        <h3>Parameters</h3>
        <dl>
          <dt>name</dt>
          <dd><%= h(command.name) %></dd>
<% command.parameters.each do |key, value| %>
          <dt><%= h(key) %></dt>
          <dd><%= h(value) %></dd>
<% end %>
         </dl>
      </div>
      <div class="statistic-operations">
        <h3>Operations</h3>
        <ol>
<% statistic.each_operation do |operation| %>
          <li>
            <%= format_elapsed(operation[:relative_elapsed_in_seconds],
                               :slow? => operation[:slow?]) %>:
            <%= span({:class => "name"}, h(operation[:name])) %>:
            <%= span({:class => "context"}, h(operation[:context])) %>
          </li>
<% end %>
        </ol>
      </div>
      EOH
      write(statistic_html)
    end

    private
    def erb(content, line, _binding=nil)
      _erb = ERB.new(content, nil, "<>")
      eval(_erb.src, _binding || binding, __FILE__, line)
    end

    def header
      erb(<<-EOH, __LINE__ + 1)
<html>
  <head>
    <title>groonga query analyzer</title>
    <style>
span.slow
{
  color: red;
}
    </style>
  </head>
  <body>
      EOH
    end

    def footer
      erb(<<-EOH, __LINE__ + 1)
  </body>
</html>
      EOH
    end

    def statistics_header
      erb(<<-EOH, __LINE__ + 1)
    <h1>groonga query analyzer</h1>
    <h2>Analyze Parameters</h2>
    <dl>
      <dt>slow response threshold</dt>
      <dd><%= h(@statistics.slow_response_threshold) %>sec</dd>
      <dt>slow operation threshold</dt>
      <dd><%= h(@statistics.slow_operation_threshold) %>sec</dd>
    </dl>
    <h2>Slow Queries</h2>
    <div>
      EOH
    end

    def statistics_footer
      erb(<<-EOH, __LINE__ + 1)
    </div>
      EOH
    end

    def format_time(time)
      span({:class => "time"}, h(time.strftime("%Y-%m-%d %H:%M:%S.%u")))
    end

    def format_elapsed(elapsed, options={})
      formatted_elapsed = span({:class => "elapsed"}, h("%8.8f" % elapsed))
      if options[:slow?]
        formatted_elapsed = span({:class => "slow"}, formatted_elapsed)
      end
      formatted_elapsed
    end

    def tag(name, attributes, content)
      html = "<#{name}"
      html_attributes = attributes.collect do |key, value|
        "#{h(key)}=\"#{h(value)}\""
      end
      html << " #{html_attributes.join(' ')}" unless attributes.empty?
      html << ">"
      html << content
      html << "</#{name}>"
      html
    end

    def span(attributes, content)
      tag("span", attributes, content)
    end

    def div(attributes, content)
      tag("div", attributes, content)
    end
  end
end

if __FILE__ == $0
  analyzer = GroongaQueryLogAnaylzer.new
  begin
    analyzer.run
  rescue GroongaQueryLogAnaylzer::Error
    $stderr.puts($!.message)
    exit(false)
  end
end
