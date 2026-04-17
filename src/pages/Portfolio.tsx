import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 md:pt-24">
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
