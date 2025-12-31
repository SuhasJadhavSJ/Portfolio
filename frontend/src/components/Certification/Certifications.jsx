import React, { useState, useEffect } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";
import { useMode } from "../../context/ModeContext";

const Certifications = () => {
  const { isRed } = useMode();
  const accent = isRed ? "#ff4d4d" : "#4da6ff";

  const certifications = [
    {
      title: "Advent of Cyber 2025",
      issuer: "TryHackMe",
      description: isRed
        ? "Completed hands-on cybersecurity challenges focused on real-world attack simulation, enumeration, and exploitation concepts."
        : "Completed structured cybersecurity challenges focused on understanding attacks from a defensive, detection, and response perspective.",
      highlights: isRed
        ? [
            "Real-world attack simulations",
            "Offensive security fundamentals",
            "Daily hands-on consistency",
          ]
        : [
            "Understanding attack patterns",
            "Defensive security awareness",
            "Consistent hands-on practice",
          ],
      file: "/certificates/THM-JBSPP7VUXN.pdf",
    },
    {
      title: "Full Stack Web Development with MERN & GenAI",
      issuer: "Udemy · Masynctech Coding School",
      description: isRed
        ? "Extensive full-stack training covering MERN architecture, backend authentication, APIs, and application internals useful for security testing."
        : "Extensive full-stack training covering secure application design, backend authentication, scalable APIs, and system architecture.",
      highlights: isRed
        ? [
            "React, Node.js, Express & MongoDB",
            "Authentication & backend internals",
            "Understanding real-world attack surfaces",
            "87.5 hours of structured training",
          ]
        : [
            "React, Node.js, Express & MongoDB",
            "Secure authentication & backend design",
            "Application hardening fundamentals",
            "87.5 hours of structured training",
          ],
      file: "/certificates/Udemy_Web_Development.pdf",
    },
  ];

  const [activeCert, setActiveCert] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeCert ? "hidden" : "auto";
  }, [activeCert]);

  return (
    <section
      id="certifications"
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
            Professional Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Industry-recognised
            <br />
            <span style={{ color: accent }}>
              credentials & training
            </span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
            {isRed
              ? "Verified certifications supporting hands-on offensive security learning and full-stack development."
              : "Verified certifications supporting defensive security understanding and secure application development."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="relative rounded-2xl p-8
                bg-[rgba(11,18,32,0.65)] backdrop-blur-xl
                border transition"
              style={{
                borderColor: "var(--border-subtle)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${accent}20`,
                }}
              />

              <div className="flex flex-col gap-2 mb-6">
                <h3 className="text-2xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Issued by{" "}
                  <span className="text-[var(--text-main)]">
                    {cert.issuer}
                  </span>
                </p>
              </div>

              <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                {cert.description}
              </p>

              <ul className="space-y-3 mb-8">
                {cert.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <CheckCircle size={16} style={{ color: accent }} />
                    <span className="text-[var(--text-muted)]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setActiveCert(cert.file)}
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                style={{ color: accent }}
              >
                View Certificate
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div
            className="absolute inset-0"
            onClick={() => setActiveCert(null)}
          />
          <div className="relative z-10 w-[90%] max-w-5xl h-[90%]
            bg-[#0b1220] rounded-2xl border border-[var(--border-subtle)] shadow-xl">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 text-white text-xl"
              style={{ color: accent }}
            >
              ✕
            </button>

            <iframe
              src={activeCert}
              title="Certificate Preview"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32
        bg-gradient-to-t from-[var(--bg-dark)] to-transparent pointer-events-none" />
    </section>
  );
};

export default Certifications;
