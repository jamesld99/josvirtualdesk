import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { MailIcon, PhoneIcon, ClockIcon, ShieldIcon } from "@/components/Icons";
import { breadcrumbSchema } from "@/lib/schema";
import { howItWorks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Jo's Virtual Desk | Book a Free Virtual Assistant Call",
  description:
    "Need help staying organised? Contact Jo's Virtual Desk today. Call 07734 424370 or send a message to book a free call about virtual assistant and business support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Need help staying organised?"
        description="Contact Jo's Virtual Desk today. Tell us what's on your plate and we'll arrange a free, no-pressure call to talk through how we can help."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand-900">
              Let&apos;s talk about your business
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-700/85">
              Prefer to talk? Give Jo&apos;s Virtual Desk a call or drop an
              email. Otherwise, complete the form and we&apos;ll be in touch.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${site.phoneIntl}`}
                className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-5 transition-colors hover:bg-brand-100/60"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-600 text-white">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-brand-600">
                    Call us
                  </span>
                  <span className="block text-lg font-semibold text-brand-900">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-5 transition-colors hover:bg-brand-100/60"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-600 text-white">
                  <MailIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-brand-600">
                    Email us
                  </span>
                  <span className="block break-all text-lg font-semibold text-brand-900">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-brand-100 p-5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <ShieldIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-brand-600">
                    Confidential
                  </span>
                  <span className="block text-[15px] text-brand-700/85">
                    Your details are handled discreetly and never shared.
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-700 to-brand-600 p-6 text-white">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <ClockIcon className="h-5 w-5" />
                What happens next
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-white/90">
                {howItWorks.map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                      {i + 1}
                    </span>
                    <span>
                      <strong className="font-semibold">{step.title}.</strong>{" "}
                      {step.description}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
