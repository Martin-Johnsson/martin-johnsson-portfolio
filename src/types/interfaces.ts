export interface IProjectsData {
  image?: any;
  name: string;
  about: string;
  description?: string;
  tags: string[];
  links?: {
    github?: string;
    liveExample: string;
  };
}
