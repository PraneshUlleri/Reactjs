import Blogs from '../amodel/blog-model';

export const getAllBlogs = async (req, res, next) => {
  let allBlogs;
  try {
    allBlogs = await Blogs.find();
  } catch (error) {
    return console.log(error);
  }
  if (!allBlogs) {
    return res.status(404).json({ message: 'no blogs found' });
  }
  return res.status(200).json({ allBlogs });
};

export const addBlog = async (req, res, next) => {};
