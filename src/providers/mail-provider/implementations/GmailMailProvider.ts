import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { type Transporter } from 'nodemailer';

import { config } from '../../../config/env';
import { type MailProvider } from '../mail-provider';

class GMailMailProvider implements MailProvider {
  private readonly client: Transporter | undefined;

  constructor() {
    this.client = nodemailer.createTransport({
      host: config.MAIL_PROVIDERS.GMAIL.HOST,
      port: config.MAIL_PROVIDERS.GMAIL.PORT,
      auth: {
        user: config.MAIL_PROVIDERS.GMAIL.USER,
        pass: config.MAIL_PROVIDERS.GMAIL.PASS,
      },
    });
  }

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string,
  ): Promise<void> {
    const templateFileContent = (await fs.promises.readFile(path)).toString(
      'utf-8',
    );
    const templateParse = handlebars.compile(templateFileContent);
    const html = templateParse(variables);

    await this.client?.sendMail({
      to,
      from: 'Ciphery <noreplay@ciphery.vercel.app>',
      subject,
      html,
    });
  }
}

export { GMailMailProvider };
