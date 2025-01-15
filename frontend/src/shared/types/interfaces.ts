export interface IProjectState {
  selectedProject: number;
  modalIsOpen: boolean;
}
export interface IContactState {
  emailSubmitting: boolean;
  emailSubmitted: boolean;
}

export interface Iimage {
  imageUrl: string;
  alt: string;
}

export interface IProject {
  id: number | string;
  name: string;
  modalAbout: string;
  description?: string;
  placeholderMainImage: Iimage;
  mainImage?: Iimage;
  modalPlaceholderImage: Iimage;
  modalImage?: Iimage;
  tags: { id: number; tag: string }[];
  links?: {
    github?: string | null;
    liveExample?: string;
  };
}

export interface ITask {
  id: number;
  taskName: string;
  description: string;
}

export interface ITag {
  id: number;
  name: string;
}

export interface ILinks {
  href: string;
  icon: string;
  id: string;
}
