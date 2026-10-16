# Content and search maintenance

## Architecture

The site serves 50 content pages: home, service index, eleven services, methodology, about, blog index, eleven articles, solutions index, three solutions, industry index, five industries, case-study index, six illustrative studies, resources, company facts, contact, private assessment, privacy, and website terms. A separate thank-you utility route is also available. The 48 marketing and editorial pages enter the production sitemap. Privacy, terms and thank-you retain canonicals and use `noindex, follow`.

Next.js server routes provide metadata and prerender the primary page content, including the supplied interactive React components. Client components handle shared navigation, five static report tabs, image dialogs and contact interaction. Pages use semantic headings, descriptive links, image alternatives, and accessible FAQ disclosures. Brand, origin, and contact details share one configuration.

Every page has a title, description, canonical URL, Open Graph metadata, and social image. JSON-LD describes the visible organization, website, page, breadcrumbs, services, articles, and FAQ content. FAQPage markup mirrors the questions and answers shown on the homepage, services, methodology, and resource pages; it does not guarantee a search rich result or AI citation. The structured data contains no fabricated ratings or performance claims.

## Service updates

Edit the seven primary services in `src/components/arielos/content/services.js`. Their visible pages, navigation and `src/content/services.ts` registry share those records. Four additional Citevia services remain in `src/content/services.ts`; `src/content/marketing-services.ts` retains the legacy categories and primary slug ordering. Each entry includes a stable slug, description, direct explanation, audience, substantive scope sections, deliverables, and FAQs. The service directory, routes, and sitemap follow automatically. Add relevant internal links; a sitemap is not a substitute for navigation.

Update `site.updated` in `src/lib/site.ts` after substantive site-wide or service revisions. Do not use build timestamps to imply freshness. If services need independent review schedules, add an `updated` field to the model and sitemap.

## Article publishing

Add an entry to `src/content/blog-articles.ts` (the three foundation guides live in `src/content/foundation-articles.ts`; `src/content/articles.ts` combines the registries) with:

- A stable unique slug, descriptive title, and one natural `focusKeyphrase` that matches the reader’s intent.
- A concise `seoTitle` (the site adds ` | Citevia`), a specific description, and a direct takeaway.
- Natural use of the keyphrase in the title, opening, description, and a relevant heading; use related terms where they read better.
- Sections explaining the answer, tradeoffs, evidence, and limitations.
- Contextual links to related articles or services, plus primary external sources beside the claims they support.
- Short paragraphs, clear sentences, useful subheadings, and practical examples or steps. Avoid padding to meet a word count.
- Accurate publication and modification dates.
- A related service appropriate to the topic.

All articles share the same server-rendered blog template, a table of contents, a direct answer, related reading and `BlogPosting` structured data. The title, dates, author, image and word count come from the same records as the visible article. Article images are selected in `src/content/article-media.ts`; keep their alternative text descriptive. Research examples remain visibly labeled, and no independent expert review is implied.

Articles published from October 16, 2026 include `faq: { title, items: [{ question, answer }] }` with four to six substantive questions. Keep FAQ answers as plain text. The template renders the same items as visible H3 headings and paragraphs and as FAQPage data on the canonical webpage node. The full-text export and word count include them. The crawl check blocks publication when new articles omit FAQs or when visible content and schema disagree.

For new multilingual article copy, `src/i18n/article-copy.js` registers complete strings and the actual text fragments around Markdown links. See `src/content/ai-crawler-policy.js` for the first maintained English/Spanish/Turkish record. Add its dictionaries to `translate.js` and attach them to the article's `translations` field for language-specific reading times. The current canonical URL still serves English initially. Opted-in article and breadcrumb schemas follow the browser language, including FAQ content and visible word count; this does not create separately indexed language pages. Review language switching and directory navigation in a browser. Keep the run's demand evidence, overlap review, source checks and editorial assessment in `docs/publishing/`.

Paragraphs, bullets and example text support links using `[descriptive anchor](/blog/article-slug)` and `[source title](https://source.example/page)`. `ArticleText` renders these as real HTML links. Internal links use Next.js navigation; external editorial links are ordinary followed links. Only site-relative paths and HTTP(S) destinations are accepted, with no raw HTML. Other Markdown formatting is not supported. The LLM companion preserves the links and makes internal destinations absolute. Reading times count visible words rather than URL strings.

The October 14 editorial pass follows [Yoast’s SEO analysis guidance](https://yoast.com/features/seo-analysis/) and [readability guidance](https://yoast.com/yoast-seo-readability-analysis/): focused intent, useful titles/descriptions, relevant links, concise paragraphs, clear headings and natural language. This Next.js site does not run the Yoast WordPress plugin, and no plugin score or ranking result is claimed. Before publishing, review each article’s sources, internal destinations, actual rendered metadata and readability. Keep numeric examples explicitly hypothetical.

The visible byline identifies Citevia as the organization author. Do not invent a person. When named experts are available, add real author profiles and update Article schema to match. Keep publication dates stable and change modification dates after substantive revisions.

The canonical blog lives at `/blog`; former `/insights` URLs redirect permanently. The source library lives in `src/components/arielos/content/insights.js`, with `src/content/arielos-articles.ts` adapting those records into the shared article registry. Article routes, the directory, the sitemap, and text exports follow the shared article array automatically. The Blog landing page features a foundation guide and a searchable directory of all articles, ordered by publication date. Topic filters, publication dates, reading times and article images help readers browse. The initial HTML includes the complete directory; filtering is local and does not create duplicate URL variants. Shared navigation, footer and the homepage link to `/blog` using the Blog label. Blog and breadcrumb structured data describe the landing page. When adding a new article, review its card artwork and related links for relevance.

## Solutions and example studies

Edit `src/content/solutions.ts` to maintain the three audience pages. Each should answer a different buyer need and link to relevant services and a worked example. Avoid multiplying pages for minor wording variations.

The user approved labeled examples while verified client stories are unavailable. `src/content/case-studies.ts` contains constructed educational scenarios, not anonymized engagements. Labels appear in the directory, cards, detail-page metadata, and LLM exports. They use WebPage schema and contain no ratings, testimonials, or achieved performance metrics. Three sector scenarios in `src/content/sector-case-studies.ts` include explicitly synthetic before-and-after numbers, fictional company profiles, a 90-day plan, and interpretation. The worked property scenario uses `src/content/demo-report.ts`. The homepage separately uses `src/components/arielos/data/workspaceData.js`. Its Nayax comparison is transcribed from the user-supplied ranking screenshot; the remaining reporting previews retain clearly labeled illustrative figures. Neither dataset establishes a Citevia engagement or an achieved improvement. Keep counts and denominators consistent across cards, reports, case details, and text exports.

To publish a real client story later, obtain publication permission, source evidence, dates, baseline, definitions, and attribution limits. Introduce an explicit verified-story content type before removing example labels; never turn an example into a client claim by changing a name.

## SEO, GEO, and AEO priorities

1. Make the site accessible: verify rendering, status codes, canonicals, internal links, and host-level crawl restrictions.
2. Explain the business, audience, and offer consistently.
3. Answer useful questions with verifiable content and original expertise; label illustrations clearly.
4. Maintain sources, product information, and dates. Use actual evidence for case studies.
5. Monitor indexing, field performance, qualified inquiries, and a documented sample of AI answers. Keep mentions, citations, referrals, and business outcomes separate.

No framework, schema, or format guarantees rankings or AI citations. The implementation follows [Google’s AI features guidance](https://developers.google.com/search/docs/appearance/ai-features), [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), and [structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## Discovery files

- `src/lib/content-index.ts` is the shared registry for `/sitemap.xml` and `/llms.txt`. Dynamic content entries come from the same arrays used to generate pages; add newly introduced static marketing routes here.
- `/robots.txt` allows public content and assets in indexable production and excludes API paths. The wildcard rule also applies to cooperating AI crawlers. Preview builds disallow crawling. Robots rules are not authentication.
- `/sitemap.xml` lists canonical HTML pages with meaningful modification dates. It omits legal pages, redirects, filtered variants, and text mirrors. It remains empty for previews.
- `/llms.txt` is a Markdown overview following the [llms.txt proposal](https://llmstxt.org/), with identity, grouped content links, and example labels.
- `/llms-full.txt` is a text companion for methodology and service FAQs, industries, services, solutions, studies, blog articles, glossary entries, and resource FAQs. It is generated directly from the same published records, including sources and dates.
- Both text routes return `text/plain; charset=utf-8` and `X-Robots-Tag: noindex, follow`. This preserves canonical HTML as the search destination while leaving the text available to readers and tools. A site-wide `Link: </llms.txt>; rel="describedby"` header advertises the index. Rebuild after content or origin changes.
- `/ai-info` provides a human-readable identity and content reference with no invented locations, certifications, clients, or endorsements.

These files support discovery and reading. `llms.txt` is not required for Google AI search and does not guarantee citations or ranking improvements. See [Google’s AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).

## Inspiration and sourcing

The October 2026 expansion takes structural inspiration from [igeo.ai](https://igeo.ai/) (connected solutions, editorial resources, customer-story discovery) and the user-supplied Arielos project (audience-specific pages, buyer questions, and research-led explanations). The initial expansion used original Citevia articles and examples. On October 14 the user explicitly requested a source port from their local Arielos project; the homepage copy, images, animations and three research articles now derive from that supplied project. The homepage Nayax comparison uses the user-supplied ranking screenshot. The other reporting views are labeled illustrative, with no claim of Citevia performance. Technical guidance links to primary Google Search Central documentation and the llms.txt proposal beside relevant claims.

## Review cadence

- After content changes: build, run crawl checks, and inspect changed pages.
- Monthly: review broken links, indexing errors, inquiry quality, and outdated information.
- Quarterly: reassess buying questions, current offerings, and source evidence.
- After a major product, brand, domain, or engine change: revisit affected pages and measurement assumptions.

This is a documented maintenance workflow. No recurring automation or analytics service was enabled by the migration.

## Arielos source port (October 14, 2026)

The user supplied `/Users/eyalbenhaim/Desktop/Arielos` as the source of the requested marketing site and explicitly requested its homepage followed by the remaining page copy and top navigation. This supersedes the earlier approximation and the Alora-app reference. The source project is unchanged.

- `src/components/arielos/` contains the ported React homepage, original inline platform/industry icons, orbit and message animations, moving platform marquee, five dashboard views, animated research charts, four alternating image sections, FAQs, navigation and footer. `Pages.jsx` contains the services, industries, methodology, about and research layouts; `AssessmentPage.jsx` provides the source assessment layout with Citevia delivery behavior.
- `SiteExperience.jsx` mounts the source navigation and footer once for every route. Its route-aware scroll effects reset when visitors navigate. Citevia's logo, light theme, contact address and configured booking destination are shared site-wide.
- `src/app/arielos-source.css` preserves the source stylesheet, scoped under `.arielos-home`, with namespaced animation names. `arielos-theme.css` supplies Citevia's white hero, original logo and violet/cyan colors. `site-base.css` places the remaining Citevia route styles in a lower cascade layer. Legal text remains Citevia-specific within the source page shell.
- The port uses JSX with Next.js Link and image delivery, and is prerendered by the Next.js routes. `allowJs` supports maintaining the supplied JSX alongside the typed routes. No Vite, React Router, analytics client, calendar embed or external reporting API was added.
- Six exact generated images are copied into `public/images/generated/`. The earlier copies in `public/images/editorial/` are retained for existing references. Open Sauce One and Poppins WOFF2 font files and their licenses are in `public/fonts/arielos/`. Instrument Serif uses the existing Fontsource package.
- `src/components/arielos/data/workspaceData.js` shares the supplied Nayax snapshot across the hero, account brief, mentions view and lower comparison: Nayax (rank 1.0, 1,403 mentions, sentiment 92), squareup (2.3, 507, 88), Cantaloupe (2.7, 496, 96), 365 Retail Markets (4.3, 237, 94), and ingenico.com (5.0, 230, 88). No reporting period, share of voice or platform split was supplied, so the snapshot uses average rank and brand mention bars. Traffic, prompt and citation previews use Nayax naming and remain labeled illustrative. Animated overlays are concepts. No live data is requested.
- Additional source photographs are in `public/images/` and the supplied product screenshots are in `public/images/product/`. Page-specific text comes from `pageContent.js`, `content/services.js` and `content/insights.js` in the Arielos component directory. The typed registries derive primary service, industry, methodology and research content from these same records for metadata and text exports.
- `src/content/arielos-articles.ts` adapts the three supplied research articles, using Citevia publication dates and the maintained editorial copy. The October 14 editorial revision removes repeated draft paragraphs and supplies contextual internal and external links. These join the same article registry used by the blog, metadata, sitemap and LLM exports.
- Homepage FAQ answers are included in the full-text LLM companion. Statistical cards link to Bain's original research and Adobe's March 2026 retail findings; these are separate from the illustrative dashboards.
- The shared footer's compact contact form prepares an email draft using the configured contact email. Visitors review and send it themselves. Booking buttons use `site.bookingUrl`. The assessment uses the existing contact validation and optional webhook; without a configured webhook it prepares an email draft. `/thank-you` does not assert delivery without confirmation and remains outside the sitemap.

White is the explicit site-wide design. Keep the content visible in initial HTML and preserve the distinction between the supplied snapshot and illustrative reporting when revising the numbers.
