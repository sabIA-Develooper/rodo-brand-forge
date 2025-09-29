import { useState } from 'react';
import { Menu, Search, Phone, Mail, MapPin, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="border-b bg-primary/5 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(79) 3218-3000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>comercial@rodotec.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sergipe, Brasil</span>
              </div>
            </div>
            <div className="text-primary font-medium">
              Atendemos todo o Brasil
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">R</span>
            </div>
            <div className="font-display font-bold text-xl text-primary">
              RODOTEC
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button className="btn-hero">
              Pedir Orçamento
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">R</span>
                  </div>
                  <div className="font-display font-bold text-xl text-primary">
                    RODOTEC
                  </div>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-medium transition-colors hover:text-primary p-2 rounded ${
                        isActive(item.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <Button className="btn-hero w-full">
                  Pedir Orçamento
                </Button>

                <div className="border-t pt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>(79) 3218-3000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>comercial@rodotec.com.br</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}