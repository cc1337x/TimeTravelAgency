"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimateInView } from "@/components/animate-in-view";

const durations = [
  { value: "1-2", label: "1-2 jours" },
  { value: "3-5", label: "3-5 jours" },
  { value: "7", label: "1 semaine" },
];

const vibes = [
  { value: "culture", label: "Culture" },
  { value: "aventure", label: "Aventure" },
  { value: "romance", label: "Romance" },
];

const risks = [
  { value: "low", label: "Faible" },
  { value: "medium", label: "Modéré" },
  { value: "high", label: "Élevé" },
];

export function PersonalizationSection() {
  const [duration, setDuration] = useState<string>("");
  const [vibe, setVibe] = useState<string>("");
  const [risk, setRisk] = useState<string>("");

  const handleGenerateRecommendation = () => {
    const durationLabel = durations.find((d) => d.value === duration)?.label || "";
    const vibeLabel = vibes.find((v) => v.value === vibe)?.label || "";
    const riskLabel = risks.find((r) => r.value === risk)?.label || "";

    const message = `Je recherche un voyage de ${durationLabel}, ambiance ${vibeLabel}, avec un niveau de risque ${riskLabel}. Quelle destination me recommandez-vous ?`;

    const event = new CustomEvent("openChatWidget", {
      detail: { message },
    });
    window.dispatchEvent(event);
  };

  const isComplete = duration && vibe && risk;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateInView className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Personnalisation rapide
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground">
            Trouvez votre époque idéale
          </h2>
          <p className="mt-4 text-muted-foreground">
            Répondez à quelques questions pour obtenir une recommandation
            personnalisée.
          </p>
        </AnimateInView>

        {/* Form */}
        <AnimateInView delay={0.15}>
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-8">
            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Durée souhaitée
              </label>
              <div className="flex flex-wrap gap-3">
                {durations.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setDuration(option.value)}
                    className={cn(
                      "px-5 py-3 rounded-xl text-sm font-medium transition-all",
                      duration === option.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-muted"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Vibe */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Ambiance recherchée
              </label>
              <div className="flex flex-wrap gap-3">
                {vibes.map((option) => (
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

            {/* Risk */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Tolérance au risque
              </label>
              <div className="flex flex-wrap gap-3">
                {risks.map((option) => (
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
              onClick={handleGenerateRecommendation}
            >
              Générer une recommandation
            </Button>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
