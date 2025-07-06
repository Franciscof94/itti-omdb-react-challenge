import { create } from 'zustand';
import { MovieType } from '@/types/movie';

interface MovieStore {
  // Search parameters
  searchQuery: string;
  searchType: MovieType;
  currentPage: number;

  // Actions
  setSearchQuery: (query: string) => void;
  setSearchType: (type: MovieType) => void;
  setCurrentPage: (page: number) => void;
  clearSearch: () => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  // Initial state
  searchQuery: '',
  searchType: '',
  currentPage: 1,

  // Actions
  setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
  setSearchType: (type) => set({ searchType: type, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),
  clearSearch: () => set({
    searchQuery: '',
    searchType: '',
    currentPage: 1,
  }),
}));
