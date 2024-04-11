import React from 'react'
import { Wrapper } from '@templates/default/components/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Styles from '../styles.module.scss'

// type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Advanced'
type Props = {
    skill: string,
    experienceLevel: string,
}

export default function SkillField(props: Props) {
  return (
    <Wrapper className={Styles.SkillsBanner_skillsWrapper_fieldWrapper}>
      <FontAwesomeIcon icon={faCircleCheck} />
      <Wrapper className={Styles.SkillsBanner_skillsWrapper_fieldWrapper_textWrapper}>
        <p>{props.skill}</p>
        <p>{props.experienceLevel}</p>
      </Wrapper>
    </Wrapper>
  )
}
