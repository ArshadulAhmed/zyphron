import { Variants, Transition } from "framer-motion";

export const premiumEase: Transition["ease"] = [0.22, 1, 0.36, 1];

// Base fade-up animation used across sections, cards, and text
export const fadeInUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: premiumEase,
    },
  },
});

// Container stagger used for lists / grids
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

// Subtle card hover – lift and shadow only (no odd scale)
export const hoverLift = {
  y: -4,
  transition: {
    duration: 0.25,
    ease: premiumEase,
  },
};

