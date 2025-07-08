import { useCallback, type FC } from 'react';
import { SearchForm } from '@/components/molecules';
import { MovieList, Pagination } from '@/components/organisms';
import { useMovieSearch } from '@/hooks/useMovieSearch';
import { useMovieStore } from '@/store/useMovieStore';

export const SearchPage: FC = () => {
  const { currentPage, setCurrentPage } = useMovieStore();
  const { movies, totalResults, isLoading, error } =
    useMovieSearch(currentPage);


  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  return (
    <>
      <section className="relative min-h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>

        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto">
          <div className="w-full max-w-5xl mx-auto">
            <SearchForm isLoading={isLoading} />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        {movies.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Resultados de búsqueda
            </h2>
            <p className="text-gray-400">
              {totalResults} resultados encontrados
            </p>
          </div>
        )}

        <MovieList movies={movies} isLoading={isLoading} error={error} />

        {totalResults > 0 && (
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalResults={totalResults}
              onPageChange={handlePageChange}
              isLoading={isLoading}
            />
          </div>
        )}
      </section>
    </>
  );
};
