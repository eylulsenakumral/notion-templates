# Auto Company Ops Kit - Landing Page

Production-ready landing page for the Auto Company Ops Kit Notion Template Pack.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**

## Features

- Sticky header with backdrop blur
- Fade-in-up scroll animations
- Interactive FAQ accordion
- Pricing cards with hover effects
- Fully responsive (mobile-first)
- SEO optimized with meta tags
- Accessible (WCAG AA compliant)
- Production-ready for Vercel

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Static Export

The app is configured for static export (`output: 'export'`), so it generates static HTML files that can be hosted anywhere:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Any static hosting

## File Structure

```
notion-templates/
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind config
├── next.config.ts         # Next.js config (static export)
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with SEO meta tags
│   │   ├── page.tsx       # Landing page component
│   │   └── globals.css    # Global styles + Tailwind
│   └── components/       # (Reusable components)
└── public/               # Static assets
```

## Design System

Following the design spec from `docs/ui/notion-landing-design-spec.md`:

- **Colors**: Blue primary, Gray neutral, Emerald/Accent accents
- **Typography**: Inter (Google Fonts)
- **Spacing**: 8px grid system
- **Shadows**: 4-level elevation system
- **Animations**: Fade-in-up on scroll, hover effects

## Sections

1. **Hero** - Main value proposition with CTAs
2. **Problem/Solution** - Before/After comparison
3. **Templates Grid** - 4 template cards with features
4. **Pricing** - 3-tier pricing table
5. **FAQ** - Expandable accordion
6. **Final CTA** - Gradient banner with Telegram link
7. **Footer** - Links and copyright

## Performance

- Lighthouse Score: 90+ target
- Font optimization with display-swap
- Critical CSS inline
- Lazy loading for images
- Static HTML generation

## License

MIT License - Same as Auto Company project.
