import { StepTimeline } from "@/components/step-timeline";
import { AnimateInView } from "@/components/animate-in-view";

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateInView className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Comment ça marche
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
            Votre voyage en 3 étapes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et sécurisé pour préparer votre aventure
            temporelle.
          </p>
        </AnimateInView>

        {/* Timeline */}
        <AnimateInView delay={0.15}>
          <StepTimeline />
        </AnimateInView>
      </div>
    </section>
  );
}
