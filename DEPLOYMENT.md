
# Quick Deployment Checklist

## Pre-Deployment

- [ ] Repository created on GitHub
- [ ] Code pushed to `main` branch
- [ ] GitHub Actions enabled in repository settings
- [ ] Workflow permissions set to "Read and write permissions"

## Configuration

- [ ] Repository name matches configuration (or updated accordingly)
- [ ] Contact form email address updated in `components/contact-form.tsx`
- [ ] All image paths use relative paths starting with `/`

## Deployment Steps

1. **Enable GitHub Pages:**
   ```
   Repository Settings → Pages → Source: GitHub Actions
   ```

2. **Trigger Deployment:**
   ```bash
   git push origin main
   ```

3. **Monitor Progress:**
   ```
   Repository → Actions tab → Watch deployment
   ```

4. **Verify Site:**
   ```
   Visit: https://USERNAME.github.io/REPO-NAME/
   ```

## Post-Deployment Verification

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Attorney profile pages load
- [ ] Contact forms open email client
- [ ] Mobile responsiveness works
- [ ] All images display properly

## Common Fixes

**404 Errors:**
- Check file paths are case-sensitive
- Verify routing configuration

**Styling Issues:**
- Clear browser cache
- Check base path configuration

**Images Not Loading:**
- Ensure images are in `public/` directory
- Use paths starting with `/`

---

**Deployment URL:** `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
