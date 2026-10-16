# Publishing record: 16 October 2026

Scheduled run: 2026-10-16, Asia/Nicosia. Author: Citevia (organization).
Article: `/blog/ai-crawler-policy-training-search`.
Focus keyphrase: **AI crawler policy**; Spanish: **política de rastreadores de IA**; Turkish: **yapay zekâ tarayıcı politikası**.

## Demand and topic selection

Read the complete shared registry, blog and foundation records, the original research library and its adapter. No separate drafts or unfinished automation branches were found. Verified `destination` as `https://github.com/eyalbh8/CiteVia.git`; starting main was `f46114d2525c1807b3edab1d8c382997077180aa`. No prior commit had this run date's trailer. The live blog returned HTTP 200 and listed the same ten articles.

Dated public questions, checked 16 October 2026:

- [Content marketing, 27 September 2026](https://www.reddit.com/r/content_marketing/comments/1wrk1ru/has_anyone_checked_whether_their_site_is_blocking/): a marketer asks whether teams audit training versus search crawler access, including hosting controls. The post includes the author's own audit promotion, so it is qualitative question evidence only.
- [Technical SEO, 9 July 2026](https://www.reddit.com/r/TechSEO/comments/1urkpk3/how_are_you_guys_measuring_bot_traffic_for_seo/): a practitioner asks how to decide which bots to allow, block or monitor and how to report log evidence to clients. Comments contain conflicting classifications; technical answers were checked independently against provider documentation.
- [Technical SEO, 11 October 2026](https://www.reddit.com/r/TechSEO/comments/1x3eisq/i_logged_every_ai_bot_on_a_brandnew_site_for_its/): a tool vendor discusses bot activity without referrals and explicitly notes unverified user agents. Used only to understand confusion, not as a benchmark or a source of performance claims.

Candidate decisions:

- **AI crawler policy** (selected): informational and implementation intent. Helps a marketing/SEO owner choose provider-specific controls, verify the hosting layer and document tradeoffs. The existing discovery-files article explains file roles, but does not distinguish provider training/search/user-request controls, mixed-purpose policies or identity verification. The new article links back rather than repeating that primer.
- **AI bot traffic versus citations**: reader wants defensible reporting; proposed focus “AI bot traffic.” Rejected as the main angle because the measurement and AI-referral guides already separate observations, visits and business outcomes. It remains a short verification boundary within the chosen article.
- **Correct inaccurate AI descriptions**: reader wants a correction workflow; proposed focus “correct AI brand information.” Rejected because the audit playbook, recommendation-gap research and citable-content guide already cover fact checking, source updates, ownership and resampling.

Other overlap checks: GEO/AEO/SEO covers the general foundation; high-intent prompt intelligence covers question selection; B2B comparison pages covers buying criteria; brand authority covers public evidence and disclosure. None answers the selected access-policy decision. No search-volume or customer-interview claims are made.

## Technical evidence

- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots): independent GPTBot and OAI-SearchBot controls; ChatGPT-User serves user actions and does not determine search inclusion.
- [Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended): training and specified grounding uses; not a Google Search inclusion or ranking control. The fragment was checked in fetched HTML.
- [Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers): search versus user requests; verification using agent identity and current published IP ranges.
- [Cloudflare AI bot policies](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/): behavior categories and mixed-purpose crawlers. No blanket inference from a dashboard label or stale default setting.
- [Google AI features](https://developers.google.com/search/docs/appearance/ai-features): separate Google Search requirements; no inclusion guarantees.

Provider facts are attributed beside their claims. The verification checklist and fictional software-vendor example are editorial recommendations, explicitly distinguished from measured results. Four contextual internal links lead to the discovery-files guide, audit, measurement guide and SEO service.

## Yoast-based editorial assessment

Reviewed against [Yoast SEO analysis](https://yoast.com/features/seo-analysis/) and [Yoast readability analysis](https://yoast.com/features/readability-analysis/). This is an editorial assessment; the WordPress plugin and its scoring analyzer did not run.

- Distinct intent/keyphrase and stable unique slug; the direct answer comes first. Headings explain decisions, implementation and verification.
- English, Spanish and Turkish titles, descriptions, paragraphs, examples, bullets, FAQs, anchors, table of contents and image alternatives were reviewed. SEO titles including the brand suffix are 48/54/50 characters; descriptions are 146/144/154 characters. These are length checks, not search-display guarantees or pixel-width scores.
- Short paragraphs, active instructions, varied sentence openings and five substantive follow-up questions. No padding, unverified numerical claims, fabricated experts or ranking promises.
- Reuses the site's supplied generated artwork `public/images/generated/service-intelligence.jpg`, whose provenance is documented in CONTENT-AND-SEARCH. Visually checked: hands at a keyboard in blue light. The alternative text describes the image without keyword stuffing.

## Rendering and schema decisions

The optional shared article FAQ record supplies visible H3 questions and complete paragraph answers, the table-of-contents link, FAQPage `mainEntity`, and the English LLM full-text export. FAQs remain visible without interaction or JavaScript. FAQPage describes the existing canonical webpage node, avoiding a second conflicting webpage node; BlogPosting references it through `mainEntityOfPage`.

The site still serves English initially at one canonical URL. LanguageProvider switches the document in the browser; no locale URLs or hreflang relationships were invented. The opted-in article and breadcrumb graphs follow the same translation dictionary, including FAQ answers, metadata, headline and `inLanguage`. Word counts include section headings, the takeaway, body, example and FAQ; they exclude site furniture. Reading times use the corresponding language's text. Existing LLM routes remain English and retain their current noindex headers.

Checked [Schema.org FAQPage](https://schema.org/FAQPage), [Question](https://schema.org/Question), [Answer](https://schema.org/Answer), [BlogPosting](https://schema.org/BlogPosting), [Google Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article) and [structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies). Google's former FAQ guidance now redirects to its [documentation updates](https://developers.google.com/search/updates), which states that FAQ rich results are no longer shown. The article makes no rich-result eligibility promise. Local validation checks syntax, required content and visible/schema agreement; it is not a claim that Google's hosted Rich Results Test ran.

## Release validation

- `npm ci`, `npm run typecheck`, and all 17 tests passed. Tests include complete linked-paragraph reconstruction (punctuation and whitespace), repeat language switching, FAQ/schema translations and recovery from a later Next.js head update.
- Production build and crawl passed with `SITE_URL=https://citevia.io` and `SITE_INDEXABLE=true`: 50 reachable content pages, 48 sitemap URLs, unique metadata, canonical URLs, schemas, internal links/fragments, assets, redirects and discovery exports.
- Preview build and crawl passed with the same origin and `SITE_INDEXABLE=false`: 50 pages, noindex policy, blocked robots rules and an empty sitemap. Build/runtime settings matched in both modes.
- English, Spanish and Turkish browser checks passed: complete article and five complete FAQs, heading hierarchy and keyboard TOC navigation, directory/card navigation, language persistence and return to English, titles/descriptions/social metadata, alt text, breadcrumbs, loaded artwork, no English body fallback in Spanish/Turkish and no console errors. Desktop and 390×844 mobile layouts had no horizontal overflow; all FAQ answers were visible without disclosures.
- FAQPage questions/answers exactly matched the served visible FAQ in each language. BlogPosting and FAQPage used the selected `inLanguage`; visible/schema word counts matched at 901 English, 1081 Spanish and 833 Turkish words. Reading times were 5/5/4 minutes. Initial server HTML remained English, including its schema. The generated full-text export included every FAQ question and answer.
- All seven external article destinations returned HTTP 200; the Google-Extended fragment exists. The live blog before publication contained exactly the ten previously reviewed articles. Complete diff reviewed; no unrelated changes included. Remote main was unchanged at the prepublication fetch.
