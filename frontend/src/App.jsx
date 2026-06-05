import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import CTFSection from "./components/sections/CTFSection";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-cyber-bg text-cyber-text noise-overlay">
      <Navbar />

      <Hero />

      <div className="section-divider max-w-6xl mx-auto"></div>

      <About />

      <div className="section-divider max-w-6xl mx-auto"></div>

      <Skills />

      <div className="section-divider max-w-6xl mx-auto"></div>

      <Projects />

      <div className="section-divider max-w-6xl mx-auto"></div>

      <CTFSection />

      <div className="section-divider max-w-6xl mx-auto"></div>

      <Education />

      <div className="section-divider max-w-6xl mx-auto"></div>

      <Contact />

      <Footer />
    </div>
  );
}