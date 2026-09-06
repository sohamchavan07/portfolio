export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  demoUrl?: string;
  date: string;
  client?: string;
  role?: string;
  longDescription?: string;
}
