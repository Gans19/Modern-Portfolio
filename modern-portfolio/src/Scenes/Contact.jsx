import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ setSelectedPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    <link rel="alternate" to="home" />;
  }, []);

  useEffect(() => {
    if (isInView) {
      setSelectedPage("contact");
    }
  }, [isInView, setSelectedPage]);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: `Sender: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    emailjs
      .send(
        "service_odvzu4m",
        "template_mk5bxoj",
        emailParams,
        "WN8oFQ_IqsRAO5RvK"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email.");
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      id="contact"
      initial="hidden"
      animate="visible"
      variants={container}
      className="w-full h-full pt-8"
      ref={ref}
    >
      <motion.div className="w-full h-full">
        <motion.h2
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-center mb-8"
          variants={item}
        >
          Contact Me
        </motion.h2>

        <motion.div className="w-32 h-32 mb-16 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g data-name="20-Email-Write">
              <motion.path
                fill="none"
                stroke="white"
                strokeWidth={0.5}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={icon}
                d="M29 3H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h13v-2H3a1 1 0 0 1-1-1V6.23l13.42 9.58a1 1 0 0 0 1.16 0L30 6.23V15h2V6a3 3 0 0 0-3-3zM16 13.77 3.72 5h24.56z"
              />
              <motion.path
                fill="none"
                stroke="white"
                strokeWidth={0.5}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={icon}
                d="M26 15h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 .29.71l2 2a1 1 0 0 0 1.41 0l2-2A1 1 0 0 0 27 26V16a1 1 0 0 0-1-1zm-1 10.59-1 1-1-1V21h2z"
              />
            </g>
          </svg>
        </motion.div>

        <form className="space-y-4 mx-auto max-w-md" onSubmit={handleSendEmail}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 rounded-md bg-black border border-white text-white"
              autoFocus
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-2 rounded-md bg-black border border-white text-white"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="p-2 rounded-md bg-black border border-white text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-2 mt-4 text-white bg-indigo-600 rounded-md"
          >
            Send Message
          </button>
        </form>

        <ToastContainer />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
