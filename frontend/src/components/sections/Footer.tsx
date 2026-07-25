"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Shield } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

import { getHero } from "@/lib/api";

interface HeroData {
  id: number;
  name: string;
  designation: string;
  github_url: string;
  linkedin_url: string;
  email: string;
}

export default function Footer() {
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    async function fetchHero() {
      try {
        const data = await getHero();
        setHero(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchHero();
  }, []);

  if (!hero) return null;

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-5 py-10 sm:px-8 lg:flex-row lg:px-12">
        {/* Left */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold">{hero.name}</h2>

          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {hero.designation}
          </p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          <Link
            href={hero.github_url}
            target="_blank"
            className="rounded-2xl border border-white/10 bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <FaGithub size={20} />
          </Link>

          <Link
            href={hero.linkedin_url}
            target="_blank"
            className="rounded-2xl border border-white/10 bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <FaLinkedin size={20} />
          </Link>

          <Link
            href={`mailto:${hero.email}`}
            className="rounded-2xl border border-white/10 bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <Mail size={20} />
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="rounded-2xl bg-primary p-3 text-primary-foreground"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:px-8 lg:px-12">
        <p>
          © {new Date().getFullYear()} {hero.name}. All rights reserved.
        </p>

        <Link
          href="https://portfolio-qq6y.onrender.com/admin/"
          target="_blank"
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-card px-3 py-2 transition-all duration-300 hover:border-primary hover:text-primary"
        >
          <Shield size={16} />
          <span>Admin Panel</span>
        </Link>
      </div>
    </footer>
  );
}
