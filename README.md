# jordybreur.nl — Portfolio (Next.js + Tailwind CSS)

Een moderne, kaart-gebaseerde portfolio-website gebouwd met Next.js (App Router), React, TypeScript en Tailwind CSS. Dit project is bedoeld als referentie voor structuur, design tokens, semantiek en toegankelijke UI‑patronen.

Belangrijk: In deze omgeving geen npm‑commando’s uitvoeren. Onderstaande instructies zijn voor maintainers op hun eigen machine.

## Stack & Requirements
- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS v4 (inline @theme tokens in `app/globals.css` + config in `tailwind.config.js`)
- ESLint (eslint-config-next)
- Fonts: Geist (via `next/font/local`)
- Node.js 18.18+ (Node 20 LTS aanbevolen)

## Projectstructuur
- `app/`
  - `layout.tsx` — Root layout, fonts, metadata/OG, basisstructuur met Navbar/Footer
  - `page.tsx` — Home/landing: hero‑kaart, highlights, skills, testimonials, projecten en contact‑CTA
  - `about/page.tsx` — Over mij + tech‑stack raster
  - `projects/page.tsx` + `projects/projects-client.tsx` — Filterbare projectenlijst (client component)
  - `contact/page.tsx` — Toegankelijk formulier + mailto‑link
  - `globals.css` — Tailwind v4 tokens (@theme) + utilities
- `components/`
  - `navbar.tsx` — Sticky, semantisch nav met actieve states
  - `footer.tsx` — Footer met sitelinks en social iconen
  - `tech-card.tsx` — Kleine UI‑kaart voor techlogo + label (gebruikt op Over‑mij)
- `data/` — Data voor UI (bijv. techStack)
- `public/` — Statics (logo’s, fonts)
- Config — `tailwind.config.js`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`

## Design System (referentie)
- Kleuren (custom palette):
  - `cool_gray` — achtergronden, subtiele tekst, borders
  - `dark_spring_green` — highlights/acties
  - `ghost_white` — oppervlakte/kaarten
  - `black` — primaire tekst
  - `oxford_blue` — CTA’s/links/accenten
- Typografie: Geist via `next/font/local` met CSS‑variabelen `--font-sans` en `--font-mono` (toegepast op `<html>`)
- Schaduwen/kaarten: subtiele borders + `shadow-soft`; hover: lichte scale/sterkere shadow
- Toegankelijkheid: semantische elementen (header/main/nav/section/figure), duidelijke focus‑ringen, aria‑labels, kleurcontrast bewaakt

De kleur‑ en token‑definities staan op twee plekken voor leesbaarheid:
- `app/globals.css` (@theme tokens) — bron voor Tailwind v4 utility‑klassen
- `tailwind.config.js` — uitgebreide kleuren voor IDE‑intellisense en eventuele tooling

## SEO & Metadata
- `app/layout.tsx` definieert `metadata` (title/description), `openGraph`, `alternates`, `metadataBase`
- HTML `lang="nl"` en consistente site‑titel

## Ontwikkeling (alleen lokaal door maintainers)
Voer géén npm‑commando’s in deze omgeving uit.
1) npm install
2) npm run dev — start dev server
3) npm run build — controleer build
4) npm run lint — check/fix linting

## Dit project gebruiken als referentie
Gebruik onderstaande onderdelen als sjabloon in je eigen Next.js‑project:

- App Router indeling:
  - Root layout met fonts/metadata/Navbar/Footer
  - Secties als aparte kaarten en rasterlay‑outs (utility‑first)
- Componentpatronen:
  - Card: combinatie van `rounded-2xl`, subtiele `border`, `bg-ghost_white-900` of `bg-cool_gray-300`, `shadow-soft`, hover: `hover:shadow-2xl` en `hover:scale-105`
  - Knoppen/CTA’s: `bg-oxford_blue-500` of `bg-dark_spring_green-500` met focus‑ring `focus:ring-oxford_blue-600/40`
  - Navigatie met actieve route detectie (`usePathname`) en aria‑current
- Accessibility best‑practices:
  - `aria-label`s voor iconlinks, `role="list"/"tablist"` waar passend
  - Focus states zichtbaar, toetsenbordtoegankelijk
- Performance hints:
  - `next/image` met `fill` en container `relative` + vaste hoogte/aspect ratio
  - Hergebruik van kleine, pure componenten; server components by default

## Inhoud aanpassen
- Hero‑tekst en CTA’s: `app/page.tsx`
- Projectenlijst: `app/projects/projects-client.tsx` (array `projects`)
- Kleuren/branding: pas tokens aan in `app/globals.css` en spiegel desgewenst in `tailwind.config.js`
- Fonts: vervang WOFF2‑bestanden in `public/fonts/geist` en update gewichten in `app/layout.tsx`

## Wat te doen na wijzigingen
- Als je broncode of config aanpast: lokaal uitvoeren
  - npm run build — verifieer dat de build slaagt
  - npm run lint — los eventuele meldingen op
- Er zijn in dit project geen extra dependencies toegevoegd in deze iteratie.

## Licentie
Aangepast startersjabloon voor persoonlijk portfolio. Gebruik als referentie of basis voor eigen projecten.
