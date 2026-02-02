import { HeroSection } from "@/components/home/hero-section";
import { DestinationsSection } from "@/components/home/destinations-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { PersonalizationSection } from "@/components/home/personalization-section";
import { FAQPreviewSection } from "@/components/home/faq-preview-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <HowItWorksSection />
      <PersonalizationSection />
      <FAQPreviewSection />
    </>
  );
}
