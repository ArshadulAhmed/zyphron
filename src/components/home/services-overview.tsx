"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  LayoutDashboard,
  Server,
  Cloud,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer, hoverLift } from "@/lib/motion";

const services = [
  {
    icon: Globe,
    title: "Web applications",
    description:
      "Custom web apps, dashboards, and internal tools built for scale and maintainability.",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    description:
      "Native Android and iOS applications with polished UX and robust backend integration.",
  },
  {
    icon: ShoppingCart,
    title: "E‑commerce",
    description:
      "Online stores and marketplaces with secure payments, inventory, and analytics.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & admin",
    description:
      "Business intelligence and operational dashboards tailored to your workflows.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Scalable APIs, microservices, and data pipelines that power your product.",
  },
  {
    icon: Cloud,
    title: "SaaS platforms",
    description:
      "Multi-tenant SaaS products with billing, auth, and enterprise-ready features.",
  },
];

export function ServicesOverview() {
  return (
    <Section
      id="services"
      eyebrow="What we build"
      title="Full-stack software development"
      description="From idea to production—we deliver web, mobile, e‑commerce, and SaaS solutions with a focus on architecture, performance, and long-term maintainability."
    >
      <motion.div
        variants={staggerContainer}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeInUp(0.1 * i)}
            whileHover={hoverLift}
            className="group rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 transition-colors hover:border-slate-700 hover:bg-slate-800/40"
          >
            <div className="mb-4 inline-flex rounded-xl border border-slate-700/80 bg-slate-800/60 p-3 text-sky-400 transition-colors group-hover:border-sky-500/50 group-hover:bg-sky-500/10">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-100">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeInUp(0.2)} className="mt-8 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300"
        >
          Explore all services
          <span aria-hidden>→</span>
        </Link>
      </motion.div>
    </Section>
  );
}
