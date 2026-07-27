"use client";

import Image from "next/image";
import { HeroInterface, SkillsInterface } from "@/types";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";

interface HeroProps {
  HeroData: HeroInterface;
  SkillsData: SkillsInterface;
}

export default function Hero({ HeroData, SkillsData }: HeroProps) {
  // Only Core Area skills
  const coreSkills = SkillsData.filter(
    (skill) => skill.category === "Core Area",
  ).map((skill) => skill.name);

  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    if (coreSkills.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % coreSkills.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [coreSkills.length]);

  return (
    <section
      id="home"
      className="bg-card px-5 py-8 text-foreground sm:px-8 lg:px-12 lg:py-14"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20"
      >
        {/* LEFT */}
        <div className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>

          <TextGenerateEffect
            words={HeroData.greeting}
            duration={0.8}
            className="text-xl font-light text-muted-foreground sm:text-2xl"
          />

          <TextGenerateEffect
            words={HeroData.name}
            duration={1}
            className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={coreSkills[currentSkill]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <TextGenerateEffect
                words={coreSkills[currentSkill] || ""}
                duration={0.6}
                className="text-2xl font-semibold text-primary"
              />
            </motion.div>
          </AnimatePresence>

          {/* Desktop Description */}
          <div className="mt-8 hidden max-w-xl lg:block">
            <TextGenerateEffect
              words={HeroData.short_description}
              duration={2}
              className="text-lg leading-8 text-muted-foreground"
            />
          </div>

          {/* Desktop Button */}
          <div className="mt-10 hidden lg:block">
            <a href="#contact" rel="noopener noreferrer">
              <MagicButton text="Contact Me" />
            </a>
          </div>

          {/* Desktop Social */}
          <div className="hidden lg:block">
            <div className="mt-10 h-px w-24 bg-white/10" />

            <span className="mt-6 block text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Connect With Me
            </span>

            <div className="mt-5 flex gap-6 text-2xl">
              <a
                href={HeroData.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:-translate-y-1 hover:text-primary"
              >
                <FaGithub />
              </a>

              <a
                href={HeroData.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:-translate-y-1 hover:text-primary"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${HeroData.email}`}
                className="transition hover:-translate-y-1 hover:text-primary"
              >
                <MdOutlineMailOutline />
              </a>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="order-2 flex justify-center lg:justify-end">
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-4xl bg-linear-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />
            <div className="absolute inset-3 rounded-[1.75rem] border border-white/20 dark:border-white/10" />

            <Image
              src={HeroData.profile_image}
              alt={HeroData.name}
              width={800}
              height={1000}
              unoptimized
              className="relative h-64 w-52 rounded-3xl object-cover ring-1 ring-border shadow-[0_0_60px_rgba(59,130,246,0.18)] sm:h-80 sm:w-64 lg:h-96 lg:w-80"
            />
          </motion.div>
        </div>

        {/* MOBILE BOTTOM */}
        <div className="order-3 flex flex-col items-center text-center lg:hidden">
          <TextGenerateEffect
            words={HeroData.short_description}
            duration={2}
            className="max-w-xl text-base leading-8 text-muted-foreground"
          />

          <div className="mt-8">
            <a href="#contact" rel="noopener noreferrer">
              <MagicButton text="Contact Me" />
            </a>
          </div>

          <div className="mt-8 h-px w-24 bg-white/10" />

          <span className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Connect With Me
          </span>

          <div className="mt-5 flex gap-6 text-2xl">
            <a
              href={HeroData.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:-translate-y-1 hover:text-primary"
            >
              <FaGithub />
            </a>

            <a
              href={HeroData.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:-translate-y-1 hover:text-primary"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${HeroData.email}`}
              className="transition hover:-translate-y-1 hover:text-primary"
            >
              <MdOutlineMailOutline />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
