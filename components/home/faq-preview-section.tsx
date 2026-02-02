import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/faq-accordion";
import { AnimateInView } from "@/components/animate-in-view";

export function FAQPreviewSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateInView className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Questions fréquentes
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground">
            Tout ce que vous devez savoir
          </h2>
        </AnimateInView>

        {/* FAQ Preview - First 4 items */}
        <AnimateInView delay={0.15}>
          <FAQAccordion limit={4} />
        </AnimateInView>

        {/* See All Link */}
        <AnimateInView delay={0.25} className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="border-border text-foreground hover:bg-secondary hover:text-foreground bg-transparent"
          >
            <Link href="/faq" className="flex items-center gap-2">
              Voir toutes les questions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimateInView>
      </div>
    </section>
  );
}
