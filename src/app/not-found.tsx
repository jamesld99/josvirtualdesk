import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-brand-700/85">
        Sorry, we couldn&apos;t find the page you were looking for. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Back to home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-7 py-3.5 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-50"
        >
          View services
        </Link>
      </div>
    </section>
  );
}
