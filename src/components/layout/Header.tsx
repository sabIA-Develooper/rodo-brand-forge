import { useState } from 'react';
import { Menu, Search, Phone, Mail, MapPin, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ProductMegaMenu } from '@/components/navigation/ProductMegaMenu';

const navigation = [
  { name: 'Produtos', href: '/produtos' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Portfólio', href: '/portfolio' },
  { name: 'Representantes', href: '/representantes' },
  { name: 'Orçamento', href: '/orcamento' },
  { name: 'Contato', href: '/contato' },
  { name: 'Quem Somos', href: '/sobre' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar - Melhorado para mobile */}
      <div className="border-b bg-primary/5 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4 xl:space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+5579321830000" className="hover:text-primary transition-colors whitespace-nowrap">
                  (79) 3218-3000
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:comercial@rodotec.com.br" className="hover:text-primary transition-colors truncate">
                  comercial@rodotec.com.br
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Sergipe, Brasil</span>
              </div>
            </div>
            <div className="text-primary font-medium whitespace-nowrap">
              Atendemos todo o Brasil
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Otimizado para mobile */}
      <div className="container mx-auto px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo - Responsivo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm sm:text-base">R</span>
            </div>
            <div className="font-display font-bold text-lg sm:text-xl text-primary">
              RODOTEC
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => {
              if (item.name === 'Produtos') {
                return (
                  <button
                    key={item.name}
                    onClick={() => setProductMenuOpen(true)}
                    className={`font-medium transition-colors hover:text-primary px-2 py-1 ${
                      location.pathname.startsWith('/produtos')
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-primary px-2 py-1 ${
                    isActive(item.href)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA - Melhorado */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="h-9 w-9 p-0">
              <Search className="h-4 w-4" />
            </Button>
            <Button className="btn-hero text-sm px-4 py-2 h-9">
              Pedir Orçamento
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-1.5 lg:hidden">
            {/* Search button for mobile */}
            <Button variant="ghost" size="sm" className="h-11 w-11 p-0">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-11 w-11 p-0">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">R</span>
                      </div>
                      <div className="font-display font-bold text-xl text-primary">
                        RODOTEC
                      </div>
                    </div>
                    <button
                      aria-label="Fechar menu"
                      className="h-10 w-10 rounded-md flex items-center justify-center hover:bg-accent/60"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 px-4 py-3 sm:px-6 sm:py-4">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center font-medium transition-colors hover:text-primary p-4 rounded-lg text-[15px] ${
                            isActive(item.href)
                              ? 'text-primary bg-primary/10'
                              : 'text-muted-foreground hover:bg-accent/50'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile CTA and Contact */}
                  <div className="p-4 sm:p-6 border-t space-y-4">
                    <Button 
                      className="btn-hero w-full text-[15px] py-3" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Pedir Orçamento
                    </Button>

                    {/* Contact Info for Mobile */}
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-3 p-2">
                        <Phone className="h-5 w-5 flex-shrink-0" />
                        <a 
                          href="tel:+5579321830000" 
                          className="hover:text-primary transition-colors text-base"
                        >
                          (79) 3218-3000
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 p-2">
                        <Mail className="h-5 w-5 flex-shrink-0" />
                        <a 
                          href="mailto:comercial@rodotec.com.br" 
                          className="hover:text-primary transition-colors text-base"
                        >
                          comercial@rodotec.com.br
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 p-2">
                        <MapPin className="h-5 w-5 flex-shrink-0" />
                        <span className="text-base">Sergipe, Brasil</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Product Mega Menu */}
      <ProductMegaMenu
        isOpen={productMenuOpen}
        onClose={() => setProductMenuOpen(false)}
      />
    </header>
  );
}