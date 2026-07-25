"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

import { getHero, getSkills } from "@/lib/api";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";

interface HeroData {
  id: number;
  greeting: string;
  name: string;
  designation: string;
  short_description: string;
  profile_image: string;
  resume: string;
  github_url: string;
  linkedin_url: string;
  email: string;
}

export default function Hero() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [coreSkills, setCoreSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const [heroData, skillsData] = await Promise.all([
          getHero(),
          getSkills(),
        ]);

        setHero(heroData);

        const coreAreaSkills = skillsData
          .filter((skill: any) => skill.category === "Core Area")
          .map((skill: any) => skill.name);

        setCoreSkills(coreAreaSkills);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (coreSkills.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % coreSkills.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [coreSkills]);

  if (!hero) return null;

  return (
    <section
      id="home"
      className="hero bg-card px-5 py-8 text-white sm:px-8 lg:px-12 lg:py-14"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20"
      >
        {/* LEFT */}
        <div className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <TextGenerateEffect
            words={hero.greeting}
            duration={0.8}
            className="text-xl font-light text-muted-foreground sm:text-2xl"
          />

          <TextGenerateEffect
            words={hero.name}
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
                className="text-2xl  font-semibold text-primary"
              />
            </motion.div>
          </AnimatePresence>

          {/* Desktop Description */}
          <div className="mt-8 hidden max-w-xl lg:block">
            <TextGenerateEffect
              words={hero.short_description}
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
                href={hero.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:-translate-y-1 hover:text-primary"
              >
                <FaGithub />
              </a>

              <a
                href={hero.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:-translate-y-1 hover:text-primary"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${hero.email}`}
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
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />

            <img
              src={hero.profile_image}
              alt={hero.name}
              className="relative h-64 w-52 rounded-3xl object-cover ring-1 ring-white/10 shadow-[0_0_60px_rgba(59,130,246,0.18)] sm:h-80 sm:w-64 lg:h-96 lg:w-80"
            />
          </motion.div>
        </div>

        {/* MOBILE BOTTOM */}
        <div className="order-3 flex flex-col items-center text-center lg:hidden">
          <TextGenerateEffect
            words={hero.short_description}
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
            <a href={hero.github_url}>
              <FaGithub />
            </a>

            <a href={hero.linkedin_url}>
              <FaLinkedin />
            </a>

            <a href={`mailto:${hero.email}`}>
              <MdOutlineMailOutline />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
