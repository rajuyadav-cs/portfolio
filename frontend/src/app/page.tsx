import ClientLayout from "@/components/layout/ClientLayout";

import {
  getHero,
  getAbout,
  getSkills,
  getProjects,
  getExperience,
  getCertifications,
  getEducation,
} from "@/lib/api";

export default async function Page() {
  const [hero, about, skills, projects, experience, certifications, education] =
    await Promise.all([
      getHero(),
      getAbout(),
      getSkills(),
      getProjects(),
      getExperience(),
      getCertifications(),
      getEducation(),
    ]);

  return (
    <main className="min-h-screen bg-background">
      <ClientLayout
        hero={hero}
        about={about}
        skills={skills}
        projects={projects}
        experience={experience}
        certifications={certifications}
        education={education}
      />
    </main>
  );
}
