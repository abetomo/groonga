window.BENCHMARK_DATA = {
  "lastUpdate": 1772801419134,
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
          "id": "fdbaab0cd86353abda83f1ff0be837a7f2d937a4",
          "message": "util: exclusive lock on grn_path_copy()\n\nCopying in a multi process may cause corruption, so it is locked.",
          "timestamp": "2025-10-23T12:20:44+09:00",
          "tree_id": "6aea62f33b5cc88da8d584268b2bc354cabb792b",
          "url": "https://github.com/abetomo/groonga/commit/fdbaab0cd86353abda83f1ff0be837a7f2d937a4"
        },
        "date": 1761190383972,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37340927000013835,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01720999999999992 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27417236500002673,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014425000000000285 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015109385999949154,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038900000000019475 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01542023299975881,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005399999999999849 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5046950749999723,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017200000000014426 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24299152200001117,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006794000000000189 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1393155719998731,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006491999999999831 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.005254826000168578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013780000000003234 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016789566999932504,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016900000000005522 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06834536700011995,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006973000000000201 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07386927599986848,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007454000000000294 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016514672000198516,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013910000000003642 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017556911999918157,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017609999999997905 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abe@enzou.tokyo",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d12f4f28a3b9d5e6a258125f129df69dd6554d7",
          "message": "Update lib/util.c\n\nCo-authored-by: Sutou Kouhei <kou@cozmixng.org>",
          "timestamp": "2025-10-23T13:06:37+09:00",
          "tree_id": "501ca95fb738dc94a14575e2e2641ef0af9062e3",
          "url": "https://github.com/abetomo/groonga/commit/0d12f4f28a3b9d5e6a258125f129df69dd6554d7"
        },
        "date": 1761192780411,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3874703829998225,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020103999999999886 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2683303930001557,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012980999999999965 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015667273000190107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003359999999996144 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015254853999977058,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039300000000025426 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4415789979999545,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017500000000014726 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24406651000003876,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006694000000000214 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13793054099983237,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005421000000000009 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016690271000015855,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016510000000000136 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016501697999729004,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015459999999998253 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0665896849998262,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007564999999999919 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0719197759999588,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0072879999999992395 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017301109999948494,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001524999999999943 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026551379999887104,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018350000000000033 s\nthreads: undefined"
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
          "id": "71d11610060a5923799a8ba9c14856151f2da60c",
          "message": "Enable tests",
          "timestamp": "2025-10-23T14:21:03+09:00",
          "tree_id": "278541a1a8a64cbeec0663046982c012b856e174",
          "url": "https://github.com/abetomo/groonga/commit/71d11610060a5923799a8ba9c14856151f2da60c"
        },
        "date": 1761197152120,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37959186599994155,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016445000000000265 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2808681550001779,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016796999999999368 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015700038999966637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038700000000005397 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.017016739999974106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042999999999998595 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6008175170000527,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016700000000008375 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24319039900007056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005743000000000165 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.138497326999925,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00601700000000005 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016390003999958935,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001480999999999899 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01662205700006325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001560999999999202 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0662922480000816,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007571999999999926 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0722080159999905,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007380999999999888 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017375309999977162,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017240000000002809 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017421715000011773,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016660000000006114 s\nthreads: undefined"
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
          "id": "865b4dc73240b3a1482d766c1c01d7ef5124571f",
          "message": "TokenLanguageModelKNN: Improve error handling\n\nUsing it with `tokenize` command causes a crash, so we added a check for `source_column`.\n\nThe following error occurred:\n\n```\n> tokenize \\\n  --tokenizer 'TokenLanguageModel( \\\n    \"model\", \"hf:///groonga/all-MiniLM-L6-v2-Q4_K_M-GGUF\", \\\n    \"code_column\", \"dummy\")' \\\n  --string \"Hello World\"\nAborted (core dumped)\n```",
          "timestamp": "2025-10-29T09:36:45+09:00",
          "tree_id": "24cf152d45087dfeba90664eeaa3609a12a49424",
          "url": "https://github.com/abetomo/groonga/commit/865b4dc73240b3a1482d766c1c01d7ef5124571f"
        },
        "date": 1761698955540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38417278599979454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018459999999999754 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2703242219998856,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013219999999999843 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01715870000009545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.003546999999999939 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015325521999898228,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040300000000015324 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4619132310000396,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001829999999998222 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25030109900012576,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006013000000000074 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13831602700020085,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006103999999999943 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016914890999828458,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013639999999999486 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016638023000041358,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016289999999997695 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0612635830001409,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006840999999999972 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0607534640000722,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070870000000002875 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017417333000025792,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016380000000001116 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.016953376999936154,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013960000000003414 s\nthreads: undefined"
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
          "id": "9ed126181c46fece6a8a0613e7e1ef3349e0e60c",
          "message": "TokenLanguageModelKNN: Improve error handling\n\nUsing it with `tokenize` command causes a crash, so we added a check for `source_column`.\n\nThe following error occurred:\n\n```\n> tokenize \\\n  --tokenizer 'TokenLanguageModel( \\\n    \"model\", \"hf:///groonga/all-MiniLM-L6-v2-Q4_K_M-GGUF\", \\\n    \"code_column\", \"dummy\")' \\\n  --string \"Hello World\"\nAborted (core dumped)\n```",
          "timestamp": "2025-10-29T09:46:06+09:00",
          "tree_id": "566db7b49f4c6bd113214831b662fc89a638a5b5",
          "url": "https://github.com/abetomo/groonga/commit/9ed126181c46fece6a8a0613e7e1ef3349e0e60c"
        },
        "date": 1761699639427,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37157931600000893,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017829999999999874 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2815938620000793,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017535000000000495 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016041997999934665,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044299999999986017 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015387957000086772,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037199999999992794 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6743349010000088,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016299999999999648 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24444464599997673,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007405000000000064 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13950103600001285,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007269999999999777 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01646743300000253,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014939999999997455 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016864363000024696,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016259999999997665 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06859931600007485,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010928999999999384 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06422904300006849,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008336000000000593 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017991519000020162,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001790000000000208 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02525301700001137,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019100000000001616 s\nthreads: undefined"
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
          "id": "5906d57efbbaadb8c5cb19e89973d45fb56e2ff8",
          "message": "groonga: add \"faiss\" in the --version output",
          "timestamp": "2025-10-29T11:08:04+09:00",
          "tree_id": "470f5894aa0c7868b5e9a7018f5155b5f76b5f2a",
          "url": "https://github.com/abetomo/groonga/commit/5906d57efbbaadb8c5cb19e89973d45fb56e2ff8"
        },
        "date": 1761704149174,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3471483009998906,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014966999999999911 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2448408860000768,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015928000000000192 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01750021899999865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00046400000000001995 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.016183601999898656,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036400000000053057 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8922990270000355,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015499999999989134 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21835337600009552,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008208000000000222 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12778339700003016,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00784 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.008272011999963524,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012219999999999454 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.015701025999987905,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016150000000003661 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0681298140001445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011227999999999967 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.062449098000115555,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00843799999999996 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0191480319999755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014480000000001714 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.016317511999886847,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001480000000000009 s\nthreads: undefined"
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
          "id": "9383483baa410083c2e6bd1b0b60af0a72e82279",
          "message": "grn_path_copy: Fix `system call error: File exists`\n\nAn error occurs when saving the model cache in language_model.\n\n```\n```\n\nIf the file already exists, do nothing and handle it as a success.",
          "timestamp": "2025-10-29T11:34:03+09:00",
          "tree_id": "99a29fbb346a69c351fdf02d13a2536f3abe4639",
          "url": "https://github.com/abetomo/groonga/commit/9383483baa410083c2e6bd1b0b60af0a72e82279"
        },
        "date": 1761706055299,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3823799260001124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018649999999999986 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2746098090001965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016109000000000345 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015636264000022493,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034700000000009723 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01499746699988691,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003230000000000177 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.476563280999983,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001530000000000975 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2380905210001174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006573999999999802 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13432096600001842,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005888000000000157 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016129826999986108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014540000000002051 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016374338000048283,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00154299999999985 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06508773299998438,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009344000000000324 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06454500899997129,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0066300000000002746 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017449074000012388,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013919999999998933 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026026964000038788,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015949999999998465 s\nthreads: undefined"
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
          "id": "429c91d1cde8ddb4f8f16bab0b23fd4b8ce0b1c3",
          "message": "grn_path_copy: Fix `system call error: File exists`\n\nAn error occurs when saving the model cache in language_model.\n\n```\n|e| system call error: File exists: [path][copy] failed to open destination path: <path/src> -> <path/dest>\n```\n\nIf the file already exists, do nothing and handle it as a success.",
          "timestamp": "2025-10-29T11:42:22+09:00",
          "tree_id": "99a29fbb346a69c351fdf02d13a2536f3abe4639",
          "url": "https://github.com/abetomo/groonga/commit/429c91d1cde8ddb4f8f16bab0b23fd4b8ce0b1c3"
        },
        "date": 1761706308964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3659281239999359,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015637000000000192 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2751975179999704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016379000000000823 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015465771000037876,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037899999999968514 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014954638999938652,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033099999999963714 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.578788980000013,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003180000000002625 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2376458689999481,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006258999999999959 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13325205000001006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005562999999999929 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016225506000125733,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013679999999996195 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016435580000006667,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015010000000003076 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06376323999995748,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007428999999999852 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06490460900005246,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007332999999999257 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01727985400009402,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014720000000003064 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025767973000029087,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014500000000003954 s\nthreads: undefined"
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
          "id": "1366fbe72ec27612fb06f9d68e274feba04dcf13",
          "message": "Rename TokenLanguageModel to TokenLanguageModelKNN\n\nSince the `TokenLanguageModel` is too generic, we will rename it to `TokenLanguageModelKNN` with `KNN` added.",
          "timestamp": "2025-10-29T17:09:30+09:00",
          "tree_id": "3ecaaa51266d4bba82af8df7fba14a271a1b4341",
          "url": "https://github.com/abetomo/groonga/commit/1366fbe72ec27612fb06f9d68e274feba04dcf13"
        },
        "date": 1761725895227,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37049866399996745,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01689099999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26058610199999066,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012112000000000012 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014744317999884515,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003789999999999072 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014893797999945946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039600000000000746 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4164286679999805,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014399999999997748 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24229181600009042,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006698000000000176 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13394425399991405,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005665999999999366 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016973892000066826,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015390000000000403 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01646619599995347,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017300000000000093 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.059474617999910606,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00703299999999972 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06053111800002853,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005842999999999626 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016962713999930656,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013519999999998256 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019693813999936083,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015650000000002606 s\nthreads: undefined"
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
          "id": "763fbc42f2477ae1d214a642fa590c771840e1cd",
          "message": "doc: Add plugins/language_model/knn\n\n* `language_model_knn` function\n* `TokenLanguageModelKNN` tokenizer",
          "timestamp": "2025-10-30T09:06:38+09:00",
          "tree_id": "315e8ac96233d4e5dc309b9b21f7c80c8ec35630",
          "url": "https://github.com/abetomo/groonga/commit/763fbc42f2477ae1d214a642fa590c771840e1cd"
        },
        "date": 1761783286092,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3790287520001243,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018999000000000016 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2757517050000615,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016254000000000213 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0154850940000415,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033899999999970065 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015148885999963113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00032099999999987694 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3614182620000292,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001740000000001185 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24100264100007962,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006457999999999978 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13365851900005055,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005323000000000036 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.0170604529999423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015820000000000833 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0164931410000122,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015449999999998243 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06350190399996336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007198000000000232 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06299925100006476,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006987000000000271 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01717395899999019,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016700000000008097 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02512442599993392,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016660000000006114 s\nthreads: undefined"
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
          "id": "83e400f979df6c45420fae8cccd0628fe0fd6d91",
          "message": "doc: Add plugins/language_model/knn\n\n* `language_model_knn` function\n* `TokenLanguageModelKNN` tokenizer",
          "timestamp": "2025-10-30T10:51:10+09:00",
          "tree_id": "9eeda3b200d734e9ada198b37104a67cbf93e638",
          "url": "https://github.com/abetomo/groonga/commit/83e400f979df6c45420fae8cccd0628fe0fd6d91"
        },
        "date": 1761789353689,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3767560519999904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018750999999999907 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2819526470000824,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017302000000000234 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01840822500000172,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00334799999999999 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015826439000022674,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004450000000006116 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5887494060000051,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016000000000013226 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25224937499993416,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008974999999999886 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13809720599999764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007232999999999906 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017182388999941622,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017100000000001003 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017157773000008092,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015390000000004012 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06436115999997583,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0075030000000001346 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06808151100000259,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007949000000000678 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0177877869999179,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014379999999999116 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025986930999920332,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015310000000000046 s\nthreads: undefined"
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
          "id": "d857eaff661778dfaaad3a64bfc498edb1001f08",
          "message": "doc: Add plugins/language_model/knn\n\n* `language_model_knn` function\n* `TokenLanguageModelKNN` tokenizer",
          "timestamp": "2025-10-30T10:55:31+09:00",
          "tree_id": "1a1a1fa4d8dc36c3da9e8970032398595984a7c8",
          "url": "https://github.com/abetomo/groonga/commit/d857eaff661778dfaaad3a64bfc498edb1001f08"
        },
        "date": 1761789867577,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.376269509999986,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016282999999999853 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2649192970000058,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012523999999999924 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015121494000027269,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003720000000006496 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014998933000072157,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036099999999997245 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.505211638999981,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016700000000000048 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2426489110000034,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006311999999999984 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13497443100004602,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006525000000000114 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01625774500001853,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015070000000000916 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016300160999890068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014909999999998813 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06272543299991185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069600000000001605 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06369824999995899,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008526000000000228 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01707628299999442,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016450000000003406 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024469392000071366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016189999999997318 s\nthreads: undefined"
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
          "id": "32eb442a7c932ab8c70daa6a3d916bcf29b2b709",
          "message": "doc: Add plugins/language_model/knn\n\n* `language_model_knn` function\n* `TokenLanguageModelKNN` tokenizer",
          "timestamp": "2025-10-30T14:45:09+09:00",
          "tree_id": "ad9b94e0f53db21faf7afb92f2b129549607ffa6",
          "url": "https://github.com/abetomo/groonga/commit/32eb442a7c932ab8c70daa6a3d916bcf29b2b709"
        },
        "date": 1761803510268,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39400287099999787,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02195300000000014 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26758795900013865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012801999999999536 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01814642699991964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004260000000001485 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.00872772799999666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003539999999994381 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.589463880999972,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016100000000013326 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25278706900002135,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010654000000000191 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14158456400014074,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0073090000000003985 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01803944399989632,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001494999999999691 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.019704995999973107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015769999999996898 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06760439500004622,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008358999999999533 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0659932120000235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007051999999999781 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018815049000011186,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014290000000003467 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.023485934999996516,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017049999999998455 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abe@enzou.tokyo",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "committer": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "distinct": true,
          "id": "a717f961c0d7c1d2c742df5365a6195904f01d66",
          "message": "Update doc/locale/ja/LC_MESSAGES/news/15.po\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2025-10-31T13:54:11+09:00",
          "tree_id": "1b2ae8d0b47fd3ddf7bc253a4e42e6b1e04ab508",
          "url": "https://github.com/abetomo/groonga/commit/a717f961c0d7c1d2c742df5365a6195904f01d66"
        },
        "date": 1761887044672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3879330440000217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02137299999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2639820180000356,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012710000000000055 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015574710000009873,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003959999999999797 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.0158125770000197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003769999999998497 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4634506180000244,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017599999999995397 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23719479600015347,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0062480000000000036 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13404570900013368,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005642000000000147 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016465126000070995,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013829999999997733 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016984864000050948,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014169999999997518 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06523637900011181,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00904099999999966 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06409367699995983,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006889000000000006 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017171632999975373,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016250000000000708 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01857287199993607,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015360000000001484 s\nthreads: undefined"
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
          "id": "bde9523602baf20d95d91503d844c95cb2a0f9dc",
          "message": "language_model_knn: support `k` option\n\nSpecify the number of records to return using `k` option.",
          "timestamp": "2025-11-07T10:31:17+09:00",
          "tree_id": "d6bdbcb51ad64137283c3e6cf71c02e52ab54dce",
          "url": "https://github.com/abetomo/groonga/commit/bde9523602baf20d95d91503d844c95cb2a0f9dc"
        },
        "date": 1762479729008,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4043786830000613,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022598000000000423 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2915437059998567,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018810000000000243 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.017289639000068746,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000492000000000159 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02279308800001445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004699999999999982 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6869657080000025,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021599999999979969 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2515824589999056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008936000000000083 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14647704800000838,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008001000000000313 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.018180584000049294,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016630000000001643 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01705572700001312,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016359999999997488 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06787843899996915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00815899999999993 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07044640799989565,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00875899999999924 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.019169976999990013,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018359999999996157 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018827237999971658,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017449999999997745 s\nthreads: undefined"
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
          "id": "416a5a65ed9a238fcbcc0b11713251585c54d714",
          "message": "language_model_knn: support `k` option\n\nSpecify the number of records to return using `k` option.",
          "timestamp": "2025-11-07T11:06:03+09:00",
          "tree_id": "1d919ab4bb3fca90d957b14d58cebcb27cb0e1e1",
          "url": "https://github.com/abetomo/groonga/commit/416a5a65ed9a238fcbcc0b11713251585c54d714"
        },
        "date": 1762482137199,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37071373999998514,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015910999999999828 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2937369870000168,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019446999999999853 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01532749600002603,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037000000000037003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015177307999977074,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004219999999998947 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4873932270000125,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018000000000029104 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2572027989999981,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008314999999999906 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14176972999999293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006389999999999979 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01719051700001728,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017570000000000086 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01652628200002937,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014460000000003081 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06331939599996872,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074700000000001016 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06754206899995552,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00884200000000035 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017044956999967553,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001537000000000427 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026384541000055606,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001673999999999981 s\nthreads: undefined"
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
          "id": "7872d94c64fe5699670408cc5876a7c07f81574f",
          "message": "Update `k`",
          "timestamp": "2025-11-07T17:08:25+09:00",
          "tree_id": "87a42ebb475639029f90dfdca8372e9b574d0d69",
          "url": "https://github.com/abetomo/groonga/commit/7872d94c64fe5699670408cc5876a7c07f81574f"
        },
        "date": 1762503176608,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3404266589999452,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010570999999999942 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2450878490001287,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008392000000000163 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014996151999923768,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031300000000022976 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013108615000021473,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003580000000003858 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6034970099999555,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016599999999990234 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22421486200005347,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007829999999999879 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11935767300008138,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005007999999999901 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016715157999954044,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013229999999998104 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016883368000037535,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012379999999997948 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06505248999997093,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006324999999999886 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05662685999993755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006179000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01868115899986833,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013010000000002186 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02651463100011142,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015370000000003436 s\nthreads: undefined"
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
          "id": "8bd49a5adc61ce3690704de4a308498b3048007f",
          "message": "Update the model to be used",
          "timestamp": "2025-11-10T16:58:42+09:00",
          "tree_id": "c79e980ed42e37a3d16da23661be0ab2834d2741",
          "url": "https://github.com/abetomo/groonga/commit/8bd49a5adc61ce3690704de4a308498b3048007f"
        },
        "date": 1762762002368,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37229998400005115,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015465999999999924 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28995454099995754,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01877600000000018 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015191621999974814,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003709999999998992 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01560600800002021,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038100000000024226 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4637343409999914,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000163000000000052 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24723973599998317,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006680999999999798 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1399750329999847,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005995999999999779 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016652647999990222,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015259999999999163 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017029763999971692,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016529999999997658 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06718047100000035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007452000000000042 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06221089299995697,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007471000000000394 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.020869000999965692,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016240000000003751 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026288552000039545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015530000000006094 s\nthreads: undefined"
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
          "id": "beb12ee1ab773e3870fd71c30f11f57ef2951aa1",
          "message": "Update the test",
          "timestamp": "2025-11-10T17:28:25+09:00",
          "tree_id": "bac7e491458b77cd4dfee27eefd7728530548fe0",
          "url": "https://github.com/abetomo/groonga/commit/beb12ee1ab773e3870fd71c30f11f57ef2951aa1"
        },
        "date": 1762763631843,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.354576654999903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014910999999999855 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.24482940000001463,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00885800000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016050266000007696,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003780000000002115 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012735511000045108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0002829999999997418 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6343513559999963,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016300000000006587 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21377792300003762,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006788999999999892 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11994202600004655,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005834000000000186 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01648953699998401,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001199999999999729 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014382119000003968,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001466999999999774 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06610486199997467,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0078089999999998785 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05881263799992098,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008206999999999784 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0181757950000474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013749999999998902 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.020889839999995274,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014799999999999813 s\nthreads: undefined"
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
          "id": "33e3aaab89803d0f4045f574186d649b3e5dad5b",
          "message": "Set `k` to the default value, when negative",
          "timestamp": "2025-11-10T17:57:33+09:00",
          "tree_id": "75894eab98691a5c4dae8fcdd240c9e6287cf96c",
          "url": "https://github.com/abetomo/groonga/commit/33e3aaab89803d0f4045f574186d649b3e5dad5b"
        },
        "date": 1762765697935,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39321391099997527,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019761999999999988 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28022517900001276,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01575299999999999 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015386864000021205,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003910000000000302 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01512466199994833,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037699999999998846 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.466339669000007,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016099999999999448 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2449791790000404,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005619000000000082 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14072048099998824,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005926000000000098 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01679839999997057,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001524999999999943 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01672460000000342,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015550000000002784 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06387843100000623,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007137000000000185 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06268605100004265,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006625999999999355 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017489083999976174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015020000000001976 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017581717000012986,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001487999999999795 s\nthreads: undefined"
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
          "id": "2353986dd8c5504bbcc43512130d4c44985f4db8",
          "message": "Change the type of `k` option to INT32",
          "timestamp": "2025-11-11T14:56:14+09:00",
          "tree_id": "b91b9a975a1154bfd7d4ac876ae1190ced4bc270",
          "url": "https://github.com/abetomo/groonga/commit/2353986dd8c5504bbcc43512130d4c44985f4db8"
        },
        "date": 1762840987097,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.340987048000045,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011843000000000312 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.24400309400004971,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009055999999999786 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015912117999960174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000380000000000269 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.019465846000002784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004419999999998314 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7106505560000187,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016400000000021953 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22207534400001805,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008987999999999913 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12094682000002877,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006407000000000093 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01729564599997957,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013540000000003133 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014006521999988308,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012239999999999474 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06761269600002606,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006864999999999996 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.059130020999930366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007482999999999837 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017502135000029284,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012579999999993013 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02783906500002331,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001282999999999923 s\nthreads: undefined"
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
          "id": "2f786962a6d0ac015013f57682fbb15a3ff6b2f3",
          "message": "Change `k` to behave the same as `limit`",
          "timestamp": "2025-11-13T18:58:01+09:00",
          "tree_id": "886788696a8ea9f8d270aa66ea1ae178792c6d4e",
          "url": "https://github.com/abetomo/groonga/commit/2f786962a6d0ac015013f57682fbb15a3ff6b2f3"
        },
        "date": 1763029159736,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38797245999992924,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020225999999999883 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2813825099999008,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01614599999999969 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01642775800007712,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035900000000022025 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021126416000015524,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003890000000001115 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5376462840000045,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020700000000006824 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2460919229999945,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0062470000000000026 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14257369899996775,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00581699999999985 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016905326000028253,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015319999999998668 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01681446500003858,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014259999999999273 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06526564900008225,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006817000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06111105699989139,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007817999999999214 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017317639999987477,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013870000000006655 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026349933000005876,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015329999999993682 s\nthreads: undefined"
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
          "id": "cf0937f408b7b217548fbb3d3cdfaf6f4c13d0df",
          "message": "Improve `k` setting logic",
          "timestamp": "2025-11-18T11:23:58+09:00",
          "tree_id": "c0c9e56a2a4519bf14129f5442edb43b29058a7c",
          "url": "https://github.com/abetomo/groonga/commit/cf0937f408b7b217548fbb3d3cdfaf6f4c13d0df"
        },
        "date": 1763433166695,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3560696969998389,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01341799999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2622202779998588,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012395999999999838 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015678309000008994,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035600000000002296 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013761599000190472,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035999999999979104 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6493364110000357,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001850000000000046 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2152422739998201,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008160000000000077 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11970091499995306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00584599999999999 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01730620700016061,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001413999999999943 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014214633999927173,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013510000000001576 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.063628061999907,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006434000000000467 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06111833400007072,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00833299999999966 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016244107000261465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001419999999999727 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.023040366999907747,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014259999999996914 s\nthreads: undefined"
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
          "id": "c91ac2ced66f9d86146998fb16249b318dba33fe",
          "message": "Add `x_prefix` options",
          "timestamp": "2025-11-19T11:03:38+09:00",
          "tree_id": "71e708d5f31ee8bc3033da0c904c70c9212cbb02",
          "url": "https://github.com/abetomo/groonga/commit/c91ac2ced66f9d86146998fb16249b318dba33fe"
        },
        "date": 1763518261731,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3557156919999329,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013939999999999855 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2404673960000423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009590000000000168 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01521768999998585,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044800000000014273 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.019855501999984426,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037500000000023626 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7008547219999741,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016399999999976156 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.20415889700001344,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007826999999999931 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11505138100005752,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007558000000000065 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01912215199996581,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001418999999999837 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014647675000048821,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013089999999998936 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06902947200001108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007511999999999824 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05946291600002951,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007529000000000438 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01737934100003713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001366999999999674 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.027441862999921796,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016789999999998195 s\nthreads: undefined"
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
          "id": "4b96ee8036016af8b84a022fcd18240b88487d54",
          "message": "doc TokenLanguageModelKNN: Add (passage|query)_prefix option",
          "timestamp": "2025-11-28T13:39:13+09:00",
          "tree_id": "a9db3112f9adfd336cda369207dabe71c1f25583",
          "url": "https://github.com/abetomo/groonga/commit/4b96ee8036016af8b84a022fcd18240b88487d54"
        },
        "date": 1764305456585,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3573457659999235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017487999999999865 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27982358899987503,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01689699999999994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015870350000000144,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036400000000003097 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.017933153000001312,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038800000000005497 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5160980399999744,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020999999999998797 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22412996599996404,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005496999999999794 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13178150999988247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004733999999999655 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016781276000017442,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016230000000002909 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016855542000030255,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016180000000002859 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06224335100000644,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074839999999996715 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06477701399995794,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007063000000001374 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017320523000080357,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015379999999999838 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017360721000045487,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015129999999997923 s\nthreads: undefined"
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
          "id": "77c9a3f57ee9baaceefecc21bf4a84043f0920d7",
          "message": "doc TokenLanguageModelKNN: Add centroid_column option",
          "timestamp": "2025-11-28T18:29:18+09:00",
          "tree_id": "b34ee040a48e452093bc588a8004f5cdc1ca84f3",
          "url": "https://github.com/abetomo/groonga/commit/77c9a3f57ee9baaceefecc21bf4a84043f0920d7"
        },
        "date": 1764322548527,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37156768800014106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02038100000000012 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27666540099994563,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01632699999999984 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015289981000137232,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044299999999999895 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015151281999919775,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035399999999952136 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6022882969999728,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001630000000001075 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22615148399984264,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008320999999999981 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13767119799979355,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009860999999999745 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017390120999948522,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016149999999998665 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017087618000005023,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018150000000000943 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06172852200018042,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006817000000000031 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06533845099977498,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007946999999999343 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017000628000118923,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001468999999999887 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02612410400013232,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016329999999999956 s\nthreads: undefined"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79c23a0e33a2446f3059dbb0066c263d6379e8e9",
          "message": "doc column_create: Add progress_log_level option (#2666)",
          "timestamp": "2025-12-01T09:31:14+09:00",
          "tree_id": "31aa9fea01c735c412dd37faf7870fbd86af827b",
          "url": "https://github.com/abetomo/groonga/commit/79c23a0e33a2446f3059dbb0066c263d6379e8e9"
        },
        "date": 1764549585089,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36958360899996023,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019738000000000144 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28400075000001834,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017929000000000223 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016215357999953994,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044999999999970064 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01584328799992818,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041100000000002246 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.686305080000011,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019200000000019202 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22825065199998562,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009925000000000364 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13585754500007852,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0067500000000000615 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017541025000014088,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020419999999999883 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017061064000017723,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016249999999998765 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06957164400000693,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013607999999999926 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06767542200003618,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008917999999999898 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017924114999971152,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015640000000003984 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01734506199994712,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014190000000000036 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael@michaelcho.dev",
            "name": "Michael Cho",
            "username": "cho-m"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54be212327780e2c85fb23c15f89e29b03f63554",
          "message": "cmake libedit: include cmake file in release tar (#2709)\n\nCurrently, the release tarball (e.g.\nhttps://packages.groonga.org/source/groonga/groonga-15.2.1.tar.gz)\ncannot detect libedit due to missing CMake file.\n\nI think this is due to CMake file not included in EXTRA_DIST.",
          "timestamp": "2026-01-04T10:55:48+09:00",
          "tree_id": "1be355a8a3bf9c77eb2683845f217753a18c5ff0",
          "url": "https://github.com/abetomo/groonga/commit/54be212327780e2c85fb23c15f89e29b03f63554"
        },
        "date": 1767933023972,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36542404899989833,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018287999999999943 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2930763360000128,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020055000000000267 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015380654999944454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003759999999999597 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015479067999933704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000408000000000186 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4541420159999916,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00032400000000007423 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22487062099992272,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005688999999999889 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1343016010000042,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005763999999999381 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015965624000045864,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013949999999998963 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016222271999993154,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014480000000001714 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0609348499999669,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007049999999999612 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0635025279999013,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007065000000000016 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016817512000045554,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015159999999997953 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017822685999988153,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016049999999994957 s\nthreads: undefined"
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
          "id": "3e3a5ce19b20adbfbe8aa3ba56a8021adbc51f16",
          "message": "debug",
          "timestamp": "2026-01-13T16:28:45+09:00",
          "tree_id": "50f33c2922e46e01832482c5746cc18579e59052",
          "url": "https://github.com/abetomo/groonga/commit/3e3a5ce19b20adbfbe8aa3ba56a8021adbc51f16"
        },
        "date": 1768289568388,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36143033899998045,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017741999999999952 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29359212299999626,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02141600000000049 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015391323000045531,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043599999999993644 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015444481000031374,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042000000000008697 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8628875069999822,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016599999999977744 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23089920700027733,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009637000000000187 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14146817400001055,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008171000000000012 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016687670999999682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001655000000000184 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017324005999967085,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017950000000005184 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06181249800010846,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008437999999999779 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06905980900000941,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008816999999999464 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01767751799997086,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016989999999997563 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02650305899999239,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018869999999993614 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24f9faa4032dd51aeb0630f63f81616e1d06b2f1",
          "message": "knn: Fix a bug that index may be broken with `centroid_column` (#2710)\n\nGitHub: fix GH-2708\n\nA tokenizer needs to keep token data until the next `next()` is called\nbut the current implementation uses a local variable. It's invalid after\nthe `next()` is finished.",
          "timestamp": "2026-01-14T12:04:13+09:00",
          "tree_id": "fa44ee3a6e0ac2c46865302bfd5f2e31cfc76d64",
          "url": "https://github.com/abetomo/groonga/commit/24f9faa4032dd51aeb0630f63f81616e1d06b2f1"
        },
        "date": 1768366650895,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3766031240000416,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017860000000000056 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2947616099999095,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02051699999999987 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015593162999948618,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034800000000026476 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014984472000037385,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003080000000001415 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.399598052999977,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003699999999999537 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22795815500001027,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006245000000000195 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13540087499995934,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005259000000000097 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016174687999978232,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015019999999998646 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016447297000070193,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014810000000000378 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06177666800010684,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007233999999999907 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0626975549999429,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007520999999999722 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017113289000064924,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015639999999995935 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026174776999994265,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016719999999996737 s\nthreads: undefined"
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
          "id": "0e2bae613d6a2cc65a2aafd910ce71cf4a1e6dca",
          "message": "grndb check: close the object after each check\n\nLike recover, close the object when processing is complete.\nRelated: GitHub GH-1234",
          "timestamp": "2026-01-15T12:22:56+09:00",
          "tree_id": "3dd0381504de8e44fd2d0e196a00fedea2787102",
          "url": "https://github.com/abetomo/groonga/commit/0e2bae613d6a2cc65a2aafd910ce71cf4a1e6dca"
        },
        "date": 1768447691419,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35694540699998356,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016977999999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28896326300002784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018577000000000177 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014929996999967443,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004039999999996269 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01503811599999949,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031199999999986794 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3917925800000148,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020799999999993046 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2297990740000273,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008205000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1351347489999739,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005209999999999493 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01631106700000373,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00155299999999986 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01647121900001025,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015039999999999498 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.057251687999979595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006250000000000047 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06295550499993396,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006426999999999378 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017450858000017888,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015000000000000846 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017032380999950192,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016760000000003161 s\nthreads: undefined"
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
          "id": "be6a06e0a5a27653767355eb969cff635a3c9b43",
          "message": "grndb check: close the object after each check\n\nLike recover, close the object when processing is complete.\nRelated: GitHub GH-1234",
          "timestamp": "2026-01-15T13:21:51+09:00",
          "tree_id": "6acf2cc9be6f8ae493fc5bcf26ff2e37d43229e8",
          "url": "https://github.com/abetomo/groonga/commit/be6a06e0a5a27653767355eb969cff635a3c9b43"
        },
        "date": 1768451125558,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3566850180000074,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016744999999999705 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2541649410000275,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012593000000000187 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016899731999956202,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000622000000000178 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014617206999986365,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0006060000000000648 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 2.321517997000001,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021199999999971242 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21615716299993437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011142999999999986 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1305470490000289,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012726999999999877 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019424547999989272,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0023080000000001433 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016778037000023005,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020950000000000413 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0709851869999909,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009424000000000349 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06946960800001989,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010858000000000326 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.022068408000023965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0024920000000000775 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019434920000037437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0026850000000009505 s\nthreads: undefined"
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
          "id": "9b0699b77a0bf5c8b23ee027eaaa31255140e7a7",
          "message": "test: add a column check",
          "timestamp": "2026-01-15T14:55:40+09:00",
          "tree_id": "2b190398ff853f64c617c2eb95b98d304f7d7947",
          "url": "https://github.com/abetomo/groonga/commit/9b0699b77a0bf5c8b23ee027eaaa31255140e7a7"
        },
        "date": 1768456788837,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3559312560000194,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01654300000000007 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2638261509999893,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013685000000000003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015452910999954383,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042700000000017724 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014899851999985003,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037600000000018174 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5001424120000024,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00032200000000007223 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2276890859999412,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006238999999999953 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1350595949998592,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005538000000000182 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016696421999995437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016049999999999676 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016887595000014244,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016960000000004471 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06242658299993309,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007020999999999639 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06397788200001742,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007572999999999552 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01691546299997526,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001486999999999905 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026432331999956205,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018710000000001503 s\nthreads: undefined"
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
          "id": "1f736e5bd2e76ab680fa84a941bad0abaf9119b1",
          "message": "Do not separate tests by log level",
          "timestamp": "2026-01-15T15:15:38+09:00",
          "tree_id": "aed9e12a4ecee42c80d370134f84023a7c1dd498",
          "url": "https://github.com/abetomo/groonga/commit/1f736e5bd2e76ab680fa84a941bad0abaf9119b1"
        },
        "date": 1768458028642,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3627148050000528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018435000000000062 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27207347899999945,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015076999999999563 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014630447000001823,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037300000000017874 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01557061099995849,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004120000000001067 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.448652500999998,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003859999999999697 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2273806630000479,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006240999999999719 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1376335900000356,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006420000000000009 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017461994999990793,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015739999999999088 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01696648600002959,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015070000000000083 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.063729335000005,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007065999999999892 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06312064499999792,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007803999999999839 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017773969000046463,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014880000000007387 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018111600000025874,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018770000000005727 s\nthreads: undefined"
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
          "id": "66bffc6a9a33fe855ecd07f7c07246e9e382445c",
          "message": "replace within the test",
          "timestamp": "2026-01-15T16:04:30+09:00",
          "tree_id": "e43f9f49b47873654f9b494388721f6d67c53b59",
          "url": "https://github.com/abetomo/groonga/commit/66bffc6a9a33fe855ecd07f7c07246e9e382445c"
        },
        "date": 1768460955990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37106273900002407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019912000000000027 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27229389999996556,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015686000000000422 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015775106999910804,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004029999999995981 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015410193999969124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000376000000000154 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6468339460000152,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016200000000013426 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22641339099999414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006348000000000173 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1367615199998795,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007084999999999994 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016720432999989043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001556999999999975 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01652445899998156,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013940000000003394 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06415660099992238,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007121000000000002 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06581274600006282,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007058999999999344 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01717942999994193,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014839999999999853 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026014734999932898,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015839999999998078 s\nthreads: undefined"
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
          "id": "426862740a6c91819f5b95173b02c0a7d6dff7a6",
          "message": "Improve the path to the db file",
          "timestamp": "2026-01-15T16:14:50+09:00",
          "tree_id": "62e0d8e9c7d5b5a85af3a42d8b9622701d3bf641",
          "url": "https://github.com/abetomo/groonga/commit/426862740a6c91819f5b95173b02c0a7d6dff7a6"
        },
        "date": 1768461897717,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35376483200008124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016416000000000125 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2773368649998815,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01644299999999979 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01517980300002364,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031899999999998596 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02387914000001956,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003920000000003643 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.570745488,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00030299999999996996 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22558674300006487,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006863999999999898 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13721122699990929,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00722099999999995 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016412840999976197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014060000000000183 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01653039899997566,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016219999999995682 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061492246000057094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006837000000000704 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06613479299983283,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007885000000000308 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017647610000096847,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016090000000008042 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019124811999972735,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016310000000003266 s\nthreads: undefined"
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
          "id": "252031961b58e6e1ee05a736a4758f2cd07302f4",
          "message": "Fix the expected value",
          "timestamp": "2026-01-15T19:23:47+09:00",
          "tree_id": "97ef0a6e61c992662057f21d1000629d27b66ce2",
          "url": "https://github.com/abetomo/groonga/commit/252031961b58e6e1ee05a736a4758f2cd07302f4"
        },
        "date": 1768472936137,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3873830960000646,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021748999999999907 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27327181100000075,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015415000000000345 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015161322000011523,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003720000000002055 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02423023700001181,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004620000000001845 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5880436680000116,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00031299999999986894 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2288844960000347,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006448999999999885 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13433230800001184,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005457999999999741 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016644414000012375,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015049999999996178 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016473957999949107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014220000000001454 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06322485500012931,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0072380000000001055 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.061743190000072445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006686999999999582 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017170800999963376,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015459999999989649 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017103883000004316,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015639999999999266 s\nthreads: undefined"
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
          "id": "f4ab4f64ff99f01d15f1452823fd6a22ea837657",
          "message": "db: Add ensuring new types\n\nSince databases created before adding a new type do not contain it,\nwe will add a process to ensure the new type is added.",
          "timestamp": "2026-01-30T15:18:57+09:00",
          "tree_id": "4c686b5ec3fbf3d0652768e707523455c6ff9f5a",
          "url": "https://github.com/abetomo/groonga/commit/f4ab4f64ff99f01d15f1452823fd6a22ea837657"
        },
        "date": 1769754369955,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3732875910001212,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018746000000000318 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2637069669999619,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012993000000000171 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015372028000115279,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000357000000000246 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015155727000092156,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003830000000001055 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5760235349999903,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014700000000000824 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22838993999994273,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007102000000000025 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13717049600018072,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0066009999999999125 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.007975637000072311,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014230000000002851 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016679280000062136,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014749999999997265 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06152930399991874,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007875999999999966 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06416185999978552,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007728999999999625 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018000730999915504,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001436999999999744 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017543763999924522,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015680000000002359 s\nthreads: undefined"
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
          "id": "2485dc06bb0a134e11ee17837eca703da318593d",
          "message": "doc news: add 15.2.5 entry",
          "timestamp": "2026-01-30T16:34:25+09:00",
          "tree_id": "4a393ec1c50f7297df2ed18b622ad204413d9115",
          "url": "https://github.com/abetomo/groonga/commit/2485dc06bb0a134e11ee17837eca703da318593d"
        },
        "date": 1769758882591,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36743264099993667,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01547199999999982 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2677018179999209,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013211000000000361 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015480987999865192,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004129999999998579 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015013026999952217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003369999999997264 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5111273200000142,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016299999999999648 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23948113499977808,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0071200000000000985 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1351099860000886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006287999999999738 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017366258999970796,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017729999999999968 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01653546200003575,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001448000000000088 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06404698199997938,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008035999999999793 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06776531300005217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008608999999999478 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017211740000050213,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001635000000000164 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024578461000032803,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015759999999993834 s\nthreads: undefined"
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
          "id": "b0738d75b21e648dd8f3a27825af6deab8577571",
          "message": "dat: Fix the bug that the key overflows at 4096 bytes\n\n* Change the DAT key to a maximum of 4096 bytes.\n* If the length overflows and becomes zero, it is treated as 4096 bytes.\n  * Keys with a length of zero are not accepted, so zero cannot occur.",
          "timestamp": "2026-02-02T17:06:24+09:00",
          "tree_id": "50aa5b4758343777520b4b04cd3fbd731c27072a",
          "url": "https://github.com/abetomo/groonga/commit/b0738d75b21e648dd8f3a27825af6deab8577571"
        },
        "date": 1770020231339,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3543809669999973,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01603299999999988 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2994716499999299,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02144499999999952 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0150976169999808,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004189999999999472 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015347934999965673,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004099999999994386 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6414469229999895,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003839999999998567 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2321849669999665,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008237999999999995 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1401677710000513,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00664899999999953 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01684550799996032,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015170000000002404 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01673284599996805,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015139999999995712 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06245004500010509,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074210000000003995 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06657246299999997,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007297000000000553 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017110252999998465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016680000000006412 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024516148000088833,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016939999999999178 s\nthreads: undefined"
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
          "id": "898b56377d0cdaf4fd86211390908f963c3e7a01",
          "message": "docs: add 16.0.0 entry",
          "timestamp": "2026-02-04T09:54:53+09:00",
          "tree_id": "e5aae509d123a1b7c0778e932bf9aa0754cd17d9",
          "url": "https://github.com/abetomo/groonga/commit/898b56377d0cdaf4fd86211390908f963c3e7a01"
        },
        "date": 1770166978959,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38063774900007274,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021230999999999944 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29465788400005977,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020556000000000352 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015568451000035566,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004129999999999967 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014964651000013873,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031700000000056683 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.396312426999998,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004179999999999462 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22932384600005662,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006100000000000078 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13579667200008316,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005754000000000287 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01635721100012688,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015150000000002661 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016642813999908412,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015259999999999163 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05809675999995534,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006012000000000808 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06102634799998441,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006796000000000163 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016451829000004636,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001577999999999885 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018818152000051214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016119999999998913 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56f7d59c19addb5f4f9af51c87a42ad60a4ff2a8",
          "message": "arch-linux: update to 16.0.0 (#2735)",
          "timestamp": "2026-02-13T16:51:37+09:00",
          "tree_id": "fffb65c98d6ed8fc64eb0ecd5eb1cdca6d0b29f8",
          "url": "https://github.com/abetomo/groonga/commit/56f7d59c19addb5f4f9af51c87a42ad60a4ff2a8"
        },
        "date": 1770984505723,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3625287829999593,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019721999999999962 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.3045662670000979,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02560999999999994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01577096300007952,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00048700000000043153 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01546335099993712,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043200000000034877 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.546441982000033,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00022800000000008924 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23185092500000337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007023000000000085 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13806074200005014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005837000000000037 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01617734900008827,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015770000000003004 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016704729999901247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015399999999997638 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061317728999995325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069360000000001365 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06455324299997756,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00828099999999976 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01763366800003041,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015960000000000418 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02659889500000645,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015110000000002621 s\nthreads: undefined"
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
          "id": "c9ad3dd525e939be588537946bddf493eea7a1c7",
          "message": "language_model_vectorize: add `prefix` option",
          "timestamp": "2026-02-23T11:19:01+09:00",
          "tree_id": "8d9a83780faf83424c80ab197ba7aaa066850b1e",
          "url": "https://github.com/abetomo/groonga/commit/c9ad3dd525e939be588537946bddf493eea7a1c7"
        },
        "date": 1771813462658,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35489298400005964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016544999999999907 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2630325620000349,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012751999999999708 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015960631999973884,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033799999999983843 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.018506505000004836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003789999999999072 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.530700988000035,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003500000000000725 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2321313559999112,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070179999999999965 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13600198399996088,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005482000000000292 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016991520999965815,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017499999999997795 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01651560700003074,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017870000000000386 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.062340433000031226,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006948000000000121 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06579888300007042,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069290000000002405 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018026286999997865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017329999999996792 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026345477999996092,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015610000000002011 s\nthreads: undefined"
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
          "id": "e7d544c3ce4c99095bb27b549a856d22a7901387",
          "message": "language_model_vectorize: add `prefix` option",
          "timestamp": "2026-02-23T12:34:10+09:00",
          "tree_id": "ed0ca0f695b814bd34358b8343ef123cdfa934c2",
          "url": "https://github.com/abetomo/groonga/commit/e7d544c3ce4c99095bb27b549a856d22a7901387"
        },
        "date": 1771818074073,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3665201699999727,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018569000000000307 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2851744390000306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017574999999999952 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01506486099998483,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040900000000032577 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01506957600005876,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039500000000006197 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5648498990000235,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00037499999999998646 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2346360749999974,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00922900000000007 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13746189199997616,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006040999999999741 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01626308199996629,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014769999999998118 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016320421000017404,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015100000000001501 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061774807999995573,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00709800000000016 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0617723910000052,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007162000000000918 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017059947999939595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016770000000000118 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02626554299996542,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015599999999996172 s\nthreads: undefined"
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
          "id": "e09801244a2856f4f01b0d2188b8d4346060e09a",
          "message": "Use `text` when no `prefix`",
          "timestamp": "2026-02-24T19:16:00+09:00",
          "tree_id": "8236c4e1ccbfb46399852bbc8aa4e78704596a77",
          "url": "https://github.com/abetomo/groonga/commit/e09801244a2856f4f01b0d2188b8d4346060e09a"
        },
        "date": 1771928526798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3715589650000197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018547000000000008 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2724512319999235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014728999999999937 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015497901999935948,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000394000000000172 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014951040999903853,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040499999999921155 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.503097834000016,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00038099999999999246 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22866460599999527,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006549000000000124 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13666814999999133,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005643000000000037 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016702194999936637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013619999999997523 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01641375699995251,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001530999999999949 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06022224099990581,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0064289999999998515 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06411333500000183,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007039000000000045 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017611148000071353,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015080000000004257 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025917978000052244,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014739999999996978 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d1cbc4fa401fa9960ac0ffaab7147ee1509d290",
          "message": "compressor openzl: extract the body-only compression case into a separate function (#2737)\n\nExtracted shared logic for header/body/footer compression.\nSeparated the header/body/footer and only body compression paths into different functions to reduce complexity.",
          "timestamp": "2026-02-24T18:23:14+09:00",
          "tree_id": "af453ac2e5b00a60621ac115fa57737cf4d27942",
          "url": "https://github.com/abetomo/groonga/commit/8d1cbc4fa401fa9960ac0ffaab7147ee1509d290"
        },
        "date": 1772002010336,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38806436200007965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021505000000000052 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2718451869999967,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015808999999999795 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01576987199996438,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003649999999998099 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015198551000082716,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003449999999997899 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5353257600000347,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00040799999999990844 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23994445900001438,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007320999999999869 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13449734599993235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005810999999999955 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017410163999954875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015940000000000398 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01659974899990857,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014840000000000408 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0604513050000719,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006690999999999642 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0660354620000021,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007493999999999584 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017774131999999554,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015150000000004327 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02621886899993342,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014049999999998786 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf25085ed2b992ecdace270b68d97ab854ea5e2f",
          "message": "ci: bump actions/download-artifact from 7 to 8 (#2741)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 7 to 8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v8.0.0</h2>\n<h2>v8 - What's new</h2>\n<h3>Direct downloads</h3>\n<p>To support direct uploads in <code>actions/upload-artifact</code>,\nthe action will no longer attempt to unzip all downloaded files.\nInstead, the action checks the <code>Content-Type</code> header ahead of\nunzipping and skips non-zipped files. Callers wishing to download a\nzipped file as-is can also set the new <code>skip-decompress</code>\nparameter to <code>false</code>.</p>\n<h3>Enforced checks (breaking)</h3>\n<p>A previous release introduced digest checks on the download. If a\ndownload hash didn't match the expected hash from the server, the action\nwould log a warning. Callers can now configure the behavior on mismatch\nwith the <code>digest-mismatch</code> parameter. To be secure by\ndefault, we are now defaulting the behavior to <code>error</code> which\nwill fail the workflow run.</p>\n<h3>ESM</h3>\n<p>To support new versions of the @actions/* packages, we've upgraded\nthe package to ESM.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Don't attempt to un-zip non-zipped downloads by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/460\">actions/download-artifact#460</a></li>\n<li>Add a setting to specify what to do on hash mismatch and default it\nto <code>error</code> by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/461\">actions/download-artifact#461</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v7...v8.0.0\">https://github.com/actions/download-artifact/compare/v7...v8.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/70fc10c6e5e1ce46ad2ea6f2b72d43f7d47b13c3\"><code>70fc10c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/461\">#461</a>\nfrom actions/danwkennedy/digest-mismatch-behavior</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/f258da9a506b755b84a09a531814700b86ccfc62\"><code>f258da9</code></a>\nAdd change docs</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ccc058e5fbb0bb2352213eaec3491e117cbc4a5c\"><code>ccc058e</code></a>\nFix linting issues</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/bd7976ba57ecea96e6f3df575eb922d11a12a9fd\"><code>bd7976b</code></a>\nAdd a setting to specify what to do on hash mismatch and default it to\n<code>error</code></li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ac21fcf45e0aaee541c0f7030558bdad38d77d6c\"><code>ac21fcf</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/460\">#460</a>\nfrom actions/danwkennedy/download-no-unzip</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/15999bff51058bc7c19b50ebbba518eaef7c26c0\"><code>15999bf</code></a>\nAdd note about package bumps</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/974686ed5098c7f9c9289ec946b9058e496a2561\"><code>974686e</code></a>\nBump the version to <code>v8</code> and add release notes</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fbe48b1d2756394be4cd4358ed3bc1343b330e75\"><code>fbe48b1</code></a>\nUpdate test names to make it clearer what they do</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/96bf374a614d4360e225874c3efd6893a3f285e7\"><code>96bf374</code></a>\nOne more test fix</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/b8c4819ef592cbe04fd93534534b38f853864332\"><code>b8c4819</code></a>\nFix skip decompress test</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v7...v8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=7&new-version=8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-03T08:22:05+09:00",
          "tree_id": "80c35b672f3bf92a697261c0fbaaffe8e5af7fa5",
          "url": "https://github.com/abetomo/groonga/commit/cf25085ed2b992ecdace270b68d97ab854ea5e2f"
        },
        "date": 1772588835037,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36156040400004485,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01915399999999981 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2591844009999704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015248999999999985 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015485688999945069,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005419999999998204 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015676009999992857,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034500000000020625 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4580494329999851,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003810000000001035 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23663320999992266,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005750999999999923 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13497349799996528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00601700000000005 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01737213200004817,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015930000000002054 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0168305639999744,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013909999999995593 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05862088300000323,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007316000000000433 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06306316500018738,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007171999999999984 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017968487000075584,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013969999999998428 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02696421199988208,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001751000000000058 s\nthreads: undefined"
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
          "id": "e5041603455e414cf56722bda5d007d8ef57152f",
          "message": "compressor openzl: add body_element_size to grn_compress_data\n\nRelated: GH-2739\n\nThis is preparation for Float32 vector column compression with OpenZL.\n`ZL_TypedRef_createNumeric()` requires element size as a parameter,\nso we store it as `body_element_size` in `grn_compress_data` in advance.",
          "timestamp": "2026-03-04T11:10:43+09:00",
          "tree_id": "6d12ad4a9c2814f917ff3800c5822bf225ce7ff3",
          "url": "https://github.com/abetomo/groonga/commit/e5041603455e414cf56722bda5d007d8ef57152f"
        },
        "date": 1772591997538,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3903641509999147,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02485100000000018 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2669496670000626,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014912999999999704 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015318572000126096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004509999999999237 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015309413000011318,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038500000000030177 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4580400210000448,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017199999999989446 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24270337200005088,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005912999999999974 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13955322499998601,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005428999999999545 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01726652499996817,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016430000000000056 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01708885499988355,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015179999999999083 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05915429200007338,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00771299999999972 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06372327700006508,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074099999999995 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017176532999997107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015350000000007025 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01761010900003157,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001465000000000355 s\nthreads: undefined"
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
          "id": "ae53589ed39e69099724af778856b36a6f82c8a1",
          "message": "compressor openzl: add body_element_size to grn_compress_data\n\nRelated: GH-2739\n\nThis is preparation for Float32 vector column compression with OpenZL.\n`ZL_TypedRef_createNumeric()` requires element size as a parameter,\nso we store it as `body_element_size` in `grn_compress_data` in advance.\n\nCo-authored-by: Horimoto Yasuhiro <horimoto@clear-code.com>",
          "timestamp": "2026-03-04T11:18:21+09:00",
          "tree_id": "6d12ad4a9c2814f917ff3800c5822bf225ce7ff3",
          "url": "https://github.com/abetomo/groonga/commit/ae53589ed39e69099724af778856b36a6f82c8a1"
        },
        "date": 1772592367488,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4061438790000693,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.027637999999999954 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26774093499994933,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015281999999999712 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015509903000008762,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004059999999999342 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.023556625000026088,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004949999999999954 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5094999489999736,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00039700000000000846 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24130988599989678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00636700000000015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1406066679998048,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006134999999999946 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017804300000022977,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016090000000000548 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01719392200004677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001544000000000434 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061800739000034355,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007521000000000416 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07008384399995293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007936999999999833 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017217987000037738,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001483999999999791 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01765616300002648,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014039999999999053 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "distinct": true,
          "id": "fd10acd2bbb651a501a93d2f9827a820f88a7f12",
          "message": "compress openzl: add support for Float32 array compression",
          "timestamp": "2026-03-05T11:42:43+09:00",
          "tree_id": "17fd6f00a392ae751f48c8a11155cabdb071fc26",
          "url": "https://github.com/abetomo/groonga/commit/fd10acd2bbb651a501a93d2f9827a820f88a7f12"
        },
        "date": 1772679023475,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.405599460000019,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.027303000000000327 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2892889889999424,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02020900000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015590443999997206,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000429000000000318 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015528777999975318,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038199999999988243 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4470996889999697,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00030399999999997096 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2458243409998886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00643500000000001 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14400921200007133,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006804999999999867 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.0176507840000113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016129999999993927 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02657183599990276,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016210000000004 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.062358346999928926,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007849000000000037 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06886718599997721,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007633000000000112 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01722955899998624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015889999999997573 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.027012450999905013,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001608999999999916 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "distinct": true,
          "id": "071e1aad32d1f46e62fa7e3dae75585abd2097ed",
          "message": "compress openzl: add support for Float32 array compression",
          "timestamp": "2026-03-05T11:52:14+09:00",
          "tree_id": "48d95c93a1723a14d20c774c74fea012138f5c15",
          "url": "https://github.com/abetomo/groonga/commit/071e1aad32d1f46e62fa7e3dae75585abd2097ed"
        },
        "date": 1772679779254,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3957648170000141,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.026018999999999806 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2851437619999899,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018669000000000158 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016070056000046407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004720000000000002 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.023527198999971688,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004909999999997972 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5585988040000132,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0005519999999999969 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24441264399996498,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008716000000000015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14112598400001275,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0061089999999999756 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016807431999978917,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016979999999998108 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.026081565999959366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017149999999999666 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06169874299996536,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007647999999999738 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06448883400000227,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00732400000000033 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018078962999965142,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017149999999994392 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01809974900004363,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018629999999995595 s\nthreads: undefined"
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
          "id": "84f1832cc6cb6c4fe3ed264ab401bc252d0646b7",
          "message": "test openzl: rename scalar/compressed.test to scalar/compressed/text.test\n\nRelated: GH-2739\n\nNew OpenZL tests include the data type in the path (e.g. vector/compressed/float32.test).\nRename the existing test to be consistent with this naming convention.",
          "timestamp": "2026-03-06T12:46:59+09:00",
          "tree_id": "048ef6a7c6fbf3df7a9ed3d44482ba64fd2da58c",
          "url": "https://github.com/abetomo/groonga/commit/84f1832cc6cb6c4fe3ed264ab401bc252d0646b7"
        },
        "date": 1772769673639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3772633249999444,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021594999999999864 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.30335282899989124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019188000000000344 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016115540999862787,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036300000000011323 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015281661999893004,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043200000000043204 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7426472319999675,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018199999999984895 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24487078700019538,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008325999999999445 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14406644600012442,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007601000000000441 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01748439299990423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018640000000003099 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017181012000150986,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001649000000000067 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06371326199996474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008094999999999908 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07247786699986136,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008530000000000204 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01875664199997118,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016529999999996825 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018710197000018525,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020169999999992416 s\nthreads: undefined"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c238145918eab6fa4ad697360e613671b5bbaa1",
          "message": "test openzl: rename scalar/compressed.test to scalar/compressed/text.test (#2744)\n\nRelated: GH-2739\n\nNew OpenZL tests include the data type in the path (e.g.\nvector/compressed/float32.test).\nRename the existing test to be consistent with this naming convention.",
          "timestamp": "2026-03-06T14:12:15+09:00",
          "tree_id": "81b87e1bcc9beff11255d2af82bcc322a9651197",
          "url": "https://github.com/abetomo/groonga/commit/9c238145918eab6fa4ad697360e613671b5bbaa1"
        },
        "date": 1772801417883,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3715408020001405,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018865000000000187 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2926766619998489,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02166099999999971 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01655818200003978,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005000000000000004 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015477549000024737,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000447000000000336 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5386317530000042,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00037399999999987443 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24180812199983848,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007823999999999942 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13530129899982057,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005601999999999857 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.0174524360002124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017829999999998958 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01117865899982462,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001500999999999586 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06072849299982863,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007654000000000091 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06781685400005699,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006911999999998725 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017240166999954454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016879999999997453 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026944762000198352,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016070000000006357 s\nthreads: undefined"
          }
        ]
      }
    ]
  }
}