"use client";

import { useState } from "react";
import { destinations } from "@/lib/destinations";
import { DestinationCard } from "@/components/destination-card";
import { cn } from "@/lib/utils";

const filterChips = [
  { value: "all", label: "Toutes" },
  { value: "culture", label: "Culture" },
  { value: "aventure", label: "Aventure" },
  { value: "romance", label: "Romance" },
  { value: "risque", label: "Risque élevé" },
];

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock filtering - in a real app this would filter the data
  const filteredDestinations = destinations.filter((dest) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "culture")
      return dest.tags.some(
        (t) =>
          t.toLowerCase().includes("culture") ||
          t.toLowerCase().includes("art") ||
          t.toLowerCase().includes("renaissance")
      );
    if (activeFilter === "aventure")
      return dest.tags.some((t) => t.toLowerCase().includes("aventure"));
    if (activeFilter === "romance")
      return dest.tags.some((t) => t.toLowerCase().includes("romantique"));
    if (activeFilter === "risque") return dest.riskLevel === "high";
    return true;
  });

  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Explorez le temps
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground">
            Nos destinations
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Trois époques fascinantes vous attendent. Chaque destination a été
            soigneusement préparée pour garantir une expérience immersive et
            sécurisée.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterChips.map((chip) => (
            <button
              key={chip.value}
              type="button"
              onClick={() => setActiveFilter(chip.value)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
                activeFilter === chip.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              )}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Aucune destination ne correspond à ce filtre.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
