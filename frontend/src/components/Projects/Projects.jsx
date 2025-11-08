import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import genAI from "../../assets/AI.jpeg";
import weather from "../../assets/weather.png";
import unity from "../../assets/sharing.png";
import resQ from "../../assets/animal.jpg";

const Projects = () => {
  const projectData = [
    {
      title: "ResQHome",
      description:
        "A smart emergency response platform connecting users with nearby service providers and support systems in real-time. Built with MERN and cloud integration.",
      image: resQ,
      github: "https://github.com/yourusername/resqhome",
      live: "https://resqhome-live-demo.com",
    },
    {
      title: "UnityShare",
      description:
        "A secure platform for real-time file sharing and collaboration with an intuitive interface, focusing on accessibility and speed.",
      image: unity,
      github: "https://github.com/yourusername/unityshare",
      live: "https://unityshare-demo.com",
    },
    {
      title: "GenAI",
      description:
        "An AI-powered web application that generates content, assists with tasks, and provides intelligent insights using advanced AI models.",
      image: genAI,
      github: "https://github.com/yourusername/genai",
      live: "https://genai-live-demo.com",
    },
    {
      title: "WeatherDetection",
      description:
        "A responsive Weather Detection app built using modern APIs, providing real-time forecasts with clean UI and fast performance.",
      image: weather,
      github: "https://github.com/yourusername/weather-detection",
      live: "https://weatherrcheck.netlify.app/",
    },
  ];

  // Animation variants for bounce from left/right
  const cardVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -150 : 150, // alternate directions
      y: -30,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  });

  return (
    <section id="projects" className="bg-[#F9FAFB] py-20">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }} // only triggers when section enters view
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-slate-900"
        >
          My <span className="text-amber-500">Projects</span>
        </motion.h2>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-[0_8px_30px_rgba(245,158,11,0.25)] hover:-translate-y-2"
            >
              {/* Image */}
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-amber-500 text-white rounded-md font-semibold hover:bg-amber-600 transition-all"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 border border-amber-500 text-amber-600 rounded-md font-semibold hover:bg-amber-500 hover:text-white transition-all"
                  >
                    <FaExternalLinkAlt className="mr-2" /> View Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
