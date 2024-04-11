import React from 'react'
import {
    Header,
    Section,
    Wrapper,
} from '@templates/default/components/'
import Styles from './styles.module.scss'


export function Contact() {
    return (
        <Section className={Styles.Default_contact}>
            <Header
                heading="Contact Me"
                subText='Get In Touch'
            />

        </Section>
    )
}