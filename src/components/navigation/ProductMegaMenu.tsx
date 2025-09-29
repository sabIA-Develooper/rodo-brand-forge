import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

interface ProductMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProductMegaMenu({ isOpen, onClose }: ProductMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);

  const activeProducts = products.filter(product => product.category === activeCategory);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 z-50" onClick={onClose} />
      
      {/* Mega Menu */}
      <div className="fixed inset-x-0 top-0 z-50 bg-background border-b shadow-2xl">
        {/* Header */}
        <div className="border-b bg-primary/5">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h2 className="font-display font-bold text-xl text-primary">
              Nossos Produtos
            </h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8 min-h-[400px]">
            {/* Categories Sidebar */}
            <div className="w-80 border-r pr-8">
              <h3 className="font-semibold text-sm text-muted-foreground mb-4 uppercase tracking-wide">
                Categorias
              </h3>
              <nav className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = category.id === activeCategory;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'hover:bg-primary/10 text-muted-foreground hover:text-primary'
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium text-sm ${
                          isActive ? 'text-primary-foreground' : 'text-foreground'
                        }`}>
                          {category.name}
                        </div>
                        <div className={`text-xs mt-1 ${
                          isActive
                            ? 'text-primary-foreground/80'
                            : 'text-muted-foreground'
                        }`}>
                          {category.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {categories.find(c => c.id === activeCategory)?.name}
                </h3>
                <p className="text-muted-foreground">
                  {categories.find(c => c.id === activeCategory)?.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/produtos/${product.category}/${product.slug}`}
                    onClick={onClose}
                    className="group premium-card p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                      <img
                        src={product.thumb}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.summary}
                    </p>
                    <div className="space-y-1">
                      {product.bullets.slice(0, 2).map((bullet, index) => (
                        <div key={index} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>

              {activeProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Produtos em breve para esta categoria.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="border-t mt-8 pt-6 text-center">
            <Link to="/produtos" onClick={onClose}>
              <Button className="btn-hero">
                Ver Todos os Produtos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}