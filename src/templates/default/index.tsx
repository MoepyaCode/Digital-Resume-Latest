import React from "react";
import { NavBar } from "./navbar";
import { Sections } from "./sections";
import { Footer } from "./footer";

const tempData = {
  name: "John Doe",
  greeting: "Hello I'm",
  workType: "Web Developer",
}

export function Default() {

  return (
    <React.Fragment>
      {/* Navigation Bar */}
      <NavBar name={tempData.name} />

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
