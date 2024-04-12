import {
    Header,
    Section,
    Wrapper,
} from '@templates/default/components/'
import Styles from './styles.module.scss'
import { SkillsBanner } from './components'
import { ExperienceData, Navigate } from '@templates/default/config'

export function Experience() {
    return (
        <Section className={Styles.Experience} id={Navigate.EXPERIENCE}>
            <Header
                heading={ExperienceData.heading}
                subText={ExperienceData.subText}
            />

            <Wrapper className={Styles.Experience_contentWrapper}>
                {ExperienceData.fields.map((field, index) => (
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