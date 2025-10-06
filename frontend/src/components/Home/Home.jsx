import React from 'react'
import suhas from '../../assets/suhas_bullet_1.jpg'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import resume from '../../assets/ANN practical execution.pdf'

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-[80px] flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 bg-black text-yellow-400 gap-10 lg:gap-20"
    >
      {/* Left Side - Text */}
      <div className="flex-1 text-center lg:text-left max-w-xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-4">
          Hi! I am <span className="text-yellow-600">Suhas Jadhav</span>
        </h1>
        <p className="text-xl sm:text-2xl lg:text-2xl font-medium mb-4">
          Full Stack Web Developer
        </p>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6">
          I specialize in building high-performance, visually stunning, and user-friendly web applications 
          using the latest technologies in the MERN stack.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center lg:justify-start">
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
        <div className="flex justify-center lg:justify-start gap-6 text-2xl sm:text-3xl">
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
      <div className="flex-1 flex justify-center">
        <div className="w-56 sm:w-64 lg:w-96 xl:w-[28rem] h-56 sm:h-64 lg:h-96 xl:h-[28rem] rounded-full overflow-hidden border-4 border-yellow-500 shadow-[0_0_40px_#FFD700]">
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
