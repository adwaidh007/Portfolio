import { Section, SectionHeading } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Programmer",
    company: "Takyon System Solutions Pvt. Ltd.",
    period: "Jul 2024 – Aug 2025",
    location: "Thrissur, Kerala",
    achievements: [
      "Architected PHP (Laravel) web app serving 100+ schools and 1000+ active users.",
      "Designed robust RESTful APIs, improving integration efficiency by 30%.",
      "Integrated Generative AI features including AI tutorials, text generation, and summarization, resulting in a 25% increase in user engagement.",
      "Leveraged GitHub Copilot, Cursor, and OpenAI APIs to reduce implementation time by 25%.",
      "Maintained a 95% on-time feature delivery rate."
    ]
  },
  {
    role: "Intern",
    company: "Revertech IT Solutions",
    period: "Jan 2023 – Mar 2023",
    location: "Kochi, Kerala",
    achievements: [
      "Contributed to Python development utilizing MongoDB.",
      "Designed and implemented 10+ data models.",
      "Collaborated effectively within a 3-4 member agile team."
    ]
  }
];

export function Experience() {
  return (
    <Section id="experience" className="bg-secondary/30">
      <SectionHeading>Experience</SectionHeading>
      
      <div className="relative border-l border-primary/30 ml-4 md:ml-8 mt-12 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-card-border shadow-sm group hover:border-primary/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground font-heading">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-2 text-primary font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground bg-secondary/50 p-3 rounded-xl border border-border/50">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
