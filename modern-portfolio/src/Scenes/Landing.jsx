import React from "react";
import UseMediaQuery from "../hooks/UseMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assets/2.jpg";
import SocialMediaIcons from "../Componeents/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = UseMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-normal md:items-center md:h-full gap-16 py-10"
    >
      {/* Image section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 ">
        {isAboveMediumScreen ? (
          // <div className="card-wrapper  relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400pc] before:w-full before:h-full before:border-2 before:border-blue before:max-w-[400px] before:z-[-1]">

          <div class="flex  flex-col items-center justify-center w-[100%] h-[100%]  text-white">
            <div class="card-wrapper h-[500px] w-[400px]">
              <div class="card-content flex items-center justify-center text-xs">
                <img
                  src={profile}
                  className=" card-content hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
                  alt="profile"
                />
              </div>
            </div>
          </div>
        ) : (
          // </div>
          <img
            src={profile}
            className="  hover:filter hover:saturate-200 transition duration-500  w-full max-w-[400px] md:max-w-[600px]"
            alt="profile"
          />
        )}
      </div>

      {/* main section */}

      <div className=" z-30 basis-2/5 mt-12 md:mt-32">
        {/* Heading section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" text-6xl z-10 text-center md:text-start">
            Selva
            <span className="xs:relative text-white   z-20 before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              {" "}
              Ganesh G
            </span>
          </p>

          <p className=" mt-10 mb-7 text-sm text-center md:text-start">
            Software Engineer
          </p>
        </motion.div>

        {/* call to action section */}

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              See Projects
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
