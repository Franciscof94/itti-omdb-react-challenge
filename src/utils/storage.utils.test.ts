import { favoriteStorage } from './storage.utils';

describe('Storage Utils', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  describe('favoriteStorage', () => {
    it('should return null when no favorites exist', () => {
      const favorites = favoriteStorage.get();
      expect(favorites).toBeNull();
    });

    it('should save and retrieve favorites', () => {
      const testFavorites = ['tt0372784', 'tt0468569'];
      favoriteStorage.set(testFavorites);
      
      const retrieved = favoriteStorage.get();
      expect(retrieved).toEqual(testFavorites);
    });

    it('should remove favorites', () => {
      const testFavorites = ['tt0372784'];
      favoriteStorage.set(testFavorites);
      
      favoriteStorage.remove();
      
      const retrieved = favoriteStorage.get();
      expect(retrieved).toBeNull();
    });

    it('should handle localStorage errors gracefully', () => {
      // Mock localStorage.getItem to throw an error
      const originalGetItem = localStorage.getItem;
      localStorage.getItem = jest.fn(() => {
        throw new Error('Storage error');
      });

      const favorites = favoriteStorage.get();
      expect(favorites).toBeNull();

      // Restore original function
      localStorage.getItem = originalGetItem;
    });
  });
});
