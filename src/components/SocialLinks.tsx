import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Social Links Config ──────────────────────────────────────────────────────
// Edit this array to change links or add/remove platforms.

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  color: string;
  hoverBg: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/sohamchavan07",
    label: "GitHub",
    color: "#6e7681",
    hoverBg: "rgba(110,118,129,0.15)",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/sohamchavan07",
    label: "LinkedIn",
    color: "#0A66C2",
    hoverBg: "rgba(10,102,194,0.15)",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/soham_chavan07",
    label: "X (Twitter)",
    color: "#38bdf8",
    hoverBg: "rgba(56,189,248,0.15)",
  },
  {
    icon: Mail,
    href: "mailto:soham07.dev@gmail.com",
    label: "Email",
    color: "#f87171",
    hoverBg: "rgba(248,113,113,0.15)",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

interface SocialLinksProps {
  className?: string;
  /** Controls icon button dimensions. Default: "md" */
  size?: "sm" | "md";
}

const SocialLinks = ({ className = "", size = "md" }: SocialLinksProps) => {
  const btnSize = size === "sm" ? "w-9 h-9" : "w-11 h-11";
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className={`touch-target ${btnSize} rounded-full border border-border/80 bg-secondary/40 hover:border-primary/40 flex items-center justify-center transition-all duration-300 hover-lift hover:scale-110 shadow-sm`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = link.hoverBg)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "")
            }
          >
            <Icon className={iconSize} style={{ color: link.color }} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
