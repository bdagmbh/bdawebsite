# BDA Baudesign Akustik GmbH Website

## Project Overview

This is the official corporate website for **BDA Baudesign Akustik GmbH**, a certified construction company based in Recklinghausen, Germany. The company specializes in acoustic construction, facade work, thermal insulation (WDVS), demolition, landscaping (Galabau), and tiling services.

The website is a static, multi-page site built with modern web technologies, optimized for performance, SEO, and accessibility. The content is entirely in German, targeting customers in the Ruhrgebiet region.

**Live URL**: https://bda-baudesign-akustik.de

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Astro](https://astro.build/) | ^4.5.8 | Static site generator with islands architecture |
| [Tailwind CSS](https://tailwindcss.com/) | ^3.4.1 | Utility-first CSS framework |
| [TypeScript](https://www.typescriptlang.org/) | ^5.4.3 | Type safety with strict configuration |
| [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) | ^5.1.0 | Tailwind integration for Astro |
| [@astrojs/check](https://docs.astro.build/en/reference/cli-reference/#astro-check) | ^0.5.10 | TypeScript checking |

### Build Configuration
- **Module System**: ES Modules (`"type": "module"`)
- **Build Output**: Static HTML/CSS/JS (SSG)
- **TypeScript Config**: Extends `astro/tsconfigs/strict`

---

## Project Structure

```
.
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS configuration with custom colors
├── postcss.config.cjs        # PostCSS configuration (Tailwind + Autoprefixer)
├── tsconfig.json             # TypeScript configuration
├── netlify.toml              # Netlify deployment & security headers
├── package.json              # Project dependencies and scripts
├── .gitignore                # Git ignore rules
├── public/                   # Static assets
│   ├── images/               # All image assets (logos, photos)
│   ├── manifest.json         # PWA manifest
│   ├── robots.txt            # SEO robots configuration
│   └── sitemap.xml           # XML sitemap for search engines
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Root layout (HTML wrapper, SEO meta, JSON-LD)
│   ├── components/
│   │   ├── Navbar.astro      # Sticky navigation with mobile menu
│   │   ├── Footer.astro      # Site footer with contact info
│   │   └── CookieBanner.astro # GDPR-compliant cookie consent
│   ├── pages/                # File-based routing
│   │   ├── index.astro       # Homepage
│   │   ├── leistungen.astro  # Services detail page
│   │   ├── ueber-uns.astro   # About us page
│   │   ├── referenzen.astro  # Portfolio/references page
│   │   ├── kontakt.astro     # Contact page with form
│   │   ├── datenschutz.astro # Privacy policy (GDPR)
│   │   ├── impressum.astro   # Legal notice (German law)
│   │   └── 404.astro         # Custom 404 error page
│   ├── styles/
│   │   └── global.css        # Global styles with Tailwind directives
│   └── env.d.ts              # TypeScript environment declarations
└── dist/                     # Build output (generated)
```

---

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

---

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

# TypeScript checking only
npm run astro check
```

---

## Build & Deployment

### Build Process
1. `astro check` - Validates TypeScript
2. `astro build` - Generates static files to `dist/`

### Deployment (Netlify)
- **Platform**: Netlify
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`

### Security Headers (netlify.toml)
The site includes comprehensive security headers:

```toml
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
Referrer-Policy = "strict-origin-when-cross-origin"
Permissions-Policy = "accelerometer=(), camera=(), ..."
Content-Security-Policy = "default-src 'self'; ..."
```

---

## Key Features

### 1. Contact Form (kontakt.astro)
- Uses **Web3Forms** API for form submission
- Access Key: `37e82d64-cdce-4088-bfcb-4d94297ed9c0`
- Client-side JavaScript for AJAX submission with real-time validation
- Includes honeypot (`botcheck`) and GDPR consent checkbox
- Form fields: Name, Email, Phone (optional), Message, DSGVO consent

### 2. Cookie Banner (CookieBanner.astro)
- GDPR-compliant cookie consent
- Only stores acceptance in `localStorage` (key: `cookie-accepted`)
- No tracking cookies without explicit consent
- Slides up from bottom after 1 second delay
- No external analytics tools are used

### 3. Mobile Navigation (Navbar.astro)
- Responsive navbar with hamburger menu on all screen sizes
- Uses vanilla JavaScript for toggle functionality
- Escape key closes the menu
- ARIA attributes for accessibility (`aria-expanded`, `aria-controls`)
- Minimum touch target size: 44x44px

### 4. SEO Optimization
- All pages have unique `title` and `description` props
- Open Graph meta tags configured (Facebook, Twitter)
- Canonical URLs
- JSON-LD structured data on homepage (LocalBusiness schema)
- XML sitemap at `/sitemap.xml`
- Robots.txt configured
- Semantic HTML structure

### 5. Accessibility Features
- Skip-to-content link for keyboard navigation
- ARIA labels and roles throughout
- Focus visible indicators on interactive elements
- Alt text for all images (German language)
- Proper heading hierarchy (h1 → h2 → h3)
- Minimum touch target sizes (44px)

---

## Page Structure

| Page | File | Description |
|------|------|-------------|
| Home | `index.astro` | Hero, Trust-bar, Services preview, CTA |
| Leistungen | `leistungen.astro` | 7 service sections with zig-zag layout |
| Über Uns | `ueber-uns.astro` | Company history, team, values |
| Referenzen | `referenzen.astro` | Masonry image gallery, testimonial |
| Kontakt | `kontakt.astro` | Contact info, Google Maps, Web3Forms |
| Impressum | `impressum.astro` | Legal notice (required by German law) |
| Datenschutz | `datenschutz.astro` | Privacy policy (GDPR compliant) |
| 404 | `404.astro` | Custom error page |

---

## External Services Integration

| Service | Usage | Configuration |
|---------|-------|---------------|
| Web3Forms | Contact form submission | Access key hardcoded in `kontakt.astro` |
| Google Maps | Embedded map on contact page | Hardcoded embed URL |
| Netlify | Hosting & build | Configured in `netlify.toml` |

---

## Code Style Guidelines

### Astro Components
- Use TypeScript for type safety
- Import `Layout` from `../layouts/Layout.astro`
- Define `title` and `description` props
- Use semantic HTML (`<section>`, `<article>`, `<nav>`)
- Group related sections with comments (`<!-- Sektion X: Name -->`)

### Styling Conventions
- Prefer Tailwind utility classes over custom CSS
- Use custom color names (`primary`, `secondary`, etc.)
- Responsive prefixes: `sm:`, `md:`, `lg:`
- Hover states: `hover:-translate-y-1`, `hover:shadow-xl`
- Focus visible: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`

### Images
- Store in `public/images/`
- Use descriptive filenames
- Hero/featured images: `.jpg` format
- Logo: `.png` format
- Reference with absolute paths: `/images/filename.jpg`
- Use `loading="lazy"` for images below the fold
- Use `fetchpriority="high"` for hero images
- Always include `width` and `height` attributes
- Use German `alt` text for accessibility

### JavaScript Patterns
- Use IIFE (Immediately Invoked Function Expression) for component scripts
- TypeScript type annotations where applicable
- Event listener cleanup not needed (static site)
- Example:

```javascript
<script>
  (function() {
    const element = document.getElementById('id');
    if (element) {
      // Logic here
    }
  })();
</script>
```

---

## Legal Requirements (German Law)

The site includes mandatory German legal pages:
- **Impressum** (`/impressum`) - Legal notice with company details
- **Datenschutz** (`/datenschutz`) - GDPR-compliant privacy policy

Both are linked in the footer and must be kept up-to-date.

**Company Information**:
- Name: BDA Baudesign Akustik GmbH
- Address: Bochumer Straße 207, 45661 Recklinghausen
- Owner: Ilir Idrizi
- Handelsregister: Amtsgericht Recklinghausen, HRB 8737
- USt-IdNr: DE 258609597

---

## Performance Notes

- Static site generation (no server-side rendering)
- Images use `loading="lazy"` where appropriate
- Hero images use `fetchpriority="high"`
- CSS is purged by Tailwind (only used classes included)
- No external JavaScript frameworks (vanilla JS only)
- Preconnect hints for external domains (Web3Forms, Google Maps)

---

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) - last 2 versions.
Tailwind's autoprefixer handles vendor prefixes.

---

## Known Issues & TODOs

1. **Duplicate Section IDs**: In `leistungen.astro`, there are duplicate `id="abbruch"` attributes on lines 127 and 153. The second occurrence should be `id="galabau"`.

2. **Image Optimization**: Some comments reference `.webp` format migration, but the site currently uses `.jpg`.

3. **Web3Forms**: The access key is currently hardcoded. Consider moving to environment variables if the project grows.

---

## Development Environment Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

**Requirements**:
- Node.js 18+ (recommended)
- npm or compatible package manager

---

## File Naming Conventions

- **Pages**: Lowercase with hyphens (e.g., `ueber-uns.astro`, `datenschutz.astro`)
- **Components**: PascalCase (e.g., `Navbar.astro`, `CookieBanner.astro`)
- **Images**: Descriptive names in German (e.g., `Unternehmensvorstellung.jpg`, `unserteam.jpg`)
- **Config files**: `.mjs` for ESM, `.cjs` for CommonJS where required
