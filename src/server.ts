import fastify from 'fastify';

import cors, { type FastifyCorsOptions } from '@fastify/cors';

import { config } from './config/env';
import { sendEmailRoutes } from './routes/send-email';

function buildServer() {
  const server = fastify({
    logger: true,
  });

  const corsOptions: FastifyCorsOptions = {
    credentials: true,
    origin: (origin, callback) => {
      if (origin?.includes(config.CORS_ORIGIN)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed'), false);
      }
    },
  };

  server.register(cors, corsOptions);

  server.get('/', async (_request, _reply) => {
    return 'hello world';
  });

  server.register(sendEmailRoutes);

  return server;
}

export default buildServer;
