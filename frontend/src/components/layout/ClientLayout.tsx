"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toogle";
import Section from "../ui/Section";

import {
  Hero,
  About,
  Education,
  Skills,
  Projects,
  Experience,
  Certifications,
  Contact,
  Footer,
} from "@/components/sections";

import SidebarWrapper from "./SidebarWrapper";

import {
  HeroInterface,
  AboutInterface,
  SkillsInterface,
  ProjectInterface,
  ExperienceInterface,
  EducationInterface,
  CertificationInterface,
} from "@/types";

interface ClientLayoutProps {
  hero: HeroInterface;
  about: AboutInterface;
  skills: SkillsInterface;
  projects: ProjectInterface[];
  experience: ExperienceInterface[];
  certifications: CertificationInterface[];
  education: EducationInterface[];
}

export default function ClientLayout({
  hero,
  about,
  skills,
  projects,
  experience,
  certifications,
  education,
}: ClientLayoutProps) {
  const logo = "Portfolio.";
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logo.length);
    }, 200);

    return () => window.clearInterval(interval);
  }, [logo.length]);

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-background animate-[fadeIn_0.5s_ease-out]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/bgimg.jpg')] bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-30" />
        <div className="ambient-orb left-[-5%] top-[-4%] h-64 w-64 bg-primary/20" />
        <div className="ambient-orb bottom-[-8%] right-[-4%] h-72 w-72 bg-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_35%)]" />
      </div>

      <main className="flex-1 px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-5 xl:px-6 xl:py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:gap-4 lg:gap-4">
          <div className="rounded-[24px] border border-border/70 bg-card/85 p-2 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:rounded-[30px] sm:p-3 md:p-4 lg:rounded-[34px] lg:p-4 xl:p-5">
            <div className="mt-2 flex flex-col gap-3 sm:mt-3 md:mt-4 lg:flex-row lg:gap-3 xl:gap-4">
              <aside className="w-full shrink-0 lg:w-56 xl:w-64">
                <SidebarWrapper />
              </aside>

              <div className="flex-1 rounded-[22px] border border-border/70 bg-background/70 p-2 shadow-inner sm:rounded-[24px] sm:p-3 md:p-4 lg:p-5 xl:p-6">
                <div
                  id="portfolio"
                  className="max-h-[72vh] overflow-y-auto pr-1"
                >
                  <div className="space-y-4">
                    <div className="rounded-[16px] border border-border/60 bg-background/70 px-3 py-2 shadow-sm sm:rounded-[18px] sm:px-4 sm:py-3">
                      <div className="flex items-center justify-between gap-2 sm:gap-3">
                        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                          <h1 className="select-none bg-linear-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-base font-bold tracking-[0.2em] text-transparent sm:text-lg md:text-xl">
                            {logo.split("").map((letter, index) => (
                              <motion.span
                                key={index}
                                className="inline-block"
                                animate={{
                                  scale: activeIndex === index ? 1.2 : 1,
                                }}
                                transition={{ duration: 0.15 }}
                              >
                                {letter}
                              </motion.span>
                            ))}
                          </h1>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-3">
                          <ThemeToggle />
                          <Button className="h-9 rounded-xl bg-linear-to-r from-blue-600 to-violet-600 px-2.5 text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-violet-500 sm:h-10 sm:px-3 md:px-4">
                            <a
                              href={hero.resume}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              <span className="hidden sm:inline">Resume</span>
                              <span className="sm:hidden">CV</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Section id="home">
                      <Hero HeroData={hero} SkillsData={skills} />
                    </Section>

                    <Section id="projects">
                      <Projects data={projects} />
                    </Section>

                    <Section id="skills">
                      <Skills data={skills} />
                    </Section>

                    <Section id="experience">
                      <Experience data={experience} />
                    </Section>

                    <Section id="certifications">
                      <Certifications data={certifications} />
                    </Section>

                    <Section id="about">
                      <About data={about} />
                    </Section>

                    <Section id="education">
                      <Education data={education} />
                    </Section>

                    <Section id="contact">
                      <Contact />
                    </Section>

                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
