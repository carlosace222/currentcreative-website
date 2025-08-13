# Current Creative AI Website

A premium, lead-generation website for Current Creative AI, a digital marketing consulting firm serving Rockland County, NY and the Lower Hudson Valley.

## 🚀 Quick Start

1. **Clone and install dependencies:**
```bash
git clone https://github.com/carlosace222/currentcreative-website.git
cd currentcreative-website
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animation:** Framer Motion
- **Form Handling:** React Hook Form + Zod
- **Deployment:** Vercel
- **Analytics:** Google Analytics 4

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with GA4, Header, Footer
│   ├── page.tsx           # Homepage with hero, services, testimonials
│   ├── services/          # Services pages
│   ├── service-areas/     # Location-based pages
│   ├── contact/           # Contact page with form
│   └── api/              # API routes
├── components/            # Reusable React components
├── content/              # Data files (services, cities)
├── lib/                  # Utilities (analytics, SEO)
├── public/              # Static assets
└── styles/              # Global CSS
```

## 🎯 Key Features

### Lead Generation Funnels
1. **Free Strategy Session** - Primary CTA throughout site
2. **Lead Magnet Download** - "Local Marketing Blueprint"
3. **Quick Contact** - Sticky floating CTA button

### SEO & Performance
- JSON-LD structured data for local business
- Open Graph and Twitter Card meta tags
- Optimized for Core Web Vitals
- WCAG 2.2 AA accessibility compliance
- Mobile-first responsive design

### Analytics & Tracking
Built-in event tracking for:
- `lead_form_start` - User starts filling form
- `lead_form_submit` - Form submission
- `book_meeting` - CTA clicks for scheduling
- `download_blueprint` - Lead magnet downloads
- `cta_click` - General CTA interactions

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel:**
```bash
vercel --prod
```

2. **Set environment variables in Vercel dashboard:**
- `NEXT_PUBLIC_GA_ID`
- `RESEND_API_KEY`
- Other variables from `.env.example`

3. **Custom domain setup:**
- Add your domain in Vercel dashboard
- Update DNS records as instructed

### Alternative Deployment Options
- **Netlify:** Connect GitHub repo, set build command to `npm run build`
- **AWS Amplify:** Use the Next.js SSG configuration
- **Self-hosted:** Run `npm run build && npm run start`

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (format: G-XXXXXXXXXX)
3. Add to `NEXT_PUBLIC_GA_ID` environment variable
4. Deploy and verify tracking in GA4 Real-time reports

### Custom Events
All tracking events are defined in `lib/analytics.ts`:
- Lead form interactions
- CTA button clicks
- Page engagement
- Download tracking

## 📧 CRM Integration

### Resend Email Integration
1. Sign up at [resend.com](https://resend.com)
2. Get API key and add to `RESEND_API_KEY`
3. Verify domain for sending
4. Uncomment email code in `app/api/contact/route.ts`

### HubSpot Integration (Optional)
1. Get HubSpot API key from your account
2. Add `HUBSPOT_API_KEY` to environment variables
3. Implement contact creation in API route

## 🔍 SEO Checklist

### On-Page Optimization
- [x] Title tags optimized for local keywords
- [x] Meta descriptions under 160 characters
- [x] H1-H6 hierarchy properly structured
- [x] Internal linking strategy implemented
- [x] Image alt tags for all images
- [x] Schema markup for local business

### Technical SEO
- [x] Clean URL structure
- [x] XML sitemap generated
- [x] Robots.txt configured
- [x] Core Web Vitals optimized
- [x] Mobile-first responsive design
- [x] HTTPS enabled

### Local SEO
- [x] Google Business Profile optimization ready
- [x] NAP (Name, Address, Phone) consistency
- [x] Location-based landing pages
- [x] Local schema markup
- [x] Service area targeting

## ♿ Accessibility

### WCAG 2.2 AA Compliance
- [x] Keyboard navigation support
- [x] Focus indicators visible
- [x] Color contrast ratios meet standards
- [x] Screen reader compatible
- [x] Skip to content link
- [x] Form labels and error handling
- [x] Semantic HTML structure

## 📈 Performance

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** ≤ 2.5s
- **INP (Interaction to Next Paint):** ≤ 200ms  
- **CLS (Cumulative Layout Shift):** ≤ 0.1

### Performance Optimizations
- Image optimization with Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading
- Efficient bundle size with tree shaking
- CDN delivery via Vercel Edge Network

## 🧪 Testing & Quality Assurance

### Lighthouse Audit
```bash
# Run Lighthouse audit
npx lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
```

### Accessibility Testing
```bash
# Install axe-core CLI
npm install -g @axe-core/cli

# Run accessibility audit
axe http://localhost:3000
```

### Performance Testing
- Use Chrome DevTools Performance tab
- Test on slow 3G connection
- Verify on actual mobile devices
- Check Core Web Vitals in PageSpeed Insights

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```javascript
colors: {
  primary: '#2563eb',    // Blue
  secondary: '#1e40af',  // Dark blue
  // Add your brand colors
}
```

### Content Updates
- **Services:** Edit `content/services.ts`
- **Cities:** Edit `content/cities.ts`
- **Business Info:** Edit `next-seo.config.ts`

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks (optional)

## 📞 Support

### Getting Help
- **Documentation:** Check this README and inline code comments
- **Issues:** Create GitHub issue for bugs or features
- **Email:** hello@currentcreative.ai for business inquiries

### Maintenance
- Update dependencies monthly: `npm update`
- Monitor Core Web Vitals in Search Console
- Review analytics data monthly
- Test contact forms regularly
- Keep content fresh with blog posts

## 📄 License

This project is proprietary software owned by Current Creative AI. All rights reserved.

---

**Built with ❤️ for local business success in Rockland County & Lower Hudson Valley**