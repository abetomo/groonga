window.BENCHMARK_DATA = {
  "lastUpdate": 1784185768727,
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
          "id": "58f79ba6431f005de07adca140c1707ea7c2608e",
          "message": "clang-format: add `SeparateDefinitionBlocks: Always`\n\nAn empty line is inserted between blocks.\nhttps://clang.llvm.org/docs/ClangFormatStyleOptions.html#separatedefinitionblock\n\nThe setting is the same as Mroonga: https://github.com/mroonga/mroonga/pull/1070",
          "timestamp": "2026-03-16T14:22:50+09:00",
          "tree_id": "49f2ec25726d533576bed0d10f691a36c28edf24",
          "url": "https://github.com/abetomo/groonga/commit/58f79ba6431f005de07adca140c1707ea7c2608e"
        },
        "date": 1773641978229,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36967644899993957,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012613999999999848 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29847373499990226,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015771999999999703 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01580443899990769,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004429999999999712 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015314429000000018,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036400000000022525 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4893057369999951,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017499999999998073 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24155453500009116,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006404999999999952 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13421939999994947,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005710000000000298 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016914256000006844,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001523999999999942 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017026658000077077,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001496000000000025 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06385046400004057,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006768999999999484 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06954367800000227,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007336999999999733 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01967547499992861,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018320000000002779 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017783325999971566,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015289999999998638 s\nthreads: undefined"
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
          "id": "a2c8949e473b884e78cd739c507b9da9f5644bfb",
          "message": "clang-format: add `SeparateDefinitionBlocks: Always`\n\nAn empty line is inserted between blocks.\nhttps://clang.llvm.org/docs/ClangFormatStyleOptions.html#separatedefinitionblock\n\nThe setting is the same as Mroonga: https://github.com/mroonga/mroonga/pull/1070",
          "timestamp": "2026-03-16T14:29:28+09:00",
          "tree_id": "2646d5adac2c3a464a9c2e62ea352220d6129c30",
          "url": "https://github.com/abetomo/groonga/commit/a2c8949e473b884e78cd739c507b9da9f5644bfb"
        },
        "date": 1773642228275,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3565402700000959,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011313000000000184 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.24589525800013234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007138000000000172 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01554627900009109,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004079999999999778 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013135488999978406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003930000000002265 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8884566070000801,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016100000000000836 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21603547599977446,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007880999999999833 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11492914999996628,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007242999999999708 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016471683000077064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013729999999998327 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014581957999894257,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013990000000000669 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.058655196999779946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007688999999999835 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05945708099989133,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00847500000000033 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018770337999967524,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001626999999999601 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.015356827000005069,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015990000000000587 s\nthreads: undefined"
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
          "id": "6703b403ec342b393a72883f97599210efd8e376",
          "message": "groonga: ensure writing data (#2749)\n\nIf output (e.g. pipe) may not have enough buffer, `fwrite()` may not\nwrite all data. We need to call multiple `fwrite()`s to ensure writing\nall data.\n\nIn my experience, non blocking output may not work well. `fwrite()`\nagainst non blocking output may not return `-1` with `EAGAIN` and\nreported written data may not be written.\n\nSo, output should be blocking.\n\nSee also: https://github.com/groonga/grntest/pull/31",
          "timestamp": "2026-03-16T13:38:59+09:00",
          "tree_id": "0a3acc33c4262aae6b3e80a7556c31c70433f28a",
          "url": "https://github.com/abetomo/groonga/commit/6703b403ec342b393a72883f97599210efd8e376"
        },
        "date": 1773642233943,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38893132600003355,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015845000000000137 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2999932670000476,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015522000000000341 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015626515000064956,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038599999999999746 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01564019199992117,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044000000000019024 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.451413021999997,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002179999999998572 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24396195200000648,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008699000000000068 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13525462000001198,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005246000000000445 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016607459999988805,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001522999999999719 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017192679999993743,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001499000000000028 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.058416698000030465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007723999999999648 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06669582899991156,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006788999999999712 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017445563000023867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015709999999997115 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01760529999995697,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017449999999997468 s\nthreads: undefined"
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
          "id": "0ef05f268b15125cc1860e77d9235ed1b5256962",
          "message": "http: fix `buffer_offset` not reset\n\nThe reset of `buffer_offset` was missing, so it is reset.\nThis process is only used under specific conditions, which is likely why it went unnoticed until now.\nSpecifically, this applies in the following case:\n\n1. First received.\n\nOnly the full first chunk and the size of the second chunk were received, up to the `\\r`.\nThe body of the second chunk was not received.\n(Since a value must be set for `buffer_offset`, this issue does not occur when only the size is received.)\n\nExample:\n\n```\nPOST /d/status HTTP/1.1\\r\\n\nHost: localhost:10041\\r\\n\nTransfer-Encoding: chunked\\r\\n\nContent-Type: application/x-www-form-urlencoded\\r\\n\n\\r\\n\n1\\r\\n\nA\\r\\n\n1\\r\n```\n\n2. Second received.\n\nReceived the Body of the second chunk. But only received up to `\\r`.\n\nExample:\n\n```\n\\n\nB\\r\n```\n\n3. Third received.\n\nReceived the `\\n` from the second chunk and the third chunk.\n\nExample:\n\n```\n\\n\n2\\r\\n\nCC\\r\\n\n```\n\nAt this point, when the third chunk is received, the check for the position of `\\n` fails,\nresulting in `chunk end LF doesn't exit` error.\nSince the request is actually valid, this error is incorrect.",
          "timestamp": "2026-03-23T17:50:07+09:00",
          "tree_id": "dc266af659157c3d119f7efcb3a488327beb8131",
          "url": "https://github.com/abetomo/groonga/commit/0ef05f268b15125cc1860e77d9235ed1b5256962"
        },
        "date": 1774256389926,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3832877870000857,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014944999999999833 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2896855049999658,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014583000000000068 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015808166999875084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003460000000006236 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02109460200006197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005170000000000174 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4766094000000294,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000197000000000086 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24471519199988734,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0068290000000000295 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1406609790000175,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005595000000000155 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016429473000073358,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014840000000002629 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01703258399987817,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001441000000000081 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06161912899995059,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00715300000000009 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06782192499991879,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007610999999999729 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017278206000014507,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017629999999999313 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02703024100003404,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015299999999998926 s\nthreads: undefined"
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
          "id": "8d9c8e38cbdd05c495b553135b3cf1d1135b37c0",
          "message": "docs language_model_vectorize: add options.prefix",
          "timestamp": "2026-03-26T13:10:04+09:00",
          "tree_id": "0bc7b197f22fc6643efe0aad04cfd5d7afeb8a3f",
          "url": "https://github.com/abetomo/groonga/commit/8d9c8e38cbdd05c495b553135b3cf1d1135b37c0"
        },
        "date": 1774498741051,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38842165599999134,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01670399999999997 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28790878799998154,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014127000000000028 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016208263000009993,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038799999999988843 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01551609799992093,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038000000000049106 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4835449610000069,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017000000000000348 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23777606300006937,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00812199999999988 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13649213499996904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005830000000000141 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017471188000058646,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001669000000000198 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016640985000037745,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014720000000000288 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0628686589998324,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007104999999999834 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06789893400002711,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007140999999999731 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017584971999951904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001609999999999806 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02487439000003633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015310000000003932 s\nthreads: undefined"
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
          "id": "2a157cb44fec071a16afa8bb7fb07ee819f6ede5",
          "message": "cmake openzl: suppress the declaration-after-statement warning\n\n= Issue\nWhen building Groonga with MariaDB, the bundled OpenZL library fails to compile with an error like:\n\n```\n/home/buildbot/_deps/openzl-src/src/openzl/codecs/common/bitstream/ff_bitstream.h:44:5: error: ISO C90 forbids mixed declarations and code [-Werror=declaration-after-statement]\n```\n\n= Cause\nMariaDB enforces `-Wdeclaration-after-statement` as an error, but OpenZL uses C99-style mixed declarations and code.\n\n= Solution\nSuppress the `-Wdeclaration-after-statement` warning for the OpenZL target,\nfollowing the same approach used for bundled H3 and llama.cpp.\nWe also suppress C4244 and C4267 for MSVC.",
          "timestamp": "2026-03-28T09:03:07+09:00",
          "tree_id": "4c3aa49fc7e374b595e0c186362474f0c3276469",
          "url": "https://github.com/abetomo/groonga/commit/2a157cb44fec071a16afa8bb7fb07ee819f6ede5"
        },
        "date": 1774656797617,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38953667800006997,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01648100000000019 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2799823369999217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013473000000000096 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015520047999984854,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040100000000031777 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015378892999933669,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039400000000000546 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4418556869999861,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003230000000000177 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2466192029999661,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005624000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14259355400014329,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005625999999999909 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016601441000034356,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015220000000002454 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016593325000030745,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014779999999999238 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.067848232999836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0062970000000001775 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07190005599989036,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006891000000000647 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017546560000141653,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001738999999999491 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01778824899997744,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015600000000003666 s\nthreads: undefined"
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
          "id": "df95ecf1a3545d50f41639710bb4104af30f4388",
          "message": "cmake openzl: suppress the declaration-after-statement warning\n\n= Issue\nWhen building Groonga with MariaDB, the bundled OpenZL library fails to compile with an error like:\n\n```\n/home/buildbot/_deps/openzl-src/src/openzl/codecs/common/bitstream/ff_bitstream.h:44:5: error: ISO C90 forbids mixed declarations and code [-Werror=declaration-after-statement]\n```\n\n= Cause\nMariaDB enforces `-Wdeclaration-after-statement` as an error, but OpenZL uses C99-style mixed declarations and code.\n\n= Solution\nSuppress the `-Wdeclaration-after-statement` warning for the OpenZL target, following the same approach used for bundled H3 and llama.cpp.",
          "timestamp": "2026-04-10T14:17:02+09:00",
          "tree_id": "1d1ec171104bbf380c915782a1e37299ab4e4aaa",
          "url": "https://github.com/abetomo/groonga/commit/df95ecf1a3545d50f41639710bb4104af30f4388"
        },
        "date": 1775798771251,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38916441600002827,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01664800000000012 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27480239299990217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012369000000000047 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015069243999960236,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003980000000003703 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01555996999996978,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042699999999973315 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.777696947000038,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016099999999991121 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24626648299999943,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007269999999999999 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14345646800001077,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006791999999999826 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016560044999948786,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013379999999997838 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016377793000117435,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001394999999999147 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06452064800015478,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0061430000000003565 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07100307699982977,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006608999999999671 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016802578000010726,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00155199999999997 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026409975999968083,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001657999999999965 s\nthreads: undefined"
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
          "id": "2c111973496acd69af48e8cf954c945339cab353",
          "message": "wip",
          "timestamp": "2026-04-24T10:19:06+09:00",
          "tree_id": "b1dfb8608c0c41f928faa38e4937b1590908ccc6",
          "url": "https://github.com/abetomo/groonga/commit/2c111973496acd69af48e8cf954c945339cab353"
        },
        "date": 1776994000192,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3743127369999115,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011013000000000037 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27006998700005624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008924999999999988 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.020790591999912067,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003819999999998547 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01372942900002272,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0008000000000000784 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8537975280000296,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002630000000002075 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2238577989999726,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007912999999999795 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1287280569999325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007058000000000217 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016524661999937962,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001375000000000015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014334158999986357,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013890000000005287 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06844999499998039,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006464999999999804 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0650929419999784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00843800000000039 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01719274500010215,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015879999999998534 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.007470110999975077,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012729999999998853 s\nthreads: undefined"
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
          "id": "4e2995828e2af319fa50075b1a014a4ad9b3d72c",
          "message": "wip",
          "timestamp": "2026-04-24T10:43:01+09:00",
          "tree_id": "27718e1b389e4d0716411cb79ed9de3c411fda09",
          "url": "https://github.com/abetomo/groonga/commit/4e2995828e2af319fa50075b1a014a4ad9b3d72c"
        },
        "date": 1776995191723,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38272946799997953,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014954000000000106 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29812463000007483,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012142999999999932 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014879714000016975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039500000000006197 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015338190000193208,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042399999999997995 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5814554130000715,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003070000000000017 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22993639899993923,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007782999999999901 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14927495899996757,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006611000000000367 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016918416999942565,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001622999999999708 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01672343399991405,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015909999999999813 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06159781199994541,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00729100000000002 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0671324380000442,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00838400000000003 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.020836310000049707,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005672999999999623 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017348111999922367,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016540000000002386 s\nthreads: undefined"
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
          "id": "d78f316a5ecb412a1d856a62804d2baed8ec734d",
          "message": "Fix one definition rule error\n\nGitHub fixes GH-2787\n\nThe ODR violation happens because function pointer types like `grn_tokenizer_init_func` take `grn_tokenizer_query` as an argument,\nand `grn_tokenizer_query` has two different definitions.\n\n// TODO",
          "timestamp": "2026-04-24T18:29:02+09:00",
          "tree_id": "27718e1b389e4d0716411cb79ed9de3c411fda09",
          "url": "https://github.com/abetomo/groonga/commit/d78f316a5ecb412a1d856a62804d2baed8ec734d"
        },
        "date": 1777024258585,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3826459360000172,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015175000000000119 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27942242599988276,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012301999999999896 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015422393999983797,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043100000000018124 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.016061485000079756,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00047399999999928055 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7594397159999744,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001730000000003118 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25781834099996104,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007896999999999862 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15142850400002317,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00693700000000011 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01683727500005716,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017620000000000413 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01746244299999944,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016719999999999235 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0679447429999982,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007445999999999592 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07464182500007155,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008860999999998898 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018557095000005575,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018509999999999638 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026491528999997627,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016999999999995075 s\nthreads: undefined"
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
          "id": "324ea832c8964679444f19f538e8e433239cb97b",
          "message": "Fix one definition rule error\n\nGitHub fixes GH-2787\n\nThe ODR violation happens because function pointer types like `grn_tokenizer_init_func` take `grn_tokenizer_query` as an argument,\nand `grn_tokenizer_query` has two different definitions.\n\nInclude `grn_tokenizer.h` from `grn_db.h` so that the non-deprecated definition is always used.",
          "timestamp": "2026-04-25T11:20:29+09:00",
          "tree_id": "b06e360df92c75a94d51bdf06cd15b645c46fe02",
          "url": "https://github.com/abetomo/groonga/commit/324ea832c8964679444f19f538e8e433239cb97b"
        },
        "date": 1777083902821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.40578949799993325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019352000000000022 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.3159608199999866,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019677999999999418 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015643469000053756,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038800000000005497 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015510617999950682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003180000000000127 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.454528324000023,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015900000000007575 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2504246179999541,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005502000000000118 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1491562719999706,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005298000000000108 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017139399999905436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015860000000002816 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016681555000047865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001566000000000095 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06672077999996873,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006498999999999852 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0680964799999515,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0066969999999996754 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.021906987999955163,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005437999999999832 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026760817000024417,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017359999999996545 s\nthreads: undefined"
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
          "id": "a65625cfd3b09bf805491209f3a8d7906fa504bf",
          "message": "Fix one definition rule error\n\nGitHub fixes GH-2787\n\nThe ODR violation happens because function pointer types like `grn_tokenizer_init_func` take `grn_tokenizer_query` as an argument,\nand `grn_tokenizer_query` has two different definitions.\n\nInclude `grn_tokenizer.h` from `grn_db.h` so that the non-deprecated definition is always used.",
          "timestamp": "2026-04-26T10:10:25+09:00",
          "tree_id": "c0a467237019942c68a6a3eaab58e2cb75560852",
          "url": "https://github.com/abetomo/groonga/commit/a65625cfd3b09bf805491209f3a8d7906fa504bf"
        },
        "date": 1777166275623,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.358397297999943,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012459000000000026 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28081851100000677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01124300000000003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0160231139999496,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000454000000000121 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015560444000129792,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005340000000000344 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5918715829999996,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004259999999998154 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2274765300001036,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006299000000000082 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14941705899991575,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006159999999999888 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016565430000014203,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014980000000003046 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016920504999916375,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015650000000000108 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061363188000086666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007191000000000225 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06760755299995935,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008845000000000658 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016686235999941346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001732000000000511 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.023505285000055665,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016289999999994365 s\nthreads: undefined"
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
          "id": "4164d30f2ac8b24dce6b5b499bd04be1e0853360",
          "message": "wip",
          "timestamp": "2026-04-27T12:40:36+09:00",
          "tree_id": "3155ac09733c89857afee99f7d151f2414aa836a",
          "url": "https://github.com/abetomo/groonga/commit/4164d30f2ac8b24dce6b5b499bd04be1e0853360"
        },
        "date": 1777261699651,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37755372300000545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01449700000000008 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27752605299986044,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01187300000000005 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015991022000093835,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004029999999997369 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015626198999939334,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004009999999998737 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.598511101999975,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00023899999999998922 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2583578879999777,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007765000000000036 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1507955000001857,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006258999999999931 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016620075999981054,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014519999999995925 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.008417810000082682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015599999999998948 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06790320600009636,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0068140000000005 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06714501300007214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007603000000000026 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.021370133000118585,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005297000000000107 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01735331699978815,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017219999999998348 s\nthreads: undefined"
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
          "id": "9124dff41c57af390e49d654df59de436f6bdaca",
          "message": "Fix one definition rule error\n\nGitHub fixes GH-2787\n\nThe ODR violation happens because function pointer types like `grn_tokenizer_init_func` take `grn_tokenizer_query` as an argument,\nand `grn_tokenizer_query` has two different definitions.\n\nInclude `grn_tokenizer.h` from `grn_db.h` so that the non-deprecated definition is always used.",
          "timestamp": "2026-04-28T13:02:13+09:00",
          "tree_id": "68d214a37c8db0b69d4709432931a7af06d54397",
          "url": "https://github.com/abetomo/groonga/commit/9124dff41c57af390e49d654df59de436f6bdaca"
        },
        "date": 1777349428573,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3941136409999899,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016633000000000064 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27572187800006986,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011907000000000084 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01535449499999686,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035699999999985743 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015337149999936628,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040500000000021075 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4990227879999907,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00022299999999977893 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25304992399992443,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005695999999999923 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1501775649998649,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005319000000000296 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016781252000043878,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014449999999998353 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.010962985999981356,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001610999999999696 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06768325199993797,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006649999999999712 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0678993740000351,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0064019999999996025 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02181226099997957,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005125999999999881 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02422014000001127,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001465999999999662 s\nthreads: undefined"
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
          "id": "12315f527806bbf53ac15abcc600656eee0eb24b",
          "message": "Fix one definition rule error\n\nGitHub fixes GH-2787\n\nThe ODR violation happens because function pointer types like `grn_tokenizer_init_func` take `grn_tokenizer_query` as an argument,\nand `grn_tokenizer_query` has two different definitions.\n\nInclude `grn_tokenizer.h` from `grn_db.h` so that the non-deprecated definition is always used.",
          "timestamp": "2026-04-28T18:17:25+09:00",
          "tree_id": "c6df77dc822564e05108e1597562f70710bfa93c",
          "url": "https://github.com/abetomo/groonga/commit/12315f527806bbf53ac15abcc600656eee0eb24b"
        },
        "date": 1777368326995,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3759755679999728,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014819999999999806 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2744141429999445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010493999999999892 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01552344100002756,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004619999999997404 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015520290000011983,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003959999999997299 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.9122675970000103,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00029999999999996696 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22818012699997325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008326000000000056 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14799366500002975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007572999999999996 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016187163000012106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017849999999998423 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017008140999962507,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016760000000002329 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06617653900005394,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008660000000000362 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06716448399998853,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008701000000000902 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.022520788999969454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005989999999999662 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025779779000004055,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001853000000000271 s\nthreads: undefined"
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
          "id": "339c7c31dddc813ff418aba048e0882ece56ee5e",
          "message": "Fix one definition rule error\n\nGitHub fixes GH-2787\n\nThe ODR violation happens because function pointer types like `grn_tokenizer_init_func` take `grn_tokenizer_query` as an argument,\nand `grn_tokenizer_query` has two different definitions.\n\nInclude `grn_tokenizer.h` from `grn_db.h` so that the non-deprecated definition is always used.",
          "timestamp": "2026-04-28T19:09:35+09:00",
          "tree_id": "fcb6458f28a59a377555db522641bcc94bb4f674",
          "url": "https://github.com/abetomo/groonga/commit/339c7c31dddc813ff418aba048e0882ece56ee5e"
        },
        "date": 1777371232673,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35675491899999656,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012786999999999882 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28890343800006235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01198100000000027 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014443714999998747,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003459999999996799 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021920819000001757,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00046800000000002395 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5743433309999944,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00037299999999998446 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2292896649999534,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069010000000001015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.146589831,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00581200000000015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016324913999966384,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015680000000002914 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016768494999979566,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015239999999996645 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.062099017000008416,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006986999999999882 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06450844000011102,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007667999999999703 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01653768000002742,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016850000000000198 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01768003699999099,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016730000000000633 s\nthreads: undefined"
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
          "id": "a439915f1d5afd8bf51661499e50450abc1f05c3",
          "message": "wip",
          "timestamp": "2026-04-30T08:07:21+09:00",
          "tree_id": "061d62ce4a9d67c7f737b135c4bfcc83f18afb1d",
          "url": "https://github.com/abetomo/groonga/commit/a439915f1d5afd8bf51661499e50450abc1f05c3"
        },
        "date": 1777504486507,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37825414600007434,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015110999999999986 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.30766269299994065,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018956000000000056 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015483896000034747,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003360000000004193 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015631571999961125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040699999999990744 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5120588920000273,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016499999999997073 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2521544560001985,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0062340000000001144 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15116976699971474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005172000000000371 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017148902000144517,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016579999999999095 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016691838000156167,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001607999999999582 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06414300099993397,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0063959999999999295 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07059421700000712,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006855999999999696 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017117433999942477,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017409999999995485 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01765101099988442,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001664000000000082 s\nthreads: undefined"
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
          "id": "8027938689022cc5a139c41cf0f67c59ce2bf292",
          "message": "wip",
          "timestamp": "2026-04-30T10:48:34+09:00",
          "tree_id": "46d11d76338e913be917ddaa5b0d091da0364a08",
          "url": "https://github.com/abetomo/groonga/commit/8027938689022cc5a139c41cf0f67c59ce2bf292"
        },
        "date": 1777513925426,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3735480489999077,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01363300000000002 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27660450899981015,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011465999999999837 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015431438000007347,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003879999999999717 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015445043999989139,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003299999999997749 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5265306640000063,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003099999999998937 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25325229999998555,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006473000000000048 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14782320899996648,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005525000000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01826177599997436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001591000000000009 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016970861999936915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015640000000000098 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06619705600002135,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006841999999999987 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06783663699997078,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007036999999999016 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017667204999952446,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017399999999998528 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01830047900000409,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017200000000001658 s\nthreads: undefined"
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
          "id": "12f21c439f8beb54f8f9e273d7b86fca78979dfa",
          "message": "Fix one definition rule error\n\nGitHub fixes GH-2787\n\nThe ODR violation happens because function pointer types like `grn_tokenizer_init_func` take `grn_tokenizer_query` as an argument,\nand `grn_tokenizer_query` has two different definitions.\n\nInclude `grn_tokenizer.h` from `grn_db.h` so that the non-deprecated definition is always used.",
          "timestamp": "2026-04-30T10:56:13+09:00",
          "tree_id": "47030a00aed9da8700d5a024ed4caccd44adaee3",
          "url": "https://github.com/abetomo/groonga/commit/12f21c439f8beb54f8f9e273d7b86fca78979dfa"
        },
        "date": 1777515116278,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38120664699999907,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01604400000000021 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.3014982129999453,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018334000000000156 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015302058000031593,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004230000000000622 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015693524999960573,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040100000000031777 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3956992740000373,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00022399999999977993 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24792866199987884,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005452000000000096 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15046543699997983,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0051649999999994756 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015022197000064352,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00150199999999992 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016021872000067106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017280000000000628 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0630215610000846,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006006999999999707 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06344207499995491,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006302999999999864 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01750337100008892,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016279999999998518 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025782991000028233,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001587999999999784 s\nthreads: undefined"
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
          "id": "1b0d7daa204333f3e166e7ba46970e2fa3f719c2",
          "message": "wip",
          "timestamp": "2026-05-07T17:22:10+09:00",
          "tree_id": "4b5aec893918af97152079d8525785f394e4a9f0",
          "url": "https://github.com/abetomo/groonga/commit/1b0d7daa204333f3e166e7ba46970e2fa3f719c2"
        },
        "date": 1778142614226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.40876987200010717,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021498999999999685 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28303953199986154,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013220999999999594 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014996489000168367,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041099999999971715 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015535187999830669,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003690000000005078 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8549680739999985,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00031999999999987594 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25607688799993866,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007942999999999978 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15155865499991705,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0064870000000000205 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016814014999908977,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016859999999999375 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017036037000139004,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016019999999999646 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06959086000017578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00827300000000028 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07297474099982537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008659999999999862 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01760345100012728,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017169999999997465 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025535299999887684,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018139999999999545 s\nthreads: undefined"
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
            "email": "kou@clear-code.com",
            "name": "Sutou Kouhei",
            "username": "kou"
          },
          "distinct": true,
          "id": "4de0c06e7a083071f7dfa8976cd36ce6112ef518",
          "message": "arch-linux: Update to 16.0.4",
          "timestamp": "2026-05-14T08:35:49+09:00",
          "tree_id": "551ed5c4eeaca35c14f4615d46b6e84925f4a945",
          "url": "https://github.com/abetomo/groonga/commit/4de0c06e7a083071f7dfa8976cd36ce6112ef518"
        },
        "date": 1778731397847,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37425756599998294,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01347299999999986 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2737661579997166,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011286000000000199 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015626378999968438,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003329999999999722 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015139266999995016,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003849999999994136 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6677138449999802,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021999999999997022 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2522685229999979,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006794999999999843 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14903772899981504,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005669000000000091 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01602331799995227,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001432999999999962 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01612277600008838,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013379999999999226 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06592452299969409,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0066269999999998 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06731794600011654,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070089999999998764 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.022062587000164058,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005361999999999867 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0181789570001456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016170000000001739 s\nthreads: undefined"
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
          "id": "0aedc85e84b48261af3fcb1ec3c209433388a285",
          "message": "udpate doc/files.{am,cmake} to the latest version\n\n* Add zulip-icon-128x128.png\n  * It was just missing from the file list.\n* Update html/_static/*\n  * Follow the new Sphinx",
          "timestamp": "2026-05-21T15:46:01+09:00",
          "tree_id": "e6f12d6fead0bf11d7d4a9cebd0132dcd043b166",
          "url": "https://github.com/abetomo/groonga/commit/0aedc85e84b48261af3fcb1ec3c209433388a285"
        },
        "date": 1779346691377,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3414793050000071,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008447000000000052 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.24943022000002202,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0072650000000003545 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01700956999997061,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039799999999995395 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013175172000046587,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041299999999989956 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8842714919999821,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019600000000030704 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21232946000009179,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00816900000000001 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12271550799994202,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007496999999999976 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.011016585999868767,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013569999999998306 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014877160999958505,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013310000000008593 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06110134299990477,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00750499999999979 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05702283899995564,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008533000000000013 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.019234967999977926,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015829999999998623 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.015611754999781624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017599999999998311 s\nthreads: undefined"
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
          "id": "6d1378765f52d8d1717ec10e78f612c45e0d41d9",
          "message": "update doc/files.{am,cmake} to the latest version\n\n* Add zulip-icon-128x128.png\n  * It was just missing from the file list.\n* Update html/_static/*\n  * Follow the new Sphinx",
          "timestamp": "2026-05-21T15:50:51+09:00",
          "tree_id": "e6f12d6fead0bf11d7d4a9cebd0132dcd043b166",
          "url": "https://github.com/abetomo/groonga/commit/6d1378765f52d8d1717ec10e78f612c45e0d41d9"
        },
        "date": 1779347555191,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36300922799995305,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013690000000000035 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2981714219999958,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0177620000000005 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015280305999908705,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003850000000000797 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015729662000012468,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004340000000002675 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.377439503000005,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001450000000000895 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24170222399999375,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005837000000000023 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14292590799999516,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005345999999999795 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01719514599994909,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016379999999999728 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01692116500009888,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001559000000000088 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05928225799982556,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0062929999999997155 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.059743468999897686,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006822999999999996 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017685271000061675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017149999999997168 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01766390800003137,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001642999999999728 s\nthreads: undefined"
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
          "id": "f7a6b0714993d3fbe449861c5026ec30ec28fc0d",
          "message": "remove html/_static/*-stemmer.js\n\nThey are not needed for ja and cause a build error.",
          "timestamp": "2026-05-21T16:07:53+09:00",
          "tree_id": "0fb0335247e499b13085e072d5f844546e521061",
          "url": "https://github.com/abetomo/groonga/commit/f7a6b0714993d3fbe449861c5026ec30ec28fc0d"
        },
        "date": 1779348186781,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39324114600000826,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02011300000000013 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2980601339999964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018872999999999862 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016314775999973108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004620000000006286 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01579137700002775,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004569999999996244 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8561851270000034,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002469999999997474 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2459955360000663,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00892700000000024 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1455405510000105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008152999999999883 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019042761999912727,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002567999999999987 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017929241999979695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019819999999996785 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06289089599988529,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00822299999999987 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06292059299994435,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009705999999999687 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.019887378000021272,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0025640000000002328 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02875679100003481,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0028709999999994573 s\nthreads: undefined"
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
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "34ade3a853bd4614577b2a7d0cd230df265e2292",
          "message": "Start 16.0.6",
          "timestamp": "2026-05-22T14:54:09+09:00",
          "tree_id": "0f2b7c3680440b5d6c63724a6422f79026329ef4",
          "url": "https://github.com/abetomo/groonga/commit/34ade3a853bd4614577b2a7d0cd230df265e2292"
        },
        "date": 1779621675390,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3488189749999151,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01270100000000024 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2803487580000592,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011745000000000089 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015119722999997975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038899999999969515 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015270231000044987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003979999999998429 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4899027559999922,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000296000000000074 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21454919600000721,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006884999999999836 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1363683679999781,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005627999999999939 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016701344000011886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016290000000002136 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016687875000116037,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015679999999997363 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.056654461999869454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007097999999999494 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05710712199993395,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00806899999999991 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02092208900000969,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005624000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019217261999983748,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017400000000003524 s\nthreads: undefined"
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
          "id": "f25d33f0cffe512378ae15f4b9792917dbbcc21b",
          "message": "test query/score_column: fix result_set stage test\n\nThe query was incorrect and resulted in a syntax error, so we corrected it and updated the expected value.",
          "timestamp": "2026-05-26T13:00:27+09:00",
          "tree_id": "01abb2b56e4727f398b4f6227fac4ddd031695fb",
          "url": "https://github.com/abetomo/groonga/commit/f25d33f0cffe512378ae15f4b9792917dbbcc21b"
        },
        "date": 1779768455273,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3658479910000665,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013862999999999903 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27316911299999447,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011262999999999843 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015340729999991254,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004179999999998074 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01553184199997304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004249999999998977 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.604852046000019,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00039600000000006297 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21715410099989185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007493999999999973 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13784111399996846,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005963000000000329 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016441974000031223,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016200000000000103 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016584802999943804,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001594000000000012 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0551102879999803,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007489000000000384 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05792791199996827,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007386000000000031 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016792248000001564,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015270000000002504 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018387067999981355,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016509999999999303 s\nthreads: undefined"
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
          "id": "8cb5c6b7846f737564151be2a44bfce24066d380",
          "message": "language-model: fix crash on empty content\n\nWhen the text is empty, input is `NULL` and it crashes.\n`tokenize(input, tokens)` calls `strlen(NULL)` to compute the length, which causes the crash.\nUsing `std::string_view(input, input_size)` avoids `strlen(NULL)`.",
          "timestamp": "2026-06-16T15:11:46+09:00",
          "tree_id": "30b77b7be4793f286b3d5bf6be8e1824b4cf988b",
          "url": "https://github.com/abetomo/groonga/commit/8cb5c6b7846f737564151be2a44bfce24066d380"
        },
        "date": 1781591271424,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4088874310000392,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022539999999999782 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2892390930002193,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0171679999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015150735000133864,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042900000000017924 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015945588999898064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004119999999998569 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7135818250000057,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00036799999999992394 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23629783899991708,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006803000000000087 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13387395799998103,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005383999999999722 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017030383999895093,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017260000000000053 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017244496000103027,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016310000000003544 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060585479999872405,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007229000000000166 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0674689899999521,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008884000000000863 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.022727660000100514,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005771999999999805 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026345335999963027,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014789999999998416 s\nthreads: undefined"
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
          "id": "1fa733c13436a90ec0fda83611c1c0efefa31ee4",
          "message": "expr: fix double free of temporary hash in sort_keys\n\nFor example, if you specify `language_model_knn(text, \"male child\", { \"k\" : 2 })` as `sort_keys`.\nFor the `{ \"k\" : 2 }` option, in grn_select_sort(), the value is freed after it is parsed,\nand there is another free operation after processing is complete.\n\nIf not deep copied, this will cause a crash due to a double free, so we make a copy.",
          "timestamp": "2026-06-27T22:05:03+09:00",
          "tree_id": "61cf2897df4a82ec02ffe7a2d68c7f8a9ddd5b2d",
          "url": "https://github.com/abetomo/groonga/commit/1fa733c13436a90ec0fda83611c1c0efefa31ee4"
        },
        "date": 1782566703965,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36340367699995113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017419000000000046 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2769908959999725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01735700000000026 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016854937999937647,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003699999999997594 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015446348000011767,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036500000000017074 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4703131100000064,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003799999999999082 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2215669549999575,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00624600000000014 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12777817599999253,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006233000000000183 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016782431000081033,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015430000000002941 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01699810200000229,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001629000000000047 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.059800236999990375,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006196999999999772 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0593902590000539,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006764000000000103 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017622141999993346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001481000000000593 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0243248339999127,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001598000000000932 s\nthreads: undefined"
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
          "distinct": false,
          "id": "6656f4d99f916ef6312d6d0c39405e2e9aa2c8ef",
          "message": "json_extract: add (#2843)\n\nIt's a function that extract values from a JSON by a JSONPath.\n\nThis is an experimental feature.",
          "timestamp": "2026-06-27T06:43:05+09:00",
          "tree_id": "df334dfd42599b5c6d19245414813fc087a30176",
          "url": "https://github.com/abetomo/groonga/commit/6656f4d99f916ef6312d6d0c39405e2e9aa2c8ef"
        },
        "date": 1782568206863,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4078139289999285,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021542999999999896 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28511404400001084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016071999999999975 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01578215699998964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004700000000001925 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015753786000004766,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003210000000001545 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5031531809999592,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018799999999991046 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2455522370000267,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005893999999999691 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1386893999999188,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005783999999999845 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01728544200000215,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016049999999997455 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017455429999984062,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015590000000001714 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.057769497999800024,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00647199999999995 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05939683500002957,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0071010000000000795 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.020387372000016057,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001825999999999467 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.021387880000020232,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015440000000002951 s\nthreads: undefined"
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
          "id": "0c7bf8a1fd9dda7c67ad355faa4f390dbdfd5833",
          "message": "expr: fix double free of temporary hash in sort_keys\n\nFor example, if you specify `language_model_knn(text, \"male child\", { \"k\" : 2 })` as `sort_keys`.\nFor the `{ \"k\" : 2 }` option, in grn_select_sort(), the value is freed after it is parsed,\nand there is another free operation after processing is complete.\n\nIf not copied, this will cause a crash due to a double free, so we make a copy.",
          "timestamp": "2026-06-27T22:25:10+09:00",
          "tree_id": "78316305da06900ac7be6eb1f379084779ea86b2",
          "url": "https://github.com/abetomo/groonga/commit/0c7bf8a1fd9dda7c67ad355faa4f390dbdfd5833"
        },
        "date": 1782569519201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3481529169999362,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013376000000000027 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2639825479999445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011236999999999692 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01485500699996578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004749999999997534 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015281724000004715,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039999999999995595 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5058058109999877,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00039199999999994795 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21250103900001704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006550999999999946 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12909207799998512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005729000000000151 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016377009000024145,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016249999999999598 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016610522000007677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015729999999999356 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05217221199993105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006703000000000042 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05700856700002532,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007710000000000328 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017590041000005385,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016530000000005707 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02388659500002177,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015780000000002459 s\nthreads: undefined"
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
          "id": "3932c8ceb4ca3ddbc0618e9511e7bdac53749a15",
          "message": "expr: fix double free of temporary hash in sort_keys\n\nFor example, if you specify `language_model_knn(text, \"male child\", { \"k\" : 2 })` as `sort_keys`.\nFor the `{ \"k\" : 2 }` option, in grn_select_sort(), the value is freed after it is parsed,\nand there is another free operation after processing is complete.\n\nIf not copied, this will cause a crash due to a double free, so we make a copy.",
          "timestamp": "2026-06-27T22:31:58+09:00",
          "tree_id": "fcce711f923512ee2681387a919bfe6868368d69",
          "url": "https://github.com/abetomo/groonga/commit/3932c8ceb4ca3ddbc0618e9511e7bdac53749a15"
        },
        "date": 1782570823181,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36679434999996374,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016947999999999963 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2894103480000467,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01927899999999949 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015079060000061872,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003720000000002055 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024391039999954955,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003469999999998752 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4603728320000187,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003990000000000382 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.226336066999977,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006476000000000037 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12773336699996207,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005555999999999922 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016839343000015106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018650000000000055 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016952784000011434,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015140000000000986 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.058370300999968094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006431000000000325 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.059757707000017035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007538999999999713 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01708124399999633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016159999999998953 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017973731000040516,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017880000000003449 s\nthreads: undefined"
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
          "id": "d764889af3d157c648d866b1379f6ac35a1be51e",
          "message": "expr: fix double free of temporary hash in sort_keys\n\nFor example, if you specify `language_model_knn(text, \"male child\", { \"k\" : 2 })` as `sort_keys`.\nFor the `{ \"k\" : 2 }` option, in grn_select_sort(), the value is freed after it is parsed,\nand there is another free operation after processing is complete.\n\nIf not copied, this will cause a crash due to a double free, so we make a copy.",
          "timestamp": "2026-06-27T22:36:16+09:00",
          "tree_id": "1576970100d9378ea28123a518ef2723f5dae007",
          "url": "https://github.com/abetomo/groonga/commit/d764889af3d157c648d866b1379f6ac35a1be51e"
        },
        "date": 1782571589839,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36197937399995794,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01699999999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25357519700003195,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01204399999999986 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015112139999985175,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004579999999996254 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015569688999988784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003610000000003888 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5059571140000116,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004249999999998699 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22445738899989465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007311000000000206 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13236869499996828,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007213000000000469 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016392626000026667,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014849999999999586 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016767029999982697,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015079999999998706 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05944454700002666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0066419999999997315 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06054217699994524,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007823000000000024 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017980529999988448,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016990000000007555 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026112687999983564,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001589000000000118 s\nthreads: undefined"
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
          "id": "4e1401b94d82579060b016f4589f352c37ddc457",
          "message": "expr: fix double free of temporary hash in sort_keys\n\nFor example, if you specify `language_model_knn(text, \"male child\", { \"k\" : 2 })` as `sort_keys`.\nFor the `{ \"k\" : 2 }` option, in grn_select_sort(), the value is freed after it is parsed,\nand there is another free operation after processing is complete.\n\nIf not copied, this will cause a crash due to a double free, so we make a copy.",
          "timestamp": "2026-06-28T09:32:51+09:00",
          "tree_id": "300706eeac6d90b7ee38363a0165e4877c5fcc63",
          "url": "https://github.com/abetomo/groonga/commit/4e1401b94d82579060b016f4589f352c37ddc457"
        },
        "date": 1782607254035,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36129600800018125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015569000000000166 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25409954500003096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011444000000000135 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015304712999864023,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003269999999995221 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024775757999918824,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004519999999996749 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.345278336999968,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00034399999999989994 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22180986500018207,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005093999999999904 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1281178210000462,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00504999999999961 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017094843999984732,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017020000000001756 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016890902000000096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016449999999998965 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05811403999996401,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005943000000000309 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.058895361999930174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00618199999999991 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017967358000078093,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016180000000002581 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0181060059999254,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016839999999991861 s\nthreads: undefined"
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
          "id": "a4c47a7b6f738348fb563b5c47c31160152aa910",
          "message": "expr: fix double free of temporary hash in sort_keys\n\nFor example, if you specify `language_model_knn(text, \"male child\", { \"k\" : 2 })` as `sort_keys`.\nFor the `{ \"k\" : 2 }` option, in grn_select_sort(), the value is freed after it is parsed,\nand there is another free operation after processing is complete.\n\nIf not copied, this will cause a crash due to a double free, so we make a copy.",
          "timestamp": "2026-07-01T21:21:45+09:00",
          "tree_id": "2f92a0c855f1bd1e5fc8d95066544d9a231c8fb1",
          "url": "https://github.com/abetomo/groonga/commit/a4c47a7b6f738348fb563b5c47c31160152aa910"
        },
        "date": 1782909073811,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37349292100003595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014249999999999749 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28212067100008653,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014811999999999603 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01607694599988463,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040799999999990844 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020528694999939034,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044200000000024775 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6258253500000137,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004149999999996379 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24633801299989955,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006882000000000069 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13826626300010503,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006137999999999977 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01712622200000169,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016519999999999868 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017140915000027235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016370000000000273 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06062245400005395,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006669000000000008 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.061279453999929956,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007310999999999401 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018428048000032504,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017470000000002206 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024985457999946448,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014859999999998763 s\nthreads: undefined"
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
          "id": "92d29efd6e9799c850a4f7dc23a1ab54f32f64f6",
          "message": "Potential fix for pull request finding\n\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2026-07-01T21:34:28+09:00",
          "tree_id": "b2f1894b575815c8d90f1f3579f243e39693d435",
          "url": "https://github.com/abetomo/groonga/commit/92d29efd6e9799c850a4f7dc23a1ab54f32f64f6"
        },
        "date": 1782909794217,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39731828800003655,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0199060000000002 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27396528299999545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013544999999999807 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016493895999985853,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00047200000000025 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.0260137450000002,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005000000000000004 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.838536511000001,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00029300000000009874 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24950811999997313,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007906999999999623 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14660114000002977,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007978000000000013 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01759345900001108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016079999999998873 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018550219000019297,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015590000000002824 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0594705660000443,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070730000000004956 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06379326499995841,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009093999999999741 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018824080000030108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017299999999997873 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028342893999990793,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00224899999999989 s\nthreads: undefined"
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
          "id": "b0b465557c95ecec9936dd86dd968711e0083dd9",
          "message": "expr: fix double free of temporary hash in sort_keys\n\nFor example, if you specify `language_model_knn(text, \"male child\", { \"k\" : 2 })` as `sort_keys`.\nFor the `{ \"k\" : 2 }` option, in grn_select_sort(), the value is freed after it is parsed,\nand there is another free operation after processing is complete.\n\nIf not copied, this will cause a crash due to a double free, so we make a copy.",
          "timestamp": "2026-07-01T21:40:26+09:00",
          "tree_id": "4308990da4228d7b5a722b2cfbe4d70373d76e44",
          "url": "https://github.com/abetomo/groonga/commit/b0b465557c95ecec9936dd86dd968711e0083dd9"
        },
        "date": 1782910376143,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34674027500003035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013349999999999793 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26165453500001945,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01298199999999955 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015520536999986234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039100000000028 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014981043999995336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003369999999998097 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5363591210000038,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00044400000000011097 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2221655950000354,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006601999999999955 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12870096599996828,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005930999999999825 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016133515000007037,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016810000000001268 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016484594000019115,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014240000000003417 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05813658499999974,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006298999999999971 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.060184542000001784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007183999999999746 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017307778000002827,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016169999999999518 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.022045294000008653,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015129999999997645 s\nthreads: undefined"
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
          "id": "852e24f8e111de2b2c37c967f9766e1c113d8101",
          "message": "Potential fix for pull request finding\n\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2026-07-01T21:51:54+09:00",
          "tree_id": "9a23ecae0b5fbe0051093bd49e9c2bf6ed99cf7f",
          "url": "https://github.com/abetomo/groonga/commit/852e24f8e111de2b2c37c967f9766e1c113d8101"
        },
        "date": 1782910780001,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36244063100002677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014186000000000143 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2722176590000345,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013921999999999851 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01774906399992915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003859999999997754 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020440809999968224,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000404000000000293 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5798266420000004,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002169999999999117 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23120789900002592,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006970999999999963 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13556138600000622,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006744000000000527 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019378204999952686,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014729999999995302 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.021824620999893796,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013700000000000656 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06083232599996791,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00667400000000018 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.061708016000068255,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007800999999999947 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.021081578999996964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001592999999999789 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03113049300009152,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016980000000006434 s\nthreads: undefined"
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
          "id": "c7d4932da5d02cb741698994feea4a67f840bf0e",
          "message": "Apply suggestions from code review\n\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2026-07-01T22:02:05+09:00",
          "tree_id": "ff50bf65c8cc90697d342f14aab51bc1f21470f0",
          "url": "https://github.com/abetomo/groonga/commit/c7d4932da5d02cb741698994feea4a67f840bf0e"
        },
        "date": 1782911711910,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3749217589999887,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014422000000000212 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.3022211830000572,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018844999999999862 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018351979000016172,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040600000000026726 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.019467823000013595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003629999999998912 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4287065549999909,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001799999999998747 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24000146500000596,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00750499999999997 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13700384999989978,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006595000000000184 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.02000121099999319,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016500000000000126 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02076375100003247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016350000000002751 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060574686999956384,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006117000000000344 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06088869299995281,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006848000000000243 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.019841712000015832,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016380000000000006 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02143836500002294,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017039999999998723 s\nthreads: undefined"
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
          "id": "cbdd3074ca38ae0372eb52fbc2078626da249e93",
          "message": "Refactoring",
          "timestamp": "2026-07-04T10:26:15+09:00",
          "tree_id": "42058761c2d44a32c27f9f5664d26e95b132c8a8",
          "url": "https://github.com/abetomo/groonga/commit/cbdd3074ca38ae0372eb52fbc2078626da249e93"
        },
        "date": 1783128888888,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3571384740000667,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014554999999999957 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2881007949999912,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01972399999999977 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01522460099994305,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035500000000010523 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01629691499999808,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000388000000000277 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.343419535999999,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003770000000000162 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22848349399998824,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005842000000000097 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12824584000009054,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005012000000000072 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016625978000035957,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001535000000000064 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017653379999956087,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016310000000001046 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06329868300002772,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0063780000000001474 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06408768200003578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007343999999999656 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02473647899989828,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017579999999998708 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024961916999984624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017050000000007337 s\nthreads: undefined"
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
          "id": "4f1ad2fe6843ce55beb866a67d5082bb4592e2e8",
          "message": "Register option hashes via grn_expr_take_obj()",
          "timestamp": "2026-07-04T10:51:43+09:00",
          "tree_id": "f446f1af87aa004e9828f38fe2eeded9c3b8e445",
          "url": "https://github.com/abetomo/groonga/commit/4f1ad2fe6843ce55beb866a67d5082bb4592e2e8"
        },
        "date": 1783131421574,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.2896642530000406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0112020000000001 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.22786473799996543,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009588000000000013 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.011590115000046808,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00027499999999999747 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012167511999990666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00028400000000039505 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7529452370000058,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004030000000000422 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.18119449699997858,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00636799999999986 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1188274249999779,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005263000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.012785549999989598,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012720000000001619 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01344956899998806,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012990000000003832 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.052374694000093314,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006582999999999714 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.059497262000036244,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007260999999999962 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017091385999975728,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014420000000003874 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017406868000023223,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016089999999999716 s\nthreads: undefined"
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
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "0befc82cf0b99dedde91db757a0297b7adf5f02d",
          "message": "Start 16.0.9",
          "timestamp": "2026-07-13T12:12:30+09:00",
          "tree_id": "5ff6e55d3f76ada18c8c86b6ebe9b9b38c916add",
          "url": "https://github.com/abetomo/groonga/commit/0befc82cf0b99dedde91db757a0297b7adf5f02d"
        },
        "date": 1783987324280,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37550164399993946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016123 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2755418369999916,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013932999999999834 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01895356099998935,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005419999999998759 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021042186000101992,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003699999999998982 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7106356370000526,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000500000000000167 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24769672399997944,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007577999999999821 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.143223500999909,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006149999999999961 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.02042760699993096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001792999999999767 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022765739000021767,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016239999999999033 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05741981200003465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006900999999999963 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06167771100007258,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007850000000000745 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02193209400007845,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001966999999999719 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024006481999947482,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017589999999999273 s\nthreads: undefined"
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
          "id": "77eab13cad74e383a4248e0583b4b1d67b7d2d1d",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-14T15:06:29+09:00",
          "tree_id": "a7732d8f110a1931ed803633153bdd676ba0fd8b",
          "url": "https://github.com/abetomo/groonga/commit/77eab13cad74e383a4248e0583b4b1d67b7d2d1d"
        },
        "date": 1784009488442,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.2943528540000102,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011136999999999994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.22629337999990184,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00941700000000012 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.011426081999957205,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003429999999998712 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012285604999931365,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00029699999999976967 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.2573182510000152,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003719999999999557 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.18328777599998602,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005547999999999748 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1196436230000586,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00478500000000015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.013001944999928128,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012920000000002652 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.013058040999965215,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012679999999997416 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.04952256100000341,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005969000000000169 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05463267199996835,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0060769999999998325 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.013576052999951571,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014620000000009625 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.013212963000057698,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013670000000000904 s\nthreads: undefined"
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
          "id": "73e3234790d996e3ba7d4eb6e7a02ab6b5e449f6",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-14T15:09:58+09:00",
          "tree_id": "78b2b585af455e3acbe708ad7f0bc31916e04c36",
          "url": "https://github.com/abetomo/groonga/commit/73e3234790d996e3ba7d4eb6e7a02ab6b5e449f6"
        },
        "date": 1784009734219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3994271670000842,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020573999999999787 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.30006903800000373,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01857899999999979 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018175626999919814,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033199999999999896 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021005151999986538,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043400000000004546 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4354045260000134,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00025999999999998247 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24689814100003105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006164999999999907 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14320176300003595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006151000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.020813838000009355,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016200000000004267 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022667438000013362,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016690000000001148 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060639528000024256,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006521999999999861 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.058089059000025145,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0062249999999998695 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02086832799997751,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017339999999996802 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028822596999987127,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016800000000003479 s\nthreads: undefined"
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
          "id": "3480757f24410af31ef8a30acffb8a5464ba7755",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-14T15:32:05+09:00",
          "tree_id": "c358f275d712c831770b35fb58d28c92ae448c64",
          "url": "https://github.com/abetomo/groonga/commit/3480757f24410af31ef8a30acffb8a5464ba7755"
        },
        "date": 1784011239357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3920458470000199,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020114000000000215 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28577852700001927,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016828000000000315 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.019211586000039915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004889999999995454 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021311144000009108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005220000000001335 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 2.010309946999996,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004390000000000782 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24808482600002435,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008880000000000166 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14648833600006128,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008454999999999963 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.02022706999997581,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0021269999999996847 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022886337999977968,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019160000000002786 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05888791400008131,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008526000000000394 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06294085100012126,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008492000000000693 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02250988700001244,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002688999999999664 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028491153000004488,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0023010000000001918 s\nthreads: undefined"
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
          "id": "b940f4fd8bb44297758e1c89e0a2afecd1f8c6cc",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-14T16:09:13+09:00",
          "tree_id": "336a88a36451835df516276d8da7e81eaa6309b8",
          "url": "https://github.com/abetomo/groonga/commit/b940f4fd8bb44297758e1c89e0a2afecd1f8c6cc"
        },
        "date": 1784013747320,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37531915700026275,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015655000000000002 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2756026760000623,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01377899999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018485511000221777,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033799999999994945 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021068385999910788,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003840000000000232 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4759454569999662,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002499999999999447 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24312450500008254,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006067999999999754 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13874021199990239,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00494999999999976 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019725172000107705,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015989999999999616 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022039913999947203,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014959999999999696 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05894186400007584,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006585999999999828 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0567515180001692,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0062709999999995825 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0206265170000961,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001740999999999382 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02261649000001853,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001534000000000535 s\nthreads: undefined"
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
          "id": "70da53b819291ce75a2750a20098205332273c3a",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-14T16:13:06+09:00",
          "tree_id": "417801f2e7daf2505dd8d10461253af4c97f4dba",
          "url": "https://github.com/abetomo/groonga/commit/70da53b819291ce75a2750a20098205332273c3a"
        },
        "date": 1784014058075,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4018896269999743,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02157799999999971 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2715992809999648,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012644999999999434 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018810527999960414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004240000000001465 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021121713000013642,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003989999999998717 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5555897680000044,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00034300000000000996 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24771516799995652,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00713900000000027 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1441144600000257,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006884999999999725 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01999347199995327,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015370000000000383 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022662480999940726,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015950000000001519 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05926928100012674,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007077999999999862 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.061670262000006915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007606999999999697 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.021494774000018424,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001750999999999947 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.023269317000028877,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016510000000001246 s\nthreads: undefined"
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
          "id": "59d3ee5acfe46ffe7f9133907ee6fc07e52c141c",
          "message": "Potential fix for pull request finding\n\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2026-07-14T16:31:54+09:00",
          "tree_id": "ab754d85c366839f48375391cdc7dfae9511da4a",
          "url": "https://github.com/abetomo/groonga/commit/59d3ee5acfe46ffe7f9133907ee6fc07e52c141c"
        },
        "date": 1784014672464,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3904516989997546,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02001999999999987 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2838019920000079,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015332999999999875 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018710496000153398,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004220000000003665 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01695118099996762,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003389999999998672 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5711089119999997,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002939999999999887 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24793491700006598,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008371000000000281 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1416714490000004,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005499999999999783 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01954710800009707,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016410000000002256 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.021838792000039575,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001578999999999997 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05589103300030729,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006663000000000224 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06175361400005386,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008983999999999714 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.021009692000120594,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018579999999998043 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.022952265000071748,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016639999999994437 s\nthreads: undefined"
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
          "id": "6d906e71212daf1deba32a8c02fb59cb38cf690e",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-14T16:42:51+09:00",
          "tree_id": "9e293b5717934c0187faa74d3e2f701a9c875a08",
          "url": "https://github.com/abetomo/groonga/commit/6d906e71212daf1deba32a8c02fb59cb38cf690e"
        },
        "date": 1784016110812,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3793019889999698,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014989999999999892 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2727912260000096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01111400000000004 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015239341000039985,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004089999999998817 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015752310999999963,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040299999999965364 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5340098249999983,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004509999999999792 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2316536410000083,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00648199999999996 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13752264300001116,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005956999999999907 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015735947999985456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017259999999997555 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016839924000009887,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001696000000000586 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05512078399991083,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0077419999999999295 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05974163800001975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007728000000000151 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017627362999945717,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016519999999999868 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017424735999981067,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001694999999999336 s\nthreads: undefined"
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
          "id": "36f4aa597e9401d6c3ec3e62ab9887423e2237b6",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-14T17:09:08+09:00",
          "tree_id": "adb5a53bd73313ed1e82b1134e1b8c149002902b",
          "url": "https://github.com/abetomo/groonga/commit/36f4aa597e9401d6c3ec3e62ab9887423e2237b6"
        },
        "date": 1784017593911,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.2677600879999602,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007009000000000112 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.187485836999997,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005367000000000038 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.010015430000009928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003229999999998512 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.010042733999966913,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000272000000000272 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 2.732909752000012,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003019999999998024 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.17255117799996356,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004443000000000169 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.10324522599995589,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004283999999999913 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.011082392000048458,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0011740000000000222 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.010963487999958943,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0010819999999998053 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.04438402000002384,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004893000000000446 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.055158078999994586,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006194000000000421 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.011348242999986269,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012230000000000574 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01654592799999932,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012520000000000309 s\nthreads: undefined"
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
          "id": "198fc96eafe9acfaa5a7d77963b670db0da10f89",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-14T17:23:33+09:00",
          "tree_id": "fe2810cd035c92de33c4355685f9b30eeda72af7",
          "url": "https://github.com/abetomo/groonga/commit/198fc96eafe9acfaa5a7d77963b670db0da10f89"
        },
        "date": 1784018534378,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.373352432000047,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015516999999999892 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27634387699998797,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012332000000000037 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015552922000011904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004490000000000882 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015386172000035003,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040199999999995795 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6532925749999947,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00026900000000013025 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21976259199999504,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007764000000000076 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14079322500001012,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006479999999999514 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016398240000029318,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017470000000003871 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017006374000004598,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016169999999996465 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05416740799998365,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007502999999999926 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05745019899995896,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007609999999999534 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016638558000011017,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019130000000009695 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.020029888000010487,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016510000000001523 s\nthreads: undefined"
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
          "id": "777f7fcd84d4cfbbce827c69e2bcbc6e7fe8082e",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-15T09:28:42+09:00",
          "tree_id": "f223a0edc1667ac91f9d7740ca9716fb223b53f9",
          "url": "https://github.com/abetomo/groonga/commit/777f7fcd84d4cfbbce827c69e2bcbc6e7fe8082e"
        },
        "date": 1784075787095,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3819920389999538,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015046000000000101 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2751448030001029,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01312799999999964 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.020327859999952125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004799999999998972 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02129888000001756,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004450000000000287 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3771885069999712,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015000000000020552 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24076448599987543,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005095000000000016 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1393662119999135,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004976999999999787 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.0196852329999615,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001558999999999977 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02215809500000887,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015049999999998676 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060351360999959525,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005861999999999826 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05768415099998947,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006503000000000481 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.026545476000023882,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016670000000000018 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.027709070999947016,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018950000000002298 s\nthreads: undefined"
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
          "id": "cddc74369bda8058be43c50a1e8505e208abf6ac",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-15T09:48:08+09:00",
          "tree_id": "f81adc412e2765205e19b3b94ab1451f86b3b9d3",
          "url": "https://github.com/abetomo/groonga/commit/cddc74369bda8058be43c50a1e8505e208abf6ac"
        },
        "date": 1784077583274,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36970760999997765,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01439900000000005 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.3040279239999677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020238000000000117 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018940716000031443,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043199999999998795 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020907683000075394,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045000000000006146 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6756420599999728,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00019900000000028228 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24805097000000842,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008162000000000252 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14713988799991284,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00806800000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01987844900008895,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001711000000000129 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022653603999970073,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016420000000000323 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06131919200009861,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006613999999999648 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06571564000000762,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00705799999999962 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.027198858999952336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0021949999999997805 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0377885400000082,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0027439999999994136 s\nthreads: undefined"
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
          "id": "8a8a64bea9e0a34428431aa078feadd6b6105ab4",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-15T10:34:32+09:00",
          "tree_id": "c0b69957e23744195e737f865fa2f39d99761a5f",
          "url": "https://github.com/abetomo/groonga/commit/8a8a64bea9e0a34428431aa078feadd6b6105ab4"
        },
        "date": 1784079513659,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3582847219998939,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014063000000000103 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2750142190002407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011703999999999604 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015268850000211387,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004290000000000682 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015462522999996509,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003820000000001045 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5672188280000228,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00032899999999999596 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2163764760000504,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006333000000000005 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14101060300004065,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005885000000000168 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016409600999963914,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017389999999999628 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017220909000002393,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015939999999999843 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.059908580000183065,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007099999999999884 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.060740772000144716,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007578000000000307 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.022442756999794256,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018239999999997702 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.023568781000108174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016989999999997563 s\nthreads: undefined"
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
          "id": "2f80f095df82fc7eef894062c71163c95b7d7c3f",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-15T11:33:46+09:00",
          "tree_id": "fb2263b1e86957f7d72b3e56cbc81c0de1cadcc8",
          "url": "https://github.com/abetomo/groonga/commit/2f80f095df82fc7eef894062c71163c95b7d7c3f"
        },
        "date": 1784083058810,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3883295569999916,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018890000000000184 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26479013300004794,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011820000000000191 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018547730000022966,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003940000000002275 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02654859699998724,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004640000000004363 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5465936999999883,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018399999999998973 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24461741300004292,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006916999999999951 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1419981099999461,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006144999999999845 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.021270358000009537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016249999999995712 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022648035999992544,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019200000000000328 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06088467800000785,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006662999999999641 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06257026500006191,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008508000000000154 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.03157355700002995,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002252000000000476 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.034599931999991895,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022120000000001583 s\nthreads: undefined"
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
          "id": "4782ebde316da505a22ad8059071ae30f5882d7a",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-15T12:16:47+09:00",
          "tree_id": "16a59ba66b58001b82925a5682714cd13580c66e",
          "url": "https://github.com/abetomo/groonga/commit/4782ebde316da505a22ad8059071ae30f5882d7a"
        },
        "date": 1784085922075,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3846167399999558,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017324000000000145 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29388147000003073,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01893400000000009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018982483999991473,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040299999999970915 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020818513999984134,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003859999999997754 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.567141475000028,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001479999999998982 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24631835200011665,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007972000000000146 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14335999900015395,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0072390000000001065 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019774412999993274,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014169999999997518 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02161778999999342,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001397000000000037 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05815322300003345,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069190000000003415 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06200705999992806,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007557000000000452 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02931404399987514,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017829999999997015 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03332435999993777,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001972000000000279 s\nthreads: undefined"
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
          "id": "dd0233c68067a9c3d5b497648b9946dfb322eed3",
          "message": "string: implement `string_truncate()`\n\nIt truncates long strings, similar to Rails' `truncate` method.\nhttps://api.rubyonrails.org/classes/String.html#method-i-truncate",
          "timestamp": "2026-07-15T13:48:30+09:00",
          "tree_id": "220c27423fc7cd00528163f64a74ec121fb25d33",
          "url": "https://github.com/abetomo/groonga/commit/dd0233c68067a9c3d5b497648b9946dfb322eed3"
        },
        "date": 1784091709240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3634545709999202,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013945999999999736 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2754871250000974,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014213999999999893 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01862588300008383,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004049999999996001 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024502742999970906,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004429999999999712 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5901080379999826,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003480000000001815 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24157755900000666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005818999999999991 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14246828800014555,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006303000000000142 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019660431000033896,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015009999999998636 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0219922370000063,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014779999999999238 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0584912639999402,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006721000000000005 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06226946499987207,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007623000000000213 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02851196900002151,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001940999999999471 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.030378141999960917,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0024859999999995164 s\nthreads: undefined"
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
          "id": "35b94c364fc2c5f6d206cf744fe85ccefd2d09fa",
          "message": "docs: add `string_truncate` reference",
          "timestamp": "2026-07-15T15:10:43+09:00",
          "tree_id": "db38f0f1a54eadce6f1a69528c8e5f1a97735cee",
          "url": "https://github.com/abetomo/groonga/commit/35b94c364fc2c5f6d206cf744fe85ccefd2d09fa"
        },
        "date": 1784096609712,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.380206879000184,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016685000000000047 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29605621499979407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018723999999999463 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018855042000041067,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034800000000001496 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020536216999971657,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003519999999997414 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5144707850000714,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00023100000000014775 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24792828900001496,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0068849999999999745 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1425049389998776,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006327999999999945 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019613972999991347,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016099999999998615 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.021974965000026714,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015619999999996748 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05925534300013169,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006789000000000156 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06160963999991509,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007164000000000087 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.028328544999908445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019480000000000053 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.032957334999878185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022090000000001553 s\nthreads: undefined"
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
          "id": "b5f273893f4fa2feea2a4a2ef7352234c06b6b9d",
          "message": "clang-format: add plugins/functions/string.c\n\nSorted `plugins/*` in alphabetical order.",
          "timestamp": "2026-07-15T15:12:32+09:00",
          "tree_id": "b36deb753efd52b6f6636108ddc4b7f91d07f6e2",
          "url": "https://github.com/abetomo/groonga/commit/b5f273893f4fa2feea2a4a2ef7352234c06b6b9d"
        },
        "date": 1784097379963,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36698413500016613,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014080999999999705 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2847178879999319,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016373999999999667 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01943867899990437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004389999999997729 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.030336291999901732,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005269999999995834 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7749010499999258,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000183000000000072 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2473455430000513,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007838999999999915 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14312072099994566,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006430000000000324 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.020292477999987568,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018340000000000023 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02236816600009206,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001601999999999687 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06264063000003262,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006941000000000072 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0613532770000802,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0075370000000004045 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02634603100023014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019289999999995977 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.035601116999828264,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0021039999999996895 s\nthreads: undefined"
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
          "id": "2cb5cdb4c8934acce124402d53e0a42b80675aba",
          "message": "docs: add `string_truncate` reference",
          "timestamp": "2026-07-15T15:16:08+09:00",
          "tree_id": "8efb4af2c081972d6345b8789d7c28ebd4490e20",
          "url": "https://github.com/abetomo/groonga/commit/2cb5cdb4c8934acce124402d53e0a42b80675aba"
        },
        "date": 1784099585133,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.40524899299992967,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021412999999999627 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28047044799984633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014628999999999559 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01809539099997437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040400000000007097 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02138137000002871,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036899999999978617 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4951487779999866,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00025899999999992596 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24529674999996587,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006044000000000119 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14223271700001305,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006046000000000079 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019737747000078798,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017720000000000236 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.023086640999963493,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015849999999995867 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0619881869999972,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006746000000000252 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06262337699990894,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007397999999999932 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.026166076000038174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018390000000004514 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028930179999974825,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018400000000004801 s\nthreads: undefined"
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
          "id": "ba9df9ed6d3883a5c59885b2e67b12b3db1e95c0",
          "message": "docs: add `string_truncate` reference",
          "timestamp": "2026-07-15T17:15:52+09:00",
          "tree_id": "4bf252f0ae3af676e127a03a0adea426e69a3e2d",
          "url": "https://github.com/abetomo/groonga/commit/ba9df9ed6d3883a5c59885b2e67b12b3db1e95c0"
        },
        "date": 1784103883404,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.21883390799996505,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008705000000000074 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.1667431980000913,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007448999999999872 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.008370834000004379,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00023699999999990395 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.008878337999988162,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00023700000000009824 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.0462901199999806,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015200000000006875 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.13661409099998423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004889000000000157 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.08602947599996469,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.004152999999999879 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.009782844999989493,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0010640000000000094 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.009648477999974148,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0010120000000000406 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.03866761499998006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005880999999999956 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.04781971999997836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005837999999999968 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.012365043999949421,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0011199999999997878 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.012764301999993677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0011740000000000361 s\nthreads: undefined"
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
          "id": "c43c61cf0da07f4af19ce1cf9e166dd38a99a826",
          "message": "docs: add `string_truncate` reference",
          "timestamp": "2026-07-16T10:19:26+09:00",
          "tree_id": "a74190c2c95a9aa968ac05f0a08c3e6a0f6c6451",
          "url": "https://github.com/abetomo/groonga/commit/c43c61cf0da07f4af19ce1cf9e166dd38a99a826"
        },
        "date": 1784167249471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3843902350000974,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018167000000000183 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29429938599992056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01852000000000026 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.019443158000001404,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005100000000004545 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021350269000038224,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004549999999997889 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7738169849999963,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00040599999999990644 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2527366279999512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00906600000000013 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14535905299999285,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008141999999999844 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.020647030999981553,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019879999999998232 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.023653389000003244,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022200000000001385 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06709783599993102,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007142999999999677 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06529329299996789,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008947999999999678 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.03091769400003841,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002623999999999127 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03149284700000976,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0027379999999997406 s\nthreads: undefined"
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
          "id": "72cc36746bc06f3390e75f0ff943d8f21e9d35a1",
          "message": "docs: add `string_truncate` reference",
          "timestamp": "2026-07-16T11:42:50+09:00",
          "tree_id": "663c1340fb1d3c93f2132bd2b198c816db6e6663",
          "url": "https://github.com/abetomo/groonga/commit/72cc36746bc06f3390e75f0ff943d8f21e9d35a1"
        },
        "date": 1784171151942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.369717253000033,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014410999999999924 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2683164240000053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010441999999999924 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014974576000014395,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036000000000036003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015507850000005874,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003960000000004238 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4681983820000255,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018599999999999173 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21849004800009197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006265999999999827 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14030497300001343,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005607000000000084 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016219477999982246,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016870000000002439 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016859773000021505,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016500000000001513 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05628648300000805,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070119999999999905 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.060531957999842234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007254999999999623 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02419707400002835,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019679999999996367 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.021958133999987695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018010000000003856 s\nthreads: undefined"
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
          "id": "4a5e05508a996f7e6c64c5b90d4c9988996f78b2",
          "message": "docs: add `string_truncate` reference",
          "timestamp": "2026-07-16T15:44:06+09:00",
          "tree_id": "b9c27164c6ed37a380330a8146670fa0c1fc3b98",
          "url": "https://github.com/abetomo/groonga/commit/4a5e05508a996f7e6c64c5b90d4c9988996f78b2"
        },
        "date": 1784184496697,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.40156885500005046,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022406999999999955 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2713255339999989,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013176000000000021 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01923671600002308,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005689999999997919 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021585331000039787,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0006450000000004508 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.9737387790000014,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00041399999999996995 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2518492270000081,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008415999999999757 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14687785299997813,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008017000000000343 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.020164440999991484,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001483000000000012 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022561789999997472,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016009999999998525 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06149659499988047,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007015000000000271 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06775699700006044,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008521000000000445 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.028907208999953582,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002854000000000606 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.034736609999924895,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022859999999995106 s\nthreads: undefined"
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
          "id": "db71ff5ad7cb5523db083f6331894a2327dc06c9",
          "message": "docs: add `string_truncate` reference",
          "timestamp": "2026-07-16T16:05:51+09:00",
          "tree_id": "b3b131345213718b7a8bd64be88ffa06662987a2",
          "url": "https://github.com/abetomo/groonga/commit/db71ff5ad7cb5523db083f6331894a2327dc06c9"
        },
        "date": 1784185767688,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4012501999999927,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02164500000000022 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.3008550630000286,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019832000000000294 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.02026995099998885,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005340000000001732 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.022167645999985552,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004900000000001292 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.569526408999991,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002789999999999737 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2429312880000225,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006255999999999984 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14454111800000646,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006786000000000056 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.020125605000032465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016650000000002496 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02276327600000627,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016699999999997828 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060743869000049244,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007061000000000012 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06313248800003635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007685999999999749 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.028288803000037888,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0023699999999995947 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03536547199999518,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002304000000000417 s\nthreads: undefined"
          }
        ]
      }
    ]
  }
}