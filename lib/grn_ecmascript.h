#define GRN_EXPR_TOKEN_START_OUTPUT_COLUMNS             1
#define GRN_EXPR_TOKEN_START_ADJUSTER                   2
#define GRN_EXPR_TOKEN_START_SORT_KEYS                  3
#define GRN_EXPR_TOKEN_START_OPTIONS                    4
#define GRN_EXPR_TOKEN_START_QUERY_NO_SYNTAX_ERROR      5
#define GRN_EXPR_TOKEN_LOGICAL_AND                      6
#define GRN_EXPR_TOKEN_LOGICAL_AND_NOT                  7
#define GRN_EXPR_TOKEN_LOGICAL_OR                       8
#define GRN_EXPR_TOKEN_NEGATIVE                         9
#define GRN_EXPR_TOKEN_QSTRING                         10
#define GRN_EXPR_TOKEN_PARENL                          11
#define GRN_EXPR_TOKEN_PARENR                          12
#define GRN_EXPR_TOKEN_ADJUST                          13
#define GRN_EXPR_TOKEN_RELATIVE_OP                     14
#define GRN_EXPR_TOKEN_IDENTIFIER                      15
#define GRN_EXPR_TOKEN_BRACEL                          16
#define GRN_EXPR_TOKEN_BRACER                          17
#define GRN_EXPR_TOKEN_EVAL                            18
#define GRN_EXPR_TOKEN_COMMA                           19
#define GRN_EXPR_TOKEN_ASSIGN                          20
#define GRN_EXPR_TOKEN_STAR_ASSIGN                     21
#define GRN_EXPR_TOKEN_SLASH_ASSIGN                    22
#define GRN_EXPR_TOKEN_MOD_ASSIGN                      23
#define GRN_EXPR_TOKEN_PLUS_ASSIGN                     24
#define GRN_EXPR_TOKEN_MINUS_ASSIGN                    25
#define GRN_EXPR_TOKEN_SHIFTL_ASSIGN                   26
#define GRN_EXPR_TOKEN_SHIFTR_ASSIGN                   27
#define GRN_EXPR_TOKEN_SHIFTRR_ASSIGN                  28
#define GRN_EXPR_TOKEN_AND_ASSIGN                      29
#define GRN_EXPR_TOKEN_XOR_ASSIGN                      30
#define GRN_EXPR_TOKEN_OR_ASSIGN                       31
#define GRN_EXPR_TOKEN_QUESTION                        32
#define GRN_EXPR_TOKEN_COLON                           33
#define GRN_EXPR_TOKEN_BITWISE_OR                      34
#define GRN_EXPR_TOKEN_BITWISE_XOR                     35
#define GRN_EXPR_TOKEN_BITWISE_AND                     36
#define GRN_EXPR_TOKEN_EQUAL                           37
#define GRN_EXPR_TOKEN_NOT_EQUAL                       38
#define GRN_EXPR_TOKEN_LESS                            39
#define GRN_EXPR_TOKEN_GREATER                         40
#define GRN_EXPR_TOKEN_LESS_EQUAL                      41
#define GRN_EXPR_TOKEN_GREATER_EQUAL                   42
#define GRN_EXPR_TOKEN_IN                              43
#define GRN_EXPR_TOKEN_MATCH                           44
#define GRN_EXPR_TOKEN_NEAR                            45
#define GRN_EXPR_TOKEN_NEAR_NO_OFFSET                  46
#define GRN_EXPR_TOKEN_NEAR_PHRASE                     47
#define GRN_EXPR_TOKEN_ORDERED_NEAR_PHRASE             48
#define GRN_EXPR_TOKEN_NEAR_PHRASE_PRODUCT             49
#define GRN_EXPR_TOKEN_ORDERED_NEAR_PHRASE_PRODUCT     50
#define GRN_EXPR_TOKEN_SIMILAR                         51
#define GRN_EXPR_TOKEN_TERM_EXTRACT                    52
#define GRN_EXPR_TOKEN_QUORUM                          53
#define GRN_EXPR_TOKEN_LCP                             54
#define GRN_EXPR_TOKEN_PREFIX                          55
#define GRN_EXPR_TOKEN_SUFFIX                          56
#define GRN_EXPR_TOKEN_REGEXP                          57
#define GRN_EXPR_TOKEN_SHIFTL                          58
#define GRN_EXPR_TOKEN_SHIFTR                          59
#define GRN_EXPR_TOKEN_SHIFTRR                         60
#define GRN_EXPR_TOKEN_PLUS                            61
#define GRN_EXPR_TOKEN_MINUS                           62
#define GRN_EXPR_TOKEN_STAR                            63
#define GRN_EXPR_TOKEN_SLASH                           64
#define GRN_EXPR_TOKEN_MOD                             65
#define GRN_EXPR_TOKEN_DELETE                          66
#define GRN_EXPR_TOKEN_INCR                            67
#define GRN_EXPR_TOKEN_DECR                            68
#define GRN_EXPR_TOKEN_NOT                             69
#define GRN_EXPR_TOKEN_BITWISE_NOT                     70
#define GRN_EXPR_TOKEN_EXACT                           71
#define GRN_EXPR_TOKEN_PARTIAL                         72
#define GRN_EXPR_TOKEN_UNSPLIT                         73
#define GRN_EXPR_TOKEN_DECIMAL                         74
#define GRN_EXPR_TOKEN_HEX_INTEGER                     75
#define GRN_EXPR_TOKEN_STRING                          76
#define GRN_EXPR_TOKEN_BOOLEAN                         77
#define GRN_EXPR_TOKEN_NULL                            78
#define GRN_EXPR_TOKEN_BRACKETL                        79
#define GRN_EXPR_TOKEN_BRACKETR                        80
#define GRN_EXPR_TOKEN_DOT                             81
#define GRN_EXPR_TOKEN_NONEXISTENT_COLUMN              82
