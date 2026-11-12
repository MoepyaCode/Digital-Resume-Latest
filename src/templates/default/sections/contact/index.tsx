import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { Navigate, Profile } from '../../config'

export function Contact() {
  return (
    <section className="shell contact-section" id={Navigate.CONTACT} aria-labelledby="contact-title">
      <div className="contact-panel">
        <div>
          <h2 id="contact-title">Let’s talk.</h2>
          <p>I’m open to remote mobile, web and full-stack roles with teams in South Africa and internationally.</p>
        </div>
        <div className="actions">
          <a className="button button-primary" href={`mailto:${Profile.email}`}>
            Email me <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </a>
          <a className="button button-ghost" href={`mailto:${Profile.email}?subject=CV%20request`}>
            Request CV <FontAwesomeIcon icon={faFileLines} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
