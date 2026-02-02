"use client";

import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Destination } from "@/lib/destinations";

interface AIAdviceSectionProps {
  destination: Destination;
}

export function AIAdviceSection({ destination }: AIAdviceSectionProps) {
  const handleAskAgent = () => {
    const event = new CustomEvent("openChatWidget", {
      detail: {
        message: `Je voudrais en savoir plus sur ${destination.title}. Quels conseils pouvez-vous me donner pour ce voyage ?`,
      },
    });
    window.dispatchEvent(event);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-card to-cyan/10 border border-primary/30 p-8 sm:p-10">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Conseils de l&apos;agent IA
                </h3>
                <p className="text-sm text-muted-foreground">
                  Votre assistant personnel pour ce voyage
                </p>
              </div>
            </div>

            {/* Advice Content */}
            <p className="text-foreground leading-relaxed mb-6">
              Notre agent IA spécialisé dans les voyages vers {destination.title}{" "}
              peut vous aider à planifier chaque détail de votre aventure. Posez
              vos questions sur les meilleures périodes, les interactions à éviter,
              ou les expériences cachées à découvrir.
            </p>

            {/* CTA */}
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
    </section>
  );
}
