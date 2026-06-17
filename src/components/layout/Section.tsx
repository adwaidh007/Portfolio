import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen py-24 flex items-center justify-center relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 relative z-10 w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`text-3xl md:text-5xl font-heading font-bold mb-12 text-foreground tracking-tight ${className}`}
    >
      {children}
    </motion.h2>
  );
}
