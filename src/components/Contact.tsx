import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

interface ContactMethod {
  icon: typeof Mail;
  label: string;
  handle: string;
  href: string;
  isExternal: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: "Email",
    handle: "soham07.dev@gmail.com",
    href: "mailto:soham07.dev@gmail.com",
    isExternal: false,
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "github.com/sohamchavan07",
    href: "https://github.com/sohamchavan07",
    isExternal: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "linkedin.com/in/sohamchavan07",
    href: "https://linkedin.com/in/sohamchavan07",
    isExternal: true,
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    handle: "@soham_chavan07",
    href: "https://twitter.com/soham_chavan07",
    isExternal: true,
  },
  {
    icon: Phone,
    label: "Phone",
    handle: "+91 7058933361",
    href: "tel:+917058933361",
    isExternal: false,
  },
  {
    icon: MapPin,
    label: "Location",
    handle: "Maharashtra, India",
    href: "https://maps.google.com/?q=Maharashtra,+India",
    isExternal: true,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xvgbyldd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New inquiry from portfolio",
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact me directly at soham07.dev@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        {/* Large headline + one-line subtext */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss your ideas and create something amazing together.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Stacked list of contact links with dividers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="divide-y divide-border/40 border-y border-border/40">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    {...(method.isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center justify-between py-4 px-2 hover:bg-white/[0.03] transition-colors rounded-sm"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-secondary/80 border border-border/50 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
                        <Icon className="w-4 h-4 text-foreground/80 group-hover:text-primary transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                          {method.label}
                        </div>
                        <div className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors truncate">
                          {method.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="lg:col-span-7">
            <Card className="p-6 md:p-8 glass border-border/60 bg-card/40 backdrop-blur-sm rounded-xl">
              <form
                action="https://formspree.io/f/xvgbyldd"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      inputMode="text"
                      className="bg-background/60 border-border/60 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                      inputMode="email"
                      className="bg-background/60 border-border/60 focus:border-primary/50"
                    />
                  </div>
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
                    placeholder="Tell me about your project, goals, or timeline..."
                    rows={5}
                    required
                    autoComplete="off"
                    className="bg-background/60 border-border/60 focus:border-primary/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white border-0 hover-lift disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;