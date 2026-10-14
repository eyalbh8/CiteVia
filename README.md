# Citevia website

A Next.js App Router marketing site for Citevia, built with TypeScript, prerendered React content, and reusable content models. The design uses a white canvas and the indigo, blue, and cyan colors of the supplied Citevia logo.

## Run locally

Use Node.js 24 (minimum 20.9).

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>. No external credentials are needed. The contact form prepares an email to **eyal@citevia.com** unless a delivery webhook is configured.

## Project structure

- `src/app/`: page routes, shared layout, contact endpoint, metadata routes, and global design tokens.
- `src/components/`: navigation, footer, cards, contact form, and reusable page sections.
- `src/components/arielos/`: the supplied marketing page components, shared navigation and footer, page copy, research articles, and static reporting views.
- `src/content/services.ts` and `src/content/marketing-services.ts`: eleven service definitions, FAQs, and approach copy.
- `src/content/articles.ts`, `src/content/blog-articles.ts`, and `src/content/arielos-articles.ts`: ten blog articles, source links, dates, and related services.
- `src/content/solutions.ts`: three audience-specific solution pages.
- `src/content/case-studies.ts` and `src/content/sector-case-studies.ts`: six clearly labeled illustrative studies; three include synthetic before-and-after figures.
- `src/content/industries.ts`: five sector pages with buyer questions, barriers, and evidence.
- `src/content/methodology.ts`: six delivery stages and their inputs and outputs.
- `src/content/demo-report.ts`: static synthetic dashboard figures, with no analytics API dependency.
- `src/app/marketing.css`: the editorial layout and responsive white/dark design system.
- `src/content/resources.ts`: glossary definitions and resource FAQs.
- `src/lib/content-index.ts`: shared page registry for the sitemap and LLM index.
- `src/lib/llms.ts`: text index and full-text companion generated from published content.
- `src/lib/site.ts`: brand identity, contact configuration, production origin, and indexing policy.
- `src/lib/seo.ts`: canonical URLs, page metadata, and schema helpers.
- `public/logo/`: the three original Citevia PNGs, delivered using Next.js image optimization where used.
- `scripts/check-seo.mjs`: an HTTP crawl of production HTML, metadata, links, sitemap, redirects, and images.
- `docs/OPERATIONS.md`: deployment, contact delivery, and release checks.
- `docs/CONTENT-AND-SEARCH.md`: content publishing and SEO/GEO/AEO maintenance.

The historical Zyqon brief is retained in `docs/legacy-brand-brief.md`; its claims are not published by this app. The old HTML/Python build has been replaced. Old `/index.html`, `/index-light.html`, and `/light` URLs permanently redirect to `/`. `/insights` and its article paths permanently redirect to `/blog` and the matching article paths.

## Content and discovery

Browse `/industries`, `/methodology`, `/private-ai-visibility-assessment`, `/solutions`, `/case-studies`, `/blog`, `/resources`, and `/ai-info`. The blog presents the supplied research library followed by the existing Citevia guides; all articles render in the initial HTML. Example studies are labeled on cards, pages, metadata, and text exports.

`/robots.txt` and `/sitemap.xml` follow the production indexing policy. `/llms.txt` provides a concise content index and `/llms-full.txt` provides readable source content. Both text files are generated during the build, use `SITE_URL`, and carry `noindex, follow` to keep the HTML pages canonical. They are supplemental reading formats, not ranking guarantees. See `docs/CONTENT-AND-SEARCH.md` for publishing and source notes.

## Checks

```sh
npm run typecheck
npm run build
npm run check:seo
```

The crawl command starts its own production server on port 3100 and stops it afterward. To inspect an already-running deployment, set `BASE_URL`. Set `SITE_URL` and `SITE_INDEXABLE` to match the build being checked.

```sh
SITE_URL=https://citevia.io SITE_INDEXABLE=true npm run build
SITE_URL=https://citevia.io SITE_INDEXABLE=true npm run check:seo
```

GitHub Actions runs both indexable production and non-indexable preview checks. Formatting is available through `npm run format`.

## Production setup

Deploy as a **Next.js application** on a compatible Node.js host or Vercel. The contact handler and image optimization require a server; this project does not use static export. Use `npm run build` and `npm start`.

Before the production build:

1. Set `SITE_URL` to the confirmed public origin. The brand default is `https://citevia.io`; the contact address is independently `eyal@citevia.com`.
2. Set `SITE_INDEXABLE=true` for the public production site only. The default is `false`; previews receive `noindex`, blocked robots rules, and an empty sitemap. Vercel preview deployments remain non-indexable even if the flag is set.
3. Configure the optional booking URL and contact webhook if direct delivery is desired.
4. Verify business information and privacy practices, then follow `docs/OPERATIONS.md`.

This repository prepares the site for discovery; publishing, DNS, search-console verification, and ongoing content reviews are separate operational steps.

## Reference-led design expansion

The homepage follows the requested source section structure: floating navigation, centered serif hero, five-tab report, market context, industries, supplied Nayax snapshot, AI referral report, insights, four service pillars, FAQs, assessment banner, and inquiry form. Instrument Serif, Open Sauce One and Poppins are self-hosted for the supplied page layouts. White is the site-wide theme.

The seven primary service categories have dedicated pages and navigation links. `/approach` and the four renamed service slugs redirect permanently to their replacements. Reports use labeled illustrative reference data; case-study metrics are synthetic and visibly labeled. No dashboard API or external analytics integration is used. See the asset and content provenance in `docs/CONTENT-AND-SEARCH.md`.

## Arielos marketing source port

The homepage, services hub and seven primary service pages, industries hub and five industry pages, methodology, about, insights and three research articles, and private assessment use the user-provided Arielos components and copy. `SiteExperience.jsx` provides the same navigation and footer on every route. Branding, contact delivery, dates, links, and metadata are adapted for Citevia. Legal pages retain the actual Citevia policies inside the source layout. Additional Citevia routes remain available.

See `src/components/arielos/`, `src/app/arielos-source.css` and `src/app/arielos-theme.css`. The source content feeds the existing metadata, sitemap and LLM indexes. The homepage Nayax comparison uses the supplied screenshot; other dashboard figures are labeled illustrations. The assessment supports the existing optional contact webhook or an email draft to the configured contact address. Source provenance and maintenance notes are in `docs/CONTENT-AND-SEARCH.md`.
