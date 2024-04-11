import { Wrapper } from '@templates/default/components/'
import SkillField from './skill-point'
import Styles from './styles.module.scss'

type Skills = {
    skill: string,
    experienceLevel: string,
}

type Props = {
    type: string,
    skills: Skills[],
}

export function SkillsBanner(props: Props) {
    return (
        <Wrapper className={Styles.SkillsBanner}>
            <h3 className={Styles.SkillsBanner_title}>{props.type}</h3>
            <Wrapper className={Styles.SkillsBanner_skillsWrapper}>
                {props.skills.map((field, index) => (
                    <SkillField key={index} skill={field.skill} experienceLevel={field.experienceLevel} />
                ))}
            </Wrapper>
        </Wrapper>
    )
}