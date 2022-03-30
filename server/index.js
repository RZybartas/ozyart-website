import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { port, dbConfig } from './config.js';

import authRoute from './routes/v1/auth.js';
import usersRoute from './routes/v1/users.js';
import productsRoute from './routes/v1/products.js';

const app = express();

app.use(cors());
app.use(express.json());

const main = async () => {
  try {
    //Connecting to mongo
    await mongoose.connect(dbConfig);
    console.log('DB connection successfully');

    //All routes
    app.use('/api/v1/auth', authRoute);
    app.use('/api/v1/users', usersRoute);
    app.use('/api/v1/products', productsRoute);

    //Page not found
    app.get('*', (req, res) => {
      res.status(404).send('Page not found');
    });

    // start a server on 'port'
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

main();
