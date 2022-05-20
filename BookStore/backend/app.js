console.log('hello world');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./route/bookroute');

const app = express();

mongoose
  .connect(
    'mongodb+srv://admin:root121212@cluster0.egvcx.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('connection established!'))
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));

// middleware

// app.use('/', (req, res, next) => {
//   res.send('this');
// });
app.use(express.json());
app.use('/books', router);
