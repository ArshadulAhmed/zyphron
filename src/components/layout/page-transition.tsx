"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { premiumEase } from "@/lib/motion";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: premiumEase }}
    >
      {children}
    </motion.div>
  );
}

