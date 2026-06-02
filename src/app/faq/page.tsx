import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ | Virtual Assistant & Business Support Questions Answered",
  description:
    "Frequently asked questions about Jo's Virtual Desk virtual assistant support, including email and diary management, bookkeeping admin, travel booking and non-clinical healthcare admin support.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "FAQ", href: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="Your questions, answered"
        description="Everything you need to know about working with Jo's Virtual Desk. Can't find your answer? Get in touch and we'll be happy to help."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />

      <Section className="bg-white">
        <FaqAccordion items={faqs} />
        <p className="mx-auto mt-8 max-w-3xl text-center text-[15px] text-brand-700/80">
          Still have a question? Call{" "}
          <a
            href={`tel:${site.phoneIntl}`}
            className="font-semibold text-brand-600 underline-offset-2 hover:underline"
          >
            {site.phoneDisplay}
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand-600 underline-offset-2 hover:underline"
          >
            send a message
          </Link>
          .
        </p>
      </Section>

      <CTASection />
    </>
  );
}
