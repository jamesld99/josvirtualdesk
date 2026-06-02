# Jo's Virtual Desk

Modern, responsive, SEO- and AI-search-optimised website for **Jo's Virtual Desk** — a UK virtual assistant and business support service for CEOs, founders, small business owners, coaches, consultants, entrepreneurs and healthcare professionals.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # production build
npm start        # run the production build
npm run lint     # lint
```

## Project structure

```
src/
  app/
    layout.tsx                       # Root layout, fonts, global metadata, Org + ProfessionalService schema
    page.tsx                         # Home
    about/                           # About
    services/                        # Services overview
    services/[slug]/                 # Service detail pages (static generated)
    why-work-with-jos-virtual-desk/  # Why Work With Jo's Virtual Desk
    faq/                             # FAQ (with FAQ schema)
    contact/                         # Contact (form + clickable phone)
    api/contact/route.ts             # Contact form handler
    sitemap.ts, robots.ts            # SEO files
    not-found.tsx                    # Custom 404
  components/                        # Header, Footer, Hero, ServiceCard, CTA, FAQ accordion, ContactForm, etc.
  lib/
    site.ts                          # Single source of truth: business info, nav, services, FAQs, copy
    schema.ts                        # JSON-LD structured data (Organization, ProfessionalService, FAQ, Service, Breadcrumb)
public/
  logo.png, hero-banner.png          # Brand assets
```

## Pages

Home · About · Services · Virtual Assistant Support · Bookkeeping & Finance Admin · Travel & Diary Management · Healthcare & Practice Support · Why Work With Jo's Virtual Desk · FAQ · Contact

## SEO & AI search

- Semantic HTML with a clear H1/H2/H3 structure
- Per-page `title` tags, meta descriptions and canonical URLs
- Open Graph / Twitter card metadata
- JSON-LD structured data: **Organization**, **ProfessionalService**, **FAQPage**, **Service**, **BreadcrumbList**
- `sitemap.xml` and `robots.txt`
- Internal linking between service pages
- Clean, descriptive URLs

## Configuration

Update business details (phone, email, domain) in [`src/lib/site.ts`](src/lib/site.ts).

The contact form posts to `src/app/api/contact/route.ts`, which currently validates and logs the enquiry. To receive enquiries by email, connect an email provider (e.g. Resend, SendGrid or Nodemailer) inside that route.

## Important wording

Healthcare & practice support is **non-clinical only**. Jo's Virtual Desk does not provide medical advice, clinical services or regulated healthcare services.
