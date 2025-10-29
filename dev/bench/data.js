window.BENCHMARK_DATA = {
  "lastUpdate": 1761704150241,
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
      }
    ]
  }
}