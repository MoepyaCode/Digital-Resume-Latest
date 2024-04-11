import React from 'react'
import {
  Button,
  Image,
  Wrapper
} from '@templates/default/components/'
import Styles from './styles.module.scss'

export function ProjectBanner() {
  return (
    <Wrapper className={Styles.ProjectBanner}>
      <Image  
        className={Styles.ProjectBanner_image}
        src='/images/face-card.jpg'
      />

      <p className={Styles.ProjectBanner_name}>DNA Extraction</p>

      <Wrapper className={Styles.ProjectBanner_buttonsWrapper}>
        <button>Github</button>
        <button>Live Demo</button>
      </Wrapper>
    </Wrapper>
  )
}
