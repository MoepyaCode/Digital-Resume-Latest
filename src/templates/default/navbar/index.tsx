import React from "react";
import Styles from "./styles.module.scss";
import { BurgerMenuButton } from "./burger-menu-button";
import { HomeData, Navigate } from "@templates/default/config";
import { NavigateButton } from "../components";

export function NavBar() {
  const navRef = React.useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [displayMenu, setDisplayBurgerMenu] = React.useState(false);

  React.useLayoutEffect(() => {

    function handleNavBoxShadow() {
      if (navRef.current) {
        if (window.scrollY > 0) {
          navRef.current.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        } else {
          navRef.current.style.boxShadow = "none";
        }
      }
    }

    window.addEventListener("scroll", handleNavBoxShadow);
    handleNavBoxShadow();

    return () => window.removeEventListener("scroll", handleNavBoxShadow);

  }, [])

  React.useLayoutEffect(() => {

    function handleScrollPaddingTop() {
      const html = document.querySelector("html") as HTMLElement;
      
      if (navRef.current) {
        const navHeight = navRef.current.clientHeight;
        html.style.scrollPaddingTop = `${navHeight}px`;
      }
    }

    window.addEventListener("resize", handleScrollPaddingTop);
    handleScrollPaddingTop();

    return () => window.removeEventListener("resize", handleScrollPaddingTop);

  }, [])

  React.useLayoutEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 700) {
        setDisplayBurgerMenu(true);
      } else {
        setDisplayBurgerMenu(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav ref={navRef} className={Styles.NavBar}>
      <NavigateButton
        className={Styles.NavBar_landingPageBtn}

        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigate={Navigate.HOME}
      >
        {HomeData.name}
      </NavigateButton>

      {(!displayMenu || isMenuOpen) && (
        <ul>
          <li>
            <NavigateButton
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              navigate={Navigate.ABOUT}>About</NavigateButton>
          </li>

          <li>
            <NavigateButton
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              navigate={Navigate.EXPERIENCE}>
              Experience
            </NavigateButton>
          </li>

          <li>
            <NavigateButton
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              navigate={Navigate.PROJECTS}>
              Projects
            </NavigateButton>
          </li>

          <li>
            <NavigateButton
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              navigate={Navigate.CONTACT}>Contact</NavigateButton>
          </li>
        </ul>
      )}

      {displayMenu && (
        <BurgerMenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </nav>
  );
}
