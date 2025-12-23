import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

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
      {/* Core dot */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#ff4d4d",
          transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
        }}
      />

      {/* Inner reticle ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          width: hover ? "28px" : "22px",
          height: hover ? "28px" : "22px",
          borderRadius: "50%",
          border: "1px solid rgba(255,77,77,0.8)",
          transform: `translate(${pos.x - (hover ? 14 : 11)}px, ${
            pos.y - (hover ? 14 : 11)
          }px)`,
          transition: "all 120ms ease-out",
        }}
      />

      {/* Outer glow */}
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          transform: `translate(${pos.x - 35}px, ${pos.y - 35}px)`,
          background:
            "radial-gradient(circle, rgba(255,77,77,0.25) 0%, rgba(255,77,77,0.15) 30%, transparent 70%)",
          filter: "blur(10px)",
          animation: "reticlePulse 2.4s ease-in-out infinite",
        }}
      />

      {/* Crosshair lines */}
      {["top", "right", "bottom", "left"].map((dir) => (
        <div
          key={dir}
          className="fixed pointer-events-none z-[9996]"
          style={{
            backgroundColor: "rgba(255,77,77,0.7)",
            position: "fixed",
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
            0% { opacity: 0.45; transform: translate(${pos.x - 35}px, ${pos.y - 35}px) scale(0.9); }
            50% { opacity: 0.8; transform: translate(${pos.x - 35}px, ${pos.y - 35}px) scale(1); }
            100% { opacity: 0.45; transform: translate(${pos.x - 35}px, ${pos.y - 35}px) scale(0.9); }
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
