import { create } from 'zustand';
import type { MovieType } from '@/types/movie';

interface MovieStore {
  searchQuery: string;
  searchType: MovieType;
  currentPage: number;
  shouldSearch: boolean;

  setSearchQuery: (query: string) => void;
  setSearchType: (type: MovieType) => void;
  setCurrentPage: (page: number) => void;
  clearSearch: () => void;
  triggerSearch: () => void;
  resetSearch: () => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  searchQuery: '',
  searchType: '',
  currentPage: 1,
  shouldSearch: false,

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSearchType: (type) => set({ searchType: type }),
  setCurrentPage: (page) => set({ currentPage: page }),
  triggerSearch: () => set({ shouldSearch: true, currentPage: 1 }),
  resetSearch: () => set({ shouldSearch: false }),
  clearSearch: () =>
    set({
      searchQuery: '',
      searchType: '',
      currentPage: 1,
      shouldSearch: false,
    }),
}));
