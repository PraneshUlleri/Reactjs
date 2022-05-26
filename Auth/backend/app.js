const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use('/', (req, res, next) => {
  res.send('heu');
});

mongoose
  .connect(
    'mongodb+srv://admin:root121212@cluster0.b7ero.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(5000);
    console.log('db established');
  });
