import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { port, dbConfig } from './config.js';

const app = express();

app.use(cors());
app.use(express.json());

//Connecting to mongo
try {
  await mongoose.connect(dbConfig);
  console.log('DB connection successfully');
} catch (error) {
  throw new Error(error);
}

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
