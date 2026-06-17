import { Section, SectionHeading } from "@/components/layout/Section";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiCplusplus,
  SiPhp,
  SiLaravel,
  SiGit,
  SiGithub,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "text-[#ED8B00]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "SQL", icon: null, color: "text-[#4479A1]" },
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" },
      { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    ]
  },
  {
    title: "Tools & Infrastructure",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "AWS", icon: null, color: "text-[#FF9900]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "text-foreground" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "IntelliJ", icon: SiIntellijidea, color: "text-[#000000] dark:text-white" },
    ]
  }
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading>Technical Arsenal</SectionHeading>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            className="bg-card p-6 md:p-8 rounded-3xl border border-card-border shadow-sm"
          >
            <h3 className="text-xl font-bold mb-6 font-heading">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border/50 text-sm font-medium hover:bg-secondary transition-colors"
                >
                  {skill.icon && <skill.icon className={`w-4 h-4 ${skill.color}`} />}
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
