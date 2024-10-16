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
  } catch (err: unknown) {
    const error = new HttpError(
      'Fetching projects failed. Please try again later',
      500
    );
    return next(error);
  }

  res.json({
    projects: projects.map((project) => project.toObject({ getters: true })),
  });
};

export const getProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const projectId: string = req.params.projectId;

  let project: null | IProjects;

  try {
    project = await Project.findById(projectId);
  } catch (err: unknown) {
    const error = new HttpError(
      'Something went wrong, could not find project.',
      500
    );
    return next(error);
  }

  if (!project) {
    const error = new HttpError(
      `Couldn't find a project for the provided id.`,
      404
    );
    return next(error);
  }

  res.json({ project: project.toObject({ getters: true }) });
};
