import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ByteSpace - Next-Gen Learning & Creator Platform",
    template: "%s | ByteSpace",
  },
  description:
    "Master modern tech skills with top creators. Cohort mentorship, hands-on projects, and interactive courses.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} font-sans antialiased min-h-full bg-background text-foreground selection:bg-[#d4ff00] selection:text-black flex flex-col relative`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
