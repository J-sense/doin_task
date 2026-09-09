import { packagesData } from "@/components/packages/data";
import { PackageDetailView } from "@/components/packages/PackageDetailView";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Social & Content Growth Package | Axudar Group",
  description:
    "A fully managed social content programme for businesses that want consistent visibility that builds trust and creates opportunity.",
};

export default function SocialContentGrowthPage() {
  const data = packagesData["social-content-growth"];
  if (!data) {
    notFound();
  }

  return <PackageDetailView data={data} />;
}
