export interface IncludedItem {
  title: string;
  description: string;
}

export interface PackageDetailData {
  id: string;
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  relevantGoals: string[];
  whatWeDeliver: string[];
  price?: string;
  vatText?: string;
  minimumTerm?: string;
  introParagraph?: string;
  whatIsIncluded?: IncludedItem[];
  yourResponsibilities?: string[];
  notIncluded?: string[];
}
