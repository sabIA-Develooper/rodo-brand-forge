import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-rodotec-truck.png';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Caminhão RODOTEC na estrada ao pôr do sol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary-foreground font-medium text-sm">
              Equipamentos Rodoviários de Alta Qualidade
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-5xl md:text-7xl text-primary-foreground mb-6 leading-tight">
            A QUALIDADE
            <span className="block text-4xl md:text-6xl text-primary/80 mt-2">
              MOVE O BRASIL
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Há mais de duas décadas fabricando soluções sob medida para o transporte rodoviário. 
            <strong className="text-primary-foreground"> Qualidade, agilidade e inovação</strong> em cada projeto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/orcamento">
              <Button className="btn-hero text-lg px-10 py-6 group">
                Pedir Orçamento
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/produtos">
              <Button className="btn-outline-hero text-lg px-10 py-6 group">
                Ver Produtos
                <Play className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="premium-card bg-background/10 backdrop-blur-sm border border-primary-foreground/20 p-6 text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">25+</div>
              <div className="text-primary-foreground/80 font-medium text-sm">Anos de Experiência</div>
            </div>
            <div className="premium-card bg-background/10 backdrop-blur-sm border border-primary-foreground/20 p-6 text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">100%</div>
              <div className="text-primary-foreground/80 font-medium text-sm">Sob Medida</div>
            </div>
            <div className="premium-card bg-background/10 backdrop-blur-sm border border-primary-foreground/20 p-6 text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">24h</div>
              <div className="text-primary-foreground/80 font-medium text-sm">Atendimento Ágil</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}