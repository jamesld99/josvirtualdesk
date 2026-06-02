import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import {
  ClockIcon,
  ShieldIcon,
  SparkleIcon,
  CheckIcon,
  DocIcon,
  HeartPulseIcon,
} from "@/components/Icons";
import { breadcrumbSchema } from "@/lib/schema";
import { howItWorks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Work With Jo's Virtual Desk | Reliable Virtual Assistant Support",
  description:
    "Discover why busy CEOs, founders and business owners choose Jo's Virtual Desk: NHS Practice Manager experience, confidential and reliable admin support, and flexible help that saves you time.",
  alternates: { canonical: "/why-work-with-jos-virtual-desk" },
};

const reasons = [
  {
    icon: ShieldIcon,
    title: "NHS Practice Manager experience",
    text: "A genuine background in healthcare operations means accuracy, confidentiality and process-driven organisation are built in from day one.",
  },
  {
    icon: ClockIcon,
    title: "Time given back to you",
    text: "Hand over the admin that drains your week and reclaim hours to spend on strategy, clients and growth.",
  },
  {
    icon: SparkleIcon,
    title: "Calm, organised support",
    text: "A tidy inbox, a well-managed diary and organised documents, all handled quietly and professionally behind the scenes.",
  },
  {
    icon: DocIcon,
    title: "Document & process expertise",
    text: "Clear documents, structured files and reliable processes that keep your business running smoothly.",
  },
  {
    icon: HeartPulseIcon,
    title: "Healthcare-friendly admin",
    text: "Non-clinical support tailored to private clinics, consultants and practice-based businesses that value discretion.",
  },
  {
    icon: CheckIcon,
    title: "Flexible & scalable",
    text: "Start with the support you need today and add more as your business grows. No rigid packages, just the right help.",
  },
];

export default function WhyWorkWithUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          {
            name: "Why Work With Jo's Virtual Desk",
            href: "/why-work-with-jos-virtual-desk",
          },
        ])}
      />
      <PageHero
        eyebrow="Why work with us"
        title="Why busy professionals choose Jo's Virtual Desk"
        description="Reliable, confidential and genuinely organised support, founded on NHS Practice Manager experience and built around your business."
        breadcrumbs={[
          { name: "Home", href: "/" },
          {
            name: "Why Work With Jo's Virtual Desk",
            href: "/why-work-with-jos-virtual-desk",
          },
        ]}
      />

      <Section className="bg-white">
        <SectionHeading
          eyebrow="The difference"
          title="Support that actually feels like a weight lifted"
          description="It's not just about ticking off tasks. It's about giving you calmer days, clearer priorities and the confidence that the details are handled."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm shadow-brand-100/60 transition-shadow hover:shadow-lg hover:shadow-brand-200/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-900">
                {r.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-brand-700/80">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="How it works"
          title="Simple from the very first call"
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, i) => (
            <li
              key={step.title}
              className="rounded-3xl border border-brand-100 bg-white p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-900">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-brand-700/80">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-7 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-white/60"
          >
            See what we can help with
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
