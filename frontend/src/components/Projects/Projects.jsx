import React from "react";
import { resQHome, unityShare, pathForge } from "../../assets";
import { useMode } from "../../context/ModeContext";

const Projects = () => {
  const { isRed } = useMode();
  const accent = isRed ? "#ff4d4d" : "#4da6ff";

  const projects = [
    {
      title: "ResQHome",
      subtitle: isRed
        ? "Attack surface analysis of an emergency coordination platform"
        : "Defensive analysis of an emergency coordination platform",
      description: isRed
        ? "ResQHome is treated as a real-world attack surface, focusing on authentication flows, role-based access, API authorization, and data exposure risks common in emergency-response systems."
        : "ResQHome is analyzed from a defensive perspective, focusing on secure authentication design, access control enforcement, logging of sensitive actions, and reducing data exposure risk.",
      image: resQHome,
      link: "#",
    },
    {
      title: "PathForge",
      subtitle: isRed
        ? "Business logic & access control analysis in AI-driven systems"
        : "Secure design considerations for AI-driven systems",
      description: isRed
        ? "PathForge presents complex business logic and user flows that are useful for analyzing authorization bypasses, business logic abuse, and injection risks in MERN-based systems."
        : "PathForge is reviewed with a focus on securing user data, enforcing access boundaries, validating AI-driven inputs, and ensuring proper logging and monitoring of sensitive operations.",
      image: pathForge,
      link: "https://path-forge-kappa.vercel.app/",
    },
    {
      title: "UnityShare",
      subtitle: isRed
        ? "Authentication & data exposure risks in community platforms"
        : "Hardening authentication & data handling in community platforms",
      description: isRed
        ? "UnityShare is analyzed for common web vulnerabilities such as broken authentication, insecure CRUD operations, and insufficient backend validation in community-driven platforms."
        : "UnityShare is evaluated for defensive controls including input validation, access enforcement, audit logging, and mitigation of common web application risks.",
      image: unityShare,
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-28">

        {/* Section Header */}
        <div className="max-w-3xl">
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full
              text-xs tracking-widest uppercase border"
            style={{
              backgroundColor: `${accent}1F`,
              borderColor: `${accent}40`,
              color: accent,
            }}
          >
            {isRed ? "Engagements" : "Defensive Reviews"}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Selected
            <br />
            <span style={{ color: accent }}>
              {isRed ? "application engagements" : "application analyses"}
            </span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
            {isRed
              ? "MERN-based applications treated as real-world systems and analyzed from an offensive security perspective."
              : "MERN-based applications analyzed from a defensive and secure-design perspective."}
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

                <p className="text-sm mb-6" style={{ color: accent }}>
                  {project.subtitle}
                </p>

                <p className="text-[var(--text-muted)] leading-relaxed max-w-xl mb-8">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2
                    text-sm font-medium hover:underline"
                  style={{ color: accent }}
                >
                  {isRed ? "View Engagement Details →" : "View Analysis →"}
                </a>
              </div>

              {/* Image */}
              <div className="relative flex justify-center">
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl"
                  style={{
                    background: `radial-gradient(circle, ${accent}40, transparent 60%)`,
                  }}
                />

                <div
                  className="relative w-full max-w-md h-64 md:h-72 rounded-2xl
                    bg-[rgba(11,18,32,0.65)] backdrop-blur-xl
                    border overflow-hidden"
                  style={{
                    borderColor: "var(--border-subtle)",
                    boxShadow: `0 0 40px ${accent}30`,
                  }}
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
