import { resolve } from 'path';

import { type Either, right } from '../../errors/Either';
import { type QueueProvider } from '../../providers/queue-provider/queue-provider';

interface Request {
  to: string;
  password: string;
  passwordEncrypted: string;
}

type Response = Either<Error, Record<string, unknown>>;

export class SendEmailUseCase {
  constructor(private readonly queue: QueueProvider) {}

  async execute({
    password,
    passwordEncrypted,
    to,
  }: Request): Promise<Response> {
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

    return right({});
  }
}
