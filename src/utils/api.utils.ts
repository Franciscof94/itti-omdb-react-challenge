/**
 * Generic API response interface for OMDB API
 */
export interface ApiResponse {
  Response: string;
  Error?: string;
}

/**
 * Generic function to handle API responses with proper TypeScript types
 * @template T - The response type that must extend ApiResponse
 * @param response - API response
 * @returns Validated response or throws typed error
 */
export function handleApiResponse<T extends ApiResponse>(response: T): T {
  if (response.Response === 'False') {
    throw new Error(response.Error || 'Error desconocido');
  }
  return response;
}
