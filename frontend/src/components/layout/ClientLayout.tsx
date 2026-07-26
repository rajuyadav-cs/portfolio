"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  Header,
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden bg-background">
      {/* Fixed Header */}
      <header className="shrink-0 z-30 w-full">
        <Header />
      </header>

      {/* Main Dashboard Area */}
      <main className="flex flex-1 min-h-0 w-full max-w-full gap-4 overflow-hidden p-2 my-2 sm:p-4 md:gap-6 md:p-6 lg:gap-8 lg:p-8">
        {/* Fixed Sidebar */}
        <div className="h-full shrink-0 z-20">
          <SidebarWrapper isOpen={isSidebarOpen} onToggle={setIsSidebarOpen} />
        </div>

        {/* Scrollable Content Container */}
        <section
          className={cn(
            "relative flex-1 min-w-0 h-full flex flex-col items-center rounded-2xl border bg-card shadow-sm overflow-y-auto overflow-x-hidden transition-all duration-300 z-10",
            isSidebarOpen &&
              "blur-sm pointer-events-none select-none opacity-80",
          )}
        >
          {/* Inner Content Wrapper: Forces all child components to respect section width */}
          <div className="w-full max-w-full flex flex-col items-center px-4 py-6 sm:px-6 md:px-8 space-y-12">
            <Hero HeroData={hero} SkillsData={skills} />
            <Projects data={projects} />
            <Skills data={skills} />
            <Experience data={experience} />
            <Certifications data={certifications} />
            <About data={about} />
            <Education data={education} />
            <Contact />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
