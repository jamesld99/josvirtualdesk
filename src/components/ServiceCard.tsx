import Link from "next/link";
import type { Service } from "@/lib/site";
import { serviceIcons } from "./Icons";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-sm shadow-brand-100/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-200/50"
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-lilac/40 text-brand-600 transition-colors group-hover:from-brand-200 group-hover:to-lilac/60">
        {Icon ? <Icon className="h-7 w-7" /> : null}
      </span>
      <h3 className="mt-5 text-xl font-semibold text-brand-900">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-700/80">
        {service.cardSummary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-800">
        Learn more
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
