import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCodeBranch, faMobileScreenButton, faServer } from '@fortawesome/free-solid-svg-icons'
import type { Project } from '../../../config'

const projectIcons = {
  mobile: faMobileScreenButton,
  fullstack: faCodeBranch,
  backend: faServer,
}

export function ProjectBanner({ project }: { project: Project }) {
  return (
    <article className="project-card" aria-labelledby={project.id}>
      <div className={`project-art project-art-${project.kind}`} aria-hidden="true">
        <span className="project-symbol"><FontAwesomeIcon icon={projectIcons[project.kind]} /></span>
      </div>
      <div className="project-content">
        <p className="eyebrow">{project.category}</p>
        <h3 id={project.id}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tags" aria-label="Technologies">
          {project.stack.map(tool => <li key={tool}>{tool}</li>)}
        </ul>

        <details className="project-details">
          <summary>Implementation details</summary>
          <ul>
            {project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
          </ul>
        </details>

        {project.source && (
          <a className="text-link project-source" href={project.source} aria-label={`View ${project.title} source on GitHub`}>
            View source <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
