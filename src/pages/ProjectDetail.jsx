import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import projects from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug])

  if (!project) {
    return (
      <main className="section">
        <div className="container">
          <div className="glass p-6">
            <h2>Project not found</h2>
            <button className="btn" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="section">
      <div className="container">
        <article className="glass prose text-balance p-8 stack">
          <h1 className="m-0">{project.title}</h1>
          <p className="lead mt-1">{project.description}</p>
          <div className="flex wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="btn chip chip-sm">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-3">
            {project.links?.demo && (
              <a className="btn primary" href={project.links.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {project.links?.github && (
              <a className="btn" href={project.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        </article>
      </div>
    </main>
  )
}
