import React from 'react'
import suhas from '../../assets/suhas_bullet_1.jpg'
import suhas2 from '../../assets/suhas_bullet_2.jpg'

const About = () => {
  return (
    <section className="min-h-screen bg-black text-yellow-400 px-10 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-yellow-500 shadow-[0_0_40px_#FFD700]">
          <img 
            src={suhas2} 
            alt="About Me" 
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* About Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hi, I’m <span className="text-yellow-500 font-semibold">Suhas Jadhav</span>, 
            a passionate Full Stack Web Developer who loves crafting interactive, 
            scalable, and user-friendly applications using the MERN stack. 
            I believe in writing clean, efficient code and building solutions 
            that create real impact.
          </p>

          {/* Skills Section */}
          <h3 className="text-2xl font-semibold mb-3">Skills & Tools</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "MySQL", "Git", "Postman"].map(skill => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Timeline / Journey */}
          <h3 className="text-2xl font-semibold mb-3">My Journey</h3>
          <div className="space-y-4 border-l-2 border-yellow-500 pl-6 mb-8">
            <div>
              <h4 className="text-xl font-bold">🎓 Education</h4>
              <p className="text-gray-300">Currently pursuing Engineering in Computer Science, exploring modern technologies and full-stack development.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold">💻 Projects</h4>
              <p className="text-gray-300">Built multiple full-stack projects including chat apps, e-commerce platforms, and ML-powered web apps.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold">🚀 Goals</h4>
              <p className="text-gray-300">To become a highly skilled software engineer, contributing to innovative projects that solve real-world problems.</p>
            </div>
          </div>

          {/* Call to Action */}
          <a 
            href="#contact"
            className="px-6 py-3 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
