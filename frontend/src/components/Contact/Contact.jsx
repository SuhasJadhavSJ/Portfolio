import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left: Intent */}
        <div className="lg:col-span-6">
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
            Contact
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Initiate
            <br />
            <span className="text-[#ff4d4d]">communication.</span>
          </h2>

          <p className="text-lg text-[var(--text-muted)] max-w-md mb-10">
            Open to junior penetration testing opportunities, security
            discussions, learning collaborations, and mentorship. If you’re
            interested in offensive security or application security, feel free
            to reach out.
          </p>

          <a
            href="mailto:suhas@example.com"
            className="
              inline-flex items-center gap-3
              px-8 py-3 rounded-xl
              bg-[#ff4d4d] text-black font-medium
              hover:shadow-[0_0_30px_rgba(255,77,77,0.45)]
              transition
            "
          >
            <Mail size={18} />
            Send Secure Email
          </a>
        </div>

        {/* Divider */}
        <div className="hidden lg:block lg:col-span-1 h-full">
          <div className="w-px h-full bg-[var(--border-subtle)] mx-auto" />
        </div>

        {/* Right: Channels */}
        <div className="lg:col-span-5 space-y-10">

          <div className="flex items-start gap-4">
            <Mail className="text-[#ff4d4d] mt-1" size={20} />
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-1">Email</p>
              <a
                href="mailto:suhas@example.com"
                className="text-lg font-medium hover:text-[#ff4d4d] transition"
              >
                suhas@example.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Github className="text-[#ff4d4d] mt-1" size={20} />
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-1">GitHub</p>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium hover:text-[#ff4d4d] transition"
              >
                github.com/your-username
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Linkedin className="text-[#ff4d4d] mt-1" size={20} />
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-1">LinkedIn</p>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium hover:text-[#ff4d4d] transition"
              >
                linkedin.com/in/your-profile
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade (consistent with entire site) */}
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
