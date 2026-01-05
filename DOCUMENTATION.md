# React Portfolio — Complete Documentation (All-in-One)

This single guide contains everything you need to understand, run, customize, and deploy the project.

- Project: Modern React + Vite portfolio with animations, dark mode, routing, and JSON-driven data
- Tech: React 18, Vite 5, React Router 6, Framer Motion, react-icons, react-simple-typewriter, EmailJS (optional)
- Hosting: Works on GitHub Pages, Vercel, Netlify, or any static host

---

## 1) Highlights

- React 18 + Vite (fast dev/build)
- React Router with lazy routes (dedicated CV page)
- Framer Motion animations + typewriter effect in Hero
- Dark/Light theme via CSS variables (no JS theme lib)
- Clean design system: spacing scale, glass/cards, grid/stack utilities
- Sections: Hero, About, Skills, Projects, Contact, Footer
- EmailJS contact form (env-based; opt-in)
- SEO: OG/Twitter meta, `og-image.svg`, `robots.txt`
- SPA fallback (`public/404.html`) for static hosts

---

## 2) Folder Structure

```
e:/portfolio
├─ public/
│  ├─ 404.html           # SPA fallback for static hosting
│  ├─ robots.txt         # Crawl policy (allow all by default)
│  ├─ og-image.svg       # Social preview image
│  └─ cv.pdf             # Your resume (add this file)
├─ src/
│  ├─ assets/            # Images, icons (e.g., profile.svg)
│  ├─ components/        # Navbar, Footer, Hero, cards, etc.
│  ├─ data/              # skills.js, projects.js, socials.js
│  ├─ hooks/             # Theme/scroll helpers
│  ├─ pages/             # Home, CV.jsx (lazy-loaded)
│  ├─ styles/            # variables.css, index.css (global styling system)
│  ├─ App.jsx            # Layout + routes
│  └─ main.jsx           # App bootstrap
├─ index.html            # HTML shell + SEO meta
├─ vite.config.js        # Vite config (set `base` for GH Pages subpath)
├─ package.json          # Scripts and dependencies
└─ README.md             # Overview (points here)
```

---

## 3) Getting Started

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

4. Local production preview

```powershell
npm run preview
```

Output is served at `http://localhost:4173` by default.

---

## 4) Scripts

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build to `dist/`
- `npm run preview` — Serve the built app locally
- `npm run deploy` — Publish `dist/` to GitHub Pages via `gh-pages`

---

## 5) Configuration & Content

- Branding and hero text: `src/components/Hero.jsx`
- Avatar: `src/assets/profile.svg` (replace or update the `src`)
- Skills/Projects/Socials: `src/data/*.js` (JSON-like objects)
- Global styles & theme tokens: `src/styles/variables.css`, `src/styles/index.css`
- CV page: `src/pages/CV.jsx` (embeds `/cv.pdf`)
- Resume file: `public/cv.pdf` (required for Download/View to work)

### EmailJS (Contact Form)

1. Create an EmailJS account. Define a service and template using fields:
   - `user_name`, `user_email`, `message`
2. Copy `.env.example` to `.env` and fill values:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Restart the dev server. If env vars are missing, the form will render but won’t send.

---

## 6) Architecture & Internals

### App Shell

- `src/main.jsx` mounts the React app.
- `src/App.jsx` provides global layout: Navbar, Routes, Footer.

### Routing

- Home (`/`): composed of sections: Hero, About, Skills, Projects, Contact, Footer
- CV (`/cv`): lazy-loaded; top actions (Print/Download) + embedded `/cv.pdf`
- SPA fallback: `public/404.html` ensures deep links work on static hosting (e.g., GitHub Pages).

### Data Flow

- `src/data/*.js` host content for skills, projects, and social links.
- Components map over these arrays/objects. No data fetching by default.

### Components Overview

- `components/Navbar.jsx` — Sticky header, brand mark, nav links
- `components/Hero.jsx` — Headline, typewriter roles, CTA buttons (Projects, Contact, Download CV)
- `components/About.jsx` — Bio/content
- `components/Skills.jsx`, `components/SkillCard.jsx` — Unified responsive grid with level bars
- `components/Projects.jsx`, `components/ProjectCard.jsx` — Cards with tags/links
- `components/Contact.jsx` — Single centered form (EmailJS optional)
- `components/Footer.jsx` — Socials + credits; responsive 3-column bottom row

### Animations

- Framer Motion drives entrance transitions for headings, lists, and cards.
- Typewriter effect implemented via `react-simple-typewriter` in the Hero.

### Theme & Dark Mode

- Implemented with CSS variables (tokens) in `src/styles/variables.css`.
- `<html lang="en" data-theme="light">` defaults to light; toggle to `dark` to switch.
- No runtime theme dependency—small bundles and consistent styling.

### CV Viewer Mask

- `src/pages/CV.jsx` embeds `/cv.pdf` inside `.cv-viewer`.
- `.cv-mask-top` overlays a small strip to hide the embedded viewer toolbar while keeping the site Navbar visible.
- If you export a clean PDF without a toolbar, you can remove the mask or adjust its height if a sliver shows.

---

## 7) Styling System

- Tokens in `src/styles/variables.css`:
  - Colors: `--bg`, `--surface`, `--text`, `--muted`, `--primary`, `--accent`
  - Spacing: `--space-1` .. `--space-9`
  - Radius: `--radius-sm`, `--radius-md`, `--radius-lg`
  - Elevation: shadow tokens for glass/cards
- Global and utilities in `src/styles/index.css`:
  - Resets, typography, `.section`/`.container` helpers
  - Components: `.glass`, `.card`, `.btn`, `.badge`, `.chip`
  - Utilities: `.stack`, grid helpers, brand/footer/CV helper classes
- Patterns:
  - Prefer tokens over hard-coded values
  - Consistent vertical rhythm for headings/paragraphs
  - Minimal inline styles; rely on utilities and shared classes

---

## 8) Deployment

This app is a static site. Build and deploy the `dist/` directory.

### GitHub Pages

1. If deploying under a repo subpath, set Vite `base` in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

2. Build and deploy:

```powershell
npm run build
npm run deploy
```

Notes:

- `public/404.html` serves as the SPA fallback so deep links won’t 404.

### Vercel

- Framework: Vite
- Build: `npm run build`
- Output directory: `dist`
- Set EmailJS env vars in project settings if using the contact form.

### Netlify

- Build: `npm run build`
- Publish directory: `dist`
- SPA fallback: Netlify typically auto-handles SPA routing. Optional `_redirects`:

```
/* /index.html 200
```

### Other static hosts

- Serve the `dist/` folder and ensure unknown routes fall back to `index.html`.

---

## 9) SEO & Social

- Edit meta tags in `index.html`:
  - Title, description
  - Open Graph: `og:title`, `og:description`, `og:image`, `og:type`
  - Twitter: `summary_large_image`, title, description, image
  - Theme color for mobile UI
- Social image: `public/og-image.svg` (replace with your own branded 1200x630 image)
- Robots: `public/robots.txt` (allow all by default). Add `Sitemap:` after you publish one.
- Optional: generate and host `sitemap.xml` and reference it in robots.

---

## 10) Troubleshooting (FAQ)

- CV viewer shows a toolbar
  - This is from the embedded PDF viewer. The app overlays `.cv-mask-top` to hide it. Export a clean PDF to remove the need for masking or adjust the mask height in CSS.

- Contact form doesn’t send
  - Ensure `.env` contains:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

- Restart the dev server after adding/changing env vars.

- Links to nested routes 404 on GitHub Pages
  - Ensure `public/404.html` exists (it does). It provides an SPA fallback.

- Deployed under a subpath and assets 404
  - Set `base: '/your-repo-name/'` in `vite.config.js`, rebuild, and redeploy.

- Change colors/spacing/typography
  - Edit tokens in `src/styles/variables.css`. Utilities and component styles live in `src/styles/index.css`.

---

## 11) Performance & Accessibility

- Vite + code splitting keeps bundles small (CV page lazy-loaded)
- Use optimized images and `loading="lazy"` where applicable
- Maintain color contrast and focus states; adjust tokens in `variables.css`

---

## 12) Contributing / Customizing

- Adjust tokens in `src/styles/variables.css` (colors, radius, spacing)
- Extend utilities and component styles in `src/styles/index.css`
- Add sections as components and route or anchor them from the Navbar
- Swap icons with `react-icons`

---

## 13) License

MIT — use, modify, and share freely.
