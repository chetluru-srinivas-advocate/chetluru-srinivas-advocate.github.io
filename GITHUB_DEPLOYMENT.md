
# GitHub Pages Deployment Instructions

## Quick Setup (5 minutes)

### 1. Create GitHub Repository
```bash
# Create new repository on GitHub named "attorney-website"
# Clone or initialize locally
git init
git add .
git commit -m "Initial commit: Attorney website ready for GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/attorney-website.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **"GitHub Actions"**
3. Save settings

### 3. Configure Repository Permissions
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **"Read and write permissions"**
3. Check **"Allow GitHub Actions to create and approve pull requests"**
4. Save

### 4. Deploy
```bash
# Any push to main branch will trigger deployment
git push origin main
```

## Verification

### Check Deployment Status
1. Go to **Actions** tab in your repository
2. Monitor the deployment workflow
3. Once completed, visit: `https://USERNAME.github.io/attorney-website/`

### Test All Features
- ✅ Homepage loads with professional design
- ✅ Navigation works between pages
- ✅ Individual attorney profiles accessible
- ✅ Contact forms open email client correctly
- ✅ Mobile responsive design works
- ✅ All styling and animations work

## Troubleshooting

### Common Issues
1. **404 on refresh**: Normal for GitHub Pages, users can navigate back to home
2. **Images not loading**: Check paths start with `/` and files are in `public/`
3. **Deployment fails**: Check Actions tab for detailed error logs

### Manual Build Test
```bash
# Test build locally before deploying
chmod +x deploy.sh
./deploy.sh

# Serve locally to test
cd out
python3 -m http.server 8080
# Visit http://localhost:8080
```

## Success Metrics
- ✅ All 14 pages generated successfully
- ✅ 6 attorney profiles with dynamic routing
- ✅ Mailto-based contact functionality
- ✅ Professional design maintained
- ✅ Mobile responsive
- ✅ SEO optimized static HTML
- ✅ Fast loading times
- ✅ No server dependencies

---

**Your website will be live at:** `https://YOUR_USERNAME.github.io/attorney-website/`
