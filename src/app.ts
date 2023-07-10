import { config } from './config/env';
import buildServer from './server';

const host = 'RENDER' in process.env ? `0.0.0.0` : `localhost`;

const server = buildServer();

export const main = async () => {
  try {
    await server.listen({ host, port: config.PORT });

    console.log(`Server listening on http://localhost:${config.PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();
