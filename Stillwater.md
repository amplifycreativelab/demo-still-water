Senior Expert Prompt — “Stillwater”

(Astro + Modern Calm Glass / Recovery Studio)

Role

You are a Principal UX Engineer & Design Systems Lead.

Objective: Build a premium recovery / day spa demo that feels calm, modern, and quietly expensive.
This is not a “spa brochure”—it should feel like a wellness product, refined and intentional.

Design Philosophy: “Quiet luxury, soft physics.”
Everything feels light, breathable, and composed. Motion is slow and meaningful. Surfaces are tactile but restrained.

0) Non-Negotiables

Astro 4.x SSG, GitHub Pages compatible (correct base path).

Primary conversions:

Book appointment

Buy gift voucher

Accessibility:

WCAG AA contrast

Keyboard navigation

prefers-reduced-motion respected

No heavy JS frameworks; keep JS minimal and intentional.

1) Visual Design System — “Stillwater Glass”
Color Tokens

Use warm neutrals with soft contrast. No pure white or black.

Stone (Base): #F4F1EA – primary page background

Ink (Primary text): #1B1B1D

Muted (Secondary text): #6E6C66

Sage (Primary accent): #7FAF9B – CTAs, highlights, focus states

Pearl (Highlight): #D8E6F1 – subtle glow, separators

Glass Surface: rgba(255,255,255,0.55)

Glass Border: rgba(255,255,255,0.25)

Avoid high saturation. Everything should feel desaturated and calm.

Typography

Typography carries most of the brand weight.

Headings: Fraunces

Use optical sizes if available

Large H1s with generous letter-spacing

Body: Inter

16–18px base

Line-height ~1.6

UI labels / meta: Inter, slightly tighter tracking

Rules

No more than 2 fonts

Headings never shout—no all-caps headlines

Use whitespace instead of dividers where possible

2) Layout & Spacing

Wide layouts with large vertical rhythm

Content max-width: ~1100–1200px

Section padding: clamp(4rem, 8vw, 8rem)

Cards float gently; nothing feels boxed-in

Use grid over columns. Avoid visual clutter.

3) Glassmorphism (Subtle, Premium)

Glass is a supporting character, never the hero.

Glass rules:

Use sparingly (cards, CTAs, overlays)

Always pair with:

Soft blur: backdrop-filter: blur(12–16px)

Thin border

Gentle shadow: very low opacity

Never stack glass-on-glass

Primary use cases:

Service cards

Voucher banner

Calm CTA section

Sticky booking hint (optional)

4) Motion & Interaction

Motion should feel like breathing, not scrolling effects.

Motion Principles

Duration: 300–600ms

Easing: cubic-bezier(0.4, 0.0, 0.2, 1)

Never combine scale + translate aggressively

Allowed Motions

“Breath” hover on cards (scale 1.01)

Opacity + slight Y-shift on entry

Extremely subtle liquid gradient drift in background

Page transitions: soft crossfade only

Reduced Motion

If prefers-reduced-motion:

Disable gradients & hover transforms

Keep opacity transitions only

5) Information Architecture
Pages

/ Home

/services/

/pricing/

/gift-vouchers/

/about/

/contact/

Navigation should be minimal, calm, and never sticky-aggressive.

6) Home Page Structure (Recommended Order)

Hero

Short promise (calm, restorative)

One primary CTA: Book session

Secondary: Gift someone recovery

Background: soft gradient or serene image

Services Preview

3–4 services max

Duration + key benefit only

The Stillwater Experience

3 pillars (e.g. Calm, Precision, Care)

Text-first, icons optional

Therapists

Human, minimal, trusted

Portrait + short bio

Gift Vouchers Highlight

Emotional framing

Glass banner treatment

Testimonials

Short, quiet quotes

No carousels if possible

Final Calm CTA

Large spacing

One clear action

7) Signature Components
Components to Build

GlassCard.astro

Base glass abstraction

ServiceCard.astro

Duration, benefits, CTA

BreathCTA.astro

Soft-glass CTA block

VoucherBanner.astro

Highlight gift vouchers

TherapistCard.astro

Calm, human profiles

SoftDivider.astro

Gradient or pearl separator (no hard lines)

8) Data & Content

Data-driven, but simple:

services.ts

therapists.ts

testimonials.ts

No CMS required for demo

Copy should be short, poetic, reassuring

9) SEO & Local Intent

JSON-LD:

DaySpa or

HealthAndBeautyBusiness

Perth local intent:

Mention nearby suburbs naturally

Include address + hours on contact page

Clean metadata, calm titles (no hype language)

10) Quality Bar

This demo should feel:

More Apple Wellness than “massage salon”

More architectural than decorative

Calm enough that nothing feels rushed

If something feels “extra,” remove it.