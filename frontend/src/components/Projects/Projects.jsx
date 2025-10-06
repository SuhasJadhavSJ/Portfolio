import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import genAI from '../../assets/AI.jpeg'; // Replace with your GenAI project image

const Projects = () => {
  const projectData = [
    {
      title: "GenAI",
      description:
        "An AI-powered web application that generates content, assists with tasks, and provides intelligent insights using modern AI models.",
      image: genAI,
      github: "https://github.com/yourusername/genai",
      live: "https://genai-live-demo.com", // Replace with your live demo URL
    },
  ];

  return (
    <section id="projects" className="bg-black py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
          My Projects
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-yellow-400 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition"
                  >
                    <FaExternalLinkAlt className="mr-2" /> View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
