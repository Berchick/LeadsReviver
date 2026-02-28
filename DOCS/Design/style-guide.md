# LeadsReviver — Style Guide
**Brand: WW A.I Solutions** | Version 1.0.0

---

## Design Philosophy

**"Precision Intelligence"** — The LeadsReviver design language communicates trust, technological authority, and business efficiency. It is clean and structured without being cold, confident without arrogance, and professional enough for enterprise while accessible for SMBs.

The aesthetic is rooted in the WW A.I Solutions visual identity: deep navy surfaces with electric-blue accents, crisp white cards, and purposeful typographic hierarchy. Every element signals capability.

---

## Color System

### Primary Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-900` | `#0D1B5C` | Deepest navy — hero sections, inverted banners |
| `brand-800` | `#152070` | Dark navy — section backgrounds |
| `brand-700` | `#1A2B8A` | Rich navy — primary dark surfaces |
| `brand-600` | `#1E3A8A` | Navy — cards on dark backgrounds |
| `brand-500` | `#2563EB` | **Primary Blue** — CTAs, links, active states |
| `brand-400` | `#3B82F6` | Hover blue — interactive state |
| `brand-300` | `#60A5FA` | Sky blue — icons, highlights |
| `brand-200` | `#93C5FD` | Light blue — borders, tints |
| `brand-100` | `#DBEAFE` | Pale blue — chip/badge backgrounds |
| `brand-50`  | `#EFF6FF` | Near-white blue — page tints |

### Neutral Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-900` | `#111827` | Primary text |
| `neutral-700` | `#374151` | Strong secondary text |
| `neutral-600` | `#4B5563` | Body/paragraph text |
| `neutral-500` | `#6B7280` | Muted text |
| `neutral-400` | `#9CA3AF` | Placeholder, disabled |
| `neutral-300` | `#D1D5DB` | Borders strong |
| `neutral-200` | `#E5E7EB` | Borders default |
| `neutral-100` | `#F3F4F6` | Subtle backgrounds |
| `neutral-50`  | `#F9FAFB` | Page background |

### Status Colors

| State | Color | Background |
|-------|-------|-----------|
| Success | `#10B981` | `#D1FAE5` |
| Warning | `#F59E0B` | `#FEF3C7` |
| Error | `#EF4444` | `#FEE2E2` |
| Info | `#06B6D4` | `#CFFAFE` |

### Gradients

```css
/* Hero mesh gradient (used on landing/hero sections) */
background: radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.3) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(96,165,250,0.2) 0%, transparent 50%),
            linear-gradient(135deg, #0D1B5C 0%, #152070 60%, #1A2B8A 100%);

/* Brand button gradient */
background: linear-gradient(135deg, #2563EB 0%, #3B82F6 100%);
```

---

## Typography

### Font Stack

| Role | LTR Font | RTL Font | Usage |
|------|----------|----------|-------|
| **Display** | Syne (800, 700) | Heebo (800, 700) | Page titles, hero headlines |
| **Body** | Plus Jakarta Sans | Heebo | Body copy, UI labels |
| **Mono** | JetBrains Mono | — | Code, data values, metrics |

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Heebo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### Type Scale

| Name | Size | Weight | Line Height | Tracking | Usage |
|------|------|--------|-------------|----------|-------|
| `hero` | `clamp(2.5rem, 7vw, 5.5rem)` | 800 | 1.1 | −0.04em | Hero headlines |
| `display` | `4.5rem / 72px` | 800 | 1.1 | −0.04em | Page-level titles |
| `h1` | `3rem / 48px` | 700 | 1.2 | −0.03em | Section titles |
| `h2` | `2.25rem / 36px` | 700 | 1.25 | −0.02em | Subsection titles |
| `h3` | `1.875rem / 30px` | 600 | 1.3 | −0.01em | Card titles |
| `h4` | `1.5rem / 24px` | 600 | 1.35 | 0 | Group labels |
| `h5` | `1.25rem / 20px` | 600 | 1.4 | 0 | Small headings |
| `h6` | `1rem / 16px` | 600 | 1.5 | 0 | Micro labels |
| `body-lg` | `1.125rem / 18px` | 400 | 1.6 | 0 | Lead paragraphs |
| `body` | `1rem / 16px` | 400 | 1.6 | 0 | Body copy |
| `body-sm` | `0.875rem / 14px` | 400 | 1.5 | 0 | Captions, helpers |
| `caption` | `0.75rem / 12px` | 500 | 1.4 | +0.02em | Labels, badges |
| `overline` | `0.75rem / 12px` | 600 | 1 | +0.16em | Section labels (ALL CAPS) |

### Hebrew Typography (RTL)

- **Font**: Heebo — excellent RTL support, modern letterforms, high legibility
- **Sizes**: Same scale applies; Hebrew text renders slightly larger visually
- **Line height**: Increase by `0.1` over LTR values (Hebrew ascenders/descenders)
- **Letter spacing**: Avoid negative tracking in Hebrew — use `0` or slightly positive
- **See**: `rtl-hebrew.md` for full RTL implementation guide

### Type Usage Rules

1. **Hierarchy**: Never use more than 3 font sizes on a single viewport section
2. **Body max-width**: `65ch` for readable line length
3. **Display font** (Syne): Headlines and hero only — never for body copy
4. **Bold emphasis**: Use `font-weight: 700` for inline emphasis, not italics
5. **Overline labels**: Always uppercase, tracking-widest, brand-500 color

---

## Spacing

Use the 4px base grid. All spacing values are multiples of 4px.

| Token | Value | Common Use |
|-------|-------|-----------|
| `space-1` | 4px | Icon gaps, tight padding |
| `space-2` | 8px | Inner component padding (sm) |
| `space-3` | 12px | Badge padding, small gaps |
| `space-4` | 16px | Base component padding |
| `space-5` | 20px | Standard component gaps |
| `space-6` | 24px | Card padding (sm) |
| `space-8` | 32px | Card padding (default), section internal |
| `space-10` | 40px | Section gaps |
| `space-12` | 48px | Component section spacing |
| `space-16` | 64px | Section padding |
| `space-20` | 80px | Section vertical padding |
| `space-24` | 96px | Large section gaps |

**Layout constants:**
- Container max-width: `1280px`
- Container padding (mobile): `16px`
- Container padding (desktop): `32px`
- Section vertical padding: `80px` (desktop), `48px` (mobile)
- Nav height: `68px`

---

## Elevation & Shadows

Elevation levels communicate z-position and interactivity.

| Level | Token | Value | Use |
|-------|-------|-------|-----|
| 0 | — | none | Flat, inline elements |
| 1 | `shadow-xs` | `0 1px 2px rgba(0,0,0,.05)` | Subtle containers |
| 2 | `shadow-sm` | `0 1px 3px rgba(0,0,0,.10)` | Default cards |
| 3 | `shadow-md` | `0 4px 6px rgba(0,0,0,.07)` | Raised cards |
| 4 | `shadow-lg` | `0 10px 15px rgba(0,0,0,.10)` | Hover/active cards |
| 5 | `shadow-xl` | `0 20px 25px rgba(0,0,0,.10)` | Popovers, dropdowns |
| 6 | `shadow-2xl` | `0 25px 50px rgba(0,0,0,.25)` | Modals |
| — | `shadow-brand` | `0 4px 14px rgba(37,99,235,.35)` | Primary buttons |

**Rule**: Shadow elevation should increase on hover/focus. Cards go `shadow-card` → `shadow-card-hover` on hover.

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `radius-sm` | 4px | Small elements, tags |
| `radius-md` | 8px | Inner elements |
| `radius-lg` | 12px | Buttons, inputs |
| `radius-xl` | 16px | Cards, panels |
| `radius-2xl` | 24px | Modals, drawers, large cards |
| `radius-3xl` | 32px | Hero sections, feature blocks |
| `radius-full` | 9999px | Pills, avatars, badges |

---

## Iconography

### Library
- **Primary**: [Lucide React](https://lucide.dev/) — clean, consistent 24px stroke icons
- **Supplementary**: Custom SVG icons for brand-specific concepts (AI, leads, voice)
- **Size scale**: 16px (sm), 20px (md), 24px (default), 32px (lg), 48px (feature)

### Usage Rules
1. Default stroke-width: `1.5` — matches the brand's refined aesthetic
2. Icons on dark/hero backgrounds: use `brand-300` or `white`
3. Feature icons (cards): wrap in a `48×48` container, `brand-100` bg, `brand-500` color
4. Never use filled icons and outline icons together in the same context
5. RTL: Directional icons (arrows, chevrons) must be mirrored in RTL layouts

---

## Motion

### Principles
1. **Purposeful**: Animation should convey meaning, not distract
2. **Fast for UI**: Interactions (hover, click) use `200ms`
3. **Dramatic for reveals**: Page load / scroll entries use `500–700ms` with stagger

### Standard Transitions
```css
/* Interactive elements (buttons, links, inputs) */
transition: all 200ms cubic-bezier(0, 0, 0.2, 1);

/* Cards on hover */
transition: box-shadow 300ms cubic-bezier(0, 0, 0.2, 1),
            transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);

/* Card hover transform */
transform: translateY(-2px);
```

### Scroll Animations (CSS)
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Staggered children */
.animate-child:nth-child(1) { animation: fadeInUp 600ms ease-out 0ms both; }
.animate-child:nth-child(2) { animation: fadeInUp 600ms ease-out 100ms both; }
.animate-child:nth-child(3) { animation: fadeInUp 600ms ease-out 200ms both; }
```

### Accessibility
- Always respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Layout Grid

| Breakpoint | Columns | Gutter | Margin |
|-----------|---------|--------|--------|
| Mobile (< 640px) | 4 | 16px | 16px |
| Tablet (640–1024px) | 8 | 24px | 24px |
| Desktop (> 1024px) | 12 | 32px | 32px |
| Wide (> 1280px) | 12 | 32px | auto |

**Common column spans:**
- Full-width: `12 / 12`
- Wide content: `10 / 12` (centered)
- Narrow content (prose): `8 / 12` (centered)
- Half: `6 / 12`
- Third: `4 / 12`
- Quarter: `3 / 12`

---

## Photography & Imagery

- **Style**: Futuristic AI-themed illustrations (matching the wwaisolutions.com aesthetic — isometric city/network renders with electric blue lighting)
- **Color overlay**: Apply `mix-blend-mode: luminosity` + brand blue overlay for brand consistency
- **Border radius**: Always `radius-xl` or `radius-2xl` on image containers
- **Aspect ratios**: Hero 16:9, Cards 4:3, Avatars 1:1, Thumbnails 3:2

---

## Accessibility Standards

- **WCAG Level**: AA minimum, AAA where possible
- **Color contrast**: 4.5:1 for normal text, 3:1 for large text
- **Focus styles**: 3px ring, `brand-200` offset, always visible
- **Touch targets**: Minimum 44×44px on mobile
- **Keyboard navigation**: Full support for Tab/Shift-Tab, Enter, Space, Arrow keys
- **Screen readers**: All interactive elements have `aria-label` or visible text
- **RTL**: Full bidirectional text support (see `rtl-hebrew.md`)

---

## Brand Voice (Copy Guidelines)

| Context | Tone | Example |
|---------|------|---------|
| Hero/headline | Bold, decisive | "Revive Dead Leads. Automatically." |
| Feature descriptions | Clear, benefit-first | "Re-engage prospects the moment they go cold" |
| CTA buttons | Action-oriented | "Start Reviving", "See It Work", "Get Started" |
| Error messages | Helpful, not alarming | "Something went wrong. Try again or contact support." |
| Empty states | Encouraging | "No leads yet — import your first list to get started" |
| Success messages | Affirming | "Lead sequence activated. Sit back." |

**Hebrew copy**: Maintain the same confident tone. Hebrew business copy should feel natural, not translated.
