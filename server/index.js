import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { port, dbConfig } from './config.js';

import authRoute from './routes/v1/auth.js';
import usersRoute from './routes/v1/users.js';

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

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', usersRoute);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
