import { useState, useEffect, type FC } from 'react';
import { motion } from 'framer-motion';
import { Input, Select, Button } from '@/components/atoms';
import { useMovieStore } from '@/store/useMovieStore';
import type { MovieType } from '@/types/movie';

interface SearchFormProps {
  isLoading?: boolean;
}

const typeOptions = [
  { value: '', label: 'Todos' },
  { value: 'movie', label: 'Películas' },
  { value: 'series', label: 'Series' },
];

export const SearchForm: FC<SearchFormProps> = ({ isLoading = false }) => {
  const { searchQuery, searchType, setSearchQuery, setSearchType, triggerSearch, clearSearch } =
    useMovieStore();
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [localType, setLocalType] = useState<MovieType>(searchType);
  useEffect(() => {
    setLocalQuery(searchQuery);
    setLocalType(searchType);
  }, [searchQuery, searchType]);

  const handleSearch = () => {
    if (localQuery.trim()) {
      setSearchQuery(localQuery);
      setSearchType(localType);
      triggerSearch();
    }
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input
              aria-label="Search for movies or series"
              placeholder="Buscar películas o series..."
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearch();
                }
              }}
              disabled={isLoading}
              className="pl-12 pr-12 bg-black/50"
            />

            {localQuery && (
              <button
                type="button"
                onClick={() => {
                  setLocalQuery('');
                  setLocalType('');
                  clearSearch();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Limpiar búsqueda"
              >
                <svg
                  className="w-5 h-5 text-gray-400 hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="md:w-40">
            <Select
              aria-label="Filter by type"
              options={typeOptions}
              value={localType}
              onChange={(e) => setLocalType(e.target.value as MovieType)}
              disabled={isLoading}
              className="bg-black/50"
            />
          </div>
          <div>
            <Button
              onClick={handleSearch}
              disabled={isLoading || !localQuery.trim()}
              variant="primary"
              size="sm"
              className="h-full w-full md:w-auto"
            >
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
