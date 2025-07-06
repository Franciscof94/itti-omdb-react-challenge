import { useQuery } from '@tanstack/react-query';
import { useMovieStore } from '@/store/useMovieStore';
import { omdbService } from '@/services/omdbService';

export const useMovieSearch = (page: number = 1) => {
  const { searchQuery, searchType } = useMovieStore();

  const queryResult = useQuery({
    queryKey: ['movies', searchQuery, searchType, page],
    queryFn: async () => {
      const response = await omdbService.searchMovies(
        searchQuery,
        searchType,
        page
      );

      if (response.Response === 'False') {
        throw new Error(response.Error || 'No se encontraron resultados');
      }

      return {
        movies: response.Search || [],
        totalResults: parseInt(response.totalResults || '0'),
      };
    },
    enabled: !!searchQuery.trim(),
    staleTime: 5 * 60 * 1000, // 5 minutos
    retry: 2,
  });

  return {
    movies: queryResult.data?.movies || [],
    totalResults: queryResult.data?.totalResults || 0,
    error: queryResult.error?.message || null,
    isLoading: queryResult.isLoading,
    refetch: queryResult.refetch,
  };
};
