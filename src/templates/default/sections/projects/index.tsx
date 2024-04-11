import React from 'react'
import {
    Header,
    Section,
    Wrapper,
} from '@templates/default/components//'
import Styles from './styles.module.scss'
import { ProjectBanner } from './project-banner'
import { Navigate } from '@templates/default/config'



export function Projects() {
    return (
        <Section className={Styles.Projects} id={Navigate.PROJECTS}>
            <Header
                heading="Projects"
                subText='Browse My Recent'
            />

            <Wrapper className={Styles.Projects_projectsWrapper}>
                <ProjectBanner />
                <ProjectBanner />
                <ProjectBanner />
            </Wrapper>
        </Section>
    )
}