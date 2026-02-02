"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Calendar, Users, Wallet, Compass, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { destinations } from "@/lib/destinations";
import { cn } from "@/lib/utils";

const vibeOptions = [
  { value: "culture", label: "Culture" },
  { value: "aventure", label: "Aventure" },
  { value: "romance", label: "Romance" },
];

const budgetOptions = [
  { value: "standard", label: "Standard" },
  { value: "premium", label: "Premium" },
  { value: "luxe", label: "Luxe" },
];

const riskOptions = [
  { value: "low", label: "Faible" },
  { value: "medium", label: "Modéré" },
  { value: "high", label: "Élevé" },
];

function PlanningForm() {
  const searchParams = useSearchParams();
  const preselectedDestination = searchParams.get("destination") || "";

  const [destination, setDestination] = useState(preselectedDestination);
  const [travelers, setTravelers] = useState(2);
  const [vibe, setVibe] = useState("");
  const [budget, setBudget] = useState("");
  const [risk, setRisk] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    if (preselectedDestination) {
      setDestination(preselectedDestination);
    }
  }, [preselectedDestination]);

  const selectedDestination = destinations.find((d) => d.slug === destination);
  const isComplete = destination && vibe && budget && risk;

  const handleSubmit = () => {
    if (isComplete) {
      setShowSummary(true);
    }
  };

  const handleAskAgent = () => {
    const destName = selectedDestination?.title || destination;
    const vibeLabel = vibeOptions.find((v) => v.value === vibe)?.label || "";
    const budgetLabel = budgetOptions.find((b) => b.value === budget)?.label || "";
    const riskLabel = riskOptions.find((r) => r.value === risk)?.label || "";

    const message = `Je souhaite planifier un voyage vers ${destName} pour ${travelers} voyageur${travelers > 1 ? "s" : ""}. Ambiance ${vibeLabel}, budget ${budgetLabel}, tolérance au risque ${riskLabel}. Pouvez-vous me proposer un itinéraire personnalisé ?`;

    const event = new CustomEvent("openChatWidget", {
      detail: { message },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Planification
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground">
            Planifiez votre voyage
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Personnalisez chaque aspect de votre aventure temporelle et recevez
            un itinéraire sur-mesure.
          </p>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-8">
          {/* Destination Select */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
              <Compass className="w-4 h-4 text-primary" />
              Destination
            </label>
            <div className="grid gap-3 sm:grid-cols-3">
              {destinations.map((dest) => (
                <button
                  key={dest.slug}
                  type="button"
                  onClick={() => setDestination(dest.slug)}
                  className={cn(
                    "p-4 rounded-xl text-left transition-all border",
                    destination === dest.slug
                      ? "bg-primary/10 border-primary text-foreground"
                      : "bg-secondary border-transparent text-secondary-foreground hover:border-border"
                  )}
                >
                  <span className="block font-medium">{dest.title}</span>
                  <span className="block text-xs text-muted-foreground mt-1">
                    {dest.era}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Dates (Mock) */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
              <Calendar className="w-4 h-4 text-primary" />
              Dates de voyage
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <span className="text-xs text-muted-foreground mb-2 block">
                  Départ
                </span>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <span className="text-xs text-muted-foreground mb-2 block">
                  Retour
                </span>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Travelers */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
              <Users className="w-4 h-4 text-primary" />
              Nombre de voyageurs
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground hover:bg-muted transition-colors text-xl font-medium"
              >
                -
              </button>
              <span className="text-2xl font-semibold text-foreground w-12 text-center">
                {travelers}
              </span>
              <button
                type="button"
                onClick={() => setTravelers(Math.min(6, travelers + 1))}
                className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground hover:bg-muted transition-colors text-xl font-medium"
              >
                +
              </button>
            </div>
          </div>

          {/* Vibe */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
              Ambiance recherchée
            </label>
            <div className="flex flex-wrap gap-3">
              {vibeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setVibe(option.value)}
                  className={cn(
                    "px-5 py-3 rounded-xl text-sm font-medium transition-all",
                    vibe === option.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
              <Wallet className="w-4 h-4 text-primary" />
              Budget
            </label>
            <div className="flex flex-wrap gap-3">
              {budgetOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setBudget(option.value)}
                  className={cn(
                    "px-5 py-3 rounded-xl text-sm font-medium transition-all",
                    budget === option.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Risk Tolerance */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
              <AlertTriangle className="w-4 h-4 text-primary" />
              Tolérance au risque
            </label>
            <div className="flex flex-wrap gap-3">
              {riskOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setRisk(option.value)}
                  className={cn(
                    "px-5 py-3 rounded-xl text-sm font-medium transition-all",
                    risk === option.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-gold-light py-6 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isComplete}
            onClick={handleSubmit}
          >
            Générer mon résumé
          </Button>
        </div>

        {/* Trip Summary (Mock) */}
        {showSummary && selectedDestination && (
          <div className="mt-8 bg-card border border-primary/30 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Résumé de votre voyage
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Destination</span>
                <span className="font-medium text-foreground">
                  {selectedDestination.title}
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Époque</span>
                <span className="font-medium text-foreground">
                  {selectedDestination.era}
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Voyageurs</span>
                <span className="font-medium text-foreground">{travelers}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Ambiance</span>
                <span className="font-medium text-foreground">
                  {vibeOptions.find((v) => v.value === vibe)?.label}
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Budget</span>
                <span className="font-medium text-foreground">
                  {budgetOptions.find((b) => b.value === budget)?.label}
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-muted-foreground">
                  Niveau de risque de la destination
                </span>
                <span
                  className={cn(
                    "font-medium",
                    selectedDestination.riskLevel === "low" && "text-cyan",
                    selectedDestination.riskLevel === "medium" && "text-primary",
                    selectedDestination.riskLevel === "high" && "text-destructive"
                  )}
                >
                  {selectedDestination.riskLevel === "low" && "Faible"}
                  {selectedDestination.riskLevel === "medium" && "Modéré"}
                  {selectedDestination.riskLevel === "high" && "Élevé"}
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-gold-light py-6 text-base font-medium"
              onClick={handleAskAgent}
            >
              Demander un itinéraire à l&apos;agent IA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PlanifierPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 pb-16 bg-background" />}>
      <PlanningForm />
    </Suspense>
  );
}
