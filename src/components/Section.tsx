import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
};

export function Section({
  children,
  className = "",
  id,
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
          {eyebrow}
        </p>
      )}
      <Tag className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-brand-700/85">
          {description}
        </p>
      )}
    </div>
  );
}
