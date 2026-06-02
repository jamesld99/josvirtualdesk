import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, professionalServiceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Jo's Virtual Desk | Virtual Assistant Support for CEOs & Business Owners",
    template: "%s | Jo's Virtual Desk",
  },
  description: site.description,
  keywords: [
    "virtual assistant UK",
    "virtual assistant for CEOs",
    "virtual assistant for business owners",
    "virtual assistant for small businesses",
    "executive assistant support",
    "admin support for small businesses",
    "email management virtual assistant",
    "diary management virtual assistant",
    "bookkeeping admin support",
    "invoice admin support",
    "business travel booking assistant",
    "healthcare admin support",
    "practice manager support",
    "private clinic admin support",
    "non-clinical healthcare admin support",
    "remote admin support",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title:
      "Jo's Virtual Desk | Virtual Assistant Support for CEOs & Business Owners",
    description: site.description,
    images: [
      {
        url: "/hero-banner.png",
        width: 1024,
        height: 410,
        alt: "Jo's Virtual Desk - Organized. Efficient. Empowered.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jo's Virtual Desk | Virtual Assistant Support for CEOs & Business Owners",
    description: site.description,
    images: ["/hero-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-brand-900">
        <JsonLd data={[organizationSchema(), professionalServiceSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
