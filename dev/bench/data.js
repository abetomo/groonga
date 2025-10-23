window.BENCHMARK_DATA = {
  "lastUpdate": 1761186993154,
  "repoUrl": "https://github.com/abetomo/groonga",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "a.s.takuya1026@gmail.com",
            "name": "takuya kodama",
            "username": "otegami"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31ab0f04b5aafa1068e26b198cdcd1a9a4efe478",
          "message": "package yum: keep SRPM paths for backward compatibility (#2558)\n\nApache Arrow changed SRPM output location from `source/SRPMS/` to\n`Source/Packages/`.\n- ref: https://github.com/apache/arrow/pull/47600\n\nThis change breaks Yum repository compatibility for existed\ndistributions. This commit adds path management after `yum:build` to\nmaintain compatibility:\n\n- For AlmaLinux 10 and earlier and Amazon Linux 2023: Rename SRPMs path\nfrom `Source/Packages/` to `source/` for backward compatibility\n- For AlmaLinux 11 and later: Uses the new `Source/Packages/` path\n- Except for x86 architecture: Removes SRPMs\n\n---------\n\nCo-authored-by: Sutou Kouhei <kou@cozmixng.org>",
          "timestamp": "2025-10-15T21:01:44+09:00",
          "tree_id": "dd1f09aa78ff30d8bc0c9152cd61ddd018960813",
          "url": "https://github.com/abetomo/groonga/commit/31ab0f04b5aafa1068e26b198cdcd1a9a4efe478"
        },
        "date": 1760574493024,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38384345399998665,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016959999999999698 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27572383799997624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01418600000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015653230999930656,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034699999999984743 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015015341000037097,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003720000000000112 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4273885680000262,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015999999999996573 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24793081399997163,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007057000000000077 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14430532899984883,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007880999999999971 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016811965999977474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018800000000000205 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016638101000012284,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015499999999999958 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0708992799999919,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00860599999999985 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07255081399995333,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0068870000000000875 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01742476499998702,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014820000000002886 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025871092000045337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001492999999999911 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "committer": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "distinct": true,
          "id": "e3932489370eb94bb3ad08e48cc10d4e95872b10",
          "message": "wip",
          "timestamp": "2025-10-23T11:26:25+09:00",
          "tree_id": "6635c53130b6993146666b982e0473f0dfbf3662",
          "url": "https://github.com/abetomo/groonga/commit/e3932489370eb94bb3ad08e48cc10d4e95872b10"
        },
        "date": 1761186992280,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3797730279998177,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017815000000000247 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29542873600007624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01971800000000018 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015467014000023482,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000334000000000112 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015490331000137303,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003950000000000897 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4873799399999825,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019800000000005924 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25768905199947767,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009878999999999943 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13925774100061972,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005770999999999915 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.0168354399997952,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016479999999999273 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016847303999838914,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016700000000002824 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06977880499948697,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007878999999999886 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07618551099972137,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008347999999999633 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017122887000141418,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014710000000003054 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025474175999988802,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018270000000009112 s\nthreads: undefined"
          }
        ]
      }
    ]
  }
}