import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Sparkles, Code2, Database } from "lucide-react";

export default function Hero() {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-8 pb-20 md:pt-52 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-800"
    >
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-lime-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-[24rem] w-[24rem] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative z-10">
        {/* Top Tag & Stats Bar */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-zinc-800 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-mono font-medium text-lime-400">
              <Terminal className="h-3.5 w-3.5" />
              FULL-STACK SOFTWARE ENGINEER
            </span>
            <span className="text-xs font-mono text-zinc-500">MH, India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-8 text-left md:text-right font-mono"
          >
            <div className="border-l border-zinc-800 pl-4 md:border-l-0 md:pl-0">
              <p className="text-2xl md:text-4xl font-extrabold text-white tracking-tighter">
                10+
              </p>
              <p className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
                Systems Built
              </p>
            </div>
            <div className="border-l border-zinc-800 pl-4">
              <p className="text-2xl md:text-4xl font-extrabold text-lime-400 tracking-tighter">
                Rails & React
              </p>
              <p className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
                Core Stack
              </p>
            </div>
            <div className="hidden sm:block border-l border-zinc-800 pl-4">
              <p className="text-2xl md:text-4xl font-extrabold text-white tracking-tighter">
                99.9%
              </p>
              <p className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
                Uptime Mindset
              </p>
            </div>
          </motion.div>
        </div>

        {/* Editorial Brutalist Headline */}
        <div className="my-10 md:my-16">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none text-white"
          >
            CRAFTING <br className="hidden sm:block" />
            <span className="text-zinc-500 hover:text-zinc-300 transition-colors">HIGH-POWERED</span> <br />
            <span className="text-lime-400 underline decoration-lime-400/40 underline-offset-8">WEB SYSTEMS</span>
          </motion.h1>
        </div>

        {/* Hero Callout & Action CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid gap-8 md:grid-cols-12 items-center border-t border-zinc-800 pt-8"
        >
          <div className="md:col-span-8">
            <p className="text-lg sm:text-xl md:text-2xl font-sans text-zinc-300 leading-snug font-normal max-w-2xl">
              Engineering clean, scalable web applications and SaaS products.
              Architecting resilient backends with <span className="text-white font-semibold underline decoration-lime-400/50">Ruby on Rails</span> & interactive frontends with <span className="text-white font-semibold underline decoration-lime-400/50">React</span>.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-4">
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="group inline-flex items-center gap-3 rounded bg-white px-6 py-4 text-xs font-mono font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-lime-400 hover:shadow-[0_0_25px_rgba(163,230,53,0.35)]"
            >
              Explore Featured Works
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Sparkles className="h-3.5 w-3.5 text-lime-400" />
              <span>Full-Stack Architecture & System Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
