"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Le voyage temporel est-il dangereux ?",
    answer:
      "La sécurité est notre priorité absolue. Chaque destination est soigneusement évaluée et classée par niveau de risque. Nos équipes de sécurité sont présentes sur chaque époque et nos protocoles d'extraction d'urgence garantissent votre retour en toute sécurité. Les destinations à risque élevé comme le Crétacé nécessitent une formation préalable et un équipement de protection spécifique.",
  },
  {
    question: "Quelles règles pour éviter les paradoxes ?",
    answer:
      "Nous appliquons le protocole strict de non-interférence temporelle. Vous ne pouvez pas modifier les événements historiques majeurs, interagir avec vos ancêtres directs, ou laisser des objets modernes. Nos agents IA surveillent en permanence votre voyage et vous alertent en cas de risque de paradoxe. En cas de violation, un retour immédiat est déclenché.",
  },
  {
    question: "Que dois-je emporter ?",
    answer:
      "Rien ! Nous fournissons absolument tout : vêtements d'époque, monnaie locale, documents d'identité temporels, et équipement de sécurité. Vos effets personnels modernes sont conservés en sécurité dans nos locaux. Seuls les souvenirs et les photographies autorisées peuvent être rapportés.",
  },
  {
    question: "Puis-je voyager en famille ?",
    answer:
      "Oui, les voyages en famille sont possibles pour les destinations à faible risque (Paris 1889, Florence 1504). Les enfants de plus de 12 ans sont acceptés avec accord parental. Les destinations à risque élevé comme le Crétacé sont réservées aux adultes de plus de 18 ans en excellente condition physique.",
  },
  {
    question: "Combien de temps dure un voyage ?",
    answer:
      "La durée varie selon la destination : de 1-2 jours pour les expéditions Crétacé à 1 semaine pour une immersion complète Renaissance. Le temps écoulé dans le passé correspond exactement au temps présent - pas de décalage temporel à votre retour.",
  },
  {
    question: "Comment fonctionne la réservation ?",
    answer:
      "Après avoir choisi votre destination et personnalisé votre voyage, notre agent IA génère un itinéraire sur-mesure. Vous recevez ensuite une formation préparatoire adaptée à votre époque de destination. Le paiement s'effectue en plusieurs fois et inclut une assurance temporelle complète.",
  },
];

interface FAQAccordionProps {
  items?: FAQItem[];
  limit?: number;
  className?: string;
}

export function FAQAccordion({ items = faqItems, limit, className }: FAQAccordionProps) {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <Accordion
      type="single"
      collapsible
      className={cn("space-y-4", className)}
    >
      {displayItems.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/50 transition-colors"
        >
          <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 text-base font-medium [&[data-state=open]]:text-primary">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
