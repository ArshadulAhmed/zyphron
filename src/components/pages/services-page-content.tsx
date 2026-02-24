"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  LayoutDashboard,
  Server,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer, hoverLift } from "@/lib/motion";

const services = [
  {
    icon: Globe,
    title: "Web development",
    body: "We build custom web applications, from marketing and product sites to complex internal tools and dashboards. Our stack is modern (React, Next.js, TypeScript) and our architecture is built for growth, so you get fast, maintainable, and scalable solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile app development",
    body: "Native Android and iOS applications with a focus on performance and user experience. We handle backend integration, offline support, and app store readiness so you can ship confidently to both platforms.",
  },
  {
    icon: ShoppingCart,
    title: "E‑commerce development",
    body: "Online stores and marketplaces with secure payments, inventory management, and analytics. We integrate with leading platforms and build custom solutions when you need full control over the buying experience.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & admin panels",
    body: "Business intelligence dashboards and internal admin tools tailored to your workflows. Clear data visualization, role-based access, and integrations with your existing systems so your team can operate efficiently.",
  },
  {
    icon: Server,
    title: "Backend & API development",
    body: "Scalable APIs, microservices, and data pipelines. We design for reliability, security, and performance, whether you need a new backend from scratch or to extend and modernize existing systems.",
  },
];

export function ServicesPageContent() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-16 md:px-6 md:pt-28 md:pb-24 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px 0px -120px 0px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1, delayChildren: 0.15 },
            },
          }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeInUp(0)}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-300"
          >
            What we offer
          </motion.p>
            <motion.h1
              variants={fadeInUp(0.2)}
            className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl"
          >
            End-to-end software development
          </motion.h1>
          <motion.p
              variants={fadeInUp(0.4)}
            className="text-slate-400 md:text-lg"
          >
            From web and mobile to e‑commerce, dashboards, and SaaS we deliver
            full-stack solutions built for scale and long-term maintainability.
          </motion.p>
        </motion.div>
      </section>

      <div className="border-t border-slate-800/60">
        {services.map((item, i) => (
          <section
            key={item.title}
            className="mx-auto max-w-6xl border-b border-slate-800/60 px-4 py-12 md:px-6 md:py-16 lg:px-8"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12"
            >
              <motion.div
                variants={fadeInUp(0.1)}
                whileHover={hoverLift}
                className="flex shrink-0 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-800/60 p-4 text-sky-400"
              >
                <item.icon className="h-8 w-8" />
              </motion.div>
              <div className="min-w-0 flex-1">
                <motion.h2
                  variants={fadeInUp(0.05)}
                  className="mb-3 text-xl font-semibold text-slate-50 md:text-2xl"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  variants={fadeInUp(0.08)}
                  className="text-slate-400 leading-relaxed"
                >
                  {item.body}
                </motion.p>
              </div>
            </motion.div>
          </section>
        ))}
      </div>

      <Section
        eyebrow="Next step"
        title="Ready to scope your project?"
        description="Share your goals and we’ll propose an approach, timeline, and ballpark scope."
        className="pb-20"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp(0)}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 outline-none transition-[opacity,transform] duration-200 hover:opacity-95 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
