import React from "react";
import { motion } from "framer-motion";
import { Database, Layout, Cloud, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

const CAPABILITIES = [
  {
    number: "01",
    title: "Backend Architecture",
    icon: Database,
    description: "Designing robust, fault-tolerant servers, relational database schemas, and clean RESTful/GraphQL APIs.",
    skills: ["Ruby on Rails", "PostgreSQL", "REST & GraphQL APIs", "Authentication", "DB Schema Design"],
    highlight: "Rails Core Expert",
  },
  {
    number: "02",
    title: "Frontend Engineering",
    icon: Layout,
    description: "Crafting fluid, high-performance user interfaces with modern React paradigms and micro-interactions.",
    skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Framer Motion", "Micro-interactions"],
    highlight: "Pixel-Perfect UI",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Automating zero-downtime deployments, environment configs, and continuous release pipelines.",
    skills: ["Render", "PostgreSQL Cloud", "CI/CD Pipelines", "Application Monitoring", "Vercel / Netlify"],
    highlight: "High Availability",
  },
  {
    number: "04",
    title: "Product & System Design",
    icon: Cpu,
    description: "Structuring scalable software systems, optimizing query performance, and prioritizing security best practices.",
    skills: ["Schema Design", "Security Audit", "Scalability", "Performance Optimization", "Clean Code Architecture"],
    highlight: "Enterprise Scale",
  },
];

export default function Capabilities() {
  return (
    <section
      id="tech-stack"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-800"
    >
      {/* Section Tag Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 bg-lime-400 rounded-full" />
            <span className="text-xs font-mono tracking-[0.25em] text-lime-400 uppercase">
              Technical Stack {"{01}"}
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
            ENGINEERING <span className="text-zinc-500">CAPABILITIES</span>
          </h2>
        </div>
        <p className="max-w-md text-sm font-sans text-zinc-400 leading-relaxed">
          Specialized in end-to-end web engineering—from database architecture and API design down to high-performance frontend interfaces.
        </p>
      </div>

      {/* 4-Card Grid Layout */}
      <div className="grid gap-px bg-zinc-800 border border-zinc-800 rounded-lg overflow-hidden sm:grid-cols-2">
        {CAPABILITIES.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between bg-zinc-950 p-8 sm:p-10 transition-all duration-300 hover:bg-zinc-900/90"
            >
              {/* Top Card Header */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-zinc-600 group-hover:text-lime-400 transition-colors">
                    {cap.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-lime-400 group-hover:border-lime-400/50 group-hover:bg-lime-400/10 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 mb-4 rounded border border-zinc-800 bg-zinc-900 text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                  {cap.highlight}
                </div>

                <h3 className="font-mono text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-sm font-sans text-zinc-400 leading-relaxed mb-8">
                  {cap.description}
                </p>
              </div>

              {/* Skills Tag Pills */}
              <div className="border-t border-zinc-900 pt-6">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
                  Core Technologies & Tools:
                </p>
                <div className="flex flex-wrap gap-2">
                  {cap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-mono text-zinc-300 transition-colors group-hover:border-zinc-700 hover:text-white"
                    >
                      <CheckCircle2 className="h-3 w-3 text-lime-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
