import { createPromptFingerprint } from "./fingerprint";
import { cacheStore } from "./store";

const CACHE_TTL = 1000 * 60 * 10;

export function buildCacheKey(userId, prompt) {
  const fingerprint = createPromptFingerprint(prompt);

  return `ai:${userId}:${fingerprint}`;
}

export async function getCachedResponse(userId, prompt) {
  const key = buildCacheKey(userId, prompt);

  return cacheStore.get(key);
}

export async function cacheResponse(userId, prompt, response) {
  if (!response) return;

  const key = buildCacheKey(userId, prompt);

  cacheStore.set(key, response, CACHE_TTL);
}