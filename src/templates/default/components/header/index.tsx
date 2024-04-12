import { Wrapper } from '@templates/default/components/'
import Styles from './styles.module.scss'	

type Props = {
  heading: string,
  subText: string,
}

export function Header(props: Props) {
  return (
    <Wrapper className={Styles.Header}>
      <p className={Styles.Header_subText}>{props.subText}</p>
      <h1 className={Styles.Header_heading}>{props.heading}</h1>
    </Wrapper>
  )
}
