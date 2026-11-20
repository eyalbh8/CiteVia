# November 20, 2026 · Google AI opt-out

## Demand and distinct task

Article: “Google AI opt-out: check the scope before you switch.” Focus keyphrase: “Google AI opt-out.” Reader: a publisher, business owner or SEO team deciding whether to exclude a section from Google's Search AI features while preserving ordinary search eligibility. The practical deliverable is a scoped participation decision, with an inherited-setting check, baseline, review owner and reversal criteria.

Fresh public research on November 20:

- [November 13, 2026 SEO discussion about AI click data](https://www.reddit.com/r/SEO/comments/1xv2ktq/anyone_else_excited_to_see_googles_ai_click_data/): the publisher is considering exclusion and participants dispute the value of impressions without visits. This is evidence of a decision problem, not proof of lost traffic or a causal benefit from opting out. The article does not repeat participants' forecasts about future controls or click reporting.
- [September 7, 2026 discussion asking whether to opt out](https://www.reddit.com/r/AI_SearchOptimization/comments/1w9rqmi/would_you_opt_your_site_out_of_googles_ai_search/): asks what would justify the choice and raises reuse versus visibility. These questions inform the distinctions between participation, training and observed business outcomes.
- [June 28 Search Central community question about a direct opt-out](https://support.google.com/webmasters/thread/445784799/when-will-google-add-a-direct-ai-overview-gemini-opt-out-feature-in-gsc?hl=en): historical evidence of confusion between Search and Gemini controls. Its rollout-era advice is not used as the current technical authority.

Dated search records establish the discussion dates; rendered Reddit pages may show relative timestamps from older crawls. Both Reddit discussions opened through research. The in-article Reddit destination also returned HTTP 200 during link validation.

Read the complete 24-article registry and underlying blog, foundation, research and maintained multilingual modules; inspected publishing history, available worktrees and the live directory. The live directory contained the 24 expected slugs. No unpublished November 20 draft or run trailer was found. November 16 and 18 worktrees were clean.

Candidate comparison by task and intent:

- **Google AI opt-out — selected.** Decision/implementation intent. The crawler-policy article separates training and retrieval permissions at the bot/hosting layer; it does not explain Search Console property inheritance or an exclusion decision. The Search Console AI report article interprets performance data; it does not explain changing participation or coordinating child overrides. The new article uses both as supporting reading rather than repeating their full workflows.
- **Outdated SaaS pricing in AI answers — rejected.** Correction intent, possible phrase “AI search outdated prices.” October 21, 23 and 26 public questions surfaced current demand, but the existing product-data article already reconciles offers, update timing and stale sources. Renaming that workflow would add substantial overlap.
- **Gated reports and AI discovery — rejected.** Publishing/access intent, possible phrase “gated content AI search.” The PDF guide already handles signed-out file access, restricted evidence and a useful public summary. A general treatment would repeat it.

The fictional two-section publisher is a labeled example, not an interview, engagement or outcome. No claim that exclusion recovers clicks, that inclusion ensures citations, or that one observation proves universal behavior.

## Technical sources and editorial decisions

Verified November 20:

- [Search generative AI control](https://support.google.com/webmasters/answer/16908024?hl=en): listed Search/Discover features, settings location, inclusion/exclusion/inheritance, child-property overrides, scope limits, caching and propagation. Current documentation explicitly includes URL-prefix child properties. The article does not adopt a forum comment's blanket claim that narrower section testing is impossible.
- [Control what you share with Google Search](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share), updated October 21: separates search removal, preview controls, access protection and Search AI participation.
- [Robots metadata specification](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#nosnippet): ordinary text-snippet consequences and direct AI-input limits. The actual `nosnippet` fragment exists in the fetched destination.
- [Generative AI performance report](https://support.google.com/webmasters/answer/16984139?hl=en): observed impression dimensions, reporting scope and insufficient-impression explanation for an absent report. The article asks readers to inspect currently available metrics; it makes no claim about an unshipped reporting roadmap.
- [AI feature eligibility](https://developers.google.com/search/docs/appearance/ai-features): inclusion is not a guarantee of being selected for an answer. Existing provider-specific guidance is linked for training/access detail.
- [Schema.org FAQPage](https://schema.org/FAQPage), [Google Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article), [structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) and [Google's documentation updates](https://developers.google.com/search/updates): accurate visible content and matching data. FAQ rich-result eligibility is not claimed; Google's FAQ display feature has been retired.

Manual editorial assessment follows [Yoast SEO analysis](https://yoast.com/features/seo-analysis/) and [readability analysis](https://yoast.com/features/readability-analysis/). No Yoast plugin or score is claimed. English, Spanish and Turkish each have a direct opening, natural keyphrase/equivalents, descriptive H1/subheadings, short paragraphs, active instructions, an illustrative decision record, contextual anchors and complete useful FAQs. Maximum body-paragraph lengths are 55/78/55 words. SEO titles including the Citevia suffix are 48/56/53 characters; descriptions are 145/148/145. The cover alternative describes the photograph without forcing the keyphrase. Organization author: Citevia. Publication/modification: November 20 in Asia/Nicosia; old article dates unchanged.

## Cover photograph

Searched Unsplash afresh for controls, switches and selector panels. Inspected a contact sheet of all 24 current covers and the full new photograph. Selected [Hans Westbeek's yellow selector switch](https://unsplash.com/photos/close-up-of-a-yellow-toggle-switch-on-a-control-panel-7Oqc89s3VI8), explicitly free under the [Unsplash License](https://unsplash.com/license). It illustrates choosing a control; it is not presented as a Search Console screenshot.

- ID: `7Oqc89s3VI8`.
- Original image URL from the source page's actual image link: `https://images.unsplash.com/photo-1758873263914-230f8ff60569`.
- Stable src adds `fit=crop&w=1600&q=85&fm=jpg`.
- Checked November 20, 2026. Canonical source, photographer, license, English/Spanish/Turkish alternative text and check date recorded in the explicit slug mapping.
- Unique ID and underlying path; visually distinct from the existing collection, with no near-identical shoot. All earlier mappings preserved.

## Validation and release

Completed before publication:

- `npm ci`, typecheck, three media tests and all 84 repository tests passed. The new article participates in the existing language-switching, link-fragment, metadata and FAQ schema regression suite. No dependency or lockfile changes.
- Production and preview builds passed. SEO crawls used the corresponding build settings (`SITE_URL=https://citevia.io`, `SITE_INDEXABLE=true/false`). Both passed all 66 content pages, metadata, links, fragments, schema, assets, redirects and discovery checks. Production sitemap: 64 URLs. Preview: zero URLs and non-indexable directives.
- Isolated real headless Chrome exercised EN → ES → TR → EN through the language menu and directory navigation. All 32 article body fields matched the expected localized text, including text fragments around Markdown links. No browser page errors or horizontal overflow at 390 pixels.
- Five complete visible FAQ pairs in each language exactly match FAQPage Question.name and acceptedAnswer.text. The FAQ heading, TOC, source anchors, example and all three image alternatives are translated. Keyboard activation of the TOC reaches the visible FAQ. Desktop and mobile screenshots were inspected, including each language's final full answer.
- Exactly one BlogPosting, FAQPage and BreadcrumbList. Headline, description, canonical/mainEntityOfPage, author/publisher, dates, inLanguage and stable cover agree with the visible document. Word counts including FAQs are 987/1136/854 for EN/ES/TR and match the rendered text and reading time.
- Initial HTML without JavaScript contains the complete English article and all five visible FAQs with matching schema. The existing single English-first canonical remains; browser language switching does not create independently indexed language URLs.
- Registry integration verified in the directory, related reading, sitemap and both LLM text exports; the full-text export contains complete FAQ questions and answers. Next.js optimized cover: HTTP 200 image/jpeg. Card, cover, social metadata and schema use the same new source.
- All five contextual external destinations (four Google primary sources and the Reddit discussion), all three contextual internal destinations, and the remote JPEG returned HTTP 200. The external `#nosnippet` fragment exists. Unsplash source/license verified through web research; its direct Python request was restricted, so image provenance was obtained from the source page's actual linked CDN URL.
- Full content and integration diff reviewed, with no prior article dates or image assignments changed. Latest pre-publication fetch found `destination/main` unchanged at the base, with no November 20 run trailer. Unrelated shared work remains untouched.

Publication, CI and live deployment outcomes are recorded separately in automation memory and the final report.

The isolated worktree is `/private/tmp/citevia-blog-nov20`, based on verified CiteVia `destination/main` at `ab8dd5a`. Shared checkout edits are preserved. `origin` points to another repository and is not a publication destination.
