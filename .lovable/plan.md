
# Hero Section Redesign Plan

## Overview

This plan will transform the bland hero sections across 8 pages (Freelancers, Developers, Consultants, Small Businesses, Contractors, Compliance, Free Invoice Generator, Why Invoicemonk) into sleek, interactive, and visually compelling sections that match the quality of the homepage hero.

## Current State Analysis

The existing hero sections share a repetitive, basic pattern:
- Simple gradient background
- Small badge/tag
- H1 title
- Paragraph description  
- Two buttons (primary + outline)
- No visual elements, animations, or personality

The homepage hero, by contrast, features animated backgrounds, floating cards, dashboard mockups, badges with icons, and staggered entrance animations.

## Design Approach

### 1. Create a Reusable PageHero Component

Build a flexible, configurable hero component that can be customized per page while maintaining visual consistency:

**Base Features (all pages):**
- Animated background with gradient blobs and subtle patterns
- Staggered entrance animations (Framer Motion)
- Responsive layout with proper spacing
- Badge with icon and text
- Gradient-accented headline with optional italic accent word
- Description text with good readability
- Dual CTA buttons with hover effects
- Trust indicators or social proof

**Optional Features (per page):**
- Floating visual elements (icons, mini-cards)
- Illustration or mockup panel
- Stats row
- Background pattern variations

### 2. Page-Specific Visual Elements

Each page will get unique floating elements and visuals that reinforce its theme:

| Page | Visual Theme | Floating Elements |
|------|--------------|-------------------|
| Freelancers | Creative freedom | Floating invoice, payment notification, calendar |
| Developers | Code/Technical | Terminal snippet, API endpoint badge, code brackets |
| Consultants | Professional/Enterprise | Client meeting icon, report card, globe |
| Small Businesses | Growth/Scale | Chart trending up, team avatars, invoice stack |
| Contractors | On-site work | Mobile phone, receipt, project folder |
| Compliance | Security/Trust | Shield, lock, checkmark badges, audit stamp |
| Free Invoice Generator | Simplicity | Invoice preview, PDF icon, checkmarks |
| Why Invoicemonk | Philosophy | Core value icons, timeline, philosophy quotes |

### 3. Animation Strategy

- **Entrance animations**: Staggered fade-up for content elements
- **Floating elements**: Subtle y-axis oscillation (like homepage)
- **Background**: Animated gradient blobs with blur
- **Hover states**: Buttons lift and glow, cards scale slightly

## Technical Implementation

### Files to Create

```text
src/components/shared/PageHero.tsx
```

A reusable hero component with these props:
- `badge`: { icon, text, variant }
- `title`: string with markdown-style accent (e.g., "Text *accent*")
- `description`: string
- `primaryCta`: { text, href }
- `secondaryCta`: { text, href }
- `trustBadge?`: string
- `visualType`: 'floating-elements' | 'mockup' | 'illustration'
- `floatingElements?`: array of element configs
- `stats?`: array of stat objects
- `backgroundVariant`: 'gradient' | 'mesh' | 'dots'

### Files to Modify

1. **src/pages/Freelancers.tsx** - Replace inline hero with PageHero + freelancer-themed floating elements
2. **src/pages/Developer.tsx** - Replace with code-themed hero including terminal mockup
3. **src/pages/Consultants.tsx** - Replace with professional/enterprise themed hero
4. **src/pages/SmallBusinesses.tsx** - Replace with growth/scale themed hero
5. **src/pages/Contractors.tsx** - Replace with mobile/on-site themed hero
6. **src/pages/Compliance.tsx** - Replace with security/audit themed hero
7. **src/pages/FreeInvoiceGenerator.tsx** - Replace with simplicity/free themed hero
8. **src/pages/WhyInvoicemonk.tsx** - Enhance existing hero with floating philosophy elements

### Component Structure

```text
<PageHero>
  ├── Background Layer (animated gradient blobs)
  ├── Content Layer
  │   ├── Badge (icon + text)
  │   ├── Title (with accent styling)
  │   ├── Description
  │   ├── CTA Buttons
  │   └── Trust Badge / Social Proof
  └── Visual Layer
      ├── Floating Elements (animated)
      └── Optional Mockup/Illustration
</PageHero>
```

### Design Tokens

The component will use existing design tokens:
- Colors: `primary`, `wave-orange`, `wave-green`, `wave-blue`
- Shadows: `shadow-soft-lg`, `shadow-soft-xl`
- Typography: `text-display`, `text-body-lg`, `font-serif italic`
- Animations: existing keyframes + new floating animations

## Visual Examples

### Freelancers Hero
- Background: Warm gradient with creative energy
- Floating elements: 
  - Invoice card (top-right) with "Payment Received" notification
  - Calendar icon (bottom-left) showing "Invoice Due"
  - Small coin/money animation
- Badge: "For Freelancers" with Zap icon
- Title: "Invoicing made simple for *freelancers*"

### Developer Hero  
- Background: Dark-ish gradient with code aesthetic
- Floating elements:
  - Terminal window showing API call
  - Endpoint badge (`POST /v1/invoices`)
  - Code bracket decorations
- Badge: "Developer API" with Terminal icon
- Title: "Build with *Invoicemonk*"

### Compliance Hero
- Background: Secure blue-tinted gradient
- Floating elements:
  - Shield with checkmark (animated pulse)
  - Lock icon
  - "Audit Ready" stamp
  - Immutable record badge
- Badge: "{Authority}-Compliant" (localized)
- Title: "Built for *audit-ready* confidence"

## Implementation Steps

1. Create the base `PageHero` component with animation logic
2. Create floating element sub-components
3. Update Freelancers page as the first implementation
4. Apply to remaining 7 pages with page-specific customizations
5. Ensure responsive behavior works on all screen sizes
6. Add keyboard navigation and accessibility attributes

## Accessibility Considerations

- Respect `prefers-reduced-motion` for animations
- Proper heading hierarchy (H1 for titles)
- ARIA labels on decorative elements
- Sufficient color contrast on all text
- Focus states on interactive elements

## Performance Considerations

- Use `will-change` sparingly for animated elements
- Lazy-load any images in floating elements
- Use CSS transforms instead of position changes for animations
- Animation cleanup on unmount
