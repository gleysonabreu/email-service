import fastify from 'fastify';

function buildServer() {
  const server = fastify();

  server.get('/', async (_request, _reply) => {
    return 'hello world';
  });

  return server;
}

export default buildServer;
