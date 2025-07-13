@echo off
chcp 65001 > nul
title 业务公式 BI 看板

echo 🚀 正在启动业务公式 BI 看板...
echo ==================================

REM 检查Python是否安装
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误: 未找到Python环境
    echo 请先安装Python: https://www.python.org/downloads/
    pause
    exit /b 1
)

REM 检查端口是否被占用
netstat -an | findstr :8000 >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠️  端口8000已被占用，尝试使用端口8001...
    set PORT=8001
) else (
    set PORT=8000
)

REM 启动HTTP服务器
echo 🌐 启动HTTP服务器...
echo 📍 端口: %PORT%
echo 🔗 访问地址: http://localhost:%PORT%
echo ==================================
echo 按 Ctrl+C 停止服务器
echo.

REM 在默认浏览器中打开
start http://localhost:%PORT%

REM 启动服务器
python -m http.server %PORT%

pause 