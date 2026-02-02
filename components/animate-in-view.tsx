"use client";

import React from "react"

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimateInView({
  children,
  className,
  delay = 0,
}: AnimateInViewProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Disable animations if user prefers reduced motion or not yet mounted
  if (prefersReducedMotion || !isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay,
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
