import { Section, SectionHeading } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Collaborative Code Editor",
    period: "Apr–May 2026",
    description: "Real-time collaborative code editor supporting 10+ concurrent users with zero lag. Features Monaco Editor integration and Yjs CRDTs via WebSockets. Dockerized and deployed on AWS, reducing deployment time by 70%.",
    tech: ["React.js", "Node.js", "Express.js", "Socket.io", "Yjs", "Docker", "AWS"],
    github: "https://github.com/adwaidh007/Realtime-Collaborative-Code-Editor",
    live: "https://realtime-collaborative-code-editor-ej96.onrender.com"
  },
  {
    title: "Email Writer Assistant",
    period: "Mar–Apr 2026",
    description: "AI-powered email assistant that saves users 5+ minutes per email. Built as a Chrome Extension that injects directly into Gmail. Utilizes Spring WebFlux and Google Gemini API for blazingly fast (<3s) contextual responses, reducing drafting effort by ~60%.",
    tech: ["Java", "Spring Boot", "React.js", "Chrome Extension", "Google Gemini"],
    github: "https://github.com/adwaidh007/Smart-Email-Assistant"
  },
  {
    title: "Signalist",
    period: "Dec 2025–Jan 2026",
    description: "Real-time stock market tracking application tested with 30+ user profiles. Integrates Finnhub API for live data across 15+ stocks. Implemented debounced search mechanisms, cutting unnecessary API calls by ~40% and drastically improving performance.",
    tech: ["Next.js", "React.js", "MongoDB", "Google Gemini", "Finnhub API"],
    github: "https://github.com/Astrix3348/signalist_stock-tracker-app",
    live: "https://signalist-stock-tracker-app-lac.vercel.app/sign-in"
  }
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading>Featured Projects</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col bg-card rounded-3xl overflow-hidden border border-card-border shadow-sm group hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Visual Header Mockup */}
            <div className="h-48 bg-secondary/80 border-b border-border p-6 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
              <MonitorPlay className="w-10 h-10 text-primary mb-4 relative z-10" />
              <h3 className="text-2xl font-bold font-heading relative z-10">{project.title}</h3>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-sm font-mono text-primary mb-4">{project.period}</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-secondary/50 font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                {project.live && (
                  <Button variant="default" size="sm" className="flex-1 rounded-xl" asChild data-testid={`link-live-${index}`}>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="sm" className="flex-1 rounded-xl" asChild data-testid={`link-github-${index}`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" /> View Code
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
