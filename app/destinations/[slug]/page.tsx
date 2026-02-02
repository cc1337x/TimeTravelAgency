import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/lib/destinations";
import { DestinationHero } from "@/components/destination/destination-hero";
import { WhyGoSection } from "@/components/destination/why-go-section";
import { MustSeeSection } from "@/components/destination/must-see-section";
import { AIAdviceSection } from "@/components/destination/ai-advice-section";
import { RulesSection } from "@/components/destination/rules-section";
import { CTASection } from "@/components/destination/cta-section";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: "Destination non trouvée | TimeTravel Agency",
    };
  }

  return {
    title: `${destination.title} | TimeTravel Agency`,
    description: destination.shortDescription,
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <DestinationHero destination={destination} />
      <WhyGoSection destination={destination} />
      <MustSeeSection destination={destination} />
      <AIAdviceSection destination={destination} />
      <RulesSection destination={destination} />
      <CTASection destination={destination} />
    </>
  );
}
