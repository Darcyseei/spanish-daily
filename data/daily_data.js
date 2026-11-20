// 每日 10 篇西语早报数据包
const DAILY_STORIES = [
  {
    "id": "story_1",
    "tag": "八卦 / 名人",
    "date": "2026-11-20",
    "title": {
      "es": "El traje elegido por Pedro Sánchez para el debate con Feijóo se hace viral en las redes: \"Qué color es ese, por el amor de Dios...\"",
      "en": "The suit chosen by Pedro Sánchez for the debate with Feijóo goes viral on the networks: \"What color is that, for the love of God...\"",
      "cn": "01. 佩德罗·桑切斯 (Pedro Sánchez) 在与 Feijóo 辩论时选择的套装在网络上疯传：“看在上帝的份上，那是什么颜色……”"
    },
    "intro": "用户评价政府总统选择的服装让人想起社会主义美学",
    "sentences": [
      {
        "id": 1,
        "es": "Los usuarios han comentado el vestuario elegido por presidente del Gobierno, que recuerda a la estética socialista de los años 80.",
        "en": "Users have commented on the clothing chosen by the President of the Government, which is reminiscent of the socialist aesthetics of the 80s.",
        "cn": "网友评价政府总统选择的服装让人想起80年代的社会主义审美。",
        "audio": "./assets/audios/story_1_s1.mp3"
      },
      {
        "id": 2,
        "es": "El traje elegido por Pedro Sánchez para el debate con Feijóo se hace viral en las redes: \"Qué color es ese, por el amor de Dios...\"",
        "en": "The suit chosen by Pedro Sánchez for the debate with Feijóo goes viral on the networks: \"What color is that, for the love of God...\"",
        "cn": "佩德罗·桑切斯 (Pedro Sánchez) 在与 Feijóo 辩论时选择的套装在网络上疯传：“看在上帝的份上，那是什么颜色……”",
        "audio": "./assets/audios/story_1_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "traje",
        "pos": "voc.",
        "cn": "套装",
        "en": "suit",
        "example": "Los usuarios han comentado el vestuario elegido por presidente del Gobierno, que recuerda a la estética socialista de los años 80.",
        "audio": "./assets/audios/vocab_story_1_1.mp3"
      },
      {
        "word": "elegido",
        "pos": "voc.",
        "cn": "当选",
        "en": "elected",
        "example": "El traje elegido por Pedro Sánchez para el debate con Feijóo se hace viral en las redes: \"Qué color es ese, por el amor de Dios...\"",
        "audio": "./assets/audios/vocab_story_1_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「traje」在文中的表达",
      "detail": "「traje」在本文语境下表示“套装”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「traje」在文中的中文含义是？",
      "options": [
        "A. 套装",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「traje」在此处意为：套装。"
    },
    "audio_full_normal": "./assets/audios/story_1_normal.mp3",
    "audio_full_slow": "./assets/audios/story_1_slow.mp3"
  },
  {
    "id": "story_2",
    "tag": "八卦 / 名人",
    "date": "2026-11-20",
    "title": {
      "es": "Tu horóscopo diario: viernes 20 de noviembre de 2026",
      "en": "Your daily horoscope: Friday, November 20, 2026",
      "cn": "02. 您的每日星座运势：2026 年 11 月 20 日星期五"
    },
    "intro": "在 20minutos.es 中查看昨天、今天和明天的星座运势",
    "sentences": [
      {
        "id": 1,
        "es": "Consultar el horóscopo de ayer, hoy y mañana en 20minutos.",
        "en": "Consult the horoscope for yesterday, today and tomorrow in 20 minutes.",
        "cn": "20 分钟内查看昨天、今天和明天的星座运势。",
        "audio": "./assets/audios/story_2_s1.mp3"
      },
      {
        "id": 2,
        "es": "Tu horóscopo diario: viernes 20 de noviembre de 2026",
        "en": "Your daily horoscope: Friday, November 20, 2026",
        "cn": "您的每日星座运势：2026 年 11 月 20 日星期五",
        "audio": "./assets/audios/story_2_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "horóscopo",
        "pos": "voc.",
        "cn": "星座运势",
        "en": "horoscope",
        "example": "Consultar el horóscopo de ayer, hoy y mañana en 20minutos.",
        "audio": "./assets/audios/vocab_story_2_1.mp3"
      },
      {
        "word": "diario",
        "pos": "voc.",
        "cn": "日记",
        "en": "diary",
        "example": "Tu horóscopo diario: viernes 20 de noviembre de 2026",
        "audio": "./assets/audios/vocab_story_2_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「horóscopo」在文中的表达",
      "detail": "「horóscopo」在本文语境下表示“星座运势”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「horóscopo」在文中的中文含义是？",
      "options": [
        "A. 星座运势",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「horóscopo」在此处意为：星座运势。"
    },
    "audio_full_normal": "./assets/audios/story_2_normal.mp3",
    "audio_full_slow": "./assets/audios/story_2_slow.mp3"
  },
  {
    "id": "story_3",
    "tag": "八卦 / 名人",
    "date": "2026-11-20",
    "title": {
      "es": "Carlos Latre habla de la relación con su mujer tras su separación: \"Probablemente pasaremos las Navidades juntos\"",
      "en": "Carlos Latre talks about his relationship with his wife after their separation: \"We will probably spend Christmas together\"",
      "cn": "03. 卡洛斯·拉特谈到分居后与妻子的关系：“我们可能会一起过圣诞节”"
    },
    "intro": "这位喜剧演员和他的妻子在一起 22 年后，今年夏天分道扬镳，并育有一个女儿。",
    "sentences": [
      {
        "id": 1,
        "es": "El cómico y su mujer emprendieron caminos separados este verano tras 22 años juntos y una hija en común.",
        "en": "The comedian and his wife went their separate ways this summer after 22 years together and a daughter together.",
        "cn": "这位喜剧演员和他的妻子在一起 22 年后，今年夏天分道扬镳，并育有一个女儿。",
        "audio": "./assets/audios/story_3_s1.mp3"
      },
      {
        "id": 2,
        "es": "Carlos Latre habla de la relación con su mujer tras su separación: \"Probablemente pasaremos las Navidades juntos\"",
        "en": "Carlos Latre talks about his relationship with his wife after their separation: \"We will probably spend Christmas together\"",
        "cn": "卡洛斯·拉特谈到分居后与妻子的关系：“我们可能会一起过圣诞节”",
        "audio": "./assets/audios/story_3_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "carlos",
        "pos": "voc.",
        "cn": "卡洛斯",
        "en": "Carlos",
        "example": "El cómico y su mujer emprendieron caminos separados este verano tras 22 años juntos y una hija en común.",
        "audio": "./assets/audios/vocab_story_3_1.mp3"
      },
      {
        "word": "latre",
        "pos": "voc.",
        "cn": "拉特雷",
        "en": "latre",
        "example": "Carlos Latre habla de la relación con su mujer tras su separación: \"Probablemente pasaremos las Navidades juntos\"",
        "audio": "./assets/audios/vocab_story_3_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「carlos」在文中的表达",
      "detail": "「carlos」在本文语境下表示“卡洛斯”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「carlos」在文中的中文含义是？",
      "options": [
        "A. 卡洛斯",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「carlos」在此处意为：卡洛斯。"
    },
    "audio_full_normal": "./assets/audios/story_3_normal.mp3",
    "audio_full_slow": "./assets/audios/story_3_slow.mp3"
  },
  {
    "id": "story_4",
    "tag": "体育 / 赛事",
    "date": "2026-11-20",
    "title": {
      "es": "Carlos Alcaraz se da una oportunidad y continúa en las ATP Finals pese a sus molestias físicas",
      "en": "Carlos Alcaraz gives himself a chance and continues in the ATP Finals despite his physical discomfort",
      "cn": "04. 卡洛斯·阿尔卡拉斯给自己一个机会，尽管身体不适，但仍继续参加 ATP 决赛"
    },
    "intro": "穆尔西亚人于本周四接受了医学检查，以了解他身体不适的程度。",
    "sentences": [
      {
        "id": 1,
        "es": "El murciano se sometió a una prueba médica este jueves para conocer el alcance de las molestias físicas que sufrió en su partido ante Daniil Medvedev.",
        "en": "The Murcian underwent a medical test this Thursday to find out the extent of the physical discomfort he suffered in his match against Daniil Medvedev.",
        "cn": "穆尔西亚人本周四接受了医学检查，以了解他在对阵丹尼尔·梅德韦杰夫的比赛中身体不适的程度。",
        "audio": "./assets/audios/story_4_s1.mp3"
      },
      {
        "id": 2,
        "es": "Carlos Alcaraz se da una oportunidad y continúa en las ATP Finals pese a sus molestias físicas",
        "en": "Carlos Alcaraz gives himself a chance and continues in the ATP Finals despite his physical discomfort",
        "cn": "卡洛斯·阿尔卡拉斯给自己一个机会，尽管身体不适，但仍继续参加 ATP 决赛",
        "audio": "./assets/audios/story_4_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "carlos",
        "pos": "voc.",
        "cn": "卡洛斯",
        "en": "Carlos",
        "example": "El murciano se sometió a una prueba médica este jueves para conocer el alcance de las molestias físicas que sufrió en su partido ante Daniil Medvedev.",
        "audio": "./assets/audios/vocab_story_4_1.mp3"
      },
      {
        "word": "alcaraz",
        "pos": "voc.",
        "cn": "阿尔卡拉斯",
        "en": "alcaraz",
        "example": "Carlos Alcaraz se da una oportunidad y continúa en las ATP Finals pese a sus molestias físicas",
        "audio": "./assets/audios/vocab_story_4_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「carlos」在文中的表达",
      "detail": "「carlos」在本文语境下表示“卡洛斯”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「carlos」在文中的中文含义是？",
      "options": [
        "A. 卡洛斯",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「carlos」在此处意为：卡洛斯。"
    },
    "audio_full_normal": "./assets/audios/story_4_normal.mp3",
    "audio_full_slow": "./assets/audios/story_4_slow.mp3"
  },
  {
    "id": "story_5",
    "tag": "体育 / 赛事",
    "date": "2026-11-20",
    "title": {
      "es": "Rafa Jódar, eliminado de las ATP Finals: pierde su tercer partido ante Ben Shelton",
      "en": "Rafa Jódar, eliminated from the ATP Finals: loses his third match against Ben Shelton",
      "cn": "05. 拉法·乔达尔 (Rafa Jódar) 在 ATP 总决赛中被淘汰：第三次输给本·谢尔顿 (Ben Shelton)"
    },
    "intro": "西班牙人周四以 7-6 (8) 和 7-5 的比分输给了美国队。",
    "sentences": [
      {
        "id": 1,
        "es": "El español ha perdido este jueves ante el estadounidense por 7-6 (8) y 7-5.",
        "en": "The Spaniard lost this Thursday against the American 7-6 (8) and 7-5.",
        "cn": "西班牙人周四以 7-6 (8) 和 7-5 的比分输给了美国队。",
        "audio": "./assets/audios/story_5_s1.mp3"
      },
      {
        "id": 2,
        "es": "Rafa Jódar, eliminado de las ATP Finals: pierde su tercer partido ante Ben Shelton",
        "en": "Rafa Jódar, eliminated from the ATP Finals: loses his third match against Ben Shelton",
        "cn": "拉法·乔达尔 (Rafa Jódar) 在 ATP 总决赛中被淘汰：第三次输给本·谢尔顿 (Ben Shelton)",
        "audio": "./assets/audios/story_5_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "jódar",
        "pos": "voc.",
        "cn": "他妈的",
        "en": "fuck",
        "example": "El español ha perdido este jueves ante el estadounidense por 7-6 (8) y 7-5.",
        "audio": "./assets/audios/vocab_story_5_1.mp3"
      },
      {
        "word": "eliminado",
        "pos": "voc.",
        "cn": "已删除",
        "en": "removed",
        "example": "Rafa Jódar, eliminado de las ATP Finals: pierde su tercer partido ante Ben Shelton",
        "audio": "./assets/audios/vocab_story_5_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「jódar」在文中的表达",
      "detail": "「jódar」在本文语境下表示“他妈的”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「jódar」在文中的中文含义是？",
      "options": [
        "A. 他妈的",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「jódar」在此处意为：他妈的。"
    },
    "audio_full_normal": "./assets/audios/story_5_normal.mp3",
    "audio_full_slow": "./assets/audios/story_5_slow.mp3"
  },
  {
    "id": "story_6",
    "tag": "体育 / 赛事",
    "date": "2026-11-20",
    "title": {
      "es": "Máxima tensión en la NBA: un árbitro se encara a Luka Doncic en la derrota de los Lakers contra Utah Jazz",
      "en": "Maximum tension in the NBA: a referee confronts Luka Doncic in the Lakers' loss against the Utah Jazz",
      "cn": "06. NBA最紧张的局势：在湖人队输给犹他爵士队的比赛中，裁判与卢卡·东契奇对质"
    },
    "intro": "斯洛文尼亚人在第二节末与特雷·马多克斯发生了扭打。",
    "sentences": [
      {
        "id": 1,
        "es": "El esloveno mantuvo un rifirrafe con Tre Maddox al final del segundo cuarto.",
        "en": "The Slovenian had a scuffle with Tre Maddox at the end of the second quarter.",
        "cn": "斯洛文尼亚人在第二节末与特雷·马多克斯发生了扭打。",
        "audio": "./assets/audios/story_6_s1.mp3"
      },
      {
        "id": 2,
        "es": "Máxima tensión en la NBA: un árbitro se encara a Luka Doncic en la derrota de los Lakers contra Utah Jazz",
        "en": "Maximum tension in the NBA: a referee confronts Luka Doncic in the Lakers' loss against the Utah Jazz",
        "cn": "NBA最紧张的局势：在湖人队输给犹他爵士队的比赛中，裁判与卢卡·东契奇对质",
        "audio": "./assets/audios/story_6_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "máxima",
        "pos": "voc.",
        "cn": "最大限度",
        "en": "maximum",
        "example": "El esloveno mantuvo un rifirrafe con Tre Maddox al final del segundo cuarto.",
        "audio": "./assets/audios/vocab_story_6_1.mp3"
      },
      {
        "word": "tensión",
        "pos": "voc.",
        "cn": "拉紧",
        "en": "strain",
        "example": "Máxima tensión en la NBA: un árbitro se encara a Luka Doncic en la derrota de los Lakers contra Utah Jazz",
        "audio": "./assets/audios/vocab_story_6_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「máxima」在文中的表达",
      "detail": "「máxima」在本文语境下表示“最大限度”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「máxima」在文中的中文含义是？",
      "options": [
        "A. 最大限度",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「máxima」在此处意为：最大限度。"
    },
    "audio_full_normal": "./assets/audios/story_6_normal.mp3",
    "audio_full_slow": "./assets/audios/story_6_slow.mp3"
  },
  {
    "id": "story_7",
    "tag": "文化 / 艺术",
    "date": "2026-11-20",
    "title": {
      "es": "La RAE celebra un pleno en Córdoba en honor al cuarto centenario de Luis de Góngora y a los 100 años de la Generación del 27",
      "en": "The RAE celebrates a plenary session in Córdoba in honor of the fourth centenary of Luis de Góngora and the 100 years of the Generation of '27",
      "cn": "07. RAE 在科尔多瓦举行全体会议，纪念 Luis de Góngora 诞辰 400 周年和“27 一代”100 周年"
    },
    "intro": "破例的是，最高语言机构搬迁了总部以纪念科尔多瓦作家",
    "sentences": [
      {
        "id": 1,
        "es": "De manera excepcional, la institución máxima de la lengua ha trasladado su sede para homenajear a los escritores cordobeses y a otros vinculados con la figura gongorina.",
        "en": "Exceptionally, the highest institution of the language has moved its headquarters to honor Cordoban writers and others linked to the Gongora figure.",
        "cn": "不同寻常的是，该语言的最高机构已将其总部迁至其他地方，以纪念科尔多瓦作家和其他与贡戈拉人物有关的人。",
        "audio": "./assets/audios/story_7_s1.mp3"
      },
      {
        "id": 2,
        "es": "La RAE celebra un pleno en Córdoba en honor al cuarto centenario de Luis de Góngora y a los 100 años de la Generación del 27",
        "en": "The RAE celebrates a plenary session in Córdoba in honor of the fourth centenary of Luis de Góngora and the 100 years of the Generation of '27",
        "cn": "RAE 在科尔多瓦举行全体会议，纪念 Luis de Góngora 诞辰 400 周年和“27 一代”100 周年",
        "audio": "./assets/audios/story_7_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "celebra",
        "pos": "voc.",
        "cn": "庆祝",
        "en": "celebrate",
        "example": "De manera excepcional, la institución máxima de la lengua ha trasladado su sede para homenajear a los escritores cordobeses y a otros vinculados con la figura gongorina.",
        "audio": "./assets/audios/vocab_story_7_1.mp3"
      },
      {
        "word": "pleno",
        "pos": "voc.",
        "cn": "满的",
        "en": "full",
        "example": "La RAE celebra un pleno en Córdoba en honor al cuarto centenario de Luis de Góngora y a los 100 años de la Generación del 27",
        "audio": "./assets/audios/vocab_story_7_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「celebra」在文中的表达",
      "detail": "「celebra」在本文语境下表示“庆祝”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「celebra」在文中的中文含义是？",
      "options": [
        "A. 庆祝",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「celebra」在此处意为：庆祝。"
    },
    "audio_full_normal": "./assets/audios/story_7_normal.mp3",
    "audio_full_slow": "./assets/audios/story_7_slow.mp3"
  },
  {
    "id": "story_8",
    "tag": "文化 / 艺术",
    "date": "2026-11-20",
    "title": {
      "es": "La Fundación Mutua Madrileña inaugura un nuevo espacio cultural en un histórico edificio y con el humanismo de Cervantes",
      "en": "The Mutua Madrileña Foundation inaugurates a new cultural space in a historic building and with the humanism of Cervantes",
      "cn": "08. Mutua Madrileña 基金会在一座历史建筑中开设了一个新的文化空间，并体现了塞万提斯的人文主义"
    },
    "intro": "一个关于《堂吉诃德》作者的大型沉浸式展览装扮了一座已经居住了 2 年的建筑",
    "sentences": [
      {
        "id": 1,
        "es": "Una gran exposición inmersiva sobre el autor del 'Quijote' viste de largo la presentación de un edificio que ha vivido 28 meses de obras y una inversión de 30 millones de euros.",
        "en": "A large immersive exhibition about the author of 'Don Quixote' covers the presentation of a building that has undergone 28 months of work and an investment of 30 million euros.",
        "cn": "一场关于《堂吉诃德》作者的大型沉浸式展览涵盖了一座历时 28 个月、投资 3000 万欧元的建筑的展示。",
        "audio": "./assets/audios/story_8_s1.mp3"
      },
      {
        "id": 2,
        "es": "La Fundación Mutua Madrileña inaugura un nuevo espacio cultural en un histórico edificio y con el humanismo de Cervantes",
        "en": "The Mutua Madrileña Foundation inaugurates a new cultural space in a historic building and with the humanism of Cervantes",
        "cn": "Mutua Madrileña 基金会在一座历史建筑中开设了一个新的文化空间，并体现了塞万提斯的人文主义",
        "audio": "./assets/audios/story_8_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "fundación",
        "pos": "voc.",
        "cn": "基础",
        "en": "foundation",
        "example": "Una gran exposición inmersiva sobre el autor del 'Quijote' viste de largo la presentación de un edificio que ha vivido 28 meses de obras y una inversión de 30 millones de euros.",
        "audio": "./assets/audios/vocab_story_8_1.mp3"
      },
      {
        "word": "mutua",
        "pos": "voc.",
        "cn": "相互的",
        "en": "mutual",
        "example": "La Fundación Mutua Madrileña inaugura un nuevo espacio cultural en un histórico edificio y con el humanismo de Cervantes",
        "audio": "./assets/audios/vocab_story_8_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「fundación」在文中的表达",
      "detail": "「fundación」在本文语境下表示“基础”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「fundación」在文中的中文含义是？",
      "options": [
        "A. 基础",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「fundación」在此处意为：基础。"
    },
    "audio_full_normal": "./assets/audios/story_8_normal.mp3",
    "audio_full_slow": "./assets/audios/story_8_slow.mp3"
  },
  {
    "id": "story_9",
    "tag": "生活 / 资讯",
    "date": "2026-11-20",
    "title": {
      "es": "Feijóo apela a la \"decencia\" y a la \"gestión\" ante un Sánchez que pide votar \"con el alma\"",
      "en": "Feijóo appeals to \"decency\" and \"management\" before Sánchez who asks to vote \"with the soul\"",
      "cn": "09. 费约在要求“用灵魂”投票的桑切斯面前呼吁“正派”和“管理”"
    },
    "intro": "人民党领导人带头谴责腐败、住房和交通问题，而桑克",
    "sentences": [
      {
        "id": 1,
        "es": "El líder del PP ha llevado la iniciativa con sus reproches por la corrupción, la vivienda y el transporte, mientras Sánchez ha defendido su gestión con un tono bastante contenido y ha centrado su estrategia en alertar del giro que supondría un Gobierno de PP y Vox.",
        "en": "The leader of the PP has led the initiative with his reproaches for corruption, housing and transport, while Sánchez has defended his management with a fairly restrained tone and has focused his strategy on warning of the turn that a PP and Vox Government would entail.",
        "cn": "人民党领导人以对腐败、住房和交通问题的谴责为主导，而桑切斯则以相当克制的语气为他的管理层辩护，并将战略重点放在警告人民党和 Vox 政府将带来的转变上。",
        "audio": "./assets/audios/story_9_s1.mp3"
      },
      {
        "id": 2,
        "es": "Feijóo apela a la \"decencia\" y a la \"gestión\" ante un Sánchez que pide votar \"con el alma\"",
        "en": "Feijóo appeals to \"decency\" and \"management\" before Sánchez who asks to vote \"with the soul\"",
        "cn": "费约在要求“用灵魂”投票的桑切斯面前呼吁“正派”和“管理”",
        "audio": "./assets/audios/story_9_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "feijóo",
        "pos": "voc.",
        "cn": "费乔",
        "en": "feijoo",
        "example": "El líder del PP ha llevado la iniciativa con sus reproches por la corrupción, la vivienda y el transporte, mientras Sánchez ha defendido su gestión con un tono bastante contenido y ha centrado su estrategia en alertar del giro que supondría un Gobierno de PP y Vox.",
        "audio": "./assets/audios/vocab_story_9_1.mp3"
      },
      {
        "word": "apela",
        "pos": "voc.",
        "cn": "上诉",
        "en": "appeal",
        "example": "Feijóo apela a la \"decencia\" y a la \"gestión\" ante un Sánchez que pide votar \"con el alma\"",
        "audio": "./assets/audios/vocab_story_9_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「feijóo」在文中的表达",
      "detail": "「feijóo」在本文语境下表示“费乔”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「feijóo」在文中的中文含义是？",
      "options": [
        "A. 费乔",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「feijóo」在此处意为：费乔。"
    },
    "audio_full_normal": "./assets/audios/story_9_normal.mp3",
    "audio_full_slow": "./assets/audios/story_9_slow.mp3"
  },
  {
    "id": "story_10",
    "tag": "生活 / 资讯",
    "date": "2026-11-20",
    "title": {
      "es": "\"Ábalos, Jessica, orgías...\": el momento en que Feijóo enumera los escándalos del PSOE y pide para España un \"presidente decente\"",
      "en": "\"Ábalos, Jessica, orgies...\": the moment when Feijóo lists the PSOE scandals and asks for a \"decent president\" for Spain",
      "cn": "10. “阿巴洛斯、杰西卡、狂欢……”：费约列出西班牙社会党丑闻并要求西班牙选出一位“体面的总统”的那一刻"
    },
    "intro": "人民党领导人通过评估社会党立法机构开始了选举辩论，他在其中提到了一些",
    "sentences": [
      {
        "id": 1,
        "es": "El líder del PP ha arrancado el debate electoral valorando la legislatura del PSOE, en la que ha mencionado algunas de las polémicas que han rodeado al partido socialista.",
        "en": "The PP leader started the electoral debate by evaluating the PSOE legislature, in which he mentioned some of the controversies that have surrounded the socialist party.",
        "cn": "这位人民党领导人通过评估社会党立法机构开始了选举辩论，其中他提到了围绕社会党的一些争议。",
        "audio": "./assets/audios/story_10_s1.mp3"
      },
      {
        "id": 2,
        "es": "\"Ábalos, Jessica, orgías...\": el momento en que Feijóo enumera los escándalos del PSOE y pide para España un \"presidente decente\"",
        "en": "\"Ábalos, Jessica, orgies...\": the moment when Feijóo lists the PSOE scandals and asks for a \"decent president\" for Spain",
        "cn": "“阿巴洛斯、杰西卡、狂欢……”：费约列出西班牙社会党丑闻并要求西班牙选出一位“体面的总统”的那一刻",
        "audio": "./assets/audios/story_10_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "ábalos",
        "pos": "voc.",
        "cn": "阿巴洛斯",
        "en": "abalos",
        "example": "El líder del PP ha arrancado el debate electoral valorando la legislatura del PSOE, en la que ha mencionado algunas de las polémicas que han rodeado al partido socialista.",
        "audio": "./assets/audios/vocab_story_10_1.mp3"
      },
      {
        "word": "jessica",
        "pos": "voc.",
        "cn": "杰西卡",
        "en": "jessica",
        "example": "\"Ábalos, Jessica, orgías...\": el momento en que Feijóo enumera los escándalos del PSOE y pide para España un \"presidente decente\"",
        "audio": "./assets/audios/vocab_story_10_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「ábalos」在文中的表达",
      "detail": "「ábalos」在本文语境下表示“阿巴洛斯”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「ábalos」在文中的中文含义是？",
      "options": [
        "A. 阿巴洛斯",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「ábalos」在此处意为：阿巴洛斯。"
    },
    "audio_full_normal": "./assets/audios/story_10_normal.mp3",
    "audio_full_slow": "./assets/audios/story_10_slow.mp3"
  }
];

module.exports = {
  DAILY_STORIES
};
