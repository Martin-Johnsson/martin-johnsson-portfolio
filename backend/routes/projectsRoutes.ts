import Router from 'express';

import { getProjectById, getProjects } from '../controllers/projects-controller';

const router = Router();

router.get('/', getProjects);

router.get('/:projectId', getProjectById);

export default router;
