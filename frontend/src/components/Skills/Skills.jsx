import React from "react";
import { motion } from "framer-motion";
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
    { name: "Express.js", icon: <SiExpress className="text-gray-500" size={50} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={50} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={50} /> },
    { name: "Git", icon: <SiGit className="text-orange-600" size={50} /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-900" size={50} /> },
    { name: "VS Code", icon: <VscVscode className="text-blue-400" size={50} /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#F9FAFB] text-slate-900 py-16 px-8 sm:px-12"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }} // 👈 only triggers when 50% is visible
      >
        <motion.h1 variants={item} className="text-4xl font-bold mb-12">
          My <span className="text-amber-500">Skills</span>
        </motion.h1>

        <motion.div
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                  style={{
                    background:
                      "conic-gradient(from 90deg, rgba(245,158,11,0.2), transparent 70%)",
                    borderRadius: "50%",
                  }}
                ></div>
                {skill.icon}
              </div>
              <p className="mt-3 text-lg font-semibold text-slate-700 group-hover:text-amber-600 transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
