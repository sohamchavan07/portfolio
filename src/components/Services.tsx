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
  Sparkles,
  GitBranch,
  CreditCard,
  BarChart3,
  CheckCircle2,
  Package,
  Code2,
  Cpu,
  Lock,
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

interface ServiceDiscipline {
  id: string;
  number: string;
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
    focus: string;
    metrics: string;
  };
  modules: ServiceModule[];
  artifacts: string[];
}

// ─── Studio Disciplines Data ──────────────────────────────────────────────────

const DISCIPLINES: ServiceDiscipline[] = [
  {
    id: "fullstack",
    number: "01",
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
      focus: "High Availability & Clean Architecture",
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
    number: "02",
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
      focus: "Conversion Rate & Payment Reliability",
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

// ─── Craft Standards (The Artisanal Finishing Touch) ──────────────────────────

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
  const [activeTab, setActiveTab] = useState<string>("fullstack");

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentDiscipline = DISCIPLINES.find((d) => d.id === activeTab) || DISCIPLINES[0];

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800/80 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
                Services & Architecture {"{02}"}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
              CRAFT & <span className="gradient-text">SPECIALIZATIONS</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400 leading-relaxed font-sans">
            Bespoke engineering for products that demand technical durability, sub-second performance, and pixel-precise design. No generic templates—every solution is tailored to your business goals.
          </p>
        </div>

        {/* Artisanal Discipline Switcher */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 p-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 max-w-2xl">
          {DISCIPLINES.map((discipline) => {
            const isActive = activeTab === discipline.id;
            const Icon = discipline.icon;
            return (
              <button
                key={discipline.id}
                onClick={() => setActiveTab(discipline.id)}
                className={`flex-1 flex items-center justify-center sm:justify-start gap-3 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 touch-target ${
                  isActive
                    ? "bg-zinc-800 text-white shadow-lg border border-zinc-700/80"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
                }`}
              >
                <span
                  className="w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-bold"
                  style={{
                    backgroundColor: isActive ? discipline.accentBg : "rgba(255,255,255,0.05)",
                    color: isActive ? discipline.accentColor : "inherit",
                  }}
                >
                  {discipline.number}
                </span>
                <span className="font-semibold tracking-tight">{discipline.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Discipline Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Blueprint & Deliverables Meta Card */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 md:p-7 glass border-zinc-800/90 bg-zinc-950/60 shadow-xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-40"
                style={{ background: currentDiscipline.accentColor }}
              />

              <div className="flex items-center gap-2 mb-4">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider"
                  style={{
                    background: currentDiscipline.accentBg,
                    color: currentDiscipline.accentColor,
                    border: `1px solid ${currentDiscipline.borderColor}`,
                  }}
                >
                  {currentDiscipline.badge}
                </span>
                <span className="text-xs font-mono text-zinc-500">// {currentDiscipline.number}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                {currentDiscipline.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {currentDiscipline.description}
              </p>

              {/* Architectural Specs List */}
              <div className="border-t border-zinc-800/80 pt-5 space-y-3 mb-6">
                <div className="flex items-start justify-between gap-2 text-xs">
                  <span className="font-mono text-zinc-500 uppercase tracking-wider">Stack</span>
                  <span className="text-zinc-300 font-medium text-right max-w-[200px]">
                    {currentDiscipline.blueprint.stack.join(" · ")}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-500 uppercase tracking-wider">Delivery</span>
                  <span className="text-zinc-300 font-mono">{currentDiscipline.blueprint.timeline}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-500 uppercase tracking-wider">Benchmark</span>
                  <span className="text-emerald-400 font-mono font-semibold">
                    {currentDiscipline.blueprint.metrics}
                  </span>
                </div>
              </div>

              {/* Verified Deliverables */}
              <div className="border-t border-zinc-800/80 pt-5">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Key Deliverables
                </p>
                <ul className="space-y-2.5">
                  {currentDiscipline.artifacts.map((artifact, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{artifact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full mt-7 bg-white text-zinc-950 hover:bg-zinc-200 border-0 font-semibold text-sm hover-lift flex items-center justify-center gap-2 shadow-lg"
              >
                Inquire About {currentDiscipline.title.split(" ")[0]}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Card>
          </div>

          {/* Right Column: Architectural Modules Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentDiscipline.modules.map((module, idx) => {
              const ModuleIcon = module.icon;
              return (
                <div
                  key={module.title}
                  className="group relative p-6 rounded-xl border border-zinc-800/90 bg-zinc-950/40 hover:bg-zinc-900/60 hover:border-zinc-700/80 transition-all duration-300 hover-lift flex flex-col justify-between"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div>
                    {/* Module Icon & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: currentDiscipline.accentBg,
                          border: `1px solid ${currentDiscipline.borderColor}`,
                        }}
                      >
                        <ModuleIcon
                          className="w-5 h-5"
                          style={{ color: currentDiscipline.accentColor }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                        0{idx + 1} //
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-zinc-100 transition-colors">
                      {module.title}
                    </h4>
                    <p className="text-xs font-mono text-zinc-400 mb-3">
                      {module.tagline}
                    </p>
                    <p className="text-xs text-zinc-400/90 leading-relaxed mb-4">
                      {module.description}
                    </p>
                  </div>

                  {/* Micro-deliverables tags */}
                  <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                    {module.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── The Artist's Finishing Touch: Craft Standards ─── */}
        <div className="border border-zinc-800/90 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                Engineering Pledge
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              The Artisan's Guarantee
            </h3>
            <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
              When you work with me, you bypass offshore agencies and boilerplate factories. You get direct access to an engineer obsessed with clean systems and enduring code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CRAFT_STANDARDS.map((standard) => {
              const StandardIcon = standard.icon;
              return (
                <div
                  key={standard.title}
                  className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-3">
                    <StandardIcon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{standard.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{standard.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Direct CTA action strip */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Available for select projects & architecture consultations</span>
            </div>
            <Button
              onClick={scrollToContact}
              className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm px-6 py-2.5 font-medium border-0 hover-lift"
            >
              Start a Project Conversation
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;