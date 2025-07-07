import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/atoms';
import type { MovieDetail } from '@/types/movie';

interface MovieDetailsProps {
  movie: MovieDetail;
}

export const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => {
  const InfoRow = ({ label, value }: { label: string; value?: string }) => {
    if (!value || value === 'N/A') return null;
    return (
      <div className="py-3 border-b border-white/10 last:border-0">
        <dt className="text-sm font-medium text-gray-400">{label}</dt>
        <dd className="mt-1 text-sm text-white">{value}</dd>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-6 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            {movie.Poster !== 'N/A' ? (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-auto"
              />
            ) : (
              <div className="aspect-[2/3] bg-gray-800 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-gray-600"
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
          </Card>
        </motion.div>

        <motion.div 
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-white">{movie.Title}</h1>
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-400">
              <span>{movie.Year}</span>
              <span className="text-gray-600">•</span>
              <span>{movie.Runtime}</span>
              <span className="text-gray-600">•</span>
              <span>{movie.Rated}</span>
            </div>
          </div>

          {movie.Plot && movie.Plot !== 'N/A' && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-2 text-white">
                Sinopsis
              </h2>
              <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
            </Card>
          )}

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-white">
              Información
            </h2>
            <dl className="divide-y divide-white/10">
              <InfoRow label="Género" value={movie.Genre} />
              <InfoRow label="Director" value={movie.Director} />
              <InfoRow label="Guión" value={movie.Writer} />
              <InfoRow label="Actores" value={movie.Actors} />
              <InfoRow label="País" value={movie.Country} />
              <InfoRow label="Idioma" value={movie.Language} />
              <InfoRow label="Fecha de estreno" value={movie.Released} />
              <InfoRow label="Premios" value={movie.Awards} />
            </dl>
          </Card>

          {movie.Ratings && movie.Ratings.length > 0 && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Calificaciones
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">
                      {movie.imdbRating}/10
                    </div>
                    <div className="text-sm text-gray-300">IMDb</div>
                    <div className="text-xs text-gray-400">
                      {movie.imdbVotes} votos
                    </div>
                  </div>
                )}
                {movie.Ratings.map((rating, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-red-500">
                      {rating.Value}
                    </div>
                    <div className="text-sm text-gray-300">{rating.Source}</div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
};
