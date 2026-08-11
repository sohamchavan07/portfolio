import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Code2 } from "lucide-react";

const PROJECTS = [
  {
    id: "saas-workspace",
    title: "SaaS Workspace & Analytics Hub",
    description:
      "Production-grade multi-tenant SaaS application built with Ruby on Rails and React. Features real-time metric dashboards, background job queues, and automated billing pipelines.",
    tags: ["SaaS", "Full-Stack", "Ruby on Rails", "React"],
    year: "2026",
    github: "https://github.com/sohamchavan07",
    demo: "https://soham-s-interactive-canvas.vercel.app/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ai-dermatology",
    title: "Clinical AI Dermatology & Diagnostics",
    description:
      "Medical-grade AI image analysis portal for skin condition evaluations with confidence scores, structured breakdown, and follow-up guidance.",
    tags: ["AI", "React", "Node.js", "Tailwind CSS"],
    year: "2025",
    github: "https://github.com/sohamchavan07",
    demo: "https://soham-s-interactive-canvas.vercel.app/",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "logistics-kanban",
    title: "Enterprise Logistics & Order Dispatch",
    description:
      "High-concurrency order management platform handling atomic DB transactions, swimlane status tracking, and automated dispatch workflows.",
    tags: ["Full-Stack", "PostgreSQL", "Ruby on Rails"],
    year: "2025",
    github: "https://github.com/sohamchavan07",
    demo: "https://soham-s-interactive-canvas.vercel.app/",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "editorial-portfolio",
    title: "Interactive Canvas & Tech Portfolio",
    description:
      "High-performance editorial-brutalist developer portfolio built with React, Vite, Framer Motion, and Tailwind CSS featuring live terminal overlays.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    github: "https://github.com/sohamchavan07",
    demo: "https://soham-s-interactive-canvas.vercel.app/",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-800"
    >
      {/* Section Tag Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 bg-lime-400 rounded-full" />
            <span className="text-xs font-mono tracking-[0.25em] text-lime-400 uppercase">
              Featured Works {"{02}"}
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
            SELECTED <span className="text-zinc-500">PROJECTS</span>
          </h2>
        </div>
        <p className="max-w-md text-sm font-sans text-zinc-400 leading-relaxed">
          A showcase of full-stack engineering work, scalable backends, and responsive frontend implementations.
        </p>
      </div>

      {/* Grid of Interactive Project Cards */}
      <div className="grid gap-10 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative flex flex-col rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          >
            {/* Image Box with Zoom Effect & Overlay */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border-b border-zinc-800">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Year Pill Tag */}
              <div className="absolute top-4 right-4 z-10 rounded-full border border-zinc-800/80 bg-zinc-950/80 px-3 py-1 text-[11px] font-mono font-semibold text-zinc-300 backdrop-blur-md">
                {project.year}
              </div>

              {/* Hover Direct Link Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-zinc-950/80 backdrop-blur-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:border-lime-400 hover:text-lime-400 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  View Code →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-lime-400 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:bg-lime-300 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo →
                </a>
              </div>
            </div>

            {/* Card Content & Metadata */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                {/* Tag Pills Header */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-0.5 text-[10px] font-mono text-zinc-400 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-mono text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-5 w-5 text-zinc-600 group-hover:text-lime-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </h3>

                <p className="text-sm font-sans text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Mobile Fallback Direct Links */}
              <div className="flex md:hidden items-center gap-4 mt-6 pt-4 border-t border-zinc-900">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-300 hover:text-lime-400 underline"
                >
                  View Code →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-lime-400 font-bold hover:text-lime-300 underline"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
