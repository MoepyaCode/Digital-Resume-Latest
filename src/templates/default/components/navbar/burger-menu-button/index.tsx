import React from 'react'
import Styles from './styles.module.scss'

type Props = {
  isMenuOpen: boolean,
  setIsMenuOpen: (isOpen: boolean) => void
}

export function BurgerMenuButton(props: Props) {
  const [disabled, setDisabled] = React.useState(false)
  const className = props.isMenuOpen ? `${Styles.BurgerMenuButton} ${Styles.BurgerMenuButton_isOpen}` : Styles.BurgerMenuButton

  function onMenuClick() {
    try{
      setDisabled(true)
      props.setIsMenuOpen(!props.isMenuOpen)
    } finally {
      setDisabled(false)
    }
  }

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onMenuClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}
