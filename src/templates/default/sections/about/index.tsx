import React from 'react'
import { Header, Image, Section, Wrapper } from '@digital-resume/templates/default/components'
import Styles from './styles.module.scss'
import { Banner } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'

const SectionInfo = {
  heading: "About Me",
  subText: "Get to know me",
}

export function About() {
  return (
    <Section className={Styles.Default_about}>
      <Header
        subText={SectionInfo.subText}
        heading={SectionInfo.heading}
      />

      <Wrapper className={Styles.Default_about_contentWrapper}>
        <Image
          className={Styles.Default_about_contentWrapper_image}
          src='/images/face-card.jpg'
        />

        <Wrapper className={Styles.Default_about_contentWrapper_detailsWrapper}>
          <Wrapper
            className={Styles.Default_about_contentWrapper_detailsWrapper_bannersWrapper}
          >
            <Banner
              title='Experience'
              details={[
                '2+ years',
                'Frontend Development',
              ]}
            >
              <FontAwesomeIcon icon={faCertificate} />
            </Banner>

            <Banner
              title='Experience'
              details={[
                '2+ years',
                'Frontend Development',
              ]}
            >
              <FontAwesomeIcon icon={faCertificate} />
            </Banner>
          </Wrapper>

          <p className={Styles.Default_about_contentWrapper_detailsWrapper_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magni tempora nisi ducimus, fuga ad modi delectus veritatis esse iste aut libero, earum culpa possimus corrupti atque dolorem. Consequatur, eligendi.
            Omnis tempore dicta inventore.
          </p>
        </Wrapper>
      </Wrapper>
    </Section>
  )
}
