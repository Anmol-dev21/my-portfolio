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

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── 404.html              # SPA fallback for static hosting
│   ├── robots.txt            # SEO crawler directives
│   ├── og-image.svg          # Social media preview image
│   └── profile.svg           # Profile avatar
├── src/
│   ├── assets/               # Images and static files
│   ├── components/           # Reusable UI components
│   │   ├── Hero.jsx          # Landing section with typewriter
│   │   ├── About.jsx         # About me section
│   │   ├── Skills.jsx        # Technical skills grid
│   │   ├── Projects.jsx      # Project showcase
│   │   ├── Contact.jsx       # Contact form
│   │   └── ...
│   ├── data/                 # Content configuration
│   │   ├── projects.js       # Project listings
│   │   ├── skills.js         # Skills data
│   │   └── socials.js        # Social media links
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Route pages
│   ├── styles/               # CSS modules and themes
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
└── vite.config.js            # Vite configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Anmol-dev21/my-portfolio.git
cd my-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables (optional for contact form)**

```bash
cp .env.example .env
# Edit .env with your EmailJS credentials
```

4. **Start development server**

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run format` | Format code with Prettier |
| `npm run deploy` | Deploy to GitHub Pages |

## ⚙️ Configuration

### Customize Content

Update these files to personalize your portfolio:

- **Personal Info**: `src/components/Hero.jsx`, `src/components/About.jsx`
- **Projects**: `src/data/projects.js`
- **Skills**: `src/data/skills.js`
- **Social Links**: `src/data/socials.js`
- **Theme Colors**: `src/styles/variables.css`

### Setup Contact Form

1. Create free account at [EmailJS](https://www.emailjs.com/)
2. Create email service and template with fields: `user_name`, `user_email`, `message`
3. Add credentials to `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart dev server

## 🌐 Deployment

### GitHub Pages

```bash
npm run deploy
```

### Vercel / Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Output directory: `dist`

## 📸 Screenshots

> Add screenshots of your portfolio here once deployed!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

**Anmol**

- GitHub: [@Anmol-dev21](https://github.com/Anmol-dev21)
- Portfolio: [Live Demo](https://anmol-dev21.github.io/my-portfolio)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

<div align="center">
Made with ❤️ by Anmol
</div>
