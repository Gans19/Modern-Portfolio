import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";


const SocialMediaIcons = () => {


  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  return (
    <div className="flex justify-center  md:justify-start my-10 gap-7">


<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <motion.path
      d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
      variants={icon}
      initial="hidden"
      animate="visible"
    />
  </svg>


      <motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
> 
      <a
        className="hover:-translate-y-2  transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={28} />
      </a>
</motion.div>

<motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
> 
      <a
        className="hover:-translate-y-2  transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter size={28} />
      </a>

</motion.div>

<motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
> 

      <a
        className="hover:-translate-y-2  transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook size={28} />
      </a>

      </motion.div>

      <motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
> 


      <a
        className=" hover:-translate-y-2 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare size={30} />
      </a>

      </motion.div>

    </div>
  );
};

export default SocialMediaIcons;
