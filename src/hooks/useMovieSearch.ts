import { useQuery } from '@tanstack/react-query';
import { useMovieStore } from '@/store/useMovieStore';
import { omdbService } from '@/services/omdbService';

export const useMovieSearch = (page: number = 1) => {
  const { searchQuery, searchType, shouldSearch } = useMovieStore();

  const queryResult = useQuery({
    queryKey: ['movies', searchQuery, searchType, page],
    queryFn: async () => {
      const response = await omdbService.searchMovies(
        searchQuery,
        searchType,
        page
      );

      return {
        movies: response.Search || [],
        totalResults: parseInt(response.totalResults || '0', 10),
      };
    },
    enabled: shouldSearch && !!searchQuery.trim(),
    staleTime: 5 * 60 * 1000, // 5 minutos
    retry: 2,
  });

  return {
    movies: queryResult.data?.movies || [],
    totalResults: queryResult.data?.totalResults || 0,
    error:
      queryResult.error instanceof Error ? queryResult.error.message : null,
    isLoading: queryResult.isLoading,
    refetch: queryResult.refetch,
  };
};
