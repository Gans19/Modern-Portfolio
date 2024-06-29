import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 4,
      },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      id="contact"
      initial="hidden"
      animate="visible"
      variants={container}
      className="w-full h-full p-8 "
    >
      <motion.div className=" w-[100%] h-[100%]">
        <motion.h2
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-center mb-8"
          variants={item}
        >
          Contact Me
        </motion.h2>

        <motion.div ref={ref} className="w-16 h-16 mb-8 mx-auto">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            style={{ width: "100px", height: "100px" }}
          >
            <motion.path
              d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
              fill="none"
              stroke="white"
              strokeWidth={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={icon}
            />
          </svg> */}

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100px", height: "100px" }}
            viewBox="0 0 512 512"
          >
            <motion.path
              fill="none"
              stroke="white"
              strokeWidth={5}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={icon}
              d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
            />
          </svg> */}

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <motion.path 
               fill="none"
               stroke="white"
               strokeWidth={5}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               variants={icon}
            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
        </motion.div>

        <motion.form
          className="space-y-4 mx-auto max-w-md"
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex flex-col">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <motion.input
              id="name"
              type="text"
              className="p-2 rounded-md bg-gray-700 text-white"
              whileFocus={{ scale: 1.05 }}
            />
          </motion.div>

          <motion.div className="flex flex-col">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <motion.input
              id="email"
              type="email"
              className="p-2 rounded-md bg-gray-700 text-white"
              whileFocus={{ scale: 1.05 }}
            />
          </motion.div>

          <motion.div className="flex flex-col">
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <motion.textarea
              id="message"
              rows="4"
              className="p-2 rounded-md bg-gray-700 text-white"
              whileFocus={{ scale: 1.05 }}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full p-2 mt-4 text-white bg-indigo-600 rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
