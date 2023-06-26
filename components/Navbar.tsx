import React from "react";
import AnimatedNavButton from "./Navbar/AnimatedNavButton";
import AnimatedLogo from "./Navbar/AnimatedLogo";
import { ProjectType } from "../typedefinition";

type Props = {
  project: ProjectType[];
};

const Navbar = ({ project }: Props) => {
  const handleScrollTo = (element: string) => {
    const section = document.getElementById(element);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20  xl:items-center p-6 ">
      <AnimatedLogo project={project} />
      <div className="flex flex-row items-center ">
        <AnimatedNavButton
          delay={0.3}
          link={"portfolio"}
          handleScrollTo={handleScrollTo}
        >
          Portfolio
        </AnimatedNavButton>
        <AnimatedNavButton
          delay={0.6}
          link={"about"}
          handleScrollTo={handleScrollTo}
        >
          About
        </AnimatedNavButton>
        <AnimatedNavButton
          delay={0.9}
          link={"education"}
          handleScrollTo={handleScrollTo}
        >
          Education
        </AnimatedNavButton>
        
      </div>
    </nav>
  );
};

export default Navbar;
