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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display font-bold text-[clamp(26px,6vw,36px)] sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-6">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Além da fabricação de equipamentos, oferecemos serviços completos para 
            manter sua frota sempre operacional e em perfeitas condições.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div key={index} className="premium-card group hover:shadow-hover mobile-padding">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl mb-3 sm:mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-base sm:text-xl text-foreground mb-2 sm:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2.5 sm:mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={service.href} className="group/link">
                  <Button variant="outline" className="w-full touch-button text-[15px] py-3 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 hover:scale-105">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
            Precisa de um serviço específico? Nossa equipe está pronta para atender suas necessidades.
          </p>
          <Link to="/contato">
            <Button className="btn-hero text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group hover:scale-105 transition-all duration-300">
              Fale Conosco
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}