import mongoose from 'mongoose';
import blog from '../bmodel/blog-model';

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await blog.find();
  } catch (error) {
    return console.log(error);
  }

  if (!blogs) {
    return res.status(404).json({ message: 'no blogs left' });
  }
  return res.status(200).json({ blogs });
};

export const addBlog = async (req, res, next) => {
  const { title, description, image, userbid } = req.body;
  let existingUser;

  try {
    existingUser = await user.findById(userbid);
  } catch (error) {
    return console.log(error);
  }

  if (!existingUser) {
    return res.status(400).json({ message: 'unable to find the user' });
  }

  const newblog = new blog({
    title,
    description,
    image,
    userbid,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }

  return res.status(200).json({ newblog });
};

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  try {
    const updateBlog = await blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!updateBlog) {
    return res.status(500).json({ message: 'blogs cannot be updated' });
  }

  return res.status(200).json({ updateBlog });
};

export const getBlogById = async (req, res, next) => {
  const { title, description, image, userbid } = req.body;
  const blogId = req.params.id;
  let blogById;

  try {
    blogById = await blog.findById(blogId);
  } catch (error) {
    return console.log(error);
  }

  if (!blogById) {
    return res.status(404).json({ message: ' no blog' });
  }
  return res.status(200).json({ blogById });
};

export const deleteById = async (req, res, next) => {
  const { title, description, image, userbid } = req.body;
  const blogId = req.params.id;
  let blogById;

  try {
    blogById = await blog.findByIdAndRemove(blogId);
  } catch (error) {
    return console.log(error);
  }

  if (!blogById) {
    return res.status(500).json({ message: ' unable to delete' });
  }
  return res.status(200).json({ message: 'successfuly delete' });
};
