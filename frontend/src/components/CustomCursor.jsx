import { useEffect, useState } from "react";
import { useMode } from "../context/ModeContext";

const CustomCursor = () => {
  const { isRed } = useMode();

  const accent = isRed ? "255,77,77" : "77,166,255";
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onHover = () => setHover(true);
    const onLeave = () => setHover(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Core Dot */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: `rgb(${accent})`,
          transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
        }}
      />

      {/* Primary Ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          width: hover ? "30px" : "24px",
          height: hover ? "30px" : "24px",
          borderRadius: "50%",
          border: `1px solid rgba(${accent},0.85)`,
          transform: `translate(${pos.x - (hover ? 15 : 12)}px, ${
            pos.y - (hover ? 15 : 12)
          }px)`,
          transition: "all 140ms ease-out",
        }}
      />

      {/* Outer Glow */}
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          transform: `translate(${pos.x - 36}px, ${pos.y - 36}px)`,
          background: `radial-gradient(circle,
            rgba(${accent},0.25) 0%,
            rgba(${accent},0.15) 30%,
            transparent 70%)`,
          filter: "blur(10px)",
          animation: isRed
            ? "reticlePulse 2.4s ease-in-out infinite"
            : "scanPulse 3s linear infinite",
        }}
      />

      {/* Crosshair — RED ONLY */}
      {isRed &&
        ["top", "right", "bottom", "left"].map((dir) => (
          <div
            key={dir}
            className="fixed pointer-events-none z-[9996]"
            style={{
              backgroundColor: `rgba(${accent},0.75)`,
              ...(dir === "top" && {
                width: "1px",
                height: "10px",
                transform: `translate(${pos.x}px, ${pos.y - 16}px)`,
              }),
              ...(dir === "bottom" && {
                width: "1px",
                height: "10px",
                transform: `translate(${pos.x}px, ${pos.y + 6}px)`,
              }),
              ...(dir === "left" && {
                width: "10px",
                height: "1px",
                transform: `translate(${pos.x - 16}px, ${pos.y}px)`,
              }),
              ...(dir === "right" && {
                width: "10px",
                height: "1px",
                transform: `translate(${pos.x + 6}px, ${pos.y}px)`,
              }),
            }}
          />
        ))}

      {/* Animations */}
      <style>
        {`
          @keyframes reticlePulse {
            0% { opacity: 0.45; transform: translate(${pos.x - 36}px, ${pos.y - 36}px) scale(0.9); }
            50% { opacity: 0.85; transform: translate(${pos.x - 36}px, ${pos.y - 36}px) scale(1); }
            100% { opacity: 0.45; transform: translate(${pos.x - 36}px, ${pos.y - 36}px) scale(0.9); }
          }

          @keyframes scanPulse {
            0% { opacity: 0.3; transform: translate(${pos.x - 36}px, ${pos.y - 36}px) scale(0.85); }
            100% { opacity: 0.7; transform: translate(${pos.x - 36}px, ${pos.y - 36}px) scale(1.05); }
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
