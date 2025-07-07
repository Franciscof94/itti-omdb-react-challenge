import { type ReactNode, type FC } from 'react';
import { Header, Footer } from '@/components/organisms';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};
