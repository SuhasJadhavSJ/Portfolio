import React from "react";
import {
  Shield,
  Crosshair,
  Bug,
  ArrowUpRight,
  FileText,
  Brain,
  Code,
  Activity,
  Eye,
} from "lucide-react";
import { useMode } from "../../context/ModeContext";

const Skills = () => {
  const { isRed } = useMode();
  const accent = isRed ? "#ff4d4d" : "#4da6ff";

  const skills = isRed
    ? [
        {
          icon: Shield,
          title: "Foundational Cyber Security",
          desc: "Understanding core security principles across application, network, and Active Directory environments.",
        },
        {
          icon: Crosshair,
          title: "Offensive Security Methodology",
          desc: "Applying structured approaches for enumeration, exploitation, and validation during penetration testing.",
        },
        {
          icon: Bug,
          title: "OWASP Top 10",
          desc: "Identifying, exploiting, and assessing common application vulnerabilities and misconfigurations.",
        },
        {
          icon: ArrowUpRight,
          title: "Privilege Escalation",
          desc: "Analyzing systems and applications to escalate privileges during controlled attack simulations.",
        },
        {
          icon: FileText,
          title: "Security Reporting",
          desc: "Producing clear, actionable reports communicating risk, impact, and remediation steps.",
        },
        {
          icon: Brain,
          title: "Attacker Mindset",
          desc: "Thinking like an adversary to anticipate attack paths and uncover weaknesses proactively.",
        },
        {
          icon: Code,
          title: "Application Security (MERN)",
          desc: "Using React, Node.js, Express, and databases knowledge to analyze logic flaws, auth issues, and attack surfaces.",
        },
      ]
    : [
        {
          icon: Shield,
          title: "Security Fundamentals",
          desc: "Understanding how systems are protected across application, network, and infrastructure layers.",
        },
        {
          icon: Activity,
          title: "Threat Awareness",
          desc: "Recognizing common attack techniques and how they appear in logs, alerts, and system behavior.",
        },
        {
          icon: Eye,
          title: "Monitoring & Visibility",
          desc: "Learning how events, logs, and telemetry provide visibility into suspicious activity.",
        },
        {
          icon: Bug,
          title: "Vulnerability Awareness",
          desc: "Understanding common weaknesses and how they are detected, prioritized, and mitigated.",
        },
        {
          icon: FileText,
          title: "Incident Understanding",
          desc: "Analyzing alerts and incidents to understand impact, scope, and defensive response steps.",
        },
        {
          icon: Brain,
          title: "Defender Mindset",
          desc: "Reasoning about attacker intent, detection gaps, and defensive improvements.",
        },
        {
          icon: Code,
          title: "Secure Application Design (MERN)",
          desc: "Using MERN stack knowledge to reason about secure authentication, logging, configuration, and access control.",
        },
      ];

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-24">
          <p
            className="text-sm tracking-widest uppercase mb-4"
            style={{ color: accent }}
          >
            Skills
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            {isRed ? "Offensive Capabilities" : "Defensive Capabilities"}
          </h2>

          <div
            className="mt-6 mx-auto h-[3px] w-20 rounded-full"
            style={{ backgroundColor: accent }}
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.title} className="text-center">

                {/* Icon */}
                <div
                  className="mx-auto mb-6 w-14 h-14 rounded-full
                    flex items-center justify-center border"
                  style={{
                    backgroundColor: `${accent}1F`,
                    borderColor: `${accent}59`,
                    boxShadow: `0 0 25px ${accent}40`,
                  }}
                >
                  <Icon size={22} style={{ color: accent }} />
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
