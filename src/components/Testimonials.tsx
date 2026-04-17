import React from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Soham is an exceptional developer who brings both technical expertise and creative problem-solving to the table. His work on our real estate platform was top-notch.",
    author: "Shivkumar Realtors",
    role: "Client",
    avatar: "SR"
  },
  {
    quote: "The Sri Ram Mandir portal was delivered with great attention to detail. The multilingual support and donation management features work flawlessly.",
    author: "Mandir Committee",
    role: "Organization",
    avatar: "RM"
  },
  {
    quote: "A highly dedicated professional. His ability to translate complex requirements into clean, maintainable code is impressive.",
    author: "Tech Lead",
    role: "Collaborator",
    avatar: "TL"
  },
  {
    quote: "Working with Soham was a breeze. He's communicative, efficient, and delivers exactly what he promises.",
    author: "Tawade Kitchen",
    role: "Local Business",
    avatar: "TK"
  },
  {
    quote: "The AI-driven recommendations in CollegeMatch were a game-changer for our students. Soham's ability to integrate complex AI logic into a user-friendly interface is remarkable.",
    author: "Education Consultant",
    role: "Client",
    avatar: "EC"
  }
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false 
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kind words from clients and collaborators I've had the pleasure of working with.
          </p>
        </div>

        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <Card className="h-full p-8 glass border-primary/10 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between hover-lift">
                  <div>
                    <Quote className="w-10 h-10 text-primary/20 mb-6" />
                    <p className="text-muted-foreground leading-relaxed italic mb-8">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                selectedIndex === index 
                  ? "w-8 bg-primary" 
                  : "bg-primary/20 hover:bg-primary/40"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
