import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use('/', (req, res, next) => {
  res.send('hey');
});
app.listen(5000);
