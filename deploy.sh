
#!/bin/bash

# GitHub Pages Deployment Script for Attorney Website
# This script builds the static site and prepares it for GitHub Pages deployment

echo "🚀 Building Attorney Website for GitHub Pages..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf out .next/.cache

# Build static export
echo "🔨 Building static export..."
NEXT_OUTPUT_MODE=export NEXT_DIST_DIR=out NODE_ENV=production yarn build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in ./out directory"
    echo "📊 Build summary:"
    ls -la out/ | wc -l
    echo "   Total files: $(find out -type f | wc -l)"
    echo "   HTML pages: $(find out -name "*.html" | wc -l)"
    echo "   Team profiles: $(find out/team -name "*.html" | wc -l)"
    echo ""
    echo "🌐 Ready for GitHub Pages deployment!"
    echo "📄 Next steps:"
    echo "   1. Push code to GitHub repository"
    echo "   2. Enable GitHub Pages in repository settings"
    echo "   3. Set source to 'GitHub Actions'"
    echo "   4. The workflow will automatically deploy your site"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
