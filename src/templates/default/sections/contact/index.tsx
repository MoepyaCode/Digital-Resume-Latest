import React from 'react'
import {
    Header,
    Section,
    Wrapper,
} from '@templates/default/components/'
import Styles from './styles.module.scss'
import { ContactBanner } from './contact-banner'
import { Navigate } from '@templates/default/config'


export function Contact() {
    return (
        <Section className={Styles.Contact} id={Navigate.CONTACT}>
            <Header
                heading="Contact Me"
                subText='Get In Touch'
            />

            <ContactBanner />
        </Section>
    )
}