# SEO / AEO / GEO Audit Report
> Project: POL-GAZ Szczecin
> Date: April 11, 2026
> Analyzed files: 15+ (Full App Router codebase scan)

---

## 1. SEO — Search Engine Optimization

### Current State
The project's overall SEO health is very good. It correctly utilizes Next.js App Router metadata API, generating solid `<title>` and `<meta name="description">` tags. Canonical URLs are configured. `robots.ts` and `sitemap.ts` are present and dynamically generated. Performance features like `next/image` and font optimization (`next/font/google`) are in place. 

### Issues Found
| Priority | File | Issue | Recommendation |
|----------|------|-------|----------------|
| 🟡 Important | `src/app/layout.tsx` | Missing Twitter Card metadata. | Add `twitter` property to the exported `metadata` object. |
| 🟡 Important | `src/components/sections/HeroSection.tsx` | `<h1>` tag contains multiple `<span>` elements with long descriptions, diluting the main keyword signal. | Simplify the `<h1>` to focus on the core offering and move the descriptive `<span>` elements to `<p>` or `<h2>` tags. |
| 🟡 Important | `next.config.ts` | File has a `.ts` extension but uses CommonJS `module.exports`. | Refactor to use ES6 `export default` for proper TypeScript support. |
| 🟢 Minor | `src/app/layout.tsx` | Missing BreadcrumbList schema. | Add BreadcrumbList JSON-LD to help search engines understand the site structure. |
| 🟢 Minor | `src/components/sections/HeroSection.tsx` | Image `alt` attribute is slightly generic ("Zespół serwisowy Pol-Gaz"). | Expand `alt` to be more descriptive (e.g., "Zespół autoryzowanego serwisu kotłów gazowych Pol-Gaz w Szczecinie"). |

### Explanation of Key Recommendations

**Missing Twitter Card Metadata (`src/app/layout.tsx`)**
Social sharing on X (Twitter) relies on specific meta tags. Without them, links shared might not display images and titles optimally.
*Fix:*
```typescript
export const metadata: Metadata = {
  // ... existing metadata
  twitter: {
    card: 'summary_large_image',
    title: 'POL-GAZ Szczecin - Serwis Kotłów',
    description: 'Profesjonalny serwis kotłów w Szczecinie od 1994 roku.',
    images: ['/images/hero-team.WebP'],
  },
}
```

**H1 Tag Dilution (`src/components/sections/HeroSection.tsx`)**
Search engines use `<h1>` to understand the primary topic of the page. Stuffing it with multiple spans and long text reduces the weight of the main keywords.
*Fix:*
```tsx
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
  Serwis, naprawa i montaż kotłów gazowych w Szczecinie
</h1>
<p className="block text-blue-200 text-sm sm:text-base lg:text-lg mt-2">
  Specjalizacja w markach Beretta, Vaillant, Junkers. Autoryzowany serwis.
</p>
```

---

## 2. AEO — Answer Engine Optimization

### Current State
Excellent setup. The project contains a dedicated `FaqSection.tsx` and dynamically injects `FAQPage` JSON-LD schema in `layout.tsx`. The questions are phrased conversationally (e.g., "Jakie marki pieców..."), and the answers are concise, which is highly optimized for AI snippets.

### Issues Found
| Priority | File | Issue | Recommendation |
|----------|------|-------|----------------|
| 🟢 Minor | `src/components/sections/FaqSection.tsx` | Missing semantic heading structure inside FAQ items. | Wrap FAQ questions in `<h3>` tags instead of just styling a `<button>` or `<span>`. |

### Explanation of Key Recommendations

**Semantic Heading Structure inside FAQ**
AI Overview engines parse standard HTML headings effectively. By structuring questions as `<h3>`, you strengthen the signal that these are distinct topics/questions.
*Fix:*
```tsx
<button ...>
  <h3 className="font-bold text-blue-900 text-lg pr-8 mb-0">
    {faq.question}
  </h3>
</button>
```

---

## 3. GEO — Generative Engine Optimization

### Current State
Very strong alignment with GEO principles. The brand identity (POL-GAZ, Wojciech Podporski, Beretta Ambassador) is highly visible. The codebase includes extensive `HVACBusiness` JSON-LD schema with founder information, established date (1994), service areas, and aggregate ratings. These act as powerful trustworthiness signals for LLMs and generative search.

### Issues Found
| Priority | File | Issue | Recommendation |
|----------|------|-------|----------------|
| 🟡 Important | `src/app/layout.tsx` | Schema `priceRange` is "$$", which is vague for LLMs. | While standard for Schema.org, adding explicit starting prices in a `Service` schema helps AI answer cost-related queries definitively. |
| 🟢 Minor | `src/components/sections/ContactSection.tsx` | Contact details are visually clear but lack `address` schema binding in the HTML itself. | Add microdata or ensure the local JSON-LD is perfectly matched to the visible HTML data. |

### Explanation of Key Recommendations

**Explicit Pricing in Schema (`src/app/layout.tsx`)**
Generative search often tries to answer "how much does X cost?". You mention "od około 150 zł netto" in the FAQ. Reflecting specific values in the schema makes it easier for AI to extract.
*Fix:*
```json
"offers": {
  "@type": "Offer",
  "price": "150.00",
  "priceCurrency": "PLN",
  "description": "Przegląd okresowy kotła gazowego"
}
```

---

## Overall Score
| Area | Score | Status |
|------|-------|--------|
| SEO  | 8/10  | 🟡     |
| AEO  | 9/10  | 🟢     |
| GEO  | 9/10  | 🟢     |

## Top 5 Priority Actions
1. **Refactor the `<h1>` tag** in `HeroSection.tsx` to be concise and highly targeted, moving secondary descriptions to paragraph tags.
2. **Add Twitter Card metadata** in `src/app/layout.tsx` to ensure consistent social and rich-link sharing.
3. **Enhance FAQ HTML structure** in `FaqSection.tsx` by wrapping the questions within `<h3>` elements for better machine readability.
4. **Fix `next.config.ts` exports** to use standard ES Modules `export default` to avoid potential build or typing issues.
5. **Add explicit pricing data** to the Schema.org JSON-LD to empower Generative Engines with concrete cost answers.