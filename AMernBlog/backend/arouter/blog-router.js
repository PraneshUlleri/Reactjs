import express from 'express';
import { getAllBlogs } from '../acontroller/blog-controller';

const blogRouter = express.Router();

blogRouter.get('/all', getAllBlogs);

export default blogRouter;
