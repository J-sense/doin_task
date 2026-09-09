import { packagesData } from "@/components/packages/data";
import { PackageDetailView } from "@/components/packages/PackageDetailView";
import { notFound } from "next/navigation";

export const metadata = {
  title: "SEO & AI Visibility Growth Package | Axudar Group",
  description:
    "A structured monthly SEO and GEO programme for businesses that need to be found in search, local results and AI-generated answers.",
};

export default function SeoAiVisibilityPage() {
  const data = packagesData["seo-ai-visibility"];
  if (!data) {
    notFound();
  }

  return <PackageDetailView data={data} />;
}
