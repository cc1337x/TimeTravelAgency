import { MapPin, Sliders, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Choisir",
    description:
      "Sélectionnez votre époque parmi nos destinations soigneusement préparées.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Personnaliser",
    description:
      "Définissez vos préférences, durée et niveau de risque souhaité.",
    icon: Sliders,
  },
  {
    number: "03",
    title: "Réserver",
    description:
      "Confirmez votre voyage et préparez-vous pour l'aventure temporelle.",
    icon: Calendar,
  },
];

interface StepTimelineProps {
  className?: string;
}

export function StepTimeline({ className }: StepTimelineProps) {
  return (
    <div className={cn("grid gap-8 md:grid-cols-3", className)}>
      {steps.map((step, index) => (
        <div key={step.number} className="relative group">
          {/* Connector Line (hidden on mobile, shown on md+) */}
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
          )}

          <div className="relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            {/* Step Number */}
            <div className="absolute -top-4 left-6 px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
              {step.number}
            </div>

            {/* Icon */}
            <div className="mt-4 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <step.icon className="w-6 h-6 text-primary" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
