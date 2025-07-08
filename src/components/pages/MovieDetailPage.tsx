import { type FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/templates';
import { Button } from '@/components/atoms';
import { MovieDetails } from '@/components/organisms';
import { useMovieDetail } from '@/hooks/useMovieDetail';
import { ROUTES } from '@/router/routes';

export const MovieDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: movie, isLoading, error } = useMovieDetail(id);

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="container mx-auto px-6 pt-8">
          <Button
            variant="secondary"
            onClick={() => navigate(ROUTES.HOME)}
            className="mb-4"
          >
            ← Volver
          </Button>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <svg className="animate-spin h-12 w-12 mx-auto text-blue-600" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <p className="mt-4 text-gray-600">Cargando detalles...</p>
            </div>
          </div>
        )}


        {error && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-red-400"
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
            <h3 className="mt-2 text-lg font-medium text-gray-900">Error</h3>
            <p className="mt-1 text-gray-500">
              {error instanceof Error ? error.message : 'Ocurrió un error al cargar la película'}
            </p>
            <Button
              variant="primary"
              onClick={() => navigate(ROUTES.HOME)}
              className="mt-4"
            >
              Volver al inicio
            </Button>
          </div>
        )}

       
        {movie && <MovieDetails movie={movie} />}
      </div>
    </MainLayout>
  );
};
