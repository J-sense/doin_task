import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { insights } from '../data';

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  // Very basic Markdown parser for the specific content we have
  const renderContent = (content: string) => {
    const blocks = content.split('\n\n');
    return blocks.map((block, index) => {
      if (block.startsWith('## ')) {
        return (
          <h2 key={index} className="text-[#03182B] text-2xl font-bold font-sans mt-10 mb-4 tracking-tight">
            {block.replace('## ', '')}
          </h2>
        );
      }
      if (block.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-2 border-[#00dfb6] pl-6 py-1 my-10">
            <p className="text-[#03182B] font-bold font-sans text-lg sm:text-xl leading-relaxed tracking-tight">
              {block.replace('> ', '').replace(/"/g, '')}
            </p>
          </blockquote>
        );
      }
      return (
        <p key={index} className="text-[#525252] font-sans font-light text-[15px] sm:text-base leading-relaxed mb-6">
          {block}
        </p>
      );
    });
  };

  const ecosystemLinks = [
    { label: 'Business Growth', href: '/area/business-growth' },
    { label: 'Strategy', href: '/area/strategy-planning' },
    { label: 'Marketing', href: '/area/marketing' },
    { label: 'SEO & AI Visibility', href: '/area/seo-ai-visibility' },
    { label: 'Social Media', href: '/area/social-media' },
    { label: 'Website & Conversion', href: '/area/website-conversion' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#02182b] to-[#043d52] text-white pt-24 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-6">
              {insight.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-[15px] font-light leading-relaxed max-w-2xl">
              {insight.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Article Body (Left Column) */}
          <div className="flex-1 max-w-3xl">
            {renderContent(insight.content || 'Content coming soon...')}
          </div>

          {/* Sidebar (Right Column) */}
          <div className="w-full lg:w-[380px] shrink-0 space-y-8">
            
            {/* CTA Card */}
            <div className="bg-[#f8f9fa] border border-gray-100 rounded-sm p-8">
              <span className="text-[#00dfb6] font-mono font-bold text-[10px] uppercase tracking-widest mb-4 block">
                FROM AXUDAR GROUP™
              </span>
              <p className="text-[#525252] font-sans font-light text-sm leading-relaxed mb-8">
                Axudar is a B2B growth consultancy that connects strategy, marketing and digital into one joined-up programme.
              </p>
              <Link
                href="/#growth-canvas"
                className="w-full bg-[#00dfb6] hover:bg-[#18d1ad] transition-colors text-[#02111c] font-sans font-bold text-[11px] uppercase tracking-widest px-6 py-4 rounded-xs flex items-center justify-between"
              >
                <span>Build Your Growth Canvas</span>
                <span className="text-[10px]">➔</span>
              </Link>
            </div>

            {/* Ecosystem Links */}
            <div className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-sm p-8">
              <span className="text-gray-400 font-mono font-bold text-[10px] uppercase tracking-widest mb-6 block">
                EXPLORE THE ECOSYSTEM
              </span>
              <div className="flex flex-col">
                {ecosystemLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 group"
                  >
                    <span className="text-[#03182B] font-sans font-semibold text-sm group-hover:text-[#00dfb6] transition-colors">
                      {link.label}
                    </span>
                    <span className="text-gray-300 group-hover:text-[#00dfb6] transition-colors text-xs font-bold">
                      ➔
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
