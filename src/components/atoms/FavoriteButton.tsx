import { type FC, useState } from 'react';
import { motion } from 'framer-motion';
import { useFavorites } from '@/hooks/useFavorites';
import type { Movie } from '@/types/movie';

interface FavoriteButtonProps {
  movie: Movie;
  className?: string;
  showAnimation?: boolean;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({
  movie,
  className = '',
  showAnimation = true,
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isAnimating, setIsAnimating] = useState(false);
  const isFav = isFavorite(movie.imdbID);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!isFav && showAnimation) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 700);
    }

    toggleFavorite(movie);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className={`p-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
        isFav
          ? 'bg-red-500/30 shadow-lg shadow-red-500/20'
          : 'bg-black/60 hover:bg-black/80'
      } ${className}`}
      aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    >
      <svg
        className={`w-6 h-6 transition-all duration-300 drop-shadow-lg ${
          isFav ? 'text-red-500 scale-110' : 'text-white'
        }`}
        fill={isFav ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={isFav ? 0 : 2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>

      {isAnimating && showAnimation && (
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full animate-ping"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              className="text-red-500"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-500 rounded-full animate-particle"
                style={
                  {
                    '--angle': `${i * 60}deg`,
                    animationDelay: `${i * 50}ms`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      )}
    </motion.button>
  );
};
