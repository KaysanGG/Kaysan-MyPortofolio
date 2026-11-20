# Kaysan Rafi Akbar - Portfolio (Astro + Tailwind CSS)

A Persona 5 UI-inspired portfolio website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## ✨ Features

- **Persona 5 Aesthetic**: Halftone patterns, high-contrast brutalist panels, ransom-box typography, slanted geometries, and dynamic animations.
- **Modern Astro Architecture**: Component-driven structure (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Footer`).
- **Asset Optimization**: Built-in Astro image processing (`astro:assets`) converting images to modern WebP with responsive sizing and layout stability.
- **Precompiled Tailwind CSS**: Pre-bundled CSS without CDN runtime overhead.
- **Interactivity**:
  - Interactive Game-Menu style skill switcher
  - Dynamic typewriter ticker with role rotation
  - Slanted mobile navigation drawer with keyboard (`Escape`) and click-outside handling
  - IntersectionObserver scroll reveal animations
  - Dynamic red slash background angle calculation

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg          # Persona-style SVG favicon
│   └── images/              # Static fallback assets
├── src/
│   ├── assets/
│   │   └── images/          # Optimized image assets (profile, project screenshot, pixel heart)
│   ├── components/
│   │   ├── About.astro      # Profile & background section
│   │   ├── Experience.astro # Mission logs timeline
│   │   ├── Footer.astro     # Bottom footer with back-to-top
│   │   ├── Hero.astro       # Landing section & profile frame
│   │   ├── Navbar.astro     # Header navigation & mobile drawer
│   │   ├── Projects.astro   # Portfolio showcase
│   │   └── Skills.astro     # Game-style command inventory
│   ├── layouts/
│   │   └── Layout.astro     # Main HTML shell, SEO metadata, fonts
│   ├── pages/
│   │   └── index.astro      # Primary homepage entry
│   └── styles/
│       └── global.css       # Tailwind base and Persona 5 custom styles
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🛠️ Getting Started

### Development
```bash
npm run dev
```
Starts the local development server at `http://localhost:4321/`.

### Type & Quality Check
```bash
npm run check
```
Runs `astro check` to validate TypeScript and component syntax.

### Production Build
```bash
npm run build
```
Builds the static site to the `dist/` directory, ready for deployment.

### Preview Production Build
```bash
npm run preview
```

### Run Tests
```bash
npm test
```
Runs quality checks, builds the production bundle, and executes the verification suite.

## 🌐 Production Deployment

This project outputs static HTML/CSS/JS/WebP into `dist/` and can be deployed directly to:
- **Vercel** (`npx vercel` or connect Git repo)
- **Netlify** (`npx netlify deploy` with publish dir `dist`)
- **Cloudflare Pages** (Build command: `npm run build`, Output directory: `dist`)
- **GitHub Pages** (Deploy `dist/` using GitHub Actions)
