import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Layers, Rocket, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Schema & Specs First",
    subtitle: "Data Models & System Architecture",
    description:
      "Before writing any code, I define domain models, relational database schemas, index strategies, and REST/GraphQL API specifications. Clean data models eliminate technical debt early.",
    icon: GitBranch,
  },
  {
    step: "02",
    title: "Modular & Clean Code",
    subtitle: "Type-Safe & Testable Development",
    description:
      "Structuring isolated, single-responsibility Rails services and React components. Writing self-documenting code with comprehensive unit tests and clean separation of concerns.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Production & Scale",
    subtitle: "Deployment, Monitoring & Uptime",
    description:
      "Automating zero-downtime deployment pipelines to Render/Vercel with CI/CD workflows, database connection pooling, performance monitoring, and sub-100ms response targets.",
    icon: Rocket,
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-800"
    >
      {/* Section Tag Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 bg-lime-400 rounded-full" />
            <span className="text-xs font-mono tracking-[0.25em] text-lime-400 uppercase">
              The Engineering Approach {"{03}"}
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
            PHILOSOPHY & <span className="text-zinc-500">WORKFLOW</span>
          </h2>
        </div>
        <p className="max-w-md text-sm font-sans text-zinc-400 leading-relaxed">
          A disciplined software development lifecycle focused on durability, scalability, and clean code hygiene.
        </p>
      </div>

      {/* 3-Step Numbered Workflow Blocks */}
      <div className="grid gap-px bg-zinc-800 border border-zinc-800 rounded-lg overflow-hidden md:grid-cols-3">
        {STEPS.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between bg-zinc-950 p-8 sm:p-10 transition-colors duration-500 hover:bg-zinc-900"
            >
              <div>
                {/* Big Step Number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-5xl font-black text-zinc-700 group-hover:text-lime-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-lime-400 group-hover:bg-lime-400/10 group-hover:border-lime-400/50 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  {item.subtitle}
                </p>

                <h3 className="font-mono text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-sans text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Line Indicator */}
              <div className="mt-8 border-t border-zinc-900 pt-4 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-300">
                <span>Phase {item.step} Workflow</span>
                <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-lime-400 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
