import React from "react";
import { SeoGeoHero } from "@/components/seo-geo/SeoGeoHero";
import { GrowthBreakdown } from "@/components/seo-geo/GrowthBreakdown";
import { SeoGeoDictionary } from "@/components/seo-geo/SeoGeoDictionary";
import { GrowthCycle } from "@/components/seo-geo/GrowthCycle";
import { SeoGeoConsultationBanner } from "@/components/seo-geo/SeoGeoConsultationBanner";
import { ActionRoute } from "@/components/home/ActionRoute";
import Testimonials from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";

export const metadata = {
  title: "SEO & GEO Explained | Axudar Group",
  description:
    "Learn how Axudar helps your business become visible locally and appear in AI-generated answers with integrated SEO & GEO solutions.",
};

export default function SeoGeoPage() {
  return (
    <main>
      <SeoGeoHero />
      <GrowthBreakdown />
      <SeoGeoDictionary />
      <GrowthCycle />
      <SeoGeoConsultationBanner />
      {/* <ActionRoute /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
    </main>
  );
}
