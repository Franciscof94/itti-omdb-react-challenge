import { useEffect } from 'react';
import { Input, Select } from '@/components/atoms';
import { useMovieStore } from '@/store/useMovieStore';
import { useDebounce } from '@/hooks/useDebounce';
import type { MovieType } from '@/types/movie';

interface SearchFormProps {
  onSearch: (query: string, type: MovieType) => void;
  isLoading?: boolean;
}

const typeOptions = [
  { value: '', label: 'Todos' },
  { value: 'movie', label: 'Películas' },
  { value: 'series', label: 'Series' },
];

export const SearchForm = ({ onSearch, isLoading = false }: SearchFormProps) => {
  const { searchQuery, searchType, setSearchQuery, setSearchType } = useMovieStore();
  
  const debouncedQuery = useDebounce(searchQuery, 500);
  const debouncedType = useDebounce(searchType, 500);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      onSearch(debouncedQuery.trim(), debouncedType);
    }
  }, [debouncedQuery, debouncedType, onSearch]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Input
            placeholder="Buscar películas o series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={isLoading}
          />
          {isLoading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="animate-spin h-5 w-5 text-gray-500" viewBox="0 0 24 24">
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
            </div>
          )}
        </div>
        <div className="w-full md:w-48">
          <Select
            options={typeOptions}
            value={searchType}
            onChange={(e) => setSearchType(e.target.value as MovieType)}
            disabled={isLoading}
          />
        </div>
      </div>
      {searchQuery && !debouncedQuery && (
        <p className="text-sm text-gray-500 mt-2">Escribiendo...</p>
      )}
    </div>
  );
};
