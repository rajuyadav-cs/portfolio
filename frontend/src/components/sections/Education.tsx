"use client";

import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

import { EducationInterface } from "@/types";

interface EducationProps {
  data: EducationInterface[];
}

export default function Education({ data }: EducationProps) {
  const education = [...data].sort((a, b) => a.display_order - b.display_order);

  return (
    <section
      id="education"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Education
        </p>

        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
          Academic Journey
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          The educational foundation that shaped my software engineering,
          artificial intelligence and problem-solving skills.
        </p>
      </motion.div>

      <div className="space-y-8">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">{item.degree}</h3>

                  <p className="mt-1 font-medium text-primary">
                    {item.institution}
                  </p>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {item.specialization}
                  </p>
                </div>
              </div>

              <div className="w-fit rounded-2xl border border-primary/20 bg-primary/10 px-5 py-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Grade
                </p>

                <p className="mt-1 text-xl font-bold text-primary">
                  {item.grade}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span>
                  {item.start_year} – {item.end_year}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{item.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
