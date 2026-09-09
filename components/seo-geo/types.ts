export interface GrowthBreakdownCardItem {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  isTitleBreak?: boolean;
  titleColor: string;
  titleSize: string;
  tagline: string;
  description: string;
  descriptionColor: string;
  bullets: string[];
  bulletTextColor: string;
  borderTopColor: string;
  borderClass: string;
  cardBg: string;
  accentBg: string;
  dividerBorder: string;
  clipPath: string;
  shadowClass: string;
}

export interface DictionaryItem {
  id: string;
  category: string;
  badge: string;
  title: string;
  inPlainEnglish: string;
  whyItMatters: string;
  whatYouGet: string[];
}

export interface GrowthCycleStep {
  number: string;
  title: string;
  description: string;
}
