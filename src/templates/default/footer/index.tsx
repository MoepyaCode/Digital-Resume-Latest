import React from 'react'
import Styles from './styles.module.scss'
import { Wrapper } from '@templates/default/components'

export function Footer() {
    return (
        <footer className={Styles.Default_footer}>
            <Wrapper className={Styles.Default_footer_buttonsWrapper}>
                <button>About</button>
                <button>Experience</button>
                <button>Projects</button>
                <button>Contact</button>
            </Wrapper>

            <p className={Styles.Default_footer_copyright}>
                Copyright © 2021 John Doe. All rights reserved.
            </p>
        </footer>
    )
}
