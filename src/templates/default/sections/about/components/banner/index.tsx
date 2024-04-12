import { Wrapper } from '@templates/default/components/'
import React from 'react'
import Styles from './styles.module.scss'

type Props = {
  children?: React.ReactNode
  title: string,
  details: {
    years: string,
    field: string
  }
}

export function Banner(props: Props) {
  return (
    <Wrapper className={Styles.Banner}>
      {props.children}

      <p className={Styles.Banner_title}>{props.title}</p>

      <p className={Styles.Banner_detail}>{props.details.years}</p>
      <p className={Styles.Banner_detail}>{props.details.field}</p>
    </Wrapper>
  )
}
