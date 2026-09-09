import { notFound } from "next/navigation";
import { packagesData } from "@/components/packages/data";
import { PackageDetailView } from "@/components/packages/PackageDetailView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(packagesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = packagesData[slug];
  if (!data) return {};
  return {
    title: `${data.title} | Axudar Group`,
    description: data.description,
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = packagesData[slug];
  if (!data) notFound();

  return <PackageDetailView data={data} />;
}

