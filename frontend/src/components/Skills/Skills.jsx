import React from "react";
import {
  Shield,
  Crosshair,
  Bug,
  ArrowUpRight,
  FileText,
  Brain,
  Code,
} from "lucide-react";

const skills = [
  {
    icon: Shield,
    title: "Foundational Cyber Security",
    desc: "Understanding core security principles across application, network, and Active Directory environments.",
  },
  {
    icon: Crosshair,
    title: "Offensive Security Frameworks",
    desc: "Applying structured methodologies to conduct systematic and repeatable penetration tests.",
  },
  {
    icon: Bug,
    title: "OWASP Top 10 Vulnerabilities",
    desc: "Identifying, exploiting, and assessing real-world application security flaws and misconfigurations.",
  },
  {
    icon: ArrowUpRight,
    title: "Privilege Escalation",
    desc: "Analyzing systems to escalate privileges in both networked and application-based environments.",
  },
  {
    icon: FileText,
    title: "Security Reporting",
    desc: "Producing clear, actionable reports that communicate risk, impact, and remediation steps.",
  },
  {
    icon: Brain,
    title: "Pentester Mindset",
    desc: "Thinking like an attacker to anticipate threats and uncover weaknesses before exploitation.",
  },
  {
    icon: Code,
    title: "Application Security (MERN Stack)",
    desc: "Leveraging hands-on experience with React, Node.js, Express, and databases to analyze application logic, authentication flows, and attack surfaces.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-widest uppercase text-[#ff4d4d] mb-4">
            Skills
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Key capabilities evaluated
          </h2>

          <div className="mt-6 mx-auto h-[3px] w-20 bg-[#ff4d4d] rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.title} className="text-center">

                {/* Icon */}
                <div
                  className="
                    mx-auto mb-6
                    w-14 h-14 rounded-full
                    flex items-center justify-center
                    bg-[rgba(255,77,77,0.12)]
                    border border-[rgba(255,77,77,0.35)]
                    shadow-[0_0_25px_rgba(255,77,77,0.25)]
                  "
                >
                  <Icon size={22} className="text-[#ff4d4d]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--text-muted)] max-w-xs mx-auto">
                  {skill.desc}
                </p>
              </div>
            );
          })}
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

export default Skills;
