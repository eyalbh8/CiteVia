# Publishing record: 21 October 2026

Scheduled run: 2026-10-21, Asia/Nicosia. Organization author: Citevia.
Article: `/blog/faq-schema-ai-search`.
Focus keyphrase: **FAQ schema**; Spanish: **schema FAQ**; Turkish: **SSS şeması**.

## Research and topic choice

Read the complete registry, all twelve underlying blog/foundation/research articles, adapters, prior publishing records, article model, translation provider and dictionaries, schema rendering, media mapping, text exports, repository instructions, operations guide and CI workflow. Read the bundled Next.js JSON-LD and metadata guides before editing. Context7 MCP was unavailable; no framework API changes were needed. No drafts, unfinished worktrees or publishing branches were found. The initial clean checkout matched the local `destination/main` tracking ref at `41b0706`; both verified destination URLs point to `https://github.com/eyalbh8/CiteVia.git`. The unrelated origin remote was not used. No commit had today's run trailer. The live blog showed the same twelve articles and `index, follow`.

Candidate comparison:

- **Selected: FAQ schema maintenance for AI search.** Reader problem: deciding whether to maintain markup after Google's FAQ display retirement, and checking that it accurately represents reader-visible answers. Search intent: practical keep/fix/remove decisions and implementation review. The focus phrase is unused in the registry. The new article covers retired display versus surviving vocabulary, shared question/answer records, translated document agreement, conflicting generators and a specific QA checklist.
- **Rejected: AI citations without visits.** Reader problem: explaining why citation visibility does not produce attributable leads; intent: measurement and diagnosis; possible phrase: AI citation attribution. The measurement and referral articles already separate sampled answers, sessions, confirmed inquiries and unknown attribution. A new generic explainer would duplicate their answer.
- **Rejected: multilingual AI discoverability.** Reader problem: translated pages missing in search; intent: implementation planning; phrase: multilingual SEO. The October 19 article already answers the URL, canonical, hreflang and complete-journey questions. The new FAQ article links there for those decisions rather than restating them.

Closest existing content: the citable-page guide explains accurate structured data in general, without the FAQ retirement, maintenance decision or FAQ-specific validation. The multilingual guide covers language discovery and complete translations, without generated FAQ consistency and conflicting output. The discovery-files primer concerns crawler/index controls, not FAQ semantics. The new article adds a specific operational answer rather than another broad GEO checklist.

## Dated public question evidence

Reviewed 21 October 2026. Public discussions are qualitative evidence of questions, not interviews, representative demand estimates, verified experiments or Citevia outcomes. Claims in comments were not used as technical authority.

- [26 September 2026: Are FAQ blocks still relevant?](https://www.reddit.com/r/seogrowth/comments/1wqomdc/are_faq_blocks_still_relevant/): asks whether article FAQs copied from People Also Ask still help. Grounds question relevance, the absence of an ideal citation-oriented question count and the keep/remove decision.
- [15 July 2026: Stuffing FAQ schema on every page for AI citations](https://www.reddit.com/r/AISEOforBeginners/comments/1ux28on/stuffing_faq_schema_on_every_page_for_ai/): questions forced FAQ sections and repeated brand wording. Grounds useful visible answers rather than schema-only additions. Its claims about penalties or model behavior are not repeated.
- [24 September 2026: What changes in an AEO/GEO audit?](https://www.reddit.com/r/SEO/comments/1wp2k13/when_auditing_a_site_for_aeogeoaiseo_what_do_you/): an ecommerce auditor asks what differs from SEO; conflicting schema recommendations show the need for a bounded implementation check.
- [15 June 2026: accordion/component schema issue](https://forum.bricksbuilder.io/t/duplicate-accordion-faq-schema-not-generated-when-part-of-component/39454): public implementation question about FAQ output in reusable components. Supports checking the delivered output rather than trusting a configuration switch. The article does not diagnose or discuss that product.

The five FAQs address removal, collapsed answers, schema-only claims, question count and conflicting generators. They are editorial follow-ups to these research themes and the implementation workflow, not claimed verbatim customer questions.

## Technical sources and boundaries

- [Google documentation updates](https://developers.google.com/search/updates): May 8 entry records FAQ rich results stopping on May 7, 2026; June 15 entry records documentation removal. The old FAQ documentation redirects here. No promise of FAQ rich-result eligibility is made.
- [Google generative AI optimization guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): structured data is not required for Google's generative AI search. This is a Google-specific rule, not an assertion about every assistant's retrieval system.
- [Schema.org FAQPage](https://schema.org/FAQPage), [Question](https://schema.org/Question), [Answer](https://schema.org/Answer) and [BlogPosting](https://schema.org/BlogPosting): type semantics and question/answer properties. A vocabulary definition is not evidence of increased citations.
- [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies): visible, relevant and accurate content; multiple complementary types can describe a page. Also checked [Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article) for organization authorship, dates, headline and image.
- [W3C accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/): reachable answers, buttons and keyboard operation. Plain question headings with visible answers are used for this article.
- [Schema.org validator](https://validator.schema.org/): linked as a reader's validation tool. Our checks are repository assertions and rendered-document comparisons; do not imply that a hosted validator or Google Rich Results Test ran.

The fictional export example is explicitly labeled and contains no customer statistics or Citevia results. The keep/fix/remove workflow and measurement cautions are editorial recommendations. No ranking, citation or conversion benefit is guaranteed.

## Editorial, artwork and localization

Manual assessment against current [Yoast SEO analysis](https://yoast.com/features/seo-analysis/) and [readability guidance](https://yoast.com/features/readability-analysis/), not a WordPress plugin score. The opening answers the question, followed by five short sections, a fictional example, decision criteria, a five-step verification checklist and five substantive FAQs. Focus phrases or natural equivalents appear in the title, opening, metadata and relevant headings. Sentences use direct instructions and varied openings. English/Spanish/Turkish paragraphs and metadata were reviewed separately; no fixed keyword density or reading-grade claim is made.

Titles including the Citevia suffix are 53/42/46 characters (en/es/tr). Descriptions are 151/151/159 characters (en/es/tr). The longest ordinary paragraphs are 61/71/56 words. Word counts, including section headings, examples, bullets and FAQs, are 988/1080/870; reading times are 5/5/4 minutes. These follow the existing article counting convention.

Reused the supplied generated `service-authority.jpg` artwork documented in the source-port provenance. Visually inspected: printed documents and photographs on a desk under a reading lamp. Its existing descriptive alt text is translated; it is an editorial illustration rather than a purported customer scene.

Rediscovered en/es/tr in LanguageProvider. All new strings, metadata, question headings and complete answers, anchors and actual text fragments around links are registered using createArticleCopy. Existing UI dictionaries supply navigation, contents labels, byline, dates, category and related reading. A short initial English fragment collided with the older crawler article; moving it into a descriptive anchor resolved the conflict. Repeated-switch tests cover all three recent articles.

Preserved one canonical URL, initial English server content and English LLM companions. The selected browser language controls the visible article and opted-in schema; no separate language URLs or indexing claims were added. FAQs flow through the existing shared template, schema, word counts and full-text export without a new model.

A pre-existing metadata bug recorded on October 19 translated the protocol value `og:type=article`. This run limits meta-content translation to human-readable fields, preserving protocol values, URLs and dates. Regression coverage verifies translated prose and unchanged protocol fields through repeated switches.

## Validation

- Locked dependency installation, typecheck and all 31 tests passed on the initial base. Production and preview builds and crawls passed: 52 pages, 50 production sitemap URLs and zero preview sitemap URLs. A sandbox restriction initially prevented binding the crawl server; the authorized retry completed.
- Eight external article destinations returned HTTP 200; none has a fragment. Google’s update log redirected to a language parameter on one request, retaining the same document. Internal destinations, TOC fragments, artwork, directory entry, metadata, redirects and text companions passed the crawl. All five complete question-and-answer pairs were separately verified in the full-text export.
- Browser review covered every new paragraph, heading, bullet, example, anchor and FAQ in English, Spanish and Turkish. No unintended English fallback or mixed article content was found. Schema property names and product names intentionally remain literal. Titles, descriptions, category, alt text, dates, byline, contents navigation and related reading were inspected.
- Language persisted through directory-to-article navigation in every supported language. The translated directory card and reading time were correct. Repeated switching restored English exactly and preserved og:type=article.
- Five visible H3 questions and complete paragraph answers matched FAQPage exactly in each language. BlogPosting and FAQPage language matched the displayed document. Word counts matched the DOM: 988/1080/870, including FAQs. One BlogPosting, one FAQPage and one breadcrumb graph appeared, with correct organization author/publisher, headline, description, image, canonical identifiers and 2026-10-21 dates.
- Desktop and 390×844 mobile views were inspected, including visible FAQs in all languages and mobile language-menu operation. No horizontal overflow or browser console errors occurred. Answers are ordinary visible paragraphs, so no disclosure is required to read them.
- A later network-enabled fetch found two newer main commits (navigation and multilingual layout/fonts). Neither changes the article library; today's trailer was still absent. The checkout fast-forwarded to `7eaa0f9` without resetting, stashing, replacing, or including unrelated changes. The article patch remained separate. The updated operations notes and dependency manifest were reviewed. Final validation was repeated on that latest base; results follow below.
- Final base `7eaa0f9`: reinstalled the updated lockfile, then passed typecheck, all 31 tests, preview build/crawl (52 pages, zero sitemap URLs) and production build/crawl (52 pages, 50 sitemap URLs), with matching build/runtime indexing settings.
- Repeated browser review after the refresh: en/es/tr metadata, five visible FAQ answers and exact schema agreement, word counts, mobile typography and language controls all passed. No overflow or browser console errors. The upstream changes did not introduce a duplicate article or change the selected topic gap.
- Reviewed the complete run diff, including the new article and editorial record. Only this run's seven files are included in the publishing commit. Post-push remote confirmation, CI and live deployment results are recorded in automation memory and the run report.
