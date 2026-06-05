import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const links = [
    {
      href: "#home",
      label: "home",
    },
    {
      href: "#about",
      label: "about",
    },
    {
      href: "#skills",
      label: "skills",
    },
    {
      href: "#projects",
      label: "projects",
    },
    {
      href: "#ctf",
      label: "ctf & rooms",
    },
    {
      href: "#education",
      label: "education",
    },
    {
      href: "#contact",
      label: "contact",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl font-mono text-cyber-green group-hover:animate-pulse">
            {"{"}
          </span>

          <span className="font-mono text-sm font-bold text-cyber-green tracking-wider">
            suhas.jadhav
          </span>

          <span className="text-2xl font-mono text-cyber-green group-hover:animate-pulse">
            {"}"}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-cyber-muted hover:text-cyber-green transition-colors relative group"
            >
              <span className="text-cyber-cyan">$</span>{" "}
              {link.label}

              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyber-green group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          <a
            href="#contact"
            className="font-mono text-xs px-4 py-2 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-bg transition-all rounded-sm"
          >
            hire_me
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cyber-green font-mono"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "[X]" : "[≡]"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-cyber-border bg-cyber-bg/95 backdrop-blur-md px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-xs text-cyber-muted hover:text-cyber-green"
            >
              <span className="text-cyber-cyan">$</span>{" "}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}