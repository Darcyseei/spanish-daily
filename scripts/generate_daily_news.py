# -*- coding: utf-8 -*-
"""
西语每日早报内容生成与母语语音合成流水线
"""
import asyncio
import json
import os
import edge_tts

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIOS_DIR = os.path.join(BASE_DIR, "assets", "audios")
DATA_DIR = os.path.join(BASE_DIR, "data")

DAILY_STORIES = [
    {
        "id": "story_20261105",
        "date": "2026-11-05",
        "tag": "八卦 / 潮流",
        "title": {
            "es": "¡Rosalía sorprende a todos con su nuevo peinado en París!",
            "en": "Rosalía surprises everyone with her new hairstyle in Paris!",
            "cn": "罗莎莉亚（Rosalía）在巴黎以复古发型惊艳亮相！"
        },
        "intro": "西班牙天后现身巴黎时装周，复古造型引发全网热议与模仿潮。",
        "audio_full_normal": "/assets/audios/story_1_normal.mp3",
        "audio_full_slow": "/assets/audios/story_1_slow.mp3",
        "sentences": [
            {
                "id": 1,
                "es": "La famosa cantante española Rosalía ha llegado esta mañana a París para asistir a la Semana de la Moda.",
                "en": "The famous Spanish singer Rosalía arrived in Paris this morning to attend Fashion Week.",
                "cn": "西班牙著名歌手罗莎莉亚今晨现身巴黎，出席巴黎时装周。",
                "audio": "/assets/audios/story_1_s1.mp3"
            },
            {
                "id": 2,
                "es": "Lo que más llamó la atención de todos fue su peinado retro inspirado en los años noventa.",
                "en": "What caught everyone's attention the most was her 90s-inspired retro hairstyle.",
                "cn": "最吸引大家目光的是她那款受90年代启发的复古发型。",
                "audio": "/assets/audios/story_1_s2.mp3"
            },
            {
                "id": 3,
                "es": "Sus seguidores en redes sociales no tardaron en compartir las fotos y elogiar su estilo único.",
                "en": "Her followers on social media were quick to share photos and praise her unique style.",
                "cn": "社交平台上的粉丝们迅速转发照片，盛赞她独树一帜的风格。",
                "audio": "/assets/audios/story_1_s3.mp3"
            }
        ],
        "vocabulary": [
            {
                "id": "v_1_1",
                "word": "llamar la atención",
                "pos": "短语",
                "cn": "吸引注意 / 引人注目",
                "en": "to catch attention",
                "example": "Su peinado llamó la atención de todos.",
                "example_cn": "她的发型吸引了所有人的目光。",
                "audio": "/assets/audios/vocab_llamar_la_atencion.mp3"
            },
            {
                "id": "v_1_2",
                "word": "el peinado",
                "pos": "m.",
                "cn": "发型",
                "en": "hairstyle",
                "example": "Me encanta tu peinado retro.",
                "example_cn": "我非常喜欢你的复古发型。",
                "audio": "/assets/audios/vocab_peinado.mp3"
            },
            {
                "id": "v_1_3",
                "word": "no tardar en",
                "pos": "短语",
                "cn": "很快就…… / 毫不迟疑地",
                "en": "to not hesitate to / be quick to",
                "example": "No tardaron en responder.",
                "example_cn": "他们很快做出了回应。",
                "audio": "/assets/audios/vocab_no_tardar.mp3"
            },
            {
                "id": "v_1_4",
                "word": "elogiar",
                "pos": "v.",
                "cn": "赞扬 / 称赞",
                "en": "to praise / compliment",
                "example": "El público elogió su actuación.",
                "example_cn": "观众称赞了他的演出。",
                "audio": "/assets/audios/vocab_elogiar.mp3"
            }
        ],
        "grammar": {
            "title": "现在完成时 vs 简单过去时",
            "formula": "haber + 过去分词 (ha llegado) vs 动词点态过去式 (llamó)",
            "explanation": "在标准西班牙语中，如果一件事情发生在一个尚未结束的时间段内（如 esta mañana 今天早上、esta semana 本周、hoy 今天），习惯使用现在完成时（ha llegado）；而描述过去具体独立事件且动作已结束时，使用简单过去时（llamó la atención）。",
            "sample_es": "Rosalía ha llegado esta mañana a París.",
            "sample_cn": "罗莎莉亚今晨已抵达巴黎（时间仍是今天）。"
        },
        "quiz": {
            "question": "短语「llamar la atención」在文中表示什么含义？",
            "options": [
                "A. 大声呼唤注意",
                "B. 引起注意、吸睛",
                "C. 拨打电话联络"
            ],
            "correct_index": 1,
            "explanation": "«llamar la atención» 是极高频动词短语，字面是呼叫注意力，实际意为‘引人注目、吸引目光’。"
        }
    },
    {
        "id": "story_20261104",
        "date": "2026-11-04",
        "tag": "音乐 / 娱乐",
        "title": {
            "es": "Shakira agota las entradas de su gira en tiempo récord",
            "en": "Shakira sells out tour tickets in record time",
            "cn": "夏奇拉世界巡演门票创纪录光速售罄！"
        },
        "intro": "哥伦比亚天后夏奇拉发布真情致谢视频，宣布将在多国紧急加开巡演场次。",
        "audio_full_normal": "/assets/audios/story_2_normal.mp3",
        "audio_full_slow": "/assets/audios/story_2_slow.mp3",
        "sentences": [
            {
                "id": 1,
                "es": "La cantante colombiana Shakira ha agotado las entradas para sus próximos conciertos en pocas horas.",
                "en": "Colombian singer Shakira has sold out tickets for her upcoming concerts in just a few hours.",
                "cn": "哥伦比亚歌手夏奇拉在短短几小时内售罄了接下来的所有演唱会门票。",
                "audio": "/assets/audios/story_2_s1.mp3"
            },
            {
                "id": 2,
                "es": "Tras el éxito increíble de ventas, su equipo anunció nuevas fechas para satisfacer la gran demanda de los fans.",
                "en": "Following the incredible sales success, her team announced new dates to meet the huge demand of fans.",
                "cn": "在惊人的售票成功之后，她的团队宣布加开新场次，以满足粉丝的巨大需求。",
                "audio": "/assets/audios/story_2_s2.mp3"
            }
        ],
        "vocabulary": [
            {
                "id": "v_2_1",
                "word": "agotar",
                "pos": "v.",
                "cn": "售罄 / 耗尽",
                "en": "to sell out / exhaust",
                "example": "Se agotaron todas las entradas.",
                "example_cn": "所有的门票都卖光了。",
                "audio": "/assets/audios/vocab_agotar.mp3"
            },
            {
                "id": "v_2_2",
                "word": "tras",
                "pos": "prep.",
                "cn": "在……之后（书面高频）",
                "en": "after / behind",
                "example": "Tras el concierto, todos aplaudieron.",
                "example_cn": "演唱会结束后，所有人都鼓掌了。",
                "audio": "/assets/audios/vocab_tras.mp3"
            },
            {
                "id": "v_2_3",
                "word": "la demanda",
                "pos": "f.",
                "cn": "需求 / 要求",
                "en": "demand",
                "example": "Hay una gran demanda en el mercado.",
                "example_cn": "市场上有着巨大的需求。",
                "audio": "/assets/audios/vocab_demanda.mp3"
            }
        ],
        "grammar": {
            "title": "介词 tras 的高频用法",
            "formula": "tras + 名词 / 动词原形 (infinitivo)",
            "explanation": "tras 相当于 después de，在西语报刊和资讯中极其常见，用来引出‘紧接着某个事件之后发生的事情’。后接动词原形表示‘在做完某事之后’。",
            "sample_es": "Tras el éxito de ventas, anunció nuevas fechas.",
            "sample_cn": "在售票大获成功后，她宣布了新巡演日期。"
        },
        "quiz": {
            "question": "动词「agotar」在门票情境下最地道的中文翻译是？",
            "options": [
                "A. 退票",
                "B. 预售",
                "C. 售罄 / 抢光"
            ],
            "correct_index": 2,
            "explanation": "agotar las entradas 是演唱会和电影场景中最典型的搭配，意思是‘门票售罄’。"
        }
    }
]

async def generate_speech(text: str, filename: str, rate: str = "+0%"):
    path = os.path.join(AUDIOS_DIR, filename)
    voice = "es-ES-ElviraNeural" # 西班牙标准音（马德里口音女声，极度自然）
    communicator = edge_tts.Communicate(text, voice, rate=rate)
    await communicator.save(path)
    print(f"  [OK] 生成音频: {filename}")

async def main():
    os.makedirs(AUDIOS_DIR, exist_ok=True)
    os.makedirs(DATA_DIR, exist_ok=True)
    print("开始使用 Edge-TTS 合成高保真母语级西班牙语音频...")

    for i, story in enumerate(DAILY_STORIES, 1):
        full_text = " ".join([s["es"] for s in story["sentences"]])
        # 1. 全文正常语速
        normal_name = f"story_{i}_normal.mp3"
        await generate_speech(full_text, normal_name, rate="+0%")
        story["audio_full_normal"] = f"/assets/audios/{normal_name}"

        # 2. 全文慢速伴读
        slow_name = f"story_{i}_slow.mp3"
        await generate_speech(full_text, slow_name, rate="-25%")
        story["audio_full_slow"] = f"/assets/audios/{slow_name}"

        # 3. 单句音频
        for j, sent in enumerate(story["sentences"], 1):
            s_name = f"story_{i}_s{j}.mp3"
            await generate_speech(sent["es"], s_name, rate="+0%")
            sent["audio"] = f"/assets/audios/{s_name}"

        # 4. 单词发音
        for k, v in enumerate(story["vocabulary"], 1):
            v_name = f"vocab_{story['id']}_{k}.mp3"
            await generate_speech(v["word"], v_name, rate="-10%")
            v["audio"] = f"/assets/audios/{v_name}"

    # 导出为微信小程序 CommonJS 格式数据
    js_content = f"// 每日西语早报数据包 (由自动化流水线生成)\nconst DAILY_STORIES = {json.dumps(DAILY_STORIES, ensure_ascii=False, indent=2)};\n\nmodule.exports = {{\n  DAILY_STORIES\n}};\n"
    data_js_path = os.path.join(DATA_DIR, "daily_data.js")
    with open(data_js_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"\n全部音频生成完成！数据已输出至: {data_js_path}")

if __name__ == "__main__":
    asyncio.run(main())
