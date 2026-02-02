"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Destination } from "@/lib/destinations";

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export function DestinationCard({
  destination,
  className,
}: DestinationCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.02 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative block overflow-hidden rounded-2xl bg-card border border-border",
        "transition-shadow duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]",
        className
      )}
    >
      <Link href={`/destinations/${destination.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card z-10" />
          <Image
            src={destination.heroImage || "/placeholder.svg"}
            alt={`${destination.title} - ${destination.era}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Risk Badge */}
          <div
            className={cn(
              "absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm",
              destination.riskLevel === "low" &&
                "bg-cyan/20 text-cyan border border-cyan/30",
              destination.riskLevel === "medium" &&
                "bg-primary/20 text-primary border border-primary/30",
              destination.riskLevel === "high" &&
                "bg-destructive/20 text-destructive border border-destructive/30"
            )}
          >
            {destination.riskLevel === "low" && "Risque faible"}
            {destination.riskLevel === "medium" && "Risque modéré"}
            {destination.riskLevel === "high" && "Risque élevé"}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Era Badge */}
          <span className="text-xs text-primary font-medium tracking-wider uppercase">
            {destination.era}
          </span>

          {/* Title */}
          <h3 className="mt-2 text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {destination.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {destination.shortDescription}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {destination.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium">
            <span>Voir les détails</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
