export interface IProjectState {
  selectedProject: number;
  modalIsOpen: boolean;
}
export interface IContactState {
  emailSubmitting: boolean;
  emailSubmitted: boolean;
}

export interface ITags {
  id: number;
  tag: string;
}

export interface IProject {
  id: number;
  frontImage?: string;
  modalImage?: string;
  name: string;
  about: string;
  description?: string;
  tags: ITags[];
  links?: {
    github?: string | null;
    liveExample?: string;
  };
}
