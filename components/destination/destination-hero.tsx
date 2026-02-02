import Image from "next/image";
import { Clock, AlertTriangle } from "lucide-react";
import type { Destination } from "@/lib/destinations";
import { cn } from "@/lib/utils";

interface DestinationHeroProps {
  destination: Destination;
}

export function DestinationHero({ destination }: DestinationHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 z-10" />
        <Image
          src={destination.heroImage || "/placeholder.svg"}
          alt={`${destination.title} - ${destination.era}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
        {/* Era Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30 mb-6">
          {destination.era}
        </span>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-6">
          {destination.title}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
          {destination.fullDescription}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-4">
          {/* Duration Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-glass backdrop-blur-sm border border-glass-border">
            <Clock className="w-5 h-5 text-cyan" />
            <span className="text-foreground text-sm">
              Durée recommandée : {destination.recommendedDuration}
            </span>
          </div>

          {/* Risk Badge */}
          <div
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm border",
              destination.riskLevel === "low" &&
                "bg-cyan/10 border-cyan/30 text-cyan",
              destination.riskLevel === "medium" &&
                "bg-primary/10 border-primary/30 text-primary",
              destination.riskLevel === "high" &&
                "bg-destructive/10 border-destructive/30 text-destructive"
            )}
          >
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm">
              {destination.riskLevel === "low" && "Risque faible"}
              {destination.riskLevel === "medium" && "Risque modéré"}
              {destination.riskLevel === "high" && "Risque élevé"}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
