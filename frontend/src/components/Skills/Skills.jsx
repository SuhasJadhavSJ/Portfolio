import React from "react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiGit, 
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={50} /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" size={50} /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={50} /> },
    { name: "React", icon: <SiReact className="text-cyan-400" size={50} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" size={50} /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" size={50} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={50} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={50} /> },
    { name: "Git", icon: <SiGit className="text-orange-600" size={50} /> },
    { name: "GitHub", icon: <SiGithub className="text-white" size={50} /> },
    { name: "VS Code", icon: <VscVscode className="text-blue-400" size={50} /> },
  ];

  return (
    <div className="bg-black text-gold min-h-screen p-10">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
        My Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-semibold text-yellow-400">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
