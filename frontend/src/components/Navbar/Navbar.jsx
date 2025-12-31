import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useMode } from "../../context/ModeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // 🌐 GLOBAL MODE (Blue = default)
  const { isRed, toggleToRed, toggleToBlue } = useMode();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-7xl
        backdrop-blur-xl
        bg-[rgba(11,18,32,0.65)]
        border border-[var(--border-subtle)]
        rounded-2xl
      "
    >
      <div className="px-6 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">
          Suhas
          <span className={isRed ? "text-[#ff4d4d]" : "text-[#4da6ff]"}>
            Jadhav
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--text-muted)]">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="hover:text-[var(--text-main)] transition"
              >
                {link.name}
              </a>
              <span
                className={`
                  absolute -bottom-1 left-0 h-[2px] w-0
                  ${isRed ? "bg-[#ff4d4d]" : "bg-[#4da6ff]"}
                  group-hover:w-full transition-all duration-300
                `}
              />
            </li>
          ))}
        </ul>

        {/* Mode Toggle (Desktop) — AFTER links */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full
          bg-[rgba(0,0,0,0.35)]
          border border-[var(--border-subtle)]
        ">
          <button
            onClick={toggleToBlue}
            className={`
              px-3 py-1.5 text-xs rounded-full transition
              ${!isRed
                ? "bg-[#4da6ff] text-black shadow-[0_0_15px_rgba(77,166,255,0.5)]"
                : "text-[var(--text-muted)]"}
            `}
          >
            🔵 Defensive
          </button>

          <button
            onClick={toggleToRed}
            className={`
              px-3 py-1.5 text-xs rounded-full transition
              ${isRed
                ? "bg-[#ff4d4d] text-black shadow-[0_0_15px_rgba(255,77,77,0.5)]"
                : "text-[var(--text-muted)]"}
            `}
          >
            🔴 Offensive
          </button>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className={`
            hidden md:inline-block
            px-5 py-2 rounded-xl text-black font-medium transition
            ${isRed
              ? "bg-[#ff4d4d] hover:shadow-[0_0_25px_rgba(255,77,77,0.35)]"
              : "bg-[#4da6ff] hover:shadow-[0_0_25px_rgba(77,166,255,0.35)]"}
          `}
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--text-main)]"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="
            md:hidden
            border-t border-[var(--border-subtle)]
            bg-[rgba(11,18,32,0.85)]
            backdrop-blur-xl
            rounded-b-2xl
          "
        >
          <ul className="flex flex-col px-6 py-4 gap-4 text-[var(--text-muted)]">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[var(--text-main)] transition"
              >
                {link.name}
              </a>
            ))}

            {/* Mode Toggle (Mobile) */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={toggleToBlue}
                className={`flex-1 py-2 rounded-lg text-sm ${
                  !isRed
                    ? "bg-[#4da6ff] text-black"
                    : "border border-[var(--border-subtle)]"
                }`}
              >
                🔵 Defensive
              </button>
              <button
                onClick={toggleToRed}
                className={`flex-1 py-2 rounded-lg text-sm ${
                  isRed
                    ? "bg-[#ff4d4d] text-black"
                    : "border border-[var(--border-subtle)]"
                }`}
              >
                🔴 Offensive
              </button>
            </div>

            <a
              href="/resume.pdf"
              download
              className={`
                mt-4 text-center px-5 py-2 rounded-xl text-black font-medium
                ${isRed ? "bg-[#ff4d4d]" : "bg-[#4da6ff]"}
              `}
            >
              Resume
            </a>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
