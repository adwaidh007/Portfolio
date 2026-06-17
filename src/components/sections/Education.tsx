import { Section, SectionHeading } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <Section id="education" className="bg-secondary/30">
      <SectionHeading>Education</SectionHeading>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card p-8 rounded-3xl border border-card-border shadow-sm flex flex-col h-full"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold font-heading mb-2">Post Graduate Diploma in Advanced Computing</h3>
          <p className="text-muted-foreground mb-4">C-DAC, Bengaluru</p>
          
          <div className="mt-auto">
            <div className="flex justify-between text-sm mb-2 border-b border-border pb-2">
              <span className="text-muted-foreground">Period</span>
              <span className="font-medium text-foreground">Aug 2025 – Feb 2026</span>
            </div>
            <div className="flex justify-between text-sm mb-2 border-b border-border pb-2">
              <span className="text-muted-foreground">Focus</span>
              <span className="font-medium text-foreground">Full Stack Dev + SE</span>
            </div>
            <div className="flex justify-between text-sm pt-2">
              <span className="text-muted-foreground">Score</span>
              <span className="font-bold text-primary">77.68% (Grade A)</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card p-8 rounded-3xl border border-card-border shadow-sm flex flex-col h-full"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold font-heading mb-2">B.Tech Computer Science and Engineering</h3>
          <p className="text-muted-foreground mb-4">APJ Abdul Kalam Technological University, Sahrdaya College</p>
          
          <div className="mt-auto">
            <div className="flex justify-between text-sm mb-2 border-b border-border pb-2">
              <span className="text-muted-foreground">Period</span>
              <span className="font-medium text-foreground">Dec 2020 – Jun 2024</span>
            </div>
            <div className="flex justify-between text-sm pt-2">
              <span className="text-muted-foreground">Score</span>
              <span className="font-bold text-primary">CGPA: 6.99/10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
