#!/bin/bash

# Test script to validate the dev container setup
echo "🧪 Testing Dev Container Setup..."
echo "=================================="

# Test Node.js
echo ""
echo "📦 Node.js Installation:"
if command -v node &> /dev/null; then
    echo "✅ Node.js: $(node --version)"
else
    echo "❌ Node.js not found"
    exit 1
fi

if command -v npm &> /dev/null; then
    echo "✅ npm: $(npm --version)"
else
    echo "❌ npm not found"
    exit 1
fi

if command -v yarn &> /dev/null; then
    echo "✅ yarn: $(yarn --version)"
else
    echo "❌ yarn not found"
fi

if command -v pnpm &> /dev/null; then
    echo "✅ pnpm: $(pnpm --version)"
else
    echo "❌ pnpm not found"
fi

# Test Python
echo ""
echo "🐍 Python Installation:"
if command -v python3 &> /dev/null; then
    echo "✅ Python: $(python3 --version)"
else
    echo "❌ Python not found"
    exit 1
fi

if command -v pip3 &> /dev/null; then
    echo "✅ pip: $(pip3 --version)"
else
    echo "❌ pip not found"
    exit 1
fi

# Test Python packages
echo ""
echo "📚 Python Packages:"
python3 -c "
import sys
packages = ['requests', 'flask', 'fastapi', 'pytest', 'black', 'flake8', 'numpy', 'pandas']
for pkg in packages:
    try:
        __import__(pkg)
        print(f'✅ {pkg}')
    except ImportError:
        print(f'❌ {pkg}')
"

# Test basic functionality
echo ""
echo "🔧 Basic Functionality:"

# Test Node.js basic script
node -e "console.log('✅ Node.js execution works')" 2>/dev/null || echo "❌ Node.js execution failed"

# Test Python basic script
python3 -c "print('✅ Python execution works')" 2>/dev/null || echo "❌ Python execution failed"

# Test if we're in the container (check for vscode user)
if [ "$(whoami)" = "vscode" ]; then
    echo "✅ Running as vscode user"
else
    echo "⚠️  Not running as vscode user (current: $(whoami))"
fi

echo ""
echo "🎉 Setup test completed!"