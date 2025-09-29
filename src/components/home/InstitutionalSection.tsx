import { Shield, Clock, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Shield,
    title: 'Qualidade Certificada',
    description: 'Todos os nossos equipamentos passam por rigoroso controle de qualidade, utilizando apenas materiais premium e seguindo as mais altas normas técnicas.',
    highlight: '25+ anos de experiência'
  },
  {
    icon: Clock,
    title: 'Agilidade no Atendimento',
    description: 'Entendemos a urgência do seu negócio. Por isso, mantemos processos otimizados para entregar soluções rápidas sem comprometer a qualidade.',
    highlight: 'Resposta em 24h'
  },
  {
    icon: Wrench,
    title: 'Soluções Sob Medida',
    description: 'Cada projeto é único. Desenvolvemos equipamentos personalizados que atendem exatamente às suas necessidades operacionais e orçamentárias.',
    highlight: '100% customizável'
  }
];

export function InstitutionalSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Por que escolher a
              <span className="block text-primary">RODOTEC?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Somos uma empresa sergipana especializada na fabricação de equipamentos rodoviários 
              de alta qualidade, atendendo clientes em todo o Brasil com soluções inovadoras e personalizadas.
            </p>

            <div className="space-y-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                
                return (
                  <div key={index} className="flex space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground mb-2 leading-relaxed">
                        {value.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {value.highlight}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <Link to="/sobre">
                <Button className="btn-hero text-lg px-8 py-4 group">
                  Conhecer Nossa História
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="premium-card p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground font-medium">Anos no Mercado</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground font-medium">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground font-medium">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24h</div>
                  <div className="text-sm text-muted-foreground font-medium">Tempo de Resposta</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-center">
                <p className="text-lg text-foreground italic mb-4">
                  "Na RODOTEC, transformamos necessidades em soluções. 
                  Cada equipamento é pensado para durar e performar."
                </p>
                <footer className="text-sm text-muted-foreground font-medium">
                  Equipe RODOTEC
                </footer>
              </blockquote>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}