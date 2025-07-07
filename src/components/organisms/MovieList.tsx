import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MovieCard } from '@/components/molecules';
import { useMovieStore } from '@/store/useMovieStore';
import type { Movie } from '@/types/movie';

interface MovieListProps {
  movies: Movie[];
  isLoading?: boolean;
  error?: string | null;
}

export const MovieList: FC<MovieListProps> = ({
  movies,
  isLoading = false,
  error = null,
}) => {
  const navigate = useNavigate();
  const { shouldSearch } = useMovieStore();

  if (!shouldSearch) {
    return (
      <div className="text-center py-20">
        <svg
          className="mx-auto h-16 w-16 text-gray-600 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h3 className="text-lg font-medium text-white mb-2">
          Buscá tus películas y series favoritas
        </h3>
        <p className="text-gray-400">
          Por favor, ingresá un título para buscar películas o series
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-800 aspect-[2/3] rounded-lg mb-2" />
            <div className="h-4 bg-gray-800 rounded w-3/4 mb-1" />
            <div className="h-3 bg-gray-800 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-white">Error</h3>
        <p className="mt-1 text-gray-400">{error}</p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-20">
        <svg
          className="mx-auto h-16 w-16 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-white">
          No se encontraron resultados
        </h3>
        <p className="mt-2 text-gray-400">
          Intenta con otros términos de búsqueda
        </p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => navigate(`/movie/${movie.imdbID}`)}
        />
      ))}
    </motion.div>
  );
};
