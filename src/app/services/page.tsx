import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/services-page-content";
import { PageTransition } from "@/components/layout/page-transition";

export const metadata: Metadata = {
  title: "Services – Zyphron Technologies",
  description:
    "Custom web development, mobile apps, e‑commerce, dashboards, backend systems, and SaaS platforms. End-to-end software solutions for modern businesses.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesPageContent />
    </PageTransition>
  );
}
