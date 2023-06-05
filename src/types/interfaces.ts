export interface IProjectsData {
  frontImage?: string;
  modalImage?: string;
  name: string;
  about: string;
  description?: string;
  tags: string[];
  links?: {
    github?: string | null;
    liveExample?: string;
  };
}
