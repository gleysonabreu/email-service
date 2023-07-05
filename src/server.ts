import fastify from 'fastify';

import { sendEmailRoutes } from './routes/send-email';

function buildServer() {
  const server = fastify();

  server.get('/', async (_request, _reply) => {
    return 'hello world';
  });

  server.register(sendEmailRoutes);

  return server;
}

export default buildServer;
