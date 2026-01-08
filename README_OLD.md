<div align="center">

# 🚀 Personal Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**A modern, responsive portfolio website built with React 18, Vite, and Framer Motion**

[Live Demo](https://anmol-dev21.github.io/my-portfolio) · [Report Bug](https://github.com/Anmol-dev21/my-portfolio/issues) · [Request Feature](https://github.com/Anmol-dev21/my-portfolio/issues)

</div>

---

## ✨ Features

- **⚡ Lightning Fast** - Built with Vite for instant dev server and optimized builds
- **🎨 Modern Design** - Clean, responsive UI with glass-morphism effects
- **🌗 Dark Mode** - Seamless theme switching with CSS variables
- **📱 Mobile First** - Fully responsive across all devices
- **🎭 Smooth Animations** - Framer Motion powered transitions and effects
- **📧 Contact Form** - Integrated EmailJS for direct messaging
- **♿ Accessible** - WCAG compliant with semantic HTML
- **🔍 SEO Optimized** - Meta tags, Open Graph, and Twitter Cards
- **📄 CV Page** - Dedicated resume viewer with download option

## 🛠️ Built With

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Styling:** Custom CSS with modern features
- **Form Handling:** EmailJS
- **Deployment:** GitHub Pages

For complete technical documentation, see [`DOCUMENTATION.md`](DOCUMENTATION.md)

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
