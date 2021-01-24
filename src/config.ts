import * as dotenv from 'dotenv';

const configFromProcess = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV: process.env.NODE_ENV,
};

export const config = { ...configFromProcess, ...dotenv.config().parsed };
