export interface ExperienceInterface {
  id: number;
  role: string;
  organization: string;
  employment_type: string;
  location: string;
  start_date: string;
  end_date: string | null;
  currently_working: boolean;
  description: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}
