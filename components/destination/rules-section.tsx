import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Destination } from "@/lib/destinations";

interface RulesSectionProps {
  destination: Destination;
}

export function RulesSection({ destination }: RulesSectionProps) {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
            Règles & sécurité
          </h2>
          <p className="mt-4 text-muted-foreground">
            Informations essentielles pour un voyage réussi.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {destination.rules.map((rule, index) => (
            <AccordionItem
              key={index}
              value={`rule-${index}`}
              className="border border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 text-base font-medium [&[data-state=open]]:text-primary">
                {rule.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {rule.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
