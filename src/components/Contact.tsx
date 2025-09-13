import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailTemplateParams } from "@/config/emailjs";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sohamchavan.sc07@gmail.com",
      href: "mailto:sohamchavan.sc07@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7058933361",
      href: "tel:+917058933361",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Maharashtra, India",
      href: "https://maps.google.com",
      color: "text-red-500"
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/sohamchavan07", label: "GitHub", color: "hover:text-gray-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sohamchavan07/", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Twitter, href: "https://x.com/soham_chavan07", label: "Twitter", color: "hover:text-blue-400" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: EMAILJS_CONFIG.toEmail
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams as Record<string, unknown>,
        EMAILJS_CONFIG.publicKey
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss your ideas and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a startup looking to build your first product or an 
                established company seeking to innovate, I'd love to help bring your vision to life.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="p-4 glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group-hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover-lift glow-primary group ${social.color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Book a Call */}
            <Card className="p-6 glass border-primary/10 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary mr-3" />
                <h4 className="font-semibold">Book a Call</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Ready to discuss your project? Schedule a free 30-minute consultation call with me.
              </p>
              <Button 
                asChild
                className="w-full bg-gradient-primary hover:bg-gradient-secondary border-0 hover-lift glow-primary"
              >
                <a 
                  href="https://calendly.com/sohamchavan-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </a>
              </Button>
            </Card>

            {/* Quick Response */}
            <Card className="p-6 glass border-primary/10 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-center mb-3">
                <MessageCircle className="w-6 h-6 text-primary mr-3" />
                <h4 className="font-semibold">Quick Response Guaranteed</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to call or send a message on LinkedIn for faster communication.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 glass border-primary/10 hover:border-primary/20 transition-all duration-300 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-muted/50 border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="bg-muted/50 border-primary/20 focus:border-primary/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry, collaboration, etc."
                  required
                  className="bg-muted/50 border-primary/20 focus:border-primary/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  rows={6}
                  required
                  className="bg-muted/50 border-primary/20 focus:border-primary/40 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:bg-gradient-secondary border-0 hover-lift glow-primary disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By sending this message, you agree that I may contact you regarding your inquiry.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;