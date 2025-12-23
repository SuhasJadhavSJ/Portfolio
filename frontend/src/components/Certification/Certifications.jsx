import React from "react";
import { ExternalLink, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Jr Penetration Tester (PT1)",
    issuer: "TryHackMe",
    description:
      "Hands-on certification focused on offensive security fundamentals, including web exploitation, networking concepts, privilege escalation, and attacker methodology.",
    highlights: [
      "Offensive security fundamentals",
      "OWASP Top 10 vulnerabilities",
      "Pentester mindset & reporting",
    ],
    link: "#", // add real certificate URL
  },
  {
    title: "Full Stack Web Development (MERN)",
    issuer: "Online Learning Platform",
    description:
      "Comprehensive training in building modern web applications using the MERN stack, with a strong focus on backend logic, authentication flows, and real-world application structure.",
    highlights: [
      "React & frontend architecture",
      "Node.js & Express APIs",
      "MongoDB & data modeling",
    ],
    link: "#",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "Online Learning Platform",
    description:
      "Introduced core cybersecurity concepts including networking basics, common attack vectors, and security best practices for web applications.",
    highlights: [
      "Security fundamentals",
      "Basic networking concepts",
      "Web security awareness",
    ],
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative py-32 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-24">

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
            Professional Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Industry-recognised
            <br />
            <span className="text-[#ff4d4d]">credentials & training</span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
            Verified certifications and structured learning that support my
            practical experience in offensive security and application
            development.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="
                relative rounded-2xl p-8
                bg-[rgba(11,18,32,0.65)]
                backdrop-blur-xl
                border border-[var(--border-subtle)]
                hover:border-[rgba(255,77,77,0.35)]
                transition
              "
            >
              {/* Subtle glow */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  pointer-events-none
                  shadow-[0_0_40px_rgba(255,77,77,0.12)]
                "
              />

              {/* Header */}
              <div className="flex flex-col gap-2 mb-6">
                <h3 className="text-2xl font-semibold">
                  {cert.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Issued by <span className="text-[var(--text-main)]">{cert.issuer}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {cert.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckCircle size={16} className="text-[#ff4d4d] mt-0.5" />
                    <span className="text-[var(--text-muted)]">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  text-sm font-medium
                  text-[#ff4d4d]
                  hover:underline
                "
              >
                View Certificate
                <ExternalLink size={16} />
              </a>
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

export default Certifications;
