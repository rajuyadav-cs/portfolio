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
  return (
    <div className="relative h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/bgimg.jpg')] bg-cover bg-center opacity-30" />

      {/* Fixed Header */}
      <div className="fixed left-0 top-0 z-50 w-full">
        <Header />
      </div>

      {/* Layout after header */}
      <div className="flex h-[calc(100vh-80px)] gap-4 px-2 pb-2 sm:px-4 md:px-6 lg:px-8">
        {/* Sidebar */}
        <div className="h-full shrink-0">
          <SidebarWrapper />
        </div>

        {/* Scroll Area */}
        <section
          className="
          flex-1
          overflow-y-auto
          rounded-2xl
          border
          bg-card
          shadow-sm
          "
        >
          <Hero HeroData={hero} SkillsData={skills} />

          <Projects data={projects} />

          <Skills data={skills} />

          <Experience data={experience} />

          <Certifications data={certifications} />

          <About data={about} />

          <Education data={education} />

          <Contact />

          <Footer />
        </section>
      </div>
    </div>
  );
}
