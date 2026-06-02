"use client";

import { useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const supportOptions = [
  ...services.map((s) => s.title),
  "Not sure yet / general enquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "Sorry, something went wrong sending your message. Please call 07734 424370 or email hello@josvirtualdesk.co.uk instead.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-brand-100 bg-brand-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m4 12 5 5L20 6" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-brand-900">
          Thank you for getting in touch
        </h3>
        <p className="mt-2 text-brand-700/85">
          Your message has been received. Jo&apos;s Virtual Desk will get back
          to you shortly to arrange your free call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-brand-900 placeholder:text-brand-400/70 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200";
  const labelClass = "block text-sm font-medium text-brand-800";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-100/60 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-brand-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="business" className={labelClass}>
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Your business or company"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-brand-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="Best number to reach you"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="support" className={labelClass}>
          Type of support needed
        </label>
        <select id="support" name="support" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {supportOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-brand-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass}
          placeholder="Tell us a little about your business and the support you're looking for."
        />
      </div>

      {status === "error" && error && (
        <p
          role="alert"
          className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-200 transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
      <p className="mt-4 text-xs text-brand-700/70">
        By submitting this form you agree to be contacted about your enquiry. We
        respect your privacy and never share your details.
      </p>
    </form>
  );
}
