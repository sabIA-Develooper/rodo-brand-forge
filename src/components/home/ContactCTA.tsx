import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function ContactCTA() {
  const whatsappNumber = "5579321830000";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para equipamentos rodoviários.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-4 sm:mb-6">
            Pronto para seu próximo projeto?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Nossa equipe está pronta para transformar suas necessidades em soluções sob medida. 
            Entre em contato e receba seu orçamento personalizado.
          </p>

          {/* Contact Options removidos conforme solicitação */}

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/orcamento" className="w-full sm:w-auto" aria-label="Solicitar orçamento gratuito">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 rounded-lg shadow-md transition-transform duration-200 hover:shadow-lg hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-foreground w-full sm:w-auto touch-manipulation">
                Solicitar Orçamento Gratuito
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/produtos" className="w-full sm:w-auto" aria-label="Ver nossos produtos">
              <Button
                className="bg-white text-primary hover:bg-white/90 font-semibold text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 rounded-lg shadow-md transition-transform duration-200 hover:shadow-lg hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white w-full sm:w-auto touch-manipulation"
              >
                Ver Nossos Produtos
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
}