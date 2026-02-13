
## Plan: Update WaveProductTabs Component to Mark Expenses, Accounting, and Receipts as Available

### Problem
The "More reasons to love Invoicemonk" section on the homepage still displays Expenses, Accounting, and Receipts as "Coming Soon" with "Join Waitlist" CTAs, when these features should be marked as "Available" with "Start Free" CTAs.

### Solution
Update the `products` array in `src/components/home/WaveProductTabs.tsx` to change the `available` property from `false` to `true` for three products:

**Changes:**
1. **Line 39** - Expenses: Change `available: false` → `available: true`
2. **Line 49** - Accounting: Change `available: false` → `available: true`
3. **Line 79** - Receipts: Change `available: false` → `available: true`

### Impact
- The tab badges will remove the "SOON" label for these products
- The product card will display "Available" instead of "Coming Soon"
- The CTA will change from "Join Waitlist" to "Start Free" with the appropriate styling
- The mockup card will show the green "Available" badge

### Files to Modify
- `src/components/home/WaveProductTabs.tsx` (3 lines changed)

### Logic Verification
The component uses the `available` property to:
- Display "Soon" badge on tabs (lines 119-123)
- Show "Available" vs "Coming Soon" status in the product card (lines 155-163)
- Switch between "Start Free" and "Join Waitlist" CTAs (lines 205-233)

All this logic is already in place; we just need to flip these three `available` flags.
