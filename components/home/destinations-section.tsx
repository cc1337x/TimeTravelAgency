import { destinations } from "@/lib/destinations";
import { DestinationCard } from "@/components/destination-card";
import { AnimateInView } from "@/components/animate-in-view";

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateInView className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Nos destinations
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
            Choisissez votre époque
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Trois époques extraordinaires, minutieusement préparées pour une
            expérience inoubliable.
          </p>
        </AnimateInView>

        {/* Destination Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <AnimateInView key={destination.slug} delay={index * 0.1}>
              <DestinationCard destination={destination} />
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
