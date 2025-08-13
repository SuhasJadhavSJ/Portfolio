import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Name / Logo */}
        <div className="text-lg font-semibold tracking-wide">
          © {new Date().getFullYear()} Suhas Jadhav. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
