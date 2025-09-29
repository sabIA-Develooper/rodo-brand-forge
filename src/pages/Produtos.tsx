import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { SidebarCatalog } from '@/components/layout/SidebarCatalog';
import { ProductCard } from '@/components/products/ProductCard';

export default function Produtos() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Filter products by category if specified
  const filteredProducts = products.filter(product => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentCategory = category ? categories.find(c => c.slug === category) : null;
  const pageTitle = currentCategory ? currentCategory.name : 'Todos os Produtos';
  const pageDescription = currentCategory ? 
    currentCategory.description : 
    'Conheça nossa linha completa de equipamentos rodoviários';

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section py-12 sm:py-16 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-[clamp(28px,6vw,40px)] md:text-5xl mb-3 sm:mb-4">
            {pageTitle}
          </h1>
          <p className="text-base sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {pageDescription}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 h-11 text-[15px]"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="flex gap-6 sm:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <SidebarCatalog />
          </div>

          {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden fixed top-24 left-4 z-40">
            <Button
              onClick={() => setSidebarOpen(true)}
              className="btn-hero p-3"
              size="sm"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Sidebar */}
          <SidebarCatalog 
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            className="lg:hidden"
          />

          {/* Products Grid */}
          <div className="flex-1 lg:ml-80">
            {filteredProducts.length > 0 ? (
              <>
                <div className="mb-8">
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-2">
                    {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                  </h2>
                  {searchTerm && (
                    <p className="text-muted-foreground">
                      Resultados para "{searchTerm}"
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  Nenhum produto encontrado
                </h3>
                <p className="text-muted-foreground mb-8">
                  {searchTerm 
                    ? `Não encontramos produtos para "${searchTerm}"`
                    : "Não há produtos nesta categoria no momento"
                  }
                </p>
                <Button 
                  onClick={() => setSearchTerm('')}
                  variant="outline"
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}