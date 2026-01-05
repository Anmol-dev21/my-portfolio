<div align="center">

# React Portfolio — Modern, Animated, Production-Ready

Full-featured React 18 + Vite portfolio with animations, dark mode, routing, and JSON-driven content. Built for fast iteration and easy deployment (GitHub Pages, Vercel, Netlify).

<br/>
<strong>Prefer a single, complete guide?</strong><br/>
See <a href="./DOCUMENTATION.md"><code>DOCUMENTATION.md</code></a> for the all-in-one manual (architecture, styling, config, deployment, SEO, FAQ).

</div>

## Highlights

- React 18 + Vite (fast dev/build)
- React Router with lazy routes (including a dedicated CV page)
- Framer Motion animations and typewriter effect
- Dark/Light theme via CSS variables (no JS theme lib)
- Clean design system: spacing scale, glass/cards, grid/stack utilities
- Sections: Hero, About, Skills, Projects, Contact, Footer
- EmailJS-powered contact form (env-based; opt-in)
- SEO: OG/Twitter meta, `og-image.svg`, `robots.txt`
- SPA fallback (`public/404.html`) for static hosts

All topics are consolidated in the single guide: `DOCUMENTATION.md`.

---

## Project Structure

```
e:/portfolio
├─ public/
│  ├─ 404.html           # SPA fallback for static hosting
│  ├─ robots.txt         # Crawl policy (allow all by default)
│  ├─ og-image.svg       # Social preview image
│  └─ cv.pdf             # Your resume (add this file)
├─ src/
│  ├─ assets/            # Images, icons (e.g., profile.svg)
│  ├─ components/        # Navbar, Footer, cards, UI pieces
│  ├─ data/              # skills.js, projects.js, socials.js
│  ├─ hooks/             # theme/scroll helpers
│  ├─ pages/             # Home, CV.jsx, etc.
│  ├─ styles/            # variables.css, index.css
│  ├─ App.jsx            # Layout and routes
│  └─ main.jsx           # App bootstrap
├─ index.html            # Root HTML (SEO + app mount)
├─ vite.config.js        # Vite config (base for GH Pages)
├─ package.json          # Scripts and deps
└─ README.md             # This file
```

## Getting Started

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

## Configuration and Content

- Branding and hero text: `src/components/Hero.jsx`
- Avatar: `src/assets/profile.svg` (replace or update the src)
- Skills/projects/socials: `src/data/*.js` (JSON-like objects)
- Global styles and theme tokens: `src/styles/variables.css`, `src/styles/index.css`
- CV page: `src/pages/CV.jsx` (embeds `/cv.pdf`)
- Resume file: `public/cv.pdf` (required for Download/View buttons)

### Contact Form (EmailJS)

1. Create a free account at EmailJS, add a service + template with fields: `user_name`, `user_email`, `message`.
2. Copy `.env.example` to `.env` and fill values:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Restart the dev server. Without env vars, the form will render but won’t send.

## Deployment

See DOCUMENTATION.md for full details. Quick starts:

### GitHub Pages

- If deploying under a repo subpath, set Vite `base` in `vite.config.js` to `'/your-repo-name/'`.
- Build and publish:

```powershell
npm run deploy
```

### Vercel / Netlify / Static host

- Build command: `npm run build`
- Output directory: `dist`
- Ensure SPA fallback is enabled; `public/404.html` covers GitHub Pages. Netlify users can add `_redirects` if desired (see docs/DEPLOYMENT.md).

## Notes on the CV Page

- The embedded PDF may show a vendor toolbar at the very top; the app overlays a small mask to hide that band while keeping the site Navbar visible.
- To remove the mask, export a clean PDF without a toolbar or update the CSS height of `.cv-mask-top` if you see a sliver.

## Performance and Accessibility

- Vite + code-splitting (lazy CV page) keeps JS small.
- Images are static and cacheable; add `loading="lazy"` where appropriate.
- Color contrast and focus states are styled via CSS variables—tweak in `variables.css` if needed.

## Contributing / Customizing

- Adjust tokens in `src/styles/variables.css` (colors, radius, spacing).
- Global styles are modular: edit partials in `src/styles/` (`base.css`, `layout.css`, `components.css`, `utilities.css`, `print.css`, `theme.css`) and the aggregator `index.css`.
- Swap icons via `react-icons`.
- Add new sections as components and route or anchor them from the Navbar.

## License

MIT — use, modify, and share freely.
