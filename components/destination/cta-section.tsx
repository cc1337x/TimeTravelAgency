import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Destination } from "@/lib/destinations";

interface CTASectionProps {
  destination: Destination;
}

export function CTASection({ destination }: CTASectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
          Prêt pour l&apos;aventure ?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Commencez à planifier votre voyage vers {destination.title} et vivez
          une expérience temporelle inoubliable.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-gold-light px-8 py-6 text-base font-medium"
        >
          <Link
            href={`/planifier?destination=${destination.slug}`}
            className="flex items-center gap-2"
          >
            Planifier ce voyage
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
