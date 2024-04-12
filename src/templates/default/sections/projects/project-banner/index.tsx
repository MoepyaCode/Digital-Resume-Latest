import {
  Image,
  Wrapper
} from '@templates/default/components/'
import Styles from './styles.module.scss'
import { Link } from 'react-router-dom'

type Props = {
  title: string,
  image: string,
  github: string | null,
  liveDemo: string | null,
}

export function ProjectBanner(props: Props) {
  return (
    <Wrapper className={Styles.ProjectBanner}>
      <Image
        className={Styles.ProjectBanner_image}
        src={props.image}
      />

      <p className={Styles.ProjectBanner_name}>{props.title}</p>

      <Wrapper className={Styles.ProjectBanner_linksWrapper}>
        {props.github && (
          <Link to={props.github} target='_blank'>
            github
          </Link>
        )}
        {props.liveDemo && (
          <Link to={props.liveDemo} target='_blank'>
            Live Demo
          </Link>
        )}
      </Wrapper>
    </Wrapper>
  )
}
