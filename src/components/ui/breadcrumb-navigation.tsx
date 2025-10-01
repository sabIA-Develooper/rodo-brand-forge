import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNavigation({ items }: BreadcrumbNavigationProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link 
              to="/" 
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Início"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only">Início</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              {item.href && index < items.length - 1 ? (
                <Link 
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
