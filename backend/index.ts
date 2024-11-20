import express, { NextFunction, Request, Response } from 'express';

import projectsRoutes from './routes/projectsRoutes';

import HttpError from './models/http-error';
import mongoose from 'mongoose';

const app = express();

const db: string | undefined = process.env.ATLAS_URI;
const port = process.env.PORT ?? 5000;

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/api/projects', projectsRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error: HttpError = new HttpError('Could not find this route.', 404);
  throw error;
});

if (db) {
  mongoose
    .connect(db.toString())
    .then(() => {
      app.listen(port);
    })
    .catch((err: typeof HttpError) => {
      console.error(err);
    });
} else {
  console.error('Database connection string is undefined.');
}
