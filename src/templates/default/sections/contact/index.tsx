import {
    Header,
    Section,
} from '@templates/default/components/'
import Styles from './styles.module.scss'
import { ContactBanner } from './contact-banner'
import { ContactData, Navigate } from '@templates/default/config'


export function Contact() {
    return (
        <Section className={Styles.Contact} id={Navigate.CONTACT}>
            <Header
                heading={ContactData.heading}
                subText={ContactData.subText}
            />

            <ContactBanner
                email={ContactData.email}
                linkedIn={ContactData.socials.linkedIn}
            />
        </Section>
    )
}