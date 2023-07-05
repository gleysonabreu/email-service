import { EtherealMailProvider } from './implementations/EtherealMailProvider';

const mailProvider = {
  ethereal: new EtherealMailProvider(),
};

export default mailProvider.ethereal;
