import { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
const About = lazy(() => import('../components/About'))
const Skills = lazy(() => import('../components/Skills'))
const Projects = lazy(() => import('../components/Projects'))
const Contact = lazy(() => import('../components/Contact'))

export default function Home() {
  const location = useLocation()
  useEffect(() => {
    const id = location.state?.scrollTo
    if (id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.state])

  // Prefetch lazy section chunks as the sections approach viewport
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      // Fallback: idle-time prefetch
      import('../components/About')
      import('../components/Skills')
      import('../components/Projects')
      import('../components/Contact')
      return
    }
    const entries = [
      { id: 'about', loader: () => import('../components/About') },
      { id: 'skills', loader: () => import('../components/Skills') },
      { id: 'projects', loader: () => import('../components/Projects') },
      { id: 'contact', loader: () => import('../components/Contact') },
    ]
    const obs = new IntersectionObserver(
      (list) => {
        for (const entry of list) {
          if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute('id')
            const item = entries.find((e) => e.id === targetId)
            if (item) item.loader()
            obs.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '600px 0px' }
    )
    for (const e of entries) {
      const el = document.getElementById(e.id)
      if (el) obs.observe(el)
    }
    return () => obs.disconnect()
  }, [])

  return (
    <main>
      <Hero />
  <Suspense fallback={<div className="container section"><div className="glass p-6">Loading About…</div></div>}>
        <About />
      </Suspense>
  <Suspense fallback={<div className="container section"><div className="glass p-6">Loading Skills…</div></div>}>
        <Skills />
      </Suspense>
  <Suspense fallback={<div className="container section"><div className="glass p-6">Loading Projects…</div></div>}>
        <Projects />
      </Suspense>
  <Suspense fallback={<div className="container section"><div className="glass p-6">Loading Contact…</div></div>}>
        <Contact />
      </Suspense>
    </main>
  )
}
