// 每日 10 篇西语早报数据包
const DAILY_STORIES = [
  {
    "id": "story_1",
    "tag": "八卦 / 名人",
    "date": "2026-11-10",
    "title": {
      "es": "Tu horóscopo diario: martes 10 de noviembre de 2026",
      "en": "Your daily horoscope: Tuesday, November 10, 2026",
      "cn": "01. 您的每日星座运势：2026 年 11 月 10 日星期二"
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
        "es": "Tu horóscopo diario: martes 10 de noviembre de 2026",
        "en": "Your daily horoscope: Tuesday, November 10, 2026",
        "cn": "您的每日星座运势：2026 年 11 月 10 日星期二",
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
        "example": "Tu horóscopo diario: martes 10 de noviembre de 2026",
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
    "date": "2026-11-10",
    "title": {
      "es": "Gloria Camila da un paso más en su relación con Álvaro García: se van a vivir juntos",
      "en": "Gloria Camila takes another step in her relationship with Álvaro García: they are going to live together",
      "cn": "02. 格洛丽亚·卡米拉与阿尔瓦罗·加西亚的关系又迈出了一步：他们将住在一起"
    },
    "intro": "合作者在《下午行动》中证实了这一点。",
    "sentences": [
      {
        "id": 1,
        "es": "La colaboradora lo ha confirmado en 'La tarde se mueve'.",
        "en": "The collaborator has confirmed it in 'The afternoon moves'.",
        "cn": "合作者在《下午行动》中证实了这一点。",
        "audio": "./assets/audios/story_2_s1.mp3"
      },
      {
        "id": 2,
        "es": "Gloria Camila da un paso más en su relación con Álvaro García: se van a vivir juntos",
        "en": "Gloria Camila takes another step in her relationship with Álvaro García: they are going to live together",
        "cn": "格洛丽亚·卡米拉与阿尔瓦罗·加西亚的关系又迈出了一步：他们将住在一起",
        "audio": "./assets/audios/story_2_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "gloria",
        "pos": "voc.",
        "cn": "荣耀",
        "en": "glory",
        "example": "La colaboradora lo ha confirmado en 'La tarde se mueve'.",
        "audio": "./assets/audios/vocab_story_2_1.mp3"
      },
      {
        "word": "camila",
        "pos": "voc.",
        "cn": "卡米拉",
        "en": "camila",
        "example": "Gloria Camila da un paso más en su relación con Álvaro García: se van a vivir juntos",
        "audio": "./assets/audios/vocab_story_2_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「gloria」在文中的表达",
      "detail": "「gloria」在本文语境下表示“荣耀”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「gloria」在文中的中文含义是？",
      "options": [
        "A. 荣耀",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「gloria」在此处意为：荣耀。"
    },
    "audio_full_normal": "./assets/audios/story_2_normal.mp3",
    "audio_full_slow": "./assets/audios/story_2_slow.mp3"
  },
  {
    "id": "story_3",
    "tag": "八卦 / 名人",
    "date": "2026-11-10",
    "title": {
      "es": "Danna Paola y Belinda sorprenden con un apasionado beso para cerrar uno de sus espectáculos",
      "en": "Danna Paola and Belinda surprise with a passionate kiss to close one of their shows",
      "cn": "03. 丹娜·保拉 (Danna Paola) 和贝琳达 (Belinda) 惊喜地用充满激情的吻结束了一场演出"
    },
    "intro": "歌手们为墨西哥音乐剧《Mentiras All Stars》的重新诠释画上了点睛之笔。",
    "sentences": [
      {
        "id": 1,
        "es": "Las cantantes pusieron ese broche final a la reinterpretación del musical mexicano 'Mentiras All Stars'.",
        "en": "The singers put the finishing touch to the reinterpretation of the Mexican musical 'Mentiras All Stars'.",
        "cn": "歌手们为墨西哥音乐剧《Mentiras All Stars》的重新诠释画上了点睛之笔。",
        "audio": "./assets/audios/story_3_s1.mp3"
      },
      {
        "id": 2,
        "es": "Danna Paola y Belinda sorprenden con un apasionado beso para cerrar uno de sus espectáculos",
        "en": "Danna Paola and Belinda surprise with a passionate kiss to close one of their shows",
        "cn": "丹娜·保拉 (Danna Paola) 和贝琳达 (Belinda) 惊喜地用充满激情的吻结束了一场演出",
        "audio": "./assets/audios/story_3_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "danna",
        "pos": "voc.",
        "cn": "丹娜",
        "en": "danna",
        "example": "Las cantantes pusieron ese broche final a la reinterpretación del musical mexicano 'Mentiras All Stars'.",
        "audio": "./assets/audios/vocab_story_3_1.mp3"
      },
      {
        "word": "paola",
        "pos": "voc.",
        "cn": "保拉",
        "en": "paola",
        "example": "Danna Paola y Belinda sorprenden con un apasionado beso para cerrar uno de sus espectáculos",
        "audio": "./assets/audios/vocab_story_3_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「danna」在文中的表达",
      "detail": "「danna」在本文语境下表示“丹娜”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「danna」在文中的中文含义是？",
      "options": [
        "A. 丹娜",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「danna」在此处意为：丹娜。"
    },
    "audio_full_normal": "./assets/audios/story_3_normal.mp3",
    "audio_full_slow": "./assets/audios/story_3_slow.mp3"
  },
  {
    "id": "story_4",
    "tag": "体育 / 赛事",
    "date": "2026-11-10",
    "title": {
      "es": "Pau Cubarsí se lleva el Golden Boy: cuarto jugador español y azulgrana que gana el galardón en los últimos seis años",
      "en": "Pau Cubarsí wins the Golden Boy: the fourth Spanish and Barça player to win the award in the last six years",
      "cn": "04. 保罗·库巴西荣获金童奖：过去六年中第四位获得该奖项的西班牙和巴萨球员"
    },
    "intro": "该奖项由体育报纸《都灵体育报》颁发，旨在表彰 21 岁以下最佳足球运动员。",
    "sentences": [
      {
        "id": 1,
        "es": "El prestigioso premio, entregado por el diario deportivo Tuttosport, distingue al mejor futbolista menor de 21 años.",
        "en": "The prestigious award, presented by the sports newspaper Tuttosport, distinguishes the best footballer under 21 years of age.",
        "cn": "该奖项由体育报纸《都灵体育报》颁发，旨在表彰 21 岁以下最佳足球运动员。",
        "audio": "./assets/audios/story_4_s1.mp3"
      },
      {
        "id": 2,
        "es": "Pau Cubarsí se lleva el Golden Boy: cuarto jugador español y azulgrana que gana el galardón en los últimos seis años",
        "en": "Pau Cubarsí wins the Golden Boy: the fourth Spanish and Barça player to win the award in the last six years",
        "cn": "保罗·库巴西荣获金童奖：过去六年中第四位获得该奖项的西班牙和巴萨球员",
        "audio": "./assets/audios/story_4_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "cubarsí",
        "pos": "voc.",
        "cn": "库巴尔西",
        "en": "cubarsi",
        "example": "El prestigioso premio, entregado por el diario deportivo Tuttosport, distingue al mejor futbolista menor de 21 años.",
        "audio": "./assets/audios/vocab_story_4_1.mp3"
      },
      {
        "word": "lleva",
        "pos": "voc.",
        "cn": "携带",
        "en": "carry",
        "example": "Pau Cubarsí se lleva el Golden Boy: cuarto jugador español y azulgrana que gana el galardón en los últimos seis años",
        "audio": "./assets/audios/vocab_story_4_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「cubarsí」在文中的表达",
      "detail": "「cubarsí」在本文语境下表示“库巴尔西”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「cubarsí」在文中的中文含义是？",
      "options": [
        "A. 库巴尔西",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「cubarsí」在此处意为：库巴尔西。"
    },
    "audio_full_normal": "./assets/audios/story_4_normal.mp3",
    "audio_full_slow": "./assets/audios/story_4_slow.mp3"
  },
  {
    "id": "story_5",
    "tag": "体育 / 赛事",
    "date": "2026-11-10",
    "title": {
      "es": "Emotivo minuto de silencio de la selección española por la muerte de Jesús de Miguel",
      "en": "Emotional minute of silence for the Spanish team for the death of Jesús de Miguel",
      "cn": "05. 西班牙队为赫苏斯·德·米格尔的逝世默哀一分钟"
    },
    "intro": "La Roja 在 11 月国家队休息期的第一次训练开始时预留了一些时间来纪念",
    "sentences": [
      {
        "id": 1,
        "es": "La Roja reservó unos momentos al inicio de su primer entrenamiento en el parón de selecciones de noviembre para honrar al delantero del Tenerife que falleció tras una entrada.",
        "en": "La Roja reserved a few moments at the beginning of their first training session in the November national team break to honor the Tenerife forward who died after a tackle.",
        "cn": "La Roja 在 11 月国家队休息期间的第一次训练开始时预留了一些时间，以纪念在铲球后死亡的特内里费前锋。",
        "audio": "./assets/audios/story_5_s1.mp3"
      },
      {
        "id": 2,
        "es": "Emotivo minuto de silencio de la selección española por la muerte de Jesús de Miguel",
        "en": "Emotional minute of silence for the Spanish team for the death of Jesús de Miguel",
        "cn": "西班牙队为赫苏斯·德·米格尔的逝世默哀一分钟",
        "audio": "./assets/audios/story_5_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "emotivo",
        "pos": "voc.",
        "cn": "情绪化的",
        "en": "emotional",
        "example": "La Roja reservó unos momentos al inicio de su primer entrenamiento en el parón de selecciones de noviembre para honrar al delantero del Tenerife que falleció tras una entrada.",
        "audio": "./assets/audios/vocab_story_5_1.mp3"
      },
      {
        "word": "minuto",
        "pos": "voc.",
        "cn": "分钟",
        "en": "minute",
        "example": "Emotivo minuto de silencio de la selección española por la muerte de Jesús de Miguel",
        "audio": "./assets/audios/vocab_story_5_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「emotivo」在文中的表达",
      "detail": "「emotivo」在本文语境下表示“情绪化的”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「emotivo」在文中的中文含义是？",
      "options": [
        "A. 情绪化的",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「emotivo」在此处意为：情绪化的。"
    },
    "audio_full_normal": "./assets/audios/story_5_normal.mp3",
    "audio_full_slow": "./assets/audios/story_5_slow.mp3"
  },
  {
    "id": "story_6",
    "tag": "体育 / 赛事",
    "date": "2026-11-10",
    "title": {
      "es": "Raúl González, nuevo entrenador del Oviedo: \"Mi forma de entender el fútbol es respetar el talento, pero con entrega incondicional\"",
      "en": "Raúl González, new coach of Oviedo: \"My way of understanding football is to respect talent, but with unconditional dedication\"",
      "cn": "06. 奥维多新任主教练劳尔·冈萨雷斯：“我理解足球的方式是尊重人才，但要无条件奉献”"
    },
    "intro": "这将是他在法布里卡效力后第一次离开皇马在替补席上经历。",
    "sentences": [
      {
        "id": 1,
        "es": "Será la primera experiencia en un banquillo lejos del Real Madrid tras su paso por La Fábrica.",
        "en": "It will be the first experience on a bench away from Real Madrid after his time at La Fábrica.",
        "cn": "这将是他在法布里卡效力后第一次离开皇马在替补席上经历。",
        "audio": "./assets/audios/story_6_s1.mp3"
      },
      {
        "id": 2,
        "es": "Raúl González, nuevo entrenador del Oviedo: \"Mi forma de entender el fútbol es respetar el talento, pero con entrega incondicional\"",
        "en": "Raúl González, new coach of Oviedo: \"My way of understanding football is to respect talent, but with unconditional dedication\"",
        "cn": "奥维多新任主教练劳尔·冈萨雷斯：“我理解足球的方式是尊重人才，但要无条件奉献”",
        "audio": "./assets/audios/story_6_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "gonzález",
        "pos": "voc.",
        "cn": "冈萨雷斯",
        "en": "gonzalez",
        "example": "Será la primera experiencia en un banquillo lejos del Real Madrid tras su paso por La Fábrica.",
        "audio": "./assets/audios/vocab_story_6_1.mp3"
      },
      {
        "word": "nuevo",
        "pos": "voc.",
        "cn": "新的",
        "en": "new",
        "example": "Raúl González, nuevo entrenador del Oviedo: \"Mi forma de entender el fútbol es respetar el talento, pero con entrega incondicional\"",
        "audio": "./assets/audios/vocab_story_6_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「gonzález」在文中的表达",
      "detail": "「gonzález」在本文语境下表示“冈萨雷斯”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「gonzález」在文中的中文含义是？",
      "options": [
        "A. 冈萨雷斯",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「gonzález」在此处意为：冈萨雷斯。"
    },
    "audio_full_normal": "./assets/audios/story_6_normal.mp3",
    "audio_full_slow": "./assets/audios/story_6_slow.mp3"
  },
  {
    "id": "story_7",
    "tag": "文化 / 艺术",
    "date": "2026-11-10",
    "title": {
      "es": "Dani Martín anuncia las últimas 14 noches de su gira y agradece el cariño recibido tras la muerte de su padre",
      "en": "Dani Martín announces the last 14 nights of his tour and thanks the love received after the death of his father",
      "cn": "07. 丹尼·马丁 (Dani Martin) 宣布巡演最后 14 晚，并感谢父亲去世后所得到的爱"
    },
    "intro": "这位歌手宣布，他的“25 P*T*”巡演最后一场音乐会的门票将于本周二开始发售。",
    "sentences": [
      {
        "id": 1,
        "es": "El cantante ha anunciado que este martes saldrán a la venta las entradas para los últimos conciertos de su gira '25 P*T*S AÑOS', con la que celebra sus 25 años de carrera musical.",
        "en": "The singer has announced that this Tuesday tickets will go on sale for the last concerts of his '25 P*T*S YEARS' tour, with which he celebrates his 25 years of musical career.",
        "cn": "这位歌手宣布，他的“25 P*T*S YEARS”巡演最后一场音乐会的门票将于本周二开始发售，他以此庆祝自己 25 年的音乐生涯。",
        "audio": "./assets/audios/story_7_s1.mp3"
      },
      {
        "id": 2,
        "es": "Dani Martín anuncia las últimas 14 noches de su gira y agradece el cariño recibido tras la muerte de su padre",
        "en": "Dani Martín announces the last 14 nights of his tour and thanks the love received after the death of his father",
        "cn": "丹尼·马丁 (Dani Martin) 宣布巡演最后 14 晚，并感谢父亲去世后所得到的爱",
        "audio": "./assets/audios/story_7_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "martín",
        "pos": "voc.",
        "cn": "马丁",
        "en": "martin",
        "example": "El cantante ha anunciado que este martes saldrán a la venta las entradas para los últimos conciertos de su gira '25 P*T*S AÑOS', con la que celebra sus 25 años de carrera musical.",
        "audio": "./assets/audios/vocab_story_7_1.mp3"
      },
      {
        "word": "anuncia",
        "pos": "voc.",
        "cn": "宣布",
        "en": "announces",
        "example": "Dani Martín anuncia las últimas 14 noches de su gira y agradece el cariño recibido tras la muerte de su padre",
        "audio": "./assets/audios/vocab_story_7_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「martín」在文中的表达",
      "detail": "「martín」在本文语境下表示“马丁”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「martín」在文中的中文含义是？",
      "options": [
        "A. 马丁",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「martín」在此处意为：马丁。"
    },
    "audio_full_normal": "./assets/audios/story_7_normal.mp3",
    "audio_full_slow": "./assets/audios/story_7_slow.mp3"
  },
  {
    "id": "story_8",
    "tag": "文化 / 艺术",
    "date": "2026-11-10",
    "title": {
      "es": "Tu salón convertido en un escenario: Apple Music estrena Selfie Sing, la nueva forma de grabar karaoke desde el iPhone",
      "en": "Your living room turned into a stage: Apple Music launches Selfie Sing, the new way to record karaoke from your iPhone",
      "cn": "08. 你的客厅变成了舞台：Apple Music 推出 Selfie Sing，这是通过 iPhone 录制卡拉 OK 的新方式"
    },
    "intro": "该功能已在 iOS 27.3 Beta 中提供，并且可能会在 2026 年底之前普及到所有人。",
    "sentences": [
      {
        "id": 1,
        "es": "La función está disponible en la beta de iOS 27.",
        "en": "The feature is available in the iOS 27 beta.",
        "cn": "该功能在 iOS 27 Beta 中可用。",
        "audio": "./assets/audios/story_8_s1.mp3"
      },
      {
        "id": 2,
        "es": "3 y probablemente llegará a todos antes de que acabe 2026.",
        "en": "3 and will probably reach everyone before the end of 2026.",
        "cn": "3 可能会在 2026 年底之前到达所有人。",
        "audio": "./assets/audios/story_8_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "salón",
        "pos": "voc.",
        "cn": "休息室",
        "en": "lounge",
        "example": "La función está disponible en la beta de iOS 27.",
        "audio": "./assets/audios/vocab_story_8_1.mp3"
      },
      {
        "word": "convertido",
        "pos": "voc.",
        "cn": "转换的",
        "en": "converted",
        "example": "3 y probablemente llegará a todos antes de que acabe 2026.",
        "audio": "./assets/audios/vocab_story_8_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「salón」在文中的表达",
      "detail": "「salón」在本文语境下表示“休息室”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「salón」在文中的中文含义是？",
      "options": [
        "A. 休息室",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「salón」在此处意为：休息室。"
    },
    "audio_full_normal": "./assets/audios/story_8_normal.mp3",
    "audio_full_slow": "./assets/audios/story_8_slow.mp3"
  },
  {
    "id": "story_9",
    "tag": "生活 / 资讯",
    "date": "2026-11-10",
    "title": {
      "es": "El Supremo rechaza extender la prohibición del derecho a voto a los hijos de los nacionalizados a través de la 'ley de nietos'",
      "en": "The Supreme Court rejects extending the prohibition of the right to vote to the children of those naturalized through the 'grandchildren law'",
      "cn": "09. 最高法院拒绝将投票权的禁止范围扩大到通过“孙子法”入籍的人的孩子"
    },
    "intro": "争议行政庭拒绝了 Vox 和 Iustitia Europa 要求采取的预防措施，以撤回其诉讼",
    "sentences": [
      {
        "id": 1,
        "es": "La Sala de lo Contencioso-Administrativo ha denegado las cautelares solicitadas por Vox e Iustitia Europa para retirar su derecho a voto, como sí hizo con los descendientes de exiliados españoles que no podrán votar en las próximas elecciones generales.",
        "en": "The Contentious-Administrative Chamber has denied the precautionary measures requested by Vox and Iustitia Europa to withdraw their right to vote, as it did with the descendants of Spanish exiles who will not be able to vote in the next general elections.",
        "cn": "争议行政院拒绝了 Vox 和 Iustitia Europa 要求的撤回投票权的预防措施，就像对待无法在下次大选中投票的西班牙流亡者后裔所做的那样。",
        "audio": "./assets/audios/story_9_s1.mp3"
      },
      {
        "id": 2,
        "es": "El Supremo rechaza extender la prohibición del derecho a voto a los hijos de los nacionalizados a través de la 'ley de nietos'",
        "en": "The Supreme Court rejects extending the prohibition of the right to vote to the children of those naturalized through the 'grandchildren law'",
        "cn": "最高法院拒绝将投票权的禁止范围扩大到通过“孙子法”入籍的人的孩子",
        "audio": "./assets/audios/story_9_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "supremo",
        "pos": "voc.",
        "cn": "最高",
        "en": "supreme",
        "example": "La Sala de lo Contencioso-Administrativo ha denegado las cautelares solicitadas por Vox e Iustitia Europa para retirar su derecho a voto, como sí hizo con los descendientes de exiliados españoles que no podrán votar en las próximas elecciones generales.",
        "audio": "./assets/audios/vocab_story_9_1.mp3"
      },
      {
        "word": "rechaza",
        "pos": "voc.",
        "cn": "拒绝",
        "en": "reject",
        "example": "El Supremo rechaza extender la prohibición del derecho a voto a los hijos de los nacionalizados a través de la 'ley de nietos'",
        "audio": "./assets/audios/vocab_story_9_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「supremo」在文中的表达",
      "detail": "「supremo」在本文语境下表示“最高”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「supremo」在文中的中文含义是？",
      "options": [
        "A. 最高",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「supremo」在此处意为：最高。"
    },
    "audio_full_normal": "./assets/audios/story_9_normal.mp3",
    "audio_full_slow": "./assets/audios/story_9_slow.mp3"
  },
  {
    "id": "story_10",
    "tag": "生活 / 资讯",
    "date": "2026-11-10",
    "title": {
      "es": "Abascal y Broncano protagonizan un intenso debate sobre vivienda, clima e inmigración en una 'Revuelta' sin preguntas clásicas",
      "en": "Abascal and Broncano star in an intense debate on housing, climate and immigration in a 'Revolt' without classic questions",
      "cn": "10. 阿巴斯卡和布隆卡诺在一场没有经典问题的“起义”中主演了一场关于住房、气候和移民的激烈辩论"
    },
    "intro": "Vox 领导人捍卫了他关于移民和住房的提议，并谈到了他与摩洛哥和 ISR 的关系。",
    "sentences": [
      {
        "id": 1,
        "es": "El líder de Vox ha defendido sus propuestas sobre inmigración y vivienda, ha abordado sus relaciones con Marruecos e Israel y ha debatido con el presentador sobre la polarización política y las críticas de su partido a RTVE.",
        "en": "The leader of Vox has defended his proposals on immigration and housing, has addressed his relations with Morocco and Israel and has debated with the presenter about political polarization and his party's criticism of RTVE.",
        "cn": "Vox 的领导人捍卫了他关于移民和住房的提议，谈到了他与摩洛哥和以色列的关系，并与主持人就政治两极分化和他的政党对 RTVE 的批评进行了辩论。",
        "audio": "./assets/audios/story_10_s1.mp3"
      },
      {
        "id": 2,
        "es": "Abascal y Broncano protagonizan un intenso debate sobre vivienda, clima e inmigración en una 'Revuelta' sin preguntas clásicas",
        "en": "Abascal and Broncano star in an intense debate on housing, climate and immigration in a 'Revolt' without classic questions",
        "cn": "阿巴斯卡和布隆卡诺在一场没有经典问题的“起义”中主演了一场关于住房、气候和移民的激烈辩论",
        "audio": "./assets/audios/story_10_s2.mp3"
      }
    ],
    "vocabulary": [
      {
        "word": "abascal",
        "pos": "voc.",
        "cn": "阿巴斯卡尔",
        "en": "abascal",
        "example": "El líder de Vox ha defendido sus propuestas sobre inmigración y vivienda, ha abordado sus relaciones con Marruecos e Israel y ha debatido con el presentador sobre la polarización política y las críticas de su partido a RTVE.",
        "audio": "./assets/audios/vocab_story_10_1.mp3"
      },
      {
        "word": "broncano",
        "pos": "voc.",
        "cn": "布隆卡诺",
        "en": "broncano",
        "example": "Abascal y Broncano protagonizan un intenso debate sobre vivienda, clima e inmigración en una 'Revuelta' sin preguntas clásicas",
        "audio": "./assets/audios/vocab_story_10_2.mp3"
      }
    ],
    "grammar": {
      "point": "核心词汇「abascal」在文中的表达",
      "detail": "「abascal」在本文语境下表示“阿巴斯卡尔”，是地道西语新闻常用表达。"
    },
    "quiz": {
      "question": "西语单词「abascal」在文中的中文含义是？",
      "options": [
        "A. 阿巴斯卡尔",
        "B. 另一个意思",
        "C. 错误含义"
      ],
      "correct_index": 0,
      "explanation": "「abascal」在此处意为：阿巴斯卡尔。"
    },
    "audio_full_normal": "./assets/audios/story_10_normal.mp3",
    "audio_full_slow": "./assets/audios/story_10_slow.mp3"
  }
];

module.exports = {
  DAILY_STORIES
};
