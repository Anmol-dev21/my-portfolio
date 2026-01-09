import SkillCard from './SkillCard'
import skills from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="anim-fade-up">Skills</h2>

        <div className="grid cols-3 mt-6">
          {skills.map((s, i) => (
            <div key={s.name} className="anim-fade-up" style={{ animationDelay: `${i * 0.03}s` }}>
              <SkillCard {...s} showCategory={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
