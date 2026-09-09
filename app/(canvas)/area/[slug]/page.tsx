import { notFound } from "next/navigation";
import { areas } from "@/components/home/areasData";
import { GrowthCanvasSelector } from "@/components/packages/GrowthCanvasSelector";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a) => a.id === slug);
  if (!area) return {};
  return {
    title: `${area.title} | Growth Canvas | Axudar Group`,
    description: area.shortDescription,
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a) => a.id === slug);
  if (!area) notFound();

  return <GrowthCanvasSelector primaryArea={area} />;
}
