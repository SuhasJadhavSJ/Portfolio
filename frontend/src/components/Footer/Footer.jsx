import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useMode } from "../../context/ModeContext";

const Footer = () => {
  const { isRed } = useMode();
  const accent = isRed ? "#ff4d4d" : "#4da6ff";

  return (
    <footer
      className="relative bg-[var(--bg-dark)] border-t py-8"
      style={{ borderColor: `${accent}26` }}
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
          <span className="ml-2 opacity-80">
            · {isRed ? "Offensive Security" : "Defensive Security"}
          </span>
        </div>

        {/* Channels */}
        <div className="flex items-center gap-6 text-lg">
          <a
            href="https://github.com/SuhasJadhavSJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] transition"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/suhas-jadhav-60214420b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] transition"
            onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/Suhas_Jadhav_sj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] transition"
            onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
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
