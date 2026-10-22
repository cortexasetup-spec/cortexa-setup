# Cortexa AI — Public Website

**Type:** Public multi-page marketing site (converted from the internal hiring dashboard)
**Theme:** black/purple/gold (dark) + light theme toggle
**Stack:** React 19 + Vite 8 + TypeScript + react-router-dom

---

## Pages (separate routes)

| Route | Page | Content |
|-------|------|---------|
| `/` | Home | Hero, services preview, values, CTA |
| `/services` | Services | All 6 services + 4-step process |
| `/about` | About | Mission, values, stats |
| `/contact` | Contact | Message form + email + social links |

Each page **loads separately** with a page-transition animation.

---

## Features

- **Page transitions** — smooth fade/slide on route change
- **Scroll-reveal** animations on every section
- **Dark / light theme toggle** (saved in localStorage)
- **Animated accent strip** in the header
- **Hover effects** — cards lift + gradient borders + sheen sweep, buttons shine
- **Floating glow orbs** in the hero
- **Mail icon** + email `CortexxaAI@gmail.com`
- **Social icons** with brand-colored hovers (Facebook, Instagram, TikTok, LinkedIn)
- Fully responsive (mobile nav drawer)

---

## Contact details

- **Email:** CortexxaAI@gmail.com
- **Facebook:** https://www.facebook.com/profile.php?id=61595550157907
- **TikTok:** https://www.tiktok.com/@cortexxa.ai
- **Instagram:** (add real URL in `src/data.ts`)
- **LinkedIn:** (add real URL in `src/data.ts`)

---

## Run it

```bash
npm install          # first time only
npm run dev          # dev server → http://localhost:5173/
```

Production build:

```bash
npm run build        # outputs to dist/
npm run preview      # preview the built site
```

---

## Deploy (free)

`dist/` is ready for any static host. `vercel.json` already includes the SPA
rewrite rule (needed because this is a routed multi-page app).

- Vercel
- Netlify (add `/* → /index.html` redirect)
- Cloudflare Pages (add SPA fallback)
- GitHub Pages (use HashRouter if no rewrites are possible)

---

## Project structure

```
cortexa-hiring-ui/
├── index.html              # entry (theme bootstrap + meta)
├── src/
│   ├── App.tsx             # router
│   ├── data.ts             # services, values, socials, email
│   ├── site.css            # all styles (dark + light)
│   ├── index.css           # base
│   ├── main.tsx            # React entry
│   ├── components/
│   │   ├── Layout.tsx      # header + footer + theme toggle
│   │   ├── Icons.tsx       # inline SVG icons
│   │   └── Reveal.tsx      # scroll-reveal wrapper
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── assets/             # Logo.png, hero.png
├── public/                 # logo.png, favicon.svg, icons.svg
├── dist/                   # production build
├── package.json
├── vite.config.ts
└── tsconfig*.json
```

---

## Edit content

- Services / values / socials / email → `src/data.ts`
- Page text → `src/pages/*.tsx`
- Colors / theme → `src/site.css`

---

## What changed (2026-10-22)

Converted the internal hiring/operations dashboard into a public multi-page website.

- ✅ Multi-page routing (Home, Services, About, Contact) with react-router-dom
- ✅ New `Layout.tsx` (header, nav, theme toggle, footer, page transitions)
- ✅ New `Reveal.tsx` (scroll animations)
- ✅ New `Icons.tsx` (mail + social + theme SVGs)
- ✅ New `site.css` (dark + light themes, animations, hovers)
- ✅ Updated email → **CortexxaAI@gmail.com**
- ✅ TikTok → **https://www.tiktok.com/@cortexxa.ai**
- ✅ Removed internal dashboard files (backed up in `_memory/internal-dashboard-backup/`)

---

## Client delivery docs (kept)

- `phase1-deliverables/` — Phase 1 docs
- `phase2-deliverables/` — Phase 2 runbooks, replies
- `_memory/` — messages, progress, hour logs, internal backup
