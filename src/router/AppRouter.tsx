import { type FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeConfig } from './routeConfig';

const router = createBrowserRouter(routeConfig);

export const AppRouter: FC = () => <RouterProvider router={router} />;
