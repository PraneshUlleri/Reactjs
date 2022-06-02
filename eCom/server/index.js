import express from 'express';
import Connection from './database/db.js';

const app = express();
const port = 5000;

Connection();

app.listen(port, () => {
  console.log('Running at' + port);
});
