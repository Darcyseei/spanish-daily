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
import time
import urllib.request
import urllib.error
import urllib.parse
import re
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


TOPICS_POOL_SET2 = [
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
                "cn": "西班牙网球选手卡洛斯·阿尔卡拉斯在一场激动人心的比赛后赢得了令人难忘的胜利。"
            },
            {
                "id": 2,
                "es": "Miles de aficionados celebraron su energía y pasión en las calles de su ciudad natal.",
                "en": "Thousands of fans celebrated his energy and passion in the streets of his hometown.",
                "cn": "数以千计的球迷在他家乡的街头庆祝他的活力与激情。"
            }
        ],
        "vocabulary": [
            {
                "word": "triunfo",
                "pos": "n.m.",
                "cn": "胜利，成功",
                "en": "triumph, victory",
                "example": "El equipo celebró un gran triunfo."
            },
            {
                "word": "emocionante",
                "pos": "adj.",
                "cn": "激动人心的，扣人心弦的",
                "en": "exciting, thrilling",
                "example": "Fue una película muy emocionante."
            }
        ],
        "grammar": {
            "point": "现在完成时用法（Pretérito Perfecto）",
            "detail": "ha conseguido 用于表示刚刚发生且与现在紧密相关的成就动作。"
        },
        "quiz": {
            "question": "单词「triunfo」的含义是？",
            "options": ["A. 胜利", "B. 失败", "C. 放弃"],
            "correct_index": 0,
            "explanation": "triunfo 表示胜利、成就。"
        }
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
                "cn": "标志性的圣家堂大教堂今天在其中心主塔上安装了十字架。"
            },
            {
                "id": 2,
                "es": "Turistas de todos los rincones del planeta contemplaron maravillados este momento único.",
                "en": "Tourists from all corners of the globe gazed in wonder at this unique moment.",
                "cn": "来自全球各地的游客无不惊叹地凝视着这一独特时刻。"
            }
        ],
        "vocabulary": [
            {
                "word": "emblemático",
                "pos": "adj.",
                "cn": "标志性的，象征性的",
                "en": "iconic, emblematic",
                "example": "Es un monumento emblemático de Madrid."
            },
            {
                "word": "contemplar",
                "pos": "v.",
                "cn": "凝视，观赏",
                "en": "to contemplate, to gaze at",
                "example": "Me gusta contemplar el atardecer."
            }
        ],
        "grammar": {
            "point": "简单过去时（Pretérito Indefinido）",
            "detail": "contemplaron 是 contemplar 的第三人称复数简单过去时，表示在过去的确定动作。"
        },
        "quiz": {
            "question": "动词「contemplar」的中文意思是？",
            "options": ["A. 凝视、观赏", "B. 奔跑", "C. 建筑"],
            "correct_index": 0,
            "explanation": "contemplar 意为静静注视或观赏。"
        }
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
                "cn": "西班牙足球运动员艾塔娜·邦马蒂再次荣膺负有盛名的金球奖。"
            },
            {
                "id": 2,
                "es": "En su discurso, agradeció el apoyo incondicional de sus compañeras de equipo y su familia.",
                "en": "In her speech, she thanked her teammates and family for their unconditional support.",
                "cn": "在致辞中，她衷心感谢了队友与家人的无私支持。"
            }
        ],
        "vocabulary": [
            {
                "word": "galardonar",
                "pos": "v.",
                "cn": "授予奖项，表彰",
                "en": "to award, to bestow a prize",
                "example": "La escritora fue galardonada por su novela."
            },
            {
                "word": "incondicional",
                "pos": "adj.",
                "cn": "无条件的，坚定的",
                "en": "unconditional",
                "example": "El amor incondicional de una madre."
            }
        ],
        "grammar": {
            "point": "被动语态用法（Voz Pasiva）",
            "detail": "ha sido galardonada 为现在完成时被动结构，主语是女性单数，过去分词配合用 -a 结尾。"
        },
        "quiz": {
            "question": "形容词「incondicional」表示？",
            "options": ["A. 无条件的", "B. 有限的", "C. 严格的"],
            "correct_index": 0,
            "explanation": "incondicional 由 in- + condicional 构成，表示无条件的。"
        }
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
                "cn": "这部备受欢迎的西班牙剧集的拍摄工作在塞纳河畔吸引了数百名粉丝聚集。"
            },
            {
                "id": 2,
                "es": "Los actores compartieron sonrisas y autógrafos con los jóvenes congregados desde primera hora.",
                "en": "The actors shared smiles and autographs with the youngsters gathered from early morning.",
                "cn": "演员们与一早就赶来的年轻人们微笑着签名合影互动。"
            }
        ],
        "vocabulary": [
            {
                "word": "rodaje",
                "pos": "n.m.",
                "cn": "拍电影，摄制",
                "en": "filming, shooting",
                "example": "El rodaje de la película durará tres meses."
            },
            {
                "word": "congregar",
                "pos": "v.",
                "cn": "聚集，召集",
                "en": "to gather, to assemble",
                "example": "El concierto congregó a miles de personas."
            }
        ],
        "grammar": {
            "point": "固定介词搭配（desde primera hora）",
            "detail": "desde primera hora 是一句常用地道西语习惯表达，意为“从一大早开始”。"
        },
        "quiz": {
            "question": "单词「rodaje」是指？",
            "options": ["A. 电影/剧集拍摄", "B. 汽车驾驶", "C. 剧本创作"],
            "correct_index": 0,
            "explanation": "el rodaje 专门指影视作品的拍摄现场或录制过程。"
        }
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
                "cn": "在会议宫举行的年度盛典上，西班牙语音乐绽放出了夺目光芒。"
            },
            {
                "id": 2,
                "es": "Grandes estrellas internacionales rindieron tributo a los ritmos tradicionales del sur de España.",
                "en": "Great international stars paid tribute to the traditional rhythms of southern Spain.",
                "cn": "多位国际巨星向西班牙南部的传统节奏致以崇高敬意。"
            }
        ],
        "vocabulary": [
            {
                "word": "brillar",
                "pos": "v.",
                "cn": "发光，闪耀，出彩",
                "en": "to shine, to glow",
                "example": "Las estrellas brillan en el cielo nocturno."
            },
            {
                "word": "tributo",
                "pos": "n.m.",
                "cn": "致敬，贡品",
                "en": "tribute, homage",
                "example": "Rendir tributo a un gran maestro."
            }
        ],
        "grammar": {
            "point": "常用短语动词 rendir tributo a",
            "detail": "rendir tributo a ... 意为“向……致敬”，后接人或事物。"
        },
        "quiz": {
            "question": "短语「rendir tributo」的含义是？",
            "options": ["A. 致敬", "B. 缴纳罚款", "C. 告别"],
            "correct_index": 0,
            "explanation": "rendir tributo a 表示向某人或传统表达崇敬与致敬。"
        }
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
                "cn": "火腿切肉大师们展示了每一片晶莹薄片都是多年苦练的成果。"
            },
            {
                "id": 2,
                "es": "Este tesoro gastronómico español es apreciado en las mejores mesas de todo el mundo.",
                "en": "This Spanish gastronomic treasure is appreciated on the finest tables across the world.",
                "cn": "这一西班牙美食国宝在全球最顶级的餐桌上广受赞誉。"
            }
        ],
        "vocabulary": [
            {
                "word": "loncha",
                "pos": "n.f.",
                "cn": "薄片（火腿、奶酪等）",
                "en": "slice, thin rasher",
                "example": "Córtame una loncha fina de jamón, por favor."
            },
            {
                "word": "gastronómico",
                "pos": "adj.",
                "cn": "美食的，烹饪的",
                "en": "gastronomic, culinary",
                "example": "Es una ruta gastronómica muy famosa."
            }
        ],
        "grammar": {
            "point": "名词阴阳性搭配（loncha fina）",
            "detail": "loncha 为阴性名词，修饰的形容词 fino 变为 fina。"
        },
        "quiz": {
            "question": "切火腿时说的「loncha」是指？",
            "options": ["A. 薄片", "B. 大块肉", "C. 刀具"],
            "correct_index": 0,
            "explanation": "una loncha de jamón 专门指切好的火腿薄片。"
        }
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
                "cn": "数百家独立书店通宵营业直至深夜，共同庆祝阅读的纯粹乐趣。"
            },
            {
                "id": 2,
                "es": "Familias y jóvenes disfrutaron de conciertos acústicos y firmas de autores bajo la luz de las velas.",
                "en": "Families and youngsters enjoyed acoustic concerts and author signings under candlelight.",
                "cn": "家庭与年轻人一同在温馨烛光下享受原声音乐会与作家签售。"
            }
        ],
        "vocabulary": [
            {
                "word": "permanecer",
                "pos": "v.",
                "cn": "保持，停留，持续",
                "en": "to remain, to stay",
                "example": "La tienda permaneció abierta todo el día."
            },
            {
                "word": "placer",
                "pos": "n.m.",
                "cn": "乐趣，快感",
                "en": "pleasure, joy",
                "example": "Es un gran placer conocerte."
            }
        ],
        "grammar": {
            "point": "动词短语 disfrutar de",
            "detail": "disfrutar 习惯后接介词 de，意为“享受、品味某事”。"
        },
        "quiz": {
            "question": "短语「es un placer」通常用来表示？",
            "options": ["A. 这是我的荣幸/乐趣", "B. 对不起", "C. 没时间"],
            "correct_index": 0,
            "explanation": "es un placer 意为“很荣幸、这是我的乐事”。"
        }
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
                "cn": "这座著名的巴利阿里群岛岛屿正吸引着渴望远离日常压力的旅行者。"
            },
            {
                "id": 2,
                "es": "Caminar junto al mar turquesa al atardecer se ha convertido en la actividad favorita de muchos visitantes.",
                "en": "Walking beside the turquoise sea at sunset has become the favorite activity of many visitors.",
                "cn": "黄昏时分漫步在碧绿清澈的海边已成为许多游客最喜爱的放松方式。"
            }
        ],
        "vocabulary": [
            {
                "word": "desconectar",
                "pos": "v.",
                "cn": "放松，脱离日常纷扰",
                "en": "to disconnect, to unwind",
                "example": "El fin de semana desconecto del trabajo."
            },
            {
                "word": "atardecer",
                "pos": "n.m.",
                "cn": "黄昏，日落时分",
                "en": "sunset, dusk",
                "example": "Vimos un hermoso atardecer en la playa."
            }
        ],
        "grammar": {
            "point": "动名词作主语（Caminar junto al mar...）",
            "detail": "动词原形 caminar 可直接充当主语，相当于名词“散步这件事”。"
        },
        "quiz": {
            "question": "单词「atardecer」是指一天的哪个时刻？",
            "options": ["A. 黄昏日落", "B. 清晨日出", "C. 正午时分"],
            "correct_index": 0,
            "explanation": "el atardecer 指下午向夜晚过渡的日落黄昏时刻。"
        }
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
                "cn": "莱昂内尔·梅西与妻子安东内拉在佛罗里达休假期间发布了一张温馨甜蜜的合照。"
            },
            {
                "id": 2,
                "es": "La pareja, que lleva junta desde la adolescencia, recibió millones de mensajes cariñosos de admiradores.",
                "en": "The couple, who have been together since adolescence, received millions of affectionate messages from fans.",
                "cn": "这对从青葱少年时期就在一起的模范夫妻收到了全球粉丝数以百万计的深情祝福。"
            }
        ],
        "vocabulary": [
            {
                "word": "tierno",
                "pos": "adj.",
                "cn": "温柔的，甜蜜温情的",
                "en": "tender, sweet",
                "example": "Es un momento muy tierno entre los dos."
            },
            {
                "word": "cariñoso",
                "pos": "adj.",
                "cn": "充满爱意的，亲切的",
                "en": "affectionate, loving",
                "example": "Recibió un abrazo muy cariñoso."
            }
        ],
        "grammar": {
            "point": "短语 llevar + 副词/时间 + desde",
            "detail": "lleva junta desde la adolescencia 表示“从青春期起就一直在一起”。"
        },
        "quiz": {
            "question": "形容词「tierno」的含义是？",
            "options": ["A. 温柔甜蜜的", "B. 苦涩的", "C. 愤怒的"],
            "correct_index": 0,
            "explanation": "tierno 表示温柔、充满爱意的。"
        }
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
                "cn": "今天西班牙国内消耗的电力中，有超过百分之六十来自于可再生能源。"
            },
            {
                "id": 2,
                "es": "Los expertos destacan que este avance sitúa a España como líder en la transición ecológica europea.",
                "en": "Experts highlight that this progress positions Spain as a leader in Europe's ecological transition.",
                "cn": "专家们指出，这一重大飞跃使西班牙成为欧洲生态转型中的领头羊。"
            }
        ],
        "vocabulary": [
            {
                "word": "renovable",
                "pos": "adj.",
                "cn": "可再生的",
                "en": "renewable",
                "example": "La energía solar es una fuente renovable."
            },
            {
                "word": "destacar",
                "pos": "v.",
                "cn": "强调，指出，突出",
                "en": "to highlight, to emphasize",
                "example": "El informe destaca la importancia del proyecto."
            }
        ],
        "grammar": {
            "point": "动词短语 proceder de",
            "detail": "proceder de 意为“来源于、出自”，与 venir de 类似但更加正式规范。"
        },
        "quiz": {
            "question": "单词「renovable」常用于哪个领域？",
            "options": ["A. 可再生能源", "B. 古典文学", "C. 烹饪烘焙"],
            "correct_index": 0,
            "explanation": "energía renovable 意为可再生能源。"
        }
    }
]



TOPICS_POOL_SET3 = [
    {
        "tag": "体育 / 巅峰",
        "title": {
            "es": "El Clásico mundial: Real Madrid y Barcelona paralizan el planeta",
            "en": "The World Classic: Real Madrid and Barcelona paralyze the planet",
            "cn": "01. 国家德比巅峰对决：皇马与巴萨上演世纪大战，全球球迷彻夜狂欢！"
        },
        "intro": "足坛最高水平的世纪德比在伯纳乌球场震撼上演，年轻新星绝杀进球引爆全球社交网络。",
        "sentences": [
            {
                "id": 1,
                "es": "El enfrentamiento entre los dos gigantes del fútbol español ofreció noventa minutos de pura intensidad.",
                "en": "The clash between the two giants of Spanish football offered ninety minutes of pure intensity.",
                "cn": "这两家西班牙足球豪门之间的正面对决奉献了整整九十分钟令人屏息的高强度较量。"
            },
            {
                "id": 2,
                "es": "Los aficionados de todo el mundo vibraron con las jugadas espectaculares de las jóvenes promesas.",
                "en": "Fans all over the world were thrilled by the spectacular plays of the young prospects.",
                "cn": "全球球迷为年轻新星们令人惊叹的精彩配合而欢呼雀跃。"
            }
        ],
        "vocabulary": [
            {
                "word": "enfrentamiento",
                "pos": "n.m.",
                "cn": "对决，交锋",
                "en": "clash, confrontation",
                "example": "El enfrentamiento de anoche fue memorable."
            },
            {
                "word": "espectacular",
                "pos": "adj.",
                "cn": "壮观的，精彩绝伦的",
                "en": "spectacular, dramatic",
                "example": "Un gol espectacular desde el centro del campo."
            }
        ],
        "grammar": {
            "point": "简单过去时表达完成事件（ofreció / vibraron）",
            "detail": "ofrecer 变位为 ofreció；vibrar 变位为 vibraron，叙述已发生历史比赛。"
        },
        "quiz": {
            "question": "单词「enfrentamiento」表示什么含义？",
            "options": ["A. 对决、交锋", "B. 合作、协助", "C. 放弃、退赛"],
            "correct_index": 0,
            "explanation": "enfrentamiento 指双方正面对峙或激烈交锋。"
        }
    },
    {
        "tag": "艺术 / 潮流",
        "title": {
            "es": "El Museo del Prado abre de noche gratis y conquista a los jóvenes",
            "en": "The Prado Museum opens at night for free and wins over young crowds",
            "cn": "02. 普拉多博物馆首次深夜免费开放，马德里年轻人排长队打卡世界名画！"
        },
        "intro": "世界顶尖艺术殿堂打破常规在星光下开门迎客，古典油画与现代潮流在马德里深夜交汇。",
        "sentences": [
            {
                "id": 1,
                "es": "Miles de personas hicieron cola pacientemente para contemplar las obras maestras de Velázquez y Goya bajo la luz nocturna.",
                "en": "Thousands of people queued patiently to gaze upon the masterpieces of Velázquez and Goya under the night light.",
                "cn": "成千上万的人在夜幕下耐心排起长队，只为亲眼一睹委拉斯凯兹与戈雅的传世名作。"
            },
            {
                "id": 2,
                "es": "Esta iniciativa cultural busca acercar el patrimonio histórico a las nuevas generaciones de una forma amena.",
                "en": "This cultural initiative aims to bring historical heritage closer to new generations in an enjoyable way.",
                "cn": "这项文化举措旨在以生动亲切的方式拉近历史文化遗产与年轻一代的距离。"
            }
        ],
        "vocabulary": [
            {
                "word": "hacer cola",
                "pos": "fr.",
                "cn": "排队",
                "en": "to queue, to stand in line",
                "example": "Tuvimos que hacer cola durante una hora para entrar."
            },
            {
                "word": "patrimonio",
                "pos": "n.m.",
                "cn": "文化遗产，财富",
                "en": "heritage, legacy",
                "example": "España cuenta con un rico patrimonio histórico."
            }
        ],
        "grammar": {
            "point": "常用短语动词 acercar ... a ...",
            "detail": "acercar 表示“使靠近、拉近距离”，搭配介词 a。"
        },
        "quiz": {
            "question": "短语「hacer cola」的意思是？",
            "options": ["A. 排队", "B. 缝衣服", "C. 快速奔跑"],
            "correct_index": 0,
            "explanation": "hacer cola 是西语中极为日常地道的“排队”表达。"
        }
    },
    {
        "tag": "美食 / 骄傲",
        "title": {
            "es": "La auténtica Paella Valenciana conquista el reconocimiento mundial",
            "en": "Authentic Valencian Paella conquers global recognition",
            "cn": "03. 瓦伦西亚海鲜饭火爆全球：全球名厨齐聚西班牙共烹“锅巴灵魂”！"
        },
        "intro": "西班牙最负盛名的传统稻米盛宴迎来国际烹饪大赛，金黄酥脆的 socarrat 锅巴成为全场焦点。",
        "sentences": [
            {
                "id": 1,
                "es": "Cocineros de más de treinta países compitieron en Valencia utilizando ingredientes frescos y leña de naranjo.",
                "en": "Chefs from more than thirty countries competed in Valencia using fresh ingredients and orange wood.",
                "cn": "来自三十多个国家的厨师齐聚瓦伦西亚，选用最地道的新鲜食材与橙木柴火同台竞技。"
            },
            {
                "id": 2,
                "es": "El secreto de una buena paella reside en el punto exacto del arroz y el fuego lento.",
                "en": "The secret of a great paella lies in the exact cooking of the rice and the gentle simmer.",
                "cn": "一锅顶尖海鲜饭的秘诀在于稻米的恰当火候与温和文火慢煨。"
            }
        ],
        "vocabulary": [
            {
                "word": "ingrediente",
                "pos": "n.m.",
                "cn": "配料，原料",
                "en": "ingredient",
                "example": "El azafrán es un ingrediente esencial."
            },
            {
                "word": "leña",
                "pos": "n.f.",
                "cn": "木柴，柴火",
                "en": "firewood",
                "example": "Cocinamos la comida con leña en el campo."
            }
        ],
        "grammar": {
            "point": "短语动词 residir en",
            "detail": "residir en 此处并非指“居住在”，而是引申为“在于、存在于某处关键点”。"
        },
        "quiz": {
            "question": "单词「leña」指的是？",
            "options": ["A. 木柴", "B. 调味盐", "C. 平底锅"],
            "correct_index": 0,
            "explanation": "la leña 是做传统西班牙海鲜饭必不可少的柴火。"
        }
    },
    {
        "tag": "音乐 / 盛典",
        "title": {
            "es": "Shakira anuncia nuevas fechas de conciertos y desata la euforia",
            "en": "Shakira announces new concert dates and sparks euphoria",
            "cn": "04. 夏奇拉加开巡回演唱会，万张门票瞬间秒罄引发全网狂欢！"
        },
        "intro": "拉丁天后宣布将在西班牙与拉美多国加开十余场大型体育场演唱会，歌迷热情彻底点燃。",
        "sentences": [
            {
                "id": 1,
                "es": "La cantante colombiana confirmó a través de sus redes sociales que ampliará su gira internacional.",
                "en": "The Colombian singer confirmed through her social media that she will expand her international tour.",
                "cn": "这位哥伦比亚天后通过社交媒体确认她将大幅拓展自己的全球巡回演出版图。"
            },
            {
                "id": 2,
                "es": "Millones de seguidores intentaron adquirir sus entradas en cuestión de pocos minutos.",
                "en": "Millions of followers tried to acquire their tickets in a matter of a few minutes.",
                "cn": "数以百万计的歌迷在短短几分钟内同时涌入购票平台抢购门票。"
            }
        ],
        "vocabulary": [
            {
                "word": "adquirir",
                "pos": "v.",
                "cn": "获得，购得",
                "en": "to acquire, to purchase",
                "example": "Quiero adquirir una entrada para el concierto."
            },
            {
                "word": "en cuestión de",
                "pos": "fr.",
                "cn": "在……之内，仅仅在……之间",
                "en": "in a matter of",
                "example": "Todo cambió en cuestión de segundos."
            }
        ],
        "grammar": {
            "point": "动词 adquirir 的变位特点",
            "detail": "adquirir 在现在时变位时词干 i 变为 ie：yo adquiero, tú adquieres。"
        },
        "quiz": {
            "question": "短语「en cuestión de minutos」表示？",
            "options": ["A. 在短短数分钟内", "B. 提出关于时间的问题", "C. 耗费很长时间"],
            "correct_index": 0,
            "explanation": "en cuestión de + 时间 表示“仅仅在很短的时间之内”。"
        }
    },
    {
        "tag": "传奇 / 温情",
        "title": {
            "es": "Rafa Nadal inspira a las futuras promesas en su academia de Mallorca",
            "en": "Rafa Nadal inspires future prospects at his Mallorca academy",
            "cn": "05. 纳达尔现身马略卡网校亲授球技，传奇球王寄语感动无数球迷！"
        },
        "intro": "红土之王身着训练服亲自走上球场给年轻小学员纠正动作，分享三十年坚毅拼搏的运动精神。",
        "sentences": [
            {
                "id": 1,
                "es": "El legendario tenista mallorquín dedicó la mañana a entrenar con jóvenes talentos llegados de todo el planeta.",
                "en": "The legendary Mallorcan tennis player dedicated the morning to training with young talents from all over the planet.",
                "cn": "这位传奇马略卡网球大师将整个上午用于陪伴来自世界各地的年轻天才学员训练。"
            },
            {
                "id": 2,
                "es": "Les transmitió que el esfuerzo diario y la humildad son más importantes que cualquier trofeo.",
                "en": "He conveyed to them that daily effort and humility are more important than any trophy.",
                "cn": "他真诚地告诉孩子们，日复一日的汗水付出与谦逊态度远比任何冠军奖杯都更为珍贵。"
            }
        ],
        "vocabulary": [
            {
                "word": "humildad",
                "pos": "n.f.",
                "cn": "谦逊，低调",
                "en": "humility, modesty",
                "example": "La humildad es la cualidad de los grandes campeones."
            },
            {
                "word": "transmitir",
                "pos": "v.",
                "cn": "传递，传达",
                "en": "to transmit, to convey",
                "example": "El maestro transmitió su pasión por el arte."
            }
        ],
        "grammar": {
            "point": "间接宾语代词 les 的用法",
            "detail": "Les transmitió que... 中的 les 指代复数听众“给孩子们传达”。"
        },
        "quiz": {
            "question": "名词「humildad」的中文含义是？",
            "options": ["A. 谦逊", "B. 骄傲", "C. 幽默"],
            "correct_index": 0,
            "explanation": "humildad 表示不骄不躁的谦逊与谦卑品德。"
        }
    },
    {
        "tag": "生活 / 惬意",
        "title": {
            "es": "La cultura del aperitivo al sol triunfa en las terrazas de Madrid",
            "en": "The sunshine aperitif culture triumphs on Madrid terraces",
            "cn": "06. 阳光下的西班牙午后：小酒馆露天座座无虚席，开胃酒慢生活治愈全城！"
        },
        "intro": "点一杯冰爽的苦艾酒配上香脆橄榄与土豆蛋饼，西班牙人最懂如何在阳光露天座里享受生活。",
        "sentences": [
            {
                "id": 1,
                "es": "Al llegar el fin de semana, amigos y familias se reúnen en las plazas para tomar un vermut artesanal con aceitunas.",
                "en": "When the weekend arrives, friends and families gather in the squares to have an artisan vermouth with olives.",
                "cn": "周末一到，亲朋好友纷纷相约在阳光明媚的广场露天座，品尝手作苦艾酒与腌水榄。"
            },
            {
                "id": 2,
                "es": "Esta costumbre tan típica de charlar sin prisas representa la verdadera esencia de la alegría mediterránea.",
                "en": "This typical custom of unhurried conversation represents the true essence of Mediterranean joy.",
                "cn": "这种不疾不徐促膝长谈的悠闲生活方式，完美体现了地中海式松弛与欢愉的精髓。"
            }
        ],
        "vocabulary": [
            {
                "word": "sin prisas",
                "pos": "fr.",
                "cn": "不慌不忙，悠闲地",
                "en": "without haste, unhurried",
                "example": "Caminamos por el parque sin prisas."
            },
            {
                "word": "esencia",
                "pos": "n.f.",
                "cn": "本质，精髓",
                "en": "essence",
                "example": "Capturó la verdadera esencia del lugar."
            }
        ],
        "grammar": {
            "point": "结构 al + 动词原形 表示“当……的时候”",
            "detail": "Al llegar el fin de semana 相当于 Cuando llega el fin de semana，表达更加精练优雅。"
        },
        "quiz": {
            "question": "短语「sin prisas」表示什么心态？",
            "options": ["A. 悠闲自在，不急躁", "B. 匆匆忙忙", "C. 感到悲伤"],
            "correct_index": 0,
            "explanation": "prisa 是匆忙，sin prisas 就是悠哉游哉、不紧不慢。"
        }
    },
    {
        "tag": "旅游 / 奇迹",
        "title": {
            "es": "La Alhambra de Granada ilumina sus fuentes con magia nocturna",
            "en": "Granada's Alhambra illuminates its fountains with night magic",
            "cn": "07. 格拉纳达阿尔罕布拉宫开启夜间光影秀，阿拉伯喷泉与星空美如幻境！"
        },
        "intro": "世界文化遗产阿宫推出全新沉浸式夜游，微波荡漾的桃金娘中庭在幽兰光影下宛如天方夜谭。",
        "sentences": [
            {
                "id": 1,
                "es": "Los antiguos palacios nazaríes abrieron sus puertas bajo las estrellas para ofrecer una experiencia mágica.",
                "en": "The ancient Nasrid palaces opened their doors under the stars to offer a magical experience.",
                "cn": "古老的纳斯里德王宫在浩瀚星空下敞开大门，为游人呈现出一场如梦似幻的奇妙体验。"
            },
            {
                "id": 2,
                "es": "El susurro del agua en los patios históricos cautivó a los visitantes de todas las nacionalidades.",
                "en": "The whisper of water in the historic courtyards captivated visitors of all nationalities.",
                "cn": "历史中庭内潺潺作响的灵动水声令来自世界各国的游客沉醉其中久久流连。"
            }
        ],
        "vocabulary": [
            {
                "word": "susurro",
                "pos": "n.m.",
                "cn": "潺潺流水声，低语",
                "en": "whisper, murmur",
                "example": "El susurro del viento entre los árboles."
            },
            {
                "word": "cautivar",
                "pos": "v.",
                "cn": "迷住，吸引，征服",
                "en": "to captivate, to charm",
                "example": "Su hermosa voz cautivó al público."
            }
        ],
        "grammar": {
            "point": "动词 cautivar 的过去时变位",
            "detail": "cautivó 是第三人称单数简单过去时，主语为 el susurro del agua。"
        },
        "quiz": {
            "question": "单词「susurro」一般形容什么声音？",
            "options": ["A. 轻声低语或细水潺潺", "B. 巨大的爆炸声", "C. 汽车鸣笛声"],
            "correct_index": 0,
            "explanation": "el susurro 是轻柔优美的细微低吟或水声。"
        }
    },
    {
        "tag": "趣闻 / 爆笑",
        "title": {
            "es": "Un gato travieso interrumpe un telediario en directo y enamora a internet",
            "en": "A mischievous cat interrupts a live news broadcast and charms the internet",
            "cn": "08. 西班牙电视台直播突发“猫咪入侵”，主播憋笑播报萌翻千万网友！"
        },
        "intro": "一只贪玩的灰猫趁演播室换景溜进镜头并淡定趴在提词器前，严肃的新闻直播秒变大型吸猫现场。",
        "sentences": [
            {
                "id": 1,
                "es": "Durante la emisión de las noticias del mediodía, un simpático felino apareció caminando sobre la mesa del presentador.",
                "en": "During the midday news broadcast, a cute feline appeared walking across the presenter's desk.",
                "cn": "在午间新闻的电视直播过程中，一只调皮可爱的小猫突然大摇大摆地漫步在主播台上。"
            },
            {
                "id": 2,
                "es": "El periodista mantuvo la calma con una sonrisa y el vídeo se convirtió en lo más visto del día.",
                "en": "The journalist kept his composure with a smile and the video became the most watched clip of the day.",
                "cn": "主持人忍俊不禁地保持了镇定与微笑，该片段瞬间成为当天全网播放量最高的短视频。"
            }
        ],
        "vocabulary": [
            {
                "word": "felino",
                "pos": "n.m. / adj.",
                "cn": "猫科动物，猫咪",
                "en": "feline, cat",
                "example": "Los gatos son felinos fascinantes."
            },
            {
                "word": "mantener la calma",
                "pos": "fr.",
                "cn": "保持镇定，保持冷静",
                "en": "to keep calm, stay cool",
                "example": "Hay que mantener la calma en todo momento."
            }
        ],
        "grammar": {
            "point": "动词 mantener 的不规则简单过去时",
            "detail": "mantener 过去时与 tener 一致：él mantuvo，变位特殊需熟记。"
        },
        "quiz": {
            "question": "短语「mantener la calma」的意思是？",
            "options": ["A. 保持冷静沉着", "B. 大声吵闹", "C. 快速逃跑"],
            "correct_index": 0,
            "explanation": "mantener la calma 意为临危不乱、处变不惊。"
        }
    },
    {
        "tag": "语言 / 文化",
        "title": {
            "es": "El idioma español supera los 600 millones de hablantes en el mundo",
            "en": "The Spanish language surpasses 600 million speakers worldwide",
            "cn": "09. 最新塞万提斯报告：全球西语人口突破6亿，成为世界第二大母语！"
        },
        "intro": "西语学习热潮席卷五大洲，不论是流行音乐、影视文化还是国际商务，西班牙语影响力持续攀升。",
        "sentences": [
            {
                "id": 1,
                "es": "El nuevo anuario del Instituto Cervantes confirma el impresionante crecimiento global de la lengua española.",
                "en": "The new Instituto Cervantes yearbook confirms the impressive global growth of the Spanish language.",
                "cn": "塞万提斯学院最新发布的年报证实了西班牙语在世界范围内的惊人迅猛增长势头。"
            },
            {
                "id": 2,
                "es": "Cada año, millones de estudiantes eligen el español atraídos por su riqueza cultural y calidez humana.",
                "en": "Every year, millions of students choose Spanish attracted by its cultural richness and human warmth.",
                "cn": "每年都有数以百万计的学子被西语浓厚的文化底蕴与热情好客的人文魅力所吸引而投身学习。"
            }
        ],
        "vocabulary": [
            {
                "word": "crecimiento",
                "pos": "n.m.",
                "cn": "增长，发展",
                "en": "growth, increase",
                "example": "El crecimiento económico del país."
            },
            {
                "word": "calidez",
                "pos": "n.f.",
                "cn": "温情，温暖",
                "en": "warmth, friendliness",
                "example": "Agradezco la calidez con la que me recibieron."
            }
        ],
        "grammar": {
            "point": "动词 elegir 的变位与搭配",
            "detail": "elegir 发生 e -> i 变位：ellos eligen，意为“选择”。"
        },
        "quiz": {
            "question": "名词「calidez」通常用来形容？",
            "options": ["A. 热情与温暖", "B. 严寒与冷漠", "C. 速度与敏捷"],
            "correct_index": 0,
            "explanation": "calidez humana 专门形容人与人之间的温暖与真挚热情。"
        }
    },
    {
        "tag": "科技 / 出行",
        "title": {
            "es": "La Alta Velocidad conecta España y Francia con billetes accesibles",
            "en": "High Speed connects Spain and France with affordable tickets",
            "cn": "10. 西班牙高铁直通法国低价票开抢，跨国“一日生活圈”引爆欧洲旅行潮！"
        },
        "intro": "舒适环保的跨国高铁列车成为欧陆出行新宠，从马德里、巴塞罗那一路向北饱览比利牛斯山壮丽风光。",
        "sentences": [
            {
                "id": 1,
                "es": "Los nuevos trenes de alta velocidad permiten viajar cómodamente entre las principales ciudades europeas sin contaminar.",
                "en": "The new high-speed trains allow comfortable travel between major European cities without polluting.",
                "cn": "全新的高速动车组让旅客能够在各大欧洲核心城市之间舒适穿梭，同时兼顾零碳低排放环保理念。"
            },
            {
                "id": 2,
                "es": "Los viajeros celebran la comodidad de contemplar el paisaje montañoso mientras disfrutan de wifi gratuito.",
                "en": "Travelers celebrate the comfort of admiring the mountain scenery while enjoying free Wi-Fi.",
                "cn": "旅客们对在车厢内一边饱览沿途巍峨雪山风光、一边享受免费高速无线网络的惬意赞不绝口。"
            }
        ],
        "vocabulary": [
            {
                "word": "cómodamente",
                "pos": "adv.",
                "cn": "舒适地，惬意地",
                "en": "comfortably",
                "example": "Viajamos muy cómodamente en el tren."
            },
            {
                "word": "contaminar",
                "pos": "v.",
                "cn": "污染",
                "en": "to pollute, to contaminate",
                "example": "Es importante no contaminar el medio ambiente."
            }
        ],
        "grammar": {
            "point": "短语 mientras + 动词 进行时态",
            "detail": "mientras disfrutan 表示“在……的同时”，用于表示两件事同时进行。"
        },
        "quiz": {
            "question": "副词「cómodamente」是由哪个形容词变来的？",
            "options": ["A. cómodo (舒适的)", "B. común (普通的)", "C. cómico (滑稽的)"],
            "correct_index": 0,
            "explanation": "形容词阴性形式 cómoda + -mente 构成副词 cómodamente。"
        }
    }
]


def fetch_gemini_stories(today_str: str, api_key: str):
    """通过 Google 官方生成的标准 gemini-flash-latest 模型实时生成当天 10 篇三语西语热点早报"""
    candidate_models = [
        "gemini-3.8-flash",
        "gemini-3.1-flash-lite",
        "gemini-2.5-flash-lite",
        "gemini-3.7-flash",
        "gemini-3.5-flash",
        "gemini-flash-latest"
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
        for attempt in range(1, 4):
            try:
                print(f"正在尝试调用 Google Gemini 模型: {model_name} (第 {attempt} 次) ...")
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
            except urllib.error.HTTPError as e:
                if e.code == 503 and attempt < 3:
                    print(f"  Google 节点短时繁忙 (503 Service Unavailable)，等待 {attempt * 3} 秒后自动重试...")
                    time.sleep(attempt * 3)
                    continue
                print(f"  模型 {model_name} 暂不可用: {e}")
                last_error = e
                break
            except Exception as e:
                print(f"  模型 {model_name} 暂不可用: {e}")
                last_error = e
                break

    raise last_error or RuntimeError("所有 Gemini 候选模型均调用失败")

def get_fallback_stories(today_str: str):
    """根据日期自动轮换备选故事集，确保每天故事绝不重样"""
    try:
        day = int(today_str.split("-")[-1])
    except Exception:
        day = 1
    # 轮换 3 大精编热点库，8 号取 set3，9 号取 set1，10 号取 set2，绝不每天重复
    pools = [TOPICS_POOL, TOPICS_POOL_SET2, TOPICS_POOL_SET3]
    # 8 % 3 = 2 -> 选取 TOPICS_POOL_SET3
    pool = pools[day % len(pools)]
    stories = []
    for idx, item in enumerate(pool, 1):
        s = dict(item)
        s["id"] = f"story_{idx}"
        s["date"] = today_str
        stories.append(s)
    return stories


STOPWORDS = {
    "porque", "cuando", "donde", "aunque", "durante", "después", "entonces", "también",
    "además", "siempre", "primer", "primera", "segundo", "segunda", "tercero", "algunos",
    "muchos", "muchas", "varios", "varias", "estaban", "habían", "fueron", "tienen",
    "hacer", "decir", "tener", "estar", "haber", "poder", "nosotros", "ustedes", "aquellos"
}

def translate_text(text: str, target_lang: str) -> str:
    """双通道高可靠翻译（西班牙语 -> 中文/英语），自动防封禁与多层回退"""
    if not text or not text.strip():
        return ""
    text = text.strip()
    q = urllib.parse.quote(text)

    # 通道 1: 官方 Chrome 扩展字典与翻译接口 (全球高可用、云服务器零拦截)
    try:
        url = f"https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=es&tl={target_lang}&q={q}"
        req = urllib.request.Request(url, headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
        })
        with urllib.request.urlopen(req, timeout=8) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            res = ""
            if isinstance(data, list) and len(data) > 0:
                if isinstance(data[0], str):
                    res = " ".join(data).strip()
                elif isinstance(data[0], list):
                    res = "".join([item[0] for item in data if item and isinstance(item, list) and item[0]]).strip()
                else:
                    res = str(data[0]).strip()
            if res:
                if target_lang.startswith("zh") and re.search(r'[一-鿿]', res):
                    return res
                elif target_lang == "en" and (len(text) < 15 or res.lower() != text.lower()):
                    return res
    except Exception:
        pass

    # 通道 2: MyMemory Translated 国际翻译接口 (备用通道)
    try:
        pair = "es|zh-CN" if target_lang.startswith("zh") else "es|en"
        url = f"https://api.mymemory.translated.net/get?q={q}&langpair={pair}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=8) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            trans = data.get("responseData", {}).get("translatedText", "").strip()
            if trans:
                if target_lang.startswith("zh") and re.search(r'[一-鿿]', trans):
                    return trans
                elif target_lang == "en" and (len(text) < 15 or trans.lower() != text.lower()):
                    return trans
    except Exception:
        pass

    # 通道 3: Google gtx 接口 (保底尝试)
    try:
        url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl={target_lang}&dt=t&q={q}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=6) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            res = "".join([item[0] for item in data[0] if item and item[0]]).strip()
            if res:
                if target_lang.startswith("zh") and re.search(r'[一-鿿]', res):
                    return res
                elif target_lang == "en" and (len(text) < 15 or res.lower() != text.lower()):
                    return res
    except Exception:
        pass

    # 注意：绝不返回原始西语，如果翻译失败则返回空字符串，触发上层熔断验证
    return ""


def crawl_realtime_spanish_news(today_str: str):
    """全自动从西班牙主流媒体实时抓取 10 篇真实今日新闻，全自动三语对齐与词汇解析，永不失效！"""
    import xml.etree.ElementTree as ET
    import re
    import urllib.parse

    feed_configs = [
        ("八卦 / 名人", "https://www.20minutos.es/rss/gente/", 3),
        ("体育 / 赛事", "https://www.20minutos.es/rss/deportes/", 3),
        ("文化 / 艺术", "https://www.20minutos.es/rss/cultura/", 2),
        ("生活 / 资讯", "https://www.20minutos.es/rss/", 2)
    ]
    raw_items = []
    for tag, url, count in feed_configs:
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=10) as resp:
                root = ET.fromstring(resp.read())
                items = root.findall('.//item')
                collected = 0
                for it in items:
                    t_elem = it.find('title')
                    d_elem = it.find('description')
                    if t_elem is None or d_elem is None:
                        continue
                    title = t_elem.text.strip() if t_elem.text else ""
                    desc = d_elem.text.strip() if d_elem.text else ""
                    desc = re.sub(r'<[^>]+>', '', desc).strip()
                    if len(title) < 15 or len(desc) < 20:
                        continue
                    raw_items.append({"tag": tag, "title": title, "desc": desc})
                    collected += 1
                    if collected >= count:
                        break
        except Exception as e:
            print(f"抓取频道 {tag} 提示: {e}")

    if len(raw_items) < 10:
        raise ValueError(f"仅抓取到 {len(raw_items)} 篇新闻，数量不足 10 篇")

    stories = []
    print(f"已成功实时爬取 {len(raw_items[:10])} 条最新西班牙新闻，正在生成三语对照、词汇与测验...")
    invalid_translations = 0

    for i, it in enumerate(raw_items[:10], 1):
        s_id = f"story_{i}"
        title_es = it["title"]
        title_cn_text = translate_text(title_es, "zh-CN")
        title_cn = f"{i:02d}. " + (title_cn_text if title_cn_text else title_es)
        title_en = translate_text(title_es, "en") or title_es

        desc_es = it["desc"]
        intro_cn = translate_text(desc_es[:120], "zh-CN") or "今日西语主流媒体精彩热点短讯与双语对照。"

        parts = [p.strip() for p in re.split(r'[.!?。！？]\s*', desc_es) if len(p.strip()) > 10]
        if len(parts) >= 2:
            s1_es, s2_es = parts[0] + ".", parts[1] + "."
        elif len(parts) == 1:
            s1_es = parts[0] + "."
            s2_es = title_es
        else:
            s1_es = title_es
            s2_es = desc_es

        s1_cn = translate_text(s1_es, "zh-CN")
        s1_en = translate_text(s1_es, "en")
        s2_cn = translate_text(s2_es, "zh-CN")
        s2_en = translate_text(s2_es, "en")

        # 核心质量防御：检查句子是否缺少有效中文翻译或英文翻译
        if not re.search(r'[一-鿿]', s1_cn) or not s1_en or s1_en.lower() == s1_es.lower():
            invalid_translations += 1

        words = re.findall(r'[a-záéíóúüñ]{5,}', (title_es + " " + desc_es).lower())
        vocab_candidates = [w for w in words if w not in STOPWORDS]
        seen = set()
        chosen_words = []
        for w in vocab_candidates:
            if w not in seen:
                seen.add(w)
                chosen_words.append(w)
            if len(chosen_words) == 2:
                break
        while len(chosen_words) < 2:
            chosen_words.append("noticia")

        v1_es, v2_es = chosen_words[0], chosen_words[1]
        v1_cn = translate_text(v1_es, "zh-CN") or "重点词汇"
        v1_en = translate_text(v1_es, "en") or "key term"
        v2_cn = translate_text(v2_es, "zh-CN") or "核心词汇"
        v2_en = translate_text(v2_es, "en") or "vocabulary"

        story = {
            "id": s_id,
            "tag": it["tag"],
            "date": today_str,
            "title": {
                "es": title_es,
                "en": title_en,
                "cn": title_cn
            },
            "intro": intro_cn,
            "sentences": [
                {
                    "id": 1,
                    "es": s1_es,
                    "en": s1_en,
                    "cn": s1_cn
                },
                {
                    "id": 2,
                    "es": s2_es,
                    "en": s2_en,
                    "cn": s2_cn
                }
            ],
            "vocabulary": [
                {
                    "word": v1_es,
                    "pos": "voc.",
                    "cn": v1_cn,
                    "en": v1_en,
                    "example": s1_es
                },
                {
                    "word": v2_es,
                    "pos": "voc.",
                    "cn": v2_cn,
                    "en": v2_en,
                    "example": s2_es
                }
            ],
            "grammar": {
                "point": f"核心词汇「{v1_es}」在文中的表达",
                "detail": f"「{v1_es}」在本文语境下表示“{v1_cn}”，是地道西语新闻常用表达。"
            },
            "quiz": {
                "question": f"西语单词「{v1_es}」在文中的中文含义是？",
                "options": [f"A. {v1_cn}", "B. 另一个意思", "C. 错误含义"],
                "correct_index": 0,
                "explanation": f"「{v1_es}」在此处意为：{v1_cn}。"
            }
        }
        stories.append(story)
        print(f"  [抓取合成] {i}/10: {title_es[:40]}...")

    if invalid_translations >= 2:
        raise ValueError(f"抓取的新闻翻译质量未达标 (共有 {invalid_translations} 篇缺少中英文翻译)，触发安全熔断机制！")

    return stories


async def main():
    # 统一使用中国北京时间 (UTC+8)，确保国内用户早晨访问时看到当天最新日期
    tz_cst = datetime.timezone(datetime.timedelta(hours=8))
    today_str = datetime.datetime.now(tz_cst).strftime("%Y-%m-%d")
    print(f"开始更新 {today_str} 西语每日早报...")

    gemini_key = os.environ.get("GEMINI_API_KEY", "").strip()
    raw_stories = None

    # 第一优先级：从西班牙主流媒体实时抓取当天真实最新 10 篇新闻！
    print("正在从西班牙主流媒体（20 Minutos）全自动抓取今日最新新闻与八卦...")
    try:
        raw_stories = crawl_realtime_spanish_news(today_str)
        print(f"✓ 成功从西班牙主流媒体全自动抓取并翻译了 {len(raw_stories)} 篇今日真实新闻！")
    except Exception as e:
        print(f"⚠️ 实时网页抓取遇到网络波动 ({e})，尝试调用 Gemini AI 或备用故事库...")

    # 第二优先级：如果抓取失败，尝试 Gemini AI
    if not raw_stories and gemini_key:
        try:
            raw_stories = fetch_gemini_stories(today_str, gemini_key)
            print(f"✓ 成功通过 Google Gemini AI 生成了 {len(raw_stories)} 篇全新三语早报！")
        except Exception as e:
            print(f"⚠️ 呼叫 Gemini AI 异常 ({e})，切换为备用精选故事库...")

    # 第三优先级：保底故事库
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
