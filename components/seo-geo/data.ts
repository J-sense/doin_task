import {
  GrowthBreakdownCardItem,
  DictionaryItem,
  GrowthCycleStep,
} from "./types";

export const growthBreakdownCardsData: GrowthBreakdownCardItem[] = [
  {
    id: "01",
    tag: "01 \u00B7 TRADITIONAL SEARCH",
    tagColor: "text-[#087D65]",
    title: "SEO",
    titleColor: "text-[#00142D]",
    titleSize: "text-5xl lg:text-[75px]",
    tagline: "SEARCH ENGINE OPTIMISATION",
    description:
      "SEO improves your visibility across Google, Maps and other traditional search results when people type in a service, question or location.",
    descriptionColor: "text-[#5D6B77]",
    bullets: [
      "Helps the right pages rank",
      "Builds relevant organic traffic",
      "Improves local discovery",
    ],
    bulletTextColor: "text-slate-800",
    borderTopColor: "border-[#02111c]",
    borderClass: "border-x border-b border-slate-200/80",
    cardBg: "bg-white",
    accentBg: "bg-[#E5ECF2]/80",
    dividerBorder: "border-slate-200",
    clipPath: "polygon(0 0, 30% 0, 8% 100%, 0 100%)",
    shadowClass: "shadow-sm hover:shadow-md transition-shadow",
  },
  {
    id: "02",
    tag: "02 \u00B7 AI-LED DISCOVERY",
    tagColor: "text-[#0DAE87]",
    title: "GEO",
    titleColor: "text-slate-900",
    titleSize: "text-5xl lg:text-6xl",
    tagline: "GENERATIVE ENGINE OPTIMISATION",
    description:
      "GEO makes your expertise clearer and easier for AI-powered answer engines to understand, assess and potentially reference.",
    descriptionColor: "text-slate-600",
    bullets: [
      "Clarifies your expertise",
      "Creates answer-ready content",
      "Strengthens authority signals",
    ],
    bulletTextColor: "text-slate-800",
    borderTopColor: "border-[#0DAE87]",
    borderClass: "border-x border-b border-slate-200/80",
    cardBg: "bg-white",
    accentBg: "bg-[#E5ECF2]/80",
    dividerBorder: "border-slate-200",
    clipPath: "polygon(0 0, 26% 0, 8% 100%, 0 100%)",
    shadowClass: "shadow-sm hover:shadow-md transition-shadow",
  },
  {
    id: "03",
    tag: "03 \u00B7 THE AXUDAR APPROACH",
    tagColor: "text-[#0DAE87]",
    title: "BETTER",
    isTitleBreak: true,
    titleColor: "text-white",
    titleSize: "text-4xl lg:text-[46px]",
    tagline: "ONE CONNECTED VISIBILITY STRATEGY",
    description:
      "Both rely on a technically sound website, useful content, clear business information and genuine authority—not shortcuts or empty claims.",
    descriptionColor: "text-slate-300",
    bullets: [
      "One joined-up plan",
      "Clear monthly priorities",
      "Reporting tied to enquiries",
    ],
    bulletTextColor: "text-white",
    borderTopColor: "border-[#09799e]",
    borderClass: "",
    cardBg: "bg-[#031728]",
    accentBg: "bg-[#01101e]",
    dividerBorder: "border-slate-800",
    clipPath: "polygon(0 0, 26% 0, 8% 100%, 0 100%)",
    shadowClass: "shadow-xl",
  },
];

export const dictionaryData: DictionaryItem[] = [
  {
    id: "1",
    category: "GETTING STARTED",
    badge: "SET",
    title: "COMPLETE SEO SETUP",
    inPlainEnglish:
      "The essential search foundations are configured correctly before ongoing work begins.",
    whyItMatters:
      "It gives search engines a clean, trustworthy starting point and makes future improvements measurable.",
    whatYouGet: [
      "Tracking and search tools checked",
      "Indexing and site settings reviewed",
      "A clear baseline for future growth",
    ],
  },
  {
    id: "2",
    category: "LOCAL SEO",
    badge: "SET",
    title: "GOOGLE BUSINESS PROFILE OPTIMISATION",
    inPlainEnglish:
      "Your Google Business profile is fully set up, accurate, and structured for local customer searches.",
    whyItMatters:
      "Ensures your business appears prominently in Google Maps and local map packs when customers search nearby.",
    whatYouGet: [
      "Complete profile audit & info synchronization",
      "Local categories & service area alignment",
      "Geo-targeted media and updates publishing",
    ],
  },
  {
    id: "3",
    category: "CONTENT",
    badge: "SET",
    title: "ANSWER-ENGINE CONTENT STRATEGY",
    inPlainEnglish:
      "Creating structured, clear content tailored to answer questions directly from searchers and AI bots.",
    whyItMatters:
      "Positions your brand as the authoritative source that search engines and AI tools pull reference data from.",
    whatYouGet: [
      "Search intent & question research matrix",
      "Structured schema & FAQ markup integration",
      "High-value answer-ready content modules",
    ],
  },
  {
    id: "4",
    category: "AUTHORITY",
    badge: "SET",
    title: "DIGITAL AUTHORITY & CITATIONS",
    inPlainEnglish:
      "Strengthening external references and verified citations across trusted directories and industry platforms.",
    whyItMatters:
      "Search engines and AI algorithms rely on cross-verified trust signals to rank credible service providers.",
    whatYouGet: [
      "Consistent NAP (Name, Address, Phone) sync",
      "Top-tier industry directory submissions",
      "Authority & citation health monitoring",
    ],
  },
  {
    id: "5",
    category: "GEO AI",
    badge: "SET",
    title: "AI KNOWLEDGE ENGINE OPTIMISATION",
    inPlainEnglish:
      "Optimizing website architecture and entity data specifically for LLMs like ChatGPT, Claude, and Gemini.",
    whyItMatters:
      "Ensures AI models accurately retrieve, understand, and cite your business when users ask AI assistants.",
    whatYouGet: [
      "AI crawler & robot accessibility review",
      "Entity structuring & Knowledge Graph mapping",
      "AI answer citation tracking & optimization",
    ],
  },
  {
    id: "6",
    category: "REPORTING",
    badge: "SET",
    title: "SEARCH & AI PERFORMANCE REPORTING",
    inPlainEnglish:
      "Transparent monthly analytics breaking down organic rankings, local map views, and AI citations.",
    whyItMatters:
      "Provides clear visibility into how your growth plan is performing and converting customer enquiries.",
    whatYouGet: [
      "Custom outcome dashboard & analytics",
      "Monthly executive progress summary",
      "Actionable next-cycle priority roadmap",
    ],
  },
];

export const dictionaryCategories: string[] = [
  "ALL",
  "GETTING STARTED",
  "LOCAL SEO",
  "CONTENT",
  "AUTHORITY",
  "GEO AI",
  "REPORTING",
];

export const growthCycleSteps: GrowthCycleStep[] = [
  {
    number: "01",
    title: "Review",
    description:
      "Check visibility, competitors, site health and commercial priorities.",
  },
  {
    number: "02",
    title: "Improve",
    description:
      "Strengthen pages, technical foundations and conversion journeys.",
  },
  {
    number: "03",
    title: "Create & build",
    description:
      "Develop useful content and genuine authority around your expertise.",
  },
  {
    number: "04",
    title: "Report & plan",
    description:
      "Explain results clearly and agree the next month's actions.",
  },
];
