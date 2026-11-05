@echo off
chcp 65001 >nul
echo =======================================================
echo     ¡Hola! 西语每日早报 - GitHub Pages 一键推送工具
echo =======================================================
echo.
echo 第一步：在浏览器打开 https://github.com/new
echo         新建一个公开仓库 (Repository name 建议填: spanish-daily)
echo.
echo 第二步：复制生成的仓库链接 (如: https://github.com/用户名/spanish-daily.git)
echo.
set /p REPO_URL="请输入或粘贴您的 GitHub 仓库地址: "

if "%REPO_URL%"=="" (
    echo 输入为空，已取消。
    pause
    exit /b
)

set GIT_EXE="%~dp0..\tools\mingit\cmd\git.exe"
cd /d "%~dp0"

echo.
echo [1/2] 正在连接到您的远程仓库: %REPO_URL%
%GIT_EXE% remote remove origin >nul 2>&1
%GIT_EXE% remote add origin %REPO_URL%

echo.
echo [2/2] 正在推送 10 篇西语早报与 67 个母语音频到 GitHub...
%GIT_EXE% push -u origin main --force

echo.
echo =======================================================
echo   推送完成！
echo.
echo   最后一步开启网页：
echo   1. 打开您刚才建的 GitHub 仓库页面
echo   2. 点击顶部「Settings」-> 左侧「Pages」
echo   3. Branch 选择「main」，点击「Save」保存
echo.
echo   等待 1 分钟即可在手机/电脑通过以下地址永久访问：
echo   https://您的用户名.github.io/spanish-daily/
echo =======================================================
pause
