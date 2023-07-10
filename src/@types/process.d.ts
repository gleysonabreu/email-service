declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    REDIS_HOST: string;
    REDIS_PORT: string;
    REDIS_PASSWORD: string;
    REDIS_USERNAME: string;
    CORS_ORIGIN: string;
    GMAIL_USER: string;
    GMAIL_PASS: string;
    GMAIL_HOST: string;
    GMAIL_PORT: number;
  }
}
