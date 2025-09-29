import { HeroSection } from '@/components/home/HeroSection';
import { ProductCategories } from '@/components/home/ProductCategories';
import { InstitutionalSection } from '@/components/home/InstitutionalSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ContactCTA } from '@/components/home/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductCategories />
      <InstitutionalSection />
      <ServicesSection />
      <ContactCTA />
    </div>
  );
};

export default Index;
