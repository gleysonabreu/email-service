import { SendEmailController } from '../../controllers/send-email-controller';
import Queue from '../../providers/queue-provider/index';
import { SendEmailUseCase } from './send-email-use-case';

const sendEmailUseCase = new SendEmailUseCase(Queue);
const sendEmailController = new SendEmailController(sendEmailUseCase);

export { sendEmailController };
