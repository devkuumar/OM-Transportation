import HeroSection from '@/components/sections/HeroSection';
import QuickInfoBar from '@/components/sections/QuickInfoBar';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import VehiclesSection from '@/components/sections/VehiclesSection';
import CommissionAgentSection from '@/components/sections/CommissionAgentSection';
import QuoteSection from '@/components/sections/QuoteSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import ServiceAreaSection from '@/components/sections/ServiceAreaSection';
import GallerySection from '@/components/sections/GallerySection';
import PartnerSection from '@/components/sections/PartnerSection';
import ExpansionSection from '@/components/sections/ExpansionSection';
import BusinessInfoSection from '@/components/sections/BusinessInfoSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Value Prop, Vehicle Badges & Primary CTAs */}
      <HeroSection />

      {/* 2. Compact Business Highlights Strip */}
      <QuickInfoBar />

      {/* 3. About Company, Proprietor Rahul Kumar & Local Background */}
      <AboutSection />

      {/* 4. Complete Services (FTL, PTL, Commission Agent, All India, etc.) */}
      <ServicesSection />

      {/* 5. Available Vehicle Sizes (14ft, 17ft, 19ft, 20ft, 22ft, Tata Ace) */}
      <VehiclesSection />

      {/* 6. Commission-Agent Model & FTL vs PTL In-depth Explanation */}
      <CommissionAgentSection />

      {/* 7. Lead Generation: Request a Vehicle / Transport Quote Form */}
      <QuoteSection />

      {/* 8. Verified Advantages: Why Choose OM Transport */}
      <WhyChooseSection />

      {/* 9. 4-Step How It Works Process */}
      <HowItWorksSection />

      {/* 10. Sectors & Industries We Serve */}
      <IndustriesSection />

      {/* 11. Service Areas, Route Corridors & Google Maps Integration */}
      <ServiceAreaSection />

      {/* 12. Office & Operations Gallery */}
      <GallerySection />

      {/* 13. Vehicle Owner & Transport Partner Onboarding Form */}
      <PartnerSection />

      {/* 14. Growing Beyond Transportation - Business Expansion */}
      <ExpansionSection />

      {/* 15. Verified GST, Statutory & Legal Compliance Details */}
      <BusinessInfoSection />

      {/* 16. Contact Desk, Direct Dial, WhatsApp & Quick Callback */}
      <ContactSection />
    </>
  );
}
