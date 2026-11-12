import { Navigate } from '../../config'

export function About() {
  return (
    <section className="shell section-space about-layout" id={Navigate.ABOUT} aria-labelledby="about-title">
      <h2 id="about-title">About me</h2>
      <div className="about-copy">
        <p>I’m a South African software engineer. My work spans mobile features, web interfaces and the APIs that connect them.</p>
        <p>I’m interested in building AI-powered applications, especially where AI can help users make sense of messy information or reduce manual work.</p>
      </div>
    </section>
  )
}
