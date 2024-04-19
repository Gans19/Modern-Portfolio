import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = ` relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[50%] before:-top-[50%]`;
  return (
    <div className=" flex flex-col gap-6 fixed top-[60%] bg-red-400 right-7">
      <AnchorLink
        className={`${selectedPage === "home" ? selectedStyles : ""}
    hover:text-yellow transition duration-500`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${selectedPage === "about" ? selectedStyles : ""}
    hover:text-yellow transition duration-500`}
        href="#about"
        onClick={() => setSelectedPage("about")}
      />
      <AnchorLink
        className={`${
          selectedPage === "education" ? selectedStyles : ""
        }
    hover:text-yellow transition duration-500`}
        href="#education"
        onClick={() => setSelectedPage("education")}
      />
      <AnchorLink
        className={`${selectedPage === "skills" ? selectedStyles : ""}
    hover:text-yellow transition duration-500`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : ""
        }
    hover:text-yellow transition duration-500`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      />
      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : ""
        }
    hover:text-yellow transition duration-500`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
