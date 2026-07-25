"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

import { getExperience } from "@/lib/api";

interface Experience {
  id: number;
  role: string;
  organization: string;
  employment_type: string;
  location: string;
  start_date: string;
  end_date: string;
  currently_working: boolean;
  description: string;
  display_order: number;
}

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    async function fetchExperience() {
      try {
        const data = await getExperience();

        setExperiences(
          data.sort(
            (a: Experience, b: Experience) => a.display_order - b.display_order,
          ),
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchExperience();
  }, []);

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Experience
        </p>

        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
          Professional Journey
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          My internship experience and practical exposure to data science,
          machine learning and software development.
        </p>
      </motion.div>

      <div className="relative space-y-10 border-l border-primary/20 pl-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}

            <div className="absolute -left-12 top-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/40">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-white" />
            </div>

            {/* Card */}

            <div className="rounded-3xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10">
              {/* Header */}

              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{experience.role}</h3>

                  <p className="mt-1 text-lg font-medium text-primary">
                    {experience.organization}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  {experience.employment_type}
                </span>
              </div>

              {/* Info */}

              <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {experience.location}
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" />

                  {new Date(experience.start_date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}

                  {" - "}

                  {experience.currently_working
                    ? "Present"
                    : new Date(experience.end_date).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          year: "numeric",
                        },
                      )}
                </div>
              </div>

              {/* Description */}

              <p className="mt-6 leading-8 text-muted-foreground">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
