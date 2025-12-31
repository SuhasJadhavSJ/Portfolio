import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { redTeamer, blueTeamer } from "../../assets";
import { useMode } from "../../context/ModeContext";

const Hero = () => {
  const ref = useRef(null);
  const { isRed } = useMode();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.97]);

  const accent = isRed ? "#ff4d4d" : "#4da6ff";
  const heroImage = isRed ? redTeamer : blueTeamer;

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen px-6 pt-28 overflow-hidden"
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top left, ${accent}22, transparent 60%)`,
        }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="
          relative z-10
          max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-14 items-center
        "
      >
        {/* IMAGE */}
        <div className="relative flex justify-center order-1 md:order-2">
          {/* Continuous glow */}
          <motion.div
            animate={{ opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-72 h-72 md:w-96 md:h-96 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${accent}55, transparent 65%)`,
            }}
          />

          {/* Image container */}
          <div
            className="relative w-64 h-80 md:w-72 md:h-96 rounded-[2.5rem]
              overflow-hidden border shadow-[0_0_35px]"
            style={{
              borderColor: `${accent}59`,
              boxShadow: `0 0 35px ${accent}55`,
              background: `linear-gradient(to bottom, ${accent}33, ${accent}0D)`,
            }}
          >
            <motion.img
              key={isRed ? "red" : "blue"}
              src={heroImage}
              alt={isRed ? "Red team operator" : "Blue team analyst"}
              className="w-full h-full object-cover opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 md:order-1">
          {/* Micro label */}
          <span
            className="inline-block mb-6 px-4 py-1.5 rounded-full
              text-xs tracking-widest uppercase border"
            style={{
              backgroundColor: `${accent}1F`,
              borderColor: `${accent}40`,
              color: accent,
            }}
          >
            {isRed
              ? "Offensive Security • Red Team • MERN"
              : "Defensive Security • Blue Team • MERN"}
          </span>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
            {isRed ? (
              <>
                Junior <span style={{ color: accent }}>Penetration Tester</span>
                <br />& Red Team Trainee
              </>
            ) : (
              <>
                Junior <span style={{ color: accent }}>Security Analyst</span>
                <br />& Blue Team Trainee
              </>
            )}
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-[var(--text-muted)]">
            {isRed ? (
              <>
                I focus on offensive security fundamentals — simulating
                real-world attacks to identify, exploit, and report security
                weaknesses across web and application environments. My MERN
                stack background helps me reason about application internals and
                attack surfaces.
              </>
            ) : (
              <>
                I focus on defensive security fundamentals — understanding how
                attacks are detected, analyzed, and mitigated across modern web
                systems. My MERN stack background helps me reason about logs,
                misconfigurations, and secure application design.
              </>
            )}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 rounded-xl text-black font-medium transition"
              style={{
                backgroundColor: accent,
                boxShadow: `0 0 30px ${accent}73`,
              }}
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-7 py-3 rounded-xl border transition"
              style={{
                borderColor: "var(--border-subtle)",
              }}
            >
              {isRed ? "View Engagements" : "View Defenses"}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
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

export default Hero;
