import React from "react";
import { useMode } from "../../context/ModeContext";

const About = () => {
  const { isRed } = useMode();
  const accent = isRed ? "#ff4d4d" : "#4da6ff";

  return (
    <section
      id="about"
      className="relative py-28 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

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
            Operator Profile
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {isRed ? (
              <>
                Red Team Focused.
                <br />
                <span style={{ color: accent }}>Developer Aware.</span>
              </>
            ) : (
              <>
                Blue Team Focused.
                <br />
                <span style={{ color: accent }}>System Aware.</span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
            {isRed ? (
              <>
                I am a junior penetration tester and red team trainee with a
                foundation in offensive security principles. My background as a
                MERN stack developer allows me to analyze applications not just
                from the outside, but from within — understanding how design,
                logic, and implementation decisions introduce real-world attack
                surfaces.
              </>
            ) : (
              <>
                I am a junior security analyst and blue team trainee with a
                focus on defensive security fundamentals. My background as a
                MERN stack developer helps me understand how applications are
                built, where they fail, and how logging, configuration, and
                secure design play a role in detection and incident response.
              </>
            )}
          </p>
        </div>

        {/* Capabilities */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">
            Core Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(isRed
              ? [
                  {
                    title: "Offensive Security",
                    desc: "Enumeration, exploitation fundamentals, OWASP Top 10, basic privilege escalation, and attack simulation in lab-based environments.",
                  },
                  {
                    title: "Application Security (MERN)",
                    desc: "Understanding React, Node.js, Express, and databases to identify insecure logic, auth flaws, misconfigurations, and injection points.",
                  },
                  {
                    title: "Reporting & Analysis",
                    desc: "Clear documentation of findings, impact assessment, and remediation-focused reporting aligned with penetration testing deliverables.",
                  },
                ]
              : [
                  {
                    title: "Defensive Security",
                    desc: "Understanding detection fundamentals, common attack patterns, and how systems are monitored and defended in real environments.",
                  },
                  {
                    title: "Secure Application Design (MERN)",
                    desc: "Analyzing how authentication, authorization, logging, and configuration choices affect system security and visibility.",
                  },
                  {
                    title: "Incident Awareness",
                    desc: "Developing the ability to analyze alerts, understand attack intent, and reason about containment and mitigation steps.",
                  },
                ]
            ).map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border transition"
                style={{
                  borderColor: "var(--border-subtle)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <h4
                  className="text-lg font-semibold mb-3"
                  style={{ color: accent }}
                >
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Progression */}
        <div>
          <h3 className="text-2xl font-semibold mb-10">
            Progression Path
          </h3>

          <div
            className="space-y-10 border-l pl-8"
            style={{ borderColor: `${accent}40` }}
          >
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Technical Foundation
              </h4>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Built multiple full-stack MERN applications, developing a solid
                understanding of backend logic, authentication flows, data
                handling, and system architecture.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                Security Transition
              </h4>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {isRed
                  ? "Shifted focus toward offensive security, practicing enumeration, exploitation techniques, and vulnerability analysis through structured labs."
                  : "Shifted focus toward defensive security, learning how attacks are detected, logged, and mitigated through structured study and practice."}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                Current Direction
              </h4>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {isRed
                  ? "Preparing for junior penetration testing roles by strengthening attack methodology, reporting quality, and risk-based thinking."
                  : "Preparing for junior blue team or SOC roles by strengthening detection fundamentals, analysis skills, and defensive reasoning."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <a
            href="#contact"
            className="inline-block px-7 py-3 rounded-xl
              text-black font-medium transition"
            style={{
              backgroundColor: accent,
              boxShadow: `0 0 25px ${accent}73`,
            }}
          >
            Initiate Contact
          </a>
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

export default About;
