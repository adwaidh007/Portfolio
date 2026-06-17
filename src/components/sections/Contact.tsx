import { useState } from "react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <Section id="contact">
      <SectionHeading>Get In Touch</SectionHeading>
      
      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold font-heading mb-6">Let's build something.</h3>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-md">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's engineer the future together.
          </p>
          
          <div className="space-y-6">
            <ContactItem icon={<Mail />} label="Email" value="adwaidhcr05@gmail.com" href="mailto:adwaidhcr05@gmail.com" />
            <ContactItem icon={<Phone />} label="Phone" value="+91 9745173251" href="tel:+919745173251" />
            <ContactItem icon={<MapPin />} label="Location" value="Bengaluru, Karnataka" />
          </div>
          
          <div className="flex gap-4 mt-10">
            <Button size="icon" variant="outline" className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" asChild data-testid="contact-linkedin">
              <a href="https://www.linkedin.com/in/adwaidh-cr/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="outline" className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" asChild data-testid="contact-github">
              <a href="https://github.com/adwaidh007" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-3xl border border-card-border shadow-sm flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <Input id="name" required placeholder="John Doe" className="bg-secondary/50 border-border/50 focus-visible:ring-primary h-12 rounded-xl" data-testid="input-name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <Input id="email" type="email" required placeholder="john@example.com" className="bg-secondary/50 border-border/50 focus-visible:ring-primary h-12 rounded-xl" data-testid="input-email" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <Textarea 
                id="message" 
                required 
                placeholder="Tell me about your project..." 
                className="min-h-[150px] bg-secondary/50 border-border/50 focus-visible:ring-primary rounded-xl resize-none" 
                data-testid="input-message"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full rounded-xl h-14 text-base mt-2" 
              disabled={isSubmitting}
              data-testid="button-submit-contact"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="font-medium text-foreground group-hover:text-primary transition-colors">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block w-fit">
      {content}
    </a>
  ) : (
    <div className="w-fit">
      {content}
    </div>
  );
}
