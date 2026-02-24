import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/about-page-content";
import { PageTransition } from "@/components/layout/page-transition";

export const metadata: Metadata = {
  title: "About – Zyphron Technologies",
  description:
    "Our mission, approach, and values. We build scalable, reliable software and partner with teams who care about quality and long-term success.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutPageContent />
    </PageTransition>
  );
}
