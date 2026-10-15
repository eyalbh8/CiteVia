# Site operations

## Configuration

Keep secrets in host environment settings or ignored `.env.local` files. Commit `.env.example`, not real tokens.

- `SITE_URL`: the single public HTTPS origin, without a path. Used in canonical URLs, JSON-LD, social metadata, robots, and the sitemap. Confirm the public domain before enabling indexing.
- `SITE_INDEXABLE`: set to `true` only for a public production build and its runtime. Default is `false`. Development and Vercel preview environments are always non-indexable.
- `CONTACT_EMAIL`: defaults to `eyal@citevia.com`.
- `BOOKING_URL`: optional override for the public Cal.com URL (`https://cal.com/eyal-BC`) in `src/lib/booking.ts`. Booking links open in a new tab. The private-assessment CTA remains separate.
- `CONTACT_WEBHOOK_URL`: optional HTTPS endpoint for lead delivery.
- `CONTACT_WEBHOOK_TOKEN`: optional server-only bearer token.
- `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`: optional verification values emitted as metadata. Verify the domain in the respective service.

Metadata, sitemap, and LLM text routes are pre-rendered at build time. Rebuild when changing published content, the production origin, or indexing settings, and keep the runtime environment consistent with the build. The contact and assessment pages are server-rendered so its delivery label follows the current webhook setting.

## Contact delivery

The default form is an **email draft flow**. It validates details, opens the visitor’s email application, and says that they must send the message themselves. It never claims a lead was delivered by the website. The shared Contact Us form appears on `/contact` and above the footer on other pages. It requires name, email, and company name; phone is optional. Floating contact and Cal.com links stay available on every page, including mobile.

To enable direct delivery, configure an HTTPS webhook accepting this JSON:

```json
{
  "name": "Example Person",
  "email": "person@example.com",
  "phone": "+1 202 555 0100",
  "company": "Example Company",
  "website": "https://example.com",
  "interest": "AI visibility audit",
  "role": "",
  "industry": "",
  "markets": "",
  "message": "Example inquiry",
  "source": "citevia-contact",
  "submittedAt": "2026-10-13T12:00:00.000Z"
}
```

If `CONTACT_WEBHOOK_TOKEN` is set, requests include `Authorization: Bearer <token>`. The receiver must return a 2xx response **only after accepting the lead durably**. The application waits up to ten seconds, does not follow redirects, and reports unconfirmed delivery on a timeout or non-2xx response. It does not write contact details to application logs or a local database.

The route validates origin, content type, field lengths, URL scheme, and a honeypot; the body limit is 16 KB. Add persistent abuse protection or a host-level rate limit for `/api/contact` when enabling a public webhook. An in-memory counter would not be reliable across serverless instances. Test provider acceptance and failure in staging before relying on delivery. No external lead has been sent during the migration.

## Release checklist

1. Run `npm ci`, `npm run typecheck`, `npm test`, and `npm run build` using the intended configuration.
2. Run `npm run check:seo` using matching `SITE_URL` and `SITE_INDEXABLE` values. The script requests HTML without browser JavaScript and stops its local server afterward.
3. Check home, service, solution, example study, blog, article, resources, and contact at mobile and desktop widths. Check keyboard access, blog filters, FAQs, and theme controls. Inspect `/llms.txt`, `/llms-full.txt`, `/robots.txt`, and `/sitemap.xml` for the intended origin and policy.
4. Verify the final domain, email, booking destination, and delivery integration. Configure host redirects from old domains if needed; application redirects cover paths only.
5. Review privacy wording against the chosen hosting, email, CRM, retention, and analytics arrangements. The current notice describes the application’s default behavior; it does not establish a jurisdiction-specific business policy.
6. Deploy, confirm HTTPS and indexing directives at the public URL, submit `/sitemap.xml`, and inspect representative URLs in search tools.

## Maintenance

- Keep framework security patches current and commit lockfile updates.
- CI checks both indexing modes on pull requests and pushes to `main` or `master`.
- Preserve published URL slugs; add permanent redirects when one must change.
- Keep important content in server-rendered HTML, including JSON-LD.
- The browser remembers the selected language under `citevia-language`. White is the default theme; a `citevia-theme` preference from an older version may remain in browser storage.
- Original logo PNGs remain unchanged in `public/logo/`. Their backgrounds and whitespace are preserved; the header frames them with CSS and Next.js handles delivery sizes.

The legacy draft included illustrative KPIs, fictional case studies, placeholder testimonials, looping article links, and simulated form success. The new site replaces these with substantive service explanations, a measurement framework, and complete articles. Add real case studies after verifying claims, attribution, and publication rights.

The later content expansion adds clearly labeled educational example studies at the user’s request. They are constructed scenarios with proposed work and measurement plans, with synthetic example outcomes clearly labeled as invented demonstration figures, never achieved performance. `/insights` and `/insights/:slug` redirect to their `/blog` equivalents. Keep these redirects when adding or revising articles.

The assessment form includes optional role, industry, and priority-market fields. These are included in the email draft or optional webhook payload. The shared Contact Us form uses the same optional webhook delivery and includes the phone number (an empty string when omitted); its interest is `Something else`, with empty website and message fields. Email, booking destination, and the shared form’s delivery setting come from the root layout; rebuild when changing these settings so prerendered pages stay consistent. Homepage reports use labeled static reference data and have no API credentials or live connection.
