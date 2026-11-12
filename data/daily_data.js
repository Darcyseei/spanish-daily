// 每日 10 篇西语早报数据包
const DAILY_STORIES = [
  {
    "id": "story_1",
    "tag": "八卦 / 名人",
    "date": "2026-11-12",
    "title": {
      "es": "Tu horóscopo diario: jueves 12 de noviembre de 2026",
      "en": "Your daily horoscope: Thursday, November 12, 2026",
      "cn": "01. 您的每日星座运势：2026 年 11 月 12 日，星期四"
    },
    "intro": "在 20minutos.es 中查看昨天、今天和明天的星座运势",
    "sentences": [
      {
        "id": 1,
        "es": "Consultar el horóscopo de ayer, hoy y mañana en 20minutos.",
        "en": "Consult the horoscope for yesterday, today and tomorrow in 20 minutes.",
        "cn": "20 分钟内查看昨天、今天和明天的星座运势。",
        "audio": "./assets/audios/story_1_s1.mp3"
      },
      {
        "id": 2,
        "es": "Tu horóscopo diario: jueves 12 de noviembre de 2026",
        "en": "Your daily horoscope: Thursday, November 12, 2026",
        "cn": "您的每日星座运势：2026 年 11 月 12 日，星期四",
        "audio": "./assets/audios/story_1_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "horóscopo",
        "pos": "voc.",
        "cn": "星座运势",
        "en": "horoscope",
        "example": "Consultar el horóscopo de ayer, hoy y mañana en 20minutos.",
        "audio": "./assets/audios/vocab_story_1_1.mp3"
      },
      {
        "word": "diario",
        "pos": "voc.",
        "cn": "日记",
        "en": "diary",
        "example": "Tu horóscopo diario: jueves 12 de noviembre de 2026",
        "audio": "./assets/audios/vocab_story_1_2.mp3"
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
    "audio_full_normal": "./assets/audios/story_1_normal.mp3",
    "audio_full_slow": "./assets/audios/story_1_slow.mp3"
  },
  {
    "id": "story_2",
    "tag": "八卦 / 名人",
    "date": "2026-11-12",
    "title": {
      "es": "Actriz, escultora y diseñadora de joyas: así es María Bernardeu, la hija menor de Ana Duato",
      "en": "Actress, sculptor and jewelry designer: this is María Bernardeu, the youngest daughter of Ana Duato",
      "cn": "02. 女演员、雕塑家和珠宝设计师：这是玛丽亚·贝尔纳多 (María Bernardeu)，安娜·杜阿托 (Ana Duato) 最小的女儿"
    },
    "intro": "这位年轻女子一边学习美术和时装设计，一边继续接受演员培训。",
    "sentences": [
      {
        "id": 1,
        "es": "La joven estudia Bellas Artes y Diseño de moda mientras continúa con su formación como actriz.",
        "en": "The young woman studies Fine Arts and Fashion Design while continuing her training as an actress.",
        "cn": "这位年轻女子一边学习美术和时装设计，一边继续接受演员培训。",
        "audio": "./assets/audios/story_2_s1.mp3"
      },
      {
        "id": 2,
        "es": "Actriz, escultora y diseñadora de joyas: así es María Bernardeu, la hija menor de Ana Duato",
        "en": "Actress, sculptor and jewelry designer: this is María Bernardeu, the youngest daughter of Ana Duato",
        "cn": "女演员、雕塑家和珠宝设计师：这是玛丽亚·贝尔纳多 (María Bernardeu)，安娜·杜阿托 (Ana Duato) 最小的女儿",
        "audio": "./assets/audios/story_2_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "actriz",
        "pos": "voc.",
        "cn": "演员",
        "en": "actress",
        "example": "La joven estudia Bellas Artes y Diseño de moda mientras continúa con su formación como actriz.",
        "audio": "./assets/audios/vocab_story_2_1.mp3"
      },
      {
        "word": "escultora",
        "pos": "voc.",
        "cn": "雕塑家",
        "en": "sculptress",
        "example": "Actriz, escultora y diseñadora de joyas: así es María Bernardeu, la hija menor de Ana Duato",
        "audio": "./assets/audios/vocab_story_2_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「actriz」在文中的表达",
      "detail": "「actriz」在本文语境下表示“演员”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「actriz」在文中的中文含义是？",
      "options": [
        "A. 演员",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「actriz」在此处意为：演员。"
    },
    "audio_full_normal": "./assets/audios/story_2_normal.mp3",
    "audio_full_slow": "./assets/audios/story_2_slow.mp3"
  },
  {
    "id": "story_3",
    "tag": "八卦 / 名人",
    "date": "2026-11-12",
    "title": {
      "es": "Rocío Flores y Manuel Bedmar han roto: él confirma que llevan dos años separados y que trabajan juntos",
      "en": "Rocío Flores and Manuel Bedmar have broken up: he confirms that they have been separated for two years and that they work together",
      "cn": "03. 罗西奥·弗洛雷斯 (Rocío Flores) 和曼努埃尔·贝德玛 (Manuel Bedmar) 分手：他证实他们已经分居两年，并且一起工作"
    },
    "intro": "这位来自马拉加的男子在《下午行动》中宣布了这一消息，尽管他避免澄清有关的谣言",
    "sentences": [
      {
        "id": 1,
        "es": "El malagueño ha dado a conocer la noticia la noticia en 'La tarde se mueve', aunque ha evitado aclarar los rumores sobre una presunta deslealtad.",
        "en": "The man from Málaga announced the news in 'The afternoon moves', although he has avoided clarifying the rumors about alleged disloyalty.",
        "cn": "这位来自马拉加的男子在《下午行动》中宣布了这一消息，尽管他避免澄清有关涉嫌不忠的谣言。",
        "audio": "./assets/audios/story_3_s1.mp3"
      },
      {
        "id": 2,
        "es": "Rocío Flores y Manuel Bedmar han roto: él confirma que llevan dos años separados y que trabajan juntos",
        "en": "Rocío Flores and Manuel Bedmar have broken up: he confirms that they have been separated for two years and that they work together",
        "cn": "罗西奥·弗洛雷斯 (Rocío Flores) 和曼努埃尔·贝德玛 (Manuel Bedmar) 分手：他证实他们已经分居两年，并且一起工作",
        "audio": "./assets/audios/story_3_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "rocío",
        "pos": "voc.",
        "cn": "露",
        "en": "dew",
        "example": "El malagueño ha dado a conocer la noticia la noticia en 'La tarde se mueve', aunque ha evitado aclarar los rumores sobre una presunta deslealtad.",
        "audio": "./assets/audios/vocab_story_3_1.mp3"
      },
      {
        "word": "flores",
        "pos": "voc.",
        "cn": "花朵",
        "en": "flowers",
        "example": "Rocío Flores y Manuel Bedmar han roto: él confirma que llevan dos años separados y que trabajan juntos",
        "audio": "./assets/audios/vocab_story_3_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「rocío」在文中的表达",
      "detail": "「rocío」在本文语境下表示“露”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「rocío」在文中的中文含义是？",
      "options": [
        "A. 露",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「rocío」在此处意为：露。"
    },
    "audio_full_normal": "./assets/audios/story_3_normal.mp3",
    "audio_full_slow": "./assets/audios/story_3_slow.mp3"
  },
  {
    "id": "story_4",
    "tag": "体育 / 赛事",
    "date": "2026-11-12",
    "title": {
      "es": "La razón por la que los jugadores de España no hacen huelga: \"No pueden acogerse a ese derecho\"",
      "en": "The reason why Spain's players do not strike: \"They cannot avail themselves of that right\"",
      "cn": "04. 西班牙球员不罢工的原因：“他们无法利用这一权利”"
    },
    "intro": "看看国家队球员是否有罢工权。",
    "sentences": [
      {
        "id": 1,
        "es": "Descubre si los jugadores del combinado nacional tienen derecho a huelga.",
        "en": "Find out if the national team players have the right to strike.",
        "cn": "看看国家队球员是否有罢工权。",
        "audio": "./assets/audios/story_4_s1.mp3"
      },
      {
        "id": 2,
        "es": "La razón por la que los jugadores de España no hacen huelga: \"No pueden acogerse a ese derecho\"",
        "en": "The reason why Spain's players do not strike: \"They cannot avail themselves of that right\"",
        "cn": "西班牙球员不罢工的原因：“他们无法利用这一权利”",
        "audio": "./assets/audios/story_4_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "razón",
        "pos": "voc.",
        "cn": "原因",
        "en": "reason",
        "example": "Descubre si los jugadores del combinado nacional tienen derecho a huelga.",
        "audio": "./assets/audios/vocab_story_4_1.mp3"
      },
      {
        "word": "jugadores",
        "pos": "voc.",
        "cn": "玩家",
        "en": "players",
        "example": "La razón por la que los jugadores de España no hacen huelga: \"No pueden acogerse a ese derecho\"",
        "audio": "./assets/audios/vocab_story_4_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「razón」在文中的表达",
      "detail": "「razón」在本文语境下表示“原因”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「razón」在文中的中文含义是？",
      "options": [
        "A. 原因",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「razón」在此处意为：原因。"
    },
    "audio_full_normal": "./assets/audios/story_4_normal.mp3",
    "audio_full_slow": "./assets/audios/story_4_slow.mp3"
  },
  {
    "id": "story_5",
    "tag": "体育 / 赛事",
    "date": "2026-11-12",
    "title": {
      "es": "Luis de la Fuente, indignado tras las insinuaciones sobre el caso Lamine Yamal: \"No tiene privilegios, ¿ha quedado claro?\"",
      "en": "Luis de la Fuente, outraged after insinuations about the Lamine Yamal case: \"He has no privileges, is that clear?\"",
      "cn": "05. 路易斯·德拉富恩特在对拉明·亚马尔案的暗示后感到愤怒：“他没有特权，明白吗？”"
    },
    "intro": "在对阵捷克共和国的几个小时前，这位里奥哈教练出现在捷克境内的媒体面前。",
    "sentences": [
      {
        "id": 1,
        "es": "El técnico riojano compareció ante los medios de comunicación en territorio checo, horas antes de medirse a República Checa en la Nations League.",
        "en": "The Riojan coach appeared before the media in Czech territory, hours before facing the Czech Republic in the Nations League.",
        "cn": "这位里奥哈教练在捷克境内出现在媒体面前，几个小时后将在国家联赛中对阵捷克共和国。",
        "audio": "./assets/audios/story_5_s1.mp3"
      },
      {
        "id": 2,
        "es": "Luis de la Fuente, indignado tras las insinuaciones sobre el caso Lamine Yamal: \"No tiene privilegios, ¿ha quedado claro?\"",
        "en": "Luis de la Fuente, outraged after insinuations about the Lamine Yamal case: \"He has no privileges, is that clear?\"",
        "cn": "路易斯·德拉富恩特在对拉明·亚马尔案的暗示后感到愤怒：“他没有特权，明白吗？”",
        "audio": "./assets/audios/story_5_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "fuente",
        "pos": "voc.",
        "cn": "喷泉",
        "en": "fountain",
        "example": "El técnico riojano compareció ante los medios de comunicación en territorio checo, horas antes de medirse a República Checa en la Nations League.",
        "audio": "./assets/audios/vocab_story_5_1.mp3"
      },
      {
        "word": "indignado",
        "pos": "voc.",
        "cn": "愤怒",
        "en": "indignant",
        "example": "Luis de la Fuente, indignado tras las insinuaciones sobre el caso Lamine Yamal: \"No tiene privilegios, ¿ha quedado claro?\"",
        "audio": "./assets/audios/vocab_story_5_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「fuente」在文中的表达",
      "detail": "「fuente」在本文语境下表示“喷泉”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「fuente」在文中的中文含义是？",
      "options": [
        "A. 喷泉",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「fuente」在此处意为：喷泉。"
    },
    "audio_full_normal": "./assets/audios/story_5_normal.mp3",
    "audio_full_slow": "./assets/audios/story_5_slow.mp3"
  },
  {
    "id": "story_6",
    "tag": "体育 / 赛事",
    "date": "2026-11-12",
    "title": {
      "es": "Robert Sánchez destroza un Ferrari tras sufrir un grave accidente: \"Circulaba a 113 km/h por una curva\"",
      "en": "Robert Sánchez destroys a Ferrari after suffering a serious accident: \"It was traveling at 113 km/h through a curve\"",
      "cn": "06. 罗伯特·桑切斯 (Robert Sánchez) 在遭遇严重事故后毁坏了一辆法拉利：“当时它以 113 公里/小时的速度通过弯道”"
    },
    "intro": "据《The》报道，这些事件于上周一（11 月 9 日）发生在德国纽博格林赛道上。",
    "sentences": [
      {
        "id": 1,
        "es": "Los hechos se produjeron en el trazado de Nürburgring, en Alemania, este pasado lunes 9 de noviembre, según desveló 'The Sun'.",
        "en": "The events occurred on the Nürburgring track, in Germany, this past Monday, November 9, according to 'The Sun'.",
        "cn": "据《太阳报》报道，这起事件于 11 月 9 日星期一在德国纽博格林赛道上发生。",
        "audio": "./assets/audios/story_6_s1.mp3"
      },
      {
        "id": 2,
        "es": "Robert Sánchez destroza un Ferrari tras sufrir un grave accidente: \"Circulaba a 113 km/h por una curva\"",
        "en": "Robert Sánchez destroys a Ferrari after suffering a serious accident: \"It was traveling at 113 km/h through a curve\"",
        "cn": "罗伯特·桑切斯 (Robert Sánchez) 在遭遇严重事故后毁坏了一辆法拉利：“当时它以 113 公里/小时的速度通过弯道”",
        "audio": "./assets/audios/story_6_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "robert",
        "pos": "voc.",
        "cn": "罗伯特",
        "en": "robert",
        "example": "Los hechos se produjeron en el trazado de Nürburgring, en Alemania, este pasado lunes 9 de noviembre, según desveló 'The Sun'.",
        "audio": "./assets/audios/vocab_story_6_1.mp3"
      },
      {
        "word": "sánchez",
        "pos": "voc.",
        "cn": "桑切斯",
        "en": "sanchez",
        "example": "Robert Sánchez destroza un Ferrari tras sufrir un grave accidente: \"Circulaba a 113 km/h por una curva\"",
        "audio": "./assets/audios/vocab_story_6_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「robert」在文中的表达",
      "detail": "「robert」在本文语境下表示“罗伯特”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「robert」在文中的中文含义是？",
      "options": [
        "A. 罗伯特",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「robert」在此处意为：罗伯特。"
    },
    "audio_full_normal": "./assets/audios/story_6_normal.mp3",
    "audio_full_slow": "./assets/audios/story_6_slow.mp3"
  },
  {
    "id": "story_7",
    "tag": "文化 / 艺术",
    "date": "2026-11-12",
    "title": {
      "es": "Bad Gyal y Las Petunias, en el cartel de un Coachella 2027 encabezado por Dua Lipa y Madonna",
      "en": "Bad Gyal and Las Petunias, on the poster for a Coachella 2027 headed by Dua Lipa and Madonna",
      "cn": "07. Bad Gyal 和 Las Petunias，出现在由 Dua Lipa 和 Madonna 领衔的 2027 年 Coachella 音乐节海报上"
    },
    "intro": "Daddy Yankee、Tame Impala、SZA、Weezer 和 Zara Larsson 也将在下一届演出。",
    "sentences": [
      {
        "id": 1,
        "es": "Daddy Yankee, Tame Impala, SZA, Weezer o Zara Larsson también actuarán en la próxima edición.",
        "en": "Daddy Yankee, Tame Impala, SZA, Weezer and Zara Larsson will also perform in the next edition.",
        "cn": "Daddy Yankee、Tame Impala、SZA、Weezer 和 Zara Larsson 也将在下一届演出。",
        "audio": "./assets/audios/story_7_s1.mp3"
      },
      {
        "id": 2,
        "es": "Bad Gyal y Las Petunias, en el cartel de un Coachella 2027 encabezado por Dua Lipa y Madonna",
        "en": "Bad Gyal and Las Petunias, on the poster for a Coachella 2027 headed by Dua Lipa and Madonna",
        "cn": "Bad Gyal 和 Las Petunias，出现在由 Dua Lipa 和 Madonna 领衔的 2027 年 Coachella 音乐节海报上",
        "audio": "./assets/audios/story_7_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "petunias",
        "pos": "voc.",
        "cn": "矮牵牛",
        "en": "petunias",
        "example": "Daddy Yankee, Tame Impala, SZA, Weezer o Zara Larsson también actuarán en la próxima edición.",
        "audio": "./assets/audios/vocab_story_7_1.mp3"
      },
      {
        "word": "cartel",
        "pos": "voc.",
        "cn": "符号",
        "en": "sign",
        "example": "Bad Gyal y Las Petunias, en el cartel de un Coachella 2027 encabezado por Dua Lipa y Madonna",
        "audio": "./assets/audios/vocab_story_7_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「petunias」在文中的表达",
      "detail": "「petunias」在本文语境下表示“矮牵牛”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「petunias」在文中的中文含义是？",
      "options": [
        "A. 矮牵牛",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「petunias」在此处意为：矮牵牛。"
    },
    "audio_full_normal": "./assets/audios/story_7_normal.mp3",
    "audio_full_slow": "./assets/audios/story_7_slow.mp3"
  },
  {
    "id": "story_8",
    "tag": "文化 / 艺术",
    "date": "2026-11-12",
    "title": {
      "es": "¿Sabías que un rinoceronte se convirtió en símbolo del voto protesta en Brasil?",
      "en": "Did you know that a rhino became a symbol of the protest vote in Brazil?",
      "cn": "08. 您知道犀牛成为巴西抗议投票的象征吗？"
    },
    "intro": "该动物获得了大约十万张选票，几乎是得票最多的人类候选人的十倍。",
    "sentences": [
      {
        "id": 1,
        "es": "El animal recibió alrededor de cien mil votos, casi diez veces más que el candidato humano más votado.",
        "en": "The animal received around one hundred thousand votes, almost ten times more than the human candidate with the most votes.",
        "cn": "该动物获得了大约十万张选票，几乎是得票最多的人类候选人的十倍。",
        "audio": "./assets/audios/story_8_s1.mp3"
      },
      {
        "id": 2,
        "es": "¿Sabías que un rinoceronte se convirtió en símbolo del voto protesta en Brasil?",
        "en": "Did you know that a rhino became a symbol of the protest vote in Brazil?",
        "cn": "您知道犀牛成为巴西抗议投票的象征吗？",
        "audio": "./assets/audios/story_8_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "sabías",
        "pos": "voc.",
        "cn": "你可知道",
        "en": "did you know",
        "example": "El animal recibió alrededor de cien mil votos, casi diez veces más que el candidato humano más votado.",
        "audio": "./assets/audios/vocab_story_8_1.mp3"
      },
      {
        "word": "rinoceronte",
        "pos": "voc.",
        "cn": "犀牛",
        "en": "rhinoceros",
        "example": "¿Sabías que un rinoceronte se convirtió en símbolo del voto protesta en Brasil?",
        "audio": "./assets/audios/vocab_story_8_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「sabías」在文中的表达",
      "detail": "「sabías」在本文语境下表示“你可知道”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「sabías」在文中的中文含义是？",
      "options": [
        "A. 你可知道",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「sabías」在此处意为：你可知道。"
    },
    "audio_full_normal": "./assets/audios/story_8_normal.mp3",
    "audio_full_slow": "./assets/audios/story_8_slow.mp3"
  },
  {
    "id": "story_9",
    "tag": "生活 / 资讯",
    "date": "2026-11-12",
    "title": {
      "es": "Decenas de miles de personas salen a la calle para protestar contra el precio de la vivienda",
      "en": "Tens of thousands of people take to the streets to protest against housing prices",
      "cn": "09. 数万人走上街头抗议房价上涨"
    },
    "intro": "这是当天总罢工的高潮，主要工会号召抗议子工会。",
    "sentences": [
      {
        "id": 1,
        "es": "Ha sido el colofón a la jornada de huelga general, convocada por los principales sindicatos para protestar contra la subida de los precios de la vivienda y la mejora de los salarios para poder afrontarla.",
        "en": "It was the culmination of the day of general strike, called by the main unions to protest against the rise in housing prices and the improvement in salaries to be able to face it.",
        "cn": "这是当天总罢工的高潮，主要工会呼吁抗议房价上涨和工资提高，以应对这一情况。",
        "audio": "./assets/audios/story_9_s1.mp3"
      },
      {
        "id": 2,
        "es": "La meteorología adversa ha conllevado la suspensión de las marchas en Cádiz, Huelva, Córdoba y Sevilla.",
        "en": "The adverse weather has led to the suspension of the marches in Cádiz, Huelva, Córdoba and Seville.",
        "cn": "恶劣的天气导致加的斯、韦尔瓦、科尔多瓦和塞维利亚的游行暂停。",
        "audio": "./assets/audios/story_9_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "decenas",
        "pos": "voc.",
        "cn": "数十",
        "en": "tens",
        "example": "Ha sido el colofón a la jornada de huelga general, convocada por los principales sindicatos para protestar contra la subida de los precios de la vivienda y la mejora de los salarios para poder afrontarla.",
        "audio": "./assets/audios/vocab_story_9_1.mp3"
      },
      {
        "word": "miles",
        "pos": "voc.",
        "cn": "数千",
        "en": "thousands",
        "example": "La meteorología adversa ha conllevado la suspensión de las marchas en Cádiz, Huelva, Córdoba y Sevilla.",
        "audio": "./assets/audios/vocab_story_9_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「decenas」在文中的表达",
      "detail": "「decenas」在本文语境下表示“数十”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「decenas」在文中的中文含义是？",
      "options": [
        "A. 数十",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「decenas」在此处意为：数十。"
    },
    "audio_full_normal": "./assets/audios/story_9_normal.mp3",
    "audio_full_slow": "./assets/audios/story_9_slow.mp3"
  },
  {
    "id": "story_10",
    "tag": "生活 / 资讯",
    "date": "2026-11-12",
    "title": {
      "es": "La manifestación por la vivienda y la mejora de los salarios reúne a 55.000 personas",
      "en": "The demonstration for housing and improved salaries brings together 55,000 people",
      "cn": "10. 住房和提高工资示威聚集了 55,000 人"
    },
    "intro": "Llogateres Union 的橙色围巾为抗议活动增添了色彩，该组织估计有 40 万人参加",
    "sentences": [
      {
        "id": 1,
        "es": "Los pañuelos naranjas del Sindicat de Llogateres tiñen una protesta que la organización cifra en 400.",
        "en": "The orange scarves of the Sindicat de Llogateres color a protest that the organization estimates at 400.",
        "cn": "Sindicat de Llogateres 的橙色围巾为抗议活动增色不少，该组织估计有 400 人参加。",
        "audio": "./assets/audios/story_10_s1.mp3"
      },
      {
        "id": 2,
        "es": "000 personas.",
        "en": "000 people.",
        "cn": "000 人。",
        "audio": "./assets/audios/story_10_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "manifestación",
        "pos": "voc.",
        "cn": "表现",
        "en": "manifestation",
        "example": "Los pañuelos naranjas del Sindicat de Llogateres tiñen una protesta que la organización cifra en 400.",
        "audio": "./assets/audios/vocab_story_10_1.mp3"
      },
      {
        "word": "vivienda",
        "pos": "voc.",
        "cn": "住宅",
        "en": "dwelling",
        "example": "000 personas.",
        "audio": "./assets/audios/vocab_story_10_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「manifestación」在文中的表达",
      "detail": "「manifestación」在本文语境下表示“表现”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「manifestación」在文中的中文含义是？",
      "options": [
        "A. 表现",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「manifestación」在此处意为：表现。"
    },
    "audio_full_normal": "./assets/audios/story_10_normal.mp3",
    "audio_full_slow": "./assets/audios/story_10_slow.mp3"
  }
];

module.exports = {
  DAILY_STORIES
};
