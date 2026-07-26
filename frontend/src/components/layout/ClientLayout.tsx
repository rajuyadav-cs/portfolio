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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/bgimg.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />

      {/* Fixed Header */}
      <div className="fixed left-0 top-0 z-50 w-full">
        <Header />
      </div>

      {/* Main Dashboard Area */}
      <main
        className="
        flex
        h-screen
        gap-4
        overflow-hidden
        p-2
        pt-20
        sm:p-4
        sm:pt-20
        md:gap-6
        md:p-6
        md:pt-24
        lg:gap-8
        lg:p-8
        lg:pt-24
        "
      >
        {/* Sidebar */}
        <aside className="h-full shrink-0">
          <SidebarWrapper />
        </aside>

        {/* Scrollable Content */}
        <section
          className={cn(
            "flex min-h-0 flex-1 flex-col overflow-y-auto rounded-2xl border bg-card shadow-sm transition-all duration-300",
          )}
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
      </main>
    </div>
  );
}
