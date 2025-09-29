import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

export default function ProductDetail() {
  const { category, product: productSlug } = useParams();
  
  const product = products.find(p => p.slug === productSlug && p.category === category);
  const categoryData = categories.find(c => c.slug === category);
  
  if (!product || !categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-foreground mb-4">
            Produto não encontrado
          </h1>
          <Link to="/produtos">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos produtos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappNumber = '5579321830000'; // Número correto da RODOTEC
  const whatsappMessage = `Olá! Gostaria de solicitar orçamento para o ${product.name}. ${product.summary}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const faqs = [
    {
      question: 'Qual a garantia deste produto?',
      answer: 'Todos os nossos produtos têm garantia de 12 meses contra defeitos de fabricação.'
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo varia conforme personalização, mas geralmente fica entre 15 a 45 dias úteis.'
    },
    {
      question: 'Posso personalizar as especificações?',
      answer: 'Sim! Trabalhamos sob medida e podemos adaptar o produto às suas necessidades específicas.'
    },
    {
      question: 'Vocês oferecem manutenção?',
      answer: 'Oferecemos serviços de manutenção e reforma através de nossa rede de representantes.'
    },
    {
      question: 'Como funciona a documentação?',
      answer: 'Fornecemos toda documentação necessária para regularização junto aos órgãos competentes.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="py-3 sm:py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/produtos" className="hover:text-primary transition-colors">Produtos</Link>
            <span>/</span>
            <Link to={`/produtos/${category}`} className="hover:text-primary transition-colors truncate">
              {categoryData.name}
            </Link>
            <span>/</span>
            <span className="text-foreground truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src={product.thumb}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs sm:text-sm">
                  {categoryData.name}
                </Badge>
                <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3 sm:mb-4">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                  {product.summary}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-foreground mb-3 sm:mb-4">Principais Características:</h3>
                <div className="space-y-2 sm:space-y-3">
                  {product.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-foreground mb-3 sm:mb-4">Aplicações:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, index) => (
                    <Badge key={index} variant="outline" className="text-xs sm:text-sm">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Fixed CTA */}
              <div className="sticky top-20 sm:top-24 bg-card p-4 sm:p-6 rounded-lg border space-y-3 sm:space-y-4">
                <h3 className="font-display font-bold text-base sm:text-lg text-foreground">
                  Interesse neste produto?
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <Button asChild className="w-full btn-hero text-sm sm:text-base">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Pedir Orçamento no WhatsApp
                    </a>
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button asChild variant="outline" size="sm" className="touch-target text-xs sm:text-sm">
                      <a href="tel:+5579321830000">
                        <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Ligar
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="touch-target text-xs sm:text-sm">
                      <a href="mailto:comercial@rodotec.com.br">
                        <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        E-mail
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8">
              <TabsTrigger value="specs" className="text-xs sm:text-sm">Especificações</TabsTrigger>
              <TabsTrigger value="faqs" className="text-xs sm:text-sm">Perguntas Frequentes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specs" className="mt-6 sm:mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Especificações Técnicas</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Detalhes técnicos do {product.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex flex-col sm:flex-row sm:justify-between p-3 sm:p-4 bg-muted/50 rounded-lg">
                        <span className="font-medium text-foreground text-sm sm:text-base">{key}:</span>
                        <span className="text-muted-foreground text-sm sm:text-base mt-1 sm:mt-0">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/5 rounded-lg">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      <strong>Nota:</strong> As especificações podem ser personalizadas conforme suas necessidades. 
                      Entre em contato para detalhes específicos do seu projeto.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="faqs" className="mt-6 sm:mt-8">
              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3 sm:pb-4">
                      <CardTitle className="text-sm sm:text-base">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}