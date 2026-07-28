import React, { useEffect, useRef } from "react";

const GLOW_SIZE = 320; // Diameter in px

const GlowingSpotlight: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only attach on non-touch / desktop devices
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        const x = e.clientX - GLOW_SIZE / 2;
        const y = e.clientY - GLOW_SIZE / 2;
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // hidden on mobile (< md), visible only on md+ screens
    <div
      className="hidden md:block"
      style={{
        position: "fixed",
        pointerEvents: "none",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 50,
      }}
    >
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(59, 130, 246, 0.18) 45%, rgba(59, 130, 246, 0) 70%)",
          filter: "blur(28px)",
          pointerEvents: "none",
          willChange: "transform",
          transform: `translate3d(${window.innerWidth / 2 - GLOW_SIZE / 2}px, ${window.innerHeight / 2 - GLOW_SIZE / 2}px, 0)`,
          transition: "transform 120ms cubic-bezier(.2,1,.35,1)",
        }}
      />
    </div>
  );
};

export default GlowingSpotlight;