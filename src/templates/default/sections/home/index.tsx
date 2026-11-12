import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUpRightFromSquare, faFileArrowDown, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Navigate, Profile } from '../../config'

export function Home() {
  return (
    <section className="hero" id={Navigate.HOME} aria-labelledby="home-title">
      <div className="shell hero-layout">
        <div className="hero-content">
          <p className="availability"><span aria-hidden="true" />{Profile.availability}</p>
          <h1 id="home-title">{Profile.name}</h1>
          <p className="hero-role">{Profile.title} <span>·</span> Mobile & full stack</p>
          <p className="hero-summary">{Profile.summary}</p>
          <div className="actions">
            <a className="button button-primary" href={`#${Navigate.PROJECTS}`}>
              View selected work <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href={`${import.meta.env.BASE_URL}documents/Resume-Kagiso-Moepya.pdf`} download="Kagiso-Moepya-CV.pdf">
              Download CV <FontAwesomeIcon icon={faFileArrowDown} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href={Profile.linkedin}>
              LinkedIn <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
            </a>
          </div>
          <ul className="hero-facts">
            <li><strong>{Profile.experience}</strong> of development experience</li>
            <li><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" /> {Profile.location}</li>
          </ul>
        </div>

        <div className="portrait">
          <img src={Profile.image} alt={Profile.name} width="768" height="1024" fetchPriority="high" />
        </div>
      </div>
    </section>
  )
}
