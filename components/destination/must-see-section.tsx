import { Star } from "lucide-react";
import type { Destination } from "@/lib/destinations";

interface MustSeeSectionProps {
  destination: Destination;
}

export function MustSeeSection({ destination }: MustSeeSectionProps) {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
            À ne pas manquer
          </h2>
          <p className="mt-4 text-muted-foreground">
            Les expériences incontournables de cette époque.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {destination.mustSee.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-2xl border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                <Star className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
