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
  price: string;
  vatText: string;
  commitmentNote: string;
  intro: string;
  whatsIncluded: IncludedItem[];
  responsibilities: string[];
  notIncluded: string[];
  sidebarNote: string;
}
