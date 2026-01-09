import { Link } from 'react-router-dom'
import Icon from '../../components/Icon'

export default function ProjectCard({ slug, title, description, tags = [], links = {} }) {
  return (
    <div className="card stack-sm">
      <div className="flex items-center justify-between">
        <h3 className="m-0">{title}</h3>
        <div className="flex gap-3">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
              title="GitHub"
            >
              <Icon name="github" />
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
              title="Live Demo"
            >
              <Icon name="external" />
            </a>
          )}
        </div>
      </div>
  <p className="text-muted">{description}</p>
      <div className="flex gap-2 wrap">
        {tags.map((t) => (
          <span key={t} className="btn chip chip-sm" title={t} style={{ cursor: 'default' }}>
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <Link className="btn" title={`View details for ${title}`} to={`/projects/${slug}`} onMouseEnter={() => import('../../pages/ProjectDetail.jsx')}>
          Details
        </Link>
      </div>
    </div>
  )
}
