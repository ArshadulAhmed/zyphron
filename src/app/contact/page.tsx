import type { Metadata } from "next";
import Script from "next/script";
import { ContactPageContent } from "@/components/pages/contact-page-content";
import { PageTransition } from "@/components/layout/page-transition";

export const metadata: Metadata = {
  title: "Contact Zyphron Technologies | Start Your Software Project",
  description:
    "Contact Zyphron Technologies to discuss your next web, mobile, or SaaS project. Share your goals and we’ll propose an approach, timeline, and scope.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Zyphron Technologies | Start Your Software Project",
    description:
      "Start a conversation with Zyphron Technologies about your next custom software initiative.",
    url: "https://zyphron.in/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <Script
        id="zyphron-contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: "https://zyphron.in/contact",
            mainEntityOfPage: "https://zyphron.in/contact",
          }),
        }}
      />
      <Script
        id="zyphron-contact-breadcrumb"
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
                name: "Contact",
                item: "https://zyphron.in/contact",
              },
            ],
          }),
        }}
      />
      <ContactPageContent />
    </PageTransition>
  );
}
