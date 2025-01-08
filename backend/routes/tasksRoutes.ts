import Router from 'express';

import { getTasks } from '../controllers/tasks-controller';

const router = Router();

router.get('/', getTasks);

export default router;
