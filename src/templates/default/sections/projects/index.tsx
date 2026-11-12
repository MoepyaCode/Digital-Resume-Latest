import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Navigate, Profile, Projects as selectedProjects } from '../../config'
import { ProjectBanner } from './project-banner'

export function Projects() {
  return (
    <section className="shell section-space" id={Navigate.PROJECTS} aria-labelledby="projects-title">
      <div className="section-heading section-heading-with-link">
        <h2 id="projects-title">Selected work</h2>
        <a className="text-link" href={Profile.github}>
          More on GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
        </a>
      </div>
      <div className="project-grid">
        {selectedProjects.map(project => <ProjectBanner key={project.id} project={project} />)}
      </div>
    </section>
  )
}
