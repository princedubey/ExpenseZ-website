import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import BenefitsSection from '@/components/sections/benefits-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import DownloadCTA from '@/components/sections/download-cta';
import FAQSection from '@/components/sections/faq-section';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <DownloadCTA />
    </div>
  );
}