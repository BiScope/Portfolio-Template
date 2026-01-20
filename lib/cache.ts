// Cache utility for storing Supabase data locally

const CACHE_PREFIX = 'portfolio_cache_';
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

interface CacheData<T> {
  data: T;
  timestamp: number;
}

export function getCachedData<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cached = localStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!cached) return null;
    
    const { data, timestamp }: CacheData<T> = JSON.parse(cached);
    
    // Check if cache is still valid (not expired)
    if (Date.now() - timestamp > CACHE_DURATION) {
      localStorage.removeItem(`${CACHE_PREFIX}${key}`);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error reading cache:', error);
    return null;
  }
}

export function setCachedData<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  
  try {
    const cacheData: CacheData<T> = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error writing cache:', error);
  }
}

export function clearCache(key?: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    if (key) {
      localStorage.removeItem(`${CACHE_PREFIX}${key}`);
    } else {
      // Clear all cache entries
      Object.keys(localStorage)
        .filter(k => k.startsWith(CACHE_PREFIX))
        .forEach(k => localStorage.removeItem(k));
    }
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
}
