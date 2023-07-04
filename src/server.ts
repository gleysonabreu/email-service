import fastify from 'fastify';

import { config } from './config/env';

const server = fastify();

server.get('/', async (_request, _reply) => {
  return 'hello world';
});

server.listen({ port: config.PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening on ${address}`);
});
