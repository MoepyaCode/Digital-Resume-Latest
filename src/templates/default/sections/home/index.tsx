import React from "react";
import Styles from "./styles.module.scss";
import {
  Button,
  Image,
  Section,
  Wrapper
} from "@templates/default/components/";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Navigate } from "@templates/default/config";

const tempData = {
    name: "John Doe",
    greeting: "Hello I'm",
    workType: "Web Developer",
  }

export function Home() {
  return (
    <Section className={Styles.Home} id={Navigate.HOME}>
        <Image
          src="/images/image-1.jpg"
          className={Styles.Home_image}
        />

        <Wrapper
          className={Styles.Home_introWrapper}
        >
          <p className={Styles.Home_introWrapper_greeting}>
            {tempData.greeting}
          </p>
          <p className={Styles.Home_introWrapper_name}>
            {tempData.name}
          </p>
          <p className={Styles.Home_introWrapper_workType}>
            {tempData.workType}
          </p>

          <Wrapper className={Styles.Home_introWrapper_buttonWrapper}>
            <Button className={Styles.Home_introWrapper_buttonWrapper_cvButton}>
              Downlod CV
            </Button>

            <Button className={Styles.Home_introWrapper_buttonWrapper_contactButton}>
              Contact Info
            </Button>
          </Wrapper>

          <Wrapper className={Styles.Home_introWrapper_linksWrapper}>
              <Link to={'#'}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            <Link to={'#'}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </Wrapper>
        </Wrapper>
      </Section>
  )
}
