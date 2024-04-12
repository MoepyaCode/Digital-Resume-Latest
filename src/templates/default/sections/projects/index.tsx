import {
    Header,
    Section,
    Wrapper,
} from '@templates/default/components/'
import Styles from './styles.module.scss'
import { ProjectBanner } from './project-banner'
import { Navigate, ProjectsData } from '@templates/default/config'

export function Projects() {
    return (
        <Section className={Styles.Projects} id={Navigate.PROJECTS}>
            <Header
                heading={ProjectsData.heading}
                subText={ProjectsData.subText}
            />

            <Wrapper className={Styles.Projects_projectsWrapper}>
                {ProjectsData.projects.map((project, index) => (
                    <ProjectBanner
                        key={index}
                        image={project.image}
                        title={project.title}
                        github={project.github}
                        liveDemo={project.liveDemo}
                    />
               ))}
            </Wrapper>
        </Section>
    )
}