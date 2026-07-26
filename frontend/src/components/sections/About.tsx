"use client";

import { motion } from "framer-motion";

import { AboutInterface } from "@/types";

interface AboutProps {
  data: AboutInterface;
}

export default function About({ data }: AboutProps) {
  return (
    <section id="About" className="w-full px-5 py-20 sm:px-8 lg:px-12">
      {/* Heading */}

      <div className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          About Me
        </p>

        <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
          {data.title}
        </h2>
      </div>

      {/* Content */}

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />

            <img
              src={data.profile_image}
              alt={data.title}
              className="relative h-80 w-64 rounded-3xl object-cover ring-1 ring-border shadow-[0_0_60px_rgba(59,130,246,0.18)] sm:h-96 sm:w-80"
            />
          </div>
        </motion.div>

        {/* Text */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            {data.description.split("\r\n\r\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
