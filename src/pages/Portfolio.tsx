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
const LazySection = ({
  children,
  fallback,
  forceLoad = false,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  forceLoad?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(forceLoad);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceLoad) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [forceLoad]);

  return (
    <div ref={sectionRef} className="min-h-[100px]">
      {isVisible || forceLoad ? (
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
  const [forceLoadSections, setForceLoadSections] = useState(false);

  useEffect(() => {
    const state = location.state as LocationState;
    if (state?.scrollTo) {
      setForceLoadSections(true);
      const targetId = state.scrollTo;
      let attempts = 0;

      const scrollToElement = () => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 30) {
          attempts += 1;
          setTimeout(scrollToElement, 100);
        }
      };

      scrollToElement();
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 md:pt-24">
        <Hero />
        <LazySection forceLoad={forceLoadSections}>
          <Projects />
        </LazySection>
        <LazySection forceLoad={forceLoadSections}>
          <Skills />
        </LazySection>
        <LazySection forceLoad={forceLoadSections}>
          <Testimonials />
        </LazySection>
        <LazySection forceLoad={forceLoadSections}>
          <Services />
        </LazySection>
        <LazySection forceLoad={forceLoadSections}>
          <About />
        </LazySection>
        <LazySection forceLoad={forceLoadSections}>
          <Contact />
        </LazySection>
      </main>
      <LazySection forceLoad={forceLoadSections}>
        <Footer />
      </LazySection>
    </div>
  );
};

export default Portfolio;

