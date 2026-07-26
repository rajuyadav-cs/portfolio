const API_URL = process.env.NEXT_PUBLIC_API_URL;
async function getData(endpoint: string) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}

export async function sendContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/api/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
}
export const getHero = () => getData("/api/hero/");
export const getAbout = () => getData("/api/about/");
export const getSkills = () => getData("/api/skills/");
export const getProjects = () => getData("/api/projects/");
export const getExperience = () => getData("/api/experience/");
export const getCertifications = () => getData("/api/certifications/");
export const getEducation = () => getData("/api/education/");
