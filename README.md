# Usama Bakers & Hotbites — Website

Production website for **Usama Bakers & Hotbites**, a sweets, bakes and hot-bites restaurant in Pakistan.

- **Stack:** Next.js 14 (App Router) · TypeScript strict · Tailwind CSS · Framer Motion
- **Features:** Bilingual EN/UR · WhatsApp-first ordering · Menu + Deals + Categories
- **Live:** https://usama-bakers.vercel.app *(deployed on Vercel — see below)*

## Local development

```bash
cd usamabakers
npm install
npm run dev          # http://localhost:3000
```

Production build:

```bash
cd usamabakers
npm run build
npm start
```

## Project layout

```
Restaurant/                ← this repo (root)
├── .gitignore
├── README.md
└── usamabakers/            ← the Next.js app
    ├── app/                ← routes (page.tsx, layout.tsx, etc.)
    ├── components/         ← UI components (Navbar, Hero, CartDrawer, …)
    ├── lib/                ← data, i18n, cart context, WhatsApp helpers
    ├── public/             ← static assets
    ├── next.config.mjs
    ├── tailwind.config.ts
    └── package.json
```

## Deploying to Vercel

1. Go to https://vercel.com/new and import `taharizwan1057-spec/Restaurant`.
2. **Root Directory:** click Edit → type `usamabakers` → Continue.
3. Framework Preset: Next.js (auto-detected). No env vars needed.
4. Click **Deploy**. URL is provisioned in ~1–2 minutes.

Every push to `main` triggers an automatic redeploy.

## Contact

WhatsApp-first ordering — see the live site's WhatsApp button for the current number.
