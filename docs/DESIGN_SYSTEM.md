# Jnanashakti — Design System Document

## 1. Design Philosophy

**Minimalist & Modern** with spiritual warmth. Inspired by Chinmaya Mission's clean
structure and BMCM's content-focused approach. The site should feel:
- **Serene** — generous whitespace, calm color palette
- **Trustworthy** — clean typography, professional layouts
- **Accessible** — WCAG 2.1 AA compliant, multilingual
- **Warm** — earthy tones, inviting imagery

## 2. Typography

| Role | Font | Fallback | Weight |
|------|------|----------|--------|
| Headings | Playfair Display | Georgia, serif | 600, 700 |
| Body | Inter | system-ui, sans-serif | 400, 500, 600 |
| Accent/Quotes | Noto Serif Devanagari | serif | 400 |

### Scale (Mobile → Desktop)
| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| H1 | 28px | 36px | 48px |
| H2 | 24px | 28px | 36px |
| H3 | 20px | 22px | 24px |
| Body | 16px | 16px | 18px |
| Small | 14px | 14px | 14px |

## 3. Color Palette

### Primary Colors
- **Saffron Gold** `#B8860B` — Headers, CTAs, sacred accents
- **Deep Earth** `#8B4513` — Secondary buttons, accents
- **Warm Orange** `#FF8C00` — Highlights, notification badges

### Neutral Colors
- **Background** `#FFF8F0` — Page background (warm white)
- **Surface** `#FFFFFF` — Cards, modals
- **Border** `#E8DCC8` — Dividers, card borders
- **Text Primary** `#1A1A2E` — Headings, body text
- **Text Muted** `#6B7280` — Captions, secondary text

### Semantic Colors
- **Success** `#16A34A` — Confirmations
- **Error** `#DC2626` — Form errors
- **Info** `#2563EB` — Links, info badges

## 4. Spacing System

Base unit: 4px. Use Tailwind spacing scale.

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Inline gaps |
| sm | 8px | Icon spacing |
| md | 16px | Card padding |
| lg | 24px | Section gaps |
| xl | 32px | Between components |
| 2xl | 48px | Section padding |
| 3xl | 64px | Page sections |
| 4xl | 96px | Hero spacing |

## 5. Component Specifications

### Navigation Bar
- **Height**: 72px desktop, 64px mobile
- **Background**: White with subtle shadow on scroll
- **Logo**: Left-aligned, ~40px height
- **Links**: Center-aligned on desktop, off-canvas on mobile
- **Donate CTA**: Right-aligned, primary color button
- **Sticky**: Yes, with backdrop blur

### Hero Section
- **Height**: 80vh on desktop, 60vh on mobile
- **Overlay**: Dark gradient (bottom-to-top) for text readability
- **Title**: H1, white, centered
- **Subtitle**: Body, white/80 opacity
- **CTA**: 1-2 buttons (primary + ghost)

### Content Cards
- **Border radius**: 12px
- **Shadow**: `0 1px 3px rgba(0,0,0,0.1)`
- **Padding**: 24px
- **Hover**: Subtle lift (`translateY(-2px)`) + shadow increase
- **Image**: Top or left, aspect-ratio 16:9

### Buttons
| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| Primary | #B8860B | White | None |
| Secondary | Transparent | #B8860B | 1px #B8860B |
| Ghost | Transparent | #1A1A2E | None |
| Donate | #FF8C00 | White | None |

- **Border radius**: 8px
- **Padding**: 12px 24px
- **Font weight**: 600
- **Hover**: Darken 10%

### Forms
- **Input height**: 48px
- **Border**: 1px `#E8DCC8`
- **Focus ring**: 2px `#B8860B` with offset
- **Label**: 14px, 600 weight, above input
- **Error**: Red text below input

## 6. Layout Patterns

### Page Template
```
┌─────────────────────────────────────┐
│            Header (sticky)          │
├─────────────────────────────────────┤
│          Hero / Page Banner         │
│          (full-width image)         │
├─────────────────────────────────────┤
│        max-w-7xl mx-auto px-4      │
│    ┌──────────────────────────┐     │
│    │     Section Heading      │     │
│    │     Content Grid         │     │
│    └──────────────────────────┘     │
│    ┌──────────────────────────┐     │
│    │     Section Heading      │     │
│    │     Content Grid         │     │
│    └──────────────────────────┘     │
├─────────────────────────────────────┤
│          CTA Banner (Donate)        │
├─────────────────────────────────────┤
│              Footer                 │
└─────────────────────────────────────┘
```

### Responsive Grid
```
Desktop (≥1024px):  [col] [col] [col]     gap-8
Tablet (640-1023px): [col] [col]           gap-6
Mobile (<640px):     [col]                 gap-4
```

## 7. Imagery Guidelines

- **Hero images**: High-quality, ashram/nature photography, 1920x1080 min
- **Card thumbnails**: 400x300, consistent aspect ratio
- **Portraits**: Circular crop for people, 200x200
- **Icons**: Lucide React, 24px default, stroke-width 1.5
- **Placeholders**: Warm gradient (#FFF8F0 → #E8DCC8) until media available

## 8. Animation & Interaction

- **Page transitions**: Subtle fade-in (200ms ease)
- **Scroll animations**: Elements fade-up on scroll (IntersectionObserver)
- **Hover states**: All interactive elements must have hover feedback
- **Loading**: Skeleton screens for dynamic content
- **Reduced motion**: Respect `prefers-reduced-motion`

## 9. Accessibility Requirements

- Color contrast ratio ≥ 4.5:1 (text), ≥ 3:1 (large text)
- All images have descriptive alt text
- Keyboard navigable (visible focus rings)
- Screen reader friendly (ARIA labels)
- Skip-to-content link
- Form labels associated with inputs
- Error messages announced to screen readers
