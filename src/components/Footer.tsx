import Link from "next/link";
import { navItems, services, site } from "@/lib/site";
import Logo from "./Logo";
import { LinkedInIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-brand-100 bg-brand-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <span className="font-display text-lg font-bold text-brand-800">
              Jo&apos;s Virtual Desk
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-700/80">
            Virtual assistant and business support helping busy professionals
            across the UK save time, stay organised and stay focused on growing
            their business.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
            {site.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-800">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-brand-700/80 transition-colors hover:text-brand-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-800">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-brand-700/80 transition-colors hover:text-brand-900"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-800">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={`tel:${site.phoneIntl}`}
                className="font-semibold text-brand-700 transition-colors hover:text-brand-900"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-brand-700/80 transition-colors hover:text-brand-900"
              >
                {site.email}
              </a>
            </li>
            <li className="text-brand-700/80">Serving the {site.areaServed}</li>
          </ul>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700/80 transition-colors hover:text-brand-900"
            aria-label="Connect with Jo's Virtual Desk on LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5 text-brand-600" />
            Connect on LinkedIn
          </a>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Book a Free Call
          </Link>
        </div>
      </div>

      <div className="border-t border-brand-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-brand-700/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>
            Non-clinical admin &amp; practice support. We do not provide medical
            advice or regulated healthcare services.
          </p>
        </div>
      </div>
    </footer>
  );
}
