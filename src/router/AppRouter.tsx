import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { MainLayout } from '@/components/templates';

const SearchPage = lazy(() =>
  import('@/components/pages/SearchPage').then((module) => ({
    default: module.SearchPage,
  }))
);

const MovieDetailPage = lazy(() =>
  import('@/components/pages/MovieDetailPage').then((module) => ({
    default: module.MovieDetailPage,
  }))
);

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <svg
        className="animate-spin h-12 w-12 mx-auto text-red-600"
        viewBox="0 0 24 24"
      >
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
      <p className="mt-4 text-gray-400">Cargando...</p>
    </div>
  </div>
);

const RootLayout = () => (
  <Suspense fallback={<PageLoader />}>
    <Outlet />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <MainLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">404</h1>
            <p className="text-gray-400 mb-8">Página no encontrada</p>
            <a
              href="/"
              role="button"
              aria-label="Volver a la página principal"
              className="text-red-600 hover:text-red-500"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetailPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
