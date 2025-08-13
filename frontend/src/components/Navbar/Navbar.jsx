import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const lists = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "project", title: "Project" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      lists.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 100; // adjust for navbar height
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-400 tracking-wide">
        SuhasJadhav
      </div>

      {/* Menu */}
      <ul className="flex gap-6">
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
    </nav>
  );
};

export default Navbar;
