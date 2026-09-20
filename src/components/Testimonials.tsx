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
    className="p-8 md:p-10 glass border-border/60 hover:border-primary/20 bg-card/40 backdrop-blur-sm rounded-xl transition-all duration-300 flex flex-col justify-between hover-lift hover:shadow-xl hover:shadow-black/20 group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div>
      <Quote className="w-8 h-8 text-primary/30 mb-6 group-hover:text-primary/50 transition-colors" />
      <p className="text-lg md:text-xl font-light text-foreground/90 leading-relaxed">
        "{testimonial.quote}"
      </p>
    </div>

    <div>
      <div className="my-6 border-t border-border/40" />
      <div className="flex items-center gap-4">
        {testimonial.photo ? (
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-11 h-11 rounded-full object-cover shrink-0 border border-primary/20"
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
          <h4 className="font-medium text-foreground text-base truncate">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Kind words from clients and collaborators I've had the pleasure of
            working with.
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
