"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/faq-accordion";

export default function FAQPage() {
  const handleAskAgent = () => {
    const event = new CustomEvent("openChatWidget", {
      detail: {
        message: "J'ai une question qui n'est pas dans la FAQ",
      },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Support
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground">
            Questions fréquentes
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Trouvez les réponses à toutes vos questions sur le voyage temporel
            et nos services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <FAQAccordion />

        {/* Ask Agent Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-card to-cyan/10 border border-primary/30 p-8 text-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary-foreground" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Notre agent IA est disponible 24h/24 pour répondre à toutes vos
              questions sur le voyage temporel.
            </p>

            <Button
              onClick={handleAskAgent}
              className="bg-primary text-primary-foreground hover:bg-gold-light"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Poser une question à l&apos;agent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
