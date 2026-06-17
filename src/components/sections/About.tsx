import { Section, SectionHeading } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Code2, Zap, Rocket } from "lucide-react";

export function About() {
  return (
    <Section id="about" className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading>About Me</SectionHeading>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I am a <strong className="text-foreground">Full Stack Developer</strong> with 1+ year of professional experience building scalable web apps and RESTful APIs. I specialize in the modern web stack, utilizing tools like React.js, Node.js, and Spring Boot to engineer precise and reliable solutions.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Beyond standard web development, I am an <strong className="text-foreground">IEEE published researcher</strong> with a strong focus on Generative AI integrations. I've successfully implemented Google Gemini and OpenAI to solve complex problems, notably increasing user engagement by 25% in recent projects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I take pride in execution. I have a proven track record of a <strong className="text-foreground">95% on-time feature delivery rate</strong>. I build things that work, scale, and look good doing it.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatCard
            icon={<Code2 className="w-6 h-6 text-primary" />}
            title="Full Stack"
            desc="React, Node, Spring Boot"
            delay={0.4}
          />
          <StatCard
            icon={<Zap className="w-6 h-6 text-primary" />}
            title="AI Integration"
            desc="Gemini & OpenAI API"
            delay={0.5}
            className="sm:translate-y-8"
          />
          <StatCard
            icon={<Rocket className="w-6 h-6 text-primary" />}
            title="95% Delivery"
            desc="On-time feature rate"
            delay={0.6}
          />
          <StatCard
            icon={<span className="font-bold text-xl text-primary">1+</span>}
            title="Years Exp."
            desc="Professional development"
            delay={0.7}
            className="sm:translate-y-8"
          />
        </div>
      </div>
    </Section>
  );
}

function StatCard({ icon, title, desc, delay, className = "" }: { icon: React.ReactNode, title: string, desc: string, delay: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`p-6 rounded-2xl bg-card border border-card-border shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl">
        {icon}
      </div>
      <h3 className="font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}
