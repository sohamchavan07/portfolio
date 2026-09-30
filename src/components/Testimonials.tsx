import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";

// ─── Sub-component ────────────────────────────────────────────────────────────

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => (
  <Card
    className="p-7 sm:p-8 bg-card/70 border border-border/80 hover:border-primary/40 backdrop-blur-md rounded-2xl transition-all duration-300 flex flex-col justify-between hover-lift shadow-sm hover:shadow-xl group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div>
      <Quote className="w-8 h-8 text-primary/40 mb-5 group-hover:text-primary transition-colors" />
      <p className="text-base sm:text-lg font-normal text-foreground/90 leading-relaxed italic">
        "{testimonial.quote}"
      </p>
    </div>

    <div>
      <div className="my-6 border-t border-border/60" />
      <div className="flex items-center gap-3.5">
        {testimonial.photo ? (
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-11 h-11 rounded-full object-cover shrink-0 border border-border/80 shadow-sm"
            loading="lazy"
            width={44}
            height={44}
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold text-sm shrink-0 shadow-md">
            {testimonial.avatar}
          </div>
        )}
        <div className="min-w-0">
          <h4 className="font-semibold text-foreground text-sm sm:text-base truncate">
            {testimonial.name}
          </h4>
          <p className="text-xs text-muted-foreground truncate">
            {testimonial.role}
            {testimonial.company &&
              testimonial.company !== testimonial.name &&
              ` · ${testimonial.company}`}
          </p>
        </div>
      </div>
    </div>
  </Card>
);

// ─── Section ──────────────────────────────────────────────────────────────────

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              04 / 06
            </span>
            <span className="h-px w-8 bg-border" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Kind words from clients, founders, and engineering teams I've had the pleasure of collaborating with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
