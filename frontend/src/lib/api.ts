const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getHero() {
  const res = await fetch(`${API_URL}api/hero/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch Hero");

  return res.json();
}

export async function getAbout() {
  const res = await fetch(`${API_URL}api/about/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch About");

  return res.json();
}

export async function getSkills() {
  const res = await fetch(`${API_URL}api/skills/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch Skills");

  return res.json();
}

export async function getProjects() {
  const res = await fetch(`${API_URL}api/projects/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch Projects");

  return res.json();
}

export async function getExperience() {
  const res = await fetch(`${API_URL}api/experience/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Experience");
  }

  return res.json();
}

export async function getCertifications() {
  const res = await fetch(`${API_URL}api/certifications/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Certifications");
  }

  return res.json();
}

export async function getEducation() {
  const res = await fetch(`${API_URL}api/education/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Education");
  }

  return res.json();
}

export async function sendContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}api/contact/`, {
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

export interface Education {
  id: number;
  institution: string;
  degree: string;
  specialization: string;
  grade: string;
  start_year: number;
  end_year: number;
  location: string;
  display_order: number;
}
