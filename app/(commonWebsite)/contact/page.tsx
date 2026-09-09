import React, { Suspense } from "react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <Suspense fallback={<div className="min-h-[400px] bg-white" />}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
