import { Card } from '@/components/atoms';
import type { Movie } from '@/types/movie';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const movieTypeBadge = {
    movie: 'Película',
    series: 'Serie',
  };

  return (
    <Card hoverable onClick={onClick} className="group relative">
      <div className="aspect-[2/3] relative overflow-hidden bg-gray-800">
        {movie.Poster !== 'N/A' ? (
          <>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z"
              />
            </svg>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-red-600 rounded-full p-4 shadow-2xl">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-semibold text-white line-clamp-1 mb-1">
          {movie.Title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-300">{movie.Year}</p>
          <span className="px-2 py-1 text-xs font-medium rounded bg-red-600 text-white">
            {movieTypeBadge[movie.Type as keyof typeof movieTypeBadge] ||
              movie.Type}
          </span>
        </div>
      </div>
    </Card>
  );
};
