# Shosholoza Website - Deployment Guide

## Deployment Options

This static website can be deployed to various hosting platforms. Here are the most common options:

### 1. GitHub Pages

1. Create a GitHub repository for this project
2. Push your code to the repository
3. Go to repository Settings → Pages
4. Select the branch to deploy from (usually `main`)
5. Your site will be available at `https://yourusername.github.io/repository-name`

### 2. Netlify

1. Sign up at [netlify.com](https://www.netlify.com)
2. Connect your GitHub repository (or drag and drop the `shosholoza-website` folder)
3. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
4. Click "Deploy site"
5. Your site will be live with a custom Netlify URL

### 3. Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect the static site
4. Click "Deploy"
5. Your site will be live instantly

### 4. Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize Firebase in your project: `firebase init hosting`
4. Configure:
   - Public directory: `.`
   - Single-page app: No
   - Automatic builds: Optional
5. Deploy: `firebase deploy`

### 5. Custom Server

Upload all files to your web server via FTP/SFTP or SSH:

```bash
# Example using rsync
rsync -avz --exclude='.git' shosholoza-website/ user@yourserver.com:/var/www/html/
```

## Pre-Deployment Checklist

- [ ] Test all pages locally
- [ ] Verify all links work correctly
- [ ] Check responsive design on different screen sizes
- [ ] Optimize images for web
- [ ] Test contact form functionality
- [ ] Update contact information
- [ ] Set up analytics (optional)
- [ ] Configure custom domain (if applicable)

## Custom Domain Setup

### DNS Configuration

Point your domain to your hosting provider:

**For Netlify/Vercel:**
- Add A record: `192.0.2.1` (check your provider's docs)
- Add CNAME record: `www` → `your-site.netlify.app`

**For GitHub Pages:**
- Add A records to GitHub's IPs
- Add CNAME record: `www` → `yourusername.github.io`

## SSL Certificate

Most modern hosting platforms (Netlify, Vercel, GitHub Pages) provide free SSL certificates automatically.

## Continuous Deployment

Set up automatic deployments by connecting your Git repository to your hosting platform. Every push to the main branch will trigger a new deployment.

## Monitoring

Consider setting up:
- Google Analytics for visitor tracking
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry, LogRocket)

## Support

For deployment issues, consult:
- Your hosting provider's documentation
- The Shosholoza technical team
- Community forums for your chosen platform
