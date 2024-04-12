import React from "react";
import { NavBar } from "./navbar";
import { Sections } from "./sections";
import { Footer } from "./footer";

export function Default() {

  return (
    <React.Fragment>
      {/* Navigation Bar */}
      <NavBar />

      {/* App Sections */}
      <Sections.Home />
      <Sections.About />
      <Sections.Experience />
      <Sections.Projects />
      <Sections.Contact />

      {/* Footer */}
      <Footer />

    </React.Fragment>
  );
}
