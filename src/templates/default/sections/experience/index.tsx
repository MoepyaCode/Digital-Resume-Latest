import { ExperienceData, Navigate } from '../../config'

export function Experience() {
  return (
    <section className="experience-section" id={Navigate.EXPERIENCE} aria-labelledby="experience-title">
      <div className="shell section-space experience-layout">
        <div>
          <h2 id="experience-title">Experience</h2>
          <ol className="role-list">
            {ExperienceData.roles.map(role => (
              <li key={role.company}>
                <div className="role-heading">
                  <h3>{role.company}</h3>
                  <span className="eyebrow">{role.period}</span>
                </div>
                <p className="role-focus">{role.focus}</p>
                <p className="muted">{role.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="toolkit">
          <h3>Technical skills</h3>
          <dl>
            {ExperienceData.skills.map(({ label, tools }) => (
              <div className="skill-group" key={label}>
                <dt>{label}</dt>
                <dd>
                  <ul className="tags">
                    {tools.map(tool => <li key={tool}>{tool}</li>)}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
