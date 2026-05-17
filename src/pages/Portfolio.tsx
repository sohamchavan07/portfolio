import { useEffect, lazy, Suspense, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Lazy load non-critical components
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Services = lazy(() => import("@/components/Services"));
const Projects = lazy(() => import("@/components/Projects"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

interface LocationState {
  scrollTo?: string;
}

// Wrapper to load components only when they are near the viewport
const LazySection = ({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before it enters the viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-[100px]">
      {isVisible ? (
        <Suspense fallback={fallback || <div className="h-20" />}>
          {children}
        </Suspense>
      ) : (
        <div className="h-20" />
      )}
    </div>
  );
};

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as LocationState;
    if (state && state.scrollTo) {
      const targetId = state.scrollTo;
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Clear state to avoid scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 md:pt-24">
        <Hero />
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Skills />
        </LazySection>
        <LazySection>
          <Testimonials />
        </LazySection>
        <LazySection>
          <Services />
        </LazySection>
        <LazySection>
          <About />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
      </main>
      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
};

export default Portfolio;

