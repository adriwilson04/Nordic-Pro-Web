# Shosholoza FC — Website MVP

Modern, mobile-first marketing website for Shosholoza FC, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

Shosholoza FC operates an integrated four-stage football development pathway from grassroots Cape Town to professional Scandinavian football:

1. **Shosholoza Skilz School** — U8–U12 skills feeder program
2. **Shosholoza FC** — U12–23 club football, Cape Town
3. **Skärgård IK** — Competitive platform, Stockholm, Sweden
4. **Nordic Pro** — Professional scouting & placement

**Website:** www.shosholozafc.org.za (to be deployed)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended) or static export

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## 🗂️ Site Structure

```
/                     Home page with hero, pathway visual, stats
/about                Organization story, mission, vision
/pathway              Pathway hub (overview of all 4 stages)
/pathway/skilz-school        Stage 1 details
/pathway/shosholoza-fc       Stage 2 details
/pathway/skargard-ik         Stage 3 details
/pathway/nordic-pro          Stage 4 details
/impact               Goals, diversity, leadership, career exposure
/sponsorship          Sponsorship tiers & packages
/news                 Updates feed (3 seeded posts)
/contact              Contact form & information
```

## ✨ Key Features

### PathwayPipeline Component
The signature visual element — a four-stage horizontal (desktop) / vertical (mobile) pipeline showing Skilz School → Shosholoza FC → Skärgård IK → Nordic Pro. This component is reusable and appears on both the home page and pathway hub.

### Responsive Design
Mobile-first design tested at:
- 375px (mobile)
- 768px (tablet)
- 1280px (desktop)

### Performance Optimized
- Built for fast load on constrained mobile data
- Lazy loading for below-the-fold content
- Optimized images (placeholders currently)

## 🎨 Design System

### Colors
```css
--color-primary: #1a472a;      /* Club green */
--color-secondary: #fdb913;    /* Club gold */
--color-accent: #e53935;       /* Red accent */
```

### Typography
- Font: Inter (via Google Fonts)
- Headings: Bold, hierarchical sizing
- Body: Regular weight, 1.6 line height

## 📝 Content Guidelines

### What's Included
- Exact copy from the build spec where quoted
- Accurate pathway stage descriptions
- Real organization story and mission
- Authentic sponsorship packages
- Actual facility address

### What's NOT Included (Placeholder)
- Real photography (gray placeholder boxes)
- Club badge/crest (using "S" placeholder)
- Actual coaching staff names/headshots
- Final NPO registration number (to be verified)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Configure domain: shosholozafc.org.za
4. Deploy

### Static Export (Alternative)

```bash
# Add to next.config.js:
output: 'export'

# Build
npm run build

# Output in /out directory
# Upload to any static host
```

## 📧 Contact Form

Current implementation logs to console. To enable email:

1. Choose service (Resend, SendGrid, etc.)
2. Add API key to `.env.local`:
   ```
   RESEND_API_KEY=your_key_here
   ```
3. Uncomment email code in `/app/api/contact/route.ts`

## 🖼️ Asset Integration

### Club Badge
Replace placeholder in:
- `/components/Header.tsx` (navigation logo)
- Update favicon and metadata images

### Photography
Replace placeholder blocks with real images:
1. Add images to `/public/images/`
2. Update image paths in page files
3. Use Next.js `<Image>` component for optimization

## ⚠️ Pre-Launch Checklist

- [ ] Replace all placeholder images with real photography
- [ ] Add actual club badge/crest
- [ ] Verify NPO registration details
- [ ] Confirm current staff/contact information
- [ ] Update stats (players, coaches, years) with real figures
- [ ] Extract and confirm actual club colors from badge
- [ ] Set up contact form email integration
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Set up domain and SSL certificate
- [ ] Test on real mobile devices
- [ ] SEO optimization (meta descriptions, keywords)

## 📱 Mobile Performance

Tested viewport sizes:
- iPhone SE (375px)
- iPad (768px)
- Desktop (1280px+)

All pages are fully responsive with touch-optimized interactions.

## 🔧 Development

```bash
# Format code
npm run lint

# Type checking
npx tsc --noEmit
```

## 📄 License

All rights reserved - Shosholoza FC

## 📞 Support

For questions about this website build:
- Review the original build spec document
- Check component documentation in `/components/`
- Consult Next.js 14 documentation

---

**Built:** September 2026
**Version:** 1.0.0 (MVP)
**Status:** Ready for content review and asset integration
