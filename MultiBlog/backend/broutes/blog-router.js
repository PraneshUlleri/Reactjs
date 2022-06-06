import express from 'express';
import {
  addBlog,
  deleteById,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from '../bcontroller/blog-controller';
const blogrouter = express.Router();

blogrouter.get('/all', getAllBlogs);
blogrouter.post('/add', addBlog);
blogrouter.put('/update/:id', updateBlog);
blogrouter.get('/:id', getBlogById);
blogrouter.delete('/delete/:id', deleteById);
export default blogrouter;
