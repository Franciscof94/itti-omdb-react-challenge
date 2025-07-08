import type { RouteObject } from "react-router-dom";

export type AppRoute = RouteObject;

export const ROUTES = {
  HOME: '/',
  MOVIE_DETAIL: '/movie/:id',
} as const;

export const getMovieDetailPath = (id: string) => `/movie/${id}`;
