import { type ReactNode, useState } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <div className="absolute inset-0 bg-red-500 rounded-xl blur-lg opacity-50"></div>
              </div>
              <h1 className="text-xl font-semibold tracking-tight">
                ITTI<span className="text-red-500">FILMS</span>
              </h1>
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                INICIO
              </a>
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                PELÍCULAS
              </a>
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                SERIES
              </a>
            </nav>

            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40 top-[73px]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[73px] bg-black/95 backdrop-blur-xl border-b border-white/10 z-50">
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                <a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Películas
                </a>
                <a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Series
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20">{children}</main>

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
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
