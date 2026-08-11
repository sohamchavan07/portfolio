import React from "react";
import { motion } from "framer-motion";

const DEFAULT_ITEMS = [
  "Ruby on Rails",
  "React.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Render",
  "REST APIs",
  "System Design",
  "GraphQL",
  "Docker",
  "Redis",
];

export default function Marquee({
  items = DEFAULT_ITEMS,
  reverse = false,
  inverted = false,
}) {
  // Duplicate array multiple times to guarantee seamless looping across ultra-wide displays
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-zinc-800 py-4 transition-colors duration-300 ${
        inverted
          ? "bg-white text-black font-extrabold"
          : "bg-lime-400 text-black font-extrabold"
      }`}
    >
      <div className="flex w-max select-none">
        <motion.div
          animate={{
            x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-8 whitespace-nowrap pr-8"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-8 font-mono text-sm sm:text-base md:text-xl font-black uppercase tracking-wider"
            >
              <span>{item}</span>
              <span className="text-zinc-900 opacity-60 text-lg sm:text-2xl">
                ✳
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
