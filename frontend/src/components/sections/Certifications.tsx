"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, CalendarDays } from "lucide-react";

import { getCertifications } from "@/lib/api";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  issue_date: string;
  credential_url: string;
  certificate_image: string;
  display_order: number;
}

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const data = await getCertifications();

        setCertifications(
          data.sort(
            (a: Certification, b: Certification) =>
              a.display_order - b.display_order,
          ),
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchCertifications();
  }, []);

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
            className="group overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10"
          >
            {/* Certificate Image */}

            <div className="relative h-56 overflow-hidden">
              <img
                src={certificate.certificate_image}
                alt={certificate.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg">
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
                className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
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
