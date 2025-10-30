import React, { useEffect, useState } from "react";

const GLOW_SIZE = 300; // Diameter in px

const GlowingSpotlight: React.FC = () => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        pointerEvents: "none",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 50,
      }}
    >
      <div
        style={{
          position: "absolute",
          // ...existing code...
          // changed to use GPU-accelerated transform for smooth animation
          left: 0,
          top: 0,
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,0,128,0.38) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(32px)",
          pointerEvents: "none",
          transform: `translate3d(${pos.x - GLOW_SIZE / 2}px, ${pos.y - GLOW_SIZE / 2}px, 0)`,
          transition: "transform 120ms cubic-bezier(.2,1,.35,1)",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default GlowingSpotlight;