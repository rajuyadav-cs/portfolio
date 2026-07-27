import { cn } from "@/lib/utils";
import Header from "./Header";
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
  return (
    <div className="relative isolate flex h-screen min-h-screen max-h-screen flex-col overflow-hidden bg-background animate-[fadeIn_0.5s_ease-out]">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/bgimg.jpg')] bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-30" />
        <div className="ambient-orb left-[-5%] top-[-4%] h-64 w-64 bg-primary/20" />
        <div className="ambient-orb bottom-[-8%] right-[-4%] h-72 w-72 bg-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_35%)]" />
      </div>

      {/* Header */}
      <div className="sticky top-0 z-30 h-16 shrink-0">
        <Header resume={hero.resume} />
      </div>

      {/* Main */}
      <main className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden p-3 md:flex-row md:gap-4 md:p-6 xl:gap-6 xl:p-8">
        {/* Sidebar */}
        <aside className="shrink-0 md:shrink-0">
          <SidebarWrapper />
        </aside>

        {/* Content */}
        <section
          className={cn(
            "flex min-h-0 flex-1 flex-col overflow-hidden",
            "rounded-[2rem] border border-border/70 bg-card/70 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur-xl",
            "ring-1 ring-black/5 dark:ring-white/10",
            "min-h-0 max-h-full",
            "md:max-h-full",
          )}
        >
          <div className="scroll-area flex-1 overflow-y-auto overflow-x-hidden overscroll-contain">
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
        </section>
      </main>
    </div>
  );
}
