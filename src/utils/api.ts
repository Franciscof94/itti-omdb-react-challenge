/**
 * Generic function to handle API responses
 * @param response - API response
 * @returns Parsed data or throws error
 */
export function handleApiResponse<T>(response: { 
  Response: string; 
  Error?: string;
  [key: string]: any;
}): T {
  if (response.Response === 'False') {
    throw new Error(response.Error || 'Error desconocido');
  }
  return response as T;
}

/**
 * Generic function to create a paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  totalResults: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export function createPaginatedResponse<T>(
  data: T[],
  totalResults: number,
  currentPage: number,
  resultsPerPage: number = 10
): PaginatedResponse<T> {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  
  return {
    data,
    totalResults,
    currentPage,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
}

/**
 * Generic retry function for API calls
 */
export async function retryApiCall<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryApiCall(fn, retries - 1, delay * 2);
    }
    throw error;
  }
}
