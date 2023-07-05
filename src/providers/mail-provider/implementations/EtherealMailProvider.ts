import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { type Transporter } from 'nodemailer';

import { type MailProvider } from '../mail-provider';

class EtherealMailProvider implements MailProvider {
  private client: Transporter | undefined;

  constructor() {
    nodemailer
      .createTestAccount()
      .then((account) => {
        const transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass,
          },
        });

        this.client = transporter;
      })
      .catch((err) => {
        throw new Error(err);
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

    const message = await this.client?.sendMail({
      to,
      from: 'Ciphery <noreplay@ciphery.vercel.app>',
      subject,
      html,
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export { EtherealMailProvider };
