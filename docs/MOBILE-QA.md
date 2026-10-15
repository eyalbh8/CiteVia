# Mobile and language QA

Checked on 15 October 2026 using the Codex in-app browser against the local site, with a final smoke test against the optimized production build.

## Layout coverage

165 page/language/viewport checks passed without document-level horizontal overflow or floating contact buttons extending outside the viewport:

- All 50 page routes in Turkish at 320 × 740.
- All 50 page routes in Spanish at 390 × 844.
- All 50 page routes in English at 768 × 1024.
- Home, contact, blog, services, marketing-team solution and assessment in Spanish and Turkish at 1440 × 1000.
- Contact, marketing-team solution and blog rechecked in Turkish at 320 × 740.

Also checked the navigation and language menu at 320 × 568. Visible form inputs use 16 px text. The mobile menu button now has a 44 px minimum width. The checks cover responsive browser viewports, not physical iOS or Android devices or their on-screen keyboards.

## Interaction coverage

- Floating Contact us navigates to the contact page. The booking link opens Eyal Ben-Chaim’s public Cal.com page, showing the 15- and 30-minute meeting choices. No appointment was booked.
- Contact form rejects empty required fields and malformed email addresses. Empty phone is accepted. A Spanish draft contains the supplied test details, correct recipient and translated subject/body. Existing field values remain after language switching.
- The browser blocked the external email-app navigation. The generated draft and its fallback link were inspected; actual mail-app launch and delivery were not verified. No email was sent. Webhook delivery requires a separately configured service and was not exercised.
- Assessment displays translated required-field errors and keeps stable role, industry and objective values through Turkish → Spanish → English switching.
- Spanish and Turkish blog search, topic filtering, empty results and Show all articles work. Result counts and reading times translate. Dates retain their React text nodes during filtering.
- All five home report tabs, Home/ArrowRight keyboard controls, all 12 home FAQs, Show more questions, all four footer accordions, mobile submenu and Escape controls work.
- Image enlargement, close button and Escape dismissal work on the methodology page.
- Language selection survives reloads and navigation. Language names remain in their own languages. The final production smoke test also verified the new footer Company facts link and translated storage notice, with no console errors observed.

## Repeatable checks

```sh
npm run typecheck
npm test
SITE_INDEXABLE=false npm run build
SITE_INDEXABLE=false npm run check:seo
SITE_INDEXABLE=true npm run build
SITE_INDEXABLE=true npm run check:seo
```

The 12 unit tests cover optional phone validation, required fields, assessment compatibility, translation idempotence, whitespace restoration, dynamic text/attributes, dates, language-name preservation, category casing and repeated switching for supplemental copy. CI runs these tests in both indexing modes. The production crawl verifies 49 reachable pages, internal links, fragments, metadata, schemas, redirects, 404 responses, generated images and sitemap/robots behavior. The thank-you page is intentionally not a navigation destination and is included in the browser layout audit.

When changing interactive copy, check English → Spanish → Turkish → English on the same page, interact with controls after switching, then reload. Use explicit option values in forms so translated labels cannot change submitted data.
