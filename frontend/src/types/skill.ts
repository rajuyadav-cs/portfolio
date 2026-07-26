export interface SkillInterface {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  created_at: string;
  updated_at: string;
}

export type SkillsInterface = SkillInterface[];
