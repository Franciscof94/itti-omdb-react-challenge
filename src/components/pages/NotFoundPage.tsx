import React from 'react';
import { MainLayout } from '@/components/templates';
import { ROUTES } from '@/router/routes';

export const NotFoundPage: React.FC = () => (
  <MainLayout>
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-400 mb-8">Página no encontrada</p>
        <a
          href={ROUTES.HOME}
          role="button"
          aria-label="Volver a la página principal"
          className="text-red-600 hover:text-red-500"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  </MainLayout>
);
