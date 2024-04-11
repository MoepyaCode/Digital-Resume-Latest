import React from 'react'
import {
    Header,
    Section,
    Wrapper,
} from '@templates/default/components//'
import Styles from './styles.module.scss'
import { ProjectBanner } from './project-banner'



export function Projects() {
    return (
        <Section className={Styles.Default_projects}>
            <Header
                heading="Projects"
                subText='Browse My Recent'
            />

            <Wrapper className={Styles.Default_projects_projectsWrapper}>
                <ProjectBanner />
                <ProjectBanner />
                <ProjectBanner />
            </Wrapper>
        </Section>
    )
}