import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TechStack } from "@/components/home/tech-stack";
import { Process } from "@/components/home/process";
import { CTA } from "@/components/home/cta";
import { PageTransition } from "@/components/layout/page-transition";

export const metadata: Metadata = {
  title: "Custom Software Development Company in India | Zyphron Technologies",
  description:
    "Zyphron Technologies is a Barpeta, Assam based software development company building scalable web, mobile, e‑commerce, and SaaS products for modern businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom Software Development Company in India | Zyphron Technologies",
    description:
      "Partner with Zyphron Technologies for end-to-end web, mobile, and SaaS development using a modern stack.",
    url: "https://zyphron.in/",
    type: "website",
  },
};

export default function Home() {
  return (
    <PageTransition>
      <Script
        id="zyphron-home-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://zyphron.in/",
              },
            ],
          }),
        }}
      />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <TechStack />
      <Process />
      <CTA />
    </PageTransition>
  );
}
