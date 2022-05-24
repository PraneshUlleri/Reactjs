const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/userroutes');

const app = express();

mongoose
  .connect(
    'mongodb+srv://admin:root121212@cluster0.b7ero.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(5000);
    console.log('Database Connection is Established');
  })
  .catch((err) => console.log(err));
app.use(express.json());
app.use('/', router);
