# -*- coding: utf-8 -*-
"""
更新 10 篇早报 Web 页面并打包 GitHub Pages
包含：0.75x/1.0x/1.25x 语速调节 + 划词即时翻译与母语发音 + 一键存入生词本
"""
import os
import json
import shutil
import zipfile

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS = os.path.join(BASE_DIR, "data", "daily_data.js")

def generate_html(is_root=True):
    with open(DATA_JS, "r", encoding="utf-8") as f:
        raw_js = f.read()

    json_start = raw_js.find("[")
    json_end = raw_js.rfind("]") + 1
    stories_json_str = raw_js[json_start:json_end]

    audio_prefix = "./assets/audios/" if is_root else "../assets/audios/"
    
    stories = json.loads(stories_json_str)
    for s in stories:
        s["audio_full_normal"] = s["audio_full_normal"].replace("./assets/audios/", audio_prefix)
        s["audio_full_slow"] = s["audio_full_slow"].replace("./assets/audios/", audio_prefix)
        for sent in s["sentences"]:
            sent["audio"] = sent["audio"].replace("./assets/audios/", audio_prefix)
        for v in s["vocabulary"]:
            v["audio"] = v["audio"].replace("./assets/audios/", audio_prefix)
            
    final_json = json.dumps(stories, ensure_ascii=False)

    html_template = f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>¡Hola! 西语每日 10 篇三语早报</title>
  <style>
    :root {{
      --primary: #E11D48;
      --primary-hover: #BE123C;
      --primary-light: #FFF1F2;
      --bg: #F8FAFC;
      --card-bg: #FFFFFF;
      --text-main: #0F172A;
      --text-muted: #64748B;
      --border: #F1F5F9;
      --gold: #F59E0B;
      --green: #10B981;
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }}

    body {{
      background-color: #0F172A;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: var(--text-main);
      display: flex;
      justify-content: center;
      min-height: 100vh;
      padding: 0;
    }}

    .mobile-wrapper {{
      width: 100%;
      max-width: 480px;
      background-color: var(--bg);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }}

    .app-header {{
      background: #0F172A;
      color: #FFFFFF;
      padding: 24px 20px 14px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }}

    .app-header h1 {{
      font-size: 17px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 6px;
    }}

    .badge-count {{
      background: #E11D48;
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 999px;
      font-weight: 700;
    }}

    .content-area {{
      flex: 1;
      padding: 16px 16px 84px 16px;
      overflow-y: auto;
    }}

    .card {{
      background: var(--card-bg);
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 16px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
      border: 1px solid var(--border);
    }}

    .badge {{
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
    }}
    .badge-rose {{ background: #FFE4E6; color: #E11D48; }}
    .badge-amber {{ background: #FEF3C7; color: #D97706; }}
    .badge-green {{ background: #D1FAE5; color: #059669; }}

    .nav-bar-10 {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #FFFFFF;
      border-radius: 14px;
      padding: 8px 14px;
      margin-bottom: 14px;
      border: 1px solid #E2E8F0;
    }}
    .nav-btn {{
      background: #F1F5F9;
      border: none;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      color: #334155;
      cursor: pointer;
    }}
    .nav-indicator {{
      font-size: 13px;
      font-weight: 800;
      color: var(--primary);
    }}

    .story-scroll {{
      display: flex;
      gap: 8px;
      overflow-x: auto;
      margin-bottom: 14px;
      padding-bottom: 4px;
      scrollbar-width: none;
    }}
    .story-scroll::-webkit-scrollbar {{ display: none; }}
    .story-pill {{
      padding: 6px 14px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
      white-space: nowrap;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.2s;
    }}
    .story-pill.active {{
      background: #0F172A;
      color: #FFFFFF;
      border-color: #0F172A;
    }}

    .title-card {{
      border-left: 6px solid var(--primary);
    }}
    .title-es {{
      font-size: 19px;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1.4;
      margin-bottom: 8px;
    }}
    .title-en {{
      font-size: 13px;
      color: var(--text-muted);
      font-style: italic;
      margin-bottom: 6px;
    }}
    .title-cn {{
      font-size: 14px;
      font-weight: 700;
      color: #334155;
      margin-bottom: 10px;
    }}
    .story-intro {{
      background: #F1F5F9;
      padding: 10px 14px;
      border-radius: 10px;
      font-size: 12px;
      color: #475569;
      line-height: 1.5;
    }}

    /* 播放器与语速组 */
    .player-card {{
      background: linear-gradient(180deg, #FFFFFF 0%, #FFF7F8 100%);
      border: 1px solid #FFE4E6;
    }}
    .player-row {{
      display: flex;
      align-items: center;
      gap: 16px;
    }}
    .play-btn {{
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
      color: #FFFFFF;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 0 6px 16px rgba(225, 29, 72, 0.35);
      flex-shrink: 0;
    }}
    .player-details {{ flex: 1; }}
    .player-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }}
    .player-title {{ font-size: 13px; font-weight: 700; color: var(--text-main); }}

    .speed-group {{
      display: flex;
      align-items: center;
      gap: 4px;
    }}
    .speed-label {{
      font-size: 11px;
      color: var(--text-muted);
      font-weight: 600;
    }}
    .speed-pills {{
      display: flex;
      background: #FFF1F2;
      border: 1px solid #FECDD3;
      border-radius: 999px;
      padding: 2px;
    }}
    .speed-pill {{
      background: transparent;
      border: none;
      color: var(--primary);
      padding: 2px 7px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s ease;
    }}
    .speed-pill.active {{
      background: var(--primary);
      color: #FFFFFF;
      box-shadow: 0 2px 6px rgba(225, 29, 72, 0.25);
    }}

    .slider-wrap {{
      display: flex;
      align-items: center;
      gap: 10px;
    }}
    .progress-bar {{
      flex: 1;
      height: 6px;
      background: #E2E8F0;
      border-radius: 999px;
      position: relative;
      cursor: pointer;
    }}
    .progress-fill {{
      width: 0%;
      height: 100%;
      background: var(--primary);
      border-radius: 999px;
      transition: width 0.1s linear;
    }}
    .time-text {{ font-size: 11px; color: var(--text-muted); min-width: 35px; }}

    .mode-bar {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid #F1F5F9;
    }}
    .mode-bar span {{ font-size: 12px; color: var(--text-muted); }}
    .mode-pills {{
      display: flex;
      background: #F1F5F9;
      border-radius: 999px;
      padding: 2px;
    }}
    .mode-pill {{
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 11px;
      color: var(--text-muted);
      cursor: pointer;
      font-weight: 600;
    }}
    .mode-pill.active {{
      background: #FFFFFF;
      color: var(--text-main);
      box-shadow: 0 2px 6px rgba(0,0,0,0.06);
    }}

    .section-title {{
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 15px;
      font-weight: 800;
      color: var(--text-main);
      margin: 22px 0 10px 4px;
    }}

    /* 逐句卡片 */
    .sentence-card {{
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.2s;
      user-select: text;
    }}
    .sentence-card.active {{
      border-color: var(--primary);
      background: var(--primary-light);
      box-shadow: 0 6px 20px rgba(225, 29, 72, 0.12);
    }}
    .sentence-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }}
    .sentence-num {{
      font-size: 11px;
      font-weight: 800;
      color: #94A3B8;
      background: #F1F5F9;
      padding: 2px 8px;
      border-radius: 6px;
    }}
    .sentence-play-tag {{ font-size: 11px; color: var(--primary); font-weight: 600; }}
    .sentence-es {{ font-size: 15px; font-weight: 700; color: var(--text-main); line-height: 1.5; margin-bottom: 6px; }}
    .sentence-en {{ font-size: 13px; color: var(--text-muted); margin-bottom: 4px; }}
    .sentence-cn {{ font-size: 13px; color: #334155; }}

    /* 词汇 */
    .vocab-card {{ margin-bottom: 10px; }}
    .vocab-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }}
    .vocab-left {{ display: flex; align-items: center; gap: 8px; }}
    .vocab-word {{ font-size: 16px; font-weight: 800; color: var(--text-main); }}
    .audio-icon-btn {{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #F1F5F9;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 13px;
    }}
    .save-btn {{
      background: #F1F5F9;
      border: none;
      padding: 5px 12px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      color: var(--text-muted);
      cursor: pointer;
    }}
    .save-btn.saved {{ background: #FEF3C7; color: #D97706; }}
    .vocab-meaning {{
      background: #F8FAFC;
      padding: 8px 12px;
      border-radius: 10px;
      margin-bottom: 8px;
    }}
    .meaning-cn {{ font-size: 13px; font-weight: 700; color: #1E293B; margin-bottom: 2px; }}
    .meaning-en {{ font-size: 12px; color: var(--text-muted); }}
    .vocab-example {{ border-left: 3px solid #CBD5E1; padding-left: 10px; }}
    .example-es {{ font-size: 12px; color: #334155; font-style: italic; }}
    .example-cn {{ font-size: 12px; color: var(--text-muted); }}

    /* 语法卡片 */
    .grammar-card {{
      background: linear-gradient(135deg, #FAF5FF 0%, #FFFFFF 100%);
      border: 1px solid #E9D5FF;
    }}
    .grammar-title-wrap {{ display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }}
    .grammar-badge {{ background: #7E22CE; color: #FFFFFF; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 999px; }}
    .grammar-title {{ font-size: 15px; font-weight: 800; color: #581C87; }}
    .grammar-formula {{ background: #FFFFFF; padding: 8px 12px; border-radius: 8px; border: 1px dashed #D8B4FE; font-size: 12px; color: #6B21A8; font-weight: 700; margin-bottom: 8px; }}
    .grammar-exp {{ font-size: 13px; color: #3B0764; line-height: 1.6; margin-bottom: 8px; }}
    .grammar-sample {{ background: rgba(255, 255, 255, 0.7); padding: 8px 12px; border-radius: 8px; }}
    .sample-es {{ font-size: 13px; font-weight: 700; color: #581C87; }}
    .sample-cn {{ font-size: 12px; color: #6B21A8; }}

    /* 小测 */
    .quiz-card {{ background: #FFFFFF; }}
    .quiz-q {{ font-size: 14px; font-weight: 700; margin-bottom: 12px; }}
    .quiz-options {{ display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }}
    .quiz-opt {{
      padding: 10px 14px;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      font-size: 13px;
      color: #334155;
      cursor: pointer;
    }}
    .quiz-opt.correct {{ background: #ECFDF5; border-color: #10B981; color: #065F46; font-weight: 700; }}
    .quiz-opt.wrong {{ background: #FEF2F2; border-color: #EF4444; color: #991B1B; }}
    .quiz-feedback {{ background: #F8FAFC; padding: 10px; border-radius: 10px; font-size: 12px; margin-bottom: 12px; }}
    .checkin-btn {{
      width: 100%;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
      color: #FFFFFF;
      border: none;
      padding: 13px 0;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
    }}
    .checkedin-tag {{ text-align: center; padding: 10px; background: #ECFDF5; color: #059669; font-weight: 700; font-size: 13px; border-radius: 10px; }}

    /* 划词翻译悬浮气泡 */
    .selection-tooltip {{
      position: absolute;
      background: #FFFFFF;
      color: #0F172A;
      border-radius: 16px;
      padding: 14px 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18), 0 2px 6px rgba(0, 0, 0, 0.08);
      border: 1px solid #E2E8F0;
      z-index: 1000;
      max-width: 280px;
      display: none;
      transform: translate(-50%, -100%);
      margin-top: -12px;
      animation: tooltipPop 0.18s cubic-bezier(0.16, 1, 0.3, 1);
    }}
    @keyframes tooltipPop {{
      0% {{ opacity: 0; transform: translate(-50%, -90%) scale(0.92); }}
      100% {{ opacity: 1; transform: translate(-50%, -100%) scale(1); }}
    }}
    .selection-tooltip::after {{
      content: '';
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 12px;
      height: 12px;
      background: #FFFFFF;
      border-right: 1px solid #E2E8F0;
      border-bottom: 1px solid #E2E8F0;
    }}
    .tooltip-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }}
    .tooltip-word {{
      font-size: 16px;
      font-weight: 800;
      color: #E11D48;
      max-width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }}
    .tooltip-actions {{
      display: flex;
      align-items: center;
      gap: 6px;
    }}
    .tooltip-voice-btn {{
      background: #FFE4E6;
      border: none;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 13px;
    }}
    .tooltip-close {{
      background: transparent;
      border: none;
      color: #94A3B8;
      font-size: 16px;
      cursor: pointer;
      padding: 0 4px;
    }}
    .tooltip-meaning {{
      font-size: 14px;
      font-weight: 700;
      color: #1E293B;
      margin-bottom: 8px;
      line-height: 1.4;
    }}
    .tooltip-loading {{
      font-size: 12px;
      color: #64748B;
      margin-bottom: 8px;
    }}
    .tooltip-add-btn {{
      width: 100%;
      background: #F1F5F9;
      border: none;
      border-radius: 999px;
      padding: 6px 0;
      font-size: 12px;
      font-weight: 700;
      color: #334155;
      cursor: pointer;
      transition: all 0.2s;
    }}
    .tooltip-add-btn.saved {{
      background: #FEF3C7;
      color: #D97706;
    }}

    /* 划词小提示浮窗 */
    .lookup-tip-banner {{
      display: flex;
      align-items: center;
      gap: 6px;
      background: #F0FDF4;
      border: 1px solid #BBF7D0;
      padding: 6px 12px;
      border-radius: 10px;
      font-size: 11px;
      color: #166534;
      margin-bottom: 12px;
    }}

    .vocab-page-hero {{
      background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
      border-radius: 20px;
      padding: 20px;
      color: #FFFFFF;
      margin-bottom: 16px;
    }}
    .stats-row {{ display: flex; justify-content: space-around; text-align: center; margin-bottom: 14px; }}
    .stat-val {{ font-size: 26px; font-weight: 800; }}
    .stat-lbl {{ font-size: 11px; color: #94A3B8; margin-top: 2px; }}
    .flashcard-toggle {{
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 8px 14px;
      border-radius: 999px;
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }}
    .search-box {{
      display: flex;
      align-items: center;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 999px;
      padding: 10px 16px;
      margin-bottom: 14px;
    }}
    .search-box input {{ border: none; outline: none; flex: 1; font-size: 13px; margin-left: 8px; }}

    .app-tabbar {{
      position: fixed;
      bottom: 0;
      width: 100%;
      max-width: 480px;
      background: #FFFFFF;
      border-top: 1px solid #E2E8F0;
      display: flex;
      justify-content: space-around;
      padding: 8px 0;
      z-index: 100;
    }}
    .tab-item {{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #64748B;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      gap: 3px;
    }}
    .tab-item.active {{ color: var(--primary); font-weight: 700; }}
    .tab-icon {{ font-size: 20px; }}
    .hidden {{ display: none !important; }}
  </style>
</head>
<body>

<div class="mobile-wrapper" id="appWrapper">

  <!-- 划词翻译悬浮卡片 -->
  <div class="selection-tooltip" id="selectionTooltip">
    <div class="tooltip-header">
      <span class="tooltip-word" id="tooltipWord">palabra</span>
      <div class="tooltip-actions">
        <button class="tooltip-voice-btn" onclick="speakLookupWord()" title="播放发音">🔊</button>
        <button class="tooltip-close" onclick="closeTooltip()">✕</button>
      </div>
    </div>
    <div class="tooltip-meaning" id="tooltipMeaning">查词中...</div>
    <button class="tooltip-add-btn" id="tooltipAddBtn" onclick="toggleSaveLookupWord()">☆ 存入生词本</button>
  </div>

  <header class="app-header">
    <h1>¡Hola! 西语每日 10 篇早报 <span class="badge-count">10 篇全</span></h1>
    <div style="background: #FFF1F2; border: 1px solid #FECDD3; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; color: #E11D48;">
      🔥 <span id="streakDaysTop">连续打卡 1 天</span>
    </div>
  </header>

  <div class="content-area">

    <!-- TAB 1: 每日早报 -->
    <div id="tabFeed">
      
      <!-- 划词功能提示条 -->
      <div class="lookup-tip-banner">
        <span>💡</span>
        <span><b>划词翻译已就绪</b>：在文章中鼠标选中或长按任意单词，立即看释义、听发音、存入生词本！</span>
      </div>

      <!-- 10篇切页控制器 -->
      <div class="nav-bar-10">
        <button class="nav-btn" onclick="prevStory()">‹ 上一篇</button>
        <span class="nav-indicator" id="storyIndicator">第 1 / 10 篇</span>
        <button class="nav-btn" onclick="nextStory()">下一篇 ›</button>
      </div>

      <!-- 横向故事列表 -->
      <div class="story-scroll" id="storyScroll"></div>

      <!-- 标题卡片 -->
      <div class="card title-card">
        <div style="display: flex; gap: 8px; margin-bottom: 8px;">
          <span class="badge badge-rose" id="storyTag"></span>
          <span style="font-size: 12px; color: #64748B; font-weight: 600;" id="storyDate"></span>
        </div>
        <div class="title-es" id="storyTitleEs"></div>
        <div class="title-en" id="storyTitleEn"></div>
        <div class="title-cn" id="storyTitleCn"></div>
        <div class="story-intro">
          📌 <span id="storyIntro"></span>
        </div>
      </div>

      <!-- 播放器与 3 档语速切换 (0.75x, 1.0x, 1.25x) -->
      <div class="card player-card">
        <div class="player-row">
          <button class="play-btn" id="playFullBtn" onclick="togglePlayFull()">▶</button>
          <div class="player-details">
            <div class="player-header">
              <span class="player-title" id="playerStatusText">母语者朗读全篇</span>
              <div class="speed-group">
                <span class="speed-label">语速:</span>
                <div class="speed-pills">
                  <button class="speed-pill" id="speed_0_75" onclick="setSpeed(0.75)">0.75x</button>
                  <button class="speed-pill active" id="speed_1_0" onclick="setSpeed(1.0)">1.0x</button>
                  <button class="speed-pill" id="speed_1_25" onclick="setSpeed(1.25)">1.25x</button>
                </div>
              </div>
            </div>
            <div class="slider-wrap">
              <span class="time-text" id="curTimeText">00:00</span>
              <div class="progress-bar" onclick="seekAudio(event)" id="progressBar">
                <div class="progress-fill" id="progressFill"></div>
              </div>
              <span class="time-text" id="totalTimeText">00:00</span>
            </div>
          </div>
        </div>

        <div class="mode-bar">
          <span>对照模式：</span>
          <div class="mode-pills">
            <div class="mode-pill active" onclick="setDisplayMode('all')">西+中+英</div>
            <div class="mode-pill" onclick="setDisplayMode('es_cn')">西+中</div>
            <div class="mode-pill" onclick="setDisplayMode('es_only')">仅西语(盲听)</div>
          </div>
        </div>
      </div>

      <!-- 逐句精读 -->
      <div class="section-title">
        <span>🎧</span> 逐句精读（点击句子播放纯正母语音频）
      </div>
      <div id="sentencesContainer"></div>

      <!-- 核心词汇 -->
      <div class="section-title">
        <span>📚</span> 核心词汇卡片
      </div>
      <div id="vocabContainer"></div>

      <!-- 语法透视 -->
      <div class="section-title">
        <span>💡</span> 极简语法透视
      </div>
      <div class="card grammar-card" id="grammarCard"></div>

      <!-- 打卡小测 -->
      <div class="section-title">
        <span>🎯</span> 本篇 10 秒打卡小测
      </div>
      <div class="card quiz-card" id="quizCard"></div>
    </div>

    <!-- TAB 2: 生词本 -->
    <div id="tabVocab" class="hidden">
      <div class="vocab-page-hero">
        <div class="stats-row">
          <div>
            <div class="stat-val" id="totalVocabCount">0</div>
            <div class="stat-lbl">总收藏词汇</div>
          </div>
          <div>
            <div class="stat-val" style="color: #34D399;" id="masteredVocabCount">0</div>
            <div class="stat-lbl">已掌握</div>
          </div>
          <div>
            <div class="stat-val" style="color: #FBBF24;" id="unmasteredVocabCount">0</div>
            <div class="stat-lbl">待复习</div>
          </div>
        </div>
        <div class="flashcard-toggle" onclick="toggleMemoryFlashcard()">
          <span id="flashcardToggleText">🙈 开启背词模式 (隐藏中文释义)</span>
        </div>
      </div>

      <div class="search-box">
        <span>🔍</span>
        <input type="text" placeholder="搜索生词、中文或英文..." id="vocabSearchInput" oninput="onSearchVocab(this.value)">
      </div>

      <div id="savedVocabList"></div>
    </div>

    <!-- TAB 3: 打卡记录 -->
    <div id="tabProfile" class="hidden">
      <div class="vocab-page-hero">
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
          <div style="font-size: 38px; background: rgba(255,255,255,0.1); padding: 8px; border-radius: 50%;">🇪🇸</div>
          <div>
            <div style="font-size: 17px; font-weight: 800;">西语探索者</div>
            <div style="font-size: 12px; color: #94A3B8;">今日已解锁 10 篇西语原汁原味早报</div>
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 800; color: #FBBF24;" id="profileStreakText">连续打卡 1 天</div>
            <div style="font-size: 11px; color: #94A3B8;">坚持就是胜利！</div>
          </div>
          <span class="badge badge-green" id="profileTodayStatus">今日已打卡 ✓</span>
        </div>
      </div>

      <div class="card">
        <div style="font-size: 15px; font-weight: 800; margin-bottom: 12px;">今日全部 10 篇目录导航</div>
        <div id="historyListContainer"></div>
      </div>
    </div>

  </div>

  <nav class="app-tabbar">
    <div class="tab-item active" onclick="switchTab('feed', this)">
      <div class="tab-icon">📰</div>
      <div>今日 10 篇</div>
    </div>
    <div class="tab-item" onclick="switchTab('vocab', this)">
      <div class="tab-icon">📚</div>
      <div>生词本</div>
    </div>
    <div class="tab-item" onclick="switchTab('profile', this)">
      <div class="tab-icon">👤</div>
      <div>打卡记录</div>
    </div>
  </nav>

</div>

<script>
const STORIES_DATA = {final_json};

let currentIndex = 0;
let currentStory = STORIES_DATA[0];
let displayMode = 'all';
let currentSpeed = 1.0;
let isMemoryFlashcard = false;
let selectedQuizOpt = null;
let currentLookupWord = null;

const fullAudio = new Audio();
const singleAudio = new Audio();

function getStorage(key, def) {{
  try {{
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : def;
  }} catch (e) {{ return def; }}
}}
function setStorage(key, val) {{
  try {{ localStorage.setItem(key, JSON.stringify(val)); }} catch (e) {{}}
}}

let myVocab = getStorage('my_vocab_web', STORIES_DATA.slice(0, 3).flatMap(s => s.vocabulary.slice(0, 1)));
let streakDays = getStorage('streak_days_web', 1);
let studyRecords = getStorage('study_records_web', {{}});

function init() {{
  renderStoryPills();
  loadStory(currentIndex);
  updateStreakUI();
  setupAudioListeners();
  setupSelectionTranslation();
}}

function updateStreakUI() {{
  document.getElementById('streakDaysTop').textContent = `打卡 ${{streakDays}} 天`;
  document.getElementById('profileStreakText').textContent = `连续打卡 ${{streakDays}} 天`;
  const isDone = !!studyRecords[currentStory.id];
  document.getElementById('profileTodayStatus').textContent = isDone ? '本篇已打卡 ✓' : '待打卡';
}}

function renderStoryPills() {{
  const container = document.getElementById('storyScroll');
  container.innerHTML = STORIES_DATA.map((s, idx) => `
    <div class="story-pill ${{idx === currentIndex ? 'active' : ''}}" onclick="loadStory(${{idx}})">
      ${{s.title.cn.slice(0, 14)}}...
    </div>
  `).join('');

  const hist = document.getElementById('historyListContainer');
  hist.innerHTML = STORIES_DATA.map((s, idx) => `
    <div style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; cursor: pointer; display: flex; justify-content: space-between; align-items: center;" onclick="loadStory(${{idx}}); switchTab('feed', document.querySelectorAll('.tab-item')[0]);">
      <div>
        <div style="font-size: 11px; color: #64748B;">第 ${{idx + 1}} 篇 · ${{s.tag}}</div>
        <div style="font-weight: 700; font-size: 13px;">${{s.title.cn}}</div>
      </div>
      <span style="font-size: 12px; color: #E11D48;">阅读 ›</span>
    </div>
  `).join('');
}}

function prevStory() {{
  if (currentIndex > 0) loadStory(currentIndex - 1);
}}
function nextStory() {{
  if (currentIndex < STORIES_DATA.length - 1) loadStory(currentIndex + 1);
}}

function loadStory(idx) {{
  fullAudio.pause();
  document.getElementById('playFullBtn').textContent = '▶';
  document.querySelectorAll('.sentence-card').forEach(el => el.classList.remove('active'));

  currentIndex = idx;
  currentStory = STORIES_DATA[currentIndex];
  selectedQuizOpt = null;

  document.getElementById('storyIndicator').textContent = `第 ${{currentIndex + 1}} / ${{STORIES_DATA.length}} 篇`;
  document.getElementById('storyDate').textContent = currentStory.date;
  document.getElementById('storyTag').textContent = currentStory.tag;
  document.getElementById('storyTitleEs').textContent = currentStory.title.es;
  document.getElementById('storyTitleEn').textContent = currentStory.title.en;
  document.getElementById('storyTitleCn').textContent = currentStory.title.cn;
  document.getElementById('storyIntro').textContent = currentStory.intro;

  fullAudio.src = currentStory.audio_full_normal;
  fullAudio.playbackRate = currentSpeed;

  renderStoryPills();
  renderSentences();
  renderVocabulary();
  renderGrammar();
  renderQuiz();
  updateStreakUI();
}}

function renderSentences() {{
  const c = document.getElementById('sentencesContainer');
  c.innerHTML = currentStory.sentences.map(s => `
    <div class="card sentence-card" id="sent_${{s.id}}" onclick="onSentenceCardClick(event, ${{s.id}}, '${{s.audio}}')">
      <div class="sentence-header">
        <span class="sentence-num">${{s.id < 10 ? '0' + s.id : s.id}}</span>
        <span class="sentence-play-tag">🔈 点此朗读</span>
      </div>
      <div class="sentence-es">${{s.es}}</div>
      ${{displayMode === 'all' ? `<div class="sentence-en">${{s.en}}</div>` : ''}}
      ${{displayMode !== 'es_only' ? `<div class="sentence-cn">${{s.cn}}</div>` : ''}}
    </div>
  `).join('');
}}

function onSentenceCardClick(e, id, audio) {{
  // 如果用户正在划词选择文本，不触发整句播放
  const sel = window.getSelection().toString().trim();
  if (sel && sel.length > 0) return;
  playSentence(id, audio);
}}

function renderVocabulary() {{
  const c = document.getElementById('vocabContainer');
  c.innerHTML = currentStory.vocabulary.map(v => {{
    const isSaved = myVocab.some(item => item.word === v.word);
    return `
      <div class="card vocab-card">
        <div class="vocab-header">
          <div class="vocab-left">
            <span class="vocab-word">${{v.word}}</span>
            <span class="badge badge-amber">${{v.pos}}</span>
            <button class="audio-icon-btn" onclick="playSingleAudio('${{v.audio}}')">🔊</button>
          </div>
          <button class="save-btn ${{isSaved ? 'saved' : ''}}" onclick="toggleSaveWord('${{v.word}}')">
            ${{isSaved ? '★ 已收藏' : '☆ 存生词'}}
          </button>
        </div>
        <div class="vocab-meaning">
          <div class="meaning-cn">🇨🇳 ${{v.cn}}</div>
          <div class="meaning-en">🇬🇧 ${{v.en}}</div>
        </div>
        <div class="vocab-example">
          <div class="example-es">“${{v.example}}”</div>
          <div class="example-cn">${{v.example_cn}}</div>
        </div>
      </div>
    `;
  }}).join('');
}}

function renderGrammar() {{
  const g = currentStory.grammar;
  document.getElementById('grammarCard').innerHTML = `
    <div class="grammar-title-wrap">
      <span class="grammar-badge">今日语法点</span>
      <span class="grammar-title">${{g.title}}</span>
    </div>
    <div class="grammar-formula">句式：${{g.formula}}</div>
    <div class="grammar-exp">${{g.explanation}}</div>
    <div class="grammar-sample">
      <div class="sample-es">🇪🇸 ${{g.sample_es}}</div>
      <div class="sample-cn">🇨🇳 ${{g.sample_cn}}</div>
    </div>
  `;
}}

function renderQuiz() {{
  const q = currentStory.quiz;
  const isDone = !!studyRecords[currentStory.id];
  const c = document.getElementById('quizCard');

  let optsHtml = q.options.map((opt, i) => {{
    let cls = '';
    if (selectedQuizOpt !== null) {{
      if (i === q.correct_index) cls = 'correct';
      else if (i === selectedQuizOpt) cls = 'wrong';
    }}
    return `<div class="quiz-opt ${{cls}}" onclick="selectQuiz(${{i}})">${{opt}}</div>`;
  }}).join('');

  c.innerHTML = `
    <div class="quiz-q">${{q.question}}</div>
    <div class="quiz-options">${{optsHtml}}</div>
    ${{selectedQuizOpt !== null ? `
      <div class="quiz-feedback">
        <div style="font-weight: 700; margin-bottom: 4px; color: ${{selectedQuizOpt === q.correct_index ? '#059669' : '#DC2626'}}">
          ${{selectedQuizOpt === q.correct_index ? '🎉 答对啦！Muy bien!' : '💡 解析如下：'}}
        </div>
        <div style="color: #475569;">${{q.explanation}}</div>
      </div>
    ` : ''}}
    ${{!isDone ? `
      <button class="checkin-btn" onclick="completeCheckin()">✨ 完成第 ${{currentIndex + 1}} 篇早报打卡 (+1天语感积累)</button>
    ` : `
      <div class="checkedin-tag">✅ 本篇已打卡，点击「下一篇 ›」继续探索！</div>
    `}}
  `;
}}

function selectQuiz(index) {{
  selectedQuizOpt = index;
  renderQuiz();
}}

function completeCheckin() {{
  studyRecords[currentStory.id] = {{ completed: true, date: currentStory.date }};
  streakDays += 1;
  setStorage('study_records_web', studyRecords);
  setStorage('streak_days_web', streakDays);
  updateStreakUI();
  renderQuiz();
  alert(`🎉 恭喜完成第 ${{currentIndex + 1}} 篇打卡！\n西语积累 +1！连续打卡天数：${{streakDays}} 天`);
}}

function togglePlayFull() {{
  singleAudio.pause();
  document.querySelectorAll('.sentence-card').forEach(el => el.classList.remove('active'));

  const btn = document.getElementById('playFullBtn');
  if (fullAudio.paused) {{
    fullAudio.playbackRate = currentSpeed;
    fullAudio.play();
    btn.textContent = '⏸';
    document.getElementById('playerStatusText').textContent = `正在以 ${{currentSpeed}}x 播报中...`;
  }} else {{
    fullAudio.pause();
    btn.textContent = '▶';
    document.getElementById('playerStatusText').textContent = '母语者朗读全篇';
  }}
}}

function setSpeed(speed) {{
  currentSpeed = speed;
  fullAudio.playbackRate = speed;
  singleAudio.playbackRate = speed;

  document.querySelectorAll('.speed-pill').forEach(el => el.classList.remove('active'));
  const speedId = 'speed_' + speed.toString().replace('.', '_');
  const target = document.getElementById(speedId);
  if (target) target.classList.add('active');

  if (!fullAudio.paused) {{
    document.getElementById('playerStatusText').textContent = `正在以 ${{currentSpeed}}x 播报中...`;
  }}
}}

function setupAudioListeners() {{
  fullAudio.ontimeupdate = () => {{
    if (fullAudio.duration) {{
      const pct = (fullAudio.currentTime / fullAudio.duration) * 100;
      document.getElementById('progressFill').style.width = pct + '%';
      document.getElementById('curTimeText').textContent = formatTime(fullAudio.currentTime);
      document.getElementById('totalTimeText').textContent = formatTime(fullAudio.duration);
    }}
  }};
  fullAudio.onended = () => {{
    document.getElementById('playFullBtn').textContent = '▶';
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('playerStatusText').textContent = '母语者朗读全篇';
  }};
}}

function seekAudio(e) {{
  const bar = document.getElementById('progressBar');
  const rect = bar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  if (fullAudio.duration) fullAudio.currentTime = pct * fullAudio.duration;
}}

function playSentence(id, src) {{
  fullAudio.pause();
  document.getElementById('playFullBtn').textContent = '▶';
  document.querySelectorAll('.sentence-card').forEach(el => el.classList.remove('active'));
  const card = document.getElementById('sent_' + id);
  if (card) card.classList.add('active');

  singleAudio.src = src;
  singleAudio.playbackRate = currentSpeed;
  singleAudio.play();
  singleAudio.onended = () => {{
    if (card) card.classList.remove('active');
  }};
}}

function playSingleAudio(src) {{
  fullAudio.pause();
  document.getElementById('playFullBtn').textContent = '▶';
  singleAudio.src = src;
  singleAudio.playbackRate = currentSpeed;
  singleAudio.play();
}}

function setDisplayMode(mode) {{
  displayMode = mode;
  document.querySelectorAll('.mode-pill').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  renderSentences();
}}

function formatTime(s) {{
  if (!s || isNaN(s)) return "00:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${{m < 10 ? '0' + m : m}}:${{sec < 10 ? '0' + sec : sec}}`;
}}

/* ================= 划词翻译引擎 (Selection Translation) ================= */
function setupSelectionTranslation() {{
  const tooltip = document.getElementById('selectionTooltip');

  // 监听鼠标划选 / 移动端划词
  const handleSelection = async (e) => {{
    const selection = window.getSelection();
    let text = selection ? selection.toString().trim() : '';

    // 清理两边标点符号 (如 ¡ ¿ " . ,)
    text = text.replace(/^[¡¿"\'«\(\[\s]+|[!?"\'»\)\]\.,;\:\s]+$/g, '');

    // 选中文本在 1 到 40 个字符之间
    if (text.length >= 1 && text.length <= 40) {{
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const wrapperRect = document.getElementById('appWrapper').getBoundingClientRect();

      // 计算相对于移动端外壳的位置
      let top = rect.top - wrapperRect.top + window.scrollY;
      let left = rect.left - wrapperRect.left + (rect.width / 2);

      // 防止溢出左右边界
      left = Math.max(140, Math.min(wrapperRect.width - 140, left));

      tooltip.style.top = top + 'px';
      tooltip.style.left = left + 'px';
      tooltip.style.display = 'block';

      document.getElementById('tooltipWord').textContent = text;
      document.getElementById('tooltipMeaning').textContent = '🔍 正在翻译...';
      
      const isSaved = myVocab.some(v => v.word.toLowerCase() === text.toLowerCase());
      const addBtn = document.getElementById('tooltipAddBtn');
      addBtn.textContent = isSaved ? '★ 已在生词本' : '☆ 存入生词本';
      addBtn.className = 'tooltip-add-btn' + (isSaved ? ' saved' : '');

      currentLookupWord = {{ word: text, cn: '', pos: '单词' }};

      // 执行翻译查询
      const result = await fetchTranslation(text);
      document.getElementById('tooltipMeaning').textContent = result.cn || '未查到释义';
      currentLookupWord.cn = result.cn;
    }}
  }};

  document.addEventListener('mouseup', handleSelection);
  document.addEventListener('touchend', (e) => {{
    setTimeout(handleSelection, 200);
  }});

  // 点击其他区域关闭悬浮窗
  document.addEventListener('mousedown', (e) => {{
    if (!tooltip.contains(e.target)) {{
      closeTooltip();
    }}
  }});
}}

function closeTooltip() {{
  document.getElementById('selectionTooltip').style.display = 'none';
}}

// 智能翻译查询（先查 10 篇词库，再查在线翻译）
async function fetchTranslation(word) {{
  const lower = word.toLowerCase();
  
  // 1. 本地内置词库匹配
  for (let s of STORIES_DATA) {{
    for (let v of s.vocabulary) {{
      if (v.word.toLowerCase() === lower || lower.includes(v.word.toLowerCase())) {{
        return {{ cn: v.cn }};
      }}
    }}
  }}

  // 2. 尝试在线免费翻译接口 MyMemory
  try {{
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${{encodeURIComponent(word)}}&langpair=es|zh-CN`);
    const data = await res.json();
    if (data && data.responseData && data.responseData.translatedText) {{
      return {{ cn: data.responseData.translatedText }};
    }}
  }} catch (e) {{}}

  // 3. 备用翻译接口 Google GTX
  try {{
    const res2 = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=zh-CN&dt=t&q=${{encodeURIComponent(word)}}`);
    const data2 = await res2.json();
    if (data2 && data2[0] && data2[0][0] && data2[0][0][0]) {{
      return {{ cn: data2[0][0][0] }};
    }}
  }} catch (e2) {{}}

  return {{ cn: '网络查询超时' }};
}}

// 划词母语朗读
function speakLookupWord() {{
  if (!currentLookupWord || !currentLookupWord.word) return;
  const word = currentLookupWord.word;

  if ('speechSynthesis' in window) {{
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'es-ES';
    u.rate = currentSpeed || 1.0;
    window.speechSynthesis.speak(u);
  }} else {{
    // 备用：单句播放器
    singleAudio.src = `https://dict.youdao.com/dictvoice?audio=${{encodeURIComponent(word)}}&type=2`;
    singleAudio.play();
  }}
}}

// 划词一键加入生词本
function toggleSaveLookupWord() {{
  if (!currentLookupWord || !currentLookupWord.word) return;
  const word = currentLookupWord.word;
  const cn = currentLookupWord.cn || '自定义生词';

  const idx = myVocab.findIndex(w => w.word.toLowerCase() === word.toLowerCase());
  const addBtn = document.getElementById('tooltipAddBtn');

  if (idx > -1) {{
    myVocab.splice(idx, 1);
    addBtn.textContent = '☆ 存入生词本';
    addBtn.className = 'tooltip-add-btn';
    alert(`已从生词本移除「${{word}}」`);
  }} else {{
    myVocab.unshift({{
      id: 'lookup_' + Date.now(),
      word: word,
      pos: '生词',
      cn: cn,
      en: '',
      example: '',
      example_cn: '',
      audio: '',
      mastered: false,
      addTime: '划词收藏'
    }});
    addBtn.textContent = '★ 已在生词本';
    addBtn.className = 'tooltip-add-btn saved';
    alert(`⭐ 成功将「${{word}}」(${{cn}}) 存入生词本！`);
  }}
  setStorage('my_vocab_web', myVocab);
}}

function toggleSaveWord(word) {{
  const idx = myVocab.findIndex(w => w.word === word);
  if (idx > -1) {{
    myVocab.splice(idx, 1);
  }} else {{
    for (let s of STORIES_DATA) {{
      const found = s.vocabulary.find(v => v.word === word);
      if (found) {{
        myVocab.unshift({{ ...found, mastered: false }});
        break;
      }}
    }}
  }}
  setStorage('my_vocab_web', myVocab);
  renderVocabulary();
}}

function switchTab(tab, el) {{
  document.querySelectorAll('.tab-item').forEach(item => item.classList.remove('active'));
  el.classList.add('active');

  document.getElementById('tabFeed').classList.add('hidden');
  document.getElementById('tabVocab').classList.add('hidden');
  document.getElementById('tabProfile').classList.add('hidden');

  if (tab === 'feed') document.getElementById('tabFeed').classList.remove('hidden');
  else if (tab === 'vocab') {{
    document.getElementById('tabVocab').classList.remove('hidden');
    renderVocabPage();
  }} else if (tab === 'profile') {{
    document.getElementById('tabProfile').classList.remove('hidden');
    updateStreakUI();
  }}
}}

function renderVocabPage() {{
  const mastered = myVocab.filter(v => v.mastered).length;
  document.getElementById('totalVocabCount').textContent = myVocab.length;
  document.getElementById('masteredVocabCount').textContent = mastered;
  document.getElementById('unmasteredVocabCount').textContent = myVocab.length - mastered;
  onSearchVocab(document.getElementById('vocabSearchInput').value);
}}

function onSearchVocab(q) {{
  q = (q || '').trim().toLowerCase();
  const filtered = myVocab.filter(v => {{
    return v.word.toLowerCase().includes(q) || (v.cn && v.cn.toLowerCase().includes(q)) || (v.en && v.en.toLowerCase().includes(q));
  }});

  const c = document.getElementById('savedVocabList');
  if (filtered.length === 0) {{
    c.innerHTML = `<div style="text-align: center; padding: 40px; color: #94A3B8;">暂无生词，快去文章中划词或点击收藏吧！</div>`;
    return;
  }}

  c.innerHTML = filtered.map(v => `
    <div class="card vocab-card" style="cursor: pointer;" onclick="toggleFlashcardReveal('${{v.id}}')">
      <div class="vocab-header">
        <div class="vocab-left">
          <span class="vocab-word">${{v.word}}</span>
          <span class="badge badge-amber">${{v.pos || '词'}}</span>
          <button class="audio-icon-btn" onclick="event.stopPropagation(); playVocabSpeech('${{v.word}}', '${{v.audio || ''}}')">🔊</button>
        </div>
        <span class="badge ${{v.mastered ? 'badge-green' : 'badge-rose'}}">${{v.mastered ? '已掌握' : '待复习'}}</span>
      </div>
      <div class="vocab-meaning" id="vocab_meaning_${{v.id}}">
        <div class="meaning-cn">🇨🇳 ${{v.cn}}</div>
        ${{v.en ? `<div class="meaning-en">🇬🇧 ${{v.en}}</div>` : ''}}
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
        <span style="font-size: 11px; color: #94A3B8;">${{v.addTime || '生词'}}</span>
        <button class="save-btn" onclick="event.stopPropagation(); toggleMasteredWord('${{v.word}}')">
          ${{v.mastered ? '重回复习' : '标为掌握'}}
        </button>
      </div>
    </div>
  `).join('');

  if (isMemoryFlashcard) {{
    filtered.forEach(v => {{
      const el = document.getElementById('vocab_meaning_' + v.id);
      if (el) el.style.display = 'none';
    }});
  }}
}}

function playVocabSpeech(word, audioSrc) {{
  if (audioSrc) {{
    playSingleAudio(audioSrc);
  }} else {{
    speakLookupWordText(word);
  }}
}}

function speakLookupWordText(word) {{
  if ('speechSynthesis' in window) {{
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'es-ES';
    u.rate = currentSpeed || 1.0;
    window.speechSynthesis.speak(u);
  }}
}}

function toggleMemoryFlashcard() {{
  isMemoryFlashcard = !isMemoryFlashcard;
  document.getElementById('flashcardToggleText').textContent = isMemoryFlashcard 
    ? '👀 关闭背词模式' 
    : '🙈 开启背词模式 (隐藏中文释义)';
  renderVocabPage();
}}

function toggleFlashcardReveal(id) {{
  if (!isMemoryFlashcard) return;
  const el = document.getElementById('vocab_meaning_' + id);
  if (el) el.style.display = (el.style.display === 'none') ? 'block' : 'none';
}}

function toggleMasteredWord(word) {{
  const item = myVocab.find(v => v.word === word);
  if (item) {{
    item.mastered = !item.mastered;
    setStorage('my_vocab_web', myVocab);
    renderVocabPage();
  }}
}}

window.onload = init;
</script>
</body>
</html>'''
    return html_template

if __name__ == "__main__":
    # 1. 写入 root index.html
    root_html = generate_html(is_root=True)
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(root_html)

    # 2. 如果存在 web 目录，写入 web/index.html
    web_dir = os.path.join(BASE_DIR, "web")
    if os.path.exists(web_dir):
        web_html = generate_html(is_root=False)
        with open(os.path.join(web_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(web_html)

    # 3. 如果存在 gh-pages-ready 目录，更新 gh-pages-ready
    dist_dir = os.path.join(BASE_DIR, "gh-pages-ready")
    if os.path.exists(dist_dir):
        shutil.copy2(os.path.join(BASE_DIR, "index.html"), os.path.join(dist_dir, "index.html"))

    # 4. 如果存在 gh-pages-ready，更新 zip 包
    if os.path.exists(dist_dir):
        zip_path = os.path.join(BASE_DIR, "spanish-daily-pages.zip")
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(dist_dir):
                for file in files:
                    full_p = os.path.join(root, file)
                    rel_p = os.path.relpath(full_p, dist_dir)
                    zipf.write(full_p, rel_p)

    print("构建完成！")
