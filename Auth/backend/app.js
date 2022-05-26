const express = require('express');
const mongoose = require('mongoose');
const router = require('../backend/aroute/user-routes');
const app = express();

mongoose
  .connect(
    'mongodb+srv://admin:root121212@cluster0.b7ero.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(5000);
    console.log('db established');
  });

app.use(express.json());
app.use('/user', router);
