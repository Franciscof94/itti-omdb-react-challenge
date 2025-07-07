import { useState, useEffect, useCallback } from 'react';
import { createTypedStorage } from '@/utils/storage.utils';
import type { Movie } from '@/types/movie';

interface FavoriteMovie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
}

const favoritesStorage = createTypedStorage<FavoriteMovie[]>('favorites');

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);

  useEffect(() => {
    const stored = favoritesStorage.get();
    if (stored) {
      setFavorites(stored);
    }
  }, []);

  const isFavorite = useCallback(
    (imdbID: string): boolean => {
      return favorites.some((fav) => fav.imdbID === imdbID);
    },
    [favorites]
  );

  const toggleFavorite = useCallback(
    (movie: Movie) => {
      setFavorites((current) => {
        let newFavorites: FavoriteMovie[];

        if (isFavorite(movie.imdbID)) {
          newFavorites = current.filter((fav) => fav.imdbID !== movie.imdbID);
        } else {
          const favoriteMovie: FavoriteMovie = {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster,
            Year: movie.Year,
            Type: movie.Type,
          };
          newFavorites = [...current, favoriteMovie];
        }

        favoritesStorage.set(newFavorites);
        return newFavorites;
      });
    },
    [isFavorite]
  );

  const clearFavorites = useCallback(() => {
    setFavorites([]);
    favoritesStorage.remove();
  }, []);

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    clearFavorites,
    favoritesCount: favorites.length,
  };
};
