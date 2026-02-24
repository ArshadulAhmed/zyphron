"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp, premiumEase } from "@/lib/motion";

function HeroMockupCard({
  i,
  accent,
  content,
}: {
  i: number;
  accent: "sky" | "violet" | "emerald" | "amber";
  content: ReactNode;
}) {
  const borderClass =
    accent === "sky"
      ? "border-l-2 border-l-sky-500/60"
      : accent === "violet"
        ? "border-l-2 border-l-violet-500/60"
        : accent === "emerald"
          ? "border-l-2 border-l-emerald-500/60"
          : "border-l-2 border-l-amber-500/60";
  return (
    <motion.div
      className={`aspect-[4/3] rounded-lg border border-slate-700/50 bg-slate-800/80 p-2 ${borderClass}`}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        delay: 0.45 + i * 0.05,
        duration: 0.4,
        ease: premiumEase,
      }}
    >
      {content}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-4 pt-16 pb-24 md:px-6 md:pt-24 md:pb-32 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px 0px -80px 0px" }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.14, delayChildren: 0.06 },
          },
        }}
        className="grid gap-12 lg:grid-cols-[1.05fr,1fr] lg:items-center lg:gap-14"
      >
        <motion.div className="space-y-8">
          <motion.div
            variants={fadeInUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/5 px-3 py-1.5 text-xs font-medium text-sky-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            End-to-end digital solutions
          </motion.div>

          <motion.h1
            variants={fadeInUp(0.2)}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-slate-50 md:text-5xl lg:text-6xl"
          >
            Building scalable software for modern businesses
          </motion.h1>

          <motion.p
            variants={fadeInUp(0.4)}
            className="max-w-xl text-lg text-slate-400 md:text-xl"
          >
            We design and build web applications, mobile apps, e‑commerce
            platforms, and SaaS products—so your team can ship faster and scale
            with confidence.
          </motion.p>

          <motion.div
            variants={fadeInUp(0.6)}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 outline-none transition-[opacity,transform] duration-200 hover:opacity-95 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Schedule a consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-600 bg-transparent px-5 py-3 text-sm font-medium text-slate-300 outline-none transition-[border-color,color] duration-200 hover:border-slate-500 hover:text-slate-50 focus-visible:ring-2 focus-visible:ring-sky-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View services
            </Link>
          </motion.div>
        </motion.div>

        {/* Dashboard-style mockup – reads as product UI, not empty space */}
        <motion.div
          variants={fadeInUp(0.7)}
          className="relative hidden lg:block"
        >
          <motion.div
            className="rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-black/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: premiumEase }}
          >
            {/* Browser chrome – colored dots + url bar */}
            <div className="flex items-center gap-2 border-b border-slate-700/60 px-4 py-3">
              <div className="flex gap-1.5">
                <motion.span
                  className="h-2 w-2 rounded-full bg-red-400/90"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.span
                  className="h-2 w-2 rounded-full bg-amber-400/90"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                />
                <motion.span
                  className="h-2 w-2 rounded-full bg-emerald-400/90"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              <div className="ml-2 h-6 flex-1 max-w-[200px] rounded-md border border-slate-600/60 bg-slate-800/80 pl-2.5 ring-1 ring-sky-500/20" />
            </div>

            <div className="flex">
              {/* Sidebar – subtle colored accents */}
              <div className="w-14 shrink-0 border-r border-slate-700/60 py-3">
                {[
                  "bg-sky-500/40",
                  "bg-violet-500/40",
                  "bg-emerald-500/40",
                  "bg-amber-500/40",
                  "bg-slate-600/50",
                ].map((bg, i) => (
                  <motion.div
                    key={i}
                    className={`mx-auto mb-2 h-8 w-8 rounded-lg ${bg}`}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 32, opacity: 1 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.35,
                      ease: premiumEase,
                    }}
                  />
                ))}
              </div>

              {/* Main content – title row + cards with inner design */}
              <div className="min-w-0 flex-1 p-4">
                <div className="mb-4 flex gap-2">
                  {[40, 24, 32].map((w, i) => (
                    <motion.div
                      key={i}
                      className="h-3 rounded bg-slate-700/60"
                      style={{ width: w }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{
                        delay: 0.3 + i * 0.06,
                        duration: 0.4,
                        ease: premiumEase,
                      }}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {/* 1. Sparkline – baseline + gradient area + line */}
                  <HeroMockupCard
                    i={0}
                    accent="sky"
                    content={
                      <div className="relative flex h-full items-center justify-center p-1.5">
                        <svg viewBox="0 0 120 36" className="h-full w-full" fill="none">
                          <defs>
                            <linearGradient id="hero-spark-fill" x1="0" y1="1" x2="0" y2="0">
                              <stop offset="0%" stopColor="rgb(56 189 248)" stopOpacity="0" />
                              <stop offset="100%" stopColor="rgb(56 189 248)" stopOpacity="0.4" />
                            </linearGradient>
                            <linearGradient id="hero-spark-line" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="rgb(56 189 248)" />
                              <stop offset="100%" stopColor="rgb(125 211 252)" />
                            </linearGradient>
                          </defs>
                          <line x1="0" y1="32" x2="120" y2="32" stroke="rgb(51 65 85)" strokeWidth="0.5" opacity="0.6" />
                          <motion.path
                            d="M 0 28 L 18 22 L 36 26 L 54 12 L 72 18 L 90 8 L 120 14 L 120 36 L 0 36 Z"
                            fill="url(#hero-spark-fill)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          />
                          <motion.path
                            d="M 0 28 L 18 22 L 36 26 L 54 12 L 72 18 L 90 8 L 120 14"
                            stroke="url(#hero-spark-line)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6, ease: premiumEase }}
                          />
                          <motion.circle
                            r="2.5"
                            cx="120"
                            cy="14"
                            fill="rgb(125 211 252)"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9, duration: 0.2 }}
                          />
                        </svg>
                      </div>
                    }
                  />
                  {/* 2. Gradient orb – radial + subtle ring */}
                  <HeroMockupCard
                    i={1}
                    accent="violet"
                    content={
                      <div className="relative flex h-full items-center justify-center p-1.5">
                        <svg viewBox="0 0 100 100" className="h-full w-full">
                          <defs>
                            <radialGradient id="hero-orb-violet" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="rgb(224 231 255)" stopOpacity="1" />
                              <stop offset="50%" stopColor="rgb(167 139 250)" stopOpacity="0.85" />
                              <stop offset="85%" stopColor="rgb(139 92 246)" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="rgb(139 92 246)" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="rgb(167 139 250)"
                            strokeWidth="0.8"
                            opacity="0.4"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 0.4 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                          />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="36"
                            fill="url(#hero-orb-violet)"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5, ease: premiumEase }}
                          />
                        </svg>
                      </div>
                    }
                  />
                  {/* 3. Area chart – fill + top edge line (KPI style) */}
                  <HeroMockupCard
                    i={2}
                    accent="emerald"
                    content={
                      <div className="relative flex h-full items-center justify-center p-1.5">
                        <svg viewBox="0 0 120 36" className="h-full w-full" fill="none">
                          <defs>
                            <linearGradient id="hero-area-fill" x1="0" y1="1" x2="0" y2="0">
                              <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="rgb(52 211 153)" stopOpacity="0.55" />
                            </linearGradient>
                            <linearGradient id="hero-area-line" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="rgb(16 185 129)" />
                              <stop offset="100%" stopColor="rgb(52 211 153)" />
                            </linearGradient>
                          </defs>
                          <motion.path
                            d="M 0 36 L 0 24 L 24 28 L 48 14 L 72 20 L 96 10 L 120 16 L 120 36 Z"
                            fill="url(#hero-area-fill)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          />
                          <motion.path
                            d="M 0 24 L 24 28 L 48 14 L 72 20 L 96 10 L 120 16"
                            stroke="url(#hero-area-line)"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.55, ease: premiumEase }}
                          />
                        </svg>
                      </div>
                    }
                  />
                  {/* 4. Isometric block – 3D with edge highlight */}
                  <HeroMockupCard
                    i={3}
                    accent="amber"
                    content={
                      <div className="relative flex h-full items-center justify-center p-1.5">
                        <svg viewBox="0 0 100 100" className="h-full w-full">
                          <defs>
                            <linearGradient id="hero-block-top" x1="0%" y1="100%" x2="0%" y2="0%">
                              <stop offset="0%" stopColor="rgb(245 158 11)" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="rgb(253 224 71)" stopOpacity="1" />
                            </linearGradient>
                            <linearGradient id="hero-block-right" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="rgb(217 119 6)" stopOpacity="0.7" />
                              <stop offset="100%" stopColor="rgb(251 191 36)" stopOpacity="0.45" />
                            </linearGradient>
                            <linearGradient id="hero-block-left" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="rgb(251 191 36)" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="rgb(245 158 11)" stopOpacity="0.65" />
                            </linearGradient>
                          </defs>
                          <motion.path
                            d="M 50 25 L 75 45 L 75 85 L 50 65 Z"
                            fill="url(#hero-block-right)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.35 }}
                          />
                          <motion.path
                            d="M 50 25 L 25 45 L 50 65 Z"
                            fill="url(#hero-block-left)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.55, duration: 0.35 }}
                          />
                          <motion.path
                            d="M 50 25 L 25 45 L 75 45 Z"
                            fill="url(#hero-block-top)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                          />
                          <motion.path
                            d="M 50 25 L 25 45 L 75 45 L 50 25"
                            stroke="rgb(253 224 71)"
                            strokeWidth="0.6"
                            fill="none"
                            opacity="0.5"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                          />
                        </svg>
                      </div>
                    }
                  />
                  {/* 5. Pills – primary + secondary for depth */}
                  <HeroMockupCard
                    i={4}
                    accent="sky"
                    content={
                      <div className="relative flex h-full items-center justify-center p-1.5">
                        <svg viewBox="0 0 100 100" className="h-full w-full">
                          <defs>
                            <linearGradient id="hero-pill-sky" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgb(2 132 199)" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="rgb(56 189 248)" stopOpacity="0.95" />
                            </linearGradient>
                            <linearGradient id="hero-pill-sky-sub" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="rgb(56 189 248)" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="rgb(125 211 252)" stopOpacity="0.4" />
                            </linearGradient>
                          </defs>
                          <motion.rect
                            x="22"
                            y="48"
                            width="56"
                            height="18"
                            rx="9"
                            fill="url(#hero-pill-sky-sub)"
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.55, duration: 0.4 }}
                          />
                          <motion.rect
                            x="18"
                            y="38"
                            width="64"
                            height="28"
                            rx="14"
                            fill="url(#hero-pill-sky)"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.45, ease: premiumEase }}
                          />
                        </svg>
                      </div>
                    }
                  />
                  {/* 6. Bar chart – baseline + gradient bars */}
                  <HeroMockupCard
                    i={5}
                    accent="violet"
                    content={
                      <div className="relative flex h-full items-end justify-center px-2 py-2">
                        <svg viewBox="0 0 100 60" className="h-full w-full" preserveAspectRatio="xMidYMax meet">
                          <defs>
                            <linearGradient id="hero-bar-violet" x1="0" y1="1" x2="0" y2="0">
                              <stop offset="0%" stopColor="rgb(124 58 237)" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="rgb(196 181 253)" stopOpacity="1" />
                            </linearGradient>
                          </defs>
                          <line x1="8" y1="56" x2="92" y2="56" stroke="rgb(51 65 85)" strokeWidth="0.5" opacity="0.5" />
                          {[40, 26, 48, 20, 36].map((h, j) => (
                            <motion.rect
                              key={j}
                              x={14 + j * 18}
                              y={56 - h}
                              width="14"
                              height={h}
                              rx="4"
                              fill="url(#hero-bar-violet)"
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.5 + j * 0.07,
                                duration: 0.45,
                                ease: premiumEase,
                              }}
                              style={{ transformOrigin: "center bottom" }}
                            />
                          ))}
                        </svg>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subtle floating glow behind */}
          <motion.div
            className="absolute -inset-4 -z-10 rounded-3xl bg-sky-500/10 blur-2xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
