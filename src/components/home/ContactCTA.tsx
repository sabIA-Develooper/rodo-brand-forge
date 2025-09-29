import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function ContactCTA() {
  const whatsappNumber = "5579321830000";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para equipamentos rodoviários.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
            Pronto para seu próximo projeto?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Nossa equipe está pronta para transformar suas necessidades em soluções sob medida. 
            Entre em contato e receba seu orçamento personalizado.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <a 
              href="tel:+5579321830000"
              className="premium-card bg-background/10 backdrop-blur-sm border border-primary-foreground/20 p-6 text-center hover:bg-background/20 transition-all duration-300 group"
            >
              <Phone className="h-8 w-8 text-primary-foreground mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
                Ligue Agora
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                (79) 3218-3000
              </p>
            </a>

            {/* Email */}
            <a 
              href="mailto:comercial@rodotec.com.br"
              className="premium-card bg-background/10 backdrop-blur-sm border border-primary-foreground/20 p-6 text-center hover:bg-background/20 transition-all duration-300 group"
            >
              <Mail className="h-8 w-8 text-primary-foreground mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
                E-mail
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                comercial@rodotec.com.br
              </p>
            </a>

            {/* WhatsApp */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card bg-background/10 backdrop-blur-sm border border-primary-foreground/20 p-6 text-center hover:bg-background/20 transition-all duration-300 group"
            >
              <MessageCircle className="h-8 w-8 text-primary-foreground mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Conversar agora
              </p>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orcamento">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4 text-lg group">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg"
              >
                Falar Conosco
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-foreground mb-1">25+</div>
                <div className="text-sm text-primary-foreground/80">Anos no Mercado</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground mb-1">24h</div>
                <div className="text-sm text-primary-foreground/80">Tempo de Resposta</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground mb-1">100%</div>
                <div className="text-sm text-primary-foreground/80">Sob Medida</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground mb-1">SE</div>
                <div className="text-sm text-primary-foreground/80">Todo o Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}