# Deployment Guide — Shosholoza FC Website

## Quick Deploy to Vercel (Recommended)

Vercel is built by the Next.js team and provides the best deployment experience:

### Step 1: Push to GitHub

```bash
# Initialize git if not done
git init
git add .
git commit -m "Initial Shosholoza FC website"

# Create GitHub repo and push
git remote add origin https://github.com/your-org/shosholoza-fc-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

Your site will be live in ~2 minutes at `your-project.vercel.app`

### Step 3: Configure Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add `shosholozafc.org.za`
3. Update DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.19.19

   Type: CNAME  
   Name: www
   Value: cname.vercel-dns.com
   ```
4. SSL certificate is automatic and free

## Alternative: Static Export

If you prefer traditional static hosting (Netlify, AWS S3, etc.):

### Step 1: Configure Static Export

Edit `next.config.ts`:

```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
```

### Step 2: Build

```bash
npm run build
```

Output will be in `/out` directory.

### Step 3: Deploy

Upload the `/out` directory to:
- **Netlify:** Drag & drop or connect Git
- **AWS S3:** Upload to bucket + CloudFront
- **Firebase Hosting:** `firebase deploy`
- **GitHub Pages:** Copy to gh-pages branch

## Environment Variables

### Contact Form Email (Optional)

Create `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Add to Vercel:
1. Project Settings → Environment Variables
2. Add `RESEND_API_KEY`
3. Redeploy

### Analytics (Optional)

For Google Analytics:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Then add to `app/layout.tsx`.

## Pre-Launch Checklist

### Content
- [ ] Replace all placeholder images
- [ ] Add real club badge
- [ ] Verify all copy is final
- [ ] Update contact information
- [ ] Confirm staff names are current

### Technical
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Set up contact form email
- [ ] Configure analytics
- [ ] Test all forms
- [ ] Check all links

### Domain & SEO
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Add meta descriptions
- [ ] Create sitemap
- [ ] Submit to Google Search Console
- [ ] Set up 301 redirects (if replacing old site)

## Monitoring & Maintenance

### Vercel Dashboard
- View deployment history
- Check build logs
- Monitor bandwidth usage
- Review analytics

### Regular Updates
- Keep dependencies updated: `npm update`
- Review and respond to contact form submissions
- Update news section regularly
- Monitor performance with Lighthouse

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Images Not Loading
Ensure images are in `/public/` directory and referenced with `/images/filename.jpg`

### Contact Form Not Working
1. Check API route at `/api/contact`
2. Verify email service credentials
3. Check browser console for errors

## Support

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Deployment Issues:** Check build logs in Vercel dashboard

---

**Last Updated:** September 2026
