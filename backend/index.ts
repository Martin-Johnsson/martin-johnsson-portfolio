import express, { NextFunction, Request, Response } from 'express';

import projectsRoutes from './routes/projectsRoutes';

import HttpError from './models/http-error';
import mongoose from 'mongoose';

const app = express();

app.use('/api/projects', projectsRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error: HttpError = new HttpError('Could not find this route.', 404);
  throw error;
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.idy5j0i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err: typeof HttpError) => {
    console.error(err);
  });
