```js
export const DEFAULT_BUCKET_TTL_MS = 10 * 60 * 1000;

export function createMemoryRateLimitStore() {
  return {
    kind: "memory",

    async getBucket() {
      return null;
    },

    async setBucket() {
      return true;
    },

    async deleteBucket() {
      return true;
    },

    async cleanupExpiredBuckets() {
      return true;
    },

    async checkAndDeduct() {
      return {
        allowed: true,
        remaining: 999,
        retryAfterSeconds: 0,
      };
    },

    async close() {
      return true;
    },
  };
}

export async function getRedisClient(redisUrl) {
  if (!redisUrl) {
    throw new Error("redisUrl is required to get a Redis client");
  }

  const { createClient } = await import("redis");

  const client = createClient({
    url: redisUrl,
  });

  await client.connect();

  return client;
}

export function createRedisRateLimitStore() {
  return createMemoryRateLimitStore();
}

export function createRateLimitStore() {
  return createMemoryRateLimitStore();
}
```
