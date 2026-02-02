"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield, Sparkles, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Shield, label: "Sécurité" },
  { icon: Sparkles, label: "Immersion" },
  { icon: Settings, label: "Sur-mesure" },
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  const openChatbot = () => {
    const event = new CustomEvent("openChatWidget", {
      detail: { message: "Je cherche l'époque idéale pour moi" },
    });
    window.dispatchEvent(event);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        
        {/* Video placeholder - using gradient as fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted">
          {/* Animated subtle glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        {/* Video element (would work with actual video file) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate="visible"
        variants={staggerContainer}
      >
        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-glass backdrop-blur-sm border border-glass-border"
            >
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-tight text-balance"
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Voyagez à travers le temps,{" "}
          <span className="text-primary">sans compromis.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance"
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Paris 1889, Crétacé, Florence 1504 — une expérience premium, sécurisée
          et sur-mesure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-gold-light px-8 py-6 text-base font-medium"
            onClick={scrollToDestinations}
          >
            Choisir une destination
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary hover:text-foreground px-8 py-6 text-base font-medium bg-transparent"
            onClick={openChatbot}
          >
            Trouver mon époque
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <span className="text-xs tracking-wider uppercase">Découvrir</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
