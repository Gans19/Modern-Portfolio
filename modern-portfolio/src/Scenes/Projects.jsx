import React from "react";
import { motion } from "framer-motion";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import Project5 from "../assets/project5.png";
import Project6 from "../assets/project6.png";
import Project7 from "../assets/project7.png";
import Project8 from "../assets/project8.png";

const projects = [
  {
    title: "NextJs InfiniteScroll Serverside Rendering",
    description:
      "Efficiently fetch and render large datasets with infinite scroll using server-side rendering in Next.js.",
    image: Project1,
    github:
      "https://github.com/Gans19/NextJs_InfiniteScroll_Serverside_Rendering",
    demo: "https://6649a3a292f7907eca88a837--animeepic.netlify.app/",
  },
  {
    title: "Next.JS Animated Cards",
    description:
      "Create dynamic and engaging user experiences with animated cards using Next.js.",
    image: Project2,
    github: "https://github.com/Gans19/Next.JS-Animated-Cards",
    demo: "https://main--animated-cards-aceternity.netlify.app/",
  },
  {
    title: "Todo App",
    description:
      "Develop an intuitive and efficient task management tool with a React-based todo app.",
    image: Project4,
    github: "https://github.com/Gans19/Todo-List",
    demo: "https://main--dynamic-monstera-5d96e5.netlify.app/",
  },
  {
    title: "Restaurant App",
    description:
      "Create a seamless dining experience with a comprehensive restaurant app for  menus, and reviews.",
    image: Project5,
    github: "https://github.com/Gans19/Restaurant-App",
    demo: "",
  },
  {
    title: "Weather App",
    description:
      "Build a responsive weather app with real-time data and interactive features using React.",
    image: Project3,
    github: "https://github.com/Gans19/Weather-App",
    demo: "https://main--silly-sunburst-b51a18.netlify.app/",
  },
  {
    title: "New Year Countdown",
    description:
      "Create a dynamic countdown timer to ring in the New Year with anticipation and excitement.",
    image: Project6,
    github: "https://github.com/Gans19/NewYearCountdown",
    demo: "https://new-year-countdown-a89f3.web.app/",
  },
  {
    title: "Movie Booking Website",
    description:
      "Design a user-friendly platform for booking movie tickets online, offering seamless navigation and real-time seat availability updates.",
    image: Project7,
    github: "https://github.com/Gans19/MovieBookingWebsite",
    demo: "",
  },
  {
    title: "Ecommerce Website",
    description:
      "Develop a robust ecommerce platform with comprehensive product listings and user-friendly shopping cart functionalities.",
    image: Project8,
    github: "https://github.com/Gans19/Ecommerce-Website",
    demo: "https://eommerce19.000webhostapp.com/",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="w-full h-screen bg-black py-16">
      <header className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">My Projects</h2>
      </header>
      <div className="overflow-x-scroll scroll-smooth snap-x snap-mandatory flex no-scrollbar h-full px-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="snap-start flex-shrink-0 border border-gray-200 rounded-lg shadow-lg p-5 m-3 w-[350px] h-[500px] transition-transform transform-gpu hover:scale-105 hover:rotate-1 hover:shadow-2xl flex flex-col justify-between"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className=" mb-4">{project.description}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded hover:bg-gray-700"
              >
                GitHub
              </a>
              {project.demo.length !== 0 && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded transition-colors duration-200 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  aria-label={`View demo for ${project.name}`}
                >
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
