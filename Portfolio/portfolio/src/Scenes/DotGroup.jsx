import { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from "react-scroll";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      // console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      // console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    // console.log(to);
    setSelectedPage(to);
  };

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7  cursor-pointer">
      {/* <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      /> */}
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
      >
        <div
          className={`${
            selectedPage === "home" ? selectedStyles : "bg-white"
          } w-3 h-3 rounded-full`}
        ></div>
      </Link>

      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
      >
        <div
          className={`${
            selectedPage === "about" ? selectedStyles : "bg-white"
          } w-3 h-3 rounded-full`}
        ></div>
      </Link>

      {/* <AnchorLink
        href="#about"
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("about")}
      /> */}

      {/* <AnchorLink
        href="#education"
        className={`${
          selectedPage === "education" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("education")}
      /> */}

      <Link
        activeClass="active"
        to="education"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
      >
        <div
          className={`${
            selectedPage === "education" ? selectedStyles : "bg-white"
          } w-3 h-3 rounded-full`}
        ></div>
      </Link>

      {/* <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")}
      /> */}

      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
      >
        <div
          className={`${
            selectedPage === "skills" ? selectedStyles : "bg-white"
          } w-3 h-3 rounded-full`}
        ></div>
      </Link>

      {/* <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      /> */}

      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
      >
        <div
          className={`${
            selectedPage === "projects" ? selectedStyles : "bg-white"
          } w-3 h-3 rounded-full`}
        ></div>
      </Link>

      {/* <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      /> */}

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
      >
        <div
          className={`${
            selectedPage === "contact" ? selectedStyles : "bg-white"
          } w-3 h-3 rounded-full`}
        ></div>
      </Link>
    </div>
  );
};

export default DotGroup;
