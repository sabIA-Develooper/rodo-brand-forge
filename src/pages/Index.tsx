import { HeroSection } from '@/components/home/HeroSection';
import { ProductCategories } from '@/components/home/ProductCategories';
import { InstitutionalSection } from '@/components/home/InstitutionalSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ContactCTA } from '@/components/home/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* Seções com espaçamento otimizado para mobile */}
      <div className="space-y-12 sm:space-y-16">
        <ProductCategories />
        <InstitutionalSection />
        <ServicesSection />
      </div>
      <ContactCTA />
    </div>
  );
};

export default Index;
