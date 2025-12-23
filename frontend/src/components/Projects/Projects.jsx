import React from "react";
import { resQHome, unityShare, pathForge } from "../../assets";
const projects = [
  {
    title: "ResQHome",
    subtitle: "MERN-based emergency response & coordination platform",
    description:
      "ResQHome is a full-stack MERN application designed to coordinate emergency responses efficiently. The platform handles authentication, role-based access, real-time data flow, and backend APIs — making it a realistic attack surface for testing authentication, authorization, and data exposure flaws.",
    image: resQHome,
    link: "#",
  },
  {
    title: "PathForge",
    subtitle: "AI-assisted career guidance & recommendation system",
    description:
      "PathForge is a MERN application focused on personalized career pathways and recommendations. From a security perspective, it presents complex logic flows, user data handling, and API interactions that are ideal for analyzing access control, business logic flaws, and injection vectors.",
    image: pathForge,
    link: "https://path-forge-kappa.vercel.app/",
  },
  {
    title: "UnityShare",
    subtitle: "Community-driven resource sharing platform",
    description:
      "UnityShare enables users to share and manage resources within a community. Built on the MERN stack, it includes authentication flows, CRUD operations, and backend validations — offering practical exposure to common web security risks and mitigation strategies.",
    image: unityShare,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-28">

        {/* Section Header */}
        <div className="max-w-3xl">
          <span
            className="
              inline-block mb-4
              px-4 py-1.5 rounded-full
              text-xs tracking-widest uppercase
              bg-[rgba(255,77,77,0.12)]
              text-[#ff4d4d]
              border border-[rgba(255,77,77,0.25)]
            "
          >
            Engagements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Selected
            <br />
            <span className="text-[#ff4d4d]">application engagements</span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
            MERN-based applications treated as real-world systems — analyzed
            from both a developer and offensive security perspective.
          </p>
        </div>

        {/* Project Blocks */}
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`
                grid grid-cols-1 lg:grid-cols-2
                gap-16 items-center
                ${index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}
              `}
            >
              {/* Text */}
              <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                <h3 className="text-3xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-[#ff4d4d] mb-6">
                  {project.subtitle}
                </p>

                <p className="text-[var(--text-muted)] leading-relaxed max-w-xl mb-8">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="
                    inline-flex items-center gap-2
                    text-sm font-medium text-[#ff4d4d]
                    hover:underline
                  "
                >
                  View Project Details →
                </a>
              </div>

              {/* Image */}
              <div className="relative flex justify-center">
                {/* Subtle glow */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl
                    bg-[radial-gradient(circle,
                    rgba(255,77,77,0.25),
                    transparent_60%)]
                    blur-2xl
                  "
                />

                <div
                  className="
                    relative
                    w-full max-w-md h-64 md:h-72
                    rounded-2xl
                    bg-[rgba(11,18,32,0.65)]
                    backdrop-blur-xl
                    border border-[var(--border-subtle)]
                    overflow-hidden
                    shadow-[0_0_40px_rgba(255,77,77,0.18)]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-32
          bg-gradient-to-t from-[var(--bg-dark)] to-transparent
          pointer-events-none
        "
      />
    </section>
  );
};

export default Projects;
