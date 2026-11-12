import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
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
          <a className="button button-ghost" href={`${import.meta.env.BASE_URL}documents/Resume-Kagiso-Moepya.pdf`} download="Kagiso-Moepya-CV.pdf">
            Download CV <FontAwesomeIcon icon={faFileArrowDown} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
