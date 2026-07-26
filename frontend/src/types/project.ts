export interface ProjectSkillInterface {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectInterface {
  id: number;
  skills: ProjectSkillInterface[];
  title: string;
  description: string;
  image: string;
  github_url: string;
  live_url: string;
  featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}
