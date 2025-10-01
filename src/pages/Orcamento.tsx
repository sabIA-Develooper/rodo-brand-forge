import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { BreadcrumbNavigation } from '@/components/ui/breadcrumb-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Loader2 } from 'lucide-react';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

const formSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  empresa: z.string().optional(),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(10, 'Telefone inválido'),
  whatsapp: z.string().min(10, 'WhatsApp inválido'),
  categorias: z.array(z.string()).min(1, 'Selecione pelo menos uma categoria'),
  produtos: z.string().optional(),
  especificacoes: z.string().min(10, 'Descreva as especificações do seu projeto'),
  orcamento: z.string().optional(),
  prazo: z.string().optional(),
  contatoPreferido: z.enum(['email', 'telefone', 'whatsapp']),
});

type FormData = z.infer<typeof formSchema>;

export default function Orcamento() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categorias: [],
      contatoPreferido: 'whatsapp',
    },
  });

  const selectedCategories = watch('categorias') || [];

  const toggleCategory = (slug: string) => {
    const current = selectedCategories;
    const newValue = current.includes(slug)
      ? current.filter(c => c !== slug)
      : [...current, slug];
    setValue('categorias', newValue);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulando envio
    await new Promise(resolve => setTimeout(resolve, 2000));

    const whatsappNumber = '5579321830000';
    const message = `
*Solicitação de Orçamento - RODOTEC*

*Nome:* ${data.nome}
${data.empresa ? `*Empresa:* ${data.empresa}` : ''}
*E-mail:* ${data.email}
*Telefone:* ${data.telefone}
*WhatsApp:* ${data.whatsapp}

*Categorias de interesse:*
${data.categorias.map(c => {
  const cat = categories.find(cat => cat.slug === c);
  return `• ${cat?.name}`;
}).join('\n')}

${data.produtos ? `*Produtos específicos:* ${data.produtos}` : ''}

*Especificações:*
${data.especificacoes}

${data.orcamento ? `*Orçamento estimado:* ${data.orcamento}` : ''}
${data.prazo ? `*Prazo desejado:* ${data.prazo}` : ''}

*Contato preferido:* ${data.contatoPreferido}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: 'Solicitação enviada!',
      description: 'Redirecionando para o WhatsApp...',
    });

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  if (isSuccess) {
    return (
      <>
        <Helmet>
          <title>Orçamento Enviado | RODOTEC</title>
        </Helmet>

        <BreadcrumbNavigation items={[{ label: 'Orçamento' }]} />

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Solicitação Enviada com Sucesso!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Recebemos sua solicitação de orçamento. Nossa equipe comercial entrará em contato em breve. Você também pode falar conosco diretamente pelo WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/">Voltar para Início</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/produtos">Ver Produtos</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Solicitar Orçamento | RODOTEC</title>
        <meta 
          name="description" 
          content="Solicite um orçamento personalizado para equipamentos rodoviários. Preencha o formulário e nossa equipe entrará em contato." 
        />
      </Helmet>

      <BreadcrumbNavigation items={[{ label: 'Solicitar Orçamento' }]} />

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Solicitar Orçamento
              </h1>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe comercial entrará em contato em até 24 horas.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Dados Pessoais */}
              <Card>
                <CardHeader>
                  <CardTitle>Dados de Contato</CardTitle>
                  <CardDescription>Informe seus dados para que possamos entrar em contato</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input 
                        id="nome" 
                        {...register('nome')}
                        placeholder="Seu nome"
                      />
                      {errors.nome && (
                        <p className="text-sm text-destructive mt-1">{errors.nome.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input 
                        id="empresa" 
                        {...register('empresa')}
                        placeholder="Nome da empresa (opcional)"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        {...register('email')}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input 
                        id="telefone" 
                        {...register('telefone')}
                        placeholder="(79) 3218-3000"
                      />
                      {errors.telefone && (
                        <p className="text-sm text-destructive mt-1">{errors.telefone.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="whatsapp">WhatsApp *</Label>
                      <Input 
                        id="whatsapp" 
                        {...register('whatsapp')}
                        placeholder="(79) 99999-9999"
                      />
                      {errors.whatsapp && (
                        <p className="text-sm text-destructive mt-1">{errors.whatsapp.message}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categoria e Produtos */}
              <Card>
                <CardHeader>
                  <CardTitle>Categorias de Interesse</CardTitle>
                  <CardDescription>Selecione as categorias de produtos que você precisa *</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {categories.map((cat) => (
                      <div key={cat.slug} className="flex items-center space-x-2">
                        <Checkbox 
                          id={cat.slug}
                          checked={selectedCategories.includes(cat.slug)}
                          onCheckedChange={() => toggleCategory(cat.slug)}
                        />
                        <label
                          htmlFor={cat.slug}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {cat.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.categorias && (
                    <p className="text-sm text-destructive">{errors.categorias.message}</p>
                  )}

                  <div>
                    <Label htmlFor="produtos">Produtos Específicos (opcional)</Label>
                    <Input 
                      id="produtos" 
                      {...register('produtos')}
                      placeholder="Ex: Basculante Pesado 8x4, Baú Frigorífico"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Especificações */}
              <Card>
                <CardHeader>
                  <CardTitle>Especificações do Projeto</CardTitle>
                  <CardDescription>Descreva suas necessidades em detalhes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="especificacoes">Descrição do Projeto *</Label>
                    <Textarea 
                      id="especificacoes" 
                      {...register('especificacoes')}
                      placeholder="Descreva o que você precisa: quantidade, dimensões, materiais, aplicação, prazos, etc."
                      rows={6}
                      className="resize-none"
                    />
                    {errors.especificacoes && (
                      <p className="text-sm text-destructive mt-1">{errors.especificacoes.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="orcamento">Orçamento Estimado (opcional)</Label>
                      <Input 
                        id="orcamento" 
                        {...register('orcamento')}
                        placeholder="Ex: R$ 50.000 a R$ 80.000"
                      />
                    </div>

                    <div>
                      <Label htmlFor="prazo">Prazo Desejado (opcional)</Label>
                      <Input 
                        id="prazo" 
                        {...register('prazo')}
                        placeholder="Ex: 60 dias, Urgente, Flexível"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contato Preferido */}
              <Card>
                <CardHeader>
                  <CardTitle>Forma de Contato Preferida</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {[
                      { value: 'whatsapp', label: 'WhatsApp' },
                      { value: 'telefone', label: 'Telefone' },
                      { value: 'email', label: 'E-mail' },
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={option.value}
                          value={option.value}
                          {...register('contatoPreferido')}
                          className="h-4 w-4"
                        />
                        <label htmlFor={option.value} className="text-sm cursor-pointer">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Solicitação'
                )}
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Ao enviar este formulário, você concorda com nossa Política de Privacidade.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
