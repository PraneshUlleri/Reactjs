import express from 'express';
import {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getOneBlog,
  updateBlog,
} from '../acontroller/blog-controller';

const blogRouter = express.Router();

blogRouter.get('/all', getAllBlogs);
blogRouter.post('/new', addBlog);
blogRouter.put('/update/:id', updateBlog);
blogRouter.get('/:id', getOneBlog);
blogRouter.delete('/delete/:id', deleteBlog);
export default blogRouter;
