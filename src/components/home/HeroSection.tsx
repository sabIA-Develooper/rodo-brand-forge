import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-rodotec-truck.png';

export function HeroSection() {
  return (
    <section className="relative min-h-[72vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Caminhão RODOTEC na estrada ao pôr do sol"
          className="w-full h-full object-cover object-center sm:object-right-center"
          loading="eager"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40 sm:from-black/70 sm:via-black/40 sm:to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-12">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-2 sm:px-4 mb-3 sm:mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary-foreground font-medium text-[11px] sm:text-sm">
              Equipamentos Rodoviários de Alta Qualidade
            </span>
          </div>

          {/* Main Headline - Responsivo */}
          <h1 className="font-display font-bold text-[clamp(28px,6vw,40px)] md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mb-3 sm:mb-6 leading-tight">
            A QUALIDADE
            <span className="block text-[clamp(20px,5vw,32px)] md:text-4xl lg:text-5xl xl:text-6xl text-primary/80 mt-1 sm:mt-2">
              MOVE O BRASIL
            </span>
          </h1>

          {/* Subtitle - Responsivo */}
          <p className="text-[15px] sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-5 sm:mb-8 max-w-2xl leading-relaxed">
            Há mais de duas décadas fabricando soluções sob medida para o transporte rodoviário. 
            <strong className="text-primary-foreground"> Qualidade, agilidade e inovação</strong> em cada projeto.
          </p>

          {/* CTA Buttons - Melhorados para mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Link to="/orcamento" className="w-full sm:w-auto">
              <Button className="btn-hero text-[15px] sm:text-lg px-5 sm:px-10 py-3.5 sm:py-5 group w-full sm:w-auto">
                Pedir Orçamento
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/produtos" className="w-full sm:w-auto">
              <Button className="btn-outline-hero text-[15px] sm:text-lg px-5 sm:px-10 py-3.5 sm:py-5 group w-full sm:w-auto">
                Ver Produtos
                <Play className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
              </Button>
            </Link>
          </div>


        </div>
      </div>

      {/* Scroll Indicator - Oculto em mobile muito pequeno */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}