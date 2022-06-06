import express from 'express';
import mongoose from 'mongoose';
import router from '../backend/broutes/user-router';
import blogrouter from './broutes/blog-router';

const app = express();
app.use(express.json());
app.use('/user', router);
app.use('/blog', blogrouter);

mongoose
  .connect(
    `mongodb+srv://admin:root121212@cluster0.3ohpo.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('db connected'))
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));
