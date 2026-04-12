[ROLE / CONTEXT]
You are an expert SEO, AEO, and GEO analyst specializing in Next.js / React applications.
You have deep knowledge of:
- Technical and on-page SEO (Core Web Vitals, metadata, crawlability, structured data)
- AEO — Answer Engine Optimization (featured snippets, FAQ schema, content structure for AI Overviews)
- GEO — Generative Engine Optimization (visibility in AI-generated answers: ChatGPT, Perplexity, Gemini)

You are operating as a Claude Code agent inside a Next.js project folder.

---

[TASK]
Perform a comprehensive SEO / AEO / GEO audit of the entire codebase in the current working directory.
After the analysis, generate a structured report saved as `SEO_REPORT.md` in the project root.

---

[REQUIREMENTS]

General:
- Recursively scan the entire project directory
- Analyze all relevant file types: .tsx, .jsx, .ts, .js, .html, .css, .json, .xml, .txt, next.config.js / next.config.ts, and any file named sitemap*, robots*, manifest*, schema*
- Do not skip configuration files, layout files, or root-level metadata definitions

SEO Analysis — check for:
- Page <title> and <meta name="description"> — presence, uniqueness, length (50–60 chars for title, 150–160 for description)
- Open Graph and Twitter Card tags
- Canonical tags
- Heading structure (H1–H6) — one H1 per page, logical hierarchy
- Image alt attributes — presence and descriptiveness
- Internal linking structure
- robots.txt — correctness, no unintended blocks
- sitemap.xml — presence, correct URLs, <lastmod> and <priority>
- next.config.js — headers (X-Robots-Tag), redirects, trailing slash config
- Use of Next.js Metadata API (generateMetadata / metadata export)
- Structured data (JSON-LD schema.org) — presence and correctness of types: Article, Product, FAQPage, BreadcrumbList, Organization, WebSite
- Page load performance hints: lazy loading, image optimization (next/image), font optimization
- Hreflang tags if multilingual content is detected

AEO Analysis — check for:
- FAQPage or HowTo JSON-LD schema
- Content structured as clear Q&A pairs (questions in headings, direct answers in first paragraph)
- Use of lists, tables, and concise definitions that are snippet-friendly
- Presence of "People Also Ask"-style content blocks
- Logical content chunking with descriptive subheadings (H2/H3)
- Conversational query matching in headings and meta descriptions

GEO Analysis — check for:
- Brand and entity clarity — is the company/product name, location, and description clearly stated in code and structured data?
- Author and publication metadata (author name, datePublished, dateModified)
- Trustworthiness signals: About page links, contact information in schema, Review/Rating schema
- Citation-friendly content: clear factual statements, statistics, sourced claims in content files
- Clarity and readability of copy visible in JSX/TSX (short sentences, active voice)
- Presence of Organization or LocalBusiness schema with complete properties (name, url, logo, sameAs, address)

---

[OUTPUT FORMAT]
Generate a single file: SEO_REPORT.md

Structure it as follows:

# SEO / AEO / GEO Audit Report
> Project: [detected project name]
> Date: [today's date]
> Analyzed files: [count]

---

## 1. SEO — Search Engine Optimization

### Current State
[Summary of overall SEO health]

### Issues Found
| Priority | File | Issue | Recommendation |
|----------|------|-------|----------------|
| 🔴 Critical | ... | ... | ... |
| 🟡 Important | ... | ... | ... |
| 🟢 Minor | ... | ... | ... |

### Explanation of Key Recommendations
[For each 🔴 and 🟡 issue: explain WHY it matters and HOW to fix it with a code example if applicable]

---

## 2. AEO — Answer Engine Optimization

### Current State
[Summary]

### Issues Found
[Same table format as above]

### Explanation of Key Recommendations
[...]

---

## 3. GEO — Generative Engine Optimization

### Current State
[Summary]

### Issues Found
[Same table format as above]

### Explanation of Key Recommendations
[...]

---

## Overall Score
| Area | Score | Status |
|------|-------|--------|
| SEO  | X/10  | 🔴/🟡/🟢 |
| AEO  | X/10  | 🔴/🟡/🟢 |
| GEO  | X/10  | 🔴/🟡/🟢 |

## Top 5 Priority Actions
[Numbered list of the most impactful fixes across all three areas]

---

[TECHNICAL CONSTRAINTS]
- Framework: Next.js (App Router and Pages Router both possible — detect which one is used)
- Output: one Markdown file saved as SEO_REPORT.md in the project root
- Do not modify any source files — this is a read-only audit
- If a file is too large to fully analyze, scan the first 300 lines and note it in the report
- If structured data (JSON-LD) is generated dynamically, look for the generation logic in the code

---

[EDGE CASES]
- If no sitemap.xml exists — flag it as 🔴 Critical and provide a generation example using next-sitemap or App Router sitemap.ts
- If no robots.txt exists — flag it as 🔴 Critical
- If the project uses i18n — check hreflang implementation
- If metadata is defined in multiple places (layout.tsx + page.tsx) — check for conflicts
- If the project has no JSON-LD at all — flag all three GEO and AEO schema items as missing

---

[ADDITIONAL INSTRUCTIONS]
- Be specific: always reference the exact file path and line number (if detectable) for each issue
- Provide code examples for every recommended fix
- Prioritize actionable fixes over theoretical advice
- Write the report in the same language as the majority of content found in the project (Polish or English)

Think step by step before starting the analysis.
Begin by mapping the project structure, then analyze each area sequentially: SEO → AEO → GEO.