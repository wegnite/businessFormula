#!/bin/bash

# 业务公式 BI 看板 启动脚本
# 作者: AI Assistant
# 日期: 2024

echo "🚀 正在启动业务公式 BI 看板..."
echo "=================================="

# 检查Python是否安装
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
else
    echo "❌ 错误: 未找到Python环境"
    echo "请先安装Python: https://www.python.org/downloads/"
    exit 1
fi

# 检查端口是否被占用
if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  端口8000已被占用，尝试使用端口8001..."
    PORT=8001
else
    PORT=8000
fi

# 启动HTTP服务器
echo "🌐 启动HTTP服务器..."
echo "📍 端口: $PORT"
echo "🔗 访问地址: http://localhost:$PORT"
echo "=================================="
echo "按 Ctrl+C 停止服务器"
echo ""

# 尝试在默认浏览器中打开
if command -v open &> /dev/null; then
    # macOS
    open "http://localhost:$PORT"
elif command -v xdg-open &> /dev/null; then
    # Linux
    xdg-open "http://localhost:$PORT"
elif command -v start &> /dev/null; then
    # Windows
    start "http://localhost:$PORT"
fi

# 启动服务器
$PYTHON_CMD -m http.server $PORT 