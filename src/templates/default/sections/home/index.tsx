import React from "react";
import Styles from "./styles.module.scss";
import {
  Button,
  Image,
  Section,
  Wrapper
} from "../../components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const tempData = {
    name: "John Doe",
    greeting: "Hello I'm",
    workType: "Web Developer",
  }

export function Home() {
  return (
    <Section className={Styles.Default_home}>
        <Image
          src="/images/face-card.jpg"
          className={Styles.Default_home_image}
        />

        <Wrapper
          className={Styles.Default_home_introWrapper}
        >
          <p className={Styles.Default_home_introWrapper_greeting}>
            {tempData.greeting}
          </p>
          <p className={Styles.Default_home_introWrapper_name}>
            {tempData.name}
          </p>
          <p className={Styles.Default_home_introWrapper_workType}>
            {tempData.workType}
          </p>

          <Wrapper className={Styles.Default_home_introWrapper_buttonWrapper}>
            <Button className={Styles.Default_home_introWrapper_buttonWrapper_cvButton}>
              Downlod CV
            </Button>

            <Button className={Styles.Default_home_introWrapper_buttonWrapper_contactButton}>
              Contact Info
            </Button>
          </Wrapper>

          <Wrapper className={Styles.Default_home_introWrapper_linksWrapper}>
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
