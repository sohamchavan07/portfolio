import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Coffee } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

interface IpWhoResponse {
  success: boolean;
  city?: string;
  region?: string;
  country?: string;
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Clients", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const LOCATION_CACHE_KEY = "portfolio-viewer-location";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [viewingLocation, setViewingLocation] = useState("Detecting location...");

  useEffect(() => {
    const cachedLocation = sessionStorage.getItem(LOCATION_CACHE_KEY);
    if (cachedLocation) {
      setViewingLocation(cachedLocation);
      return;
    }

    const controller = new AbortController();

    const detectLocation = async () => {
      try {
        const response = await fetch("https://ipwho.is/", {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Location lookup failed");

        const data: IpWhoResponse = await response.json();
        if (!data.success) throw new Error("Location lookup was unsuccessful");

        const parts = [data.city, data.region, data.country].filter(Boolean);
        const label = parts.length ? parts.join(", ") : "Unknown location";

        setViewingLocation(label);
        sessionStorage.setItem(LOCATION_CACHE_KEY, label);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setViewingLocation("Location unavailable");
      }
    };

    detectLocation();
    return () => controller.abort();
  }, []);

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-border/80 py-8 bg-card/50 backdrop-blur-md">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Quick Links */}
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          aria-label="Footer navigation"
        >
          {quickLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="hover:text-foreground transition-colors duration-200 font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center">
          <SocialLinks size="sm" />
        </div>

        {/* Location, Support, and Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2 text-xs text-muted-foreground">
          <p className="text-center md:text-right">
            Viewing from:{" "}
            <span className="font-medium text-foreground">
              {viewingLocation}
            </span>
          </p>

          <a
            href="https://buymeacoffee.com/soham_chavan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFDD00] px-4 py-2 text-sm font-bold text-black shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFE44D] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDD00] focus-visible:ring-offset-2"
          >
            <Coffee className="h-4 w-4" aria-hidden="true" />
            Support My Work
          </a>

          <p className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Soham Chavan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;