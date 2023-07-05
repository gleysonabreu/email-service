import Queue from 'bull';

import { config } from '../../../config/env';
import MailProvider from '../../mail-provider/index';
import { type AddProps, type QueueProvider } from '../queue-provider';

export class QueueRedis implements QueueProvider {
  private readonly queue: Queue.Queue<AddProps>;

  constructor() {
    this.queue = new Queue('mailer', {
      redis: {
        host: config.REDIS_HOST,
        port: config.REDIS_PORT,
        password: config.REDIS_PASSWORD,
        username: config.REDIS_USERNAME,
      },
    });

    this.queue.process(async (job) =>
      MailProvider.sendMail(
        job.data.to,
        job.data.subject,
        job.data.variables,
        job.data.path,
      ),
    );
  }

  async add(data: AddProps) {
    await this.queue.add(data);
  }
}
