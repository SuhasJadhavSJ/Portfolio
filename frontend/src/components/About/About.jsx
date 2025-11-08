import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#F9FAFB] text-slate-900 px-6 sm:px-10 py-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-12">
        {/* About Content */}
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            About <span className="text-amber-500">Me</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 text-lg">
            Hi, I’m <span className="text-amber-500 font-semibold">Suhas Jadhav</span>, a passionate
            <strong> Full Stack Web Developer </strong> dedicated to building
            high-quality, interactive, and scalable applications using the MERN
            stack.  
            I believe in writing clean, efficient code and developing solutions
            that create a real-world impact while maintaining strong usability
            and performance.
          </p>
        </div>

        {/* Skills Section */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900">
            Skills &amp; Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Git",
              "Postman",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Journey Section */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900">
            My Journey
          </h3>
          <div className="space-y-6 border-l-2 border-amber-400 pl-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900">🎓 Education</h4>
              <p className="text-slate-600">
                Currently pursuing a degree in Computer Science Engineering while
                exploring full-stack and modern web technologies.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">💻 Projects</h4>
              <p className="text-slate-600">
                Built multiple full-stack projects — from real-time chat apps to
                e-commerce platforms and ML-driven web applications — focusing on
                performance and user experience.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">🚀 Goals</h4>
              <p className="text-slate-600">
                To grow into a highly skilled Software Engineer, contributing to
                impactful projects that combine innovation, usability, and
                technology to solve real-world challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <a
          href="#contact"
          className="mt-8 px-6 py-3 bg-amber-500 text-white rounded-md font-semibold hover:bg-amber-600 transition-all"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
};

export default About;
