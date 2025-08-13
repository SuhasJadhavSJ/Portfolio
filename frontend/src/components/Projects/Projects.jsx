import React from "react";
import { FaGithub } from "react-icons/fa";

// Import your images from assets
import resumeImg from "../../assets/react.svg";
import chatImg from "../../assets/suhas_photo.jpg";
import interviewImg from "../../assets/suhas_bullet_2.jpg";
import roadmapImg from "../../assets/suhas_bullet_1.jpg";

const Projects = () => {
  const projectData = [
    {
      title: "AI Resume Builder (MERN)",
      description:
        "An AI-powered resume builder that generates optimized resumes using NLP and GPT models, built with MERN stack.",
      image: resumeImg,
      github: "https://github.com/yourusername/ai-resume-builder",
    },
    {
      title: "Chat Application (MERN)",
      description:
        "Real-time chat application with private messaging, typing indicators, and media sharing using MERN + Socket.io.",
      image: chatImg,
      github: "https://github.com/yourusername/chat-application",
    },
    {
      title: "Interview Preparation using AI (MERN + Next.js)",
      description:
        "AI interviewer that asks role-based questions, evaluates answers, and provides feedback using MERN + Next.js.",
      image: interviewImg,
      github: "https://github.com/yourusername/interview-ai",
    },
    {
      title: "Roadmap Builder using AI (MERN)",
      description:
        "Generates a personalized learning roadmap for skills and career goals using AI, built with MERN stack.",
      image: roadmapImg,
      github: "https://github.com/yourusername/roadmap-ai",
    },
  ];

  return (
    <section id="projects" className="bg-black text-gold py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-yellow-400 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
