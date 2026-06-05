import { useEffect, useMemo, useState } from "react";
import { profile } from "../../data/data";

export default function Hero() {
  const typedText = useMemo(
    () => [
      "> initializing portfolio.exe...",
      "> loading cybersecurity modules... [OK]",
      "> welcome, recruiter.",
      `> I am ${profile.name}.`,
    ],
    []
  );

  const [displayLines, setDisplayLines] = useState([]);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let current = "";
    const lines = [];

    const interval = setInterval(() => {
      if (lineIdx >= typedText.length) {
        clearInterval(interval);
        return;
      }

      const target = typedText[lineIdx];

      if (charIdx <= target.length) {
        current = target.slice(0, charIdx);
        setDisplayLines([...lines, current]);
        charIdx++;
      } else {
        lines.push(target);
        setDisplayLines([...lines]);
        lineIdx++;
        charIdx = 0;
        current = "";
      }
    }, 35);

    return () => clearInterval(interval);
  }, [typedText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 cyber-grid noise-overlay"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-green/10 rounded-full blur-3xl animate-pulse"></div>

      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="font-mono text-xs text-cyber-muted flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-cyber-green rounded-full animate-pulse"></span>

            <span>
              AVAILABLE FOR FULL-TIME / INTERNSHIP
            </span>
          </div>

          <h1 className="font-sans text-5xl md:text-7xl font-bold leading-none">
            <span className="text-cyber-text">
              I hunt
            </span>

            <br />

            <span
              className="gradient-text glitch-text"
              data-text="threats."
            >
              threats.
            </span>
          </h1>

          <h2 className="font-mono text-xl md:text-2xl text-cyber-cyan">
            {profile.name}
          </h2>

          <p className="text-lg text-cyber-muted max-w-md leading-relaxed">
            <span className="text-cyber-green">
              //
            </span>{" "}
            {profile.title} —{" "}
            <span className="text-cyber-magenta">
              Red
            </span>{" "}
            &{" "}
            <span className="text-cyber-cyan">
              Blue
            </span>{" "}
            Team · SOC Operations
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {profile.roles.map((role) => (
              <span
                key={role}
                className="font-mono text-xs px-3 py-1.5 border border-cyber-border text-cyber-green bg-cyber-green/5 rounded-sm"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group font-mono text-sm px-6 py-3 bg-cyber-green text-cyber-bg font-semibold rounded-sm hover:bg-cyber-cyan transition-all flex items-center gap-2 glow-pulse"
            >
              view_projects

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="font-mono text-sm px-6 py-3 border border-cyber-border text-cyber-text hover:border-cyber-green hover:text-cyber-green transition-all rounded-sm"
            >
              get_in_touch
            </a>
          </div>
        </div>

        {/* Terminal */}
        <div className="animate-float">
          <div className="bg-cyber-surface border border-cyber-border rounded-lg shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-cyber-bg border-b border-cyber-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <span className="font-mono text-xs text-cyber-muted ml-2">
                root@suhas:~# ./whoami
              </span>
            </div>

            <div className="p-6 font-mono text-sm min-h-[320px]">
              {displayLines.map((line, index) => (
                <div
                  key={index}
                  className={
                    index === displayLines.length - 1 &&
                    line.startsWith(">")
                      ? "text-cyber-green cursor-blink"
                      : "text-cyber-green"
                  }
                >
                  {line}
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-cyber-border space-y-2 text-xs">
                <div>
                  <span className="text-cyber-cyan">
                    $
                  </span>{" "}
                  <span className="text-cyber-text">
                    whoami
                  </span>
                </div>

                <div className="text-cyber-muted pl-4">
                  {profile.name} — Cybersecurity Enthusiast
                </div>

                <div>
                  <span className="text-cyber-cyan">
                    $
                  </span>{" "}
                  <span className="text-cyber-text">
                    cat skills.txt
                  </span>
                </div>

                <div className="text-cyber-muted pl-4 space-y-1">
                  <div>
                    ├─ SIEM Monitoring (Wazuh, Splunk)
                  </div>

                  <div>
                    ├─ Penetration Testing
                  </div>

                  <div>
                    ├─ Incident Response
                  </div>

                  <div>
                    └─ Malware Analysis
                  </div>
                </div>

                <div>
                  <span className="text-cyber-cyan">
                    $
                  </span>{" "}
                  <span className="cursor-blink text-cyber-green"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-cyber-muted flex flex-col items-center gap-2 animate-bounce">
        <span>scroll</span>

        <span className="text-cyber-green">
          ↓
        </span>
      </div>
    </section>
  );
}