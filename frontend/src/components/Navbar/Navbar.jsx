import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const lists = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "project", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      lists.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 80;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = id;
          }
        }
      });
      setActive(current || "home");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 70;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-slate-900 tracking-tight">
          Suhas<span className="text-amber-500">Jadhav</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {lists.map((list) => (
            <li
              key={list.id}
              onClick={() => scrollToSection(list.id)}
              className={`cursor-pointer px-3 py-2 text-[15px] font-medium transition-all duration-300 ${
                active === list.id
                  ? "text-amber-500 border-b-2 border-amber-500"
                  : "text-slate-700 hover:text-amber-500"
              }`}
            >
              {list.title}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-2xl text-slate-800 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 bg-white text-slate-800 px-6 pb-4 md:hidden border-t border-gray-200">
          {lists.map((list) => (
            <li
              key={list.id}
              onClick={() => scrollToSection(list.id)}
              className={`cursor-pointer px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                active === list.id
                  ? "text-amber-500"
                  : "hover:text-amber-500"
              }`}
            >
              {list.title}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
