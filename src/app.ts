import { config } from './config/env';
import buildServer from './server';

const server = buildServer();

export const main = async () => {
  try {
    await server.listen({ port: config.PORT });

    console.log(`Server listening on http://localhost:${config.PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();
