type LogoProps = {
  className?: string;
  title?: string;
};

/**
 * Custom vector brand mark for Jo's Virtual Desk.
 * A soft "squircle" badge with a lilac-to-purple gradient, an elegant
 * serif "JV" monogram and a gold accent line. Crisp at any size and
 * transparent background (no baked-in colour).
 */
export default function Logo({ className, title = "Jo's Virtual Desk" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="jvd-badge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a98fdc" />
          <stop offset="55%" stopColor="#7f5ac0" />
          <stop offset="100%" stopColor="#553787" />
        </linearGradient>
        <linearGradient id="jvd-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e7cd92" />
          <stop offset="50%" stopColor="#c8a45c" />
          <stop offset="100%" stopColor="#e7cd92" />
        </linearGradient>
      </defs>

      {/* Badge */}
      <rect x="2" y="2" width="60" height="60" rx="19" fill="url(#jvd-badge)" />
      {/* Subtle inner ring */}
      <rect
        x="6.5"
        y="6.5"
        width="51"
        height="51"
        rx="15.5"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.28"
        strokeWidth="1.2"
      />

      {/* JV monogram */}
      <text
        x="32"
        y="33"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-playfair), Georgia, 'Times New Roman', serif"
        fontSize="30"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="-1"
      >
        JV
      </text>

      {/* Gold accent line */}
      <rect x="24" y="46" width="16" height="2.2" rx="1.1" fill="url(#jvd-gold)" />
    </svg>
  );
}
