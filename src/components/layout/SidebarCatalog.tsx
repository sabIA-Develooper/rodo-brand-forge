import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Truck, Container, Package, Droplets, UtensilsCrossed, Wrench, Zap, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 'cacambas',
    name: 'Caçambas Basculantes',
    icon: Container,
    href: '/produtos/cacambas-basculantes',
    description: 'Para transporte de materiais granulados'
  },
  {
    id: 'carrocerias',
    name: 'Carrocerias',
    icon: Truck,
    href: '/produtos/carrocerias',
    description: 'Soluções completas para transporte'
  },
  {
    id: 'baus',
    name: 'Baús',
    icon: Package,
    href: '/produtos/baus',
    description: 'Proteção total da carga'
  },
  {
    id: 'tanques',
    name: 'Tanques',
    icon: Droplets,
    href: '/produtos/tanques',
    description: 'Para líquidos e combustíveis'
  },
  {
    id: 'food-trucks',
    name: 'Food Trucks',
    icon: UtensilsCrossed,
    href: '/produtos/food-trucks',
    description: 'Cozinhas móveis sob medida'
  },
  {
    id: 'plataforma-socorro',
    name: 'Plataforma Auto Socorro',
    icon: Wrench,
    href: '/produtos/plataforma-socorro',
    description: 'Guindastes e plataformas'
  },
  {
    id: 'novidades',
    name: 'Outros/Novidades',
    icon: Zap,
    href: '/produtos/novidades',
    description: 'Soluções inovadoras'
  }
];

interface SidebarCatalogProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export function SidebarCatalog({ isOpen = true, onClose, className }: SidebarCatalogProps) {
  const location = useLocation();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const isActive = (href: string) => location.pathname === href;
  const isProductPage = location.pathname.startsWith('/produtos');

  if (!isProductPage) return null;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "sidebar-catalog z-50 bg-card border-r shadow-lg",
        !isOpen && "md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-display font-bold text-lg text-primary">
            Catálogo de Produtos
          </h2>
          {onClose && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="md:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Categories */}
        <nav className="p-4 space-y-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const active = isActive(category.href);
            const hovered = hoveredCategory === category.id;

            return (
              <Link
                key={category.id}
                to={category.href}
                onClick={onClose}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={cn(
                  "flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group",
                  active 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "hover:bg-primary/10 text-muted-foreground hover:text-primary"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  hovered && "scale-110"
                )} />
                <div className="flex-1 min-w-0">
                  <div className={cn(
                    "font-medium text-sm",
                    active ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {category.name}
                  </div>
                  <div className={cn(
                    "text-xs mt-1 transition-colors",
                    active 
                      ? "text-primary-foreground/80" 
                      : "text-muted-foreground group-hover:text-primary/80"
                  )}>
                    {category.description}
                  </div>
                </div>
                <ChevronRight className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  active && "rotate-90",
                  hovered && "translate-x-1"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gradient-to-t from-card">
          <Button className="w-full btn-hero text-sm">
            Solicitar Orçamento
          </Button>
        </div>
      </aside>
    </>
  );
}