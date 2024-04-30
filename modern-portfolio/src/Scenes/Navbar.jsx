import React, { useEffect } from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import UseMediaQuery from "../hooks/UseMediaQuery";
import profile from "../assets/logo.png";
import { animate, motion } from "framer-motion";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

// const Link = ({ page, selectedPage, setSelectedPage }) => {
//   const lowerCasePage = page.toLowerCase();

//   return (
//     <AnchorLink
//       className={`${
//         selectedPage === lowerCasePage ? " text-yellow" : "text-white"
//       }
//     hover:text-yellow transition duration-500`}
//       href={`#${lowerCasePage}`}
//       onClick={() => setSelectedPage(lowerCasePage)}
//     >
//       {page}
//     </AnchorLink>
//   );
// };

export const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isAboveSmallScreen = UseMediaQuery("(min-width:768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

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


  const varients ={
    intial : {
      y : 500,
      opacity : 0
    },
    animate :{
      y : 0,
      opacity : 1,
      transition : {
        duration : 500,
        staggerChildren : 0.5
      }
    }
  }

  return (
    <motion.nav className={`${navbarBackground} z-40 w-full top-0 py-6`} variants={varients} initial="initial" whileInView="animate">
      <div className=" flex items-center justify-between mx-auto w-5/6">
        {/* <h4 className=" text-3xl font-bold ">GS</h4> */}
        <motion.div whileTap={{ scale: 0.8 }} initial="initial" whileInView="animate">
          <motion.img
            src={profile}
            className="  hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[100px] md:max-w-[100px]"
            alt="profile"
            variants={varients}
            initial="initial" whileInView="animate"
          />
        </motion.div>

        {/* desktop-menu */}
        {isAboveSmallScreen ? (
          <motion.div className=" justify-between flex gap-16  text-sm font-semibold" variants={varients} initial="initial" whileInView="animate">
            <motion.div whileTap={{ scale: 0.8 }} variants={varients} initial="initial" whileInView="animate">
              {/* <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
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
                <motion.p
                  className={`${
                    selectedPage === "home" ? " text-yellow" : "text-white"
                  }
    hover:text-yellow transition duration-500`}
    variants={varients}
    initial="initial" whileInView="animate"
                >
                  Home
                </motion.p>
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }}>
              {/* <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                <motion.p
                variants={varients}
                  className={`${
                    selectedPage === "about" ? " text-yellow" : "text-white"
                  }
    hover:text-yellow transition duration-500`}
    initial="initial" whileInView="animate"
                >
                  About
                </motion.p>
              </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.8 }}>
              {/* <Link
                page="Education"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
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
                <motion.p
                variants={varients}
                  className={`${
                    selectedPage === "education" ? " text-yellow" : "text-white"
                  }
    hover:text-yellow transition duration-500`}
                >
                  Education
                </motion.p>
              </Link>
            </motion.div>


            <motion.div whileTap={{ scale: 0.8 }}>
              {/* <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
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
                <p
                  className={`${
                    selectedPage === "skills" ? " text-yellow" : "text-white"
                  }
    hover:text-yellow transition duration-500`}
                >
                  Skills
                </p>
              </Link>
            </motion.div>
   
            {/* <motion.div whileTap={{ scale: 0.8 }}>
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </motion.div> */}
            <motion.div whileTap={{ scale: 0.8 }}>
              {/* <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
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
                <p
                  className={`${
                    selectedPage === "projects" ? " text-yellow" : "text-white"
                  }
    hover:text-yellow transition duration-500`}
                >
                  Projects
                </p>
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }}>
              {/* <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
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
                <p
                  className={`${
                    selectedPage === "contact" ? " text-yellow" : "text-white"
                  }
    hover:text-yellow transition duration-500`}
                >
                  Contact
                </p>
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <div>
            <button
              className=" bg-red p-2"
              onClick={() => setIsMenuToggle(!isMenuToggle)}
            >
              <p> =_= </p>
            </button>
          </div>
        )}
      </div>
      {/* desktop-menu */}

      {!isAboveSmallScreen && isMenuToggle && (
        <div className=" fixed right-0 bottom-0 h-full bg-blue w-[300px] transition ease-in-out duration-1500 ">
          {/* close icon */}
          <div className=" flex justify-end p-12">
            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <p>X</p>
            </button>
          </div>

          {/* menu */}
          <div className=" flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Education"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </motion.nav>
  );
};
