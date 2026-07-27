"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "scroll-mt-16 px-3 py-4 sm:px-5 sm:py-6 lg:px-6 lg:py-8",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}
