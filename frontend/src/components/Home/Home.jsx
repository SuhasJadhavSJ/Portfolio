import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { redTeamer } from "../../assets";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.97]);

  return (
    <section
      ref={ref}
      id="home"
      className="
        relative min-h-screen
        px-6 pt-28
        overflow-hidden
      "
    >
      {/* Ambient background */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_left,
          rgba(255,77,77,0.08),
          transparent_60%)]
          pointer-events-none
        "
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
        {/* IMAGE — first on mobile */}
        <div className="relative flex justify-center order-1 md:order-2">
          {/* Continuous glow (single source) */}
          <motion.div
            animate={{
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-72 h-72 md:w-96 md:h-96
              bg-[radial-gradient(circle,
              rgba(255,77,77,0.45),
              transparent_65%)]
              blur-3xl
            "
          />

          {/* Image container (optically centered) */}
          <div
            className="
              relative
              w-64 h-80 md:w-72 md:h-96
              rounded-[2.5rem]
              bg-gradient-to-b
              from-[rgba(255,77,77,0.22)]
              to-[rgba(255,77,77,0.05)]
              border border-[rgba(255,77,77,0.35)]
              overflow-hidden
              shadow-[0_0_35px_rgba(255,77,77,0.3)]
            "
          >
            <img
              src={redTeamer}
              alt="Red teamer silhouette"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 md:order-1">
          {/* Micro label */}
          <span
            className="
              inline-block mb-6
              px-4 py-1.5 rounded-full
              text-xs tracking-widest uppercase
              bg-[rgba(255,77,77,0.12)]
              text-[#ff4d4d]
              border border-[rgba(255,77,77,0.25)]
            "
          >
            Offensive Security • Red Team • MERN
          </span>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
            Junior{" "}
            <span className="text-[#ff4d4d]">Penetration Tester</span>
            <br />
            & Red Team Trainee
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-[var(--text-muted)]">
            I specialize in offensive security fundamentals — simulating
            real-world attacks to identify, exploit, and report security
            weaknesses across web, network, and Active Directory environments.
            I leverage my MERN stack background to analyze application internals
            and real-world attack surfaces.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="
                px-7 py-3 rounded-xl
                bg-[#ff4d4d]
                text-black font-medium
                hover:brightness-110
                hover:shadow-[0_0_30px_rgba(255,77,77,0.45)]
                transition
              "
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="
                px-7 py-3 rounded-xl
                border border-[var(--border-subtle)]
                hover:border-[#ff4d4d]
                hover:text-[#ff4d4d]
                transition
              "
            >
              View Engagements
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
