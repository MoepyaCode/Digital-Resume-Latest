import React from 'react'
import Styles from './styles.module.scss'
import { BurgerMenuButton } from './burger-menu-button'
import { Navigate } from '@templates/default/config'

type Props = {
  name: string
}

export function NavBar(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [displayMenu, setDisplayBurgerMenu] = React.useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, navigate: Navigate) => {
    e.preventDefault()

    const getElement = document.getElementById(navigate)

    if (getElement) {
      getElement.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  React.useEffect(() => {

    function handleResize() {
      if (window.innerWidth <= 700) {
        setDisplayBurgerMenu(true)
      } else {
        setDisplayBurgerMenu(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  return (
    <nav className={Styles.NavBar}>
      <button
        className={Styles.NavBar_landingPageBtn}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, Navigate.HOME)}
      >
        {props.name}
      </button>

      {(!displayMenu || isMenuOpen) && (
        <ul>

          <li>
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, Navigate.ABOUT)}
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, Navigate.EXPERIENCE)}
            >
              Experience
            </button>
          </li>

          <li>
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, Navigate.PROJECTS)}
            >
              Projects
            </button>
          </li>

          <li>
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, Navigate.CONTACT)}
            >
              Contact
            </button>
          </li>

        </ul>
      )}

      {displayMenu && <BurgerMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  )
}
