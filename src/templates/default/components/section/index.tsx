import React from 'react'
import Styles from './styles.module.scss'

type Props = {
  id?: string,
  className?: string
  children?: React.ReactNode,
}

export function Section(props: Props) {
  const className: string = `${Styles.Section} ${props.className}`

  return (
    <section className={className} id={props.id}>
      {props.children}
    </section>
  )
}
