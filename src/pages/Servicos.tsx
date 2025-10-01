import { Helmet } from 'react-helmet';
import { BreadcrumbNavigation } from '@/components/ui/breadcrumb-navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Wrench, Hammer, RefreshCw, ArrowRight } from 'lucide-react';
import { FAQ } from '@/components/shared/FAQ';

const services = [
  {
    id: 'corte-dobra',
    icon: Wrench,
    title: 'Corte e Dobra de Chapa em Aço Carbono',
    description: 'Serviços especializados de corte e dobra de chapas em aço carbono com precisão e qualidade.',
    image: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Corte+e+Dobra',
    benefits: [
      'Equipamentos de última geração',
      'Precisão milimétrica no corte',
      'Dobras em diversos ângulos',
      'Atendimento de pequenos e grandes volumes',
      'Prazos competitivos',
    ],
    process: [
      'Análise do projeto e especificações técnicas',
      'Programação das máquinas CNC',
      'Corte preciso das chapas',
      'Dobra conforme desenho técnico',
      'Controle de qualidade rigoroso',
      'Embalagem e entrega',
    ],
  },
  {
    id: 'montagem-industrial',
    icon: Hammer,
    title: 'Montagem Industrial',
    description: 'Montagem completa de estruturas metálicas e equipamentos industriais com mão de obra qualificada.',
    image: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Montagem+Industrial',
    benefits: [
      'Equipe técnica especializada',
      'Montagem in loco ou em fábrica',
      'Certificação de processos de soldagem',
      'Cumprimento de normas técnicas',
      'Segurança e qualidade garantidas',
    ],
    process: [
      'Planejamento e logística',
      'Preparação de ferramental e equipamentos',
      'Montagem estrutural',
      'Processos de soldagem e fixação',
      'Testes de resistência e funcionamento',
      'Documentação e entrega técnica',
    ],
  },
  {
    id: 'reforma-equipamentos',
    icon: RefreshCw,
    title: 'Reforma de Equipamentos',
    description: 'Reforma e recondicionamento de equipamentos rodoviários para prolongar a vida útil e melhorar o desempenho.',
    image: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Reforma',
    benefits: [
      'Avaliação técnica completa',
      'Orçamento detalhado e transparente',
      'Substituição de componentes desgastados',
      'Pintura e acabamento profissional',
      'Custo-benefício excelente',
    ],
    process: [
      'Inspeção e diagnóstico inicial',
      'Elaboração de laudo técnico',
      'Aprovação do orçamento',
      'Desmontagem e limpeza',
      'Reparos, substituições e reforços',
      'Pintura, montagem final e testes',
    ],
  },
];

const faqs = [
  {
    question: 'Qual é o prazo médio para corte e dobra de chapas?',
    answer: 'O prazo varia conforme o volume e complexidade do projeto, mas geralmente trabalhamos com 5 a 10 dias úteis para projetos de pequeno a médio porte. Para grandes volumes ou projetos especiais, o prazo é acordado individualmente.',
  },
  {
    question: 'Vocês realizam montagem industrial fora de Sergipe?',
    answer: 'Sim, atendemos todo o Brasil através de nossa rede de parceiros e equipes técnicas. Entre em contato para discutir seu projeto e localização.',
  },
  {
    question: 'Qual é o processo para solicitar uma reforma de equipamento?',
    answer: 'Primeiro, realizamos uma inspeção técnica completa do equipamento. Em seguida, elaboramos um laudo detalhado com todas as intervenções necessárias e respectivos custos. Após aprovação, iniciamos o processo de reforma com prazo acordado.',
  },
  {
    question: 'Vocês fornecem garantia nos serviços prestados?',
    answer: 'Sim, todos os nossos serviços possuem garantia. O período varia conforme o tipo de serviço, sendo informado no momento da contratação. Garantia de 90 dias para corte/dobra, 6 meses para montagem e reforma estrutural.',
  },
  {
    question: 'É necessário fornecer o material ou vocês trabalham com fornecimento?',
    answer: 'Trabalhamos das duas formas. Podemos executar o serviço com material fornecido pelo cliente ou realizar o fornecimento completo (material + serviço). A escolha fica a critério do cliente.',
  },
];

export default function Servicos() {
  return (
    <>
      <Helmet>
        <title>Serviços | RODOTEC - Corte, Montagem e Reforma</title>
        <meta 
          name="description" 
          content="Serviços especializados em corte e dobra de chapas, montagem industrial e reforma de equipamentos rodoviários. Qualidade e precisão garantidas." 
        />
      </Helmet>

      <BreadcrumbNavigation items={[{ label: 'Serviços' }]} />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Serviços Especializados
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Além da fabricação de equipamentos rodoviários, oferecemos serviços especializados de corte, montagem e reforma com equipe técnica qualificada e equipamentos de ponta.
            </p>
            <Button asChild size="lg">
              <a href="/contato">Solicitar Serviço</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto rounded-xl shadow-lg"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3">Diferenciais</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3">Processo</h3>
                    <ol className="space-y-2">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                            {i + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <Button asChild>
                    <a href="/contato">
                      Solicitar Orçamento
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} subtitle="Tire suas dúvidas sobre nossos serviços" />

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Precisa de um Serviço Especializado?
          </h2>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco para discutir seu projeto. Nossa equipe técnica está pronta para atender suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="/contato">Falar com Especialista</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="https://wa.me/5579321830000" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
