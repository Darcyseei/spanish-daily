// 每日 10 篇西语早报数据包
const DAILY_STORIES = [
  {
    "id": "story_1",
    "tag": "八卦 / 名人",
    "date": "2026-11-15",
    "title": {
      "es": "Tu horóscopo diario: domingo 15 de noviembre de 2026",
      "en": "Your daily horoscope: Sunday, November 15, 2026",
      "cn": "01. 您的每日星座运势：2026 年 11 月 15 日，星期日"
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
        "es": "Tu horóscopo diario: domingo 15 de noviembre de 2026",
        "en": "Your daily horoscope: Sunday, November 15, 2026",
        "cn": "您的每日星座运势：2026 年 11 月 15 日，星期日",
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
        "example": "Tu horóscopo diario: domingo 15 de noviembre de 2026",
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
    "date": "2026-11-15",
    "title": {
      "es": "La emotiva felicitación de Alejandro Sanz a su madre 14 años después de su muerte: \"Te dedico mi vida\"",
      "en": "Alejandro Sanz's emotional congratulations to his mother 14 years after her death: \"I dedicate my life to you\"",
      "cn": "02. 亚历杭德罗·桑斯 (Alejandro Sanz) 在母亲去世 14 年后向她致以深切的祝贺：“我将我的一生献给你”"
    },
    "intro": "这位艺术家在他的社交网络上分享了一段他与母亲一起度过童年的温馨视频。",
    "sentences": [
      {
        "id": 1,
        "es": "El artista ha compartido en sus redes sociales un tierno vídeo de su infancia junto a su progenitora.",
        "en": "The artist has shared on his social networks a tender video of his childhood with his mother.",
        "cn": "这位艺术家在他的社交网络上分享了一段他与母亲一起度过童年的温馨视频。",
        "audio": "./assets/audios/story_2_s1.mp3"
      },
      {
        "id": 2,
        "es": "La emotiva felicitación de Alejandro Sanz a su madre 14 años después de su muerte: \"Te dedico mi vida\"",
        "en": "Alejandro Sanz's emotional congratulations to his mother 14 years after her death: \"I dedicate my life to you\"",
        "cn": "亚历杭德罗·桑斯 (Alejandro Sanz) 在母亲去世 14 年后向她致以深切的祝贺：“我将我的一生献给你”",
        "audio": "./assets/audios/story_2_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "emotiva",
        "pos": "voc.",
        "cn": "情绪化的",
        "en": "emotional",
        "example": "El artista ha compartido en sus redes sociales un tierno vídeo de su infancia junto a su progenitora.",
        "audio": "./assets/audios/vocab_story_2_1.mp3"
      },
      {
        "word": "felicitación",
        "pos": "voc.",
        "cn": "祝贺",
        "en": "congratulation",
        "example": "La emotiva felicitación de Alejandro Sanz a su madre 14 años después de su muerte: \"Te dedico mi vida\"",
        "audio": "./assets/audios/vocab_story_2_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「emotiva」在文中的表达",
      "detail": "「emotiva」在本文语境下表示“情绪化的”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「emotiva」在文中的中文含义是？",
      "options": [
        "A. 情绪化的",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「emotiva」在此处意为：情绪化的。"
    },
    "audio_full_normal": "./assets/audios/story_2_normal.mp3",
    "audio_full_slow": "./assets/audios/story_2_slow.mp3"
  },
  {
    "id": "story_3",
    "tag": "八卦 / 名人",
    "date": "2026-11-15",
    "title": {
      "es": "La Reina Sofía participa en Madrid en la Gran Recogida 2026 de los Bancos de Alimentos",
      "en": "Queen Sofía participates in Madrid in the Great 2026 Food Bank Collection",
      "cn": "03. 索菲娅王后参加马德里 2026 年食物银行募集活动"
    },
    "intro": "雷纳索菲亚基金会在一项寻求帮助的活动中捐赠了 60,000 欧元用于购买牛奶和婴儿食品",
    "sentences": [
      {
        "id": 1,
        "es": "La Fundación Reina Sofía ha donado 60.",
        "en": "The Reina Sofía Foundation has donated 60.",
        "cn": "索菲亚王后基金会 (Reina Sofía Foundation) 已捐赠 60 件。",
        "audio": "./assets/audios/story_3_s1.mp3"
      },
      {
        "id": 2,
        "es": "000 euros para comprar leche y alimentos infantiles en una campaña que busca ayudar a cerca de un millón de personas.",
        "en": "000 euros to buy milk and baby food in a campaign that seeks to help nearly one million people.",
        "cn": "000 欧元购买牛奶和婴儿食品，旨在帮助近百万人。",
        "audio": "./assets/audios/story_3_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "reina",
        "pos": "voc.",
        "cn": "女王",
        "en": "queen",
        "example": "La Fundación Reina Sofía ha donado 60.",
        "audio": "./assets/audios/vocab_story_3_1.mp3"
      },
      {
        "word": "sofía",
        "pos": "voc.",
        "cn": "索菲亚",
        "en": "Sofia",
        "example": "000 euros para comprar leche y alimentos infantiles en una campaña que busca ayudar a cerca de un millón de personas.",
        "audio": "./assets/audios/vocab_story_3_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「reina」在文中的表达",
      "detail": "「reina」在本文语境下表示“女王”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「reina」在文中的中文含义是？",
      "options": [
        "A. 女王",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「reina」在此处意为：女王。"
    },
    "audio_full_normal": "./assets/audios/story_3_normal.mp3",
    "audio_full_slow": "./assets/audios/story_3_slow.mp3"
  },
  {
    "id": "story_4",
    "tag": "体育 / 赛事",
    "date": "2026-11-15",
    "title": {
      "es": "Baena, sobre la polémica con Lamine Yamal: \"Si alguna vez hay un trato de favor, todos los jugadores lo entenderíamos\"",
      "en": "Baena, on the controversy with Lamine Yamal: \"If there is ever a favorable treatment, all players would understand it\"",
      "cn": "04. 巴埃纳谈到与拉明·亚马尔的争议：“如果有一个有利的待遇，所有球员都会理解”"
    },
    "intro": "这位西班牙国脚赞赏德拉富恩特决定离开巴塞罗那，从一些不适中恢复过来。",
    "sentences": [
      {
        "id": 1,
        "es": "El internacional español valoró la decisión de De la Fuente de dejar al culé recuperándose en Barcelona de unas molestias en la rodilla derecha.",
        "en": "The Spanish international appreciated De la Fuente's decision to leave the culé recovering in Barcelona from some discomfort in his right knee.",
        "cn": "这位西班牙国脚对德拉富恩特因右膝不适而离开巴塞罗那进行康复的决定表示赞赏。",
        "audio": "./assets/audios/story_4_s1.mp3"
      },
      {
        "id": 2,
        "es": "Baena, sobre la polémica con Lamine Yamal: \"Si alguna vez hay un trato de favor, todos los jugadores lo entenderíamos\"",
        "en": "Baena, on the controversy with Lamine Yamal: \"If there is ever a favorable treatment, all players would understand it\"",
        "cn": "巴埃纳谈到与拉明·亚马尔的争议：“如果有一个有利的待遇，所有球员都会理解”",
        "audio": "./assets/audios/story_4_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "baena",
        "pos": "voc.",
        "cn": "巴埃纳",
        "en": "baena",
        "example": "El internacional español valoró la decisión de De la Fuente de dejar al culé recuperándose en Barcelona de unas molestias en la rodilla derecha.",
        "audio": "./assets/audios/vocab_story_4_1.mp3"
      },
      {
        "word": "sobre",
        "pos": "voc.",
        "cn": "关于",
        "en": "about",
        "example": "Baena, sobre la polémica con Lamine Yamal: \"Si alguna vez hay un trato de favor, todos los jugadores lo entenderíamos\"",
        "audio": "./assets/audios/vocab_story_4_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「baena」在文中的表达",
      "detail": "「baena」在本文语境下表示“巴埃纳”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「baena」在文中的中文含义是？",
      "options": [
        "A. 巴埃纳",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「baena」在此处意为：巴埃纳。"
    },
    "audio_full_normal": "./assets/audios/story_4_normal.mp3",
    "audio_full_slow": "./assets/audios/story_4_slow.mp3"
  },
  {
    "id": "story_5",
    "tag": "体育 / 赛事",
    "date": "2026-11-15",
    "title": {
      "es": "'Lío' antes del duelo de la Roja ante Inglaterra: De la Fuente responde a Tuchel y asegura que \"España no es racista\" y el alemán se explica",
      "en": "'Mess' before La Roja's duel against England: De la Fuente responds to Tuchel and assures that \"Spain is not racist\" and the German explains himself",
      "cn": "05. 拉罗亚对阵英格兰的比赛前一片混乱：德拉富恩特回应图赫尔并保证“西班牙不是种族主义者”，德国人也解释了自己"
    },
    "intro": "这位英格兰教练承认他已经警告他的球员注意反种族主义协议",
    "sentences": [
      {
        "id": 1,
        "es": "El seleccionador inglés reconoció que había advertido a sus jugadores de que estuviesen atentos al protocolo antirracista en el partido ante la selección española, lo que ha provocado la respuesta del técnico español.",
        "en": "The English coach acknowledged that he had warned his players to pay attention to the anti-racist protocol in the match against the Spanish team, which has provoked the Spanish coach's response.",
        "cn": "这位英格兰教练承认，他在对阵西班牙队的比赛中曾警告球员注意反种族主义的规定，这引起了西班牙教练的回应。",
        "audio": "./assets/audios/story_5_s1.mp3"
      },
      {
        "id": 2,
        "es": "'Lío' antes del duelo de la Roja ante Inglaterra: De la Fuente responde a Tuchel y asegura que \"España no es racista\" y el alemán se explica",
        "en": "'Mess' before La Roja's duel against England: De la Fuente responds to Tuchel and assures that \"Spain is not racist\" and the German explains himself",
        "cn": "拉罗亚对阵英格兰的比赛前一片混乱：德拉富恩特回应图赫尔并保证“西班牙不是种族主义者”，德国人也解释了自己",
        "audio": "./assets/audios/story_5_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "antes",
        "pos": "voc.",
        "cn": "前",
        "en": "before",
        "example": "El seleccionador inglés reconoció que había advertido a sus jugadores de que estuviesen atentos al protocolo antirracista en el partido ante la selección española, lo que ha provocado la respuesta del técnico español.",
        "audio": "./assets/audios/vocab_story_5_1.mp3"
      },
      {
        "word": "duelo",
        "pos": "voc.",
        "cn": "决斗",
        "en": "duel",
        "example": "'Lío' antes del duelo de la Roja ante Inglaterra: De la Fuente responde a Tuchel y asegura que \"España no es racista\" y el alemán se explica",
        "audio": "./assets/audios/vocab_story_5_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「antes」在文中的表达",
      "detail": "「antes」在本文语境下表示“前”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「antes」在文中的中文含义是？",
      "options": [
        "A. 前",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「antes」在此处意为：前。"
    },
    "audio_full_normal": "./assets/audios/story_5_normal.mp3",
    "audio_full_slow": "./assets/audios/story_5_slow.mp3"
  },
  {
    "id": "story_6",
    "tag": "体育 / 赛事",
    "date": "2026-11-15",
    "title": {
      "es": "Baja de última hora en la selección española antes del partido ante Inglaterra",
      "en": "Last minute loss in the Spanish team before the match against England",
      "cn": "06. 西班牙队在对阵英格兰队的比赛前最后一刻失利"
    },
    "intro": "亚历杭德罗·格里马尔多本周六“因发烧生病”离开了红营。",
    "sentences": [
      {
        "id": 1,
        "es": "Alejandro Grimaldo abandonó este sábado la concentración de la Roja \"a causa de una indisposición por un cuadro febril\".",
        "en": "Alejandro Grimaldo left the Red camp this Saturday \"due to an illness due to a fever.\"",
        "cn": "亚历杭德罗·格里马尔多本周六“因发烧生病”离开了红营。",
        "audio": "./assets/audios/story_6_s1.mp3"
      },
      {
        "id": 2,
        "es": "Baja de última hora en la selección española antes del partido ante Inglaterra",
        "en": "Last minute loss in the Spanish team before the match against England",
        "cn": "西班牙队在对阵英格兰队的比赛前最后一刻失利",
        "audio": "./assets/audios/story_6_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "última",
        "pos": "voc.",
        "cn": "最后的",
        "en": "last",
        "example": "Alejandro Grimaldo abandonó este sábado la concentración de la Roja \"a causa de una indisposición por un cuadro febril\".",
        "audio": "./assets/audios/vocab_story_6_1.mp3"
      },
      {
        "word": "selección",
        "pos": "voc.",
        "cn": "选择",
        "en": "selection",
        "example": "Baja de última hora en la selección española antes del partido ante Inglaterra",
        "audio": "./assets/audios/vocab_story_6_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「última」在文中的表达",
      "detail": "「última」在本文语境下表示“最后的”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「última」在文中的中文含义是？",
      "options": [
        "A. 最后的",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「última」在此处意为：最后的。"
    },
    "audio_full_normal": "./assets/audios/story_6_normal.mp3",
    "audio_full_slow": "./assets/audios/story_6_slow.mp3"
  },
  {
    "id": "story_7",
    "tag": "文化 / 艺术",
    "date": "2026-11-15",
    "title": {
      "es": "'Quepo', 'cupe' y 'cabré', las formas más traicioneras del verbo caber",
      "en": "'Quepo', 'cupe' and 'cabré', the most treacherous forms of the verb caber",
      "cn": "07. “Quepo”、“cupe”和“cabré”，动词 caber 的最危险的形式"
    },
    "intro": "动词 caber 看起来很简单，直到我们尝试将其变位为某些时态。",
    "sentences": [
      {
        "id": 1,
        "es": "El verbo caber parece sencillo hasta que intentamos conjugarlo en determinados tiempos.",
        "en": "The verb caber seems simple until we try to conjugate it in certain tenses.",
        "cn": "动词 caber 看起来很简单，直到我们尝试将其变位为某些时态。",
        "audio": "./assets/audios/story_7_s1.mp3"
      },
      {
        "id": 2,
        "es": "'Quepo', 'cupe' y 'cabré', las formas más traicioneras del verbo caber",
        "en": "'Quepo', 'cupe' and 'cabré', the most treacherous forms of the verb caber",
        "cn": "“Quepo”、“cupe”和“cabré”，动词 caber 的最危险的形式",
        "audio": "./assets/audios/story_7_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "quepo",
        "pos": "voc.",
        "cn": "合身",
        "en": "fit",
        "example": "El verbo caber parece sencillo hasta que intentamos conjugarlo en determinados tiempos.",
        "audio": "./assets/audios/vocab_story_7_1.mp3"
      },
      {
        "word": "cabré",
        "pos": "voc.",
        "cn": "我会山羊",
        "en": "I will goat",
        "example": "'Quepo', 'cupe' y 'cabré', las formas más traicioneras del verbo caber",
        "audio": "./assets/audios/vocab_story_7_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「quepo」在文中的表达",
      "detail": "「quepo」在本文语境下表示“合身”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「quepo」在文中的中文含义是？",
      "options": [
        "A. 合身",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「quepo」在此处意为：合身。"
    },
    "audio_full_normal": "./assets/audios/story_7_normal.mp3",
    "audio_full_slow": "./assets/audios/story_7_slow.mp3"
  },
  {
    "id": "story_8",
    "tag": "文化 / 艺术",
    "date": "2026-11-15",
    "title": {
      "es": "John Grisham aparca lo político para 'probar' con el espionaje en 'La trama francesa': \"Quiero seguir a los grandes maestros\"",
      "en": "John Grisham puts aside politics to 'try' espionage in 'The French Plot': \"I want to follow the great masters\"",
      "cn": "08. 约翰·格里沙姆在《法国阴谋》中抛开政治“尝试”间谍活动：“我想追随伟大的大师”"
    },
    "intro": "这位美国作家在其职业生涯中已售出超过 3.5 亿本书。",
    "sentences": [
      {
        "id": 1,
        "es": "El escritor estadounidense ha vendido más de 350 millones de libros a lo largo de su trayectoria.",
        "en": "The American writer has sold more than 350 million books throughout his career.",
        "cn": "这位美国作家在其职业生涯中已售出超过 3.5 亿本书。",
        "audio": "./assets/audios/story_8_s1.mp3"
      },
      {
        "id": 2,
        "es": "John Grisham aparca lo político para 'probar' con el espionaje en 'La trama francesa': \"Quiero seguir a los grandes maestros\"",
        "en": "John Grisham puts aside politics to 'try' espionage in 'The French Plot': \"I want to follow the great masters\"",
        "cn": "约翰·格里沙姆在《法国阴谋》中抛开政治“尝试”间谍活动：“我想追随伟大的大师”",
        "audio": "./assets/audios/story_8_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "grisham",
        "pos": "voc.",
        "cn": "格里沙姆",
        "en": "grisham",
        "example": "El escritor estadounidense ha vendido más de 350 millones de libros a lo largo de su trayectoria.",
        "audio": "./assets/audios/vocab_story_8_1.mp3"
      },
      {
        "word": "aparca",
        "pos": "voc.",
        "cn": "公园",
        "en": "park",
        "example": "John Grisham aparca lo político para 'probar' con el espionaje en 'La trama francesa': \"Quiero seguir a los grandes maestros\"",
        "audio": "./assets/audios/vocab_story_8_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「grisham」在文中的表达",
      "detail": "「grisham」在本文语境下表示“格里沙姆”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「grisham」在文中的中文含义是？",
      "options": [
        "A. 格里沙姆",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「grisham」在此处意为：格里沙姆。"
    },
    "audio_full_normal": "./assets/audios/story_8_normal.mp3",
    "audio_full_slow": "./assets/audios/story_8_slow.mp3"
  },
  {
    "id": "story_9",
    "tag": "生活 / 资讯",
    "date": "2026-11-15",
    "title": {
      "es": "Feijóo dice que si gana, la gestión de vivienda se llevará desde una vicepresidencia: \"Es el mayor problema de España\"",
      "en": "Feijóo says that if he wins, housing management will be handled by a vice presidency: \"It is Spain's biggest problem\"",
      "cn": "09. 费约表示，如果他获胜，住房管理将由副总统负责：“这是西班牙最大的问题”"
    },
    "intro": "对于 Feijóo 来说，“重要的事情”不是住房问题将在哪里，而是他希望在下一届立法机构中",
    "sentences": [
      {
        "id": 1,
        "es": "Para Feijóo, \"lo importante\" no es dónde va a estar Vivienda, sino el hecho de que en la próxima legislatura quiere construir un millón de viviendas.",
        "en": "For Feijóo, \"the important thing\" is not where Housing is going to be, but the fact that in the next legislature he wants to build a million homes.",
        "cn": "对于 Feijóo 来说，“重要的事情”不是住房将在哪里，而是他希望在下一届立法机构中建造 100 万套住房。",
        "audio": "./assets/audios/story_9_s1.mp3"
      },
      {
        "id": 2,
        "es": "Feijóo dice que si gana, la gestión de vivienda se llevará desde una vicepresidencia: \"Es el mayor problema de España\"",
        "en": "Feijóo says that if he wins, housing management will be handled by a vice presidency: \"It is Spain's biggest problem\"",
        "cn": "费约表示，如果他获胜，住房管理将由副总统负责：“这是西班牙最大的问题”",
        "audio": "./assets/audios/story_9_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "feijóo",
        "pos": "voc.",
        "cn": "费乔",
        "en": "feijoo",
        "example": "Para Feijóo, \"lo importante\" no es dónde va a estar Vivienda, sino el hecho de que en la próxima legislatura quiere construir un millón de viviendas.",
        "audio": "./assets/audios/vocab_story_9_1.mp3"
      },
      {
        "word": "gestión",
        "pos": "voc.",
        "cn": "管理",
        "en": "management",
        "example": "Feijóo dice que si gana, la gestión de vivienda se llevará desde una vicepresidencia: \"Es el mayor problema de España\"",
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
    "date": "2026-11-15",
    "title": {
      "es": "Sánchez pide a Feijóo \"aceptar el resultado\" de las elecciones del 29N: \"El PSOE va a ganar\"",
      "en": "Sánchez asks Feijóo to \"accept the result\" of the 29N elections: \"The PSOE is going to win\"",
      "cn": "10. 桑切斯要求费乔“接受第29N次选举的结果”：“社会党将会获胜”"
    },
    "intro": "这位社会主义候选人在帕尔马表示，Vox 领导人圣地亚哥·阿巴斯卡尔“代表了一个充满皱纹的极端分子”。",
    "sentences": [
      {
        "id": 1,
        "es": "El candidato socialista dice en Palma que el líder de Vox, Santiago Abascal, \"representa a un ultra que se arruga\".",
        "en": "The socialist candidate says in Palma that the leader of Vox, Santiago Abascal, \"represents an ultra that is wrinkled.\"",
        "cn": "这位社会主义候选人在帕尔马表示，Vox 领导人圣地亚哥·阿巴斯卡尔“代表了一个充满皱纹的极端分子”。",
        "audio": "./assets/audios/story_10_s1.mp3"
      },
      {
        "id": 2,
        "es": "Sánchez pide a Feijóo \"aceptar el resultado\" de las elecciones del 29N: \"El PSOE va a ganar\"",
        "en": "Sánchez asks Feijóo to \"accept the result\" of the 29N elections: \"The PSOE is going to win\"",
        "cn": "桑切斯要求费乔“接受第29N次选举的结果”：“社会党将会获胜”",
        "audio": "./assets/audios/story_10_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "sánchez",
        "pos": "voc.",
        "cn": "桑切斯",
        "en": "sanchez",
        "example": "El candidato socialista dice en Palma que el líder de Vox, Santiago Abascal, \"representa a un ultra que se arruga\".",
        "audio": "./assets/audios/vocab_story_10_1.mp3"
      },
      {
        "word": "feijóo",
        "pos": "voc.",
        "cn": "费乔",
        "en": "feijoo",
        "example": "Sánchez pide a Feijóo \"aceptar el resultado\" de las elecciones del 29N: \"El PSOE va a ganar\"",
        "audio": "./assets/audios/vocab_story_10_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「sánchez」在文中的表达",
      "detail": "「sánchez」在本文语境下表示“桑切斯”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「sánchez」在文中的中文含义是？",
      "options": [
        "A. 桑切斯",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「sánchez」在此处意为：桑切斯。"
    },
    "audio_full_normal": "./assets/audios/story_10_normal.mp3",
    "audio_full_slow": "./assets/audios/story_10_slow.mp3"
  }
];

module.exports = {
  DAILY_STORIES
};
