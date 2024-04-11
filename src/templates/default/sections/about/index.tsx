import React from 'react'
import { Header, Image, Section, Wrapper } from '@templates/default/components/'
import Styles from './styles.module.scss'
import { Banner } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { Navigate } from '@templates/default/config'

const SectionInfo = {
  heading: "About Me",
  subText: "Get to know me",
  bannerDetails: [
    '2+ years',
    'Frontend Development',
  ]
}

export function About() {

  React.useEffect(() => {

    const section = document.querySelector('.About') as HTMLElement | null;

    console.log(section)

  }, [])

  return (
    <Section className={Styles.About} id={Navigate.ABOUT}>
      <Header
        subText={SectionInfo.subText}
        heading={SectionInfo.heading}
      />

      <Wrapper className={Styles.About_contentWrapper}>
        <Image
          className={Styles.About_contentWrapper_image}
          src='/images/image-2.jpg'
        />

        <Wrapper className={Styles.About_contentWrapper_detailsWrapper}>
          <Wrapper
            className={Styles.About_contentWrapper_detailsWrapper_bannersWrapper}
          >
            <Banner
              title='Experience'
              details={SectionInfo.bannerDetails}
            >
              <FontAwesomeIcon icon={faCertificate} />
            </Banner>

            <Banner
              title='Experience'
              details={SectionInfo.bannerDetails}
            >
              <FontAwesomeIcon icon={faCertificate} />
            </Banner>
          </Wrapper>

          <p className={Styles.About_contentWrapper_detailsWrapper_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magni tempora nisi ducimus, fuga ad modi delectus veritatis esse iste aut libero, earum culpa possimus corrupti atque dolorem. Consequatur, eligendi.
            Omnis tempore dicta inventore.
          </p>
        </Wrapper>
      </Wrapper>
    </Section >
  )
}
