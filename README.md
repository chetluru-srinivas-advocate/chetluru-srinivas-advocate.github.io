
# Chetluru Srinivas & Associates - Attorney Website

A professional, responsive NextJS website for Chetluru Srinivas & Associates law firm, optimized for GitHub Pages deployment.

## 🚀 GitHub Pages Deployment Guide

### Prerequisites

- GitHub account
- Git installed on your local machine
- Node.js 18+ installed (for local development)

### Step 1: Repository Setup

1. **Create a new GitHub repository:**
   - Name it `attorney-website` (or your preferred name)
   - Make it public (required for free GitHub Pages)
   - Don't initialize with README, .gitignore, or license

2. **Push your code to GitHub:**
   ```bash
   cd attorney-website
   git init
   git add .
   git commit -m "Initial commit: Attorney website for GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/attorney-website.git
   git push -u origin main
   ```

### Step 2: GitHub Pages Configuration

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on `Settings` tab
   - Scroll down to `Pages` section in the left sidebar
   - Under `Source`, select `GitHub Actions`

2. **Configure repository settings:**
   - In the `Actions` tab, ensure Actions are enabled
   - Go to `Settings` > `Actions` > `General`
   - Under `Workflow permissions`, select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

### Step 3: Update Configuration (Important!)

Before deploying, you need to update the repository name in the configuration:

1. **Edit the GitHub Actions workflow:**
   - Open `.github/workflows/deploy.yml`
   - If your repository name is different from `attorney-website`, you may need to adjust paths

2. **Update base path configuration:**
   - The current configuration assumes your repository is named `attorney-website`
   - If you use a different name, create a `.env.local` file:
   ```bash
   NEXT_PUBLIC_BASE_PATH=/your-repository-name
   ```

### Step 4: Deploy

1. **Trigger deployment:**
   - Push any commit to the `main` branch, or
   - Go to `Actions` tab and manually trigger the workflow

2. **Monitor deployment:**
   - Go to the `Actions` tab in your repository
   - Watch the deployment process in real-time
   - Deployment typically takes 2-5 minutes

3. **Access your website:**
   - Once deployed, your site will be available at:
   - `https://YOUR_USERNAME.github.io/attorney-website/`

### Step 5: Custom Domain (Optional)

If you want to use a custom domain:

1. **Add CNAME file:**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Configure DNS:**
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub Pages IPs

3. **Update GitHub settings:**
   - Go to repository `Settings` > `Pages`
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## 🔧 Local Development

### Setup

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Build static export (for GitHub Pages testing)
NEXT_OUTPUT_MODE=export yarn build
```

### Available Scripts

- `yarn dev` - Start development server on http://localhost:3000
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 📁 Project Structure

```
attorney-website/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment workflow
├── app/
│   ├── (pages)/           # Next.js app router pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/               # Reusable UI components
│   ├── contact-form.tsx  # Contact form (mailto-based)
│   ├── header.tsx        # Site header
│   └── footer.tsx        # Site footer
├── public/               # Static assets
└── README.md            # This file
```

## ✨ Features

- **Professional Design:** Modern, clean law firm aesthetic
- **Fully Responsive:** Optimized for all devices
- **Static Export:** Compatible with GitHub Pages
- **Contact Forms:** Mailto-based contact functionality
- **Attorney Profiles:** Individual pages for each attorney
- **Practice Areas:** Detailed practice area descriptions
- **Testimonials:** Client success stories
- **SEO Optimized:** Meta tags and structured data

## 📧 Contact Form Functionality

The contact forms use a mailto approach that:
- Opens the user's default email client
- Pre-fills recipient, subject, and message body
- Works perfectly with static hosting
- Maintains professional appearance and UX

## 🚨 Troubleshooting

### Common Issues

1. **404 errors on page refresh:**
   - This is normal for GitHub Pages with client-side routing
   - Users can navigate back to home page

2. **Images not loading:**
   - Ensure all images are in the `public/` directory
   - Use relative paths starting with `/`

3. **Deployment fails:**
   - Check that your repository has Actions enabled
   - Verify workflow permissions are set correctly
   - Check the Actions log for specific error messages

4. **CSS/JS not loading:**
   - Verify the base path configuration matches your repository name
   - Clear browser cache and try again

### Getting Help

If you encounter issues:
1. Check the GitHub Actions log for detailed error messages
2. Verify all file paths are correct and case-sensitive
3. Ensure your repository name matches the configuration
4. Try deploying to a test repository first

## 📝 Maintenance

### Updating Content

1. **Edit attorney information:** Update files in `app/team/`
2. **Modify practice areas:** Edit `app/practice-areas/page.tsx`
3. **Update contact info:** Modify contact form email address in `components/contact-form.tsx`

### Adding New Pages

1. Create new page file in `app/` directory
2. Add navigation link in `components/header.tsx`
3. Update sitemap if needed

## 🔒 Security & Privacy

- No server-side processing required
- No database or API keys needed
- Client-side form handling only
- HTTPS enforced by GitHub Pages

---

## 📞 Support

For website updates or technical support, contact the development team.

Website URL: https://YOUR_USERNAME.github.io/attorney-website/
Repository: https://github.com/YOUR_USERNAME/attorney-website
