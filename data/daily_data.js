// 每日 10 篇西语早报数据包
const DAILY_STORIES = [
  {
    "id": "story_1",
    "tag": "八卦 / 名人",
    "date": "2026-11-09",
    "title": {
      "es": "Tu horóscopo diario: lunes 9 de noviembre de 2026",
      "en": "Your daily horoscope: Monday, November 9, 2026",
      "cn": "01. 你的每日星座运势：2026 年 11 月 9 日星期一"
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
        "es": "Tu horóscopo diario: lunes 9 de noviembre de 2026",
        "en": "Your daily horoscope: Monday, November 9, 2026",
        "cn": "你的每日星座运势：2026 年 11 月 9 日星期一",
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
        "example": "Tu horóscopo diario: lunes 9 de noviembre de 2026",
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
    "date": "2026-11-09",
    "title": {
      "es": "Alanis Morissette se declara pansexual: \"Me gusta dejarlo para el epílogo\"",
      "en": "Alanis Morissette declares herself pansexual: \"I like to leave it for the epilogue\"",
      "cn": "02. 艾拉妮丝·莫莉塞特 (Alanis Morissette) 宣称自己是泛性恋者：“我喜欢把它留到尾声”"
    },
    "intro": "这位艺术家讲述了她与 LGBTQ+ 群体的联系。",
    "sentences": [
      {
        "id": 1,
        "es": "La artista habla de su vínculo con la comunidad LGBTQ+.",
        "en": "The artist talks about her connection with the LGBTQ+ community.",
        "cn": "这位艺术家讲述了她与 LGBTQ+ 群体的联系。",
        "audio": "./assets/audios/story_2_s1.mp3"
      },
      {
        "id": 2,
        "es": "Alanis Morissette se declara pansexual: \"Me gusta dejarlo para el epílogo\"",
        "en": "Alanis Morissette declares herself pansexual: \"I like to leave it for the epilogue\"",
        "cn": "艾拉妮丝·莫莉塞特 (Alanis Morissette) 宣称自己是泛性恋者：“我喜欢把它留到尾声”",
        "audio": "./assets/audios/story_2_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "alanis",
        "pos": "voc.",
        "cn": "阿拉尼斯",
        "en": "Alanis",
        "example": "La artista habla de su vínculo con la comunidad LGBTQ+.",
        "audio": "./assets/audios/vocab_story_2_1.mp3"
      },
      {
        "word": "morissette",
        "pos": "voc.",
        "cn": "莫里塞特",
        "en": "morissette",
        "example": "Alanis Morissette se declara pansexual: \"Me gusta dejarlo para el epílogo\"",
        "audio": "./assets/audios/vocab_story_2_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「alanis」在文中的表达",
      "detail": "「alanis」在本文语境下表示“阿拉尼斯”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「alanis」在文中的中文含义是？",
      "options": [
        "A. 阿拉尼斯",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「alanis」在此处意为：阿拉尼斯。"
    },
    "audio_full_normal": "./assets/audios/story_2_normal.mp3",
    "audio_full_slow": "./assets/audios/story_2_slow.mp3"
  },
  {
    "id": "story_3",
    "tag": "八卦 / 名人",
    "date": "2026-11-09",
    "title": {
      "es": "Muere el 'youtuber' Cho Jin-woo tras ser atropellado por un camión",
      "en": "YouTuber Cho Jin-woo dies after being hit by a truck",
      "cn": "03. YouTuber Cho Jin-woo 被卡车撞死"
    },
    "intro": "来自苏尔西雷多的 33 岁内容创作者在玻利维亚去世。",
    "sentences": [
      {
        "id": 1,
        "es": "El creador de contenido surcireado, de 33 años, ha fallecido en Bolivia.",
        "en": "The 33-year-old content creator from Surcireado has died in Bolivia.",
        "cn": "来自苏尔西雷多的 33 岁内容创作者在玻利维亚去世。",
        "audio": "./assets/audios/story_3_s1.mp3"
      },
      {
        "id": 2,
        "es": "Muere el 'youtuber' Cho Jin-woo tras ser atropellado por un camión",
        "en": "YouTuber Cho Jin-woo dies after being hit by a truck",
        "cn": "YouTuber Cho Jin-woo 被卡车撞死",
        "audio": "./assets/audios/story_3_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "muere",
        "pos": "voc.",
        "cn": "死",
        "en": "die",
        "example": "El creador de contenido surcireado, de 33 años, ha fallecido en Bolivia.",
        "audio": "./assets/audios/vocab_story_3_1.mp3"
      },
      {
        "word": "youtuber",
        "pos": "voc.",
        "cn": "核心词汇",
        "en": "youtuber",
        "example": "Muere el 'youtuber' Cho Jin-woo tras ser atropellado por un camión",
        "audio": "./assets/audios/vocab_story_3_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「muere」在文中的表达",
      "detail": "「muere」在本文语境下表示“死”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「muere」在文中的中文含义是？",
      "options": [
        "A. 死",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「muere」在此处意为：死。"
    },
    "audio_full_normal": "./assets/audios/story_3_normal.mp3",
    "audio_full_slow": "./assets/audios/story_3_slow.mp3"
  },
  {
    "id": "story_4",
    "tag": "体育 / 赛事",
    "date": "2026-11-09",
    "title": {
      "es": "Alcaraz conquista su primer Masters 1000 de París tras ganar en una disputada final a Ben Shelton",
      "en": "Alcaraz wins his first Paris Masters 1000 after beating Ben Shelton in a disputed final",
      "cn": "04. 阿尔卡拉斯在有争议的决赛中击败本谢尔顿后赢得了他的第一个巴黎大师赛 1000 冠军"
    },
    "intro": "这位穆尔西亚网球运动员成为继大卫·费雷尔之后第二位赢得巴黎大师赛 1000 的西班牙人。",
    "sentences": [
      {
        "id": 1,
        "es": "El tenista murciano se convierte en el segundo español, tras David Ferrer, en conquistar el Masters 1000 parisino.",
        "en": "The Murcian tennis player becomes the second Spaniard, after David Ferrer, to win the Parisian Masters 1000.",
        "cn": "这位穆尔西亚网球运动员成为继大卫·费雷尔之后第二位赢得巴黎大师赛 1000 的西班牙人。",
        "audio": "./assets/audios/story_4_s1.mp3"
      },
      {
        "id": 2,
        "es": "Alcaraz conquista su primer Masters 1000 de París tras ganar en una disputada final a Ben Shelton",
        "en": "Alcaraz wins his first Paris Masters 1000 after beating Ben Shelton in a disputed final",
        "cn": "阿尔卡拉斯在有争议的决赛中击败本谢尔顿后赢得了他的第一个巴黎大师赛 1000 冠军",
        "audio": "./assets/audios/story_4_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "alcaraz",
        "pos": "voc.",
        "cn": "阿尔卡拉斯",
        "en": "alcaraz",
        "example": "El tenista murciano se convierte en el segundo español, tras David Ferrer, en conquistar el Masters 1000 parisino.",
        "audio": "./assets/audios/vocab_story_4_1.mp3"
      },
      {
        "word": "conquista",
        "pos": "voc.",
        "cn": "征服",
        "en": "conquest",
        "example": "Alcaraz conquista su primer Masters 1000 de París tras ganar en una disputada final a Ben Shelton",
        "audio": "./assets/audios/vocab_story_4_2.mp3"
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
    "audio_full_normal": "./assets/audios/story_4_normal.mp3",
    "audio_full_slow": "./assets/audios/story_4_slow.mp3"
  },
  {
    "id": "story_5",
    "tag": "体育 / 赛事",
    "date": "2026-11-09",
    "title": {
      "es": "Fermín lidera la remontada ante el Atlético de Madrid y mantiene al Barça líder de LaLiga",
      "en": "Fermín leads the comeback against Atlético de Madrid and keeps Barça leader of LaLiga",
      "cn": "05. 费尔明带领球队逆转马德里竞技队，并让巴萨继续领跑西甲"
    },
    "intro": "埃尔坎皮略中场球员的梅开二度为巴塞罗那队赢得了三分，而巴塞罗那队则因朱的进球而开始输球",
    "sentences": [
      {
        "id": 1,
        "es": "Un doblete del centrocampista de El Campillo dio los tres puntos al FC Barcelona, que empezó perdiendo con un gol de Giuliano Simeone.",
        "en": "A double from the El Campillo midfielder gave the three points to FC Barcelona, ​​who started losing with a goal from Giuliano Simeone.",
        "cn": "埃尔坎皮略中场球员的梅开二度为巴塞罗那队赢得了三分，而巴塞罗那队则因朱利亚诺·西蒙尼的进球而开始输球。",
        "audio": "./assets/audios/story_5_s1.mp3"
      },
      {
        "id": 2,
        "es": "Fermín lidera la remontada ante el Atlético de Madrid y mantiene al Barça líder de LaLiga",
        "en": "Fermín leads the comeback against Atlético de Madrid and keeps Barça leader of LaLiga",
        "cn": "费尔明带领球队逆转马德里竞技队，并让巴萨继续领跑西甲",
        "audio": "./assets/audios/story_5_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "fermín",
        "pos": "voc.",
        "cn": "费尔明",
        "en": "fermin",
        "example": "Un doblete del centrocampista de El Campillo dio los tres puntos al FC Barcelona, que empezó perdiendo con un gol de Giuliano Simeone.",
        "audio": "./assets/audios/vocab_story_5_1.mp3"
      },
      {
        "word": "lidera",
        "pos": "voc.",
        "cn": "线索",
        "en": "leads",
        "example": "Fermín lidera la remontada ante el Atlético de Madrid y mantiene al Barça líder de LaLiga",
        "audio": "./assets/audios/vocab_story_5_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「fermín」在文中的表达",
      "detail": "「fermín」在本文语境下表示“费尔明”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「fermín」在文中的中文含义是？",
      "options": [
        "A. 费尔明",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「fermín」在此处意为：费尔明。"
    },
    "audio_full_normal": "./assets/audios/story_5_normal.mp3",
    "audio_full_slow": "./assets/audios/story_5_slow.mp3"
  },
  {
    "id": "story_6",
    "tag": "体育 / 赛事",
    "date": "2026-11-09",
    "title": {
      "es": "Las Aprilia evitan el Mundial de Marc Márquez: el '93' acaba segundo, gana Bezzecchi y Martín, séptimo",
      "en": "The Aprilias avoid Marc Márquez's World Championship: the '93' finishes second, Bezzecchi wins and Martín, seventh",
      "cn": "06. 阿普里利亚队避免了马克·马尔克斯的世界冠军：“93”获得第二名，贝泽奇获胜，马丁获得第七名"
    },
    "intro": "这位来自塞尔韦拉的男子需要赢得比赛，而豪尔赫则无法在卡塔尔获得积分，所以他至少要等到",
    "sentences": [
      {
        "id": 1,
        "es": "El de Cervera necesitaba ganar la carrera y que Jorge no puntuase en Qatar, por lo que tendrá que esperar, al menos, hasta Portimao para ser campeón.",
        "en": "The one from Cervera needed to win the race and for Jorge not to score points in Qatar, so he will have to wait, at least, until Portimao to be champion.",
        "cn": "来自塞尔维拉的车手需要赢得比赛，而豪尔赫则无法在卡塔尔获得积分，因此他必须至少等到波尔蒂芒才能获得冠军。",
        "audio": "./assets/audios/story_6_s1.mp3"
      },
      {
        "id": 2,
        "es": "Las Aprilia evitan el Mundial de Marc Márquez: el '93' acaba segundo, gana Bezzecchi y Martín, séptimo",
        "en": "The Aprilias avoid Marc Márquez's World Championship: the '93' finishes second, Bezzecchi wins and Martín, seventh",
        "cn": "阿普里利亚队避免了马克·马尔克斯的世界冠军：“93”获得第二名，贝泽奇获胜，马丁获得第七名",
        "audio": "./assets/audios/story_6_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "aprilia",
        "pos": "voc.",
        "cn": "阿普里利亚",
        "en": "aprilia",
        "example": "El de Cervera necesitaba ganar la carrera y que Jorge no puntuase en Qatar, por lo que tendrá que esperar, al menos, hasta Portimao para ser campeón.",
        "audio": "./assets/audios/vocab_story_6_1.mp3"
      },
      {
        "word": "evitan",
        "pos": "voc.",
        "cn": "他们避免",
        "en": "they avoid",
        "example": "Las Aprilia evitan el Mundial de Marc Márquez: el '93' acaba segundo, gana Bezzecchi y Martín, séptimo",
        "audio": "./assets/audios/vocab_story_6_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「aprilia」在文中的表达",
      "detail": "「aprilia」在本文语境下表示“阿普里利亚”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「aprilia」在文中的中文含义是？",
      "options": [
        "A. 阿普里利亚",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「aprilia」在此处意为：阿普里利亚。"
    },
    "audio_full_normal": "./assets/audios/story_6_normal.mp3",
    "audio_full_slow": "./assets/audios/story_6_slow.mp3"
  },
  {
    "id": "story_7",
    "tag": "文化 / 艺术",
    "date": "2026-11-09",
    "title": {
      "es": "Jordi Wild se adentra en el terror gótico con la novela 'La abadía sin ojos'",
      "en": "Jordi Wild delves into gothic horror with the novel 'The Abbey Without Eyes'",
      "cn": "07. 乔迪·维尔德（Jordi Wild）通过小说《无眼修道院》深入探讨哥特式恐怖"
    },
    "intro": "这部恐怖小说以一座与世隔绝的中世纪修道院为背景，修道院里隐藏着秘密和未探索的存在。",
    "sentences": [
      {
        "id": 1,
        "es": "La novela de terror está ambientada en un monasterio medieval aislado del mundo que esconde secretos y presencias inexplicables.",
        "en": "The horror novel is set in a medieval monastery isolated from the world that hides secrets and inexplicable presences.",
        "cn": "这部恐怖小说以一座与世隔绝的中世纪修道院为背景，修道院里隐藏着秘密和莫名其妙的存在。",
        "audio": "./assets/audios/story_7_s1.mp3"
      },
      {
        "id": 2,
        "es": "Jordi Wild se adentra en el terror gótico con la novela 'La abadía sin ojos'",
        "en": "Jordi Wild delves into gothic horror with the novel 'The Abbey Without Eyes'",
        "cn": "乔迪·维尔德（Jordi Wild）通过小说《无眼修道院》深入探讨哥特式恐怖",
        "audio": "./assets/audios/story_7_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "jordi",
        "pos": "voc.",
        "cn": "约尔迪",
        "en": "jordi",
        "example": "La novela de terror está ambientada en un monasterio medieval aislado del mundo que esconde secretos y presencias inexplicables.",
        "audio": "./assets/audios/vocab_story_7_1.mp3"
      },
      {
        "word": "adentra",
        "pos": "voc.",
        "cn": "进入",
        "en": "enter",
        "example": "Jordi Wild se adentra en el terror gótico con la novela 'La abadía sin ojos'",
        "audio": "./assets/audios/vocab_story_7_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「jordi」在文中的表达",
      "detail": "「jordi」在本文语境下表示“约尔迪”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「jordi」在文中的中文含义是？",
      "options": [
        "A. 约尔迪",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「jordi」在此处意为：约尔迪。"
    },
    "audio_full_normal": "./assets/audios/story_7_normal.mp3",
    "audio_full_slow": "./assets/audios/story_7_slow.mp3"
  },
  {
    "id": "story_8",
    "tag": "文化 / 艺术",
    "date": "2026-11-09",
    "title": {
      "es": "La prodigiosa 'La ciudad de los prodigios', de Mendoza, cumple 40 años: \"He preferido no corregir errores, el libro tiene vida propia\"",
      "en": "The prodigious 'The City of Prodigies', by Mendoza, turns 40: \"I have preferred not to correct errors, the book has a life of its own\"",
      "cn": "08. 门多萨的伟大著作《神童之城》40 岁了：“我宁愿不去纠正错误，这本书有自己的生命”"
    },
    "intro": "这本书是 20 世纪最好的当代文学的旗舰，描绘了它诞生的巴塞罗那市。",
    "sentences": [
      {
        "id": 1,
        "es": "Este título, bandera de la mejor literatura contemporánea escrita en el siglo XX, retrata la ciudad condal que vio nacer al escritor entre las Exposiciones de 1888 y 1929.",
        "en": "This title, flagship of the best contemporary literature written in the 20th century, portrays the city of Barcelona where the writer was born between the Exhibitions of 1888 and 1929.",
        "cn": "这本书是 20 世纪最佳当代文学的旗舰作品，描绘了这位作家在 1888 年至 1929 年展览期间出生的巴塞罗那市。",
        "audio": "./assets/audios/story_8_s1.mp3"
      },
      {
        "id": 2,
        "es": "La prodigiosa 'La ciudad de los prodigios', de Mendoza, cumple 40 años: \"He preferido no corregir errores, el libro tiene vida propia\"",
        "en": "The prodigious 'The City of Prodigies', by Mendoza, turns 40: \"I have preferred not to correct errors, the book has a life of its own\"",
        "cn": "门多萨的伟大著作《神童之城》40 岁了：“我宁愿不去纠正错误，这本书有自己的生命”",
        "audio": "./assets/audios/story_8_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "prodigiosa",
        "pos": "voc.",
        "cn": "惊人",
        "en": "prodigious",
        "example": "Este título, bandera de la mejor literatura contemporánea escrita en el siglo XX, retrata la ciudad condal que vio nacer al escritor entre las Exposiciones de 1888 y 1929.",
        "audio": "./assets/audios/vocab_story_8_1.mp3"
      },
      {
        "word": "ciudad",
        "pos": "voc.",
        "cn": "城市",
        "en": "city",
        "example": "La prodigiosa 'La ciudad de los prodigios', de Mendoza, cumple 40 años: \"He preferido no corregir errores, el libro tiene vida propia\"",
        "audio": "./assets/audios/vocab_story_8_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「prodigiosa」在文中的表达",
      "detail": "「prodigiosa」在本文语境下表示“惊人”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「prodigiosa」在文中的中文含义是？",
      "options": [
        "A. 惊人",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「prodigiosa」在此处意为：惊人。"
    },
    "audio_full_normal": "./assets/audios/story_8_normal.mp3",
    "audio_full_slow": "./assets/audios/story_8_slow.mp3"
  },
  {
    "id": "story_9",
    "tag": "生活 / 资讯",
    "date": "2026-11-09",
    "title": {
      "es": "Feijóo pide a Sánchez \"menos mirar a Trump y más a los trenes\" y a los directivos de Adif devolver los bonus que han cobrado",
      "en": "Feijóo asks Sánchez to \"look less at Trump and more at the trains\" and asks the Adif directors to return the bonuses they have received",
      "cn": "09. 费乔要求桑切斯“少看特朗普，多看火车”，并要求阿迪夫董事归还他们收到的奖金"
    },
    "intro": "人民党领导人承诺，如果他到达蒙克洛亚，将“一点一点”审查铁路运输，以便“情况恢复”。",
    "sentences": [
      {
        "id": 1,
        "es": "El líder del PP promete, si llega a la Moncloa, revisar el transporte ferroviario \"palmo a palmo\" para que \"vuelva la seguridad\" y la gente pierda el miedo al tren.",
        "en": "The leader of the PP promises, if he reaches Moncloa, to review rail transport \"inch by inch\" so that \"safety returns\" and people lose their fear of the train.",
        "cn": "人民党领导人承诺，如果他到达蒙克洛亚，将“一寸一寸”地审查铁路运输，以便“安全回归”，让人们不再对火车感到恐惧。",
        "audio": "./assets/audios/story_9_s1.mp3"
      },
      {
        "id": 2,
        "es": "Feijóo pide a Sánchez \"menos mirar a Trump y más a los trenes\" y a los directivos de Adif devolver los bonus que han cobrado",
        "en": "Feijóo asks Sánchez to \"look less at Trump and more at the trains\" and asks the Adif directors to return the bonuses they have received",
        "cn": "费乔要求桑切斯“少看特朗普，多看火车”，并要求阿迪夫董事归还他们收到的奖金",
        "audio": "./assets/audios/story_9_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "feijóo",
        "pos": "voc.",
        "cn": "费乔",
        "en": "feijoo",
        "example": "El líder del PP promete, si llega a la Moncloa, revisar el transporte ferroviario \"palmo a palmo\" para que \"vuelva la seguridad\" y la gente pierda el miedo al tren.",
        "audio": "./assets/audios/vocab_story_9_1.mp3"
      },
      {
        "word": "sánchez",
        "pos": "voc.",
        "cn": "桑切斯",
        "en": "sanchez",
        "example": "Feijóo pide a Sánchez \"menos mirar a Trump y más a los trenes\" y a los directivos de Adif devolver los bonus que han cobrado",
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
    "date": "2026-11-09",
    "title": {
      "es": "Adif niega que haya aprobado un \"bonus\" para la cúpula directiva de la empresa",
      "en": "Adif denies that it has approved a \"bonus\" for the company's management leadership",
      "cn": "10. 阿迪夫否认已批准为公司管理层领导层发放“奖金”"
    },
    "intro": "公共铁路经理坚称，所发布的信息“有偏见且不完整”，并确保所发布的信息是真实的。",
    "sentences": [
      {
        "id": 1,
        "es": "El gestor ferroviario público sostiene que la información publicada está \"sesgada e incompleta\" al asegurar que lo que se aprobó fue su convenio de financiación con el Estado para el periodo 2026-2030.",
        "en": "The public railway manager maintains that the information published is \"biased and incomplete\" by ensuring that what was approved was its financing agreement with the State for the period 2026-2030.",
        "cn": "公共铁路管理者坚称，所发布的信息“有偏见且不完整”，并确保批准的是其与国家的2026-2030年融资协议。",
        "audio": "./assets/audios/story_10_s1.mp3"
      },
      {
        "id": 2,
        "es": "Adif niega que haya aprobado un \"bonus\" para la cúpula directiva de la empresa",
        "en": "Adif denies that it has approved a \"bonus\" for the company's management leadership",
        "cn": "阿迪夫否认已批准为公司管理层领导层发放“奖金”",
        "audio": "./assets/audios/story_10_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "niega",
        "pos": "voc.",
        "cn": "否认",
        "en": "denies",
        "example": "El gestor ferroviario público sostiene que la información publicada está \"sesgada e incompleta\" al asegurar que lo que se aprobó fue su convenio de financiación con el Estado para el periodo 2026-2030.",
        "audio": "./assets/audios/vocab_story_10_1.mp3"
      },
      {
        "word": "aprobado",
        "pos": "voc.",
        "cn": "得到正式认可的",
        "en": "approved",
        "example": "Adif niega que haya aprobado un \"bonus\" para la cúpula directiva de la empresa",
        "audio": "./assets/audios/vocab_story_10_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「niega」在文中的表达",
      "detail": "「niega」在本文语境下表示“否认”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「niega」在文中的中文含义是？",
      "options": [
        "A. 否认",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「niega」在此处意为：否认。"
    },
    "audio_full_normal": "./assets/audios/story_10_normal.mp3",
    "audio_full_slow": "./assets/audios/story_10_slow.mp3"
  }
];

module.exports = {
  DAILY_STORIES
};
