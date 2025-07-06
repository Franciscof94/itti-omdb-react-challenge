import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SearchPage } from '@/components/pages/SearchPage';
import { MovieDetailPage } from '@/components/pages/MovieDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />,
  },
  {
    path: '/movie/:id',
    element: <MovieDetailPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
