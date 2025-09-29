import { Scissors, Settings, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Scissors,
    title: 'Corte e Dobra de Chapa',
    description: 'Processamento preciso de chapas de aço carbono com equipamentos de última geração',
    features: [
      'Corte a laser e plasma',
      'Dobra de alta precisão',
      'Diferentes espessuras',
      'Acabamento industrial'
    ],
    href: '/servicos#corte-dobra'
  },
  {
    icon: Settings,
    title: 'Montagem Industrial',
    description: 'Montagem completa de estruturas e equipamentos com mão de obra especializada',
    features: [
      'Soldas certificadas',
      'Montagem in-loco',
      'Controle de qualidade',
      'Prazos garantidos'
    ],
    href: '/servicos#montagem'
  },
  {
    icon: Wrench,
    title: 'Reforma de Equipamentos',
    description: 'Revitalização e modernização de equipamentos rodoviários existentes',
    features: [
      'Diagnóstico técnico',
      'Peças originais',
      'Garantia estendida',
      'Coleta e entrega'
    ],
    href: '/servicos#reforma'
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Além da fabricação de equipamentos, oferecemos serviços completos para 
            manter sua frota sempre operacional e em perfeitas condições.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div key={index} className="premium-card group hover:shadow-hover">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link 
                  to={service.href}
                  className="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors mt-auto"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link to="/servicos">
            <Button className="btn-hero text-lg px-8 py-4">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}