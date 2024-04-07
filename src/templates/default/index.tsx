import React from 'react'
import Styles from './styles.module.scss'
import { NavBar, Section } from './components'


export function Default() {

  return (
    <React.Fragment>
      <NavBar name='John Doe' />
      <Section className='LandingPage'>
        <h1></h1>
      </Section>
    </React.Fragment>
  )
}