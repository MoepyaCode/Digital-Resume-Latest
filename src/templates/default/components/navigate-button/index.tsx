import React from 'react'
import { Navigate } from '@templates/default/config'

type Prop = {
    className?: string
    children: React.ReactNode
    navigate: Navigate
    isMenuOpen?: boolean,
    setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export function NavigateButton(props: Prop) {

    const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, navigate: Navigate) => {
        e.preventDefault()

        const getElement = document.getElementById(navigate)

        if (getElement) {
            getElement.scrollIntoView({ behavior: 'smooth' })
        }

        if (props.isMenuOpen && props.setIsMenuOpen) {
            props.setIsMenuOpen(false)
        }
    }

    return (
        <button
            className={props.className}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, props.navigate)}
        >
            {props.children}
        </button>
    )
}
