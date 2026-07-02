import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Abstract Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50 dark:opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] opacity-50 dark:opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-primary font-mono text-sm md:text-base mb-6 px-3 py-1 bg-primary/10 rounded-full border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter leading-[1.1] mb-6"
          >
            ADWAIDH <span className="text-primary">CR</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground font-medium mb-8 max-w-2xl"
          >
            Full Stack Developer engineering{" "}
            <span className="text-foreground dark:text-white">AI-powered</span> web experiences.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 text-sm md:text-base text-muted-foreground mb-10"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>adwaidhcr05@gmail.com</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bengaluru, Karnataka</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 text-base h-14"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="button-hero-projects"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base h-14"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="button-hero-contact"
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8 text-base h-14"
              asChild
              data-testid="button-hero-resume"
            >
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
            <div className="flex gap-2 ml-4">
              <Button size="icon" variant="ghost" className="rounded-full h-14 w-14 border border-border" asChild data-testid="link-linkedin">
                <a href="https://www.linkedin.com/in/adwaidh-cr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-14 w-14 border border-border" asChild data-testid="link-github">
                <a href="https://github.com/adwaidh007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
