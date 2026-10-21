# Pelicans Nest Cafe — website concept

Live preview: https://pelicans-nest-website.vercel.app

Redesign concept for [Pelicans Nest Cafe](http://pelicansnestcafe.com.au/), 143 The Esplanade, Wynnum QLD.
Next.js + TypeScript + Tailwind CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Content (nothing invented)

- `src/content/menu.ts` — the full menu transcribed from the cafe's 9 menu boards dated 10/1/26
  (published on their website as images), including house notes and the fish board.
- `src/content/site.ts` — address, phone and email from their website. **Opening hours aren't
  published there**, so the site shows breakfast times (from the menu board) and "call for hours".
  Third-party listings show 7am–8pm daily — confirm with the owner, then fill in `site.hours`.
- `public/images/` — their Esplanade photo and logos. No food photos exist yet; the design is
  typographic on purpose. Real food photos would be the biggest upgrade.

## Features

- Postcard hero (their own photo, round logo as the stamp)
- **Fish builder**: fish × cooking style × seasoning × make-it-a-meal × quantity, with the board's
  prices and rules (grilled-only fish, crumbed/battered-only flathead, seasoning on grilled only)
- Full menu with sticky category tabs; family packs; call-to-order everywhere; mobile action bar
- Restaurant structured data with the full menu (no hours until confirmed); `isPreview` = noindex

## Deploy on Vercel

New Project → import **`matischroder/pelicans-nest-website`** → leave Root Directory empty → Deploy.

(From the `helensvalelandscapesupplies` monorepo instead: Root Directory **`sites/pelicans-nest`**.)
