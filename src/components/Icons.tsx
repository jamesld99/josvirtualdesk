import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </svg>
  );
}

export function ReceiptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3v18l2-1.2L9 21l2-1.2L13 21l2-1.2L17 21l2-1.2V3l-2 1.2L15 3l-2 1.2L11 3 9 4.2 7 3 5 4.2Z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.9 4.2-2.2 2.2-2-.4a.5.5 0 0 0-.5.8L6 17l1.9 2.5c.2.3.6.3.8 0l2.2-2 4.2 3.9a.5.5 0 0 0 .8-.5Z" />
    </svg>
  );
}

export function HeartPulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M19.5 12.6 12 20l-7.5-7.4a4.6 4.6 0 0 1 6.5-6.5l1 .9 1-.9a4.6 4.6 0 0 1 6.5 6.5Z" />
      <path d="M3.5 12.5h3l1.5-3 2.5 6 1.5-3h4.5" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c.4 3.8 1.2 4.6 5 5-3.8.4-4.6 1.2-5 5-.4-3.8-1.2-4.6-5-5 3.8-.4 4.6-1.2 5-5Z" />
      <path d="M18 14c.2 1.6.5 1.9 2 2-1.5.2-1.8.5-2 2-.2-1.6-.5-1.9-2-2 1.5-.2 1.8-.5 2-2Z" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 6a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export function DocIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2h8l4 4v16H6Z" />
      <path d="M14 2v4h4M9 12h6M9 16h6" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

export const serviceIcons = {
  "virtual-assistant-support": MailIcon,
  "bookkeeping-support": ReceiptIcon,
  "travel-diary-management": PlaneIcon,
  "healthcare-practice-support": HeartPulseIcon,
} as const;
