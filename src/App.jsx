// Root app: layout, routes, and global sections
import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const CV = lazy(() => import('./pages/CV.jsx'))

// Scroll to top on route change
function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
}

export default function App() {
  useScrollToTop()
  // Prefetch CV route when footer scrolls near viewport (IO-based)
  useEffect(() => {
    const prefetch = () => import('./pages/CV.jsx')
    const footer = document.querySelector('.site-footer')
    if (!footer) return
    if (!('IntersectionObserver' in window)) {
      prefetch()
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            prefetch()
            obs.disconnect()
            break
          }
        }
      },
      { rootMargin: '400px 0px' }
    )
    obs.observe(footer)
    return () => obs.disconnect()
  }, [])
  return (
    <div>
      <Navbar />
      <div id="main-content">
      <Suspense
        fallback={
          <div className="container section">
            <div className="glass p-6">
              Loading…
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </Suspense>
      </div>
      <Footer />
    </div>
  )
}
