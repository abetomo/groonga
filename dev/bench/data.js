window.BENCHMARK_DATA = {
  "lastUpdate": 1761887045815,
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
      }
    ]
  }
}