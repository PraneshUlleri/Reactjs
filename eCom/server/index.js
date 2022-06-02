import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Defaultdata from './default.js';

const app = express();
const port = 5000;

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(port, () => {
  console.log('Running at' + port);
});
Defaultdata();
