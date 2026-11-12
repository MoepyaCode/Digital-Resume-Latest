import { NavBar } from './navbar'
import { Sections } from './sections'
import { Footer } from './footer'
import './portfolio.css'

export function Default() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <NavBar />

      <main id="main-content" tabIndex={-1}>
        <Sections.Home />
        <Sections.Projects />
        <Sections.Experience />
        <Sections.About />
        <Sections.Contact />
      </main>

      <Footer />
    </>
  )
}
