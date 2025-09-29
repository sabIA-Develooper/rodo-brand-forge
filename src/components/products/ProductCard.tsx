import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = '5579321830000'; // Número correto da RODOTEC
  const whatsappMessage = `Olá! Gostaria de saber mais sobre o ${product.name}. ${product.summary}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="aspect-[4/3] bg-muted rounded-lg mb-3 sm:mb-4 overflow-hidden">
        <img
          src={product.thumb}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-[13px] sm:text-sm mb-3 sm:mb-4 line-clamp-2">
          {product.summary}
        </p>

        {/* Key Features */}
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-1">
          {product.bullets.slice(0, 3).map((bullet, index) => (
            <div key={index} className="flex items-start text-[13px] sm:text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2.5 sm:mr-3 flex-shrink-0" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {product.applications.slice(0, 3).map((app, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-primary/10 text-primary text-[11px] sm:text-xs font-medium rounded-full"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2.5 sm:space-y-3">
          <Button
            asChild
            className="w-full btn-hero group text-[15px] sm:text-base py-3"
          >
            <Link to={`/produtos/${product.category}/${product.slug}`}>
              Ver Detalhes
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="w-full text-[15px] sm:text-base py-3"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Pedir Orçamento
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}