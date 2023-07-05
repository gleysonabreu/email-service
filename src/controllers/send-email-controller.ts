import { type FastifyReply, type FastifyRequest } from 'fastify';

import { type SendEmailUseCase } from '../use-cases/send-email/send-email-use-case';

export class SendEmailController {
  constructor(private readonly sendEmailUseCase: SendEmailUseCase) {}

  async handle(
    request: FastifyRequest<{
      Body: { to: string; password: string; passwordEncrypted: string };
    }>,
    reply: FastifyReply,
  ) {
    const { to, password, passwordEncrypted } = request.body;

    await this.sendEmailUseCase.execute({ to, password, passwordEncrypted });
    return reply.code(204).send();
  }
}
