import express from 'express';
import { getAllUser, signUp } from '../bcontroller/user-controller';
const router = express.Router();

router.get('/user', getAllUser);
router.post('/signup', signUp);
export default router;
