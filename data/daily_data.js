// 每日 10 篇西语早报数据包
const DAILY_STORIES = [
  {
    "id": "story_1",
    "tag": "八卦 / 名人",
    "date": "2026-11-23",
    "title": {
      "es": "Tu horóscopo diario: lunes 23 de noviembre de 2026",
      "en": "Your daily horoscope: Monday, November 23, 2026",
      "cn": "01. 你的每日星座运势：2026 年 11 月 23 日星期一"
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
        "es": "Tu horóscopo diario: lunes 23 de noviembre de 2026",
        "en": "Your daily horoscope: Monday, November 23, 2026",
        "cn": "你的每日星座运势：2026 年 11 月 23 日星期一",
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
        "example": "Tu horóscopo diario: lunes 23 de noviembre de 2026",
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
    "date": "2026-11-23",
    "title": {
      "es": "La hija de Bruce Willis elimina la última foto del actor publicada en sus redes: \"Era demasiado íntima\"",
      "en": "Bruce Willis' daughter deletes the last photo of the actor published on her networks: \"It was too intimate\"",
      "cn": "02. 布鲁斯威利斯的女儿删除了在她的网络上发布的演员的最后一张照片：“太亲密了”"
    },
    "intro": "塔卢拉遗憾地表示，她致力于“做得更好”。",
    "sentences": [
      {
        "id": 1,
        "es": "Arrepentinda, Tallulah asegura que se compromete \"a hacerlo mejor\".",
        "en": "Regretful, Tallulah says she is committed \"to doing better.\"",
        "cn": "塔卢拉遗憾地表示，她致力于“做得更好”。",
        "audio": "./assets/audios/story_2_s1.mp3"
      },
      {
        "id": 2,
        "es": "La hija de Bruce Willis elimina la última foto del actor publicada en sus redes: \"Era demasiado íntima\"",
        "en": "Bruce Willis' daughter deletes the last photo of the actor published on her networks: \"It was too intimate\"",
        "cn": "布鲁斯威利斯的女儿删除了在她的网络上发布的演员的最后一张照片：“太亲密了”",
        "audio": "./assets/audios/story_2_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "bruce",
        "pos": "voc.",
        "cn": "布鲁斯",
        "en": "Bruce",
        "example": "Arrepentinda, Tallulah asegura que se compromete \"a hacerlo mejor\".",
        "audio": "./assets/audios/vocab_story_2_1.mp3"
      },
      {
        "word": "willis",
        "pos": "voc.",
        "cn": "威利斯",
        "en": "willis",
        "example": "La hija de Bruce Willis elimina la última foto del actor publicada en sus redes: \"Era demasiado íntima\"",
        "audio": "./assets/audios/vocab_story_2_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「bruce」在文中的表达",
      "detail": "「bruce」在本文语境下表示“布鲁斯”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「bruce」在文中的中文含义是？",
      "options": [
        "A. 布鲁斯",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「bruce」在此处意为：布鲁斯。"
    },
    "audio_full_normal": "./assets/audios/story_2_normal.mp3",
    "audio_full_slow": "./assets/audios/story_2_slow.mp3"
  },
  {
    "id": "story_3",
    "tag": "八卦 / 名人",
    "date": "2026-11-23",
    "title": {
      "es": "Giro en el robo en la casa de Elsa Pataky y Chris Hemsworth: un menor de 16 años, detenido",
      "en": "Twist in the robbery at the house of Elsa Pataky and Chris Hemsworth: a minor under 16 years of age, arrested",
      "cn": "03. 艾尔莎·帕塔基 (Elsa Pataky) 和克里斯·海姆斯沃斯 (Chris Hemsworth) 家遭抢劫，一名 16 岁以下未成年人被捕"
    },
    "intro": "演员的房屋遭到袭击后，已找到三辆车。",
    "sentences": [
      {
        "id": 1,
        "es": "Tres vehículos han sido recuperados tras el asalto a la casa de los actores.",
        "en": "Three vehicles have been recovered after the assault on the actors' house.",
        "cn": "演员的房屋遭到袭击后，已找到三辆车。",
        "audio": "./assets/audios/story_3_s1.mp3"
      },
      {
        "id": 2,
        "es": "Giro en el robo en la casa de Elsa Pataky y Chris Hemsworth: un menor de 16 años, detenido",
        "en": "Twist in the robbery at the house of Elsa Pataky and Chris Hemsworth: a minor under 16 years of age, arrested",
        "cn": "艾尔莎·帕塔基 (Elsa Pataky) 和克里斯·海姆斯沃斯 (Chris Hemsworth) 家遭抢劫，一名 16 岁以下未成年人被捕",
        "audio": "./assets/audios/story_3_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "pataky",
        "pos": "voc.",
        "cn": "帕塔基",
        "en": "pataki",
        "example": "Tres vehículos han sido recuperados tras el asalto a la casa de los actores.",
        "audio": "./assets/audios/vocab_story_3_1.mp3"
      },
      {
        "word": "chris",
        "pos": "voc.",
        "cn": "克里斯",
        "en": "Chris",
        "example": "Giro en el robo en la casa de Elsa Pataky y Chris Hemsworth: un menor de 16 años, detenido",
        "audio": "./assets/audios/vocab_story_3_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「pataky」在文中的表达",
      "detail": "「pataky」在本文语境下表示“帕塔基”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「pataky」在文中的中文含义是？",
      "options": [
        "A. 帕塔基",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「pataky」在此处意为：帕塔基。"
    },
    "audio_full_normal": "./assets/audios/story_3_normal.mp3",
    "audio_full_slow": "./assets/audios/story_3_slow.mp3"
  },
  {
    "id": "story_4",
    "tag": "体育 / 赛事",
    "date": "2026-11-23",
    "title": {
      "es": "Carlos Alcaraz arrolla a Alexander Zverev, gana su primera Copa de Maestros y le demuestra quién es el número 1",
      "en": "Carlos Alcaraz overwhelms Alexander Zverev, wins his first Masters Cup and shows him who is number 1",
      "cn": "04. 卡洛斯·阿尔卡拉斯击败亚历山大·兹维列夫，赢得他的第一个大师杯并向他展示了谁是第一"
    },
    "intro": "穆尔西亚人在都灵击败德国人（2-6 和 6(7)-7），成为第一位赢得 ATP 总决赛的西班牙人",
    "sentences": [
      {
        "id": 1,
        "es": "El murciano se impuso al alemán (2-6 y 6(7)-7) en Turín para convertirse en el primer español que gana las ATP Finals en 28 años.",
        "en": "The Murcian beat the German (2-6 and 6(7)-7) in Turin to become the first Spaniard to win the ATP Finals in 28 years.",
        "cn": "穆尔西亚人在都灵击败德国人（2-6 和 6(7)-7），成为 28 年来第一位赢得 ATP 总决赛的西班牙人。",
        "audio": "./assets/audios/story_4_s1.mp3"
      },
      {
        "id": 2,
        "es": "Carlos Alcaraz arrolla a Alexander Zverev, gana su primera Copa de Maestros y le demuestra quién es el número 1",
        "en": "Carlos Alcaraz overwhelms Alexander Zverev, wins his first Masters Cup and shows him who is number 1",
        "cn": "卡洛斯·阿尔卡拉斯击败亚历山大·兹维列夫，赢得他的第一个大师杯并向他展示了谁是第一",
        "audio": "./assets/audios/story_4_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "carlos",
        "pos": "voc.",
        "cn": "卡洛斯",
        "en": "Carlos",
        "example": "El murciano se impuso al alemán (2-6 y 6(7)-7) en Turín para convertirse en el primer español que gana las ATP Finals en 28 años.",
        "audio": "./assets/audios/vocab_story_4_1.mp3"
      },
      {
        "word": "alcaraz",
        "pos": "voc.",
        "cn": "阿尔卡拉斯",
        "en": "alcaraz",
        "example": "Carlos Alcaraz arrolla a Alexander Zverev, gana su primera Copa de Maestros y le demuestra quién es el número 1",
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
    "date": "2026-11-23",
    "title": {
      "es": "Marc Márquez es más leyenda: gana su décimo mundial de motociclismo y destrona a Valentino Rossi",
      "en": "Marc Márquez is more of a legend: he wins his tenth motorcycle world championship and dethrones Valentino Rossi",
      "cn": "05. 马克·马尔克斯更像是一个传奇：他赢得了第十个摩托车世界冠军并取代了瓦伦蒂诺·罗西"
    },
    "intro": "这位西班牙车手与阿戈斯蒂尼一样拥有八次 MotoGP 冠军头衔。",
    "sentences": [
      {
        "id": 1,
        "es": "El piloto español iguala Agostini con ocho títulos de MotoGP.",
        "en": "The Spanish rider equals Agostini with eight MotoGP titles.",
        "cn": "这位西班牙车手与阿戈斯蒂尼一样拥有八次 MotoGP 冠军头衔。",
        "audio": "./assets/audios/story_5_s1.mp3"
      },
      {
        "id": 2,
        "es": "Marc Márquez es más leyenda: gana su décimo mundial de motociclismo y destrona a Valentino Rossi",
        "en": "Marc Márquez is more of a legend: he wins his tenth motorcycle world championship and dethrones Valentino Rossi",
        "cn": "马克·马尔克斯更像是一个传奇：他赢得了第十个摩托车世界冠军并取代了瓦伦蒂诺·罗西",
        "audio": "./assets/audios/story_5_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "márquez",
        "pos": "voc.",
        "cn": "马尔克斯",
        "en": "marquez",
        "example": "El piloto español iguala Agostini con ocho títulos de MotoGP.",
        "audio": "./assets/audios/vocab_story_5_1.mp3"
      },
      {
        "word": "leyenda",
        "pos": "voc.",
        "cn": "传奇",
        "en": "legend",
        "example": "Marc Márquez es más leyenda: gana su décimo mundial de motociclismo y destrona a Valentino Rossi",
        "audio": "./assets/audios/vocab_story_5_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「márquez」在文中的表达",
      "detail": "「márquez」在本文语境下表示“马尔克斯”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「márquez」在文中的中文含义是？",
      "options": [
        "A. 马尔克斯",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「márquez」在此处意为：马尔克斯。"
    },
    "audio_full_normal": "./assets/audios/story_5_normal.mp3",
    "audio_full_slow": "./assets/audios/story_5_slow.mp3"
  },
  {
    "id": "story_6",
    "tag": "体育 / 赛事",
    "date": "2026-11-23",
    "title": {
      "es": "Alcaraz confirma que estará en la Copa Davis: \"Es algo muy importante para mí\"",
      "en": "Alcaraz confirms that he will be in the Davis Cup: \"It is something very important for me\"",
      "cn": "06. 阿尔卡拉斯确认他将参加戴维斯杯：“这对我来说非常重要”"
    },
    "intro": "这位穆尔西亚网球运动员的左腿腿筋有些不适，他将随西班牙队出战",
    "sentences": [
      {
        "id": 1,
        "es": "El tenista murciano, que arrastra unas molestias físicas en el isquiotibial de la pierna izquierda, jugará con España la próxima semana en busca de la séptima Ensaladera.",
        "en": "The Murcian tennis player, who has some physical discomfort in the hamstring of his left leg, will play with Spain next week in search of the seventh Saladera.",
        "cn": "这位穆尔西亚网球运动员的左腿腿筋有些不适，他将于下周与西班牙队比赛，寻找第七位萨拉德拉。",
        "audio": "./assets/audios/story_6_s1.mp3"
      },
      {
        "id": 2,
        "es": "Alcaraz confirma que estará en la Copa Davis: \"Es algo muy importante para mí\"",
        "en": "Alcaraz confirms that he will be in the Davis Cup: \"It is something very important for me\"",
        "cn": "阿尔卡拉斯确认他将参加戴维斯杯：“这对我来说非常重要”",
        "audio": "./assets/audios/story_6_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "alcaraz",
        "pos": "voc.",
        "cn": "阿尔卡拉斯",
        "en": "alcaraz",
        "example": "El tenista murciano, que arrastra unas molestias físicas en el isquiotibial de la pierna izquierda, jugará con España la próxima semana en busca de la séptima Ensaladera.",
        "audio": "./assets/audios/vocab_story_6_1.mp3"
      },
      {
        "word": "confirma",
        "pos": "voc.",
        "cn": "确认",
        "en": "confirm",
        "example": "Alcaraz confirma que estará en la Copa Davis: \"Es algo muy importante para mí\"",
        "audio": "./assets/audios/vocab_story_6_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「alcaraz」在文中的表达",
      "detail": "「alcaraz」在本文语境下表示“阿尔卡拉斯”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「alcaraz」在文中的中文含义是？",
      "options": [
        "A. 阿尔卡拉斯",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「alcaraz」在此处意为：阿尔卡拉斯。"
    },
    "audio_full_normal": "./assets/audios/story_6_normal.mp3",
    "audio_full_slow": "./assets/audios/story_6_slow.mp3"
  },
  {
    "id": "story_7",
    "tag": "文化 / 艺术",
    "date": "2026-11-23",
    "title": {
      "es": "'Sacamantecas', una novela gráfica sobre 13 mujeres asesinadas y olvidadas por la historia",
      "en": "'Sacamantecas', a graphic novel about 13 women murdered and forgotten by history",
      "cn": "07. 《萨卡曼特卡斯》，一部关于 13 名被谋杀并被历史遗忘的女性的图画小说"
    },
    "intro": "米格尔·赫拉兹 (Miguel Herráiz) 和安赫尔·阿贝兰 (Ángel Abellán) 的作品再现了受害者在一个有标记的社会中为获得正义而进行的斗争",
    "sentences": [
      {
        "id": 1,
        "es": "La obra de Miguel Herráiz y Ángel Abellán recupera la lucha de las víctimas por obtener justicia en una sociedad marcada por el machismo y la indiferencia.",
        "en": "The work of Miguel Herráiz and Ángel Abellán recovers the struggle of the victims to obtain justice in a society marked by machismo and indifference.",
        "cn": "米格尔·赫拉兹和安赫尔·阿贝兰的作品再现了受害者在充满男子气概和冷漠的社会中为争取正义而进行的斗争。",
        "audio": "./assets/audios/story_7_s1.mp3"
      },
      {
        "id": 2,
        "es": "'Sacamantecas', una novela gráfica sobre 13 mujeres asesinadas y olvidadas por la historia",
        "en": "'Sacamantecas', a graphic novel about 13 women murdered and forgotten by history",
        "cn": "《萨卡曼特卡斯》，一部关于 13 名被谋杀并被历史遗忘的女性的图画小说",
        "audio": "./assets/audios/story_7_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "sacamantecas",
        "pos": "voc.",
        "cn": "黄油去除剂",
        "en": "butter remover",
        "example": "La obra de Miguel Herráiz y Ángel Abellán recupera la lucha de las víctimas por obtener justicia en una sociedad marcada por el machismo y la indiferencia.",
        "audio": "./assets/audios/vocab_story_7_1.mp3"
      },
      {
        "word": "novela",
        "pos": "voc.",
        "cn": "小说",
        "en": "novel",
        "example": "'Sacamantecas', una novela gráfica sobre 13 mujeres asesinadas y olvidadas por la historia",
        "audio": "./assets/audios/vocab_story_7_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「sacamantecas」在文中的表达",
      "detail": "「sacamantecas」在本文语境下表示“黄油去除剂”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「sacamantecas」在文中的中文含义是？",
      "options": [
        "A. 黄油去除剂",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「sacamantecas」在此处意为：黄油去除剂。"
    },
    "audio_full_normal": "./assets/audios/story_7_normal.mp3",
    "audio_full_slow": "./assets/audios/story_7_slow.mp3"
  },
  {
    "id": "story_8",
    "tag": "文化 / 艺术",
    "date": "2026-11-23",
    "title": {
      "es": "'Los yoes' y 'los noes', cuando pronombres y adverbios se convierten en sustantivos",
      "en": "'The I's' and 'the noes', when pronouns and adverbs become nouns",
      "cn": "08. 当代词和副词变成名词时，“The I's”和“the noes”"
    },
    "intro": "在西班牙语中，如果用法允许，几乎任何单词最终都可以充当名词。",
    "sentences": [
      {
        "id": 1,
        "es": "En español, casi cualquier palabra puede acabar funcionando como sustantivo si el uso lo permite.",
        "en": "In Spanish, almost any word can end up functioning as a noun if usage allows it.",
        "cn": "在西班牙语中，如果用法允许，几乎任何单词最终都可以充当名词。",
        "audio": "./assets/audios/story_8_s1.mp3"
      },
      {
        "id": 2,
        "es": "'Los yoes' y 'los noes', cuando pronombres y adverbios se convierten en sustantivos",
        "en": "'The I's' and 'the noes', when pronouns and adverbs become nouns",
        "cn": "当代词和副词变成名词时，“The I's”和“the noes”",
        "audio": "./assets/audios/story_8_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "pronombres",
        "pos": "voc.",
        "cn": "代词",
        "en": "pronouns",
        "example": "En español, casi cualquier palabra puede acabar funcionando como sustantivo si el uso lo permite.",
        "audio": "./assets/audios/vocab_story_8_1.mp3"
      },
      {
        "word": "adverbios",
        "pos": "voc.",
        "cn": "副词",
        "en": "adverbs",
        "example": "'Los yoes' y 'los noes', cuando pronombres y adverbios se convierten en sustantivos",
        "audio": "./assets/audios/vocab_story_8_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「pronombres」在文中的表达",
      "detail": "「pronombres」在本文语境下表示“代词”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「pronombres」在文中的中文含义是？",
      "options": [
        "A. 代词",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「pronombres」在此处意为：代词。"
    },
    "audio_full_normal": "./assets/audios/story_8_normal.mp3",
    "audio_full_slow": "./assets/audios/story_8_slow.mp3"
  },
  {
    "id": "story_9",
    "tag": "生活 / 资讯",
    "date": "2026-11-23",
    "title": {
      "es": "Feijóo pide un país que \"vuelva a funcionar\" y desacredita la \"educación\" del PSOE: \"A los de las bofetadas le vamos a parar con votos\"",
      "en": "Feijóo calls for a country that \"works again\" and discredits the \"education\" of the PSOE: \"We are going to stop those who slap people with votes\"",
      "cn": "09. 费乔呼吁一个国家“再次运转”，并抹黑社会工人党的“教育”：“我们将制止那些用选票打压人民的人”"
    },
    "intro": "人民党领导人呼吁以一票一票的方式进行斗争：“我们知道赢得选举而不是执政意味着什么，”他说。",
    "sentences": [
      {
        "id": 1,
        "es": "El líder del Partido Popular llama a pelear voto a voto: \"Sabemos lo que es ganar unas elecciones y no gobernar\", recordó.",
        "en": "The leader of the Popular Party calls to fight vote by vote: \"We know what it is to win elections and not govern,\" he recalled.",
        "cn": "人民党领导人呼吁以一票一票的方式进行斗争：“我们知道赢得选举而不是执政意味着什么，”他回忆道。",
        "audio": "./assets/audios/story_9_s1.mp3"
      },
      {
        "id": 2,
        "es": "Feijóo pide un país que \"vuelva a funcionar\" y desacredita la \"educación\" del PSOE: \"A los de las bofetadas le vamos a parar con votos\"",
        "en": "Feijóo calls for a country that \"works again\" and discredits the \"education\" of the PSOE: \"We are going to stop those who slap people with votes\"",
        "cn": "费乔呼吁一个国家“再次运转”，并抹黑社会工人党的“教育”：“我们将制止那些用选票打压人民的人”",
        "audio": "./assets/audios/story_9_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "feijóo",
        "pos": "voc.",
        "cn": "费乔",
        "en": "feijoo",
        "example": "El líder del Partido Popular llama a pelear voto a voto: \"Sabemos lo que es ganar unas elecciones y no gobernar\", recordó.",
        "audio": "./assets/audios/vocab_story_9_1.mp3"
      },
      {
        "word": "vuelva",
        "pos": "voc.",
        "cn": "回来",
        "en": "come back",
        "example": "Feijóo pide un país que \"vuelva a funcionar\" y desacredita la \"educación\" del PSOE: \"A los de las bofetadas le vamos a parar con votos\"",
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
    "date": "2026-11-23",
    "title": {
      "es": "Comparador de programas electorales para las elecciones generales de 2026: ¿Qué propone cada partido en materia de vivienda, pensiones, salarios o inmigración este 29N?",
      "en": "Comparator of electoral programs for the 2026 general elections: What does each party propose in terms of housing, pensions, salaries or immigration this 29N?",
      "cn": "10. 2026 年大选的选举方案比较：今年 29 日各方在住房、养老金、工资或移民方面有何提议？"
    },
    "intro": "查阅并比较 PP、PSOE、Vox、Frente Amplio 和 Podemos 的 29N 选举计划。从它的测量来看",
    "sentences": [
      {
        "id": 1,
        "es": "Consulta y compara los programas electorales de PP, PSOE, Vox, Frente Amplio y Podemos para el 29N.",
        "en": "Consult and compare the electoral programs of PP, PSOE, Vox, Frente Amplio and Podemos for 29N.",
        "cn": "查阅并比较 PP、PSOE、Vox、Frente Amplio 和 Podemos 的 29N 选举计划。",
        "audio": "./assets/audios/story_10_s1.mp3"
      },
      {
        "id": 2,
        "es": "Desde sus medidas sobre vivienda e inmigración hasta sus propuestas en educación, sanidad o IA.",
        "en": "From its measures on housing and immigration to its proposals in education, health or AI.",
        "cn": "从住房和移民措施到教育、健康或人工智能方面的建议。",
        "audio": "./assets/audios/story_10_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "comparador",
        "pos": "voc.",
        "cn": "比较器",
        "en": "comparator",
        "example": "Consulta y compara los programas electorales de PP, PSOE, Vox, Frente Amplio y Podemos para el 29N.",
        "audio": "./assets/audios/vocab_story_10_1.mp3"
      },
      {
        "word": "programas",
        "pos": "voc.",
        "cn": "节目",
        "en": "programs",
        "example": "Desde sus medidas sobre vivienda e inmigración hasta sus propuestas en educación, sanidad o IA.",
        "audio": "./assets/audios/vocab_story_10_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「comparador」在文中的表达",
      "detail": "「comparador」在本文语境下表示“比较器”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「comparador」在文中的中文含义是？",
      "options": [
        "A. 比较器",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「comparador」在此处意为：比较器。"
    },
    "audio_full_normal": "./assets/audios/story_10_normal.mp3",
    "audio_full_slow": "./assets/audios/story_10_slow.mp3"
  }
];

module.exports = {
  DAILY_STORIES
};
