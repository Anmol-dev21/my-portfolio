import { Typewriter } from 'react-simple-typewriter'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="glass">
          <div className="grid-hero">
            <div>
              <div className="stack">
                <h1 className="anim-fade-up hero-title">
                  Hi, I'm <span className="text-primary">Anmol Bhargav</span>
                </h1>
                <p className="text-muted hero-subtitle">
                  <Typewriter
                    words={[
                      'Full‑Stack Developer',
                      'React & Spring Boot',
                      'Microservices & APIs',
                      'Cloud‑Native (Docker/K8s)',
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />
                </p>
                <p className="prose text-balance hero-intro">
                  I build modern, fast, and delightful web experiences as a full-stack developer —
                  using React, thoughtful animations, and a keen eye for design.
                </p>
                <div className="flex gap-3">
                  <a href="#projects" className="btn primary">
                    View Projects
                  </a>
                  <a href="#contact" className="btn">
                    Contact Me
                  </a>
                  <a href="/cv.pdf" className="btn" download title="Download CV (place cv.pdf in /public)">
                    <Icon name="download" /> Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="anim-scale-in place-center">
              <div className="card avatar-circle">
                <img src="/profile.svg" alt="Profile" width={220} height={220} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
