# Jnanashakti Website — Architecture Document

## 1. Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15 (App Router) | SSR/SSG, SEO, image optimization, i18n |
| Styling | Tailwind CSS 4 | Utility-first, responsive, fast iteration |
| Language | TypeScript | Type safety, better DX |
| i18n | next-intl | Lightweight, App Router compatible |
| Icons | Lucide React | Lightweight, tree-shakable |
| Maps | Leaflet / Google Maps Embed | Ashram directions |
| Forms | React Hook Form + Zod | Validation, type-safe |
| Deployment | Vercel | Zero-config Next.js hosting |
| CMS (future) | Sanity / Strapi | Content management for blog, events |

## 2. Project Structure

```
jnanashakti/
├── docs/                    # Architecture & design docs
├── public/
│   ├── images/              # Static images, logos
│   ├── icons/               # Favicons, PWA icons
│   └── locales/             # i18n translation files
│       ├── en/
│       ├── hi/
│       └── mr/
├── src/
│   ├── app/
│   │   ├── [locale]/        # i18n route group
│   │   │   ├── layout.tsx   # Root layout with header/footer
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── about/
│   │   │   │   ├── page.tsx           # About overview
│   │   │   │   ├── vision/page.tsx    # Vision & Mission
│   │   │   │   ├── values/page.tsx    # Human Values
│   │   │   │   └── swamiji/page.tsx   # About Swamiji
│   │   │   ├── teachings/
│   │   │   │   ├── page.tsx           # Teachings overview
│   │   │   │   ├── talks/page.tsx     # Video/Audio talks
│   │   │   │   ├── articles/page.tsx  # Blog articles
│   │   │   │   └── media/page.tsx     # Media library
│   │   │   ├── ashram/
│   │   │   │   ├── page.tsx           # Ashram overview
│   │   │   │   ├── stay/page.tsx      # Request to Stay form
│   │   │   │   └── directions/page.tsx# Map & directions
│   │   │   ├── events/
│   │   │   │   ├── page.tsx           # Event listing
│   │   │   │   └── [slug]/page.tsx    # Event detail + registration
│   │   │   ├── donate/
│   │   │   │   └── page.tsx           # Donation page
│   │   │   ├── store/
│   │   │   │   └── page.tsx           # Bookstore
│   │   │   ├── contact/
│   │   │   │   └── page.tsx           # Contact page
│   │   │   └── gallery/
│   │   │       └── page.tsx           # Photo gallery
│   │   └── api/                       # API routes (future)
│   │       ├── stay-request/
│   │       ├── contact/
│   │       └── event-register/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MissionOverview.tsx
│   │   │   ├── UpcomingEvents.tsx
│   │   │   ├── TeachingsPreview.tsx
│   │   │   └── DonationCTA.tsx
│   │   ├── forms/
│   │   │   ├── StayRequestForm.tsx
│   │   │   ├── EventRegistrationForm.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── DonationForm.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── MediaPlayer.tsx
│   │       └── ImageGallery.tsx
│   ├── lib/
│   │   ├── constants.ts       # Site-wide constants
│   │   └── utils.ts           # Utility functions
│   └── styles/
│       └── globals.css        # Tailwind base + custom styles
├── messages/                  # i18n JSON files
│   ├── en.json
│   ├── hi.json
│   └── mr.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 3. Page Architecture

### Rendering Strategy
| Page | Strategy | Reason |
|------|----------|--------|
| Home | SSG | Static content, fast load |
| About/* | SSG | Rarely changes |
| Teachings | SSG + ISR | Content updates periodically |
| Ashram/Stay | SSR | Form with dynamic availability |
| Events | ISR (60s) | Updates when events change |
| Donate | SSG | Static form, client-side payment |
| Store | ISR | Inventory updates |
| Contact | SSG | Static form |

### Responsive Breakpoints
| Device | Breakpoint | Columns |
|--------|-----------|---------|
| Mobile | < 640px | 1 col |
| Tablet | 640-1024px | 2 col |
| Laptop | 1024-1280px | 3 col |
| Desktop | > 1280px | 3-4 col |

## 4. Component Hierarchy

```
RootLayout
├── Header
│   ├── Logo
│   ├── DesktopNav (hidden on mobile)
│   │   ├── NavLinks (with dropdowns)
│   │   ├── LanguageSwitcher
│   │   └── DonateButton (CTA)
│   └── MobileNav (hamburger menu)
│       ├── NavLinks (accordion style)
│       ├── LanguageSwitcher
│       └── DonateButton
├── main (page content)
└── Footer
    ├── QuickLinks
    ├── ContactInfo
    ├── SocialLinks
    └── Copyright
```

## 5. Design Tokens (Color Palette)

```
Primary:      #B8860B (Warm Gold — spiritual, warm)
Secondary:    #8B4513 (Saddle Brown — earthy)
Accent:       #FF8C00 (Deep Orange — energy, devotion)
Background:   #FFF8F0 (Warm White — clean, spiritual)
Surface:      #FFFFFF (White — cards, forms)
Text Primary: #1A1A2E (Deep Navy — readability)
Text Secondary: #4A4A68 (Muted — secondary text)
Success:      #2E7D32
Border:       #E8DCC8 (Warm Gray)
```

## 6. Data Flow (Future Backend)

```
User Action → Next.js API Route → Email Notification / Database
                                    ↓
                              Admin Dashboard (Phase 2)
```

### Phase 1 (Launch — March 26, 2026)
- Static pages with placeholder content
- Forms submit to email (Formspree / custom API)
- Donation links to external payment gateway
- Embedded Google Maps for directions

### Phase 2 (Post-Launch)
- CMS integration (Sanity) for blog/events
- Payment gateway integration (Razorpay)
- Admin panel for stay request management
- 80G receipt automation
- FCRA donation workflow

## 7. SEO Strategy

- Semantic HTML (`<main>`, `<article>`, `<nav>`, `<section>`)
- Next.js Metadata API for per-page meta tags
- Open Graph + Twitter Card tags
- Structured data (JSON-LD) for Organization, Events
- Sitemap.xml auto-generation
- robots.txt configuration
