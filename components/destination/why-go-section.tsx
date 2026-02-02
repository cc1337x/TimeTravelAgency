import { Check } from "lucide-react";
import type { Destination } from "@/lib/destinations";

interface WhyGoSectionProps {
  destination: Destination;
}

export function WhyGoSection({ destination }: WhyGoSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-10">
          Pourquoi y aller
        </h2>

        <div className="space-y-6">
          {destination.whyGo.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
