import express from 'express';
const router = express.Router();

import { getUser, allUser } from '../controllers/index';
import { userValidationb } from '../middleware/validation';

router.get('/', getUser);

router.post('/', userValidationb, allUser);

export default router;
