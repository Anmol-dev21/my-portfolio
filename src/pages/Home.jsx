import { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../features/hero/Hero'
const About = lazy(() => import('../features/about/About'))
const Skills = lazy(() => import('../features/skills/Skills'))
const Projects = lazy(() => import('../features/projects/Projects'))
const Contact = lazy(() => import('../features/contact/Contact'))

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
      import('../features/about/About')
      import('../features/skills/Skills')
      import('../features/projects/Projects')
      import('../features/contact/Contact')
      return
    }
    const entries = [
      { id: 'about', loader: () => import('../features/about/About') },
      { id: 'skills', loader: () => import('../features/skills/Skills') },
      { id: 'projects', loader: () => import('../features/projects/Projects') },
      { id: 'contact', loader: () => import('../features/contact/Contact') },
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
