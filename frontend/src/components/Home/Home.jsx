import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/Resume_Suhas.pdf";

const Home = () => {
  const [showRole, setShowRole] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    const roleTimer = setTimeout(() => setShowRole(true), 1200);
    const descTimer = setTimeout(() => setShowDesc(true), 2200);
    return () => {
      clearTimeout(roleTimer);
      clearTimeout(descTimer);
    };
  }, []);

  const name = "Suhas Jadhav";

  // The paragraph we’ll animate word by word
  const description =
    "I build high-performance, visually refined, and user-focused web applications using modern technologies in the MERN stack. I craft clean, maintainable, and scalable solutions that bring ideas to life.";

  // Split description into words
  const words = description.split(" ");

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 bg-[#F9FAFB] text-slate-900 relative overflow-hidden"
    >
      <div className="max-w-3xl text-center">
        {/* Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-semibold mb-3"
        >
          Hi! I’m
        </motion.h1>

        {/* Animated Name */}
        <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 flex justify-center">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
              }}
              className={
                char === " "
                  ? "mx-1"
                  : "text-amber-500 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]"
              }
            >
              {char}
            </motion.span>
          ))}

          {/* Custom Blinking Cursor */}
          <motion.span
            className="ml-1 text-amber-600 font-bold"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        </motion.h1>

        {/* Role Reveal */}
        {showRole && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl font-semibold mb-4 text-slate-700"
          >
            Full Stack Web Developer
          </motion.p>
        )}

        {/* Word-by-word description animation */}
        {showDesc && (
          <motion.div
            className="text-base sm:text-lg text-slate-600 mb-8 flex flex-wrap justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-10 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-amber-500 text-white rounded-md font-semibold hover:bg-amber-600 transition-all"
          >
            View My Work
          </a>
          <a
            href={resume}
            download="Suhas_Jadhav_Resume.pdf"
            className="px-6 py-3 border border-amber-500 text-amber-600 rounded-md font-semibold hover:bg-amber-500 hover:text-white transition-all"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1 }}
          className="flex justify-center gap-8 text-2xl text-slate-700"
        >
          <a
            href="https://github.com/SuhasJadhavSJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/suhas__jadhav/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/suhas-jadhav-60214420b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-all"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
