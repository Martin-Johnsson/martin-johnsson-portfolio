import express, { NextFunction, Request, Response } from 'express';

import projectsRoutes from './routes/projectsRoutes';

import HttpError from './models/http-error';

const app = express();

app.use('/api/projects', projectsRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error: HttpError = new HttpError('Could not find this route.', 404);
  throw error;
});

app.listen(3000, () => {
  console.log('server is running');
});
