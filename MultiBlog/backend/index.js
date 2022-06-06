import express from 'express';
import mongoose from 'mongoose';
const app = express();

app.use('/', (req, res, next) => {
  res.send('Helo ');
});

mongoose
  .connect(
    `mongodb+srv://admin:root121212@cluster0.3ohpo.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('db connected'))
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));
