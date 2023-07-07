import fastify from 'fastify';

import cors, { type FastifyCorsOptions } from '@fastify/cors';

import { sendEmailRoutes } from './routes/send-email';

function buildServer() {
  const server = fastify({
    logger: true,
  });

  const corsOptions: FastifyCorsOptions = {
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  };

  server.register(cors, corsOptions);

  server.get('/', async (_request, _reply) => {
    return 'hello world';
  });

  server.register(sendEmailRoutes);

  return server;
}

export default buildServer;
