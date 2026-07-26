"use client";

import { motion } from "framer-motion";

import { SkillsInterface } from "@/types";

interface SkillsProps {
  data: SkillsInterface;
}

export default function Skills({ data }: SkillsProps) {
  const categoryOrder = [
    "Programming Language",
    "Framework",
    "Library",
    "Database",
    "Styling",
    "Tool",
    "Core Area",
  ];

  const groupedSkills = categoryOrder.reduce(
    (acc, category) => {
      const categorySkills = data.filter(
        (skill) => skill.category === category,
      );

      if (categorySkills.length > 0) {
        acc[category] = categorySkills;
      }

      return acc;
    },
    {} as Record<string, SkillsInterface>,
  );

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:px-12 lg:py-24"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center sm:mb-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary sm:text-sm">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Technologies I Work With
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Technologies, frameworks, libraries and tools that I use to build
          scalable web applications and AI-powered solutions.
        </p>
      </motion.div>

      {/* Categories */}

      <div className="space-y-8 sm:space-y-10 lg:space-y-14">
        {Object.entries(groupedSkills).map(
          ([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.08 }}
              className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:border-primary/20 sm:rounded-3xl sm:p-6"
            >
              {/* Category Heading */}

              <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8 sm:gap-4">
                <div className="hidden h-px flex-1 bg-border sm:block" />

                <h3 className="text-center text-base font-semibold sm:text-xl lg:text-2xl">
                  {category}
                </h3>

                <div className="hidden h-px flex-1 bg-border sm:block" />
              </div>

              {/* Skills */}

              <div className="space-y-3 sm:space-y-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                    }}
                  >
                    <div className="group flex flex-col items-start gap-3 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
                      {/* Left */}

                      <h4 className="w-full wrap-break-word text-sm font-medium leading-6 transition-colors group-hover:text-primary sm:text-base">
                        {skill.name}
                      </h4>

                      {/* Right */}

                      <span className="w-fit shrink-0 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:text-sm">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {index !== items.length - 1 && (
                      <div className="mx-2 my-3 h-px bg-border" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
