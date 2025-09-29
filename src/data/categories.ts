import { Truck, Container, Package, Droplets, UtensilsCrossed, Wrench } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: typeof Truck;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'cacambas-basculantes',
    name: 'Caçambas Basculantes',
    slug: 'cacambas-basculantes',
    icon: Container,
    description: 'Para transporte de materiais granulados'
  },
  {
    id: 'carrocerias',
    name: 'Carrocerias',
    slug: 'carrocerias',
    icon: Truck,
    description: 'Soluções completas para transporte'
  },
  {
    id: 'baus',
    name: 'Baús',
    slug: 'baus',
    icon: Package,
    description: 'Proteção total da carga'
  },
  {
    id: 'tanques',
    name: 'Tanques',
    slug: 'tanques',
    icon: Droplets,
    description: 'Para líquidos e combustíveis'
  },
  {
    id: 'food-trucks',
    name: 'Food Trucks',
    slug: 'food-trucks',
    icon: UtensilsCrossed,
    description: 'Cozinhas móveis sob medida'
  },
  {
    id: 'plataforma-auto-socorro',
    name: 'Plataforma Auto Socorro',
    slug: 'plataforma-auto-socorro',
    icon: Wrench,
    description: 'Guindastes e plataformas'
  }
];