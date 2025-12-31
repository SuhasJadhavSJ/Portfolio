import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { useMode } from "../../context/ModeContext";

const Contact = () => {
  const { isRed } = useMode();
  const accent = isRed ? "#ff4d4d" : "#4da6ff";

  const mailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=suhasjadhavsj046@gmail.com";

  return (
    <section
      id="contact"
      className="relative py-32 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left: Intent */}
        <div className="lg:col-span-6">
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full
              text-xs tracking-widest uppercase border"
            style={{
              backgroundColor: `${accent}1F`,
              borderColor: `${accent}40`,
              color: accent,
            }}
          >
            Contact
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Initiate
            <br />
            <span style={{ color: accent }}>communication.</span>
          </h2>

          <p className="text-lg text-[var(--text-muted)] max-w-md mb-10">
            {isRed
              ? "Open to junior penetration testing opportunities, offensive security discussions, learning collaborations, and mentorship."
              : "Open to junior security analyst roles, defensive security discussions, learning collaborations, and mentorship."}
          </p>

          <a
            href={mailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3
              px-8 py-3 rounded-xl text-black font-medium transition"
            style={{
              backgroundColor: accent,
              boxShadow: `0 0 30px ${accent}73`,
            }}
          >
            <Mail size={18} />
            Send Email
          </a>
        </div>

        {/* Divider */}
        <div className="hidden lg:block lg:col-span-1 h-full">
          <div className="w-px h-full bg-[var(--border-subtle)] mx-auto" />
        </div>

        {/* Right: Channels */}
        <div className="lg:col-span-5 space-y-10">

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail size={20} style={{ color: accent }} />
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-1">Email</p>
              <a
                href={mailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium transition"
                style={{ color: accent }}
              >
                suhasjadhavsj046@gmail.com
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-start gap-4">
            <Github size={20} style={{ color: accent }} />
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-1">GitHub</p>
              <a
                href="https://github.com/SuhasJadhavSJ"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium transition"
                style={{ color: accent }}
              >
                github.com/SuhasJadhavSJ
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-4">
            <Linkedin size={20} style={{ color: accent }} />
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-1">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/suhas-jadhav-60214420b/"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium transition"
                style={{ color: accent }}
              >
                linkedin.com/in/suhas-jadhav
              </a>
            </div>
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

export default Contact;
