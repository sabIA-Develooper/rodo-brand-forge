import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppFloat() {
  const whatsappNumber = '5579321830000'; // Número correto da RODOTEC
  const defaultMessage = 'Olá! Gostaria de saber mais sobre os produtos da RODOTEC.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] pointer-events-none">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="pointer-events-auto inline-flex"
      >
        <Button
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-2xl transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
          size="lg"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </a>
    </div>
  );
}