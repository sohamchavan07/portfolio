import React, { useEffect, useRef } from "react";

const GLOW_SIZE = 300; // Diameter in px

const GlowingSpotlight: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <div
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
          background: "radial-gradient(circle, rgba(235, 34, 131, 0.45) 0%, rgba(235, 34, 131, 0) 70%)",
          filter: "blur(32px)",
          pointerEvents: "none",
          willChange: "transform",
          transform: `translate3d(${window.innerWidth / 2 - GLOW_SIZE / 2}px, ${window.innerHeight / 2 - GLOW_SIZE / 2}px, 0)`,
          transition: "transform 150ms cubic-bezier(.2,1,.35,1)",
        }}
      />
    </div>
  );
};

export default GlowingSpotlight;