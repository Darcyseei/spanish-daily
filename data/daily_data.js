// 每日 10 篇西语早报数据包
const DAILY_STORIES = [
  {
    "tag": "Música",
    "title": {
      "es": "Shakira anuncia nueva gira mundial",
      "en": "Shakira announces new world tour",
      "cn": "01. 夏奇拉宣布世界巡回演唱会"
    },
    "intro": "拉丁天后夏奇拉终于要开始世界巡演了，粉丝们都非常激动。",
    "sentences": [
      {
        "id": 1,
        "es": "Shakira ha confirmado que visitará muchos países en 2027.",
        "en": "Shakira has confirmed that she will visit many countries in 2027.",
        "cn": "夏奇拉确认她将在2027年访问许多国家。",
        "audio": "./assets/audios/story_1_s1.mp3"
      },
      {
        "id": 2,
        "es": "Sus fans están muy emocionados por comprar las entradas.",
        "en": "Her fans are very excited to buy the tickets.",
        "cn": "她的粉丝们非常兴奋地去买票。",
        "audio": "./assets/audios/story_1_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "gira",
        "pos": "n.f.",
        "cn": "巡回演出",
        "en": "tour",
        "example": "La cantante está de gira por América.",
        "audio": "./assets/audios/vocab_story_1_1.mp3"
      },
      {
        "word": "emocionado",
        "pos": "adj.",
        "cn": "激动的",
        "en": "excited",
        "example": "Estoy emocionado por el concierto.",
        "audio": "./assets/audios/vocab_story_1_2.mp3"
      }
    ],
    "grammar": {
      "point": "现在完成时 (Pretérito Perfecto)",
      "detail": "用于表达过去发生但与现在有联系的动作。"
    },
    "quiz": {
      "question": "¿Qué significa la palabra 'gira' en este contexto?",
      "options": [
        "A. Serie de conciertos",
        "B. Un viaje de negocios",
        "C. Un baile tradicional"
      ],
      "correct_index": 0,
      "explanation": "在音乐语境下，gira是指歌手巡回演出。"
    },
    "id": "story_1",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_1_normal.mp3",
    "audio_full_slow": "./assets/audios/story_1_slow.mp3"
  },
  {
    "tag": "Deportes",
    "title": {
      "es": "Carlos Alcaraz brilla en el tenis",
      "en": "Carlos Alcaraz shines in tennis",
      "cn": "02. 卡洛斯·阿尔卡拉斯在网球界大放异彩"
    },
    "intro": "年轻的西班牙网球天才阿尔卡拉斯再次赢得了比赛。",
    "sentences": [
      {
        "id": 1,
        "es": "Carlos Alcaraz juega al tenis de forma increíble.",
        "en": "Carlos Alcaraz plays tennis incredibly well.",
        "cn": "卡洛斯·阿尔卡拉斯打网球的方式令人难以置信。",
        "audio": "./assets/audios/story_2_s1.mp3"
      },
      {
        "id": 2,
        "es": "Él es un deportista muy joven y talentoso.",
        "en": "He is a very young and talented athlete.",
        "cn": "他是一位非常年轻且有天赋的运动员。",
        "audio": "./assets/audios/story_2_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "talento",
        "pos": "n.m.",
        "cn": "天赋",
        "en": "talent",
        "example": "El niño tiene mucho talento para el piano.",
        "audio": "./assets/audios/vocab_story_2_1.mp3"
      },
      {
        "word": "deportista",
        "pos": "n.m./f.",
        "cn": "运动员",
        "en": "athlete",
        "example": "Ella es una deportista profesional.",
        "audio": "./assets/audios/vocab_story_2_2.mp3"
      }
    ],
    "grammar": {
      "point": "形容词位置",
      "detail": "在西班牙语中，形容词通常放在名词后面。"
    },
    "quiz": {
      "question": "¿Cómo es Carlos Alcaraz?",
      "options": [
        "A. Muy talentoso",
        "B. Muy viejo",
        "C. Muy lento"
      ],
      "correct_index": 0,
      "explanation": "文中提到他是年轻且有天赋的。"
    },
    "id": "story_2",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_2_normal.mp3",
    "audio_full_slow": "./assets/audios/story_2_slow.mp3"
  },
  {
    "tag": "Gastronomía",
    "title": {
      "es": "Los churros, el desayuno favorito",
      "en": "Churros, the favorite breakfast",
      "cn": "03. 油条，最受欢迎的早餐"
    },
    "intro": "在西班牙，人们喜欢吃油条蘸巧克力作为早餐。",
    "sentences": [
      {
        "id": 1,
        "es": "A los españoles les encanta desayunar churros con chocolate.",
        "en": "Spaniards love having churros with chocolate for breakfast.",
        "cn": "西班牙人喜欢吃油条蘸巧克力当早餐。",
        "audio": "./assets/audios/story_3_s1.mp3"
      },
      {
        "id": 2,
        "es": "Es una tradición muy dulce y deliciosa.",
        "en": "It is a very sweet and delicious tradition.",
        "cn": "这是一个非常甜蜜且美味的传统。",
        "audio": "./assets/audios/story_3_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "desayuno",
        "pos": "n.m.",
        "cn": "早餐",
        "en": "breakfast",
        "example": "El desayuno es la comida más importante.",
        "audio": "./assets/audios/vocab_story_3_1.mp3"
      },
      {
        "word": "delicioso",
        "pos": "adj.",
        "cn": "美味的",
        "en": "delicious",
        "example": "Este pastel está delicioso.",
        "audio": "./assets/audios/vocab_story_3_2.mp3"
      }
    ],
    "grammar": {
      "point": "动词 gustar",
      "detail": "使用 gustar 时，主语通常放在动词后面。"
    },
    "quiz": {
      "question": "¿Con qué se comen los churros?",
      "options": [
        "A. Con chocolate",
        "B. Con carne",
        "C. Con sopa"
      ],
      "correct_index": 0,
      "explanation": "文中明确提到是蘸巧克力吃。"
    },
    "id": "story_3",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_3_normal.mp3",
    "audio_full_slow": "./assets/audios/story_3_slow.mp3"
  },
  {
    "tag": "Cultura Pop",
    "title": {
      "es": "Rosalía y su nuevo estilo",
      "en": "Rosalía and her new style",
      "cn": "04. 罗莎莉亚与她的新风格"
    },
    "intro": "西班牙歌手罗莎莉亚总是带给我们时尚惊喜。",
    "sentences": [
      {
        "id": 1,
        "es": "Rosalía siempre cambia su estilo de ropa.",
        "en": "Rosalía always changes her clothing style.",
        "cn": "罗莎莉亚总是改变她的服装风格。",
        "audio": "./assets/audios/story_4_s1.mp3"
      },
      {
        "id": 2,
        "es": "Sus canciones son muy populares en todo el mundo.",
        "en": "Her songs are very popular all over the world.",
        "cn": "她的歌在全世界都很受欢迎。",
        "audio": "./assets/audios/story_4_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "siempre",
        "pos": "adv.",
        "cn": "总是",
        "en": "always",
        "example": "Siempre estudio español por la mañana.",
        "audio": "./assets/audios/vocab_story_4_1.mp3"
      },
      {
        "word": "popular",
        "pos": "adj.",
        "cn": "受欢迎的",
        "en": "popular",
        "example": "Ese restaurante es muy popular.",
        "audio": "./assets/audios/vocab_story_4_2.mp3"
      }
    ],
    "grammar": {
      "point": "频度副词",
      "detail": "siempre 放在动词之前。"
    },
    "quiz": {
      "question": "¿Qué hace Rosalía con su estilo?",
      "options": [
        "A. Lo cambia",
        "B. Lo olvida",
        "C. Lo esconde"
      ],
      "correct_index": 0,
      "explanation": "文中说她总是改变风格。"
    },
    "id": "story_4",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_4_normal.mp3",
    "audio_full_slow": "./assets/audios/story_4_slow.mp3"
  },
  {
    "tag": "Tradiciones",
    "title": {
      "es": "El Día de Muertos en México",
      "en": "Day of the Dead in Mexico",
      "cn": "05. 墨西哥亡灵节"
    },
    "intro": "亡灵节是墨西哥最重要的文化节日之一。",
    "sentences": [
      {
        "id": 1,
        "es": "En México celebran el Día de Muertos en noviembre.",
        "en": "In Mexico, they celebrate the Day of the Dead in November.",
        "cn": "在墨西哥，人们在十一月庆祝亡灵节。",
        "audio": "./assets/audios/story_5_s1.mp3"
      },
      {
        "id": 2,
        "es": "Las familias ponen flores y fotos en sus altares.",
        "en": "Families put flowers and photos on their altars.",
        "cn": "家人们在祭坛上放花和照片。",
        "audio": "./assets/audios/story_5_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "celebrar",
        "pos": "v.",
        "cn": "庆祝",
        "en": "to celebrate",
        "example": "Vamos a celebrar tu cumpleaños.",
        "audio": "./assets/audios/vocab_story_5_1.mp3"
      },
      {
        "word": "altar",
        "pos": "n.m.",
        "cn": "祭坛",
        "en": "altar",
        "example": "El altar está decorado con velas.",
        "audio": "./assets/audios/vocab_story_5_2.mp3"
      }
    ],
    "grammar": {
      "point": "动词变位",
      "detail": "celebrar 是第一变位动词，ellos 形式为 celebran。"
    },
    "quiz": {
      "question": "¿Cuándo celebran el Día de Muertos?",
      "options": [
        "A. En noviembre",
        "B. En agosto",
        "C. En enero"
      ],
      "correct_index": 0,
      "explanation": "文中提到是在十一月。"
    },
    "id": "story_5",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_5_normal.mp3",
    "audio_full_slow": "./assets/audios/story_5_slow.mp3"
  },
  {
    "tag": "Curiosidades",
    "title": {
      "es": "La siesta: un mito español",
      "en": "The siesta: a Spanish myth",
      "cn": "06. 午睡：一个西班牙神话"
    },
    "intro": "并不是所有西班牙人都每天睡午觉哦。",
    "sentences": [
      {
        "id": 1,
        "es": "Mucha gente piensa que todos los españoles duermen la siesta.",
        "en": "Many people think that all Spaniards take a nap.",
        "cn": "很多人以为所有西班牙人都睡午觉。",
        "audio": "./assets/audios/story_6_s1.mp3"
      },
      {
        "id": 2,
        "es": "En realidad, muchas personas trabajan por la tarde.",
        "en": "In reality, many people work in the afternoon.",
        "cn": "实际上，很多人下午都在工作。",
        "audio": "./assets/audios/story_6_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "siesta",
        "pos": "n.f.",
        "cn": "午睡",
        "en": "nap",
        "example": "Después de comer, me gusta dormir la siesta.",
        "audio": "./assets/audios/vocab_story_6_1.mp3"
      },
      {
        "word": "realidad",
        "pos": "n.f.",
        "cn": "现实",
        "en": "reality",
        "example": "En realidad, es muy fácil.",
        "audio": "./assets/audios/vocab_story_6_2.mp3"
      }
    ],
    "grammar": {
      "point": "陈述语气",
      "detail": "用于表达客观事实。"
    },
    "quiz": {
      "question": "¿Todos los españoles duermen la siesta?",
      "options": [
        "A. No, es un mito",
        "B. Sí, todos",
        "C. Solo los niños"
      ],
      "correct_index": 0,
      "explanation": "文中明确指出这是一个误解。"
    },
    "id": "story_6",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_6_normal.mp3",
    "audio_full_slow": "./assets/audios/story_6_slow.mp3"
  },
  {
    "tag": "Tecnología",
    "title": {
      "es": "El uso del móvil en clase",
      "en": "Mobile phone use in class",
      "cn": "07. 课堂上使用手机"
    },
    "intro": "学校正在讨论是否应该禁止在课堂上使用手机。",
    "sentences": [
      {
        "id": 1,
        "es": "Los profesores quieren prohibir el móvil en las aulas.",
        "en": "Teachers want to ban mobile phones in classrooms.",
        "cn": "老师们想在教室里禁止手机。",
        "audio": "./assets/audios/story_7_s1.mp3"
      },
      {
        "id": 2,
        "es": "Es importante prestar atención al profesor.",
        "en": "It is important to pay attention to the teacher.",
        "cn": "注意听老师讲课很重要。",
        "audio": "./assets/audios/story_7_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "móvil",
        "pos": "n.m.",
        "cn": "手机",
        "en": "mobile phone",
        "example": "Olvidé mi móvil en casa.",
        "audio": "./assets/audios/vocab_story_7_1.mp3"
      },
      {
        "word": "aula",
        "pos": "n.f.",
        "cn": "教室",
        "en": "classroom",
        "example": "El aula es grande y luminosa.",
        "audio": "./assets/audios/vocab_story_7_2.mp3"
      }
    ],
    "grammar": {
      "point": "动词原形用法",
      "detail": "动词原形常作句子的主语。"
    },
    "quiz": {
      "question": "¿Qué quieren hacer los profesores?",
      "options": [
        "A. Prohibir el móvil",
        "B. Comprar móviles",
        "C. Usar el móvil"
      ],
      "correct_index": 0,
      "explanation": "文中说老师们想禁止使用手机。"
    },
    "id": "story_7",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_7_normal.mp3",
    "audio_full_slow": "./assets/audios/story_7_slow.mp3"
  },
  {
    "tag": "Viajes",
    "title": {
      "es": "Visitar Madrid en otoño",
      "en": "Visiting Madrid in autumn",
      "cn": "08. 秋季游览马德里"
    },
    "intro": "马德里的秋天非常美丽，气候宜人。",
    "sentences": [
      {
        "id": 1,
        "es": "El otoño es la mejor época para visitar Madrid.",
        "en": "Autumn is the best time to visit Madrid.",
        "cn": "秋天是游览马德里的最佳时间。",
        "audio": "./assets/audios/story_8_s1.mp3"
      },
      {
        "id": 2,
        "es": "El clima es perfecto para caminar por los parques.",
        "en": "The weather is perfect for walking in the parks.",
        "cn": "天气非常适合在公园里散步。",
        "audio": "./assets/audios/story_8_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "otoño",
        "pos": "n.m.",
        "cn": "秋天",
        "en": "autumn",
        "example": "En otoño las hojas caen.",
        "audio": "./assets/audios/vocab_story_8_1.mp3"
      },
      {
        "word": "clima",
        "pos": "n.m.",
        "cn": "气候",
        "en": "weather",
        "example": "El clima de España es agradable.",
        "audio": "./assets/audios/vocab_story_8_2.mp3"
      }
    ],
    "grammar": {
      "point": "定冠词用法",
      "detail": "季节名称前通常加定冠词。"
    },
    "quiz": {
      "question": "¿Cómo es el clima en otoño?",
      "options": [
        "A. Perfecto",
        "B. Muy frío",
        "C. Muy malo"
      ],
      "correct_index": 0,
      "explanation": "文中描述秋天的天气是完美的。"
    },
    "id": "story_8",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_8_normal.mp3",
    "audio_full_slow": "./assets/audios/story_8_slow.mp3"
  },
  {
    "tag": "Cine",
    "title": {
      "es": "El cine español tiene éxito",
      "en": "Spanish cinema is successful",
      "cn": "09. 西班牙电影很成功"
    },
    "intro": "越来越多的西班牙电影在国际上获得奖项。",
    "sentences": [
      {
        "id": 1,
        "es": "Las películas españolas son muy interesantes.",
        "en": "Spanish movies are very interesting.",
        "cn": "西班牙电影非常有趣。",
        "audio": "./assets/audios/story_9_s1.mp3"
      },
      {
        "id": 2,
        "es": "Muchos directores ganan premios en festivales.",
        "en": "Many directors win awards at festivals.",
        "cn": "许多导演在电影节上获奖。",
        "audio": "./assets/audios/story_9_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "película",
        "pos": "n.f.",
        "cn": "电影",
        "en": "movie",
        "example": "Ayer vi una película de terror.",
        "audio": "./assets/audios/vocab_story_9_1.mp3"
      },
      {
        "word": "premio",
        "pos": "n.m.",
        "cn": "奖项",
        "en": "award",
        "example": "La película ganó un premio importante.",
        "audio": "./assets/audios/vocab_story_9_2.mp3"
      }
    ],
    "grammar": {
      "point": "名词阴阳性",
      "detail": "película 是以 -a 结尾的阴性名词。"
    },
    "quiz": {
      "question": "¿Qué ganan los directores?",
      "options": [
        "A. Premios",
        "B. Dinero",
        "C. Libros"
      ],
      "correct_index": 0,
      "explanation": "文中提到导演们在电影节上获奖。"
    },
    "id": "story_9",
    "date": "2026-11-08",
    "audio_full_normal": "./assets/audios/story_9_normal.mp3",
    "audio_full_slow": "./assets/audios/story_9_slow.mp3"
  },
  {
    "tag": "Moda",
    "title": {
      "es": "La moda sostenible en Latinoamérica",
      "en": "Sustainable fashion in Latin America",
      "cn": "10. 拉丁美洲的绿色时尚"
    },
    "intro": "可持续发展在拉美的时尚界越来越重要。",
    "sentences": [
      {
        "id": 1,
        "es": "La gente prefiere comprar ropa sostenible ahora.",
        "en": "People prefer to buy sustainable clothing now.",
        "cn": "人们现在更喜欢购买可持续服装。",
        "audio": "./assets/audios/story_10_s1.mp3"
      },
      {
        "id": 2,
        "es": "Es una forma de cuidar el medio ambiente.",
        "en": "It is a way to take care of the environment.",
        "cn": "这是保护环境的一种方式。",
        "audio": "./assets/audios/story_10_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "ropa",
        "pos": "n.f.",
        "cn": "衣服",
        "en": "clothes",
        "example": "Necesito comprar ropa nueva.",
        "audio": "./assets/audios/vocab_story_10_1.mp3"
      },
      {
        "word": "ambiente",
        "pos": "n.m.",
        "cn": "环境",
        "en": "environment",
        "example": "Debemos cuidar el medio ambiente.",
        "audio": "./assets/audios/vocab_story_10_2.mp3"
      }
    ],
    "grammar": {
      "point": "动词短语",
      "dict": "preferir + inf. (更喜欢做某事)"
    },
    "quiz": {
      "question": "¿Qué prefiere comprar la gente?",
      "options": [
        "A. Ropa sostenible",
        "B. Ropa cara",
        "C. Ropa vieja"
      ],
      "correct_index": 0,
      "explanation": "文中提到人们更喜欢可持续的服装。"
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
