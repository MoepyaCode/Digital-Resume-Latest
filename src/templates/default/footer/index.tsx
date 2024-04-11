import React from 'react'
import Styles from './styles.module.scss'
import { Wrapper } from '@templates/default/components'
import { Navigate } from '@templates/default/config'

export function Footer() {

    const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, navigate: Navigate) => {
        e.preventDefault()

        const getElement = document.getElementById(navigate)

        if (getElement) {
            getElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className={Styles.Footer}>
            <Wrapper className={Styles.Footer_buttonsWrapper}>
                <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, Navigate.ABOUT)}

                >About</button>
                <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, Navigate.EXPERIENCE)}

                >Experience</button>
                <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, Navigate.PROJECTS)}

                >Projects</button>
                <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, Navigate.CONTACT)}

                >Contact</button>
            </Wrapper>

            <p className={Styles.Footer_copyright}>
                Copyright © 2021 John Doe. All rights reserved.
            </p>
        </footer>
    )
}
