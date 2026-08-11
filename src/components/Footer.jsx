import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, Copy, Check, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const currentYear = new Date().getFullYear();
  const email = "sohamchavan07@gmail.com"; // Default contact email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-zinc-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800"
    >
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[28rem] w-[40rem] rounded-full bg-lime-400/5 blur-[140px]" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 bg-lime-400 rounded-full" />
          <span className="text-xs font-mono tracking-[0.25em] text-lime-400 uppercase">
            Initiate Contact {"{04}"}
          </span>
        </div>

        {/* Large Hero Typography */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-mono text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none text-white"
          >
            LET'S BUILD <br />
            <span className="text-lime-400 underline decoration-lime-400/40 underline-offset-8">
              SOMETHING LOUD.
            </span>
          </motion.h2>
        </div>

        {/* Action Buttons & Contact Info */}
        <div className="grid gap-10 md:grid-cols-12 border-y border-zinc-800 py-12 mb-16">
          {/* Direct Email Action Box */}
          <div className="md:col-span-7 flex flex-col justify-between gap-6">
            <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-xl">
              Have a web application, SaaS product, or backend infrastructure project in mind?
              Let's engineer a solution that cuts through the noise.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-3 rounded bg-lime-400 px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.4)]"
              >
                <Mail className="h-4 w-4" />
                <span>Send Direct Email</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900 px-5 py-4 text-xs font-mono text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-4 w-4 text-lime-400" />
                    <span className="text-lime-400 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links & Quick Connect */}
          <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800 pt-8 md:pt-0 md:pl-10">
            <div>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
                Connected Profiles & Network:
              </p>

              <div className="flex flex-col gap-3 font-mono text-sm">
                <a
                  href="https://github.com/sohamchavan07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded border border-zinc-800/80 bg-zinc-900/50 px-4 py-3 text-zinc-300 hover:border-lime-400/50 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Github className="h-4 w-4 text-lime-400" />
                    GitHub / @sohamchavan07
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-lime-400 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sohamchavan07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded border border-zinc-800/80 bg-zinc-900/50 px-4 py-3 text-zinc-300 hover:border-lime-400/50 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-lime-400" />
                    LinkedIn / sohamchavan07
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-lime-400 transition-colors" />
                </a>

                <a
                  href="https://twitter.com/sohamchavan07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded border border-zinc-800/80 bg-zinc-900/50 px-4 py-3 text-zinc-300 hover:border-lime-400/50 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Twitter className="h-4 w-4 text-lime-400" />
                    Twitter/X / @sohamchavan07
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-lime-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Status Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-lime-400" />
            <span>
              © {currentYear} SOHAM CHAVAN. ALL RIGHTS RESERVED.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>BUILT WITH REACT, TAILWIND &amp; FRAMER MOTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
