import express from 'express';
import { getAllUser, signUp, login } from '../bcontroller/user-controller';
const router = express.Router();

router.get('/user', getAllUser);
router.post('/signup', signUp);
router.post('/login', login);

export default router;
