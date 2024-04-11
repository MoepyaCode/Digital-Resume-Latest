import { Wrapper } from '@templates/default/components/'
import React from 'react'
import Styles from './styles.module.scss'

type Props = {
    children?: React.ReactNode
    title: string,
    details: string[]
}

export function Banner(props: Props) {
  return (
    <Wrapper className={Styles.Banner}>
        {props.children}
        
        <p className={Styles.Banner_title}>{props.title}</p>

        {props.details.map((detail, index) => (
            <p key={index} className={Styles.Banner_detail}>{detail}</p>
        ))}
    </Wrapper>
  )
}
