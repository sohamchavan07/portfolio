import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Capabilities from "./components/Capabilities";
import Projects from "./components/Projects";
import DevConfig from "./components/DevConfig";
import Approach from "./components/Approach";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-lime-400 selection:text-black">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero />

        {/* Marquee Banner Ticker */}
        <Marquee />

        {/* Tech Capabilities {01} */}
        <Capabilities />

        {/* Featured Projects {02} */}
        <Projects />

        {/* Terminal DevConfig Block */}
        <DevConfig />

        {/* Engineering Approach {03} */}
        <Approach />

        {/* Secondary Marquee (Inverted) */}
        <Marquee
          items={[
            "Clean Architecture",
            "Scalable SaaS",
            "Ruby on Rails",
            "React Engineering",
            "PostgreSQL",
            "High Performance",
          ]}
          reverse={true}
          inverted={true}
        />
      </main>

      {/* Footer & Contact {04} */}
      <Footer />
    </div>
  );
}
