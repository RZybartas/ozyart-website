import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT;

export const dbConfig = process.env.MONGO_URL;
