import express from 'express';
import { getAllUser, logIn, signUp } from '../acontroller/user-controller';

const router = express.Router();

router.get('/all', getAllUser);
router.post('/signup', signUp);
router.post('/login', logIn);

export default router;
