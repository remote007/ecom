import { createClient } from 'redis';

export const redisClient = createClient({ url: process.env.REDIS_URL });

redisClient.connect().catch(console.error);
redisClient.on('error', (err) => console.error(`Redis Error: ${err}`));
