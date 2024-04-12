import React from "react";
import Styles from "./styles.module.scss";
import {
  Image,
  NavigateButton,
  Section,
  Wrapper,
} from "@templates/default/components/";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { HomeData, Navigate } from "@templates/default/config";

export function Home() {
  return (
    <Section className={Styles.Home} id={Navigate.HOME}>
      <Image src={HomeData.image} className={Styles.Home_image} />

      <Wrapper className={Styles.Home_introWrapper}>
        <p className={Styles.Home_introWrapper_greeting}>{HomeData.greeting}</p>
        <p className={Styles.Home_introWrapper_name}>{HomeData.name}</p>
        <p className={Styles.Home_introWrapper_workType}>{HomeData.workType}</p>

        <Wrapper className={Styles.Home_introWrapper_buttonWrapper}>
          <a
            className={Styles.Home_introWrapper_buttonWrapper_cvButton}
            href={HomeData.links.resume}
            download
          >
            Download CV
          </a>

          <NavigateButton
            className={Styles.Home_introWrapper_buttonWrapper_contactButton}
            navigate={Navigate.CONTACT}
          >
            Contact Info
          </NavigateButton>
        </Wrapper>

        <Wrapper className={Styles.Home_introWrapper_linksWrapper}>
          <Link
            to={HomeData.links.linkedIn}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link to={HomeData.links.github} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </Wrapper>
      </Wrapper>
    </Section>
  );
}
