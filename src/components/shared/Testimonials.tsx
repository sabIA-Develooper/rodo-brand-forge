import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'João Silva',
    company: 'TransLog Transportes',
    role: 'Diretor de Operações',
    content: 'A RODOTEC entregou nossa frota de 15 caçambas basculantes com qualidade excepcional e dentro do prazo. O acabamento e a resistência dos equipamentos superaram nossas expectativas.',
  },
  {
    id: 2,
    name: 'Maria Santos',
    company: 'FoodBiz Eventos',
    role: 'Proprietária',
    content: 'Nosso food truck foi construído com atenção a cada detalhe. A equipe da RODOTEC entendeu perfeitamente nossas necessidades e criou uma cozinha móvel funcional e bonita.',
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    company: 'AgroNordeste',
    role: 'Gerente de Frota',
    content: 'Trabalhamos com a RODOTEC há 5 anos. A qualidade dos baús frigoríficos e o suporte pós-venda são excelentes. Recomendo para qualquer empresa que busca equipamentos confiáveis.',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiências reais de empresas que confiam na RODOTEC
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8 lg:p-12">
              <Quote className="h-12 w-12 text-primary/20 mb-6" />
              
              <blockquote className="text-lg lg:text-xl text-foreground/90 mb-8 leading-relaxed">
                "{current.content}"
              </blockquote>

              <div className="flex items-center gap-4 mb-8">
                {current.avatar && (
                  <img 
                    src={current.avatar} 
                    alt={current.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold text-foreground">{current.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {current.role} • {current.company}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'w-8 bg-primary' 
                          : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrevious}
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNext}
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
