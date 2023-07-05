import { type FastifyRequest, type FastifyInstance } from 'fastify';

import { sendEmailController } from '../use-cases/send-email';

export async function sendEmailRoutes(server: FastifyInstance) {
  server.post(
    '/email',
    async (
      request: FastifyRequest<{
        Body: {
          to: string;
          password: string;
          passwordEncrypted: string;
        };
      }>,
      reply,
    ) => await sendEmailController.handle(request, reply),
  );
}
