import { Response, Request, NextFunction } from 'express';

import { Document } from 'mongoose';

import Task from '../models/task';
import HttpError from '../models/http-error';

interface ITask extends Document {
  taskName: string;
  description: string;
}

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let tasks: ITask[] = [];

  try {
    tasks = await Task.find({});
  } catch (err) {
    const error = new HttpError(
      'Failed to fetch current pipeline tasks. Please try again later.',
      500
    );
    return next(error);
  }

  res.json({
    tasks: tasks.map((task) => task.toObject({ getters: true })),
  });
};
