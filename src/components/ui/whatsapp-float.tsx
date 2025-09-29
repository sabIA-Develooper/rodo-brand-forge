import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppFloat() {
  const whatsappNumber = '5579999999999'; // Número da RODOTEC
  const defaultMessage = 'Olá! Gostaria de saber mais sobre os produtos da RODOTEC.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        size="lg"
      >
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
}