import { Link } from 'react-router-dom';
import { Container, Truck, Package, Droplets, UtensilsCrossed, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 'cacambas',
    name: 'Caçambas Basculantes',
    icon: Container,
    href: '/produtos/cacambas-basculantes',
    description: 'Ideais para transporte de materiais granulados, entulho e terra',
    features: ['Alta resistência', 'Diferentes capacidades', 'Sistema hidráulico eficiente']
  },
  {
    id: 'carrocerias',
    name: 'Carrocerias',
    icon: Truck,
    href: '/produtos/carrocerias',
    description: 'Soluções completas para transporte de cargas diversas',
    features: ['Madeira tratada', 'Estrutura reforçada', 'Acabamento premium']
  },
  {
    id: 'baus',
    name: 'Baús',
    icon: Package,
    href: '/produtos/baus',
    description: 'Proteção total da carga contra intempéries',
    features: ['Isolamento térmico', 'Vedação hermética', 'Portas múltiplas']
  },
  {
    id: 'tanques',
    name: 'Tanques',
    icon: Droplets,
    href: '/produtos/tanques',
    description: 'Para transporte seguro de líquidos e combustíveis',
    features: ['Aço carbono', 'Normas técnicas', 'Válvulas especiais']
  },
  {
    id: 'food-trucks',
    name: 'Food Trucks',
    icon: UtensilsCrossed,
    href: '/produtos/food-trucks',
    description: 'Cozinhas móveis completas e funcionais',
    features: ['Layout personalizado', 'Equipamentos integrados', 'Design atrativo']
  },
  {
    id: 'plataforma-socorro',
    name: 'Auto Socorro',
    icon: Wrench,
    href: '/produtos/plataforma-socorro',
    description: 'Plataformas e guindastes para socorro rodoviário',
    features: ['Guincho hidráulico', 'Capacidade variada', 'Operação segura']
  }
];

export function ProductCategories() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos equipamentos rodoviários sob medida para atender às necessidades específicas 
            de cada cliente, sempre com foco na qualidade e durabilidade.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            
            return (
              <div key={category.id} className="category-card group">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link 
                  to={category.href}
                  className="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors"
                >
                  Ver detalhes
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link to="/produtos">
            <Button className="btn-hero text-lg px-8 py-4">
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}