"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { ProjectInterface } from "@/types";

interface ProjectProps {
  data: ProjectInterface[];
}

export default function Projects({ data }: ProjectProps) {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Projects
        </p>

        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Featured Work</h2>

        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          A selection of projects showcasing my experience in Full Stack
          Development, Machine Learning and AI-powered applications.
        </p>
      </motion.div>

      {/* Projects Grid */}

      <div className="grid gap-10 lg:grid-cols-2">
        {data.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10"
          >
            {/* Image */}

            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {project.featured && (
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-foreground">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  Featured
                </div>
              )}
            </div>

            {/* Content */}

            <div className="space-y-5 p-6">
              <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">
                {project.title}
              </h3>

              <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>

              {/* Skills */}

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:bg-primary hover:text-foreground"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>

                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-foreground transition-all hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
