import { useQuery } from '@tanstack/react-query';
import { omdbService } from '@/services/omdbService';

export const useMovieDetail = (imdbId: string | undefined) => {
  return useQuery({
    queryKey: ['movie', imdbId],
    queryFn: async () => {
      if (!imdbId) throw new Error('ID de película no válido');

      const response = await omdbService.getMovieDetail(imdbId);

      return response;
    },
    enabled: !!imdbId,
    staleTime: 10 * 60 * 1000, // 10 minutos
    retry: 2,
  });
};
