import { Hero } from "@/components/home/Hero";
import { Challenge } from "@/components/home/Challenge";
import { EcosystemAreas } from "@/components/home/EcosystemAreas";
import { OutcomeSelector } from "@/components/home/OutcomeSelector";
import { GrowthSupport } from "@/components/home/GrowthSupport";
import { GrowthCanvas } from "@/components/home/GrowthCanvas";
import { Packages } from "@/components/home/Packages";
import { ActiveOutcomes } from "@/components/home/ActiveOutcomes";
import { ActionRoute } from "@/components/home/ActionRoute";

import { Faq } from "@/components/home/Faq";

import ConsultationBanner from "@/components/home/ConsultationBanner";
import Testimonials from "@/components/home/Testimonials";

export default function page() {
  return (
    <main>
      <Hero />
      <Challenge />
      <EcosystemAreas />
      <OutcomeSelector />
      <GrowthSupport />
      {/* <GrowthCanvas /> */}
      <Packages />
      <ActiveOutcomes />
      <ActionRoute />
      <Testimonials />
      <Faq />
      <ConsultationBanner />
    </main>
  );
}
