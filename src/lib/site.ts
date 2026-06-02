export const site = {
  name: "Jo's Virtual Desk",
  shortName: "Jo's Virtual Desk",
  tagline: "Organized. Efficient. Empowered.",
  // Update this to the live domain when deployed.
  url: "https://www.josvirtualdesk.co.uk",
  phone: "07734424370",
  phoneDisplay: "07734 424370",
  phoneIntl: "+447734424370",
  email: "hello@josvirtualdesk.co.uk",
  areaServed: "United Kingdom",
  description:
    "Jo's Virtual Desk provides virtual assistant and business support for busy CEOs, founders, small business owners, coaches, consultants and healthcare professionals across the UK. Save time, stay organised and take control of your admin, diary, emails, bookkeeping and business support.",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Work With Jo", href: "/why-work-with-jos-virtual-desk" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  cardSummary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  keywords: string[];
  features: string[];
};

export const services: Service[] = [
  {
    slug: "virtual-assistant-support",
    title: "Virtual Assistant Support",
    shortTitle: "Virtual Assistant",
    cardSummary:
      "Reliable support with emails, diary management, documents, research, data entry and everyday business admin.",
    metaTitle: "Virtual Assistant Support for CEOs & Business Owners | Jo's Virtual Desk",
    metaDescription:
      "Virtual assistant support in the UK for CEOs, founders and small businesses. Email management, diary management, document creation, data entry and remote admin support.",
    intro:
      "Get calm, professional virtual assistant support that keeps your inbox, diary and day-to-day admin under control, so you can focus on growing your business.",
    keywords: [
      "virtual assistant UK",
      "virtual assistant for CEOs",
      "virtual assistant for business owners",
      "virtual assistant for small businesses",
      "executive assistant support",
      "email management virtual assistant",
      "diary management virtual assistant",
      "remote admin support",
    ],
    features: [
      "Email management and inbox clean-up",
      "Diary and calendar management",
      "Document creation and formatting",
      "Data entry and online research",
      "General admin and business organisation",
      "File and folder organisation",
      "Follow-ups and reminders",
    ],
  },
  {
    slug: "bookkeeping-support",
    title: "Bookkeeping & Finance Admin",
    shortTitle: "Bookkeeping Admin",
    cardSummary:
      "Help with basic bookkeeping tasks, invoices, receipts, expenses and keeping your finance admin organised.",
    metaTitle: "Bookkeeping & Invoice Admin Support | Jo's Virtual Desk",
    metaDescription:
      "Bookkeeping admin support and invoice admin support for small businesses. Invoice creation, chasing invoices, expense tracking and preparing documents for accountants.",
    intro:
      "Keep your finance admin tidy and up to date with reliable bookkeeping support, from raising and chasing invoices to organising receipts and expenses.",
    keywords: [
      "bookkeeping admin support",
      "invoice admin support",
      "expense tracking",
      "finance admin support",
      "admin support for small businesses",
    ],
    features: [
      "Basic bookkeeping support",
      "Invoice creation and sending",
      "Chasing outstanding invoices",
      "Expense tracking",
      "Organising receipts",
      "Preparing documents for accountants",
    ],
  },
  {
    slug: "travel-diary-management",
    title: "Travel & Diary Management",
    shortTitle: "Travel & Diary",
    cardSummary:
      "Business trip planning, accommodation booking, travel research and clear itinerary creation.",
    metaTitle: "Business Travel Booking & Diary Management | Jo's Virtual Desk",
    metaDescription:
      "Business travel booking assistant and diary management for busy professionals. Booking trips, hotels and accommodation, travel research and itinerary creation.",
    intro:
      "Travel and diary management that takes the stress out of getting from A to B, with well-planned trips, organised confirmations and clear itineraries.",
    keywords: [
      "business travel booking assistant",
      "diary management virtual assistant",
      "travel research",
      "itinerary creation",
      "virtual assistant UK",
    ],
    features: [
      "Booking business trips",
      "Booking hotels and accommodation",
      "Travel research and options",
      "Itinerary creation",
      "Managing travel confirmations",
      "Organising business travel documents",
    ],
  },
  {
    slug: "healthcare-practice-support",
    title: "Healthcare & Practice Support",
    shortTitle: "Healthcare & Practice",
    cardSummary:
      "Non-clinical admin support for healthcare professionals, private clinics and practice-based businesses.",
    metaTitle: "Healthcare & Practice Management Admin Support | Jo's Virtual Desk",
    metaDescription:
      "Non-clinical healthcare admin support and practice manager support for private clinics and consultants. Practice management admin, document and process organisation.",
    intro:
      "Led by experience as an NHS Practice Manager, Jo's Virtual Desk offers non-clinical admin and practice management support for clinics, consultants and healthcare professionals.",
    keywords: [
      "healthcare admin support",
      "practice manager support",
      "private clinic admin support",
      "non-clinical healthcare admin support",
      "document creation support",
    ],
    features: [
      "Admin support for private clinics",
      "Practice management support",
      "Patient communication admin (where appropriate)",
      "Appointment and diary coordination",
      "Document and process organisation",
      "Policy and procedure document support",
      "CQC-style admin preparation support (where appropriate)",
    ],
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What does a virtual assistant do?",
    answer:
      "A virtual assistant provides remote admin and business support so you can focus on the work that matters. At Jo's Virtual Desk that includes email management, diary management, document creation, data entry, online research, bookkeeping admin, travel booking and general business organisation.",
  },
  {
    question: "Who does Jo's Virtual Desk support?",
    answer:
      "Jo's Virtual Desk supports CEOs, founders, small business owners, coaches, consultants, entrepreneurs, healthcare professionals, private clinics, practice managers and busy professionals who need reliable, organised admin support.",
  },
  {
    question: "Can you help with email and diary management?",
    answer:
      "Yes. Email and diary management are core services. We can clean up and organise your inbox, manage and coordinate your diary, set up follow-ups and reminders, and keep your day running smoothly.",
  },
  {
    question: "Do you offer bookkeeping support?",
    answer:
      "Yes. We provide basic bookkeeping and finance admin support, including invoice creation, sending and chasing invoices, expense tracking, organising receipts and preparing documents for your accountant. This is admin support, not regulated accountancy advice.",
  },
  {
    question: "Can you book business trips and accommodation?",
    answer:
      "Absolutely. We can research and book business trips, hotels and accommodation, create clear itineraries, manage your travel confirmations and keep all your travel documents organised in one place.",
  },
  {
    question: "Do you support healthcare professionals or private clinics?",
    answer:
      "Yes. With a background as an NHS Practice Manager, Jo's Virtual Desk offers non-clinical admin and practice management support for healthcare professionals, private clinics and consultants, including document and process organisation and appointment coordination.",
  },
  {
    question: "Do you provide clinical or medical services?",
    answer:
      "No. Jo's Virtual Desk does not provide medical advice, clinical services or regulated healthcare services. We provide non-clinical admin and practice support only.",
  },
  {
    question: "How do I get started?",
    answer:
      "It's simple. Book a free call, tell us what support you need, agree the tasks and priorities together, and then get organised support working behind the scenes. You can call 07734 424370 or use the contact form to get started.",
  },
];

export const audiences = [
  "CEOs",
  "Founders",
  "Small business owners",
  "Coaches",
  "Consultants",
  "Entrepreneurs",
  "Healthcare professionals",
  "Private clinics",
  "Practice managers",
  "Busy professionals",
  "Growing companies needing admin support",
];

export const howItWorks = [
  {
    title: "Book a call",
    description:
      "Start with a free, no-pressure call to talk through your business and where you need a hand.",
  },
  {
    title: "Discuss your support",
    description:
      "We listen carefully to understand your day-to-day tasks, pressures and the support that would help most.",
  },
  {
    title: "Agree tasks & priorities",
    description:
      "Together we agree the tasks, priorities and ways of working that suit you and your business.",
  },
  {
    title: "Get organised support",
    description:
      "Relax as Jo's Virtual Desk works calmly behind the scenes, keeping you organised and on track.",
  },
];
