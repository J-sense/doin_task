import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = {
  title: {
    default: "Axudar Group | Modern Performance Marketing & SEO Agency",
    template: "%s | Axudar Group",
  },
  description:
    "Axudar Group delivers AI-powered performance marketing, search engine optimization (SEO), generative engine optimization (GEO), and bespoke growth ecosystems for high-impact brands.",
  keywords: [
    "Axudar Group",
    "Marketing Agency",
    "SEO Agency",
    "GEO Optimization",
    "Generative Engine Optimization",
    "Performance Marketing",
    "Digital Growth Ecosystem",
  ],
  authors: [{ name: "Axudar Group" }],
  creator: "Axudar Group",
  metadataBase: new URL("https://axudar.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Axudar Group | Modern Performance Marketing & SEO Agency",
    description:
      "Empowering high-growth businesses with AI-driven marketing strategies, GEO, SEO, and specialized growth ecosystems.",
    url: "https://axudar.com",
    siteName: "Axudar Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axudar Group | Modern Performance Marketing & SEO Agency",
    description:
      "Empowering high-growth businesses with AI-driven marketing strategies, GEO, SEO, and specialized growth ecosystems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager - Dynamic Script Integration */}
        {GTM_ID && GTM_ID !== "GTM-XXXXXXX" && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
        {/* Google Analytics 4 (GA4) Tag Integration */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="ga-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        {/* GTM fallback noscript */}
        {GTM_ID && GTM_ID !== "GTM-XXXXXXX" && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}

