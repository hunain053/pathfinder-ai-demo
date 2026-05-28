const cache = new Map();

export const memoryStore = {
  get(key) {
    const item = cache.get(key);

    if (!item) return null;

    if (Date.now() > item.expiry) {
      cache.delete(key);
      return null;
    }

    return item.value;
  },

  set(key, value, ttlMs = 1000 * 60 * 10) {
    cache.set(key, {
      value,
      expiry: Date.now() + ttlMs,
    });
  },

  delete(key) {
    cache.delete(key);
  },
};