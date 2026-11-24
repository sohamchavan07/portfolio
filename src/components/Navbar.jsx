import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Get current day name dynamically
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = days[new Date().getDay()];
    setCurrentDay(today);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Scroll Progress Line */}
      <div
        className="h-[2px] bg-lime-400 origin-left transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-zinc-800 bg-zinc-950/90 py-3 backdrop-blur-md shadow-2xl"
            : "border-b border-zinc-800/40 bg-zinc-950/60 py-5 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="group flex items-center gap-2 font-mono text-lg font-bold tracking-tighter text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded bg-lime-400 text-black font-black text-xs transition-transform duration-300 group-hover:rotate-12">
              SC
            </span>
            <span className="tracking-tight uppercase font-extrabold text-white text-base md:text-lg">
              SOHAM<span className="text-lime-400">.DEV</span>
            </span>
          </a>

          {/* Dynamic Status Badge */}
          <div className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
            </span>
            <span>
              Available for Projects <span className="text-zinc-5xl text-zinc-500">|</span>{" "}
              <span className="text-lime-400 font-semibold">{currentDay}</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-zinc-400">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative py-1 text-zinc-300 hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-lime-400 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group inline-flex items-center gap-2 rounded bg-lime-400 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-zinc-800 bg-zinc-950/98 backdrop-blur-xl px-4 pt-4 pb-6"
          >
            <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
              </span>
              <span>Available for Projects | <span className="text-lime-400">{currentDay}</span></span>
            </div>

            <ul className="flex flex-col gap-4 font-mono text-sm tracking-wider uppercase mb-6">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-2 text-zinc-300 hover:text-lime-400 transition-colors border-b border-zinc-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex w-full items-center justify-center gap-2 rounded bg-lime-400 py-3 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-lime-300"
            >
              Start a Project →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
