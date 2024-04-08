import React from 'react'
import { Wrapper } from '@digital-resume/templates/default/components'
import Styles from './styles.module.scss'	

type Props = {
  heading: string,
  subText: string,
}

export function Header(props: Props) {
  return (
    <Wrapper className={Styles.Default_header}>
      <p className={Styles.Default_header_subText}>{props.subText}</p>
      <h1 className={Styles.Default_header_heading}>{props.heading}</h1>
    </Wrapper>
  )
}
