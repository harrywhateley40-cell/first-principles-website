# First Principles Website

Astro/Tailwind website for First Principles, an online maths tutoring business led by Harry Whateley.

The site is designed to do three jobs:

- build trust with parents and students
- convert qualified visitors into free intro bookings
- create focused SEO pages for high-intent tutoring searches

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # Homepage sections and reusable page components
│   ├── data/              # Content data used to generate scalable pages
│   ├── layouts/           # Shared HTML shell, metadata and schema
│   ├── pages/             # Astro routes
│   ├── styles/            # Global design system and responsive styles
│   └── config.ts          # Site-wide business constants
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Key Ideas

`src/pages/index.astro` is the homepage. It assembles the page from section components such as `Hero`, `Subjects`, `Reviews`, `Pricing`, and `FAQ`.

`src/data/subjectPages.ts` contains subject landing page content. Each object in that file becomes a page through `src/pages/[slug].astro`.

This data-driven pattern keeps the site beginner-readable while avoiding copy-pasted pages. To add a new subject page, add one object to `subjectPages`.

`src/layouts/Layout.astro` owns the shared metadata: title, description, canonical URL, Open Graph tags, Twitter card tags, and optional JSON-LD schema.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

- `npm run dev` starts the local development server.
- `npm run build` creates the production site in `dist/`.
- `npm run preview` previews the built site locally.

## Launch Checklist

- Set `PUBLIC_SITE_URL` in Vercel to the live domain.
- Set `PUBLIC_BOOKING_URL` in Vercel to the real booking link.
- Replace placeholder visual treatment with real, high-trust photography.
- Verify that all testimonials are approved for use.
- Submit `/sitemap.xml` in Google Search Console.
- Add analytics and conversion tracking once the booking flow is live.

## Environment Variables

These are optional for local development, but should be set in Vercel before launch:

```sh
PUBLIC_SITE_URL=https://firstprinciplestutoring.com
PUBLIC_BOOKING_URL=https://calendar.app.google/your-booking-link
```

If `PUBLIC_BOOKING_URL` is missing, booking buttons fall back to the in-page `#book` section.

## Current SEO Foundation

- Dedicated subject landing pages generated from structured data.
- Canonical URLs and social metadata.
- JSON-LD schema for the homepage, tutoring services, and FAQs.
- Generated `sitemap.xml`.
- Generated `robots.txt`.
