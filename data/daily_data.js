// 每日 10 篇西语早报数据包
const DAILY_STORIES = [
  {
    "tag": "体育 / 荣耀",
    "title": {
      "es": "¡Carlos Alcaraz deslumbra al mundo con otra victoria épica!",
      "en": "Carlos Alcaraz dazzles the world with another epic victory!",
      "cn": "01. 卡洛斯·阿尔卡拉斯再夺历史性新桂冠，全网狂欢！"
    },
    "intro": "西班牙年轻网球巨星再次以超凡表现征服赛场，成为全球年轻一代的励志榜样。",
    "sentences": [
      {
        "id": 1,
        "es": "El tenista español Carlos Alcaraz ha conseguido un triunfo inolvidable tras un partido emocionante.",
        "en": "Spanish tennis player Carlos Alcaraz achieved an unforgettable triumph after a thrilling match.",
        "cn": "西班牙网球选手卡洛斯·阿尔卡拉斯在一场激动人心的比赛后赢得了令人难忘的胜利。",
        "audio": "./assets/audios/story_1_s1.mp3"
      },
      {
        "id": 2,
        "es": "Miles de aficionados celebraron su energía y pasión en las calles de su ciudad natal.",
        "en": "Thousands of fans celebrated his energy and passion in the streets of his hometown.",
        "cn": "数以千计的球迷在他家乡的街头庆祝他的活力与激情。",
        "audio": "./assets/audios/story_1_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "triunfo",
        "pos": "n.m.",
        "cn": "胜利，成功",
        "en": "triumph, victory",
        "example": "El equipo celebró un gran triunfo.",
        "audio": "./assets/audios/vocab_story_1_1.mp3"
      },
      {
        "word": "emocionante",
        "pos": "adj.",
        "cn": "激动人心的，扣人心弦的",
        "en": "exciting, thrilling",
        "example": "Fue una película muy emocionante.",
        "audio": "./assets/audios/vocab_story_1_2.mp3"
      }
    ],
    "grammar": {
      "point": "现在完成时用法（Pretérito Perfecto）",
      "detail": "ha conseguido 用于表示刚刚发生且与现在紧密相关的成就动作。"
    },
    "quiz": {
      "question": "单词「triunfo」的含义是？",
      "options": [
        "A. 胜利",
        "B. 失败",
        "C. 放弃"
      ],
      "correct_index": 0,
      "explanation": "triunfo 表示胜利、成就。"
    },
    "id": "story_1",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_1_normal.mp3",
    "audio_full_slow": "./assets/audios/story_1_slow.mp3"
  },
  {
    "tag": "文化 / 建筑",
    "title": {
      "es": "La Sagrada Família de Barcelona culmina su torre más alta",
      "en": "Barcelona's Sagrada Família completes its tallest tower",
      "cn": "02. 巴塞罗那圣家堂最高主塔封顶，百年工程迎历史时刻！"
    },
    "intro": "高迪设计的世界级不朽建筑迎来重要里程碑，巨型十字架在巴塞罗那晨曦中闪烁光芒。",
    "sentences": [
      {
        "id": 1,
        "es": "La emblemática basílica de la Sagrada Família ha colocado hoy la cruz en su torre central.",
        "en": "The iconic basilica of the Sagrada Família placed the cross on its central tower today.",
        "cn": "标志性的圣家堂大教堂今天在其中心主塔上安装了十字架。",
        "audio": "./assets/audios/story_2_s1.mp3"
      },
      {
        "id": 2,
        "es": "Turistas de todos los rincones del planeta contemplaron maravillados este momento único.",
        "en": "Tourists from all corners of the globe gazed in wonder at this unique moment.",
        "cn": "来自全球各地的游客无不惊叹地凝视着这一独特时刻。",
        "audio": "./assets/audios/story_2_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "emblemático",
        "pos": "adj.",
        "cn": "标志性的，象征性的",
        "en": "iconic, emblematic",
        "example": "Es un monumento emblemático de Madrid.",
        "audio": "./assets/audios/vocab_story_2_1.mp3"
      },
      {
        "word": "contemplar",
        "pos": "v.",
        "cn": "凝视，观赏",
        "en": "to contemplate, to gaze at",
        "example": "Me gusta contemplar el atardecer.",
        "audio": "./assets/audios/vocab_story_2_2.mp3"
      }
    ],
    "grammar": {
      "point": "简单过去时（Pretérito Indefinido）",
      "detail": "contemplaron 是 contemplar 的第三人称复数简单过去时，表示在过去的确定动作。"
    },
    "quiz": {
      "question": "动词「contemplar」的中文意思是？",
      "options": [
        "A. 凝视、观赏",
        "B. 奔跑",
        "C. 建筑"
      ],
      "correct_index": 0,
      "explanation": "contemplar 意为静静注视或观赏。"
    },
    "id": "story_2",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_2_normal.mp3",
    "audio_full_slow": "./assets/audios/story_2_slow.mp3"
  },
  {
    "tag": "体育 / 榜样",
    "title": {
      "es": "Aitana Bonmatí conquista el Balón de Oro y hace historia",
      "en": "Aitana Bonmatí wins the Ballon d'Or and makes history",
      "cn": "03. 西班牙女足金球奖得主邦马蒂蝉联世界最佳，全场起立致敬！"
    },
    "intro": "巴萨女足核心再获金球奖，她在颁奖典礼上的加泰罗尼亚语和西语致辞温暖感动全场。",
    "sentences": [
      {
        "id": 1,
        "es": "La futbolista española Aitana Bonmatí ha sido galardonada nuevamente con el prestigioso Balón de Oro.",
        "en": "Spanish footballer Aitana Bonmatí has been awarded the prestigious Ballon d'Or once again.",
        "cn": "西班牙足球运动员艾塔娜·邦马蒂再次荣膺负有盛名的金球奖。",
        "audio": "./assets/audios/story_3_s1.mp3"
      },
      {
        "id": 2,
        "es": "En su discurso, agradeció el apoyo incondicional de sus compañeras de equipo y su familia.",
        "en": "In her speech, she thanked her teammates and family for their unconditional support.",
        "cn": "在致辞中，她衷心感谢了队友与家人的无私支持。",
        "audio": "./assets/audios/story_3_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "galardonar",
        "pos": "v.",
        "cn": "授予奖项，表彰",
        "en": "to award, to bestow a prize",
        "example": "La escritora fue galardonada por su novela.",
        "audio": "./assets/audios/vocab_story_3_1.mp3"
      },
      {
        "word": "incondicional",
        "pos": "adj.",
        "cn": "无条件的，坚定的",
        "en": "unconditional",
        "example": "El amor incondicional de una madre.",
        "audio": "./assets/audios/vocab_story_3_2.mp3"
      }
    ],
    "grammar": {
      "point": "被动语态用法（Voz Pasiva）",
      "detail": "ha sido galardonada 为现在完成时被动结构，主语是女性单数，过去分词配合用 -a 结尾。"
    },
    "quiz": {
      "question": "形容词「incondicional」表示？",
      "options": [
        "A. 无条件的",
        "B. 有限的",
        "C. 严格的"
      ],
      "correct_index": 0,
      "explanation": "incondicional 由 in- + condicional 构成，表示无条件的。"
    },
    "id": "story_3",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_3_normal.mp3",
    "audio_full_slow": "./assets/audios/story_3_slow.mp3"
  },
  {
    "tag": "影视 / 娱乐",
    "title": {
      "es": "La nueva temporada de Berlín paraliza el centro de París",
      "en": "The new season of Berlin paralyzes central Paris",
      "cn": "04. 《纸钞屋》衍生新剧巴黎街头取景，粉丝通宵围堵！"
    },
    "intro": "奈飞王牌西语剧集《柏林》第二季在塞纳河畔火热拍摄，主演佩德罗·阿隆索与粉丝亲切自拍。",
    "sentences": [
      {
        "id": 1,
        "es": "El rodaje de la popular serie española ha congregado a cientos de admiradores junto al río Sena.",
        "en": "The filming of the popular Spanish series gathered hundreds of fans along the River Seine.",
        "cn": "这部备受欢迎的西班牙剧集的拍摄工作在塞纳河畔吸引了数百名粉丝聚集。",
        "audio": "./assets/audios/story_4_s1.mp3"
      },
      {
        "id": 2,
        "es": "Los actores compartieron sonrisas y autógrafos con los jóvenes congregados desde primera hora.",
        "en": "The actors shared smiles and autographs with the youngsters gathered from early morning.",
        "cn": "演员们与一早就赶来的年轻人们微笑着签名合影互动。",
        "audio": "./assets/audios/story_4_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "rodaje",
        "pos": "n.m.",
        "cn": "拍电影，摄制",
        "en": "filming, shooting",
        "example": "El rodaje de la película durará tres meses.",
        "audio": "./assets/audios/vocab_story_4_1.mp3"
      },
      {
        "word": "congregar",
        "pos": "v.",
        "cn": "聚集，召集",
        "en": "to gather, to assemble",
        "example": "El concierto congregó a miles de personas.",
        "audio": "./assets/audios/vocab_story_4_2.mp3"
      }
    ],
    "grammar": {
      "point": "固定介词搭配（desde primera hora）",
      "detail": "desde primera hora 是一句常用地道西语习惯表达，意为“从一大早开始”。"
    },
    "quiz": {
      "question": "单词「rodaje」是指？",
      "options": [
        "A. 电影/剧集拍摄",
        "B. 汽车驾驶",
        "C. 剧本创作"
      ],
      "correct_index": 0,
      "explanation": "el rodaje 专门指影视作品的拍摄现场或录制过程。"
    },
    "id": "story_4",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_4_normal.mp3",
    "audio_full_slow": "./assets/audios/story_4_slow.mp3"
  },
  {
    "tag": "音乐 / 盛典",
    "title": {
      "es": "Los Latin Grammy celebran una noche inolvidable en Sevilla",
      "en": "The Latin Grammys celebrate an unforgettable night in Seville",
      "cn": "05. 拉丁格莱美奖在塞维利亚盛大开幕，全球西语乐坛星光璀璨！"
    },
    "intro": "拉丁音乐界最大盛事跨越大西洋来到安达卢西亚，弗拉门戈韵味与流行风暴完美碰撞。",
    "sentences": [
      {
        "id": 1,
        "es": "La música en español ha brillado con fuerza durante la gran gala anual en el Palacio de Congresos.",
        "en": "Spanish-language music shone brightly during the annual gala at the Congress Palace.",
        "cn": "在会议宫举行的年度盛典上，西班牙语音乐绽放出了夺目光芒。",
        "audio": "./assets/audios/story_5_s1.mp3"
      },
      {
        "id": 2,
        "es": "Grandes estrellas internacionales rindieron tributo a los ritmos tradicionales del sur de España.",
        "en": "Great international stars paid tribute to the traditional rhythms of southern Spain.",
        "cn": "多位国际巨星向西班牙南部的传统节奏致以崇高敬意。",
        "audio": "./assets/audios/story_5_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "brillar",
        "pos": "v.",
        "cn": "发光，闪耀，出彩",
        "en": "to shine, to glow",
        "example": "Las estrellas brillan en el cielo nocturno.",
        "audio": "./assets/audios/vocab_story_5_1.mp3"
      },
      {
        "word": "tributo",
        "pos": "n.m.",
        "cn": "致敬，贡品",
        "en": "tribute, homage",
        "example": "Rendir tributo a un gran maestro.",
        "audio": "./assets/audios/vocab_story_5_2.mp3"
      }
    ],
    "grammar": {
      "point": "常用短语动词 rendir tributo a",
      "detail": "rendir tributo a ... 意为“向……致敬”，后接人或事物。"
    },
    "quiz": {
      "question": "短语「rendir tributo」的含义是？",
      "options": [
        "A. 致敬",
        "B. 缴纳罚款",
        "C. 告别"
      ],
      "correct_index": 0,
      "explanation": "rendir tributo a 表示向某人或传统表达崇敬与致敬。"
    },
    "id": "story_5",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_5_normal.mp3",
    "audio_full_slow": "./assets/audios/story_5_slow.mp3"
  },
  {
    "tag": "美食 / 传统",
    "title": {
      "es": "El corte del jamón ibérico: un arte centenario que conquista el paladar",
      "en": "The carving of Iberian ham: a century-old art that conquers the palate",
      "cn": "06. 西班牙伊比利亚火腿节出炉：顶级切肉大师一刀价值千金！"
    },
    "intro": "薄如蝉翼的火腿片在舌尖轻柔融化，纯橡果喂养的醇厚坚果香气让人欲罢不能。",
    "sentences": [
      {
        "id": 1,
        "es": "Los maestros cortadores de jamón demuestran que cada loncha fina es el resultado de años de práctica.",
        "en": "Master ham carvers demonstrate that each thin slice is the result of years of practice.",
        "cn": "火腿切肉大师们展示了每一片晶莹薄片都是多年苦练的成果。",
        "audio": "./assets/audios/story_6_s1.mp3"
      },
      {
        "id": 2,
        "es": "Este tesoro gastronómico español es apreciado en las mejores mesas de todo el mundo.",
        "en": "This Spanish gastronomic treasure is appreciated on the finest tables across the world.",
        "cn": "这一西班牙美食国宝在全球最顶级的餐桌上广受赞誉。",
        "audio": "./assets/audios/story_6_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "loncha",
        "pos": "n.f.",
        "cn": "薄片（火腿、奶酪等）",
        "en": "slice, thin rasher",
        "example": "Córtame una loncha fina de jamón, por favor.",
        "audio": "./assets/audios/vocab_story_6_1.mp3"
      },
      {
        "word": "gastronómico",
        "pos": "adj.",
        "cn": "美食的，烹饪的",
        "en": "gastronomic, culinary",
        "example": "Es una ruta gastronómica muy famosa.",
        "audio": "./assets/audios/vocab_story_6_2.mp3"
      }
    ],
    "grammar": {
      "point": "名词阴阳性搭配（loncha fina）",
      "detail": "loncha 为阴性名词，修饰的形容词 fino 变为 fina。"
    },
    "quiz": {
      "question": "切火腿时说的「loncha」是指？",
      "options": [
        "A. 薄片",
        "B. 大块肉",
        "C. 刀具"
      ],
      "correct_index": 0,
      "explanation": "una loncha de jamón 专门指切好的火腿薄片。"
    },
    "id": "story_6",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_6_normal.mp3",
    "audio_full_slow": "./assets/audios/story_6_slow.mp3"
  },
  {
    "tag": "文化 / 生活",
    "title": {
      "es": "La Noche de los Libros llena las calles de Madrid de magia y velas",
      "en": "The Night of Books fills Madrid streets with magic and candlelight",
      "cn": "07. 马德里“图书之夜”：数百家书店通宵亮灯，烛光夜读浪漫非凡！"
    },
    "intro": "首都马德里化身为巨大露天书房，作家讲座与街头吉他演奏交相辉映。",
    "sentences": [
      {
        "id": 1,
        "es": "Cientos de librerías han permanecido abiertas hasta medianoche para celebrar el placer de la lectura.",
        "en": "Hundreds of bookstores remained open until midnight to celebrate the joy of reading.",
        "cn": "数百家独立书店通宵营业直至深夜，共同庆祝阅读的纯粹乐趣。",
        "audio": "./assets/audios/story_7_s1.mp3"
      },
      {
        "id": 2,
        "es": "Familias y jóvenes disfrutaron de conciertos acústicos y firmas de autores bajo la luz de las velas.",
        "en": "Families and youngsters enjoyed acoustic concerts and author signings under candlelight.",
        "cn": "家庭与年轻人一同在温馨烛光下享受原声音乐会与作家签售。",
        "audio": "./assets/audios/story_7_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "permanecer",
        "pos": "v.",
        "cn": "保持，停留，持续",
        "en": "to remain, to stay",
        "example": "La tienda permaneció abierta todo el día.",
        "audio": "./assets/audios/vocab_story_7_1.mp3"
      },
      {
        "word": "placer",
        "pos": "n.m.",
        "cn": "乐趣，快感",
        "en": "pleasure, joy",
        "example": "Es un gran placer conocerte.",
        "audio": "./assets/audios/vocab_story_7_2.mp3"
      }
    ],
    "grammar": {
      "point": "动词短语 disfrutar de",
      "detail": "disfrutar 习惯后接介词 de，意为“享受、品味某事”。"
    },
    "quiz": {
      "question": "短语「es un placer」通常用来表示？",
      "options": [
        "A. 这是我的荣幸/乐趣",
        "B. 对不起",
        "C. 没时间"
      ],
      "correct_index": 0,
      "explanation": "es un placer 意为“很荣幸、这是我的乐事”。"
    },
    "id": "story_7",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_7_normal.mp3",
    "audio_full_slow": "./assets/audios/story_7_slow.mp3"
  },
  {
    "tag": "旅行 / 趋势",
    "title": {
      "es": "Ibiza redescubre la calma: la isla apuesta por la naturaleza y el bienestar",
      "en": "Ibiza rediscovers calm: the island opts for nature and wellness",
      "cn": "08. 西班牙度假胜地伊比萨推行“慢旅行”，告别喧闹重回宁静自然！"
    },
    "intro": "除了著名的狂欢夜店，伊比萨碧蓝的海湾、松林徒步与日落瑜伽正在吸引全球慢生活爱好者。",
    "sentences": [
      {
        "id": 1,
        "es": "La famosa isla balear está atrayendo a viajeros que buscan desconectar del estrés cotidiano.",
        "en": "The famous Balearic island is attracting travelers looking to disconnect from daily stress.",
        "cn": "这座著名的巴利阿里群岛岛屿正吸引着渴望远离日常压力的旅行者。",
        "audio": "./assets/audios/story_8_s1.mp3"
      },
      {
        "id": 2,
        "es": "Caminar junto al mar turquesa al atardecer se ha convertido en la actividad favorita de muchos visitantes.",
        "en": "Walking beside the turquoise sea at sunset has become the favorite activity of many visitors.",
        "cn": "黄昏时分漫步在碧绿清澈的海边已成为许多游客最喜爱的放松方式。",
        "audio": "./assets/audios/story_8_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "desconectar",
        "pos": "v.",
        "cn": "放松，脱离日常纷扰",
        "en": "to disconnect, to unwind",
        "example": "El fin de semana desconecto del trabajo.",
        "audio": "./assets/audios/vocab_story_8_1.mp3"
      },
      {
        "word": "atardecer",
        "pos": "n.m.",
        "cn": "黄昏，日落时分",
        "en": "sunset, dusk",
        "example": "Vimos un hermoso atardecer en la playa.",
        "audio": "./assets/audios/vocab_story_8_2.mp3"
      }
    ],
    "grammar": {
      "point": "动名词作主语（Caminar junto al mar...）",
      "detail": "动词原形 caminar 可直接充当主语，相当于名词“散步这件事”。"
    },
    "quiz": {
      "question": "单词「atardecer」是指一天的哪个时刻？",
      "options": [
        "A. 黄昏日落",
        "B. 清晨日出",
        "C. 正午时分"
      ],
      "correct_index": 0,
      "explanation": "el atardecer 指下午向夜晚过渡的日落黄昏时刻。"
    },
    "id": "story_8",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_8_normal.mp3",
    "audio_full_slow": "./assets/audios/story_8_slow.mp3"
  },
  {
    "tag": "八卦 / 情感",
    "title": {
      "es": "Messi y Antonela celebran su amor frente a las olas de Miami",
      "en": "Messi and Antonela celebrate their love before the waves of Miami",
      "cn": "09. 梅西与安东内拉海滩庆祝纪念日，甜蜜依偎全网刷屏！"
    },
    "intro": "足坛球王与青梅竹马的妻子在碧海蓝天下分享甜蜜度假照，获数千万点赞祝福。",
    "sentences": [
      {
        "id": 1,
        "es": "Lionel Messi y su esposa Antonela Roccuzzo han publicado una tierna fotografía durante su descanso en Florida.",
        "en": "Lionel Messi and his wife Antonela Roccuzzo posted a tender photograph during their break in Florida.",
        "cn": "莱昂内尔·梅西与妻子安东内拉在佛罗里达休假期间发布了一张温馨甜蜜的合照。",
        "audio": "./assets/audios/story_9_s1.mp3"
      },
      {
        "id": 2,
        "es": "La pareja, que lleva junta desde la adolescencia, recibió millones de mensajes cariñosos de admiradores.",
        "en": "The couple, who have been together since adolescence, received millions of affectionate messages from fans.",
        "cn": "这对从青葱少年时期就在一起的模范夫妻收到了全球粉丝数以百万计的深情祝福。",
        "audio": "./assets/audios/story_9_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "tierno",
        "pos": "adj.",
        "cn": "温柔的，甜蜜温情的",
        "en": "tender, sweet",
        "example": "Es un momento muy tierno entre los dos.",
        "audio": "./assets/audios/vocab_story_9_1.mp3"
      },
      {
        "word": "cariñoso",
        "pos": "adj.",
        "cn": "充满爱意的，亲切的",
        "en": "affectionate, loving",
        "example": "Recibió un abrazo muy cariñoso.",
        "audio": "./assets/audios/vocab_story_9_2.mp3"
      }
    ],
    "grammar": {
      "point": "短语 llevar + 副词/时间 + desde",
      "detail": "lleva junta desde la adolescencia 表示“从青春期起就一直在一起”。"
    },
    "quiz": {
      "question": "形容词「tierno」的含义是？",
      "options": [
        "A. 温柔甜蜜的",
        "B. 苦涩的",
        "C. 愤怒的"
      ],
      "correct_index": 0,
      "explanation": "tierno 表示温柔、充满爱意的。"
    },
    "id": "story_9",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_9_normal.mp3",
    "audio_full_slow": "./assets/audios/story_9_slow.mp3"
  },
  {
    "tag": "科技 / 绿能",
    "title": {
      "es": "España bate el récord histórico de energía solar limpia en Europa",
      "en": "Spain breaks the historic record for clean solar energy in Europe",
      "cn": "10. 西班牙太阳能绿电创历史新高，清洁能源领跑欧洲！"
    },
    "intro": "得益于充沛的阳光与创新的风光电网，西班牙半数以上的电力已完全来自于清洁可再生能源。",
    "sentences": [
      {
        "id": 1,
        "es": "Más del sesenta por ciento de la electricidad consumida hoy en el país procede de fuentes renovables.",
        "en": "More than sixty percent of the electricity consumed in the country today comes from renewable sources.",
        "cn": "今天西班牙国内消耗的电力中，有超过百分之六十来自于可再生能源。",
        "audio": "./assets/audios/story_10_s1.mp3"
      },
      {
        "id": 2,
        "es": "Los expertos destacan que este avance sitúa a España como líder en la transición ecológica europea.",
        "en": "Experts highlight that this progress positions Spain as a leader in Europe's ecological transition.",
        "cn": "专家们指出，这一重大飞跃使西班牙成为欧洲生态转型中的领头羊。",
        "audio": "./assets/audios/story_10_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "renovable",
        "pos": "adj.",
        "cn": "可再生的",
        "en": "renewable",
        "example": "La energía solar es una fuente renovable.",
        "audio": "./assets/audios/vocab_story_10_1.mp3"
      },
      {
        "word": "destacar",
        "pos": "v.",
        "cn": "强调，指出，突出",
        "en": "to highlight, to emphasize",
        "example": "El informe destaca la importancia del proyecto.",
        "audio": "./assets/audios/vocab_story_10_2.mp3"
      }
    ],
    "grammar": {
      "point": "动词短语 proceder de",
      "detail": "proceder de 意为“来源于、出自”，与 venir de 类似但更加正式规范。"
    },
    "quiz": {
      "question": "单词「renovable」常用于哪个领域？",
      "options": [
        "A. 可再生能源",
        "B. 古典文学",
        "C. 烹饪烘焙"
      ],
      "correct_index": 0,
      "explanation": "energía renovable 意为可再生能源。"
    },
    "id": "story_10",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_10_normal.mp3",
    "audio_full_slow": "./assets/audios/story_10_slow.mp3"
  }
];

module.exports = {
  DAILY_STORIES
};
