import { Wrapper } from '@templates/default/components'
import Styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export function ContactBanner() {
  return (
    <Wrapper className={Styles.ContactBanner}>
        <Wrapper className={Styles.ContactBanner_contactWrapper}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Example@gmail.com</span>
        </Wrapper>
        <Wrapper className={Styles.ContactBanner_contactWrapper}>
            <FontAwesomeIcon icon={faLinkedinIn} />
            <span>Linkedin</span>
        </Wrapper>
    </Wrapper>
  )
}
