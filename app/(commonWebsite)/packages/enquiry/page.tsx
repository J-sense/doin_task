import React, { Suspense } from "react";
import { ContactHero } from "@/components/contact/ContactHero";
import { PackageEnquiryForm } from "@/components/packages/PackageEnquiryForm";

export const metadata = {
  title: "Package Enquiry | Axudar Group",
  description: "Request details or start an enquiry for our specialized growth packages.",
};

export default function PackageEnquiryPage() {
  return (
    <main>
      <ContactHero />
      <Suspense fallback={<div className="min-h-[400px] bg-white" />}>
        <PackageEnquiryForm />
      </Suspense>
    </main>
  );
}
