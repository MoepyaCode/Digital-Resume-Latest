import { Navigate } from '@templates/default/config'
import React from 'react'

type Prop = {
    className?: string
    children: React.ReactNode
    navigate: Navigate
}

export function NavigateButton(props: Prop) {

    const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, navigate: Navigate) => {
        e.preventDefault()

        const getElement = document.getElementById(navigate)

        if (getElement) {
            getElement.scrollIntoView({ behavior: 'smooth' })
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
