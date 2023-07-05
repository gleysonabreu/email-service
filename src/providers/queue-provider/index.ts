import { QueueRedis } from './implementations/QueueRedis';

const queue = {
  queueRedis: new QueueRedis(),
};

export default queue.queueRedis;
