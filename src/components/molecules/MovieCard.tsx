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
    <Card hoverable onClick={onClick}>
      <div className="flex flex-col h-full">
        <div className="aspect-[2/3] relative overflow-hidden bg-gray-200">
          {movie.Poster !== 'N/A' ? (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg
                className="w-16 h-16"
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
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
            {movie.Title}
          </h3>
          <div className="mt-auto">
            <p className="text-sm text-gray-600">{movie.Year}</p>
            <span className="inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
              {movieTypeBadge[movie.Type as keyof typeof movieTypeBadge] || movie.Type}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
