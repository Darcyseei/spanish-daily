// 每日 10 篇西语早报数据包
const DAILY_STORIES = [
  {
    "id": "story_1",
    "tag": "八卦 / 名人",
    "date": "2026-11-08",
    "title": {
      "es": "Actor de renombre, activista por los derechos LGTBI en Oriente y futuro productor: así es Omar Sharif Jr.",
      "en": "Renowned actor, activist for LGTBI rights in the East and future producer: this is Omar Sharif Jr.",
      "cn": "01. 著名演员、东部 LGBTBI 权利活动家和未来的制片人：这是小奥马尔·沙里夫 (Omar Sharif Jr.)。"
    },
    "intro": "El intérprete es nieto del también intérprete Sharif Sr.",
    "sentences": [
      {
        "id": 1,
        "es": "El intérprete es nieto del también intérprete Sharif Sr.",
        "en": "The performer is the grandson of fellow performer Sharif Sr.",
        "cn": "表演者是表演者老谢里夫的孙子。",
        "audio": "./assets/audios/story_1_s1.mp3"
      },
      {
        "id": 2,
        "es": "Actor de renombre, activista por los derechos LGTBI en Oriente y futuro productor: así es Omar Sharif Jr.",
        "en": "Renowned actor, activist for LGTBI rights in the East and future producer: this is Omar Sharif Jr.",
        "cn": "著名演员、东部 LGBTBI 权利活动家和未来的制片人：这是小奥马尔·沙里夫 (Omar Sharif Jr.)。",
        "audio": "./assets/audios/story_1_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "actor",
        "pos": "voc.",
        "cn": "演员",
        "en": "actor",
        "example": "El intérprete es nieto del también intérprete Sharif Sr.",
        "audio": "./assets/audios/vocab_story_1_1.mp3"
      },
      {
        "word": "renombre",
        "pos": "voc.",
        "cn": "名声",
        "en": "renown",
        "example": "Actor de renombre, activista por los derechos LGTBI en Oriente y futuro productor: así es Omar Sharif Jr.",
        "audio": "./assets/audios/vocab_story_1_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「actor」在文中的表达",
      "detail": "「actor」在本文语境下表示“演员”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「actor」在文中的中文含义是？",
      "options": [
        "A. 演员",
        "B. 另一个意思",
        "C. 错误的翻译"
      ],
      "correct_index": 0,
      "explanation": "「actor」在此处意为：演员。"
    },
    "audio_full_normal": "./assets/audios/story_1_normal.mp3",
    "audio_full_slow": "./assets/audios/story_1_slow.mp3"
  },
  {
    "id": "story_2",
    "tag": "八卦 / 名人",
    "date": "2026-11-08",
    "title": {
      "es": "Chiqui Ibai explica por qué no permite comentarios en sus redes: \"Mi abuela falleció y veía mis vídeos\"",
      "en": "Chiqui Ibai explains why she does not allow comments on her networks: \"My grandmother died and she watched my videos\"",
      "cn": "02. Chiqui Ibai 解释了为什么她不允许在她的网络上发表评论：“我的祖母去世了，她看了我的视频”"
    },
    "intro": "这位年轻人解释说，他不想因为“仇恨者”而伤害他的家人。",
    "sentences": [
      {
        "id": 1,
        "es": "El joven explicó que no quiere hacer daño a su familia por los 'haters'.",
        "en": "The young man explained that he does not want to hurt his family because of the 'haters'.",
        "cn": "这位年轻人解释说，他不想因为“仇恨者”而伤害他的家人。",
        "audio": "./assets/audios/story_2_s1.mp3"
      },
      {
        "id": 2,
        "es": "Chiqui Ibai explica por qué no permite comentarios en sus redes: \"Mi abuela falleció y veía mis vídeos\"",
        "en": "Chiqui Ibai explains why she does not allow comments on her networks: \"My grandmother died and she watched my videos\"",
        "cn": "Chiqui Ibai 解释了为什么她不允许在她的网络上发表评论：“我的祖母去世了，她看了我的视频”",
        "audio": "./assets/audios/story_2_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "chiqui",
        "pos": "voc.",
        "cn": "奇基",
        "en": "chiqui",
        "example": "El joven explicó que no quiere hacer daño a su familia por los 'haters'.",
        "audio": "./assets/audios/vocab_story_2_1.mp3"
      },
      {
        "word": "explica",
        "pos": "voc.",
        "cn": "解释",
        "en": "explains",
        "example": "Chiqui Ibai explica por qué no permite comentarios en sus redes: \"Mi abuela falleció y veía mis vídeos\"",
        "audio": "./assets/audios/vocab_story_2_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「chiqui」在文中的表达",
      "detail": "「chiqui」在本文语境下表示“奇基”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「chiqui」在文中的中文含义是？",
      "options": [
        "A. 奇基",
        "B. 另一个意思",
        "C. 错误的翻译"
      ],
      "correct_index": 0,
      "explanation": "「chiqui」在此处意为：奇基。"
    },
    "audio_full_normal": "./assets/audios/story_2_normal.mp3",
    "audio_full_slow": "./assets/audios/story_2_slow.mp3"
  },
  {
    "id": "story_3",
    "tag": "八卦 / 名人",
    "date": "2026-11-08",
    "title": {
      "es": "Así es, a sus casi 70 años, Greg Germann, Richard Fish en 'Ally McBeal'",
      "en": "That's right, at almost 70 years old, Greg Germann, Richard Fish in 'Ally McBeal'",
      "cn": "03. 没错，《甜心俏佳人》中的格雷格·格尔曼和理查德·菲什已经快 70 岁了"
    },
    "intro": "在《律师》系列之后，这位演员在成功的《实习医生格蕾》中获得了另一个常规角色，但由于以下原因他放弃了这个角色：",
    "sentences": [
      {
        "id": 1,
        "es": "Tras la serie de abogados, el actor consiguió otro papel fijo en la exitosa Anatomía de Grey, pero renunció a él por hacer lo que considera su vocación: el teatro.",
        "en": "After the lawyer series, the actor got another regular role in the successful Grey's Anatomy, but he gave it up to do what he considers his vocation: the theater.",
        "cn": "在《律师》系列之后，这位演员在成功的《实习医生格蕾》中获得了另一个固定角色，但他放弃了这个角色，去做他认为自己的职业：戏剧。",
        "audio": "./assets/audios/story_3_s1.mp3"
      },
      {
        "id": 2,
        "es": "Así es, a sus casi 70 años, Greg Germann, Richard Fish en 'Ally McBeal'",
        "en": "That's right, at almost 70 years old, Greg Germann, Richard Fish in 'Ally McBeal'",
        "cn": "没错，《甜心俏佳人》中的格雷格·格尔曼和理查德·菲什已经快 70 岁了",
        "audio": "./assets/audios/story_3_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "germann",
        "pos": "voc.",
        "cn": "德语",
        "en": "German",
        "example": "Tras la serie de abogados, el actor consiguió otro papel fijo en la exitosa Anatomía de Grey, pero renunció a él por hacer lo que considera su vocación: el teatro.",
        "audio": "./assets/audios/vocab_story_3_1.mp3"
      },
      {
        "word": "richard",
        "pos": "voc.",
        "cn": "理查德",
        "en": "Richard",
        "example": "Así es, a sus casi 70 años, Greg Germann, Richard Fish en 'Ally McBeal'",
        "audio": "./assets/audios/vocab_story_3_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「germann」在文中的表达",
      "detail": "「germann」在本文语境下表示“德语”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「germann」在文中的中文含义是？",
      "options": [
        "A. 德语",
        "B. 另一个意思",
        "C. 错误的翻译"
      ],
      "correct_index": 0,
      "explanation": "「germann」在此处意为：德语。"
    },
    "audio_full_normal": "./assets/audios/story_3_normal.mp3",
    "audio_full_slow": "./assets/audios/story_3_slow.mp3"
  },
  {
    "id": "story_4",
    "tag": "体育 / 赛事",
    "date": "2026-11-08",
    "title": {
      "es": "Fernando Alonso vuela bajo la lluvia en Brasil y Lando Norris se lleva la pole",
      "en": "Fernando Alonso flies in the rain in Brazil and Lando Norris takes pole",
      "cn": "04. 费尔南多·阿隆索在巴西雨中飞翔，兰多·诺里斯夺得杆位"
    },
    "intro": "这位西班牙车手在巴西大奖赛上取得了年度最佳成绩后，将从第八位发车。",
    "sentences": [
      {
        "id": 1,
        "es": "El piloto español partirá desde la octava posición tras su mejor clasificación del año en el Gran Premio de Brasil, que las precipitaciones obligaron a atrasar hora y media.",
        "en": "The Spanish driver will start from eighth position after his best classification of the year in the Brazilian Grand Prix, which was forced to be delayed an hour and a half due to rainfall.",
        "cn": "这位西班牙车手在巴西大奖赛上取得了今年最好的成绩后，将从第八位出发，巴西大奖赛因降雨而被迫推迟一个半小时。",
        "audio": "./assets/audios/story_4_s1.mp3"
      },
      {
        "id": 2,
        "es": "Fernando Alonso vuela bajo la lluvia en Brasil y Lando Norris se lleva la pole",
        "en": "Fernando Alonso flies in the rain in Brazil and Lando Norris takes pole",
        "cn": "费尔南多·阿隆索在巴西雨中飞翔，兰多·诺里斯夺得杆位",
        "audio": "./assets/audios/story_4_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "fernando",
        "pos": "voc.",
        "cn": "费尔南多",
        "en": "Fernando",
        "example": "El piloto español partirá desde la octava posición tras su mejor clasificación del año en el Gran Premio de Brasil, que las precipitaciones obligaron a atrasar hora y media.",
        "audio": "./assets/audios/vocab_story_4_1.mp3"
      },
      {
        "word": "alonso",
        "pos": "voc.",
        "cn": "阿隆索",
        "en": "alonso",
        "example": "Fernando Alonso vuela bajo la lluvia en Brasil y Lando Norris se lleva la pole",
        "audio": "./assets/audios/vocab_story_4_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「fernando」在文中的表达",
      "detail": "「fernando」在本文语境下表示“费尔南多”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「fernando」在文中的中文含义是？",
      "options": [
        "A. 费尔南多",
        "B. 另一个意思",
        "C. 错误的翻译"
      ],
      "correct_index": 0,
      "explanation": "「fernando」在此处意为：费尔南多。"
    },
    "audio_full_normal": "./assets/audios/story_4_normal.mp3",
    "audio_full_slow": "./assets/audios/story_4_slow.mp3"
  },
  {
    "id": "story_5",
    "tag": "体育 / 赛事",
    "date": "2026-11-08",
    "title": {
      "es": "El Real Madrid golea al Valencia y se lanza a por LaLiga: partido redondo para los de Mourinho",
      "en": "Real Madrid thrashes Valencia and goes for LaLiga: round match for Mourinho's team",
      "cn": "05. 皇马击败瓦伦西亚晋级西甲：穆里尼奥球队的第二轮比赛"
    },
    "intro": "梅伦格俱乐部在瓦伦西亚转会之前最后一次造访梅斯塔利亚，取得了第八场胜利",
    "sentences": [
      {
        "id": 1,
        "es": "El club merengue, en la que debería ser su última visita a Mestalla antes de la mudanza del Valencia, logró su octava victoria consecutiva con holgura.",
        "en": "The merengue club, in what should be its last visit to Mestalla before Valencia's move, easily achieved its eighth consecutive victory.",
        "cn": "这应该是瓦伦西亚转会之前最后一次造访梅斯塔利亚，轻松取得八连胜。",
        "audio": "./assets/audios/story_5_s1.mp3"
      },
      {
        "id": 2,
        "es": "El Real Madrid golea al Valencia y se lanza a por LaLiga: partido redondo para los de Mourinho",
        "en": "Real Madrid thrashes Valencia and goes for LaLiga: round match for Mourinho's team",
        "cn": "皇马击败瓦伦西亚晋级西甲：穆里尼奥球队的第二轮比赛",
        "audio": "./assets/audios/story_5_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "madrid",
        "pos": "voc.",
        "cn": "马德里",
        "en": "Madrid",
        "example": "El club merengue, en la que debería ser su última visita a Mestalla antes de la mudanza del Valencia, logró su octava victoria consecutiva con holgura.",
        "audio": "./assets/audios/vocab_story_5_1.mp3"
      },
      {
        "word": "golea",
        "pos": "voc.",
        "cn": "戈莱亚",
        "en": "golea",
        "example": "El Real Madrid golea al Valencia y se lanza a por LaLiga: partido redondo para los de Mourinho",
        "audio": "./assets/audios/vocab_story_5_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「madrid」在文中的表达",
      "detail": "「madrid」在本文语境下表示“马德里”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「madrid」在文中的中文含义是？",
      "options": [
        "A. 马德里",
        "B. 另一个意思",
        "C. 错误的翻译"
      ],
      "correct_index": 0,
      "explanation": "「madrid」在此处意为：马德里。"
    },
    "audio_full_normal": "./assets/audios/story_5_normal.mp3",
    "audio_full_slow": "./assets/audios/story_5_slow.mp3"
  },
  {
    "id": "story_6",
    "tag": "体育 / 赛事",
    "date": "2026-11-08",
    "title": {
      "es": "Márquez gana el sprint de Qatar tras derribar a Bezzecchi y Martín firma una gran remontada",
      "en": "Márquez wins the Qatar sprint after knocking down Bezzecchi and Martín makes a great comeback",
      "cn": "06. 马克斯在击倒贝泽基后赢得卡塔尔冲刺赛冠军，马丁强势复出"
    },
    "intro": "在周日的长距离比赛中，杜卡迪车手将有机会夺得世界冠军。",
    "sentences": [
      {
        "id": 1,
        "es": "En la carrera larga del domingo, el piloto de Ducati tendrá la oportunidad de asegurar el título mundial.",
        "en": "In Sunday's long race, the Ducati rider will have the opportunity to secure the world title.",
        "cn": "在周日的长距离比赛中，杜卡迪车手将有机会夺得世界冠军。",
        "audio": "./assets/audios/story_6_s1.mp3"
      },
      {
        "id": 2,
        "es": "Márquez gana el sprint de Qatar tras derribar a Bezzecchi y Martín firma una gran remontada",
        "en": "Márquez wins the Qatar sprint after knocking down Bezzecchi and Martín makes a great comeback",
        "cn": "马克斯在击倒贝泽基后赢得卡塔尔冲刺赛冠军，马丁强势复出",
        "audio": "./assets/audios/story_6_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "márquez",
        "pos": "voc.",
        "cn": "马尔克斯",
        "en": "marquez",
        "example": "En la carrera larga del domingo, el piloto de Ducati tendrá la oportunidad de asegurar el título mundial.",
        "audio": "./assets/audios/vocab_story_6_1.mp3"
      },
      {
        "word": "sprint",
        "pos": "voc.",
        "cn": "短跑",
        "en": "sprint",
        "example": "Márquez gana el sprint de Qatar tras derribar a Bezzecchi y Martín firma una gran remontada",
        "audio": "./assets/audios/vocab_story_6_2.mp3"
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
        "C. 错误的翻译"
      ],
      "correct_index": 0,
      "explanation": "「márquez」在此处意为：马尔克斯。"
    },
    "audio_full_normal": "./assets/audios/story_6_normal.mp3",
    "audio_full_slow": "./assets/audios/story_6_slow.mp3"
  },
  {
    "id": "story_7",
    "tag": "文化 / 艺术",
    "date": "2026-11-08",
    "title": {
      "es": "La prodigiosa 'La ciudad de los prodigios', de Mendoza, cumple 40 años: \"He preferido no corregir errores, el libro tiene vida propia\"",
      "en": "The prodigious 'The City of Prodigies', by Mendoza, turns 40: \"I have preferred not to correct errors, the book has a life of its own\"",
      "cn": "07. 门多萨的伟大著作《神童之城》40 岁了：“我宁愿不去纠正错误，这本书有自己的生命”"
    },
    "intro": "这本书是 20 世纪最好的当代文学的旗舰，描绘了它诞生的巴塞罗那市。",
    "sentences": [
      {
        "id": 1,
        "es": "Este título, bandera de la mejor literatura contemporánea escrita en el siglo XX, retrata la ciudad condal que vio nacer al escritor entre las Exposiciones de 1888 y 1929.",
        "en": "This title, flagship of the best contemporary literature written in the 20th century, portrays the city of Barcelona where the writer was born between the Exhibitions of 1888 and 1929.",
        "cn": "这本书是 20 世纪最佳当代文学的旗舰作品，描绘了这位作家在 1888 年至 1929 年展览期间出生的巴塞罗那市。",
        "audio": "./assets/audios/story_7_s1.mp3"
      },
      {
        "id": 2,
        "es": "La prodigiosa 'La ciudad de los prodigios', de Mendoza, cumple 40 años: \"He preferido no corregir errores, el libro tiene vida propia\"",
        "en": "The prodigious 'The City of Prodigies', by Mendoza, turns 40: \"I have preferred not to correct errors, the book has a life of its own\"",
        "cn": "门多萨的伟大著作《神童之城》40 岁了：“我宁愿不去纠正错误，这本书有自己的生命”",
        "audio": "./assets/audios/story_7_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "prodigiosa",
        "pos": "voc.",
        "cn": "惊人",
        "en": "prodigious",
        "example": "Este título, bandera de la mejor literatura contemporánea escrita en el siglo XX, retrata la ciudad condal que vio nacer al escritor entre las Exposiciones de 1888 y 1929.",
        "audio": "./assets/audios/vocab_story_7_1.mp3"
      },
      {
        "word": "ciudad",
        "pos": "voc.",
        "cn": "城市",
        "en": "city",
        "example": "La prodigiosa 'La ciudad de los prodigios', de Mendoza, cumple 40 años: \"He preferido no corregir errores, el libro tiene vida propia\"",
        "audio": "./assets/audios/vocab_story_7_2.mp3"
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
        "C. 错误的翻译"
      ],
      "correct_index": 0,
      "explanation": "「prodigiosa」在此处意为：惊人。"
    },
    "audio_full_normal": "./assets/audios/story_7_normal.mp3",
    "audio_full_slow": "./assets/audios/story_7_slow.mp3"
  },
  {
    "id": "story_8",
    "tag": "文化 / 艺术",
    "date": "2026-11-08",
    "title": {
      "es": "'Grosso modo', 'motu proprio', 'statu quo', latinismos que se escriben como se oyen",
      "en": "'Grosso moda', 'motu proprio', 'status quo', Latinisms that are written as they are heard",
      "cn": "08. “Grosso moda”、“motu proprio”、“status quo”，拉丁语的书写形式与听到的一样"
    },
    "intro": "拉丁语有时保留的形式与我们耳朵的期望相冲突，并鼓励我们最终修改它们。",
    "sentences": [
      {
        "id": 1,
        "es": "Los latinismos conservan a veces formas que chocan con lo que nuestro oído espera y eso favorece que acabemos modificándolos.",
        "en": "Latinisms sometimes retain forms that clash with what our ears expect and that encourages us to end up modifying them.",
        "cn": "拉丁语有时保留的形式与我们耳朵的期望相冲突，并鼓励我们最终修改它们。",
        "audio": "./assets/audios/story_8_s1.mp3"
      },
      {
        "id": 2,
        "es": "Uno de los ejemplos más habituales es grosso modo.",
        "en": "One of the most common examples is grosso moda.",
        "cn": "Uno de los ejemplos más habituales es grosso modo.",
        "audio": "./assets/audios/story_8_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "grosso",
        "pos": "voc.",
        "cn": "格罗索",
        "en": "grosso",
        "example": "Los latinismos conservan a veces formas que chocan con lo que nuestro oído espera y eso favorece que acabemos modificándolos.",
        "audio": "./assets/audios/vocab_story_8_1.mp3"
      },
      {
        "word": "proprio",
        "pos": "voc.",
        "cn": "自己的",
        "en": "own",
        "example": "Uno de los ejemplos más habituales es grosso modo.",
        "audio": "./assets/audios/vocab_story_8_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「grosso」在文中的表达",
      "detail": "「grosso」在本文语境下表示“格罗索”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「grosso」在文中的中文含义是？",
      "options": [
        "A. 格罗索",
        "B. 另一个意思",
        "C. 错误的翻译"
      ],
      "correct_index": 0,
      "explanation": "「grosso」在此处意为：格罗索。"
    },
    "audio_full_normal": "./assets/audios/story_8_normal.mp3",
    "audio_full_slow": "./assets/audios/story_8_slow.mp3"
  },
  {
    "id": "story_9",
    "tag": "生活 / 资讯",
    "date": "2026-11-08",
    "title": {
      "es": "La 'start-up' que detectó los llamamientos en el asalto a Ceuta alerta de injerencia extranjera en las elecciones del 29N",
      "en": "The 'start-up' that detected the calls in the assault on Ceuta warns of foreign interference in the 29N elections",
      "cn": "09. 检测到休达袭击事件中电话的“初创公司”警告外国干涉 29N 选举"
    },
    "intro": "金猫头鹰检测到有利于克里姆林宫的信息传播，以影响西班牙舆论。",
    "sentences": [
      {
        "id": 1,
        "es": "Golden Owl detecta la difusión de información favorable al Kremlin para influir en la opinión pública española.",
        "en": "Golden Owl detects the dissemination of information favorable to the Kremlin to influence Spanish public opinion.",
        "cn": "金猫头鹰检测到有利于克里姆林宫的信息传播，以影响西班牙舆论。",
        "audio": "./assets/audios/story_9_s1.mp3"
      },
      {
        "id": 2,
        "es": "La 'start-up' que detectó los llamamientos en el asalto a Ceuta alerta de injerencia extranjera en las elecciones del 29N",
        "en": "The 'start-up' that detected the calls in the assault on Ceuta warns of foreign interference in the 29N elections",
        "cn": "检测到休达袭击事件中电话的“初创公司”警告外国干涉 29N 选举",
        "audio": "./assets/audios/story_9_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "start",
        "pos": "voc.",
        "cn": "开始",
        "en": "start",
        "example": "Golden Owl detecta la difusión de información favorable al Kremlin para influir en la opinión pública española.",
        "audio": "./assets/audios/vocab_story_9_1.mp3"
      },
      {
        "word": "detectó",
        "pos": "voc.",
        "cn": "检测到",
        "en": "detected",
        "example": "La 'start-up' que detectó los llamamientos en el asalto a Ceuta alerta de injerencia extranjera en las elecciones del 29N",
        "audio": "./assets/audios/vocab_story_9_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「start」在文中的表达",
      "detail": "「start」在本文语境下表示“开始”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「start」在文中的中文含义是？",
      "options": [
        "A. 开始",
        "B. 另一个意思",
        "C. 错误的翻译"
      ],
      "correct_index": 0,
      "explanation": "「start」在此处意为：开始。"
    },
    "audio_full_normal": "./assets/audios/story_9_normal.mp3",
    "audio_full_slow": "./assets/audios/story_9_slow.mp3"
  },
  {
    "id": "story_10",
    "tag": "生活 / 资讯",
    "date": "2026-11-08",
    "title": {
      "es": "Un profesor buscado por la Audiencia Nacional recluta españoles como soldados y espías para Rusia",
      "en": "A professor wanted by the National Court recruits Spaniards as soldiers and spies for Russia",
      "cn": "10. 一名被国家法院通缉的教授招募西班牙人作为俄罗斯的士兵和间谍"
    },
    "intro": "38 岁的恩里克·阿里亚斯·吉尔 (Enrique Arias Gil) 在俄罗斯运营着一个西班牙语频道网络，传播“克里姆林宫的故事”。",
    "sentences": [
      {
        "id": 1,
        "es": "Enrique Arias Gil, de 38 años, opera desde Rusia un entramado de canales en español para llevar \"el relato del Kremlin sobre las crisis de España tanto a la extrema derecha como a la extrema izquierda españolas\".",
        "en": "Enrique Arias Gil, 38, operates a network of Spanish-language channels from Russia to bring \"the Kremlin's story about Spain's crises to both the Spanish extreme right and the extreme left.\"",
        "cn": "38 岁的恩里克·阿里亚斯·吉尔 (Enrique Arias Gil) 经营着一个来自俄罗斯的西班牙语频道网络，旨在“向西班牙极右翼和极左翼传达克里姆林宫关于西班牙危机的故事”。",
        "audio": "./assets/audios/story_10_s1.mp3"
      },
      {
        "id": 2,
        "es": "Un profesor buscado por la Audiencia Nacional recluta españoles como soldados y espías para Rusia",
        "en": "A professor wanted by the National Court recruits Spaniards as soldiers and spies for Russia",
        "cn": "一名被国家法院通缉的教授招募西班牙人作为俄罗斯的士兵和间谍",
        "audio": "./assets/audios/story_10_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "profesor",
        "pos": "voc.",
        "cn": "老师",
        "en": "teacher",
        "example": "Enrique Arias Gil, de 38 años, opera desde Rusia un entramado de canales en español para llevar \"el relato del Kremlin sobre las crisis de España tanto a la extrema derecha como a la extrema izquierda españolas\".",
        "audio": "./assets/audios/vocab_story_10_1.mp3"
      },
      {
        "word": "buscado",
        "pos": "voc.",
        "cn": "寻求",
        "en": "sought",
        "example": "Un profesor buscado por la Audiencia Nacional recluta españoles como soldados y espías para Rusia",
        "audio": "./assets/audios/vocab_story_10_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「profesor」在文中的表达",
      "detail": "「profesor」在本文语境下表示“老师”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「profesor」在文中的中文含义是？",
      "options": [
        "A. 老师",
        "B. 另一个意思",
        "C. 错误的翻译"
      ],
      "correct_index": 0,
      "explanation": "「profesor」在此处意为：老师。"
    },
    "audio_full_normal": "./assets/audios/story_10_normal.mp3",
    "audio_full_slow": "./assets/audios/story_10_slow.mp3"
  }
];

module.exports = {
  DAILY_STORIES
};
