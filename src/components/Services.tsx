import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Layers,
  ShoppingCart,
  Database,
  ShieldCheck,
  Zap,
  Terminal,
  ArrowUpRight,
  CreditCard,
  BarChart3,
  CheckCircle2,
  Package,
  Code2,
  Cpu,
  Workflow,
  type LucideIcon,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceModule {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  deliverables: string[];
}

type DisciplineId = "fullstack" | "ecommerce";

interface ServiceDiscipline {
  id: DisciplineId;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  accentBg: string;
  borderColor: string;
  blueprint: {
    stack: string[];
    timeline: string;
    metrics: string;
  };
  modules: ServiceModule[];
  artifacts: string[];
}

// ─── Studio Disciplines Data ──────────────────────────────────────────────────

const DISCIPLINES: ServiceDiscipline[] = [
  {
    id: "fullstack",
    badge: "Core Architecture",
    title: "Full-Stack Web Architecture",
    subtitle: "End-to-end web applications engineered for speed, durability, and scale.",
    description:
      "I design and engineer complete web systems from the database layer up to fluid, responsive user interfaces. Every application is built with strict TypeScript, modular services, and zero throwaway code.",
    icon: Layers,
    accentColor: "#7c5cff",
    accentBg: "rgba(124, 92, 255, 0.1)",
    borderColor: "rgba(124, 92, 255, 0.25)",
    blueprint: {
      stack: ["React 19", "TypeScript", "Ruby on Rails", "PostgreSQL", "Tailwind CSS", "Docker"],
      timeline: "2 to 6 weeks",
      metrics: "< 200ms TTFB · Lighthouse 100",
    },
    artifacts: [
      "Production-ready typed Git repository",
      "Interactive REST / GraphQL documentation",
      "Normalized relational schema & migration suite",
      "Automated CI/CD zero-downtime deployment",
    ],
    modules: [
      {
        title: "Frontend Engineering",
        tagline: "Fluid, accessible, type-safe interfaces",
        description:
          "Pixel-perfect React and TypeScript components styled with Tailwind CSS, fine-tuned motion, and strict WCAG accessibility compliance.",
        icon: Cpu,
        deliverables: ["Component design system", "Responsive mobile-first layout", "Micro-interactions & transitions"],
      },
      {
        title: "Backend & API Architecture",
        tagline: "Robust APIs with bulletproof logic",
        description:
          "Modular Ruby on Rails application backends featuring RESTful and GraphQL endpoints, idempotent webhooks, and secure JWT/session authentication.",
        icon: Terminal,
        deliverables: ["Versioned API endpoints", "Role-based access control (RBAC)", "Background job queues"],
      },
      {
        title: "Database Engineering",
        tagline: "Scalable schema & index optimization",
        description:
          "Normalized relational database schemas in PostgreSQL, indexed for high-concurrency queries and zero-downtime schema migrations.",
        icon: Database,
        deliverables: ["Schema ERDs & constraints", "Query performance tuning", "Automated daily backups"],
      },
      {
        title: "Performance & SEO Tuning",
        tagline: "Sub-second speed and Core Web Vitals",
        description:
          "Lighthouse 100 tuning via dynamic code splitting, asset compression, structured JSON-LD data, and edge caching strategies.",
        icon: Zap,
        deliverables: ["100/100 Core Web Vitals audit", "Metadata & OpenGraph tags", "Edge CDN distribution"],
      },
    ],
  },
  {
    id: "ecommerce",
    badge: "Transactional Systems",
    title: "E-Commerce & Storefront Platforms",
    subtitle: "High-conversion commerce engines with seamless payment infrastructure.",
    description:
      "Custom shopping experiences crafted to eliminate friction from discovery to checkout. Integrated with hardened payment gateways, real-time inventory management, and telemetry dashboards.",
    icon: ShoppingCart,
    accentColor: "#00d1b2",
    accentBg: "rgba(0, 209, 178, 0.1)",
    borderColor: "rgba(0, 209, 178, 0.25)",
    blueprint: {
      stack: ["React", "Rails API", "Stripe / Razorpay", "PostgreSQL", "Tailwind", "Webhooks"],
      timeline: "3 to 6 weeks",
      metrics: "99.99% webhook uptime · 0 leak checkouts",
    },
    artifacts: [
      "Secured payment pipeline with webhook fallbacks",
      "Role-protected admin inventory & order panel",
      "Transactional email & invoice generator",
      "Sales telemetry & conversion tracker",
    ],
    modules: [
      {
        title: "Custom Storefront Experience",
        tagline: "Frictionless browsing and instant cart",
        description:
          "Tailored product catalogs with instant facet filtering, intuitive search, seamless slide-out carts, and one-click checkout flows.",
        icon: ShoppingCart,
        deliverables: ["Frictionless checkout UX", "Instant search & filtering", "Mobile-optimized cart flow"],
      },
      {
        title: "Payment & Webhook Gateways",
        tagline: "PCI-compliant transactional pipelines",
        description:
          "Flawless integrations with Stripe, Razorpay, and regional gateways with idempotent webhook listeners and automatic invoice generation.",
        icon: CreditCard,
        deliverables: ["Stripe / Razorpay integration", "Idempotent webhook handlers", "Automated customer receipts"],
      },
      {
        title: "Inventory & Order Control",
        tagline: "Operational clarity in real time",
        description:
          "Back-office management suite for real-time stock deductions, order status lifecycles, and low-inventory threshold notifications.",
        icon: Package,
        deliverables: ["Real-time inventory sync", "Order lifecycle manager", "Low-stock automated alerts"],
      },
      {
        title: "Sales & Conversion Analytics",
        tagline: "Actionable revenue intelligence",
        description:
          "Custom administrative telemetry dashboards tracking gross merchandise value, average order value, conversion funnels, and customer retention.",
        icon: BarChart3,
        deliverables: ["Revenue & GMV dashboard", "Cart abandonment tracking", "Customer lifetime value insights"],
      },
    ],
  },
];

// ─── Craft Standards ───────────────────────────────────────────────────────────

const CRAFT_STANDARDS = [
  {
    title: "Handcrafted, Strictly Typed",
    desc: "Every component and model is typed with strict TypeScript and clean Rails conventions. Zero any types, zero bloated boilerplate.",
    icon: Code2,
  },
  {
    title: "Direct Access, Zero Agency Overhead",
    desc: "You collaborate directly with the architect building your software. Rapid iterations, daily commits, and no communication lag.",
    icon: Workflow,
  },
  {
    title: "Complete Codebase Ownership",
    desc: "You receive 100% intellectual property rights, full Git commit history, deployment credentials, and comprehensive hand-off documentation.",
    icon: ShieldCheck,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Services = () => {
  const [activeTab, setActiveTab] = useState<DisciplineId>("fullstack");

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentDiscipline = DISCIPLINES.find((d) => d.id === activeTab) ?? DISCIPLINES[0];
  const DisciplineIcon = currentDiscipline.icon;

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Craft &amp; Specializations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Two systems I build end to end: full-stack web apps and e-commerce platforms —
            schema, API, UI, and deployment, all handled directly.
          </p>
        </div>

        {/* Discipline switcher */}
        <div className="flex gap-2 mb-10 p-1.5 rounded-xl bg-secondary/40 border border-border/80 max-w-xl">
          {DISCIPLINES.map((discipline) => {
            const isActive = activeTab === discipline.id;
            return (
              <button
                key={discipline.id}
                onClick={() => setActiveTab(discipline.id)}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors touch-target ${
                  isActive
                    ? "bg-card text-foreground shadow-sm border border-border/90"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {discipline.title}
              </button>
            );
          })}
        </div>

        {/* Main grid: one bold anchor card + a quiet module list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Anchor card — the only bold element in this section */}
          <div className="lg:col-span-5">
            <Card className="p-6 md:p-8 bg-card border border-border shadow-xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30"
                style={{ background: currentDiscipline.accentColor }}
              />

              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: currentDiscipline.accentBg,
                    border: `1px solid ${currentDiscipline.borderColor}`,
                  }}
                >
                  <DisciplineIcon className="w-4 h-4" style={{ color: currentDiscipline.accentColor }} />
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    background: currentDiscipline.accentBg,
                    color: currentDiscipline.accentColor,
                    border: `1px solid ${currentDiscipline.borderColor}`,
                  }}
                >
                  {currentDiscipline.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-1 leading-tight">
                {currentDiscipline.title}
              </h3>
              <p className="text-sm text-foreground/80 mb-4">{currentDiscipline.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {currentDiscipline.description}
              </p>

              <dl className="border-t border-border/60 pt-5 space-y-3 mb-6 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground shrink-0">Stack</dt>
                  <dd className="text-foreground text-right">
                    {currentDiscipline.blueprint.stack.join(", ")}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Delivery</dt>
                  <dd className="text-foreground">{currentDiscipline.blueprint.timeline}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Benchmark</dt>
                  <dd className="text-foreground font-medium">{currentDiscipline.blueprint.metrics}</dd>
                </div>
              </dl>

              <div className="border-t border-border/60 pt-5 mb-7">
                <p className="text-xs font-medium text-muted-foreground mb-3">What you get</p>
                <ul className="space-y-2">
                  {currentDiscipline.artifacts.map((artifact) => (
                    <li key={artifact} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{artifact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 font-medium text-sm flex items-center justify-center gap-2 py-2.5 rounded-lg"
              >
                Inquire about {currentDiscipline.title.split(" ")[0]}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Card>
          </div>

          {/* Module list — quiet, supporting detail, no card chrome */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border/70">
              {currentDiscipline.modules.map((module) => {
                const ModuleIcon = module.icon;
                return (
                  <li key={module.title} className="group py-6 first:pt-0 flex gap-4">
                    <ModuleIcon className="w-5 h-5 mt-0.5 text-muted-foreground shrink-0" />
                    <div>
                      <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {module.title}
                      </h4>
                      <p className="text-xs text-primary/90 mb-2">{module.tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                        {module.description}
                      </p>
                      <p className="text-xs text-muted-foreground/80">
                        {module.deliverables.join(" · ")}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Working-with-me strip — folded in, no duplicate card chrome or CTA */}
        <div className="pt-10 border-t border-border/80">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div className="max-w-md">
              <h3 className="text-lg font-semibold text-foreground mb-1">Working with me directly</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No offshore agency layer, no boilerplate factory — you work with the engineer
                building your software.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for select projects
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {CRAFT_STANDARDS.map((standard) => {
              const StandardIcon = standard.icon;
              return (
                <div key={standard.title} className="flex gap-3">
                  <StandardIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{standard.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{standard.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;