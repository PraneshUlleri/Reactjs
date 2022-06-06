import express from 'express';
import {
  addBlog,
  getAllBlogs,
  updateBlog,
} from '../bcontroller/blog-controller';
const blogrouter = express.Router();

blogrouter.get('/all', getAllBlogs);
blogrouter.post('/add', addBlog);
blogrouter.put('/update/:id', updateBlog);
export default blogrouter;
