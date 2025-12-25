import React, { useState, useEffect } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";

const certifications = [

  {
    title: "Advent of Cyber 2025",
    issuer: "TryHackMe",
    description:
      "Completed 24 hands-on cybersecurity challenges covering real-world attack simulations and defensive concepts.",
    highlights: [
      "Real-world attack simulations",
      "Security fundamentals",
      "Daily hands-on consistency",
    ],
    file: "/certificates/THM-JBSPP7VUXN.pdf",
  },
  {
    title: "Full Stack Web Development with MERN & GenAI",
    issuer: "Udemy · Masynctech Coding School",
    description:
      "Extensive full-stack training covering modern MERN architecture, backend authentication, scalable APIs, and practical GenAI integration in web applications.",
    highlights: [
      "React, Node.js, Express & MongoDB",
      "Authentication & backend architecture",
      "GenAI integration in real-world apps",
      "87.5 hours of structured training",
    ],
    file: "/certificates/Udemy_Web_Development.pdf",
  },
];

const Certifications = () => {
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
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase bg-[rgba(255,77,77,0.12)] text-[#ff4d4d] border border-[rgba(255,77,77,0.25)]">
            Professional Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Industry-recognised
            <br />
            <span className="text-[#ff4d4d]">credentials & training</span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)]">
            Verified certifications and structured learning supporting hands-on
            experience in offensive security and full-stack development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="relative rounded-2xl p-8 bg-[rgba(11,18,32,0.65)] backdrop-blur-xl border border-[var(--border-subtle)] hover:border-[rgba(255,77,77,0.35)] transition"
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[0_0_40px_rgba(255,77,77,0.12)]" />

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
                    <CheckCircle size={16} className="text-[#ff4d4d] mt-0.5" />
                    <span className="text-[var(--text-muted)]">{point}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setActiveCert(cert.file)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#ff4d4d] hover:underline"
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
          <div className="relative z-10 w-[90%] max-w-5xl h-[90%] bg-[#0b1220] rounded-2xl border border-[var(--border-subtle)] shadow-xl">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 text-white text-xl hover:text-[#ff4d4d]"
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

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--bg-dark)] to-transparent pointer-events-none" />
    </section>
  );
};

export default Certifications;
