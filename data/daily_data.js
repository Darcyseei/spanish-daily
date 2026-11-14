// 每日 10 篇西语早报数据包
const DAILY_STORIES = [
  {
    "id": "story_1",
    "tag": "八卦 / 名人",
    "date": "2026-11-14",
    "title": {
      "es": "Tu horóscopo diario: sábado 14 de noviembre de 2026",
      "en": "Your daily horoscope: Saturday, November 14, 2026",
      "cn": "01. 您的每日运势：2026年11月14日，星期六"
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
        "es": "Tu horóscopo diario: sábado 14 de noviembre de 2026",
        "en": "Your daily horoscope: Saturday, November 14, 2026",
        "cn": "您的每日星座运势：2026 年 11 月 14 日星期六",
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
        "example": "Tu horóscopo diario: sábado 14 de noviembre de 2026",
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
    "date": "2026-11-14",
    "title": {
      "es": "La mujer detenida en el concierto de Niña Pastori rompe su silencio: \"No me di cuenta de lo que yo estaba haciendo\"",
      "en": "The woman detained at the Niña Pastori concert breaks her silence: \"I didn't realize what I was doing\"",
      "cn": "02. 在尼娜·帕斯托里音乐会上被拘留的女子打破沉默：“我没有意识到我在做什么”"
    },
    "intro": "被拘留者对这位艺术家发出了限制令，她之前曾骚扰过这位艺术家。",
    "sentences": [
      {
        "id": 1,
        "es": "La detenida tenía una orden de alejamiento de la artista, a la que habría acosado en ocasiones anteriores.",
        "en": "The detainee had a restraining order against the artist, whom she had harassed on previous occasions.",
        "cn": "被拘留者对这位艺术家发出了限制令，她之前曾骚扰过这位艺术家。",
        "audio": "./assets/audios/story_2_s1.mp3"
      },
      {
        "id": 2,
        "es": "La mujer detenida en el concierto de Niña Pastori rompe su silencio: \"No me di cuenta de lo que yo estaba haciendo\"",
        "en": "The woman detained at the Niña Pastori concert breaks her silence: \"I didn't realize what I was doing\"",
        "cn": "在尼娜·帕斯托里音乐会上被拘留的女子打破沉默：“我没有意识到我在做什么”",
        "audio": "./assets/audios/story_2_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "mujer",
        "pos": "voc.",
        "cn": "女性",
        "en": "women",
        "example": "La detenida tenía una orden de alejamiento de la artista, a la que habría acosado en ocasiones anteriores.",
        "audio": "./assets/audios/vocab_story_2_1.mp3"
      },
      {
        "word": "detenida",
        "pos": "voc.",
        "cn": "被拘留",
        "en": "detained",
        "example": "La mujer detenida en el concierto de Niña Pastori rompe su silencio: \"No me di cuenta de lo que yo estaba haciendo\"",
        "audio": "./assets/audios/vocab_story_2_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「mujer」在文中的表达",
      "detail": "「mujer」在本文语境下表示“女性”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「mujer」在文中的中文含义是？",
      "options": [
        "A. 女性",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「mujer」在此处意为：女性。"
    },
    "audio_full_normal": "./assets/audios/story_2_normal.mp3",
    "audio_full_slow": "./assets/audios/story_2_slow.mp3"
  },
  {
    "id": "story_3",
    "tag": "八卦 / 名人",
    "date": "2026-11-14",
    "title": {
      "es": "Laura Casabela aclara qué relación guarda con Claudia Martínez: \"Jamás ha sido una amiga como tal\"",
      "en": "Laura Casabela clarifies what relationship she has with Claudia Martínez: \"She has never been a friend as such\"",
      "cn": "03. 劳拉·卡萨贝拉澄清了她与克劳迪娅·马丁内斯的关系：“她从来都不是朋友”"
    },
    "intro": "克劳迪娅·马丁内斯刚刚迎来了她与劳拉·卡萨贝拉前男友马里奥·冈萨雷斯的第一个女儿。",
    "sentences": [
      {
        "id": 1,
        "es": "Claudia Martínez acaba de dar la bienvenida a su primera hija junto a Mario González, ex de Laura Casabela.",
        "en": "Claudia Martínez has just welcomed her first daughter with Mario González, Laura Casabela's ex.",
        "cn": "克劳迪娅·马丁内斯刚刚迎来了她与劳拉·卡萨贝拉前男友马里奥·冈萨雷斯的第一个女儿。",
        "audio": "./assets/audios/story_3_s1.mp3"
      },
      {
        "id": 2,
        "es": "Laura Casabela aclara qué relación guarda con Claudia Martínez: \"Jamás ha sido una amiga como tal\"",
        "en": "Laura Casabela clarifies what relationship she has with Claudia Martínez: \"She has never been a friend as such\"",
        "cn": "劳拉·卡萨贝拉澄清了她与克劳迪娅·马丁内斯的关系：“她从来都不是朋友”",
        "audio": "./assets/audios/story_3_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "laura",
        "pos": "voc.",
        "cn": "劳拉",
        "en": "Laura",
        "example": "Claudia Martínez acaba de dar la bienvenida a su primera hija junto a Mario González, ex de Laura Casabela.",
        "audio": "./assets/audios/vocab_story_3_1.mp3"
      },
      {
        "word": "casabela",
        "pos": "voc.",
        "cn": "卡萨贝拉",
        "en": "casabela",
        "example": "Laura Casabela aclara qué relación guarda con Claudia Martínez: \"Jamás ha sido una amiga como tal\"",
        "audio": "./assets/audios/vocab_story_3_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「laura」在文中的表达",
      "detail": "「laura」在本文语境下表示“劳拉”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「laura」在文中的中文含义是？",
      "options": [
        "A. 劳拉",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「laura」在此处意为：劳拉。"
    },
    "audio_full_normal": "./assets/audios/story_3_normal.mp3",
    "audio_full_slow": "./assets/audios/story_3_slow.mp3"
  },
  {
    "id": "story_4",
    "tag": "体育 / 赛事",
    "date": "2026-11-14",
    "title": {
      "es": "Gerard Piqué vuelve a la carga y ataca a la RFEF: \"No tenemos constancia de las sanciones a los jugadores del Andorra\"",
      "en": "Gerard Piqué returns to the fray and attacks the RFEF: \"We have no record of the sanctions against the Andorra players\"",
      "cn": "04. 杰拉德·皮克重返战场并攻击西班牙足协：“我们没有对安道尔球员实施制裁的记录”"
    },
    "intro": "安道尔足球俱乐部最大股东在“TikTok”上抱怨西班牙足协没有向他们通报杰斯的受制裁比赛",
    "sentences": [
      {
        "id": 1,
        "es": "El máximo accionista del FC Andorra se quejó en 'TikTok' que la RFEF no les ha notificado los partidos de sanción de Jesús Owono, Efe Akman y Lautaro de León.",
        "en": "The largest shareholder of FC Andorra complained on 'TikTok' that the RFEF has not notified them of the suspension matches of Jesús Owono, Efe Akman and Lautaro de León.",
        "cn": "安道尔足球俱乐部最大股东在“TikTok”上抱怨称，西班牙足协没有通知他们赫苏斯·奥沃诺、埃菲·阿克曼和劳塔罗·德莱昂的停赛事宜。",
        "audio": "./assets/audios/story_4_s1.mp3"
      },
      {
        "id": 2,
        "es": "Gerard Piqué vuelve a la carga y ataca a la RFEF: \"No tenemos constancia de las sanciones a los jugadores del Andorra\"",
        "en": "Gerard Piqué returns to the fray and attacks the RFEF: \"We have no record of the sanctions against the Andorra players\"",
        "cn": "杰拉德·皮克重返战场并攻击西班牙足协：“我们没有对安道尔球员实施制裁的记录”",
        "audio": "./assets/audios/story_4_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "gerard",
        "pos": "voc.",
        "cn": "杰拉德",
        "en": "gerard",
        "example": "El máximo accionista del FC Andorra se quejó en 'TikTok' que la RFEF no les ha notificado los partidos de sanción de Jesús Owono, Efe Akman y Lautaro de León.",
        "audio": "./assets/audios/vocab_story_4_1.mp3"
      },
      {
        "word": "piqué",
        "pos": "voc.",
        "cn": "激怒",
        "en": "pique",
        "example": "Gerard Piqué vuelve a la carga y ataca a la RFEF: \"No tenemos constancia de las sanciones a los jugadores del Andorra\"",
        "audio": "./assets/audios/vocab_story_4_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「gerard」在文中的表达",
      "detail": "「gerard」在本文语境下表示“杰拉德”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「gerard」在文中的中文含义是？",
      "options": [
        "A. 杰拉德",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「gerard」在此处意为：杰拉德。"
    },
    "audio_full_normal": "./assets/audios/story_4_normal.mp3",
    "audio_full_slow": "./assets/audios/story_4_slow.mp3"
  },
  {
    "id": "story_5",
    "tag": "体育 / 赛事",
    "date": "2026-11-14",
    "title": {
      "es": "La familia de Jesús de Miguel recibe gran parte del dinero recaudado por el futbolista Fran Sol",
      "en": "Jesús de Miguel's family receives a large part of the money raised by soccer player Fran Sol",
      "cn": "05. 赫苏斯·德·米格尔 (Jesús de Miguel) 的家人收到了足球运动员弗兰·索尔 (Fran Sol) 筹集的大部分资金"
    },
    "intro": "这位特内里费岛球员在GoFundMe上发起的活动已筹集了总计213,517欧元来帮助这个家庭。",
    "sentences": [
      {
        "id": 1,
        "es": "La campaña impulsada por el jugador del Tenerife en GoFundMe ha recabado un total de 213.",
        "en": "The campaign promoted by the Tenerife player on GoFundMe has raised a total of 213.",
        "cn": "这位特内里费岛球员在 GoFundMe 上发起的活动共筹集了 213 美元。",
        "audio": "./assets/audios/story_5_s1.mp3"
      },
      {
        "id": 2,
        "es": "517 euros para ayudar a la familia de De Miguel.",
        "en": "517 euros to help De Miguel's family.",
        "cn": "517 欧元帮助德米格尔的家人。",
        "audio": "./assets/audios/story_5_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "familia",
        "pos": "voc.",
        "cn": "家庭",
        "en": "family",
        "example": "La campaña impulsada por el jugador del Tenerife en GoFundMe ha recabado un total de 213.",
        "audio": "./assets/audios/vocab_story_5_1.mp3"
      },
      {
        "word": "jesús",
        "pos": "voc.",
        "cn": "耶稣",
        "en": "Jesus",
        "example": "517 euros para ayudar a la familia de De Miguel.",
        "audio": "./assets/audios/vocab_story_5_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「familia」在文中的表达",
      "detail": "「familia」在本文语境下表示“家庭”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「familia」在文中的中文含义是？",
      "options": [
        "A. 家庭",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「familia」在此处意为：家庭。"
    },
    "audio_full_normal": "./assets/audios/story_5_normal.mp3",
    "audio_full_slow": "./assets/audios/story_5_slow.mp3"
  },
  {
    "id": "story_6",
    "tag": "体育 / 赛事",
    "date": "2026-11-14",
    "title": {
      "es": "Gerard López declara haber utilizado los informes de Negreira con el Barça B",
      "en": "Gerard López declares having used Negreira's reports with Barça B",
      "cn": "06. 杰拉德·洛佩斯宣称使用了内格雷拉对巴萨 B 的报告"
    },
    "intro": "前教练和子公司前代表的声明与路易斯·恩里克 2025 年 12 月的声明形成鲜明对比",
    "sentences": [
      {
        "id": 1,
        "es": "La declaración del extécnico y del exdelegado del filial contrasta con las que hicieron en diciembre de 2025 Luis Enrique Martínez y Ernesto Valverde.",
        "en": "The statement of the former coach and the former delegate of the subsidiary contrasts with those made in December 2025 by Luis Enrique Martínez and Ernesto Valverde.",
        "cn": "前教练和子公司前代表的声明与路易斯·恩里克·马丁内斯和埃内斯托·巴尔韦德在 2025 年 12 月的声明形成鲜明对比。",
        "audio": "./assets/audios/story_6_s1.mp3"
      },
      {
        "id": 2,
        "es": "Gerard López declara haber utilizado los informes de Negreira con el Barça B",
        "en": "Gerard López declares having used Negreira's reports with Barça B",
        "cn": "杰拉德·洛佩斯宣称使用了内格雷拉对巴萨 B 的报告",
        "audio": "./assets/audios/story_6_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "gerard",
        "pos": "voc.",
        "cn": "杰拉德",
        "en": "gerard",
        "example": "La declaración del extécnico y del exdelegado del filial contrasta con las que hicieron en diciembre de 2025 Luis Enrique Martínez y Ernesto Valverde.",
        "audio": "./assets/audios/vocab_story_6_1.mp3"
      },
      {
        "word": "lópez",
        "pos": "voc.",
        "cn": "洛佩兹",
        "en": "lopez",
        "example": "Gerard López declara haber utilizado los informes de Negreira con el Barça B",
        "audio": "./assets/audios/vocab_story_6_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「gerard」在文中的表达",
      "detail": "「gerard」在本文语境下表示“杰拉德”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「gerard」在文中的中文含义是？",
      "options": [
        "A. 杰拉德",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「gerard」在此处意为：杰拉德。"
    },
    "audio_full_normal": "./assets/audios/story_6_normal.mp3",
    "audio_full_slow": "./assets/audios/story_6_slow.mp3"
  },
  {
    "id": "story_7",
    "tag": "文化 / 艺术",
    "date": "2026-11-14",
    "title": {
      "es": "10 títulos para celebrar el Día de las Librerías",
      "en": "10 titles to celebrate Bookstore Day",
      "cn": "07. 庆祝书店日的 10 本书"
    },
    "intro": "由于总罢工，传统日期 11 月 11 日已改为 13 日星期五。",
    "sentences": [
      {
        "id": 1,
        "es": "La fecha tradicional, el 11 de noviembre, se ha cambiado al viernes 13 por la huelga general.",
        "en": "The traditional date, November 11, has been changed to Friday the 13th due to the general strike.",
        "cn": "由于总罢工，传统日期 11 月 11 日已改为 13 日星期五。",
        "audio": "./assets/audios/story_7_s1.mp3"
      },
      {
        "id": 2,
        "es": "10 títulos para celebrar el Día de las Librerías",
        "en": "10 titles to celebrate Bookstore Day",
        "cn": "庆祝书店日的 10 本书",
        "audio": "./assets/audios/story_7_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "títulos",
        "pos": "voc.",
        "cn": "证券",
        "en": "securities",
        "example": "La fecha tradicional, el 11 de noviembre, se ha cambiado al viernes 13 por la huelga general.",
        "audio": "./assets/audios/vocab_story_7_1.mp3"
      },
      {
        "word": "celebrar",
        "pos": "voc.",
        "cn": "庆祝",
        "en": "celebrate",
        "example": "10 títulos para celebrar el Día de las Librerías",
        "audio": "./assets/audios/vocab_story_7_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「títulos」在文中的表达",
      "detail": "「títulos」在本文语境下表示“证券”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「títulos」在文中的中文含义是？",
      "options": [
        "A. 证券",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「títulos」在此处意为：证券。"
    },
    "audio_full_normal": "./assets/audios/story_7_normal.mp3",
    "audio_full_slow": "./assets/audios/story_7_slow.mp3"
  },
  {
    "id": "story_8",
    "tag": "文化 / 艺术",
    "date": "2026-11-14",
    "title": {
      "es": "El festival Atrium Musicae celebra su quinta edición con la Orquesta Nacional de España y el bicentenario de Beethoven",
      "en": "The Atrium Musicae festival celebrates its fifth edition with the National Orchestra of Spain and the bicentennial of Beethoven",
      "cn": "08. 中庭音乐节与西班牙国家交响乐团一起庆祝第五届音乐节和贝多芬诞辰二百周年"
    },
    "intro": "该活动将于2027年1月26日至2月1日期间举行，并将在不同场馆举办19场音乐会。",
    "sentences": [
      {
        "id": 1,
        "es": "El evento se celebrará entre el 26 de enero y el 1 de febrero de 2027 y en él se ofrecerán 19 conciertos en diferentes puntos emblemáticos repartidos entre Cáceres, Plasencia, Garrovillas de Alconétar, Trujillo, Malpartida de Cáceres y Brozas.",
        "en": "The event will be held between January 26 and February 1, 2027 and 19 concerts will be offered in different emblematic points distributed between Cáceres, Plasencia, Garrovillas de Alconétar, Trujillo, Malpartida de Cáceres and Brozas.",
        "cn": "该活动将于 2027 年 1 月 26 日至 2 月 1 日期间举行，并将在卡塞雷斯、普拉森西亚、加罗维拉斯德阿尔科内塔尔、特鲁希略、马尔帕蒂达卡塞雷斯和布罗扎斯之间的不同标志性地点举办 19 场音乐会。",
        "audio": "./assets/audios/story_8_s1.mp3"
      },
      {
        "id": 2,
        "es": "El festival Atrium Musicae celebra su quinta edición con la Orquesta Nacional de España y el bicentenario de Beethoven",
        "en": "The Atrium Musicae festival celebrates its fifth edition with the National Orchestra of Spain and the bicentennial of Beethoven",
        "cn": "中庭音乐节与西班牙国家交响乐团一起庆祝第五届音乐节和贝多芬诞辰二百周年",
        "audio": "./assets/audios/story_8_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "festival",
        "pos": "voc.",
        "cn": "节日",
        "en": "festival",
        "example": "El evento se celebrará entre el 26 de enero y el 1 de febrero de 2027 y en él se ofrecerán 19 conciertos en diferentes puntos emblemáticos repartidos entre Cáceres, Plasencia, Garrovillas de Alconétar, Trujillo, Malpartida de Cáceres y Brozas.",
        "audio": "./assets/audios/vocab_story_8_1.mp3"
      },
      {
        "word": "atrium",
        "pos": "voc.",
        "cn": "中庭",
        "en": "atrium",
        "example": "El festival Atrium Musicae celebra su quinta edición con la Orquesta Nacional de España y el bicentenario de Beethoven",
        "audio": "./assets/audios/vocab_story_8_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「festival」在文中的表达",
      "detail": "「festival」在本文语境下表示“节日”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「festival」在文中的中文含义是？",
      "options": [
        "A. 节日",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「festival」在此处意为：节日。"
    },
    "audio_full_normal": "./assets/audios/story_8_normal.mp3",
    "audio_full_slow": "./assets/audios/story_8_slow.mp3"
  },
  {
    "id": "story_9",
    "tag": "生活 / 资讯",
    "date": "2026-11-14",
    "title": {
      "es": "EEUU ordena suspender todos los vuelos en el país por \"circunstancias extraordinarias y motivos de seguridad\"",
      "en": "The US orders to suspend all flights in the country due to \"extraordinary circumstances and security reasons\"",
      "cn": "09. 由于“特殊情况和安全原因”，美国下令暂停该国所有航班"
    },
    "intro": "运输部长肖恩·达菲 (Sean Duffy) 报告说，存在影响所有城市的通信问题",
    "sentences": [
      {
        "id": 1,
        "es": "El secretario de Transporte, Sean Duffy, ha informado de que existe un problema de comunicación que afecta a todos los centros de control.",
        "en": "The Secretary of Transport, Sean Duffy, has reported that there is a communication problem that affects all control centres.",
        "cn": "交通部长肖恩·达菲 (Sean Duffy) 报告称，所有控制中心都存在通信问题。",
        "audio": "./assets/audios/story_9_s1.mp3"
      },
      {
        "id": 2,
        "es": "EEUU ordena suspender todos los vuelos en el país por \"circunstancias extraordinarias y motivos de seguridad\"",
        "en": "The US orders to suspend all flights in the country due to \"extraordinary circumstances and security reasons\"",
        "cn": "由于“特殊情况和安全原因”，美国下令暂停该国所有航班",
        "audio": "./assets/audios/story_9_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "ordena",
        "pos": "voc.",
        "cn": "命令",
        "en": "order",
        "example": "El secretario de Transporte, Sean Duffy, ha informado de que existe un problema de comunicación que afecta a todos los centros de control.",
        "audio": "./assets/audios/vocab_story_9_1.mp3"
      },
      {
        "word": "suspender",
        "pos": "voc.",
        "cn": "暂停",
        "en": "suspend",
        "example": "EEUU ordena suspender todos los vuelos en el país por \"circunstancias extraordinarias y motivos de seguridad\"",
        "audio": "./assets/audios/vocab_story_9_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「ordena」在文中的表达",
      "detail": "「ordena」在本文语境下表示“命令”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「ordena」在文中的中文含义是？",
      "options": [
        "A. 命令",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「ordena」在此处意为：命令。"
    },
    "audio_full_normal": "./assets/audios/story_9_normal.mp3",
    "audio_full_slow": "./assets/audios/story_9_slow.mp3"
  },
  {
    "id": "story_10",
    "tag": "生活 / 资讯",
    "date": "2026-11-14",
    "title": {
      "es": "Primer debate electoral en campaña: PSOE y Frente Amplio prometen inversión en el tren, frente a PP y Vox que piden auditar la red",
      "en": "First electoral debate in the campaign: PSOE and Frente Amplio promise investment in the train, compared to PP and Vox who ask to audit the network",
      "cn": "10. 竞选中的第一次选举辩论：PSOE 和 Frente Amplio 承诺投资火车，而 PP 和 Vox 则要求审计网络"
    },
    "intro": "民众承诺，如果他们能够执政，将投资 3000 亿美元，而扩大阵线则要求停止扩建机场",
    "sentences": [
      {
        "id": 1,
        "es": "Los populares prometen invertir 300.",
        "en": "The popular ones promise to invest 300.",
        "cn": "热门的承诺投资300。",
        "audio": "./assets/audios/story_10_s1.mp3"
      },
      {
        "id": 2,
        "es": "000 millones si consigue gobernar y Frente Amplio pide dejar de ampliar aeropuertos e invertir en Cercanías.",
        "en": "000 million if he manages to govern and Frente Amplio asks to stop expanding airports and invest in Cercanías.",
        "cn": "如果他能够执政，并且扩大阵线要求停止扩建机场并投资塞尔卡尼亚斯，那么他将获得 0 亿美元。",
        "audio": "./assets/audios/story_10_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "debate",
        "pos": "voc.",
        "cn": "辩论",
        "en": "debate",
        "example": "Los populares prometen invertir 300.",
        "audio": "./assets/audios/vocab_story_10_1.mp3"
      },
      {
        "word": "electoral",
        "pos": "voc.",
        "cn": "选举的",
        "en": "electoral",
        "example": "000 millones si consigue gobernar y Frente Amplio pide dejar de ampliar aeropuertos e invertir en Cercanías.",
        "audio": "./assets/audios/vocab_story_10_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「debate」在文中的表达",
      "detail": "「debate」在本文语境下表示“辩论”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「debate」在文中的中文含义是？",
      "options": [
        "A. 辩论",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「debate」在此处意为：辩论。"
    },
    "audio_full_normal": "./assets/audios/story_10_normal.mp3",
    "audio_full_slow": "./assets/audios/story_10_slow.mp3"
  }
];

module.exports = {
  DAILY_STORIES
};
