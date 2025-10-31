import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web application development using modern frameworks and best practices.",
      features: [" Frontend", "Ruby On Rails Backend", "Database Design", "API Development"],
      color: "text-blue-500",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    
  
    {
      icon: Globe,
      title: "Web Solutions",
      description: "Custom web solutions tailored to your business needs and goals.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Progressive Web Apps"],
      color: "text-orange-500",
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description: "Complete e-commerce solutions with payment integration and inventory management.",
      features: ["Online Store Setup", "Payment Gateway", "Inventory System", "Analytics Dashboard"],
      color: "text-red-500",
      gradient: "from-red-500/20 to-pink-500/20"
    },

  ];

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your digital ideas to life with modern technology and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`p-6 glass border-primary/10 hover:border-primary/20 transition-all duration-500 hover-lift group animate-slide-up bg-gradient-to-br ${service.gradient}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 glass border-primary/10 bg-gradient-to-r from-primary/5 to-accent/5">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Let's discuss your ideas and create something amazing together. 
              I'm here to help you turn your vision into reality with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-secondary border-0 hover-lift glow-primary"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;