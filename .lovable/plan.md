

## Plan: Public Payment Intelligence Tools for Invoicemonk

### Overview

Build a suite of public, free, SEO-optimized payment intelligence tools on the Invoicemonk marketing website. These tools are **informational only** -- no live FX APIs, no login required, no backend connections. They use static fee models and serve as traffic acquisition infrastructure.

### Architecture

The implementation follows existing patterns: React pages with Layout wrapper, PageHero, SEOHead, and shared UI components. A new config file holds all static fee models. Analytics integration uses the existing `useContentAnalytics` hook.

### New Files to Create

#### 1. Config: `src/config/paymentFeeModels.ts`
Static fee data for all supported payment methods:
- **Wise**: ~0.6% fee, mid-market rate, 1-2 day processing
- **PayPal**: 4.49% + fixed, 3-4% FX spread, instant
- **Bank Transfer (SWIFT)**: $25-50 flat, 2-4% FX spread, 3-5 days
- **Card**: 2.9% + $0.30, 1-2% FX spread, instant

Supported currencies: USD, GBP, EUR, NGN, CAD, AUD
Country list with currency mappings for sender/receiver dropdowns.

#### 2. Calculator Component: `src/components/tools/PaymentFeeCalculator.tsx`
Core interactive tool with:
- **Inputs**: Amount, currency select, sender country, receiver country, optional business type toggle
- **Outputs per method**: Estimated fees, FX spread, processing time, net received
- **Display**: Results sorted by net received (descending), "Cheapest" / "Fastest" / "Most Transparent" badges
- **Disclaimer**: "Estimated based on publicly available average fee structures. Actual rates may vary."
- **CTAs**: "Create a free invoice optimized for this method" linking to `https://app.invoicemonk.com/signup?currency={currency}&method={method}`

#### 3. Comparison Component: `src/components/tools/PaymentMethodComparison.tsx`
Structured comparison table embedded in calculator results:
- Columns: Method, Estimated Fees, FX Spread, Speed, Net Received, Best For
- Contextual badges: "Cheapest", "Fastest", "Most Transparent"
- Short descriptions per method

#### 4. Page: `src/pages/tools/InternationalPaymentFeeCalculator.tsx`
Route: `/international-payment-fee-calculator`
- Full SEO page with 800-1500 words of content
- Embedded calculator component
- H1/H2/H3 heading hierarchy
- Internal links to related blog posts (international-payment-fees-explained, etc.)
- FAQ section for PAA coverage
- Signup CTAs throughout

#### 5. Page: `src/pages/tools/PaypalVsWiseFees.tsx`
Route: `/paypal-vs-wise-fees`
- Comparison-focused SEO content page
- Embedded calculator pre-filtered to Wise vs PayPal
- Side-by-side feature comparison
- Use cases (freelancer, small business, enterprise)
- Internal links to related content

#### 6. Page: `src/pages/tools/CheapestInternationalPayments.tsx`
Route: `/cheapest-way-to-receive-international-payments`
- Guide-style content with embedded calculator
- Ranked list of methods by cost
- Tips for reducing fees
- Country-specific considerations
- Links to currency-specific pages

#### 7. Page: `src/pages/tools/ReceiveCurrencyInCountry.tsx`
Route: `/receive-:currency-in-:country-cost`
- Dynamic page handling currency/country combinations
- Pre-filled calculator for the specific corridor
- Localized content about receiving payments in that country
- Support for key corridors: USD-in-Nigeria, GBP-in-Nigeria, EUR-in-UK, USD-in-UK, etc.

### Files to Modify

#### 8. `src/App.tsx`
Add 4 new routes:
```
/international-payment-fee-calculator
/paypal-vs-wise-fees
/cheapest-way-to-receive-international-payments
/receive-:currency-in-:country-cost
```

#### 9. `src/components/seo/seoConfig.ts`
Add SEO config entries for all 4 new routes with proper titles, descriptions, and priorities.

#### 10. `src/components/layout/Footer.tsx`
Add a "Tools" section in the footer with links to the calculator and comparison pages.

#### 11. `index.html`
Add noscript navigation links for the new tool pages.

### Analytics Integration

Using the existing `useContentAnalytics` hook, track:
- `calculator_usage` events (amount, currencies, countries selected)
- `method_comparison` events (which methods compared)
- `tool_cta_click` events (which CTA clicked, with method/currency params)
- Standard scroll depth and reading time for SEO content sections

New analytics event types will be added to `useContentAnalytics.ts`:
- `'calculator_usage'`
- `'tool_cta_click'`

### Content Strategy

Each page includes:
1. **Introduction** with problem statement ("How much will you actually receive?")
2. **Interactive tool** embedded prominently
3. **Educational content** (800-1500 words) with H2/H3 hierarchy
4. **FAQ section** for PAA coverage
5. **Internal links** to related blog posts and product pages
6. **Positioning copy**: "Make smarter international payment decisions", "Know your real costs before invoicing"
7. **Trust framing disclaimer** under every result

### CTA Strategy

After results:
- Primary: "Create a free invoice optimized for this method" with URL params `?currency=USD&method=wise`
- Secondary: "Open a free Invoicemonk account"
- Tertiary: Link to related blog content

### Technical Considerations

- **No external API calls** -- all calculations use static fee models from config
- **Fast loading** -- pure client-side computation, no async data fetching
- **Cache-friendly** -- static content with client-side interactivity
- **SEO-first** -- full content rendered in JSX (not behind user interaction)
- **Responsive** -- mobile-first design using existing Tailwind patterns
- **Accessible** -- proper labels, ARIA attributes on form controls

### File Summary

| File | Action |
|------|--------|
| `src/config/paymentFeeModels.ts` | Create -- static fee data and country/currency mappings |
| `src/components/tools/PaymentFeeCalculator.tsx` | Create -- interactive calculator component |
| `src/components/tools/PaymentMethodComparison.tsx` | Create -- comparison table component |
| `src/pages/tools/InternationalPaymentFeeCalculator.tsx` | Create -- main calculator SEO page |
| `src/pages/tools/PaypalVsWiseFees.tsx` | Create -- PayPal vs Wise comparison page |
| `src/pages/tools/CheapestInternationalPayments.tsx` | Create -- cheapest methods guide page |
| `src/pages/tools/ReceiveCurrencyInCountry.tsx` | Create -- dynamic currency/country page |
| `src/App.tsx` | Modify -- add 4 new routes |
| `src/components/seo/seoConfig.ts` | Modify -- add SEO configs for new pages |
| `src/components/layout/Footer.tsx` | Modify -- add Tools section |
| `src/hooks/useContentAnalytics.ts` | Modify -- add new event types |
| `index.html` | Modify -- add noscript links |

### Implementation Order

1. Create `paymentFeeModels.ts` config (foundation)
2. Create `PaymentFeeCalculator.tsx` and `PaymentMethodComparison.tsx` components
3. Create the 4 SEO pages
4. Update routing, SEO config, footer, analytics, and noscript nav

