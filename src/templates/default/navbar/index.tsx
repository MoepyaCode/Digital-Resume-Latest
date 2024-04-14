import React from "react";
import Styles from "./styles.module.scss";
import { BurgerMenuButton } from "./burger-menu-button";
import { HomeData, Navigate } from "@templates/default/config";
import { NavigateButton } from "../components";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [displayMenu, setDisplayBurgerMenu] = React.useState(false);

  React.useEffect(() => {
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
    <nav className={Styles.NavBar}>
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
