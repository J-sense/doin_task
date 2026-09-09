import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface CommonWebsiteLayoutProps {
  children: React.ReactNode;
}

export default function CommonWebsiteLayout({ children }: CommonWebsiteLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
