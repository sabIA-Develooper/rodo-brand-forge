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
        {/* Sidebar Catalog - only on product pages */}
        {isProductPage && (
          <>
            {/* Desktop Sidebar */}
            <SidebarCatalog 
              className="hidden md:block"
            />
            
            {/* Mobile Catalog Toggle */}
            <Button
              onClick={() => setSidebarOpen(true)}
              className="fixed top-24 left-4 z-40 md:hidden btn-hero p-3"
            >
              <Menu className="h-4 w-4" />
            </Button>
            
            {/* Mobile Sidebar */}
            <SidebarCatalog 
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              className="md:hidden"
            />
          </>
        )}
        
        {/* Main Content */}
        <main className={`flex-1 ${isProductPage ? 'md:ml-72' : ''}`}>
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}