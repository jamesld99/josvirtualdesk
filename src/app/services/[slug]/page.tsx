import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import CTASection from "@/components/CTASection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { serviceIcons, CheckIcon } from "@/components/Icons";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { faqs, services } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

// Map relevant FAQs to each service for richer, contextual content.
const serviceFaqMap: Record<string, string[]> = {
  "virtual-assistant-support": [
    "What does a virtual assistant do?",
    "Can you help with email and diary management?",
    "How do I get started?",
  ],
  "bookkeeping-support": [
    "Do you offer bookkeeping support?",
    "What does a virtual assistant do?",
    "How do I get started?",
  ],
  "travel-diary-management": [
    "Can you book business trips and accommodation?",
    "Can you help with email and diary management?",
    "How do I get started?",
  ],
  "healthcare-practice-support": [
    "Do you support healthcare professionals or private clinics?",
    "Do you provide clinical or medical services?",
    "How do I get started?",
  ],
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
  const related = services.filter((s) => s.slug !== service.slug);
  const relatedFaqs = faqs.filter((f) =>
    serviceFaqMap[service.slug]?.includes(f.question),
  );
  const isHealthcare = service.slug === "healthcare-practice-support";

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service.slug)!,
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${service.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.intro}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.shortTitle, href: `/services/${service.slug}` },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-200 transition-transform hover:scale-[1.02]"
          >
            Book a Free Call
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-7 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            All Services
          </Link>
        </div>
      </PageHero>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-lilac/40 text-brand-600">
              {Icon ? <Icon className="h-7 w-7" /> : null}
            </span>
            <h2 className="mt-5 text-2xl font-bold text-brand-900">
              What&apos;s included
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-brand-700/85">
              Here&apos;s how Jo&apos;s Virtual Desk can take {service.shortTitle.toLowerCase()}{" "}
              tasks off your plate so you can focus on growing your business.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 text-[15px] text-brand-700"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                  {f}
                </li>
              ))}
            </ul>

            {isHealthcare && (
              <p className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-5 text-sm leading-relaxed text-brand-700/80">
                <strong className="text-brand-800">
                  Non-clinical support only.
                </strong>{" "}
                Jo&apos;s Virtual Desk does not provide medical advice, clinical
                services or regulated healthcare services. This is non-clinical
                admin and practice management support, drawing on real NHS
                Practice Manager experience.
              </p>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border border-brand-100 bg-brand-50 p-7">
              <h2 className="text-lg font-semibold text-brand-900">
                Why business owners choose this
              </h2>
              <ul className="mt-4 space-y-3 text-[15px] text-brand-700/85">
                <li className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                  Save hours every week
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                  Accurate, confidential and reliable
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                  Flexible support that grows with you
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Enquire about {service.shortTitle}
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      {relatedFaqs.length > 0 && (
        <Section className="bg-brand-50">
          <SectionHeading
            eyebrow="FAQ"
            title={`${service.shortTitle} questions`}
          />
          <div className="mt-10">
            <FaqAccordion items={relatedFaqs} />
          </div>
        </Section>
      )}

      <Section className="bg-white">
        <SectionHeading eyebrow="Explore more" title="Related services" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {related.map((r) => {
            const RIcon = serviceIcons[r.slug as keyof typeof serviceIcons];
            return (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group rounded-3xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-100/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-200/50"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  {RIcon ? <RIcon className="h-6 w-6" /> : null}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-900">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-700/80">
                  {r.cardSummary}
                </p>
              </Link>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
