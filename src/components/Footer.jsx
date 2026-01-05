import socials from '../data/socials'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="section site-footer pt-10"
      role="contentinfo"
    >
      <div className="container">
        <div className="footer-bottom">
          <small className="footer-copy text-muted">
            © {year} Anmol Bhargav. All rights reserved.
          </small>
          <nav className="footer-socials-inline" aria-label="Social links">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
                title={s.name}
                aria-label={s.name}
              >
                {s.name}
              </a>
            ))}
          </nav>
          <small className="footer-built text-muted">
            Built with{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" aria-label="React website">
              React
            </a>{' '}
            +{' '}
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" aria-label="Vite website">
              Vite
            </a>
          </small>
        </div>
      </div>
      <button
        className="btn back-to-top fixed-br"
        aria-label="Back to top"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </footer>
  )
}
