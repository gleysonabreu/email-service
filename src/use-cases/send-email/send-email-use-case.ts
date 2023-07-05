import { resolve } from 'path';

import { type QueueProvider } from '../../providers/queue-provider/queue-provider';

interface Request {
  to: string;
  password: string;
  passwordEncrypted: string;
}

export class SendEmailUseCase {
  constructor(private readonly queue: QueueProvider) {}

  async execute({ password, passwordEncrypted, to }: Request) {
    const templateFile = resolve(
      __dirname,
      '..',
      '..',
      'views',
      'email',
      'password.hbs',
    );

    const variables = {
      email: to,
      password,
      passwordEncrypted,
    };

    const data = {
      to,
      subject: 'Sua senha encriptada!',
      variables,
      path: templateFile,
    };

    await this.queue.add(data);
  }
}
