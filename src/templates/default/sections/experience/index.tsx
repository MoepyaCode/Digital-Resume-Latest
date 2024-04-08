import React from 'react'
import {
    Header,
    Section,
    Wrapper,
} from '@digital-resume/templates/default/components'
import Styles from './styles.module.scss'
import { SkillsBanner } from './components'

const tempData = {
    skillFields: [
        {
            type: 'Frontend Development',
            skills: [
                { skill: 'React', experienceLevel: 'Intermediate' },
                { skill: 'Vue', experienceLevel: 'Beginner' },
                { skill: 'Angular', experienceLevel: 'Advanced' },
                { skill: 'HTML', experienceLevel: 'Intermediate' },
                { skill: 'CSS', experienceLevel: 'Intermediate' },
                { skill: 'JavaScript', experienceLevel: 'Advanced' },
                { skill: 'TypeScript', experienceLevel: 'Advanced' },
            ]
        },
        {
            type: 'Backend Development',
            skills: [
                { skill: 'Node.js', experienceLevel: 'Advanced' },
                { skill: 'Express', experienceLevel: 'Intermediate' },
                { skill: 'Django', experienceLevel: 'Beginner' },
                { skill: 'Flask', experienceLevel: 'Beginner' },
                { skill: 'Spring Boot', experienceLevel: 'Intermediate' },
                { skill: 'Java', experienceLevel: 'Advanced' },
                { skill: 'Python', experienceLevel: 'Intermediate' },
            ]
        }
    ]
}

export function Experience() {
    return (
        <Section className={Styles.Default_experience}>
            <Header
                heading="Experience"
                subText='Explore My'
            />

            <Wrapper className={Styles.Default_experience_contentWrapper}>
                {tempData.skillFields.map((field, index) => (
                    <SkillsBanner
                        key={index}
                        type={field.type}
                        skills={field.skills}
                    />
                ))}
            </Wrapper>
        </Section>
    )
}