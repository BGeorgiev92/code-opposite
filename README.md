# CodeOpposite

Marketing website for **CodeOpposite** — a static, single-page site built with React and Vite.

It presents the company's services, process, and contact form, with a bilingual UI (English / Bulgarian), a light/dark theme, scroll animations, and SEO metadata. The site compiles to plain static files (HTML/CSS/JS) and can be hosted anywhere.

---

## Features

- ⚡ **Vite + React 18** — fast dev server and optimized static build
- 🌍 **Bilingual** — English (default) and Bulgarian, switchable in the nav, persisted in `localStorage`
- 🌗 **Light / dark theme** — toggle in the nav (dark is the default), persisted in `localStorage`
- 🎬 **Scroll-reveal animations** and an auto-scrolling tech marquee
- 📮 **Contact form** — submits via AJAX to [Formspree](https://formspree.io) (no backend required)
- 🔍 **SEO ready** — meta tags, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`
- 📱 **Fully responsive** with a hamburger menu on mobile

---

## Prerequisites

- **Node.js 18+** (check with `node -v`)
- **npm** (bundled with Node)

---

## Getting started

Install dependencies and start the local dev server:

```bash
npm install
npm run dev
```

Then open the URL Vite prints — by default **http://localhost:5173**.
The dev server has hot reload, so changes to the source appear instantly.

---

## Available scripts

| Command           | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Start the local development server (hot reload)                     |
| `npm run build`   | Build the production static site into the `dist/` folder            |
| `npm run preview` | Serve the built `dist/` locally to test the production build        |

---

## Project structure

```
code-opposite/
├── index.html               # HTML entry point + SEO meta tags
├── vite.config.js           # Vite configuration
├── render.yaml              # Render deployment config (Infrastructure as Code)
├── public/                  # Static assets copied as-is to the site root
│   ├── logo-with-text.svg        # Logo (light theme)
│   ├── logo-with-text-dark.svg   # Logo (dark theme)
│   ├── hero-illustration.svg     # Hero graphic
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.jsx             # React entry point
    ├── Homepage.jsx         # The full page + ContactForm, language & theme logic
    ├── translations.js      # All UI text, keyed by language (en / bg)
    └── styles.css           # All styles + light/dark theme CSS variables
```

---

## Configuration

- **Contact form** — the Formspree endpoint is the `FORMSPREE_ENDPOINT` constant at the top of `src/Homepage.jsx`. Replace it with your own form ID if needed. Submissions are emailed to the address configured in your Formspree form.
- **Text / translations** — edit `src/translations.js`. English is under `en`, Bulgarian under `bg`.
- **Colors / theme** — brand colors and the light/dark palettes are CSS variables at the top of `src/styles.css` (`--brand-primary`, `--brand-secondary`, and the `:root` / `:root[data-theme="dark"]` blocks).

---

## Building for production

```bash
npm run build      # outputs static files into dist/
npm run preview    # optional: preview the production build locally
```

The `dist/` folder contains the complete static site — deploy its contents to any static host.

---

## Deployment (Render)

The site is configured to deploy as a **Static Site** on [Render](https://render.com) via the included [`render.yaml`](render.yaml):

- **Build command:** `npm install && npm run build`
- **Publish directory:** `dist`

Push to the connected branch and Render rebuilds and redeploys automatically. On Render, either create a **Blueprint** (it reads `render.yaml`) or a **Static Site** with the build command and publish directory above.
