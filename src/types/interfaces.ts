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

export interface IiMage {
  imageUrl: string;
  alt: string;
}

export interface IProject {
  id: number;
  name: string;
  about: string;
  description?: string;
  placeholderMainImage: IiMage;
  mainImage?: IiMage;
  modalPlaceholderImage: IiMage;
  modalImage?: IiMage;
  tags: ITags[];
  links?: {
    github?: string | null;
    liveExample?: string;
  };
}
