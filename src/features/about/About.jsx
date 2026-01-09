// Replaced JS animations with CSS animation utilities
// Icons removed in favor of plain labels for size optimization
import socials from '../../data/socials'

const HIGHLIGHTS = ['Full Stack', 'JavaScript', 'React', 'CSS', 'Animations']

const STACK = {
  frontend: [
  { label: 'React' },
  { label: 'JavaScript' },
  { label: 'HTML5' },
  { label: 'CSS3' },
  { label: 'Bootstrap' },
  { label: 'Tailwind CSS' },
  ],
  backend: [
  { label: 'Java' },
  { label: 'Spring Boot' },
  { label: 'Microservices' },
  { label: 'MySQL' },
  ],
  devops: [
  { label: 'Docker' },
  { label: 'Kubernetes' },
  { label: 'Postman' },
  { label: 'Git' },
  ],
}

export default function About() {
  const github = socials.find((s) => s.name.toLowerCase().includes('github'))
  const linkedin = socials.find((s) => s.name.toLowerCase().includes('linkedin'))
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="glass anim-fade-up">
          <h2 className="m-0 mb-2">
            About Me
          </h2>
          <p className="prose text-balance lead max-w-900">
            I’m a final‑year B.Tech (Information Technology) student at <strong>RGPV University</strong>
            (graduating in <strong>2026</strong>) and a <strong>full‑stack developer</strong> who
            builds modern, fast, and delightful web experiences. Since July, I’ve been interning at
            <strong> Sonnen Tech</strong> where I’ve worked across the stack with <strong>React</strong>,
            <strong> Spring Boot</strong>, <strong>Tailwind CSS</strong>, <strong>Docker</strong>,
            <strong> Kubernetes</strong>, and <strong>microservices</strong>. I care about accessible
            UI, clean API design, and reliable, well‑structured backends that scale.
          </p>
          <div className="flex wrap gap-3 mt-6">
            {HIGHLIGHTS.map((h) => (
              <span key={h} className="btn chip chip-sm cursor-default" title={h}>
                {h}
              </span>
            ))}
          </div>

          <h3 className="mt-6 mb-3">
            Quick Facts
          </h3>
          <div className="grid cols-2">
            <div className="card">
              <ul className="stack m-0">
                <li>
                  <strong>Education:</strong> B.Tech (IT), RGPV University — Graduating 2026
                </li>
                <li>
                  <strong>Internship:</strong> Sonnen Tech — Engineering Intern (since July, ongoing)
                </li>
                <li>
                  <strong>Strengths:</strong> React UI/UX, Spring Boot APIs, REST, MySQL, Docker/K8s,
                  Postman, Git
                </li>
                <li>
                  <strong>Interests:</strong> Design systems, web performance, developer experience
                </li>
                <li>
                  <strong>Open to:</strong> Full‑time software engineering roles and internships
                </li>
                {github && (
                  <li>
                    <strong>GitHub:</strong>{' '}
                    <a className="btn chip" href={github.url} target="_blank" rel="noopener noreferrer">
                      View profile
                    </a>
                  </li>
                )}
                {linkedin && (
                  <li>
                    <strong>LinkedIn:</strong>{' '}
                    <a className="btn chip" href={linkedin.url} target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <div className="card">
              <strong>What I’m focusing on</strong>
              <ul className="stack mt-3">
                <li>Building delightful, accessible React interfaces with animations</li>
                <li>Designing clean API contracts and robust Spring Boot services</li>
                <li>Cloud‑native development with containers and Kubernetes</li>
                <li>Performance, accessibility, and pragmatic testing</li>
              </ul>
              <div className="flex gap-2 mt-3">
                <a href="/cv" className="btn primary">View Resume</a>
                <a href="#contact" className="btn">Contact Me</a>
              </div>
            </div>
          </div>

          <h3 className="mt-6 mb-3">
            Tech Stack
          </h3>
          <div className="grid cols-3">
            <div className="card">
              <strong>Frontend</strong>
              <div className="flex wrap gap-2 mt-3">
                {STACK.frontend.map(({ label }) => (
                  <span key={label} className="btn chip chip-sm cursor-default" title={label}>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <strong>Backend & Data</strong>
              <div className="flex wrap gap-2 mt-3">
                {STACK.backend.map(({ label }) => (
                  <span key={label} className="btn chip chip-sm cursor-default" title={label}>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <strong>DevOps & Tools</strong>
              <div className="flex wrap gap-2 mt-3">
                {STACK.devops.map(({ label }) => (
                  <span key={label} className="btn chip chip-sm cursor-default" title={label}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
