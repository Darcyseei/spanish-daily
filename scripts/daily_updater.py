# -*- coding: utf-8 -*-
"""
GitHub Actions 专用：每日定时自动生成 10 篇三语西语早报与母语级 Edge-TTS 音频
完全自包含，无任何本地硬编码路径，兼容 Linux / Windows / GitHub Actions
"""
import asyncio
import datetime
import json
import os
import sys
import urllib.request
import urllib.error
import edge_tts

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)
AUDIOS_DIR = os.path.join(BASE_DIR, "assets", "audios")
DATA_DIR = os.path.join(BASE_DIR, "data")
os.makedirs(AUDIOS_DIR, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)

TOPICS_POOL = [
    {
        "tag": "八卦 / 潮流",
        "title": {
            "es": "¡Rosalía sorprende a todos con su nuevo peinado en París!",
            "en": "Rosalía surprises everyone with her new hairstyle in Paris!",
            "cn": "01. 罗莎莉亚在巴黎时装周以复古发型惊艳亮相！"
        },
        "intro": "西班牙天后现身巴黎时装周，复古造型引发全网热议与模仿潮。",
        "sentences": [
            {
                "id": 1,
                "es": "La famosa cantante española Rosalía ha llegado esta mañana a París para asistir a la Semana de la Moda.",
                "en": "The famous Spanish singer Rosalía arrived in Paris this morning to attend Fashion Week.",
                "cn": "西班牙著名歌手罗莎莉亚今晨现身巴黎，出席巴黎时装周。"
            },
            {
                "id": 2,
                "es": "Lo que más llamó la atención de todos fue su peinado retro inspirado en los años noventa.",
                "en": "What caught everyone's attention the most was her 90s-inspired retro hairstyle.",
                "cn": "最吸引大家目光的是她那款受90年代启发的复古发型。"
            }
        ],
        "vocabulary": [
            {"id": "v1_1", "word": "llamar la atención", "pos": "短语", "cn": "引起注意 / 吸睛", "en": "to catch attention", "example": "Su peinado llamó la atención.", "example_cn": "她的发型吸引了所有人的目光。"},
            {"id": "v1_2", "word": "el peinado", "pos": "m.", "cn": "发型", "en": "hairstyle", "example": "Me gusta tu nuevo peinado.", "example_cn": "我喜欢你的新发型。"}
        ],
        "grammar": {
            "title": "现在完成时 vs 简单过去时",
            "formula": "haber + 过去分词 (ha llegado) vs 简单过去时 (llamó)",
            "explanation": "在西语中，如果时间段尚未过去（如 esta mañana 今天早上、hoy 今天），习惯使用现在完成时。",
            "sample_es": "Rosalía ha llegado esta mañana a París.",
            "sample_cn": "罗莎莉亚今晨抵达了巴黎。"
        },
        "quiz": {
            "question": "短语「llamar la atención」表示什么含义？",
            "options": ["A. 大声呼唤", "B. 引起注意、吸睛", "C. 拨打电话"],
            "correct_index": 1,
            "explanation": "llamar la atención 意为‘引人注目、吸引目光’。"
        }
    },
    {
        "tag": "音乐 / 娱乐",
        "title": {
            "es": "Shakira agota las entradas de su gira en tiempo récord",
            "en": "Shakira sells out tour tickets in record time",
            "cn": "02. 夏奇拉世界巡演门票创纪录光速售罄！"
        },
        "intro": "哥伦比亚天后夏奇拉发布真情致谢视频，宣布将在多国紧急加开巡演场次。",
        "sentences": [
            {
                "id": 1,
                "es": "La cantante colombiana Shakira ha agotado las entradas para sus próximos conciertos en pocas horas.",
                "en": "Colombian singer Shakira has sold out tickets for her upcoming concerts in just a few hours.",
                "cn": "哥伦比亚歌手夏奇拉在短短几小时内售罄了接下来的所有演唱会门票。"
            },
            {
                "id": 2,
                "es": "Tras el éxito de ventas, su equipo anunció nuevas fechas para satisfacer la gran demanda de los fans.",
                "en": "Following the sales success, her team announced new dates to meet the huge demand of fans.",
                "cn": "在惊人的售票成功之后，她的团队宣布加开新场次，以满足粉丝的巨大需求。"
            }
        ],
        "vocabulary": [
            {"id": "v2_1", "word": "agotar", "pos": "v.", "cn": "售罄 / 耗尽", "en": "to sell out", "example": "Se agotaron las entradas.", "example_cn": "门票全卖光了。"},
            {"id": "v2_2", "word": "tras", "pos": "prep.", "cn": "在……之后", "en": "after", "example": "Tras el concierto, todos aplaudieron.", "example_cn": "音乐会结束后大家鼓掌。"}
        ],
        "grammar": {
            "title": "介词 tras 的高频用法",
            "formula": "tras + 名词 / 动词原形",
            "explanation": "tras 相当于 después de，在西语报刊中极高频，用来引出紧接在某事之后的动作。",
            "sample_es": "Tras el éxito de ventas, anunció nuevas fechas.",
            "sample_cn": "在售票大获成功后，她宣布了新日期。"
        },
        "quiz": {
            "question": "动词「agotar」在门票情境下最地道的中文翻译是？",
            "options": ["A. 退票", "B. 预售", "C. 售罄 / 抢光"],
            "correct_index": 2,
            "explanation": "agotar las entradas 是演唱会和电影场景中最典型的搭配，意为‘门票售罄’。"
        }
    },
    {
        "tag": "体育 / 趣闻",
        "title": {
            "es": "Messi compra cereales en Miami y los fans se vuelven locos",
            "en": "Messi buys cereal in Miami and fans go crazy",
            "cn": "03. 梅西迈阿密超市买麦片被偶遇，粉丝全网狂欢！"
        },
        "intro": "球王梅西推着超市购物车挑选早餐麦片，超接地气的平民举动冲上热搜。",
        "sentences": [
            {
                "id": 1,
                "es": "Lionel Messi fue visto ayer comprando tranquilamente en un supermercado local de Miami.",
                "en": "Lionel Messi was seen yesterday shopping calmly at a local supermarket in Miami.",
                "cn": "莱昂内尔·梅西昨天被看到在迈阿密一家当地超市悠闲地购物。"
            },
            {
                "id": 2,
                "es": "El astro argentino llevaba una caja de cereales en el carrito y sonrió a todos con amabilidad.",
                "en": "The Argentine star had a box of cereal in his cart and smiled at everyone with kindness.",
                "cn": "这位阿根廷巨星购物车里放着一盒麦片，亲切地对身边的所有人微笑致意。"
            }
        ],
        "vocabulary": [
            {"id": "v3_1", "word": "tranquilamente", "pos": "adv.", "cn": "从容地 / 悠闲地", "en": "calmly", "example": "Pasea tranquilamente.", "example_cn": "他悠闲地散步。"},
            {"id": "v3_2", "word": "la amabilidad", "pos": "f.", "cn": "亲切 / 和蔼", "en": "kindness", "example": "Gracias por su amabilidad.", "example_cn": "感谢您的亲切与热心。"}
        ],
        "grammar": {
            "title": "副词后缀 -mente 的构成",
            "formula": "阴性形容词 + mente (tranquila + mente)",
            "explanation": "西语中绝大多数副词由形容词阴性形式加上 -mente 构成，表示动作的方式。",
            "sample_es": "Compraba tranquilamente en el supermercado.",
            "sample_cn": "他在超市里悠闲从容地购物。"
        },
        "quiz": {
            "question": "单词「tranquilamente」由哪个形容词变形而来？",
            "options": ["A. transitorio", "B. tranquilo/a", "C. trágico"],
            "correct_index": 1,
            "explanation": "tranquilo/a + mente 构成副词 tranquilamente。"
        }
    },
    {
        "tag": "影视 / 名人",
        "title": {
            "es": "El café de Pedro Pascal se convierte en meme viral",
            "en": "Pedro Pascal's coffee order becomes a viral meme",
            "cn": "04. 佩德罗·帕斯卡的“浓缩咖啡炸弹”成为全网热梗！"
        },
        "intro": "好莱坞智利籍影星佩德罗·帕斯卡手拿加了6份浓缩的咖啡被拍，网友直呼心脏狂跳。",
        "sentences": [
            {
                "id": 1,
                "es": "El actor chileno Pedro Pascal fue fotografiado con un café que contenía seis dosis de espresso.",
                "en": "Chilean actor Pedro Pascal was photographed with a coffee containing six shots of espresso.",
                "cn": "智利男演员佩德罗·帕斯卡被拍到拿着一杯含有6份意式浓缩的超大咖啡。"
            },
            {
                "id": 2,
                "es": "Los usuarios bromearon diciendo que esa cantidad de cafeína podría despertar a un dinosaurio.",
                "en": "Users joked that that amount of caffeine could wake up a dinosaur.",
                "cn": "网友们开玩笑说，这么大剂量的咖啡因足以把一只恐龙叫醒。"
            }
        ],
        "vocabulary": [
            {"id": "v4_1", "word": "bromear", "pos": "v.", "cn": "开玩笑", "en": "to joke", "example": "Solo estoy bromeando.", "example_cn": "我只是在开玩笑。"},
            {"id": "v4_2", "word": "despertar", "pos": "v.", "cn": "唤醒 / 醒来", "en": "to wake up", "example": "Me desperté temprano.", "example_cn": "我很早就醒了。"}
        ],
        "grammar": {
            "title": "情态动词 poder + 动词原形",
            "formula": "poder (podría) + infinitivo",
            "explanation": "podría 是 poder 的条件式，表示委婉推测‘可能可以……’，后面直接连接动词原形。",
            "sample_es": "Podría despertar a un dinosaurio.",
            "sample_cn": "可能足以叫醒一只恐龙。"
        },
        "quiz": {
            "question": "动词「bromear」的意思是？",
            "options": ["A. 愤怒抗议", "B. 开玩笑 / 打趣", "C. 认真阅读"],
            "correct_index": 1,
            "explanation": "broma 是名词玩笑，bromear 是动词‘开玩笑’。"
        }
    },
    {
        "tag": "音乐 / 故乡",
        "title": {
            "es": "Bad Bunny canta en Puerto Rico y emociona a su pueblo",
            "en": "Bad Bunny sings in Puerto Rico and moves his hometown",
            "cn": "05. 坏痞兔重返波多黎各，真情开唱引泪目！"
        },
        "intro": "全球流媒体之王回到家乡岛屿免费举办露天派对，感谢所有陪伴他成长的故乡人。",
        "sentences": [
            {
                "id": 1,
                "es": "El cantante Bad Bunny ofreció un concierto sorpresa en las calles de San Juan.",
                "en": "Singer Bad Bunny gave a surprise concert in the streets of San Juan.",
                "cn": "歌手坏痞兔在圣胡安的街头举办了一场惊喜路演音乐会。"
            },
            {
                "id": 2,
                "es": "El artista afirmó con lágrimas que su corazón siempre pertenecerá a su isla natal.",
                "en": "The artist stated through tears that his heart will always belong to his native island.",
                "cn": "这位音乐人眼含热泪地表示，他的心将永远属于养育他的故乡岛屿。"
            }
        ],
        "vocabulary": [
            {"id": "v5_1", "word": "ofrecer", "pos": "v.", "cn": "提供 / 举办", "en": "to offer / give", "example": "Ofreció una fiesta.", "example_cn": "他举办了一场派对。"},
            {"id": "v5_2", "word": "pertenecer", "pos": "v.", "cn": "属于", "en": "to belong", "example": "Me pertenece.", "example_cn": "这属于我。"}
        ],
        "grammar": {
            "title": "动词 pertenecer a 的固定搭配",
            "formula": "pertenecer + a + 人或地点",
            "explanation": "pertenecer（属于）后面必须搭配介词 a。",
            "sample_es": "Mi corazón pertenece a esta tierra.",
            "sample_cn": "我的心属于这片土地。"
        },
        "quiz": {
            "question": "句子「El libro pertenece a María」意思是？",
            "options": ["A. 玛丽亚买了一本书", "B. 这本书属于玛丽亚", "C. 这本书是关于玛丽亚的"],
            "correct_index": 1,
            "explanation": "pertenecer a 意为‘属于……’。"
        }
    },
    {
        "tag": "文化 / 节日",
        "title": {
            "es": "La Tomatina de Buñol tiñe las calles de rojo pasión",
            "en": "La Tomatina of Buñol dyes the streets passionate red",
            "cn": "06. 西班牙番茄大战狂欢开幕，整座小镇染成鲜红色！"
        },
        "intro": "布尼奥尔小镇迎来一年一度的番茄节，数万名狂欢者在番茄浆海中尽情释放。",
        "sentences": [
            {
                "id": 1,
                "es": "Más de veinte mil personas participaron hoy en la famosa fiesta de La Tomatina.",
                "en": "More than twenty thousand people participated today in the famous La Tomatina festival.",
                "cn": "两万多人今天参加了举世闻名的西班牙番茄大战节。"
            },
            {
                "id": 2,
                "es": "Se lanzaron más de ciento cincuenta toneladas de tomates maduros en apenas una hora de diversión.",
                "en": "Over one hundred and fifty tons of ripe tomatoes were thrown in just one hour of fun.",
                "cn": "在短短一小时的狂欢中，超过150吨成熟番茄被掷向空中。"
            }
        ],
        "vocabulary": [
            {"id": "v6_1", "word": "lanzar", "pos": "v.", "cn": "投掷 / 发射", "en": "to throw", "example": "Lanzaron la pelota.", "example_cn": "他们扔了球。"},
            {"id": "v6_2", "word": "maduro/a", "pos": "adj.", "cn": "成熟的", "en": "ripe / mature", "example": "El tomate está maduro.", "example_cn": "西红柿熟了。"}
        ],
        "grammar": {
            "title": "自复被动句 (Pasiva Refleja)",
            "formula": "se + 复数动词 (se lanzaron toneladas)",
            "explanation": "西语中常用 se + 动词表示‘某物被做……’，动作执行者省略。",
            "sample_es": "Se lanzaron muchos tomates.",
            "sample_cn": "许多番茄被掷了出去。"
        },
        "quiz": {
            "question": "形容词「maduro」用来形容水果时表示？",
            "options": ["A. 酸涩的", "B. 腐烂的", "C. 成熟的"],
            "correct_index": 2,
            "explanation": "maduro 表示成熟。"
        }
    },
    {
        "tag": "电影 / 明星",
        "title": {
            "es": "Penélope Cruz y Javier Bardem deslumbran en la alfombra roja",
            "en": "Penélope Cruz and Javier Bardem dazzle on the red carpet",
            "cn": "07. 佩内洛普·克鲁兹夫妇合体走红毯，甜蜜互动羡煞众人！"
        },
        "intro": "西班牙最高国宝级明星夫妻亮相电影节，举手投足间展现优雅与深厚默契。",
        "sentences": [
            {
                "id": 1,
                "es": "La pareja de actores españoles Penélope Cruz y Javier Bardem brilló anoche en la gala de cine.",
                "en": "Spanish actor couple Penélope Cruz and Javier Bardem shone last night at the film gala.",
                "cn": "西班牙演员夫妻佩内洛普·克鲁兹和哈维尔·巴登昨晚在电影盛典上大放异彩。"
            },
            {
                "id": 2,
                "es": "Ambos compartieron miradas cómplices que cautivaron a los fotógrafos presentes.",
                "en": "Both shared complicit looks that captivated the photographers present.",
                "cn": "两人之间流露出的默契眼神令现场的所有摄影师为之着迷。"
            }
        ],
        "vocabulary": [
            {"id": "v7_1", "word": "brillar", "pos": "v.", "cn": "闪耀 / 出众", "en": "to shine", "example": "Las estrellas brillan.", "example_cn": "星星闪闪发光。"},
            {"id": "v7_2", "word": "la mirada", "pos": "f.", "cn": "眼神 / 目光", "en": "look / gaze", "example": "Una mirada dulce.", "example_cn": "温柔的目光。"}
        ],
        "grammar": {
            "title": "不定代词 ambos (两者都)",
            "formula": "ambos / ambas + 复数名词或直接作主语",
            "explanation": "ambos 相当于 los dos，指两个人或事物，具有强烈的书面优雅色彩。",
            "sample_es": "Ambos sonreían ante las cámaras.",
            "sample_cn": "两人都在镜头前微笑。"
        },
        "quiz": {
            "question": "名词「la mirada」来自哪个动词？",
            "options": ["A. mirífico", "B. mirar (看)", "C. marchar"],
            "correct_index": 1,
            "explanation": "mirar 是看，la mirada 是其衍生名词‘目光、眼神’。"
        }
    },
    {
        "tag": "生活 / 健康",
        "title": {
            "es": "La ciencia confirma que la siesta española mejora la memoria",
            "en": "Science confirms that the Spanish siesta improves memory",
            "cn": "08. 科学实锤：西班牙午睡真能大幅提升记忆力！"
        },
        "intro": "最新神经学研究表明，午饭后20分钟的西式小憩能让大脑工作效率翻倍。",
        "sentences": [
            {
                "id": 1,
                "es": "Un nuevo estudio científico ha revelado que dormir una siesta de veinte minutos aumenta la concentración.",
                "en": "A new scientific study has revealed that taking a twenty-minute nap increases focus.",
                "cn": "一项最新科学研究表明，睡上二十分钟的午觉能有效提高专注力。"
            },
            {
                "id": 2,
                "es": "Los expertos recomiendan esta costumbre tradicional para reducir el estrés del trabajo diario.",
                "en": "Experts recommend this traditional custom to reduce the stress of daily work.",
                "cn": "专家建议保持这一传统习俗，以减轻日常工作的压力。"
            }
        ],
        "vocabulary": [
            {"id": "v8_1", "word": "la costumbre", "pos": "f.", "cn": "习惯 / 风俗", "en": "custom / habit", "example": "Es una costumbre antigua.", "example_cn": "这是个古老习俗。"},
            {"id": "v8_2", "word": "recomendar", "pos": "v.", "cn": "推荐 / 建议", "en": "to recommend", "example": "Te recomiendo este libro.", "example_cn": "我向你推荐这本书。"}
        ],
        "grammar": {
            "title": "动词原形作主语 (Dormir la siesta...)",
            "formula": "动词原形 (infinitivo) + 谓语单数动词",
            "explanation": "在西语中，直接用动词原形作主语（如 dormir una siesta），动词视为阳性单数。",
            "sample_es": "Dormir bien es importante.",
            "sample_cn": "睡好觉很重要。"
        },
        "quiz": {
            "question": "动词「recomendar」是变位鞋子动词，它的现在时第一人称是？",
            "options": ["A. yo recomendo", "B. yo recomiendo", "C. yo recomiende"],
            "correct_index": 1,
            "explanation": "recomendar 发生 e -> ie 变位：yo recomiendo。"
        }
    },
    {
        "tag": "美食 / 旅行",
        "title": {
            "es": "Churros con chocolate: la dulce tradición nocturna de Madrid",
            "en": "Churros with chocolate: Madrid's sweet nocturnal tradition",
            "cn": "09. 西班牙小油条配浓热巧：马德里不夜城的甜美灵魂！"
        },
        "intro": "深夜造访百年老字号圣希内斯，蘸满浓郁黑巧的小油条温暖无数旅人的胃。",
        "sentences": [
            {
                "id": 1,
                "es": "En el corazón de Madrid, miles de visitantes disfrutan cada noche de los crujientes churros recién hechos.",
                "en": "In the heart of Madrid, thousands of visitors enjoy crispy freshly-made churros every night.",
                "cn": "在马德里市中心，数千名食客每晚都在享用刚出锅、香脆可口的西班牙小油条。"
            },
            {
                "id": 2,
                "es": "Bañar el churro en chocolate caliente es un placer culinario que nadie debería perderse.",
                "en": "Dipping the churro in hot chocolate is a culinary pleasure no one should miss.",
                "cn": "将油条浸入浓郁的热巧克力中，是任何人都绝不该错过的美食享受。"
            }
        ],
        "vocabulary": [
            {"id": "v9_1", "word": "crujiente", "pos": "adj.", "cn": "酥脆的", "en": "crispy", "example": "Pan muy crujiente.", "example_cn": "非常酥脆的面包。"},
            {"id": "v9_2", "word": "perderse", "pos": "v.", "cn": "错过 / 迷路", "en": "to miss out", "example": "No te lo pierdas.", "example_cn": "别错过它。"}
        ],
        "grammar": {
            "title": "debería + infinitivo 委婉建议",
            "formula": "debería (deber条件式) + 动词原形",
            "explanation": "debería 表示‘应当、最好……’，比 direct 的 debe 更加委婉、礼貌。",
            "sample_es": "Nadie debería perderse esta oportunidad.",
            "sample_cn": "任何人都不该错过这个机会。"
        },
        "quiz": {
            "question": "形容词「crujiente」用来形容食物时指？",
            "options": ["A. 滚烫的", "B. 酥脆的", "C. 软绵的"],
            "correct_index": 1,
            "explanation": "crujiente 专指酥脆的口感。"
        }
    },
    {
        "tag": "艺术 / 音乐",
        "title": {
            "es": "Una joven bailaora de flamenco conquista internet en Sevilla",
            "en": "A young flamenco dancer conquers the internet in Seville",
            "cn": "10. 塞维利亚街头小舞者一段弗拉门戈，震撼全球数亿网友！"
        },
        "intro": "19岁街头弗拉门戈舞者在西班牙广场激情踏步，纯正吉普赛风骨惊艳世界。",
        "sentences": [
            {
                "id": 1,
                "es": "Un video grabado en la Plaza de España de Sevilla ha acumulado millones de reproducciones en pocas horas.",
                "en": "A video recorded in Seville's Plaza de España has racked up millions of views in a few hours.",
                "cn": "一段在塞维利亚西班牙广场录制的视频，短短几小时内获得了数百万播放量。"
            },
            {
                "id": 2,
                "es": "La joven bailó con tanta pasión y fuerza que conmovió profundamente al público internacional.",
                "en": "The young girl danced with so much passion and strength that she deeply moved the international audience.",
                "cn": "年轻舞者以如此充沛的热情与力量起舞，深深触动了世界各地的观众。"
            }
        ],
        "vocabulary": [
            {"id": "v10_1", "word": "conmover", "pos": "v.", "cn": "打动 / 感动", "en": "to move emotionally", "example": "La historia conmovió a todos.", "example_cn": "故事打动了所有人。"},
            {"id": "v10_2", "word": "la pasión", "pos": "f.", "cn": "激情 / 热情", "en": "passion", "example": "Canta con mucha pasión.", "example_cn": "他饱含激情地歌唱。"}
        ],
        "grammar": {
            "title": "tanto/a... que... 结果状语从句",
            "formula": "con tanta + 名词 + que + 句子",
            "explanation": "tanta pasión que... 表示程度之深，直接引出结果从句，修饰阴性名词 pasión 用 tanta。",
            "sample_es": "Habló con tanta fuerza que todos escucharon.",
            "sample_cn": "他说话如此有力，以至于全场都在聆听。"
        },
        "quiz": {
            "question": "动词「conmover」属于 o -> ue 变位，它的现在时第三人称是？",
            "options": ["A. conmueve", "B. conmove", "C. conmovió"],
            "correct_index": 0,
            "explanation": "conmover 变位为 yo conmuevo, él/ella conmueve。"
        }
    }
]

async def generate_speech(text: str, filename: str, rate: str = "+0%"):
    path = os.path.join(AUDIOS_DIR, filename)
    voice = "es-ES-ElviraNeural"
    communicator = edge_tts.Communicate(text, voice, rate=rate)
    await communicator.save(path)
    print(f"  [TTS] {filename}")

def fetch_gemini_stories(today_str: str, api_key: str):
    """通过 Google 官方生成的标准 gemini-flash-latest 模型实时生成当天 10 篇三语西语热点早报"""
    candidate_models = [
        "gemini-flash-latest",
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-1.5-flash"
    ]
    
    prompt = f"""
Eres un redactor y profesor experto de español para estudiantes extranjeros.
Fecha de hoy: {today_str}.

Por favor, crea exactamente 10 noticias/tendencias/anécdotas BREVES, DIVERTIDAS y ACTUALES del mundo hispanohablante (España y Latinoamérica) para estudiantes de español (nivel A2-B1).
Temas variados: cultura pop, música (Rosalía, Shakira, Bad Bunny, etc.), deportes (fútbol, Alcaraz), festivales y tradiciones, gastronomía (tapas, churros, jamón), cine y series, curiosidades de la vida cotidiana.
El español debe ser claro, natural, ameno y moderno.

IMPORTANTE: Devuelve ÚNICAMENTE un array JSON válido con exactamente 10 objetos, sin bloques de markdown adicionales.
El esquema de cada objeto DEBE ser:
[
  {{
    "tag": "八卦 / 潮流",
    "title": {{
      "es": "Título en español",
      "en": "Title in English",
      "cn": "01. 中文大标题（编号 01 到 10）"
    }},
    "intro": "1-2句中文生动导读",
    "sentences": [
      {{
        "id": 1,
        "es": "Primera frase en español sencillo y claro.",
        "en": "English translation.",
        "cn": "中文翻译。"
      }},
      {{
        "id": 2,
        "es": "Segunda frase en español.",
        "en": "English translation.",
        "cn": "中文翻译。"
      }}
    ],
    "vocabulary": [
      {{
        "word": "palabra1",
        "pos": "n.m. / v. / adj.",
        "cn": "中文释义",
        "en": "English definition",
        "example": "Breve frase de ejemplo en español"
      }},
      {{
        "word": "palabra2",
        "pos": "adj.",
        "cn": "中文释义",
        "en": "English definition",
        "example": "Breve frase de ejemplo"
      }}
    ],
    "grammar": {{
      "point": "语法考点名称（如：现在完成时用法）",
      "detail": "中文简明解析"
    }},
    "quiz": {{
      "question": "西语小测验题目（围绕本文生词或语法）",
      "options": ["A. 正确选项", "B. 混淆选项1", "C. 混淆选项2"],
      "correct_index": 0,
      "explanation": "简要中文解析"
    }}
  }}
]
"""
    body = {
        "contents": [{
            "role": "user",
            "parts": [{"text": prompt}]
        }],
        "generationConfig": {
            "responseMimeType": "application/json",
            "temperature": 0.7
        }
    }
    data_bytes = json.dumps(body).encode("utf-8")

    last_error = None
    for model_name in candidate_models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent"
        headers = {
            "Content-Type": "application/json",
            "X-goog-api-key": api_key.strip(),
            "User-Agent": "Mozilla/5.0"
        }
        req = urllib.request.Request(url, data=data_bytes, headers=headers, method="POST")
        try:
            print(f"正在尝试调用 Google Gemini 模型: {model_name} ...")
            with urllib.request.urlopen(req, timeout=45) as resp:
                res_data = json.loads(resp.read().decode("utf-8"))
                raw_text = res_data["candidates"][0]["content"]["parts"][0]["text"].strip()
                
                if raw_text.startswith("```"):
                    raw_text = raw_text.split("\n", 1)[1]
                    if raw_text.endswith("```"):
                        raw_text = raw_text.rsplit("\n", 1)[0]
                
                parsed = json.loads(raw_text)
                stories = parsed if isinstance(parsed, list) else parsed.get("stories", [])
                
                if len(stories) < 10:
                    raise ValueError(f"Gemini 返回故事数量不足 10 篇 (仅返回 {len(stories)} 篇)")
                    
                valid_stories = []
                for i, s in enumerate(stories[:10], 1):
                    s_dict = dict(s)
                    s_dict["id"] = f"story_{i}"
                    s_dict["date"] = today_str
                    if "quiz" not in s_dict or not isinstance(s_dict["quiz"], dict):
                        v_word = s_dict.get("vocabulary", [{}])[0].get("word", "este término")
                        v_cn = s_dict.get("vocabulary", [{}])[0].get("cn", "该词含义")
                        s_dict["quiz"] = {
                            "question": f"西语单词「{v_word}」的中文含义是？",
                            "options": [f"A. {v_cn}", "B. 另一个意思", "C. 错误含义"],
                            "correct_index": 0,
                            "explanation": f"「{v_word}」的意思是：{v_cn}。"
                        }
                    valid_stories.append(s_dict)
                print(f"✓ 模型 {model_name} 调用成功！")
                return valid_stories
        except Exception as e:
            print(f"  模型 {model_name} 暂不可用: {e}")
            last_error = e

    raise last_error or RuntimeError("所有 Gemini 候选模型均调用失败")

def get_fallback_stories(today_str: str):
    """备用故事库：当未配置 API Key 或网络请求受限时无缝保底"""
    stories = []
    for idx, item in enumerate(TOPICS_POOL, 1):
        s = dict(item)
        s["id"] = f"story_{idx}"
        s["date"] = today_str
        stories.append(s)
    return stories

async def main():
    # 统一使用中国北京时间 (UTC+8)，确保国内用户早晨访问时看到当天最新日期
    tz_cst = datetime.timezone(datetime.timedelta(hours=8))
    today_str = datetime.datetime.now(tz_cst).strftime("%Y-%m-%d")
    print(f"开始更新 {today_str} 西语每日早报...")

    gemini_key = os.environ.get("GEMINI_API_KEY", "").strip()
    raw_stories = None

    if gemini_key:
        print("检测到已配置 GEMINI_API_KEY，正在呼叫 Google Gemini 生成今日全新 10 篇西语热点...")
        try:
            raw_stories = fetch_gemini_stories(today_str, gemini_key)
            print(f"✓ 成功通过 Google Gemini AI 生成了 {len(raw_stories)} 篇全新三语早报！")
        except Exception as e:
            print(f"⚠️ 呼叫 Gemini AI 接口异常 ({e})，自动切换为备用精选故事库...")
    else:
        print("未检测到 GEMINI_API_KEY 环境变量，使用内置精选故事库...")

    if not raw_stories:
        raw_stories = get_fallback_stories(today_str)

    stories = []
    for idx, item in enumerate(raw_stories, 1):
        s_id = f"story_{idx}"
        story = dict(item)
        story["id"] = s_id
        story["date"] = today_str
        story["audio_full_normal"] = f"./assets/audios/{s_id}_normal.mp3"
        story["audio_full_slow"] = f"./assets/audios/{s_id}_slow.mp3"

        full_text = " ".join([s["es"] for s in story["sentences"]])
        await generate_speech(full_text, f"{s_id}_normal.mp3", rate="+0%")
        await generate_speech(full_text, f"{s_id}_slow.mp3", rate="-25%")

        for j, sent in enumerate(story["sentences"], 1):
            fn = f"{s_id}_s{j}.mp3"
            sent["audio"] = f"./assets/audios/{fn}"
            await generate_speech(sent["es"], fn, rate="+0%")

        for k, v in enumerate(story["vocabulary"], 1):
            fn = f"vocab_{s_id}_{k}.mp3"
            v["audio"] = f"./assets/audios/{fn}"
            await generate_speech(v["word"], fn, rate="-10%")

        stories.append(story)

    # 1. 保存 data/daily_data.js
    js_content = f"// 每日 10 篇西语早报数据包\nconst DAILY_STORIES = {json.dumps(stories, ensure_ascii=False, indent=2)};\n\nmodule.exports = {{\n  DAILY_STORIES\n}};\n"
    with open(os.path.join(DATA_DIR, "daily_data.js"), "w", encoding="utf-8") as f:
        f.write(js_content)

    # 2. 调用 build_pages 自动编译 root index.html
    import build_pages
    print("正在重新编译 index.html 与 GitHub Pages 资源包...")
    html_content = build_pages.generate_html(is_root=True)
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(html_content)

    print(f"早报已更新至 {today_str}！全部 10 篇完成。")

if __name__ == "__main__":
    asyncio.run(main())
