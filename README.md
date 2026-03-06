# Jnanashakti Ashram Website

Official website for **Jnanashakti Ashram** — a spiritual sanctuary dedicated to the pursuit of self-knowledge, inner transformation, and the timeless wisdom of Vedanta, founded by Swami Chidananda.

**Live site:** Hosted on Netlify

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Next.js 15 (App Router, TypeScript) |
| Styling     | Tailwind CSS 4 (custom theme)       |
| Icons       | lucide-react                        |
| Forms       | Web3Forms (free tier, client-side)  |
| Maps        | OpenStreetMap (free, no API key)    |
| Deployment  | Netlify + @netlify/plugin-nextjs    |

## Project Structure

```
jnanashakti/
├── netlify.toml              # Netlify build config
├── docs/                     # Project documentation
└── website/                  # Next.js application
    ├── public/images/        # Optimised images (books, ashram, swamiji)
    ├── src/
    │   ├── app/              # App Router pages (18 routes)
    │   │   ├── page.tsx              # Home
    │   │   ├── layout.tsx            # Root layout (Header + Footer)
    │   │   ├── about/
    │   │   │   ├── page.tsx          # About landing
    │   │   │   ├── vision/page.tsx   # Vision & Mission
    │   │   │   ├── values/page.tsx   # Core Values
    │   │   │   └── swamiji/page.tsx  # Swami Chidananda bio
    │   │   ├── ashram/
    │   │   │   ├── page.tsx          # Ashram overview
    │   │   │   ├── stay/page.tsx     # Stay request form
    │   │   │   └── directions/page.tsx # Location & directions
    │   │   ├── teachings/
    │   │   │   ├── page.tsx          # Teachings landing
    │   │   │   ├── talks/page.tsx    # YouTube talks
    │   │   │   ├── articles/page.tsx # Articles & writings
    │   │   │   └── media/page.tsx    # Video & audio library
    │   │   ├── events/page.tsx       # Events & programs
    │   │   ├── donate/page.tsx       # Donations
    │   │   ├── contact/page.tsx      # Contact form + info
    │   │   ├── store/page.tsx        # Bookstore
    │   │   └── gallery/page.tsx      # Photo gallery
    │   └── components/
    │       ├── layout/
    │       │   ├── Header.tsx        # Responsive nav + mobile menu
    │       │   └── Footer.tsx        # Site-wide footer
    │       └── home/
    │           ├── HeroSection.tsx
    │           ├── MissionOverview.tsx
    │           ├── TeachingsPreview.tsx
    │           ├── UpcomingEvents.tsx
    │           └── DonationCTA.tsx
    └── messages/             # i18n translations (en, hi, mr)
```

## Phase 1 — What's Implemented

### Pages & Content (18 routes)

- **Home** — Hero banner, mission overview, teachings preview, upcoming events, donation CTA
- **About** — Landing page, Vision & Mission, Core Values, Swami Chidananda biography (real bio and photo from fowai.org)
- **Ashram** — Overview with real content (Shakti & Shanti wings, facilities like Yajnavalkya Auditorium, Granthalaya, Maitreyi), brochure images, site layout map
- **Stay Request** — Form with full validation, wired to Web3Forms for email notifications
- **Directions** — OpenStreetMap embed with Om marker, real address (Vave Village, Sudhagad, Raigad District), travel directions from Mumbai and Pune
- **Teachings** — Landing page linking to talks, articles, and media
- **Talks** — 12 real YouTube talks from the Fowai Forum channel with thumbnails
- **Articles** — 6 articles with category badges, read times, and excerpts
- **Media Library** — Video tab (9 YouTube videos) + Audio tab (8 Gita Bhashya and Upanishad talks)
- **Events** — Programs listing
- **Donate** — Donation information and options
- **Contact** — Contact form (Web3Forms), real Fowai Forum office address, phone numbers, emails, and OpenStreetMap embed
- **Bookstore** — 5 English books + 2 regional translations (Kannada, Hindi) with real covers from fowai.org, linking to the Fowai Forum online store
- **Gallery** — Photo gallery page

### Features

- **Responsive design** — Mobile-first with working hamburger menu
- **Form submissions** — Contact and Stay Request forms submit via Web3Forms (free tier, 250/month) with email notifications
- **Real content** — Swamiji bio, ashram info, book data, and YouTube talks sourced from fowai.org and the Fowai Forum YouTube channel
- **Maps** — OpenStreetMap embeds (no API keys, no cost)
- **Custom theme** — Saffron, earth, warm-white palette defined via Tailwind CSS 4 theme tokens
- **Typography** — Playfair Display (headings) + Inter (body)
- **Static generation** — All pages are SSG; only forms use `"use client"`

### Integrations

| Service     | Purpose                        | Status      |
| ----------- | ------------------------------ | ----------- |
| Web3Forms   | Contact + Stay form emails     | Live        |
| OpenStreetMap | Maps on directions & contact | Live        |
| YouTube     | Embedded talks & thumbnails    | Live        |
| Fowai Store | Book links (external)          | Live        |

## Phase 2 — Planned

- **Multilingual support** — Wire next-intl into App Router for live EN/HI/MR switching (translation files already exist in `messages/`)
- **CMS integration** — Sanity CMS for blog posts, events, and dynamic content
- **Razorpay payments** — Online donation gateway with Indian payment methods
- **FCRA compliance** — Separate donation workflow for foreign contributions
- **80G tax receipts** — Automated receipt generation for Indian donors
- **Admin panel** — Manage stay requests, events, and content
- **Event registration** — Online registration with optional payment
- **Real photography** — Replace remaining placeholder images with actual ashram photos
- **SEO & analytics** — Structured data, sitemap, Google Analytics

## Development

```bash
cd website
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
```

## Deployment

The site deploys to Netlify automatically on push to `main`. Configuration is in `netlify.toml`:

- **Base directory:** `website`
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Plugin:** `@netlify/plugin-nextjs`

## Contact

- **Email:** fowaiforum@gmail.com
- **Phone:** +91 99694 32560 (Vivek Guleria)
- **Website:** [fowai.org](https://fowai.org)
- **YouTube:** [Fowai Forum](https://www.youtube.com/@fowaiforumflameofwhoami584)
