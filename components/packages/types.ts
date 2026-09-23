export interface IncludedItem {
  title: string;
  description: string;
}

export interface WhoThisIsForItem {
  title: string;
  description: string;
  icon?: string;
}

export interface WhatYouCouldReceiveItem {
  number: string;
  title: string;
  description: string;
}

export interface RelevantOutcomeItem {
  title: string;
  subtitle: string;
  href?: string;
}

export interface PackageDetailData {
  id: string;
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  relevantGoals?: string[];
  whatWeDeliver?: string[];
  whoThisIsForIntro?: string;
  whoThisIsFor?: WhoThisIsForItem[];
  whatYouCouldReceive?: WhatYouCouldReceiveItem[];
  relevantOutcomes?: RelevantOutcomeItem[];
  price?: string;
  vatText?: string;
  minimumTerm?: string;
  introParagraph?: string;
  whatIsIncluded?: IncludedItem[];
  yourResponsibilities?: string[];
  notIncluded?: string[];
}


