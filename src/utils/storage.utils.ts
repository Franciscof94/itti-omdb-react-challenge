/**
 * Creates a type-safe storage utility with generic support
 * @template T - The type of data to store
 * @param key - Storage key
 * @returns Object with get, set, and remove methods
 *
 * @example
 * const recentSearches = createTypedStorage<string[]>('recentSearches');
 * recentSearches.set(['Batman', 'Spiderman']);
 * const searches = recentSearches.get(); // string[] | null
 */
export function createTypedStorage<T>(key: string) {
  return {
    get: (): T | null => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error(`Error reading from localStorage key "${key}":`, error);
        return null;
      }
    },
    set: (value: T): void => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error writing to localStorage key "${key}":`, error);
      }
    },
    remove: (): void => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing localStorage key "${key}":`, error);
      }
    },
  };
}

export const favoriteStorage = createTypedStorage<string[]>('favorites');
