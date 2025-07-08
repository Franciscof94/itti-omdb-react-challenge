import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/templates';
import { ROUTES, type AppRoute } from './routes';
import { RootLayout } from '@/components/templates/RootLayout';
import { NotFoundPage } from '@/components/pages/NotFoundPage';

const SearchPage = lazy(() =>
  import('@/components/pages/SearchPage').then((m) => ({
    default: m.SearchPage,
  }))
);
const MovieDetailPage = lazy(() =>
  import('@/components/pages/MovieDetailPage').then((m) => ({
    default: m.MovieDetailPage,
  }))
);

export const routeConfig: AppRoute[] = [
  {
    path: ROUTES.HOME,
    element: (
      <MainLayout>
        <RootLayout />
      </MainLayout>
    ),
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <SearchPage /> },
      { path: ROUTES.MOVIE_DETAIL, element: <MovieDetailPage /> },
      { path: '*', element: <Navigate to={ROUTES.HOME} replace /> },
    ],
  },
];
