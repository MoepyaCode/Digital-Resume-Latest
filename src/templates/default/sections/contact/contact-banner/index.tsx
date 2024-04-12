import { Wrapper } from '@templates/default/components'
import Styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

type Props = {
  email: string,
  linkedIn: string,
}

export function ContactBanner(props: Props) {
  return (
    <Wrapper className={Styles.ContactBanner}>
      <Wrapper className={Styles.ContactBanner_contactWrapper}>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>{props.email}</span>
      </Wrapper>
      <Wrapper className={Styles.ContactBanner_contactWrapper}>
        <FontAwesomeIcon icon={faLinkedinIn} />
          <a
            href={props.linkedIn}
            target="_blank"
          >
            LinkedIn
          </a>
      </Wrapper>
    </Wrapper>
  )
}
