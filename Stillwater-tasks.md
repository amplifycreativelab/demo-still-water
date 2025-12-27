# Development Tasks - Stillwater (Modern Calm Glass / Recovery Studio)

Source docs:

- `Stillwater/Stillwater.md`
- Reference format: `cafe-restaurant-demo/Demo 1 - Cafe - Restaurant - Tasks.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; later phases depend on earlier setup.

## Phase 0 - Project Decisions

- [ ] Confirm GitHub Pages repo name for Astro `base` (must be `"/<repo>/"`).
- [ ] Confirm business placeholders (studio name, phone/email, Perth address area, hours, socials).
- [ ] Confirm primary conversions and flows: Book appointment, Buy gift voucher.
- [ ] Confirm booking flow: external booking link vs on-site form UI (mock OK) vs phone-first.
- [ ] Confirm voucher flow: voucher tiers vs single voucher CTA (mock checkout acceptable).
- [ ] Choose typography: Fraunces (headings) + Inter (body) and confirm font loading strategy.

## Phase 1 - Astro Setup (SSG + GitHub Pages)

- [ ] Create Astro 4 project (static output / SSG).
- [ ] Configure `astro.config.mjs` with `site` + `base` placeholders for GitHub Pages.
- [ ] Enable View Transitions globally (soft crossfade only).
- [ ] Ensure internal links and asset URLs work under the base path (no hard-coded `/`).
- [ ] Add/verify scripts: `dev`, `build`, `preview`.
- [ ] Add `src/assets/` placeholders (serene hero image/gradient, service imagery, therapists, OG image).
- [ ] Keep JS minimal and intentional (no heavy frameworks).

## Phase 2 - Design System (Stillwater Glass)

- [ ] Implement tokens (CSS variables or Tailwind theme) with exact palette:
  - [ ] Stone `#F4F1EA` (background)
  - [ ] Ink `#1B1B1D` (primary text)
  - [ ] Muted `#6E6C66` (secondary text)
  - [ ] Sage `#7FAF9B` (primary accent; CTAs, highlights, focus)
  - [ ] Pearl `#D8E6F1` (subtle glow/separators)
  - [ ] Glass surface `rgba(255,255,255,0.55)`
  - [ ] Glass border `rgba(255,255,255,0.25)`
- [ ] Enforce rules:
  - [ ] No pure white/black
  - [ ] Avoid high saturation; desaturated and calm only
  - [ ] Use whitespace instead of dividers wherever possible
- [ ] Typography rules:
  - [ ] Headings use Fraunces (optical sizes if available) and never shout (no all-caps headlines)
  - [ ] Body uses Inter at 16-18px base, line-height ~1.6
  - [ ] UI labels/meta in Inter with slightly tighter tracking
- [ ] Implement focus-visible styles with WCAG AA contrast.
- [ ] Implement `prefers-reduced-motion` baseline (disable non-essential motion).

## Phase 3 - Layout & Spacing (Quiet Luxury)

- [ ] Implement wide layouts with large vertical rhythm:
  - [ ] Content max-width ~1100-1200px
  - [ ] Section padding `clamp(4rem, 8vw, 8rem)`
- [ ] Use grid over columns; avoid visual clutter.
- [ ] Ensure cards float gently (nothing boxed-in).

## Phase 4 - Glassmorphism (Subtle, Premium)

- [ ] Implement glass utility/component rules:
  - [ ] Use sparingly (service cards, voucher banner, calm CTA section, optional booking hint)
  - [ ] Backdrop blur `12-16px` + thin border + gentle low-opacity shadow
  - [ ] Never stack glass-on-glass
  - [ ] Add fallback for browsers without `backdrop-filter`
- [ ] Validate readability on low-end displays and in bright light (contrast + clarity).

## Phase 5 - Data Layer (Simple + Typed)

- [ ] Create `src/data/services.ts` (typed): name, duration, key benefit, price (optional), CTA label.
- [ ] Create `src/data/therapists.ts` (typed): name, portrait, short bio, specialties.
- [ ] Create `src/data/testimonials.ts` (typed): short quote, name, rating (optional).
- [ ] Add sample content with short, poetic, reassuring copy.

## Phase 6 - Components (Signature)

- [ ] Build required components:
  - [ ] `GlassCard.astro` (base glass abstraction)
  - [ ] `ServiceCard.astro` (duration, benefits, CTA)
  - [ ] `BreathCTA.astro` (soft-glass CTA block)
  - [ ] `VoucherBanner.astro` (gift voucher highlight)
  - [ ] `TherapistCard.astro` (calm, human profile)
  - [ ] `SoftDivider.astro` (pearl/gradient separator; avoid hard lines)
- [ ] Build layout components:
  - [ ] Minimal header/nav (calm, not sticky-aggressive)
  - [ ] Footer with contact details and local intent copy

## Phase 7 - Pages (IA + Conversion)

### Home (`src/pages/index.astro`)

- [ ] Hero:
  - [ ] Short calm promise
  - [ ] One primary CTA: Book session
  - [ ] Secondary CTA: Gift someone recovery
  - [ ] Background: soft gradient or serene image
- [ ] Services preview (3-4 services max): duration + key benefit only.
- [ ] The Stillwater Experience: 3 pillars (Calm, Precision, Care) text-first.
- [ ] Therapists: portrait + short bio (minimal, trusted).
- [ ] Gift vouchers highlight: emotional framing + glass banner treatment.
- [ ] Testimonials: short, quiet quotes (avoid carousel if possible).
- [ ] Final calm CTA: large spacing, one clear action.

### Services (`src/pages/services/index.astro`)

- [ ] Full services list from `services.ts` with calm CTAs.

### Pricing (`src/pages/pricing/index.astro`)

- [ ] Simple pricing structure (no clutter); support booking CTA and voucher CTA.

### Gift Vouchers (`src/pages/gift-vouchers/index.astro`)

- [ ] Voucher page with clear gifting flow (mock purchase acceptable).

### About (`src/pages/about/index.astro`)

- [ ] Studio story: modern, composed, quietly expensive tone.

### Contact (`src/pages/contact/index.astro`)

- [ ] Booking funnel: calm single-column form UI (non-functional OK) + address + hours.
- [ ] Keep CTAs consistent with Home (Book / Voucher).

## Phase 8 - Motion & Interaction (Soft Physics)

- [ ] Motion parameters:
  - [ ] Duration 300-600ms
  - [ ] Easing `cubic-bezier(0.4, 0.0, 0.2, 1)`
- [ ] Allowed motion only:
  - [ ] Card "breath" hover (scale 1.01)
  - [ ] Opacity + slight Y-shift on entry
  - [ ] Extremely subtle liquid gradient drift in background
  - [ ] Page transitions: soft crossfade only
- [ ] Avoid aggressive scale/translate combos.
- [ ] Reduced motion behavior (`prefers-reduced-motion: reduce`):
  - [ ] Disable gradient drift and hover transforms
  - [ ] Keep opacity transitions only

## Phase 9 - SEO, Accessibility, Performance & Deployment

- [ ] SEO:
  - [ ] Calm titles + meta descriptions (no hype language)
  - [ ] Canonical URLs respect `site` + `base`
  - [ ] OpenGraph + Twitter meta with placeholder OG image
  - [ ] Inject JSON-LD: `DaySpa` or `HealthAndBeautyBusiness`
  - [ ] Add Perth suburb mentions naturally (no keyword stuffing)
- [ ] Accessibility QA: one H1 per page, headings, keyboard nav, focus-visible, WCAG AA contrast.
- [ ] Performance QA: minimal JS, image optimization + lazy loading, avoid excessive glass panels.
- [ ] Verify build works under GitHub Pages base path (no broken links/assets).
- [ ] Add `README.md` with install/dev/build/preview + GH Pages base path notes + reduced motion notes.

## Optional / Bonus

- [ ] Add a subtle sticky booking hint (only if it remains calm and unobtrusive).
- [ ] Add print-friendly aftercare/wellness checklist page (if it supports trust).
