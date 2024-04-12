import React from 'react'
import Styles from './styles.module.scss'
import { BurgerMenuButton } from './burger-menu-button'
import { Navigate } from '@templates/default/config'
import { NavigateButton } from '../components'

type Props = {
  name: string
}

export function NavBar(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [displayMenu, setDisplayBurgerMenu] = React.useState(false)

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
      <NavigateButton
        className={Styles.NavBar_landingPageBtn}
        navigate={Navigate.HOME}
      >
        {props.name}
      </NavigateButton>

      {(!displayMenu || isMenuOpen) && (
        <ul>

          <li>
            <NavigateButton navigate={Navigate.ABOUT}>
              About
            </NavigateButton>
          </li>

          <li>
            <NavigateButton navigate={Navigate.EXPERIENCE}>
              Experience
            </NavigateButton>
          </li>

          <li>
            <NavigateButton navigate={Navigate.PROJECTS}>
              Projects
            </NavigateButton>
          </li>

          <li>
            <NavigateButton navigate={Navigate.CONTACT}>
              Contact
            </NavigateButton>
          </li>

        </ul>
      )}

      {displayMenu && <BurgerMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  )
}
