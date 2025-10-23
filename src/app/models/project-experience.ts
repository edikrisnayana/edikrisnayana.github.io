export interface ProjectExperience {
  projectName: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string | null;
  status: 'completed' | 'in-progress' | 'on-hold';
  url?: string;
  githubUrl?: string;
}
