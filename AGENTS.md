# BDA Baudesign Akustik GmbH Website

## Project Overview

This is the official corporate website for **BDA Baudesign Akustik GmbH**, a certified construction company based in Recklinghausen, Germany. The company specializes in acoustic construction, facade work, thermal insulation (WDVS), demolition, landscaping (Galabau), and tiling services.

The website is a static, multi-page site built with modern web technologies, optimized for performance and SEO. The content is entirely in German, targeting customers in the Ruhrgebiet region.

## Technology Stack

- **Framework**: [Astro](https://astro.build/) v4.5.8 - Static site generator with islands architecture
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.1 - Utility-first CSS framework
- **Language**: TypeScript with strict configuration
- **Module System**: ES Modules (`"type": "module"`)
- **Build Output**: Static HTML/CSS/JS (SSG)

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `astro` | ^4.5.8 | Core framework |
| `@astrojs/tailwind` | ^5.1.0 | Tailwind integration |
| `@astrojs/check` | ^0.5.10 | TypeScript checking |
| `tailwindcss` | ^3.4.1 | Styling |
| `typescript` | ^5.4.3 | Type safety |

## Project Structure

```
.
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS configuration with custom colors
├── postcss.config.cjs        # PostCSS configuration (Tailwind + Autoprefixer)
├── tsconfig.json             # TypeScript configuration (extends astro/tsconfigs/strict)
├── netlify.toml              # Netlify deployment configuration
├── package.json              # Project dependencies and scripts
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Root layout component (HTML wrapper, SEO meta)
│   ├── components/
│   │   ├── Navbar.astro      # Sticky navigation with mobile menu
│   │   ├── Footer.astro      # Site footer with contact info
│   │   └── CookieBanner.astro # GDPR-compliant cookie consent
│   ├── pages/
│   │   ├── index.astro       # Homepage (Hero, Trust-bar, Services preview, CTA)
│   │   ├── leistungen.astro  # Services detail page (6 service sections)
│   │   ├── ueber-uns.astro   # About us page
│   │   ├── referenzen.astro  # Portfolio/references page
│   │   ├── kontakt.astro     # Contact page with Web3Forms integration
│   │   ├── datenschutz.astro # Privacy policy (GDPR)
│   │   └── impressum.astro   # Legal notice (German law requirement)
│   ├── styles/
│   │   └── global.css        # Global styles with Tailwind directives
│   └── env.d.ts              # TypeScript environment declarations
├── public/
│   └── images/               # Static images (logos, service photos, team photos)
└── dist/                     # Build output (generated)
```

## Design System

### Color Palette (Tailwind Config)

| Name | Value | Usage |
|------|-------|-------|
| `primary` | `#D32F2F` | Brand red, CTAs, accents |
| `secondary` | `#1F2937` | Dark gray/anthracite, text, footer |
| `accent` | `#EF4444` | Lighter red, hover states |
| `background` | `#FAFAFA` | Light gray page background |
| `surface` | `#FFFFFF` | White cards, content areas |

### Typography

- **Font Family**: Inter, Roboto, sans-serif
- **Heading Sizes**: `text-4xl` to `text-7xl` for hero sections
- **Body Text**: `text-lg` with `leading-relaxed` for readability

### Layout Conventions

- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-16 md:py-24`
- Container padding: `px-4 sm:px-6 lg:px-8`
- Border radius pattern: `rounded-md` (buttons), `rounded-2xl`/`rounded-[32px]` (cards/images)
- Shadow pattern: `shadow-sm` (cards), `shadow-xl`/`shadow-2xl` (elevated elements)

## Available Scripts

```bash
# Development server with hot reload
npm run dev
# or
npm start

# Production build (includes TypeScript checking)
npm run build

# Preview production build locally
npm run preview

# TypeScript checking
npm run astro check
```

## Build & Deployment

### Build Process

1. `astro check` - Validates TypeScript
2. `astro build` - Generates static files to `dist/`

### Deployment (Netlify)

- **Platform**: Netlify
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`
- **Site URL**: https://bda-baudesign-akustik.de

### Security Headers (netlify.toml)

```toml
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
```

## Key Features

### 1. Contact Form (kontakt.astro)
- Uses **Web3Forms** API for form submission
- Client-side JavaScript for AJAX submission
- TODO: Replace `YOUR_ACCESS_KEY_HERE` with actual Web3Forms access key
- Includes honeypot (`botcheck`) and GDPR consent checkbox

### 2. Cookie Banner (CookieBanner.astro)
- GDPR-compliant cookie consent
- Only stores acceptance in `localStorage`
- No tracking cookies without explicit consent
- Slides up from bottom after 1 second delay

### 3. Mobile Navigation
- Responsive navbar with hamburger menu on mobile
- Uses vanilla JavaScript for toggle functionality
- Backdrop blur effect on header

### 4. SEO
- All pages have unique `title` and `description` props
- Open Graph meta tags configured
- Semantic HTML structure

## Development Guidelines

### Creating New Pages

1. Create `.astro` file in `src/pages/`
2. Import `Layout` from `../layouts/Layout.astro`
3. Define `title` and `description` props
4. Use Tailwind utility classes for styling
5. Place images in `public/images/`

Example:
```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Page Title | BDA Baudesign Akustik GmbH" description="Meta description">
  <!-- Content here -->
</Layout>
```

### Component Conventions

- Use semantic HTML (`<section>`, `<article>`, `<nav>`)
- Include `loading="lazy"` on images below the fold
- Use `alt` attributes for all images (German language)
- Group related sections with comments (`<!-- Sektion X: Name -->`)

### Styling Conventions

- Prefer Tailwind utility classes over custom CSS
- Use custom color names (`primary`, `secondary`, etc.)
- Responsive prefixes: `sm:`, `md:`, `lg:`
- Hover states: `hover:-translate-y-1`, `hover:shadow-xl`

### Images

- Store in `public/images/`
- Use descriptive filenames
- Hero/featured images: `.jpg` format
- Logo: `.png` format
- Reference with absolute paths: `/images/filename.jpg`

## External Services

| Service | Usage | Configuration |
|---------|-------|---------------|
| Web3Forms | Contact form submission | Replace `YOUR_ACCESS_KEY_HERE` in `kontakt.astro` |
| Google Maps | Embedded map on contact page | Hardcoded embed URL |
| Netlify | Hosting & build | Configured in `netlify.toml` |

## Legal Requirements (German Law)

The site includes mandatory German legal pages:
- **Impressum** (`/impressum`) - Legal notice with company details
- **Datenschutz** (`/datenschutz`) - GDPR-compliant privacy policy

Both are linked in the footer and must be kept up-to-date.

## Performance Notes

- Static site generation (no server-side rendering)
- Images use `loading="lazy"` where appropriate
- CSS is purged by Tailwind (only used classes included)
- No external JavaScript frameworks (vanilla JS only)

## Known TODOs

1. **Web3Forms Access Key**: Replace `YOUR_ACCESS_KEY_HERE` in `kontakt.astro` with actual key
2. Some image comments reference `.webp` format migration (currently using `.jpg`)

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) - last 2 versions.
Tailwind's autoprefixer handles vendor prefixes.
