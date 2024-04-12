import { Header, Image, Section, Wrapper } from '@templates/default/components/'
import Styles from './styles.module.scss'
import { Banner } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { AboutData, Navigate } from '@templates/default/config'


export function About() {
  return (
    <Section className={Styles.About} id={Navigate.ABOUT}>
      <Header
        subText={AboutData.subText}
        heading={AboutData.heading}
      />

      <Wrapper className={Styles.About_contentWrapper}>
        <Image
          className={Styles.About_contentWrapper_image}
          src={AboutData.image}
        />

        <Wrapper className={Styles.About_contentWrapper_detailsWrapper}>
          <Wrapper
            className={Styles.About_contentWrapper_detailsWrapper_bannersWrapper}
          >

            {AboutData.bannerDetails.map((details, index) => (
              <Banner
                key={index}
                title={details.title}
                details={details.details}
              >
                <FontAwesomeIcon icon={faCertificate} />
              </Banner>
            ))}

          </Wrapper>

          <p className={Styles.About_contentWrapper_detailsWrapper_text}>
            {AboutData.about}
          </p>
        </Wrapper>
      </Wrapper>
    </Section >
  )
}
