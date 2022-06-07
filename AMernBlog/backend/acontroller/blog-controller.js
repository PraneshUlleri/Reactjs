import mongoose from 'mongoose';
import Blogs from '../amodel/blog-model';
import Users from '../amodel/user-model';

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

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await Users.findById(user);
  } catch (error) {
    return console.log(error);
  }

  if (!existingUser) {
    return res.status(400).json({ message: 'user not existing' });
  }

  const newBlog = new Blogs({
    title,
    description,
    image,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    existingUser.blogs.push(newBlog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
  return res.status(200).json({ newBlog });
};

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let updatedBlog;
  try {
    updatedBlog = await Blogs.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!updatedBlog) {
    return res.status(500).json({ message: 'blogs cannot be updated' });
  }

  return res.status(200).json({ updatedBlog });
};

export const getOneBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blogId = req.params.id;
  let blogById;
  try {
    blogById = await Blogs.findById(blogId);
  } catch (error) {
    return console.log(error);
  }
  if (!blogById) {
    return res.status(404).json({ message: ' no blog' });
  }
  return res.status(200).json({ blogById });
};

export const deleteBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blogId = req.params.id;
  let blogById;
  try {
    blogById = await Blogs.findByIdAndRemove(blogId);
  } catch (error) {
    return console.log(error);
  }

  if (!blogById) {
    return res.status(500).json({ message: 'unable to delete' });
  }
  return res.status(200).json({ message: 'successfully deleted' });
};
