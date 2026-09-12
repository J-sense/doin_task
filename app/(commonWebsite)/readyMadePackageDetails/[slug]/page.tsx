import { notFound } from "next/navigation";
import { packagesData } from "@/components/packages/data";
import { ReadyMadePackageDetailView } from "@/components/packages/ReadyMadePackageDetailView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "social-content-growth" },
    { slug: "seo-ai-visibility" },
  ];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = packagesData[slug];
  if (!data) return {};
  return {
    title: `${data.title} Package Details | Axudar Group`,
    description: data.subtitle || data.description,
  };
}

export default async function ReadyMadePackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = packagesData[slug];
  if (!data) notFound();

  return <ReadyMadePackageDetailView data={data} />;
}
