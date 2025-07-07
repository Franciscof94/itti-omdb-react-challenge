import { type FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">
              ITTI<span className="text-red-500">FILMS</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Tu plataforma de búsqueda de películas y series favorita.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">
              Enlaces
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Películas
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Series
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">
              Tecnologías
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">React + TypeScript</li>
              <li className="text-gray-400">Tailwind CSS</li>
              <li className="text-gray-400">OMDB API</li>
              <li className="text-gray-400">React Query</li>
              <li className="text-gray-400">Zustand</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">
              Desarrollado por
            </h4>
            <p className="text-gray-400 text-sm mb-4">Francisco Ferraro</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
