import React from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

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

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <Card className="w-[350px] md:w-[450px] h-full p-8 glass border-primary/10 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between hover-lift mx-4">
    <div>
      <Quote className="w-10 h-10 text-primary/20 mb-6" />
      <p className="text-muted-foreground leading-relaxed italic mb-8">
        "{testimonial.quote}"
      </p>
    </div>
    
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shrink-0 shadow-lg">
        {testimonial.avatar}
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </Card>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="section-container mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kind words from clients and collaborators I've had the pleasure of working with.
          </p>
        </div>
      </div>

      <div className="relative group pause-on-hover">
        {/* Gradient Masks for smooth fading */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee py-4 w-fit">
          {/* Duplicate the array multi-times to ensure continuous scroll even on huge screens */}
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
