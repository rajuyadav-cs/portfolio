"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getSkills } from "@/lib/api";

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSkills();
  }, []);

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }

      acc[skill.category].push(skill);

      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Skills
        </p>

        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
          Technologies I Work With
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Technologies, frameworks, libraries and tools that I use to build
          scalable web applications and AI-powered solutions.
        </p>
      </motion.div>

      {/* Categories */}

      <div className="space-y-14">
        {Object.entries(groupedSkills).map(
          ([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.08 }}
              className="rounded-3xl border border-white/10 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20"
            >
              {/* Category Heading */}

              <div className="mb-8 flex items-center justify-center gap-4">
                <div className="hidden h-px flex-1 bg-border sm:block" />

                <h3 className="text-center text-lg font-semibold sm:text-xl lg:text-2xl">
                  {category}
                </h3>

                <div className="hidden h-px flex-1 bg-border sm:block" />
              </div>

              {/* Skills */}

              <div className="space-y-4">
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
                    <div className="group flex items-center justify-between rounded-2xl border border-transparent px-5 py-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5">
                      {/* Left */}

                      <h4 className="text-base font-medium transition-colors group-hover:text-primary">
                        {skill.name}
                      </h4>

                      {/* Right */}

                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
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
