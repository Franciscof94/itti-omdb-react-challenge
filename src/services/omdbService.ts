import { apiClient } from '@/config/axios';
import type { MovieDetail, MovieType, SearchResponse } from '@/types/movie';
import { handleApiResponse } from '@/utils/api.utils';

export const omdbService = {
  searchMovies: async (
    title: string,
    type: MovieType = '',
    page: number = 1
  ): Promise<SearchResponse> => {
    const response = await apiClient.get<SearchResponse>('', {
      params: {
        s: title,
        type: type || undefined,
        page,
      },
    });
    return handleApiResponse(response.data);
  },

  getMovieDetail: async (imdbId: string): Promise<MovieDetail> => {
    const response = await apiClient.get<MovieDetail>('', {
      params: {
        i: imdbId,
        plot: 'full',
      },
    });
    return handleApiResponse(response.data);
  },
};
