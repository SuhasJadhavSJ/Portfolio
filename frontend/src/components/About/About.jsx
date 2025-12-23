import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

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
            Operator Profile
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Red Team Focused.
            <br />
            <span className="text-[#ff4d4d]">Developer Aware.</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
            I am a junior penetration tester and red team trainee with a strong
            foundation in offensive security principles. My background as a
            MERN stack developer allows me to analyze applications not just
            from the outside, but from within — understanding how design,
            logic, and implementation decisions introduce real-world attack
            surfaces.
          </p>
        </div>

        {/* Capabilities */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">
            Core Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Offensive Security",
                desc: "Enumeration, exploitation fundamentals, OWASP Top 10, basic privilege escalation, and attack simulation in lab-based environments.",
              },
              {
                title: "Application Security (MERN)",
                desc: "Deep understanding of React, Node.js, Express, and databases to identify insecure logic, auth flaws, misconfigurations, and injection points.",
              },
              {
                title: "Reporting & Analysis",
                desc: "Clear documentation of findings, risk impact explanation, and remediation-oriented reporting aligned with real pentest deliverables.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  p-6 rounded-2xl
                  border border-[var(--border-subtle)]
                  bg-[rgba(255,255,255,0.02)]
                  hover:border-[rgba(255,77,77,0.35)]
                  transition
                "
              >
                <h4 className="text-lg font-semibold mb-3 text-[#ff4d4d]">
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

          <div className="space-y-10 border-l border-[rgba(255,77,77,0.25)] pl-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Technical Foundation
              </h4>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Built multiple full-stack MERN applications, gaining a strong
                grasp of backend logic, authentication flows, data handling,
                and system architecture — forming the base for effective
                application security testing.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                Offensive Transition
              </h4>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Shifted focus toward cybersecurity and offensive security,
                practicing enumeration, exploitation techniques, and
                vulnerability analysis through structured labs and
                real-world inspired scenarios.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                Current Direction
              </h4>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Actively preparing for junior penetration testing roles by
                strengthening attack methodology, reporting quality, and
                understanding how real organizations assess and manage risk.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <a
            href="#contact"
            className="
              inline-block px-7 py-3 rounded-xl
              bg-[#ff4d4d] text-black font-medium
              hover:brightness-110
              hover:shadow-[0_0_25px_rgba(255,77,77,0.45)]
              transition
            "
          >
            Initiate Contact
          </a>
        </div>

      </div>

      {/* Bottom fade — SAME AS HOME */}
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
