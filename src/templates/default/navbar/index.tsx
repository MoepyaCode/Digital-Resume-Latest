import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Navigate, Navigation, Profile } from '../config'

export function NavBar() {
  return (
    <header className="site-header">
      <div className="shell header-layout">
        <a className="brand" href={`#${Navigate.HOME}`}>
          <span className="brand-mark" aria-hidden="true">KM</span>
          <span>{Profile.name}</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {Navigation.map(({ label, target }) => (
              <li key={target}><a href={`#${target}`}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <a className="header-social" href={Profile.github}>
          GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
