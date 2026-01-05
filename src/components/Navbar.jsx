import { useLocation, useNavigate } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import LogoMark from './LogoMark'
import { useCallback, useState, useRef, useEffect } from 'react'

const ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const prevFocusRef = useRef(null)

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const onNavClick = (id) => (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
    } else {
      scrollTo(id)
    }
    setOpen(false)
  }

  // Close mobile menu on outside click or Escape
  useEffect(() => {
    function onDocClick(e) {
      if (!open) return
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
      if (open && e.key === 'Tab' && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        const active = document.activeElement
        const isShift = e.shiftKey
        if (!isShift && active === last) {
          e.preventDefault()
          first.focus()
        } else if (isShift && active === first) {
          e.preventDefault()
          last.focus()
        }
      }
    }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // Focus management: set initial focus inside menu when opened, restore on close
  useEffect(() => {
    const menuEl = menuRef.current?.querySelector('#mobile-menu')
    if (open && menuEl) {
      prevFocusRef.current = document.activeElement
      // Prefer element marked data-autofocus, else first focusable
      const preferred = menuEl.querySelector('[data-autofocus]')
      const first =
        preferred ||
        menuEl.querySelector('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      if (first && typeof first.focus === 'function') {
        setTimeout(() => first.focus(), 0)
      }
    } else if (!open && prevFocusRef.current && typeof prevFocusRef.current.focus === 'function') {
      // Restore focus to previously focused element (likely the toggle button)
      prevFocusRef.current.focus()
      prevFocusRef.current = null
    }
  }, [open])

  // Inert background content when menu is open for better a11y isolation
  useEffect(() => {
    const main = document.getElementById('main-content')
    const footer = document.querySelector('.site-footer')
    if (open) {
      if (main) {
        main.setAttribute('inert', '')
        main.setAttribute('aria-hidden', 'true')
      }
      if (footer) {
        footer.setAttribute('inert', '')
        footer.setAttribute('aria-hidden', 'true')
      }
    } else {
      if (main) {
        main.removeAttribute('inert')
        main.removeAttribute('aria-hidden')
      }
      if (footer) {
        footer.removeAttribute('inert')
        footer.removeAttribute('aria-hidden')
      }
    }
  }, [open])

  return (
    <header className="sticky-top z-50">
      <nav className="glass nav-inner" aria-label="Main navigation">
        {open && <div className="nav-overlay open" aria-hidden="true" onClick={() => setOpen(false)} />}
        <a href="#home" onClick={onNavClick('home')} className="brand-link flex items-center gap-2">
          <LogoMark size={22} />
          <span className="brand-text">
            <span className="brand-name">Anmol Bhargav</span>
            <span className="brand-role mt-1">Full Stack Developer</span>
          </span>
        </a>

        <div className="nav-actions desktop-only">
          {ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onNavClick(item.id)}
              className="btn ghost btn-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv"
            className="btn ghost btn-sm"
            title="View CV"
            onMouseEnter={() => import('../pages/CV.jsx')}
          >
            CV
          </a>
          <DarkModeToggle />
        </div>

        <div className="mobile-only" ref={menuRef}>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="mobile-nav-toggle btn ghost"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`hamburger ${open ? 'open' : ''}`} aria-hidden="true"></span>
          </button>

          <div
            id="mobile-menu"
            className={`mobile-nav drawer-right ${open ? 'open' : ''}`}
            role="menu"
            aria-modal={open ? 'true' : undefined}
          >
            <div className="mobile-nav-inner">
              {ITEMS.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onNavClick(item.id)}
                  className="btn ghost block btn-sm menu-item"
                  role="menuitem"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  data-autofocus={item.id === 'home' ? '' : undefined}
                >
                  {item.label}
                </a>
              ))}
              <a href="/cv" className="btn ghost block btn-sm" role="menuitem" onMouseEnter={() => import('../pages/CV.jsx')}>CV</a>
              <div className="mt-3">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
