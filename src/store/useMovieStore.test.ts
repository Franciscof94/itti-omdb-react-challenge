import { act, renderHook } from '@testing-library/react';
import { useMovieStore } from './useMovieStore';

describe('useMovieStore', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useMovieStore());

    expect(result.current.searchQuery).toBe('');
    expect(result.current.searchType).toBe('');
    expect(result.current.currentPage).toBe(1);
    expect(result.current.shouldSearch).toBe(false);
  });

  it('should update search query', () => {
    const { result } = renderHook(() => useMovieStore());

    act(() => {
      result.current.setSearchQuery('Batman');
    });

    expect(result.current.searchQuery).toBe('Batman');
  });

  it('should clear all search state', () => {
    const { result } = renderHook(() => useMovieStore());

    act(() => {
      result.current.setSearchQuery('Batman');
      result.current.setSearchType('movie');
      result.current.setCurrentPage(3);
    });

    act(() => {
      result.current.clearSearch();
    });

    expect(result.current.searchQuery).toBe('');
    expect(result.current.searchType).toBe('');
    expect(result.current.currentPage).toBe(1);
    expect(result.current.shouldSearch).toBe(false);
  });
});
