import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TechStack } from "@/components/home/tech-stack";
import { Process } from "@/components/home/process";
import { CTA } from "@/components/home/cta";
import { PageTransition } from "@/components/layout/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <TechStack />
      <Process />
      <CTA />
    </PageTransition>
  );
}
