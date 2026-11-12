import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Navigate, Profile } from '../config'

export function Footer() {
  return (
    <footer className="shell site-footer">
      <p>© {new Date().getFullYear()} {Profile.name}</p>
      <a className="text-link" href={`#${Navigate.HOME}`}>
        Back to top <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
      </a>
    </footer>
  )
}
