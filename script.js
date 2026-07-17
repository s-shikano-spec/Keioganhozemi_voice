// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "確認の上、チェックをお願いします。",
          "content": "これは慶應義塾大学メディア・コミュニケーション研究所　李光鎬研究会による調査です。所要時間は約5分です。\nアンケートの前に、以下の項目への確認をお願いいたします。（全ての項目への同意が必要です。）"
        },
        {
          "required": true,
          "type": "checkbox",
          "options": [
            {
              "label": "このアンケート結果は慶應義塾大学内で保存され、分析されます。"
            },
            {
              "label": "このアンケート結果は研究論文や出版に利用されることがあります。"
            },
            {
              "label": "このアンケート結果はすべて匿名で扱われます。個人が特定されることは一切ありません。"
            },
            {
              "label": "このアンケートは、いつでも中止することができます。"
            },
            {
              "label": "回答内容は調査のみに使用いたします。"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {

const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;3
}
      },
      "title": "Page"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "性別を教えてください"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "男性"
            },
            {
              "label": "女性"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "",
          "title": "年齢をお答えください"
        },
        {
          "required": true,
          "type": "input",
          "label": "年齢",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "99"
          },
          "name": "Age",
          "help": "年齢を半角数字で入力してください"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    },
    {
      "title": "Unnamed task",
      "type": "lab.flow.Sequence",
      "parameters": {},
      "plugins": [],
      "metadata": {
        "title": "",
        "description": "",
        "repository": "",
        "contributors": ""
      },
      "files": {},
      "responses": {},
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "あなたには兄弟姉妹がいますか?"
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "一人っ子である"
                },
                {
                  "label": "異性の兄弟姉妹がいる"
                },
                {
                  "label": "同性の兄弟姉妹のみいる"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "brother"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "あなたは現在、お子さんがいますか。"
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "はい"
                },
                {
                  "label": "いいえ"
                },
                {
                  "label": "回答しない"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Page"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "日本のドラマをどのくらい見ますか。"
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "ほぼ毎日"
                },
                {
                  "label": "週2～3回"
                },
                {
                  "label": "週1回程度"
                },
                {
                  "label": "月に数回"
                },
                {
                  "label": "ほとんど見ない"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Drama"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "次の社会問題について、あなたの関心の程度を教えてください。"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "政治",
                  "coding": "Q1"
                },
                {
                  "label": "環境問題",
                  "coding": "Q2"
                },
                {
                  "label": "AI・テクノロジー",
                  "coding": "Q3"
                },
                {
                  "label": "ジェンダー",
                  "coding": "Q4"
                },
                {
                  "label": "少子高齢化",
                  "coding": "Q5"
                }
              ],
              "width": "5",
              "anchors": [
                "とても関心がある",
                "どちらかというと関心がある",
                "どちらでもない",
                "どちらかというと関心がない",
                "関心がない"
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Page"
        }
      ]
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "audiofile": "gender.wav",
          "": ""
        },
        {
          "audiofile": "womanoffice.wav",
          "": ""
        },
        {
          "audiofile": "womanschool.wav",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "Use all"
      },
      "files": {
        "gender.wav": "embedded\u002F1d522149e955bdd158af54620ce9aa49e61fb6a2152e156d79371c9887d7ccc1.wav",
        "womanschool.wav": "embedded\u002F8fb3d71a6d1f4cd59a390b636bcff5dfe51574b23287098f86f96d728856eb01.wav",
        "womanoffice.wav": "embedded\u002F064314a35a08e64ced8ffa7835d6a018071213f86f1dbc1b5a16dca67d1b8cd9.wav"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "skip": "${this.state.participantID % 3 != 0}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Page",
        "items": [
          {
            "type": "text",
            "title": "この音声を聞いてください。"
          },
          {
            "required": true,
            "type": "html",
            "content": "\u003Cdiv style=\"text-align: center;\"\u003E\n \u003Caudio id=\"audio-player\" src=\"${this.files[parameters.audiofile]}\" autoplay controls\u003E\n   お使いのブラウザは音声再生に対応していません。\n \u003C\u002Faudio\u003E\n\u003C\u002Fdiv\u003E\n",
            "name": ""
          },
          {
            "required": true,
            "type": "likert",
            "items": [
              {
                "label": "楽しい気持ちになった",
                "coding": "Q1"
              },
              {
                "label": "リラックスできた",
                "coding": "Q2"
              },
              {
                "label": "話題性があると思う",
                "coding": "Q3"
              },
              {
                "label": "実用的だと思う",
                "coding": "Q4"
              },
              {
                "label": "感動する",
                "coding": "Q5"
              },
              {
                "label": "作りがいいと思う",
                "coding": "Q6"
              },
              {
                "label": "倫理的に問題がある",
                "coding": "Q7"
              }
            ],
            "width": "5",
            "anchors": [
              "とてもあてはまる",
              "まああてはまる",
              "どちらとも言えない",
              "あまりあてはまらない",
              "全くあてはまらない"
            ],
            "label": "この音声を聞いて感じたことについて答えてください。",
            "name": ""
          }
        ],
        "scrollTop": true,
        "submitButtonText": "次へ",
        "submitButtonPosition": "right",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Page",
        "skip": "${this.state.participantID % 3 != 0}"
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "audiofile": "halfhouse.wav",
          "": ""
        },
        {
          "audiofile": "halfoffice.wav",
          "": ""
        },
        {
          "audiofile": "schoolhalf.wav",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "Use all"
      },
      "files": {
        "halfhouse.wav": "embedded\u002F4f4eba5efdf834f888f3b58bf58db41bd9ad6989d56227e748e008897cffc4de.wav",
        "halfoffice.wav": "embedded\u002F1ef66a4172d12d5ad5d26b7e8d1a9a92cd1def3a11b793b4d4142a593712a5a8.wav",
        "schoolhalf.wav": "embedded\u002F31016cf2160354ed2bd1f706cd066be6b0ff170ff6d53e15ba852d39d95eda6b.wav"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "skip": "${this.state.participantID % 3 != 1}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Page",
        "items": [
          {
            "type": "text",
            "content": "この音声を聞いてください。"
          },
          {
            "required": true,
            "type": "html",
            "content": "\u003Cdiv style=\"text-align: center;\"\u003E\n \u003Caudio id=\"audio-player\" src=\"${this.files[parameters.audiofile]}\" autoplay controls\u003E\n   お使いのブラウザは音声再生に対応していません。\n \u003C\u002Faudio\u003E\n\u003C\u002Fdiv\u003E\n",
            "name": ""
          },
          {
            "required": true,
            "type": "likert",
            "items": [
              {
                "label": "楽しい気持ちになった",
                "coding": "Q1"
              },
              {
                "label": "リラックスできた",
                "coding": "Q2"
              },
              {
                "label": "話題性があると思う",
                "coding": "Q3"
              },
              {
                "label": "実用的だと思う",
                "coding": "Q4"
              },
              {
                "label": "感動する",
                "coding": "Q5"
              },
              {
                "label": "作りがいいと思う",
                "coding": "Q6"
              },
              {
                "label": "倫理的に問題がある",
                "coding": "Q7"
              }
            ],
            "width": "5",
            "anchors": [
              "とてもあてはまる",
              "まああてはまる",
              "どちらとも言えない",
              "あまりあてはまらない",
              "全くあてはまらない"
            ],
            "label": "この音声を聞いて感じたことについて答えてください。",
            "name": ""
          }
        ],
        "scrollTop": true,
        "submitButtonText": "次へ",
        "submitButtonPosition": "right",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Page",
        "skip": "${this.state.participantID % 3 != 1}"
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "audiofile": "menhouse.wav",
          "": ""
        },
        {
          "audiofile": "manoffice.wav",
          "": ""
        },
        {
          "audiofile": "schoolman.wav",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "Use all"
      },
      "files": {
        "menhouse.wav": "embedded\u002Fd44cdc79913c8150fb28edb1ea0b76d8e2f5475c626853b9f5cdba6efbd87f0a.wav",
        "manoffice.wav": "embedded\u002F064314a35a08e64ced8ffa7835d6a018071213f86f1dbc1b5a16dca67d1b8cd9.wav",
        "schoolman.wav": "embedded\u002F8fb3d71a6d1f4cd59a390b636bcff5dfe51574b23287098f86f96d728856eb01.wav"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "skip": "${this.state.participantID % 3 != 2}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Page",
        "items": [
          {
            "type": "text",
            "title": "この音声を聞いてください。",
            "content": "\u003Cdiv style=\"text-align: center;\"\u003E\n \u003Caudio id=\"audio-player\" src=\"${this.files[parameters.audiofile]}\" autoplay controls\u003E\n   お使いのブラウザは音声再生に対応していません。\n \u003C\u002Faudio\u003E\n\u003C\u002Fdiv\u003E"
          },
          {
            "required": true,
            "type": "likert",
            "items": [
              {
                "label": "楽しい気持ちになった",
                "coding": "Q1"
              },
              {
                "label": "リラックスできた",
                "coding": "Q2"
              },
              {
                "label": "話題性があると思う",
                "coding": "Q3"
              },
              {
                "label": "実用的だと思う",
                "coding": "Q4"
              },
              {
                "label": "感動する",
                "coding": "Q5"
              },
              {
                "label": "作りがいいと思う",
                "coding": "Q6"
              },
              {
                "label": "倫理的に問題がある",
                "coding": "Q7"
              }
            ],
            "width": "5",
            "anchors": [
              "とてもあてはまる",
              "まああてはまる",
              "どちらとも言えない",
              "あまりあてはまらない",
              "全くあてはまらない"
            ],
            "label": "この音声を聞いて感じたことについて答えてください。",
            "name": ""
          }
        ],
        "scrollTop": true,
        "submitButtonText": "次へ",
        "submitButtonPosition": "right",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Page"
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "これで調査は以上となります。",
          "content": "本調査はドラマのセリフにおける言葉遣いにおいて、性別を想起させるような表現が視聴行動、視聴者の感情にどのような影響を与えるかを調べていました。\nここで1つ確認させてください。\n実験中にこの研究の目的にお気づきになられましたか？"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "はい"
            },
            {
              "label": "いいえ"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "",
          "title": "アンケートは以上となります。ご協力ありがとうございました。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "kdyOhDzbscFN",
    filename: filename,
    data: data,
  }),
});
}
      },
      "title": "Page",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()