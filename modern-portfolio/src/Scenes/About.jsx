import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/4.jpg'; // Make sure to replace this with the correct path to your image

const About = () => {
  useEffect(() => {
    
    console.log("You are on the About page");
  }, []);

  return (
    <motion.div
      id="about"
      initial="hidden"
      animate="visible"
      className="w-full h-full p-8 mb-6 flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-4xl font-extrabold tracking-tight text-white mb-12"
      >
        About Me
      </motion.h2>

      <motion.div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center  p-8 rounded-lg shadow-lg">
        <motion.div className="flex flex-col items-center text-white w-full md:w-1/3 mb-8 md:mb-0">
          <motion.img
            src={profilePic}
            alt="Profile Picture"
            className="rounded-lg w-32 object-cover h-32 md:w-[380px] md:h-[400px]"
            
          />
        </motion.div>
        
        <motion.div className="text-white w-full md:w-2/3 md:pl-8">
          <motion.p className="text-lg leading-relaxed mb-4">
            Hello! I am a dedicated software engineer with 1 year of experience in the industry. My expertise lies in web development, and I have a strong command over a wide array of technologies including HTML, CSS, JavaScript, React, React Native, Tailwind CSS, SQL, MySQL, PHP, MongoDB, Express.js, Node.js, Bootstrap, Framer Motion, and Next.js.
          </motion.p>
          <motion.p className="text-lg leading-relaxed mb-4">
            Throughout my career, I have contributed to numerous projects, with a notable one being a hotel booking application. In this project, I improved the functionality and added new features such as hotel and room list displays, hotel filtration, profile section, recent reservations area, GST details, booking cancellation, booking requests, and more.
          </motion.p>
          <motion.p className="text-lg leading-relaxed">
            I am passionate about coding and constantly strive to enhance my skills and stay updated with the latest industry trends. I am looking for exciting opportunities where I can leverage my skills to contribute to innovative projects and grow professionally.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
