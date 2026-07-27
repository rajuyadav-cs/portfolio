"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ExternalLink, CalendarDays } from "lucide-react";

import { CertificationInterface } from "@/types";

interface CertificationProps {
  data: CertificationInterface[];
}

export default function Certifications({ data }: CertificationProps) {
  const certifications = [...data].sort(
    (a, b) => a.display_order - b.display_order,
  );

  return (
    <section
      id="certifications"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Certifications
        </p>

        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
          Professional Certifications
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Certifications that reflect my continuous learning in software
          development, data science and AI.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10"
          >
            {/* Certificate Image */}

            <div className="relative h-56 overflow-hidden">
              <Image
                src={certificate.certificate_image}
                alt={certificate.title}
                width={800}
                height={500}
                unoptimized
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-foreground shadow-lg">
                <Award className="h-5 w-5" />
              </div>
            </div>

            {/* Content */}

            <div className="space-y-4 p-6">
              <h3 className="line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
                {certificate.title}
              </h3>

              <p className="font-medium text-primary">{certificate.issuer}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 text-primary" />

                {new Date(certificate.issue_date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </div>

              <a
                href={certificate.credential_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-foreground"
              >
                Verify Credential
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
