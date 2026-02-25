import type { Metadata } from "next";
import Script from "next/script";
import { ServicesPageContent } from "@/components/pages/services-page-content";
import { PageTransition } from "@/components/layout/page-transition";

export const metadata: Metadata = {
  title: "Software Development Services | Zyphron Technologies",
  description:
    "Custom web development, mobile apps, e‑commerce, dashboards, backend systems, and SaaS platforms for startups, SMEs, and enterprises.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Software Development Services | Zyphron Technologies",
    description:
      "Explore Zyphron Technologies' services for web, mobile, e‑commerce, dashboards, and backend/API development.",
    url: "https://zyphron.in/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <Script
        id="zyphron-services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Custom software development services",
            provider: {
              "@type": "Organization",
              name: "Zyphron Technologies",
              url: "https://zyphron.in",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            serviceType: [
              "Web application development",
              "Mobile app development",
              "E‑commerce development",
              "Dashboard and admin panel development",
              "Backend and API development",
            ],
            url: "https://zyphron.in/services",
          }),
        }}
      />
      <Script
        id="zyphron-services-breadcrumb"
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
                name: "Services",
                item: "https://zyphron.in/services",
              },
            ],
          }),
        }}
      />
      <ServicesPageContent />
    </PageTransition>
  );
}
