export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  thumb: string;
  summary: string;
  bullets: string[];
  applications: string[];
  specs: Record<string, string>;
}

export const products: Product[] = [
  // Caçambas Basculantes
  {
    id: 'basculante-leve-6x2',
    name: 'Basculante Leve 6x2',
    slug: 'basculante-leve-6x2',
    category: 'cacambas-basculantes',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Basculante+Leve+6x2',
    summary: 'Caçamba leve para obras urbanas e materiais a granel.',
    bullets: [
      'Até ~15 m³',
      'Pistão frontal, descarga rápida',
      'Chapa aço carbono com reforços em pontos críticos'
    ],
    applications: ['Areia e brita', 'Entulho', 'Obras urbanas'],
    specs: {
      'Volume': '~15 m³',
      'Material': 'Aço carbono',
      'Acabamento': 'Pintura PU',
      'Acionamento': 'Hidráulico'
    }
  },
  {
    id: 'basculante-pesado-8x4',
    name: 'Basculante Pesado 8x4',
    slug: 'basculante-pesado-8x4',
    category: 'cacambas-basculantes',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Basculante+Pesado+8x4',
    summary: 'Projeto reforçado para alta demanda e ciclos intensos.',
    bullets: [
      'Estrutura nervurada',
      'Longarinas U reforçadas',
      'Componentes de alta durabilidade'
    ],
    applications: ['Mineração', 'Construção pesada', 'Transporte de agregados'],
    specs: {
      'Volume': '25–30 m³',
      'Material': 'Aço AR reforçado',
      'Acionamento': 'Hidráulico',
      'Opcionais': 'Protetores e lameiros'
    }
  },
  {
    id: 'basculante-meia-cana',
    name: 'Basculante Meia-Cana (Semi)',
    slug: 'basculante-meia-cana',
    category: 'cacambas-basculantes',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Basculante+Meia-Cana',
    summary: 'Formato meia-cana que reduz aderência do material.',
    bullets: [
      'Escoamento facilitado',
      'Menor retenção de carga',
      'Ideal para grãos úmidos'
    ],
    applications: ['Agronegócio', 'Terraplanagem', 'Grãos úmidos'],
    specs: {
      'Volume': '~25 m³',
      'Material': 'Aço carbono',
      'Suspensão': 'Compatível com 2 ou 3 eixos'
    }
  },
  {
    id: 'graneleiro-basculante',
    name: 'Graneleiro Basculante',
    slug: 'graneleiro-basculante',
    category: 'cacambas-basculantes',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Graneleiro+Basculante',
    summary: 'Basculante otimizado para grãos e carga volumosa.',
    bullets: [
      'Laterais com travamento rápido',
      'Toldos/lonas opcionais',
      'Piso com alta resistência'
    ],
    applications: ['Soja', 'Milho', 'Farelos'],
    specs: {
      'Volume': '20–25 m³',
      'Material': 'Aço carbono',
      'Opcionais': 'Toldo lonado, escadas, protetores'
    }
  },
  {
    id: 'basculante-canavieiro',
    name: 'Basculante Canavieiro',
    slug: 'basculante-canavieiro',
    category: 'cacambas-basculantes',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Basculante+Canavieiro',
    summary: 'Reforçado para operações canavieiras.',
    bullets: [
      'Tratamento anti-corrosão',
      'Estrutura para alto ciclo',
      'Facilidade de limpeza'
    ],
    applications: ['Cana de açúcar', 'Bagaço', 'Biomassa'],
    specs: {
      'Volume': 'Alta capacidade',
      'Material': 'Aço carbono',
      'Acabamento': 'Proteção anticorrosiva'
    }
  },

  // Carrocerias
  {
    id: 'carroceria-carga-seca-metalica',
    name: 'Carroceria Carga Seca (Metálica)',
    slug: 'carroceria-carga-seca-metalica',
    category: 'carrocerias',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Carroceria+Carga+Seca',
    summary: 'Versátil e robusta para diversas cargas unitizadas.',
    bullets: [
      'Pontos de amarração múltiplos',
      'Ripamento reforçado',
      'Guarda-lamas e para-barro'
    ],
    applications: ['Paletizados', 'Construção', 'Atacado/distrib.'],
    specs: {
      'Comprimentos': 'Sob medida',
      'Material': 'Aço/compósito'
    }
  },
  {
    id: 'carroceria-grade-baixa',
    name: 'Carroceria Grade Baixa',
    slug: 'carroceria-grade-baixa',
    category: 'carrocerias',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Carroceria+Grade+Baixa',
    summary: 'Facilita carga/descarga e amarração lateral.',
    bullets: [
      'Grades removíveis',
      'Piso antiderrapante',
      'Opção em aço ou madeira tratada'
    ],
    applications: ['Agrícola', 'Varejo', 'Mudanças'],
    specs: {
      'Comprimentos': 'Sob medida',
      'Material': 'Aço/compósito'
    }
  },
  {
    id: 'carroceria-graneleira',
    name: 'Carroceria Graneleira',
    slug: 'carroceria-graneleira',
    category: 'carrocerias',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Carroceria+Graneleira',
    summary: 'Laterais altas para cargas volumosas a granel.',
    bullets: [
      'Travessas reforçadas',
      'Portas com travamento seguro',
      'Lona opcional'
    ],
    applications: ['Grãos', 'Farelos', 'Recicláveis'],
    specs: {
      'Material': 'Aço carbono',
      'Opcionais': 'Toldo lonado'
    }
  },
  {
    id: 'carroceria-florestal',
    name: 'Carroceria Madeireira/Florestal',
    slug: 'carroceria-florestal',
    category: 'carrocerias',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Carroceria+Florestal',
    summary: 'Desenvolvida para toras e madeira beneficiada.',
    bullets: [
      'Cavaletes/bolsões para estacas',
      'Proteção de cabine',
      'Reforços estruturais'
    ],
    applications: ['Florestal', 'Serrarias'],
    specs: {
      'Material': 'Aço reforçado',
      'Proteção': 'Cabine e vidros'
    }
  },
  {
    id: 'plataforma-carga-leve',
    name: 'Plataforma de Carga Leve com Rampa',
    slug: 'plataforma-carga-leve',
    category: 'carrocerias',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Plataforma+Carga+Leve',
    summary: 'Plataforma com rampas traseiras para máquinas leves.',
    bullets: [
      'Sistema de rampa assistido',
      'Piso xadrez',
      'Amarrações distribuídas'
    ],
    applications: ['Equipamentos leves', 'Jardinagem', 'Motos/ATVs'],
    specs: {
      'Rampa': 'Assistida hidráulica',
      'Piso': 'Chapa xadrez'
    }
  },

  // Baús
  {
    id: 'bau-seco',
    name: 'Baú Seco',
    slug: 'bau-seco',
    category: 'baus',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Bau+Seco',
    summary: 'Transporte protegido contra intempéries.',
    bullets: [
      'Chapas galvanizadas ou alumínio',
      'Perfis com tratamento anticorrosivo',
      'Iluminação LED'
    ],
    applications: ['E-commerce', 'Atacado', 'Farmacêuticos não sensíveis'],
    specs: {
      'Material': 'Galvanizado/Alumínio',
      'Iluminação': 'LED 12V'
    }
  },
  {
    id: 'bau-frigorifico',
    name: 'Baú Frigorífico',
    slug: 'bau-frigorifico',
    category: 'baus',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Bau+Frigorifico',
    summary: 'Isolamento térmico para cadeia fria.',
    bullets: [
      'Painéis PU/EPS',
      'Portas com vedação reforçada',
      'Compatível com agregados de refrigeração'
    ],
    applications: ['Alimentos', 'Fármacos', 'Florais'],
    specs: {
      'Isolamento': 'PU/EPS',
      'Temperatura': 'até -20°C (varia por agregado)'
    }
  },
  {
    id: 'sider-cortina',
    name: 'Sider (Cortina Deslizante)',
    slug: 'sider-cortina',
    category: 'baus',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Sider+Cortina',
    summary: 'Acesso lateral rápido para carga e descarga.',
    bullets: [
      'Estrado e travessas reforçados',
      'Cintas/fechos de alta resistência',
      'Personalização visual'
    ],
    applications: ['Bebidas', 'Bens de consumo', 'Logística urbana'],
    specs: {
      'Abertura': 'Lateral deslizante',
      'Material': 'Lona PVC'
    }
  },
  {
    id: 'furgao-aluminio',
    name: 'Furgão Alumínio',
    slug: 'furgao-aluminio',
    category: 'baus',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Furgao+Aluminio',
    summary: 'Construção leve para melhor economia de combustível.',
    bullets: [
      'Menor tara',
      'Acabamento premium',
      'Piso com tratamento antiderrapante'
    ],
    applications: ['Distribuição leve', 'Serviços', 'Mudanças'],
    specs: {
      'Material': 'Liga de alumínio',
      'Peso': 'Tara reduzida'
    }
  },
  {
    id: 'furgao-composito',
    name: 'Furgão Compósito',
    slug: 'furgao-composito',
    category: 'baus',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Furgao+Composito',
    summary: 'Painéis compósitos de alta rigidez e baixa manutenção.',
    bullets: [
      'Ótima relação peso/rigidez',
      'Isolamento acústico',
      'Superfície lisa para branding'
    ],
    applications: ['Eletro/eletrônicos', 'Móveis', 'E-commerce'],
    specs: {
      'Material': 'Painéis compósitos',
      'Isolamento': 'Acústico'
    }
  },

  // Tanques
  {
    id: 'tanque-combustivel',
    name: 'Tanque Combustível (Multi-compartimento)',
    slug: 'tanque-combustivel',
    category: 'tanques',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Tanque+Combustivel',
    summary: 'Projeto para combustíveis com segurança e segregação.',
    bullets: [
      'Compartimentos independentes',
      'Válvulas e respiros normatizados',
      'Aterramento e sistemas de segurança'
    ],
    applications: ['Diesel', 'Gasolina', 'Etanol'],
    specs: {
      'Material': 'Aço carbono ou inox',
      'Normas': 'Atender legislações vigentes'
    }
  },
  {
    id: 'tanque-agua-potavel',
    name: 'Tanque Água Potável (Inox 304)',
    slug: 'tanque-agua-potavel',
    category: 'tanques',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Tanque+Agua+Potavel',
    summary: 'Para distribuição de água com requisitos sanitários.',
    bullets: [
      'Inox 304',
      'Acabamento sanitário',
      'Bocas de visita e registros adequados'
    ],
    applications: ['Abastecimento', 'Eventos', 'Defesa Civil'],
    specs: {
      'Material': 'Inox 304',
      'Acabamento': 'Sanitário'
    }
  },
  {
    id: 'tanque-quimico',
    name: 'Tanque Químico (Inox 316/Revestido)',
    slug: 'tanque-quimico',
    category: 'tanques',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Tanque+Quimico',
    summary: 'Adequado a produtos químicos e corrosivos.',
    bullets: [
      'Inox 316 ou revestimento interno',
      'Selagens e juntas específicas',
      'Monitoramento de pressão'
    ],
    applications: ['Químicos', 'Saneantes', 'Indústria'],
    specs: {
      'Material': 'Inox 316 ou revestido',
      'Pressão': 'Monitoramento'
    }
  },
  {
    id: 'tanque-pipa-obras',
    name: 'Pipa para Obras',
    slug: 'tanque-pipa-obras',
    category: 'tanques',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Pipa+Obras',
    summary: 'Tanque com motobomba para umectação e serviços.',
    bullets: [
      'Motobomba instalada',
      'Aspersores e mangueiras',
      'Estrutura reforçada'
    ],
    applications: ['Terraplanagem', 'Construção', 'Estradas'],
    specs: {
      'Bomba': 'Motobomba instalada',
      'Aspersão': 'Sistema completo'
    }
  },

  // Food Trucks
  {
    id: 'food-truck-bau-adaptado',
    name: 'Food Truck Baú Adaptado',
    slug: 'food-truck-bau-adaptado',
    category: 'food-trucks',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Food+Truck+Bau',
    summary: 'Baú transformado em cozinha móvel conforme vigilância sanitária.',
    bullets: [
      'Pia tripla e bancada inox',
      'Exaustão e elétrica 110/220V',
      'Layout sob medida'
    ],
    applications: ['Lanchonetes móveis', 'Cafeterias', 'Eventos'],
    specs: {
      'Pia': 'Tripla inox',
      'Elétrica': '110/220V'
    }
  },
  {
    id: 'trailer-cozinha',
    name: 'Trailer Cozinha (Reboque)',
    slug: 'trailer-cozinha',
    category: 'food-trucks',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Trailer+Cozinha',
    summary: 'Reboque com cozinha modular, fácil de manobrar.',
    bullets: [
      'Chassi reforçado',
      'Caixa d\'água e gás com ventilação',
      'Layout flexível'
    ],
    applications: ['Eventos', 'Feiras', 'Catering'],
    specs: {
      'Chassi': 'Reforçado',
      'Ventilação': 'Gás seguro'
    }
  },
  {
    id: 'quiosque-movel',
    name: 'Quiosque Móvel Retrátil',
    slug: 'quiosque-movel',
    category: 'food-trucks',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Quiosque+Movel',
    summary: 'Estrutura retrátil para atendimento rápido.',
    bullets: [
      'Abertura lateral com toldo',
      'Iluminação integrada',
      'Branding externo completo'
    ],
    applications: ['Bebidas', 'Doces', 'Promoções'],
    specs: {
      'Abertura': 'Lateral retrátil',
      'Iluminação': 'LED integrada'
    }
  },

  // Plataforma Auto Socorro
  {
    id: 'plataforma-prancha-hidraulica',
    name: 'Plataforma Prancha Hidráulica 6–8 m',
    slug: 'plataforma-prancha-hidraulica',
    category: 'plataforma-auto-socorro',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Plataforma+Prancha',
    summary: 'Guincho plataforma com sistema hidráulico de basculamento.',
    bullets: [
      'Controles laterais',
      'Cintas e pontos de ancoragem',
      'Faróis de trabalho LED'
    ],
    applications: ['Autos leves', 'Utilitários', 'SUVs'],
    specs: {
      'Comprimento': '6–8 metros',
      'Controle': 'Hidráulico'
    }
  },
  {
    id: 'guincho-asa-delta',
    name: 'Guincho Asa-Delta',
    slug: 'guincho-asa-delta',
    category: 'plataforma-auto-socorro',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Guincho+Asa+Delta',
    summary: 'Sistema de arraste com garfo para eixo dianteiro/traseiro.',
    bullets: [
      'Operação rápida',
      'Compacto',
      'Ideal para centros urbanos'
    ],
    applications: ['Autos leves', 'Reposicionamento rápido'],
    specs: {
      'Tipo': 'Asa-delta',
      'Uso': 'Urbano'
    }
  },
  {
    id: 'plataforma-tilt-slide',
    name: 'Plataforma Tilt-and-Slide',
    slug: 'plataforma-tilt-slide',
    category: 'plataforma-auto-socorro',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Plataforma+Tilt+Slide',
    summary: 'Plataforma que inclina e desliza para facilitar o embarque.',
    bullets: [
      'Ângulo de ataque reduzido',
      'Guincho elétrico/hidráulico',
      'Comandos seguros'
    ],
    applications: ['Baixo vão livre', 'Veículos rebaixados', 'SUVs'],
    specs: {
      'Sistema': 'Tilt-and-slide',
      'Guincho': 'Elétrico/Hidráulico'
    }
  },
  {
    id: 'acessorios-resgate-motos',
    name: 'Acessórios para Resgate de Motos',
    slug: 'acessorios-resgate-motos',
    category: 'plataforma-auto-socorro',
    thumb: 'https://placehold.co/800x500/1F2A74/FFFFFF?text=Acessorios+Motos',
    summary: 'Cavalete/cesto e trilhos dedicados ao transporte de motos.',
    bullets: [
      'Apoios dedicados',
      'Fixação segura',
      'Instalação rápida'
    ],
    applications: ['Scooters', 'Street', 'Motos trail'],
    specs: {
      'Tipo': 'Cavalete/cesto',
      'Instalação': 'Rápida'
    }
  }
];