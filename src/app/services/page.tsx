import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { serviceIcons, CheckIcon } from "@/components/Icons";
import { breadcrumbSchema } from "@/lib/schema";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Virtual Assistant, Bookkeeping, Travel & Healthcare Admin",
  description:
    "Explore Jo's Virtual Desk services: virtual assistant support, bookkeeping and finance admin, business travel and diary management, and non-clinical healthcare and practice support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Virtual assistant support, your way"
        description="From everyday admin to bookkeeping, travel and healthcare practice support, choose the help you need and add more as your business grows."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <Section className="bg-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50" containerClassName="space-y-16">
        {services.map((service, idx) => {
          const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
          return (
            <div
              key={service.slug}
              id={service.slug}
              className="grid items-start gap-8 rounded-[2rem] border border-brand-100 bg-white p-7 shadow-sm shadow-brand-100/60 sm:p-10 lg:grid-cols-3"
            >
              <div className="lg:col-span-1">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-lilac/40 text-brand-600">
                  {Icon ? <Icon className="h-7 w-7" /> : null}
                </span>
                <h2 className="mt-5 text-2xl font-bold text-brand-900">
                  {service.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-700/80">
                  {service.intro}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-800"
                >
                  Full details
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-xl bg-brand-50 px-4 py-3 text-[15px] text-brand-700"
                  >
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              {idx === services.length - 1 && (
                <p className="rounded-xl bg-brand-50 px-4 py-3 text-xs leading-relaxed text-brand-700/70 lg:col-span-3">
                  Healthcare &amp; practice support is non-clinical only.
                  Jo&apos;s Virtual Desk does not provide medical advice,
                  clinical services or regulated healthcare services.
                </p>
              )}
            </div>
          );
        })}
      </Section>

      <CTASection />
    </>
  );
}
