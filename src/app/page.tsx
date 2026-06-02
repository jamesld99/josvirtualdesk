import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import {
  CheckIcon,
  ClockIcon,
  ShieldIcon,
  SparkleIcon,
} from "@/components/Icons";
import { audiences, faqs, howItWorks, services, site } from "@/lib/site";
import { faqSchema } from "@/lib/schema";

const benefits = [
  {
    icon: ClockIcon,
    title: "Save hours every week",
    text: "Hand over time-consuming admin and get back the hours you need to focus on growth.",
  },
  {
    icon: ShieldIcon,
    title: "Confidential & reliable",
    text: "An NHS Practice Manager background means accuracy, discretion and trusted support.",
  },
  {
    icon: SparkleIcon,
    title: "Calm, organised days",
    text: "A tidy inbox, a managed diary and organised documents working quietly behind the scenes.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-lilac/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-brand-100/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-600">
              <SparkleIcon className="h-4 w-4" />
              Virtual Assistant &amp; Business Support &middot; UK
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
              Virtual Assistant Support for Busy CEOs, Founders and Business
              Owners
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-700/85 sm:text-xl">
              Jo&apos;s Virtual Desk helps busy professionals save time, stay
              organised and take control of their day-to-day admin, diary,
              emails, bookkeeping and business support.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-200/70 transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Book a Free Call
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-full border border-brand-200 bg-white px-8 py-4 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50 sm:w-auto"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-brand-100 shadow-2xl shadow-brand-200/50">
            <Image
              src="/hero-banner.png"
              alt="Jo's Virtual Desk - organised desk with laptop, planner and lavender. Organized. Efficient. Empowered."
              width={1024}
              height={410}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Who Jo's Virtual Desk helps */}
      <Section className="bg-white" containerClassName="">
        <SectionHeading
          eyebrow="Who we help"
          title="Trusted support for the people growing businesses"
          description="Jo's Virtual Desk supports CEOs, founders, small business owners and healthcare professionals who need reliable, organised admin so they can focus on what matters most."
        />
        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {audiences.map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700"
            >
              <CheckIcon className="h-4 w-4 text-brand-500" />
              {a}
            </li>
          ))}
        </ul>
      </Section>

      {/* More time to focus + benefits */}
      <Section className="bg-brand-50">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why outsource your admin"
              title="More Time to Focus on Your Business"
              centered={false}
            />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-brand-700/85">
              <p>
                Running a business means wearing a lot of hats. Jo&apos;s
                Virtual Desk gives you reliable virtual assistant support so you
                can spend less time buried in admin and more time focused on the
                work that matters.
              </p>
              <p>
                From managing your inbox and diary to organising documents,
                booking business travel and supporting day-to-day finance admin,
                Jo&apos;s Virtual Desk provides calm, professional and organised
                support behind the scenes.
              </p>
            </div>
            <Link
              href="/why-work-with-jos-virtual-desk"
              className="mt-7 inline-flex items-center gap-1.5 text-base font-semibold text-brand-600 transition-colors hover:text-brand-800"
            >
              Why work with Jo&apos;s Virtual Desk
              <svg
                width="18"
                height="18"
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
          <div className="grid gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-100/60"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <b.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-900">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-brand-700/80">
                    {b.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services overview */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Services"
          title="Organised support, tailored to you"
          description="Pick the support you need today and add more as your business grows. Every service is delivered with care, accuracy and discretion."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-7 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            Explore all services
          </Link>
        </div>
      </Section>

      {/* NHS Practice Manager experience */}
      <Section className="bg-gradient-to-br from-brand-700 to-brand-600 text-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-200">
              NHS Practice Manager experience
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Experienced, Organised and Trusted Support
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              With a background as an NHS Practice Manager, Jo&apos;s Virtual
              Desk understands the importance of accuracy, confidentiality,
              organisation and clear communication. This experience makes the
              service especially valuable for healthcare professionals, private
              clinics, consultants and busy business owners who need reliable
              non-clinical admin support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services/healthcare-practice-support"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-transform hover:scale-[1.02]"
              >
                Healthcare &amp; Practice Support
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                About Jo&apos;s Virtual Desk
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Accuracy & attention to detail",
              "Confidential, discreet handling",
              "Strong organisation & process",
              "Clear, professional communication",
              "Diary & appointment coordination",
              "Document & policy support",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3.5 text-[15px] font-medium backdrop-blur-sm"
              >
                <CheckIcon className="h-5 w-5 flex-none text-brand-200" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="How it works"
          title="Getting started is simple"
          description="Four easy steps to calmer, more organised days."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-3xl border border-brand-100 bg-brand-50/60 p-7"
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
      </Section>

      {/* FAQ */}
      <Section className="bg-brand-50">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Quick answers to the questions busy business owners ask most."
        />
        <div className="mt-12">
          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-base font-semibold text-brand-600 transition-colors hover:text-brand-800"
          >
            View all FAQs
            <svg
              width="18"
              height="18"
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
      </Section>

      <CTASection />
    </>
  );
}
