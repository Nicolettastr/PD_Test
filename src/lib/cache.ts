import { ONE_DAY_MS } from "../constants/cache";

type CacheEntry<T> = {
  data: T;
  timestamp: number;
};

export function getCachedData<T>(key: string): T | null {
  const cached = localStorage.getItem(key);

  if (!cached) {
    return null;
  }

  const parsed: CacheEntry<T> = JSON.parse(cached);

  const isExpired = Date.now() - parsed.timestamp > ONE_DAY_MS;

  if (isExpired) {
    localStorage.removeItem(key);
    return null;
  }

  return parsed.data;
}

export function setCachedData<T>(key: string, data: T): void {
  const value: CacheEntry<T> = {
    data,
    timestamp: Date.now(),
  };

  localStorage.setItem(key, JSON.stringify(value));
}
