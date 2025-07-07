import { useState, type FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMovieStore } from '@/store/useMovieStore';
import type { MovieType } from '@/types/movie';

export const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { searchType, setSearchType, setSearchQuery } = useMovieStore();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (type: MovieType = '') => {
    setSearchType(type);
    if (type === '') setSearchQuery('');
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') navigate('/');
  };

  const navItems: Array<{ label: string; type: MovieType }> = [
    { label: 'INICIO', type: '' },
    { label: 'PELÍCULAS', type: 'movie' },
    { label: 'SERIES', type: 'series' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavigation('')}
              className="flex items-center space-x-3"
              aria-label="Ir al inicio"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <div className="absolute inset-0 bg-red-500 rounded-xl blur-lg opacity-50"></div>
              </div>
              <h1 className="text-xl font-semibold tracking-tight">
                ITTI<span className="text-red-500">FILMS</span>
              </h1>
            </button>

            <nav className="hidden md:flex items-center space-x-8" role="navigation">
              {navItems.map((item) => (
                <button
                  key={item.type}
                  onClick={() => handleNavigation(item.type)}
                  className={`relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-red-500 after:transition-transform after:duration-200 after:origin-left text-gray-300 hover:text-white transition-colors ${
                    searchType === item.type && location.pathname === '/'
                      ? 'text-white after:scale-x-100'
                      : 'after:scale-x-0'
                  } hover:after:scale-x-100`}
                  aria-current={searchType === item.type ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
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
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40 top-[73px]"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-x-0 top-[73px] bg-black/95 backdrop-blur-xl border-b border-white/10 z-50"
            role="navigation"
            aria-label="Menú móvil"
          >
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.type}
                    onClick={() => handleNavigation(item.type)}
                    className={`text-lg font-medium text-gray-300 hover:text-white transition-colors text-left ${
                      searchType === item.type && location.pathname === '/'
                        ? 'text-white'
                        : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};