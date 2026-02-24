import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/contact-page-content";
import { PageTransition } from "@/components/layout/page-transition";

export const metadata: Metadata = {
  title: "Contact - Zyphron Technologies",
  description:
    "Get in touch to discuss your project. We’ll respond quickly and help you scope your next software initiative.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactPageContent />
    </PageTransition>
  );
}
