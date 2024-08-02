import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import UseMediaQuery from "../hooks/UseMediaQuery";
import profile from "../assets/logo.png";
import { motion } from "framer-motion";
import { Link, Events, scrollSpy } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isAboveSmallScreen = UseMediaQuery("(min-width:768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {});
    Events.scrollEvent.register("end", (to, element) => {});
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setSelectedPage(to);
  };

  const varients = {
    intial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.nav
      className={`${navbarBackground} z-40 w-full top-0`}
      variants={varients}
      initial="initial"
      whileInView="animate"
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <motion.div whileTap={{ scale: 0.8 }}>
          <motion.img
            src={profile}
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[100px] md:max-w-[100px]"
            alt="profile"
            variants={varients}
            initial="initial"
            whileInView="animate"
          />
        </motion.div>

        {isAboveSmallScreen ? (
          <motion.div
            className="flex justify-between gap-16 text-sm font-semibold"
            variants={varients}
            initial="initial"
            whileInView="animate"
          >
            {["home", "about", "education", "skills", "projects", "contact"].map((page) => (
              <motion.div whileTap={{ scale: 0.8 }} key={page}>
                <Link
                  activeClass="active"
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  <motion.p
                    className={`${
                      selectedPage === page ? "text-yellow" : "text-white"
                    } hover:text-yellow transition duration-500 cursor-pointer`}
                    variants={varients}
                    initial="initial"
                    whileInView="animate"
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </motion.p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div>
            <button
              className="bg-yellow p-2 rounded-md shadow-md"
              onClick={() => setIsMenuToggle(!isMenuToggle)}
            >
              <GiHamburgerMenu className="text-black text-xl" />
            </button>
          </div>
        )}
      </div>

      {!isAboveSmallScreen && isMenuToggle && (
        <motion.div
          className="fixed right-0 bottom-0 h-full w-2/3 bg-yellow z-50 shadow-lg"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuToggle(false)}>
              <IoMdClose className="text-black text-2xl" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-10 mt-10 text-xl text-black">
            {["home", "about", "education", "skills", "projects", "contact"].map((page) => (
              <Link
                key={page}
                activeClass="active"
                to={page}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                onClick={() => setIsMenuToggle(false)}
              >
                <p
                  className={`${
                    selectedPage === page ? "text-red-500" : "text-black"
                  } hover:text-red-500 transition duration-300 cursor-pointer`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
