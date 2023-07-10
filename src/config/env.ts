import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '..', '..', '.env');

dotenv.config({ path: envPath });

export const config = {
  PORT: Number(process.env.PORT) || 3333,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: Number(process.env.REDIS_PORT),
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_USERNAME: process.env.REDIS_USERNAME,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  MAIL_PROVIDERS: {
    GMAIL: {
      USER: process.env.GMAIL_USER,
      PASS: process.env.GMAIL_PASS,
      HOST: process.env.GMAIL_HOST,
      PORT: Number(process.env.GMAIL_PORT),
    },
  },
};
