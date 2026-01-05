import ProjectCard from './ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
  <h2 className="anim-fade-up">Projects</h2>
  <div className="grid cols-3 mt-6">
          {projects.map((p, i) => (
            <div key={p.slug} className="anim-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
