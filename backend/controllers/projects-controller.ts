import { NextFunction, Request, Response } from 'express';
import { Document } from 'mongoose';

import Project from '../models/project';
import HttpError from '../models/http-error';

interface IProjects extends Document {
  name: string;
  description: string;
  shortAbout: string;
  placeholderMainImage: {
    imageUrl: string;
    alt: string;
  };
  mainImage: {
    imageUrl: string;
    alt: string;
  };
  modalPlaceholderImage: {
    imageUrl: string;
    alt: string;
  };
  modalImage: {
    imageUrl: string;
    alt: string;
  };
  tags: [
    {
      tag: string;
    }
  ];
}

export const getProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let projects: [] | IProjects[];

  try {
    projects = await Project.find({});
  } catch (err) {
    const error = new HttpError(
      'Fetching projects failed. Pleasr try again later',
      500
    );
    return next(error);
  }

  res.json({
    projects: projects.map((project) => project.toObject({ getters: true })),
  });
};
