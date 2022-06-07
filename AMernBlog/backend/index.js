import express from 'express';
import mongoose from 'mongoose';
import router from '../backend/arouter/user-router';
const app = express();

app.use(express.json());

app.use('/user', router);

mongoose
  .connect(
    `mongodb+srv://admin:root121212@cluster0.n85ze.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('db connected'))
  .then(() => app.listen(5000))
  .catch((error) => console.log(error));
