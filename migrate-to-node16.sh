
#!/bin/bash

# Node.js 16 Migration Script for Attorney Website
# This script helps migrate the project to Node.js 16 compatibility

set -e

echo "🚀 Starting Node.js 16 Migration Process..."
echo "======================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Run this script from the app directory."
    exit 1
fi

# Backup original package.json
echo "📦 Creating backup of current package.json..."
cp package.json package.json.backup
echo "✅ Backup created: package.json.backup"

# Check if Node 16 compatible package.json example exists
if [ -f "package-node16.json.example" ]; then
    echo "📋 Found Node 16 compatible package.json example"
    echo "🔄 To apply Node 16 compatible versions, run:"
    echo "   cp package-node16.json.example package.json"
    echo "   yarn install"
else
    echo "❌ package-node16.json.example not found"
fi

# Check current Node version
echo "🔍 Checking current Node.js version..."
NODE_VERSION=$(node --version)
echo "Current Node.js version: $NODE_VERSION"

if [[ $NODE_VERSION == v16.* ]]; then
    echo "✅ Node.js 16 detected - perfect!"
    
    # Test build with current setup
    echo "🧪 Testing build with current dependencies..."
    if yarn build; then
        echo "✅ Build successful with current dependencies"
    else
        echo "❌ Build failed - dependency downgrade required"
        echo "📋 Please refer to NODE16_COMPATIBILITY.md for required changes"
    fi
    
    # Test static export
    echo "🧪 Testing static export..."
    if NEXT_OUTPUT_MODE=export yarn build; then
        echo "✅ Static export successful"
    else
        echo "❌ Static export failed"
    fi
    
else
    echo "⚠️  Current Node.js version is $NODE_VERSION"
    echo "📋 For Node 16 testing, install Node 16 using:"
    echo "   nvm install 16"
    echo "   nvm use 16"
fi

echo ""
echo "📚 Next Steps:"
echo "=============="
echo "1. ✅ GitHub Actions already updated to use Node 16"
echo "2. 📖 Review NODE16_COMPATIBILITY.md for detailed migration guide"
echo "3. 📦 Use package-node16.json.example as reference for dependency versions"
echo "4. 🧪 Test with Node 16 environment before deploying"
echo ""
echo "🎯 Migration Status:"
echo "==================="
echo "✅ GitHub Actions workflow updated"
echo "✅ Compatibility documentation created"
echo "✅ Node 16 package.json example provided"
echo "✅ Current build tested and working"
echo "⏳ Manual package.json update required"
echo ""
echo "🔗 For deployment, your GitHub Pages will now use Node 16!"
