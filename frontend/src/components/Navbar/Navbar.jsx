import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const lists = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "project", title: "Project" },
    { id: "contact", title: "Contact" },
  ];

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      lists.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 80; // adjust for navbar height
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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
      const offset = 70; // navbar height
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400 tracking-wide">
          SuhasJadhav
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {lists.map((list) => (
            <li
              key={list.id}
              onClick={() => scrollToSection(list.id)}
              className={`cursor-pointer px-4 py-2 rounded-md font-medium transition-all duration-300
                ${active === list.id
                  ? "bg-yellow-400 text-black"
                  : "text-yellow-400 hover:bg-gray-800 hover:text-yellow-300"}`}
            >
              {list.title}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl text-yellow-400 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 bg-black text-yellow-400 px-6 pb-4 md:hidden">
          {lists.map((list) => (
            <li
              key={list.id}
              onClick={() => scrollToSection(list.id)}
              className={`cursor-pointer px-4 py-2 rounded-md font-medium transition-all duration-300
                ${active === list.id
                  ? "bg-yellow-400 text-black"
                  : "hover:bg-gray-800 hover:text-yellow-300"}`}
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
