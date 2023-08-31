export interface IProjectState {
  selectedProject: number;
  modalIsOpen: boolean;
}
export interface IContactState {
  emailSubmitting: boolean;
  emailSubmitted: boolean;
}

export interface IProject {
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
