import type { Metadata } from "next";
import Script from "next/script";
import { AboutPageContent } from "@/components/pages/about-page-content";
import { PageTransition } from "@/components/layout/page-transition";

export const metadata: Metadata = {
  title: "About Zyphron Technologies | Software Development Company",
  description:
    "Learn about Zyphron Technologies, a software development company from Barpeta, Assam focused on scalable architecture, clean code, and long-term partnerships.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Zyphron Technologies | Software Development Company",
    description:
      "Who we are, how we work, and the values behind Zyphron Technologies.",
    url: "https://zyphron.in/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <Script
        id="zyphron-about-breadcrumb"
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
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://zyphron.in/about",
              },
            ],
          }),
        }}
      />
      <AboutPageContent />
    </PageTransition>
  );
}
