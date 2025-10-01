import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BreadcrumbNavigation } from '@/components/ui/breadcrumb-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/categories';

interface PortfolioCase {
  id: string;
  title: string;
  category: string;
  tags: string[];
  thumbnail: string;
  images: string[];
  challenge: string;
  solution: string;
  results: string[];
  client: string;
}

const cases: PortfolioCase[] = [
  {
    id: 'case-1',
    title: 'Frota de 15 Caçambas Basculantes para Construtora',
    category: 'cacambas-basculantes',
    tags: ['Construção Civil', 'Grande Escala'],
    thumbnail: 'https://placehold.co/600x400/1F2A74/FFFFFF?text=Cacambas+Basculantes',
    images: [
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Imagem+1',
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Imagem+2',
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Imagem+3',
    ],
    challenge: 'Construtora regional precisava renovar sua frota de caçambas para atender crescimento de obras em três estados do Nordeste, com entrega em 60 dias.',
    solution: 'Desenvolvemos um projeto de caçambas basculantes reforçadas de 20m³, com estrutura nervurada e componentes de alta durabilidade. Estabelecemos linha de produção dedicada para garantir o prazo.',
    results: [
      'Entrega de 15 unidades em 58 dias',
      'Redução de 30% no custo de manutenção reportado após 6 meses',
      'Capacidade de carga 15% superior aos modelos anteriores',
      'Cliente ampliou contrato para mais 10 unidades',
    ],
    client: 'Construtora Regional (NE)',
  },
  {
    id: 'case-2',
    title: 'Food Truck Premiado para Rede de Cafeterias',
    category: 'food-trucks',
    tags: ['Alimentos', 'Design Personalizado'],
    thumbnail: 'https://placehold.co/600x400/1F2A74/FFFFFF?text=Food+Truck',
    images: [
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Food+Truck+1',
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Food+Truck+2',
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Food+Truck+3',
    ],
    challenge: 'Rede de cafeterias buscava expandir para eventos com food truck que refletisse identidade visual da marca e atendesse normas sanitárias rigorosas.',
    solution: 'Projetamos food truck com layout otimizado para fluxo de trabalho, revestimento em inox 304, sistema de exaustão premium e identidade visual integrada. Acompanhamento junto à vigilância sanitária.',
    results: [
      'Aprovação em todas as inspeções sanitárias na primeira tentativa',
      'Food truck premiado em festival gastronômico regional',
      'ROI atingido em 8 meses de operação',
      'Pedidos de 3 unidades adicionais pela rede',
    ],
    client: 'Rede CaféBom',
  },
  {
    id: 'case-3',
    title: 'Baús Frigoríficos para Distribuidora Farmacêutica',
    category: 'baus',
    tags: ['Farmacêutico', 'Cadeia Fria'],
    thumbnail: 'https://placehold.co/600x400/1F2A74/FFFFFF?text=Baus+Frigorificos',
    images: [
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Bau+Frio+1',
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Bau+Frio+2',
    ],
    challenge: 'Distribuidora precisava de 8 baús frigoríficos com isolamento superior para transporte de medicamentos sensíveis, atendendo ANVISA.',
    solution: 'Baús com painéis de poliuretano injetado de 80mm, sistema de monitoramento de temperatura em tempo real, portas com vedação tripla e certificação para transporte controlado.',
    results: [
      'Zero não-conformidades em auditorias ANVISA',
      'Economia de 40% em energia dos equipamentos de refrigeração',
      'Manutenção da cadeia fria por até 8 horas sem energia',
      'Contrato de manutenção preventiva por 5 anos',
    ],
    client: 'FarmaDistrib Nordeste',
  },
  {
    id: 'case-4',
    title: 'Carrocerias Graneleiras para Cooperativa Agrícola',
    category: 'carrocerias',
    tags: ['Agronegócio', 'Transporte de Grãos'],
    thumbnail: 'https://placehold.co/600x400/1F2A74/FFFFFF?text=Carrocerias+Graneleiras',
    images: [
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Graneleira+1',
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Graneleira+2',
    ],
    challenge: 'Cooperativa agrícola necessitava ampliar capacidade de transporte de soja e milho com 12 carrocerias graneleiras de alta capacidade.',
    solution: 'Carrocerias de 32m³ com laterais altas reforçadas, sistema de portas com travamento rápido, toldo lonado e piso com tratamento anti-corrosão para longa durabilidade.',
    results: [
      'Aumento de 35% na capacidade de transporte da cooperativa',
      'Redução de 20% no tempo de carga/descarga',
      'Vida útil estimada em 15+ anos com manutenção adequada',
      'Expansão para 20 unidades no ano seguinte',
    ],
    client: 'Cooperativa AgroUnida',
  },
  {
    id: 'case-5',
    title: 'Plataformas de Auto Socorro para Rede de Guincho',
    category: 'plataforma-auto-socorro',
    tags: ['Guincho', 'Resgate Veicular'],
    thumbnail: 'https://placehold.co/600x400/1F2A74/FFFFFF?text=Plataforma+Socorro',
    images: [
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Plataforma+1',
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Plataforma+2',
    ],
    challenge: 'Rede de guinchos precisava modernizar frota com 6 plataformas de última geração para atender contratos com seguradoras.',
    solution: 'Plataformas prancha hidráulica de 7m com sistema tilt-and-slide, controles eletrônicos, iluminação LED completa e capacidade para veículos até 3,5 toneladas.',
    results: [
      'Redução de 50% no tempo médio de resgate',
      'Aprovação em certificação de seguradoras nacionais',
      'Zero acidentes em 12 meses de operação',
      'Renovação de contratos com 3 seguradoras',
    ],
    client: 'RapidSocorro 24h',
  },
  {
    id: 'case-6',
    title: 'Tanques Multi-Compartimento para Transportadora',
    category: 'tanques',
    tags: ['Combustível', 'Transporte'],
    thumbnail: 'https://placehold.co/600x400/1F2A74/FFFFFF?text=Tanques',
    images: [
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Tanque+1',
      'https://placehold.co/800x600/1F2A74/FFFFFF?text=Tanque+2',
    ],
    challenge: 'Transportadora de combustíveis buscava 5 tanques multi-compartimento para otimizar rotas e atender diferentes produtos simultaneamente.',
    solution: 'Tanques com 4 compartimentos independentes em aço carbono, sistema de válvulas normatizado, respiros de segurança e aterramento conforme legislação ANP.',
    results: [
      'Aprovação ANP em todas as inspeções',
      'Otimização de 40% nas rotas de entrega',
      'Redução de custos operacionais em 25%',
      'Pedido de 8 unidades adicionais',
    ],
    client: 'TransCombust Logística',
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<PortfolioCase | null>(null);

  const filteredCases = selectedCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Portfólio | RODOTEC - Cases de Sucesso</title>
        <meta 
          name="description" 
          content="Conheça nossos cases de sucesso em fabricação de equipamentos rodoviários. Projetos realizados com qualidade e excelência para clientes em todo o Brasil." 
        />
      </Helmet>

      <BreadcrumbNavigation items={[{ label: 'Portfólio' }]} />

      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Portfólio de Projetos
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Conheça alguns dos projetos que desenvolvemos para empresas de diversos segmentos. Cada case reflete nosso compromisso com qualidade, prazo e satisfação do cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border bg-background sticky top-[73px] z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              size="sm"
            >
              Todos ({cases.length})
            </Button>
            {categories.map((cat) => {
              const count = cases.filter(c => c.category === cat.slug).length;
              return (
                <Button
                  key={cat.slug}
                  variant={selectedCategory === cat.slug ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat.slug)}
                  size="sm"
                >
                  {cat.name} ({count})
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCases.map((item) => (
              <Card 
                key={item.id} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedCase(item)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex flex-wrap gap-2 justify-end">
                    {item.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.challenge}
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto">
                    Ver case completo →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Dialog */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCase && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedCase.title}</DialogTitle>
                <DialogDescription className="text-base">
                  Cliente: {selectedCase.client}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Images Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCase.images.map((img, i) => (
                    <img 
                      key={i}
                      src={img} 
                      alt={`${selectedCase.title} - Imagem ${i + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  ))}
                </div>

                {/* Challenge */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Desafio</h3>
                  <p className="text-muted-foreground">{selectedCase.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Solução</h3>
                  <p className="text-muted-foreground">{selectedCase.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Resultados</h3>
                  <ul className="space-y-2">
                    {selectedCase.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold flex-shrink-0">✓</span>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button asChild className="flex-1">
                    <a href="/orcamento">Solicitar Orçamento</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="/contato">Falar com Especialista</a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
