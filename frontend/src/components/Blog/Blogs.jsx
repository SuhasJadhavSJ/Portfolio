import React from "react";
import { BookOpen, FileText, ShieldCheck, Eye, Activity } from "lucide-react";
import { useMode } from "../../context/ModeContext";

const Blogs = () => {
  const { isRed } = useMode();
  const accent = isRed ? "#ff4d4d" : "#4da6ff";

  const upcomingTopics = isRed
    ? [
        {
          title: "TryHackMe Lab Walkthroughs",
          desc: "Step-by-step lab breakdowns focusing on enumeration, exploitation flow, and methodology rather than just flags.",
          icon: ShieldCheck,
        },
        {
          title: "Web Vulnerability Notes",
          desc: "Beginner-friendly explanations of OWASP Top 10 vulnerabilities with real-world attack examples.",
          icon: FileText,
        },
        {
          title: "Offensive Security Reflections",
          desc: "Learning notes on networking, Linux, and attack techniques from an offensive mindset.",
          icon: BookOpen,
        },
      ]
    : [
        {
          title: "Detection & Analysis Notes",
          desc: "Understanding how common attacks appear in logs, alerts, and system behavior.",
          icon: Eye,
        },
        {
          title: "Incident & Response Reflections",
          desc: "Learning notes on incident flow, alert triage, and defensive response reasoning.",
          icon: Activity,
        },
        {
          title: "Secure Design Notes",
          desc: "Notes on improving authentication, access control, and configuration in MERN applications.",
          icon: ShieldCheck,
        },
      ];

  return (
    <section
      id="blogs"
      className="relative py-32 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-24">

        {/* Header */}
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
            {isRed ? "Write-ups" : "Defensive Notes"}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {isRed ? (
              <>
                Learning notes &
                <br />
                <span style={{ color: accent }}>security write-ups</span>
              </>
            ) : (
              <>
                Learning notes &
                <br />
                <span style={{ color: accent }}>defensive analysis</span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
            {isRed
              ? "This section documents my learning journey in offensive security, application security, and penetration testing — focusing on methodology, reasoning, and lessons learned."
              : "This section documents my learning journey from a defensive perspective — focusing on detection, analysis, and secure system design."}
          </p>
        </div>

        {/* Empty State */}
        <div
          className="relative rounded-2xl p-10
            bg-[rgba(11,18,32,0.65)]
            backdrop-blur-xl
            border border-[var(--border-subtle)]
            max-w-3xl"
        >
          <h3 className="text-2xl font-semibold mb-4">
            No public posts yet
          </h3>

          <p className="text-[var(--text-muted)] leading-relaxed mb-6">
            {isRed
              ? "I’m currently focusing on structured offensive security learning and hands-on labs. Write-ups will be published once topics are fully understood and documented clearly."
              : "I’m currently building foundational defensive understanding through labs and analysis. Posts will be published once concepts are clearly understood and responsibly documented."}
          </p>

          <p className="text-sm" style={{ color: accent }}>
            First post coming soon.
          </p>
        </div>

        {/* Upcoming Topics */}
        <div>
          <h3 className="text-2xl font-semibold mb-10">
            Planned topics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.title}
                  className="relative p-6 rounded-2xl
                    bg-[rgba(11,18,32,0.55)]
                    backdrop-blur-xl
                    border transition"
                  style={{
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <div
                    className="mb-4 w-12 h-12 rounded-full
                      flex items-center justify-center border"
                    style={{
                      backgroundColor: `${accent}1F`,
                      borderColor: `${accent}40`,
                    }}
                  >
                    <Icon size={20} style={{ color: accent }} />
                  </div>

                  <h4 className="text-lg font-semibold mb-2">
                    {topic.title}
                  </h4>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              );
            })}
          </div>
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

export default Blogs;
