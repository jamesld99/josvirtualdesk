import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { CheckIcon } from "@/components/Icons";
import { breadcrumbSchema } from "@/lib/schema";
import { audiences, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Jo's Virtual Desk | NHS Practice Manager Turned Virtual Assistant",
  description:
    "Meet Jo's Virtual Desk - virtual assistant support founded on NHS Practice Manager experience. Organised, confidential and reliable admin support for busy professionals across the UK.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Organised",
    text: "Systems, structure and order so nothing slips through the cracks and your day runs smoothly.",
  },
  {
    title: "Confidential",
    text: "Years of handling sensitive information means discretion is second nature.",
  },
  {
    title: "Reliable",
    text: "Dependable, consistent support you can trust to be done properly, on time.",
  },
  {
    title: "Warm & professional",
    text: "Friendly, human support that still feels polished and professional at every step.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="Organised, experienced support you can trust"
        description="Jo's Virtual Desk was built to give busy CEOs, founders and business owners calm, reliable admin support, grounded in real-world experience as an NHS Practice Manager."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Our story"
              title="From NHS Practice Manager to your Virtual Desk"
              centered={false}
            />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-brand-700/85">
              <p>
                Jo&apos;s Virtual Desk is a virtual assistant and business
                support service helping CEOs, founders, small business owners,
                coaches, consultants, entrepreneurs and busy professionals save
                time, stay organised and stay focused on growing their business.
              </p>
              <p>
                The founder brings strong experience as an NHS Practice Manager,
                a role that demands exceptional organisation, confidentiality,
                attention to detail and clear communication under pressure. That
                experience shapes everything Jo&apos;s Virtual Desk does, from
                diary management and confidential admin to document handling and
                process management.
              </p>
              <p>
                The result is a service that feels modern, professional, warm
                and genuinely trustworthy, the kind of behind-the-scenes support
                that helps your business run more calmly every single day.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[2rem] border border-brand-100 bg-brand-50 p-6 shadow-xl shadow-brand-200/40">
              <Image
                src="/logo.png"
                alt="Jo's Virtual Desk logo"
                width={480}
                height={480}
                className="mx-auto h-auto w-full max-w-sm rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="What we stand for"
          title="Values that keep your business organised"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm shadow-brand-100/60"
            >
              <h3 className="text-lg font-semibold text-brand-900">
                {v.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-brand-700/80">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we support"
              title="Built for busy professionals"
              centered={false}
              description="If your to-do list is overflowing and admin is eating into the work that grows your business, Jo's Virtual Desk is here to help."
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {audiences.map((a) => (
              <li
                key={a}
                className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 px-4 py-3 text-[15px] font-medium text-brand-700"
              >
                <CheckIcon className="h-5 w-5 flex-none text-brand-500" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-5 text-sm leading-relaxed text-brand-700/80">
          Please note: Jo&apos;s Virtual Desk provides non-clinical admin and
          practice support only. We do not provide medical advice, clinical
          services or regulated healthcare services. Learn more about our{" "}
          <Link
            href="/services/healthcare-practice-support"
            className="font-semibold text-brand-600 underline-offset-2 hover:underline"
          >
            healthcare &amp; practice support
          </Link>
          .
        </p>
      </Section>

      <CTASection
        title="Let's get you organised"
        description={`Tell Jo's Virtual Desk what's on your plate. Call ${site.phoneDisplay} or book a free call to get started.`}
      />
    </>
  );
}
