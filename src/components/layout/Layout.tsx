import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { SidebarCatalog } from './SidebarCatalog';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  const isProductPage = location.pathname.startsWith('/produtos');

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <div className="flex flex-1 relative">
        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}