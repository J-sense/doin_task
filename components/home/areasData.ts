export interface SupportSection {
  heading: string;
  items: string[];
}

export interface AreaData {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  tag: string;
  href: string;
  sections: SupportSection[];
}

export const areas: AreaData[] = [
  {
    id: "business-growth",
    number: "01",
    title: "Business Growth",
    shortDescription: "Sales, commercial strategy, pricing, profitability and new business.",
    tag: "COMMERCIAL GROWTH",
    href: "/area/business-growth",
    sections: [
      {
        heading: "Support can include",
        items: [
          "Commercial and business health review",
          "Revenue, pricing, costs and profitability review",
          "Sales process and conversion improvement",
        ],
      },
      {
        heading: "Support can include",
        items: [
          "Go-to-market strategy and planning",
          "Competitive positioning and differentiation",
          "KPI framework and performance dashboards",
        ],
      },
    ],
  },
  {
    id: "strategy-planning",
    number: "02",
    title: "Strategy & Planning",
    shortDescription: "Direction, planning, priorities and positioning.",
    tag: "STRATEGY & PLANNING",
    href: "/area/strategy-planning",
    sections: [
      {
        heading: "Support can include",
        items: [
          "Business strategy development and alignment",
          "Quarterly planning and priority setting",
          "OKR and goal-setting frameworks",
        ],
      },
      {
        heading: "Support can include",
        items: [
          "Leadership team workshops and facilitation",
          "Market opportunity analysis",
          "Resource and budget allocation planning",
        ],
      },
    ],
  },
  {
    id: "marketing",
    number: "03",
    title: "Marketing",
    shortDescription: "Campaigns, brand, messaging and content.",
    tag: "CAMPAIGNS & LEADS",
    href: "/area/marketing",
    sections: [
      {
        heading: "Support can include",
        items: [
          "Lead generation strategy and execution",
          "Paid media planning and management",
          "Email marketing and nurture sequences",
        ],
      },
      {
        heading: "Support can include",
        items: [
          "CRM setup and pipeline management",
          "Conversion rate optimisation",
          "Campaign performance reporting",
        ],
      },
    ],
  },
  {
    id: "seo-ai-visibility",
    number: "04",
    title: "SEO & AI Visibility",
    shortDescription: "SEO, GEO, Google and AI search visibility.",
    tag: "SEO & AI VISIBILITY",
    href: "/area/seo-ai-visibility",
    sections: [
      {
        heading: "Support can include",
        items: [
          "Technical SEO audit and remediation",
          "AI search and generative engine optimisation",
          "Keyword strategy and content planning",
        ],
      },
      {
        heading: "Support can include",
        items: [
          "Local and national SEO campaigns",
          "Link building and authority development",
          "Search performance tracking and reporting",
        ],
      },
    ],
  },
  {
    id: "social-media",
    number: "05",
    title: "Social Media",
    shortDescription: "Content, channels, engagement and organic visibility.",
    tag: "SOCIAL & CONTENT",
    href: "/area/social-media",
    sections: [
      {
        heading: "Support can include",
        items: [
          "Social media strategy and channel planning",
          "Content calendar creation and management",
          "Short-form video and creative production",
        ],
      },
      {
        heading: "Support can include",
        items: [
          "Community management and engagement",
          "Influencer and partnership outreach",
          "Brand voice and messaging guidelines",
        ],
      },
    ],
  },
  {
    id: "website-conversion",
    number: "06",
    title: "Website & Conversion",
    shortDescription: "Website, UX, landing pages and conversion.",
    tag: "WEBSITE & CONVERSION",
    href: "/area/website-conversion",
    sections: [
      {
        heading: "Support can include",
        items: [
          "Website design, build and optimisation",
          "Landing page and funnel development",
          "UX audit and user journey mapping",
        ],
      },
      {
        heading: "Support can include",
        items: [
          "Analytics setup and conversion tracking",
          "A/B testing and experimentation",
          "Speed and core web vitals optimisation",
        ],
      },
    ],
  },
];
