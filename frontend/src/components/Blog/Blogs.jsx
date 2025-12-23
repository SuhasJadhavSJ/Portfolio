import React from "react";
import { BookOpen, FileText, ShieldCheck } from "lucide-react";

const upcomingTopics = [
  {
    title: "TryHackMe Lab Walkthroughs",
    desc: "Step-by-step breakdowns of labs, focusing on methodology rather than just flags.",
    icon: ShieldCheck,
  },
  {
    title: "Web Vulnerability Notes",
    desc: "Beginner-friendly explanations of OWASP Top 10 issues with real examples.",
    icon: FileText,
  },
  {
    title: "Learning Reflections",
    desc: "Short notes on concepts I’m learning — networking, Linux, and application security.",
    icon: BookOpen,
  },
];

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="relative py-32 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-24">

        {/* Header */}
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
            Write-ups
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Learning notes &
            <br />
            <span className="text-[#ff4d4d]">security write-ups</span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
            This section documents my learning journey in offensive security,
            application security, and penetration testing — focusing on
            methodology, reasoning, and lessons learned.
          </p>
        </div>

        {/* Empty State */}
        <div
          className="
            relative rounded-2xl p-10
            bg-[rgba(11,18,32,0.65)]
            backdrop-blur-xl
            border border-[var(--border-subtle)]
            max-w-3xl
          "
        >
          <h3 className="text-2xl font-semibold mb-4">
            No public write-ups yet
          </h3>

          <p className="text-[var(--text-muted)] leading-relaxed mb-6">
            I’m currently focusing on structured learning and hands-on labs.
            Write-ups will be published once I complete and properly document
            key topics and challenges — prioritizing clarity and accuracy over
            speed.
          </p>

          <p className="text-sm text-[#ff4d4d]">
            First write-up coming soon.
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
                  className="
                    relative p-6 rounded-2xl
                    bg-[rgba(11,18,32,0.55)]
                    backdrop-blur-xl
                    border border-[var(--border-subtle)]
                    hover:border-[rgba(255,77,77,0.35)]
                    transition
                  "
                >
                  <div
                    className="
                      mb-4 w-12 h-12 rounded-full
                      flex items-center justify-center
                      bg-[rgba(255,77,77,0.12)]
                      border border-[rgba(255,77,77,0.35)]
                    "
                  >
                    <Icon size={20} className="text-[#ff4d4d]" />
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
