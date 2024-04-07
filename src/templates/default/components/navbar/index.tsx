import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './styles.module.scss'
import { BurgerMenuButton } from './burger-menu-button'

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
    <nav className={Styles.DefaultNavBar}>
      <button className={Styles.DefaultNavBar_landingPageBtn}>
        {props.name}
      </button>

      {(!displayMenu || isMenuOpen) && (
        <ul>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Experience</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      )}

      {displayMenu && <BurgerMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  )
}
