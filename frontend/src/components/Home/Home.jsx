import React from 'react'
import suhas from '../../assets/suhas_bullet_1.jpg'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import resume from '../../assets/ANN practical execution.pdf' // Place your PDF in assets folder

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-10 bg-black text-yellow-400">
      
      {/* Left Side - Text */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Hi! I am <span className="text-yellow-600">Suhas Jadhav</span>
        </h1>
        <p className="text-2xl font-medium mb-6">
          Full Stack Web Developer
        </p>
        <p className="text-gray-300 mb-8">
          I specialize in building high-performance, visually stunning, and user-friendly web applications 
          using the latest technologies in the MERN stack.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <a 
            href="#projects"
            className="px-6 py-3 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            View My Work
          </a>
          <a 
            href={resume} 
            download="Suhas_Jadhav_Resume.pdf"
            className="px-6 py-3 border border-yellow-500 text-yellow-400 rounded-md font-semibold hover:bg-yellow-500 hover:text-black transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-3xl">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative">
        <div className="w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-yellow-500 shadow-[0_0_40px_#FFD700]">
          <img 
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            src={suhas} 
            alt="Profile_Image" 
          />
        </div>
      </div>
    </section>
  )
}

export default Home
