import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        relative
        bg-[var(--bg-dark)]
        border-t border-[rgba(255,77,77,0.15)]
        py-8
      "
    >
      <div
        className="
          max-w-7xl mx-auto px-6
          flex flex-col md:flex-row
          items-center justify-between
          gap-6
          text-center md:text-left
        "
      >
        {/* Identity */}
        <div className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--text-main)] font-medium">
            Suhas Jadhav
          </span>
        </div>

        {/* Channels */}
        <div className="flex items-center gap-6 text-lg">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[var(--text-muted)]
              hover:text-[#ff4d4d]
              transition
            "
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[var(--text-muted)]
              hover:text-[#ff4d4d]
              transition
            "
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[var(--text-muted)]
              hover:text-[#ff4d4d]
              transition
            "
            aria-label="Twitter / X"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Subtle fade for consistency */}
      <div
        className="
          absolute top-0 left-0 w-full h-8
          bg-gradient-to-b from-transparent to-[var(--bg-dark)]
          pointer-events-none
        "
      />
    </footer>
  );
};

export default Footer;
