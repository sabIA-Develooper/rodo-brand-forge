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
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display font-bold text-[clamp(26px,6vw,36px)] sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-6">
            Nossos Produtos
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Desenvolvemos equipamentos rodoviários sob medida para atender às necessidades específicas 
            de cada cliente, sempre com foco na qualidade e durabilidade.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-8 sm:mb-12">
          {categories.filter(category => category && category.id).map((category) => {
            const Icon = category.icon;
            
            return (
              <div key={category.id} className="category-card group bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-xl p-5 sm:p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 backdrop-blur-sm">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-3 sm:mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 shadow-sm">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary drop-shadow-sm" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-base sm:text-xl text-foreground mb-2 sm:mb-4 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-8">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2.5 sm:mr-3 flex-shrink-0 shadow-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={category.href} className="group/link block">
                  <Button variant="outline" className="w-full touch-button text-[15px] py-3 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary hover:shadow-md transition-all duration-300">
                    Ver Produtos
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-border rounded-lg p-6 sm:p-8 shadow-sm">
          <p className="text-sm sm:text-lg text-muted-foreground mb-5 sm:mb-8">
            Não encontrou o que procura? Desenvolvemos soluções personalizadas.
          </p>
          <Link to="/orcamento">
            <Button className="btn-hero text-[15px] sm:text-lg px-5 sm:px-8 py-3 sm:py-4 group hover:scale-105 transition-all duration-300">
              Solicitar Orçamento Personalizado
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}