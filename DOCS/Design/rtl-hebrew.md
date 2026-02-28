# Hebrew & RTL Design Guide
**LeadsReviver** | WW A.I Solutions | Version 1.0.0

This guide covers everything needed to implement a complete, production-quality Hebrew (RTL) variant of the LeadsReviver design system.

---

## Core Principle: Bidirectional First

Design for RTL from the start, not as an afterthought. Hebrew users experience UI direction as fundamental — a mirrored layout feels broken, not foreign.

**Key rule:** Content direction flips left-to-right (mirrors). Circular/symmetric elements (buttons, badges, cards without directional content) stay the same. Progress and time flows right-to-left in Hebrew contexts.

---

## HTML Setup

```html
<!-- Hebrew page -->
<html lang="he" dir="rtl">
  <head>
    <!-- Heebo font for Hebrew -->
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
</html>
```

**Next.js (App Router):**
```tsx
// app/[locale]/layout.tsx
const dir = locale === 'he' ? 'rtl' : 'ltr';
return <html lang={locale} dir={dir}>...</html>
```

**Dynamic switching (React):**
```tsx
// Apply to root element when user switches language
document.documentElement.dir = 'rtl';
document.documentElement.lang = 'he';
```

---

## Typography

### Hebrew Font: Heebo

**Why Heebo:**
- Designed specifically for Hebrew and Latin coexistence
- Modern, geometric letterforms that match the brand's clean aesthetic
- Excellent weight range (300–800) covering all our typographic needs
- Highly legible on screens at all sizes
- Free via Google Fonts

**Alternatives (if needed):**
- **Assistant** — Slightly more humanist, great for body text
- **Rubik** — Rounded, friendly variant (less formal)
- **David Libre** — Traditional/formal contexts only

**Font import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### RTL Typography Rules

```css
[dir="rtl"] {
  font-family: 'Heebo', sans-serif;

  /* Hebrew doesn't benefit from tight negative tracking */
  letter-spacing: 0em;

  /* Slightly more generous line height for Hebrew */
  line-height: 1.65;
}

/* Headings in Hebrew */
[dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3,
[dir="rtl"] h4, [dir="rtl"] h5, [dir="rtl"] h6 {
  font-family: 'Heebo', sans-serif;
  font-weight: 700; /* or 800 for hero */
  letter-spacing: 0;
  line-height: 1.3;
}

/* Hebrew body copy */
[dir="rtl"] p, [dir="rtl"] li {
  font-family: 'Heebo', sans-serif;
  font-weight: 400;
  line-height: 1.7;
}
```

### Mixed Hebrew/English Text

When Hebrew and Latin characters appear in the same string, the browser handles bidirectional algorithm automatically. However, some edge cases need manual hints:

```html
<!-- Force LTR for embedded numbers/English in Hebrew context -->
<span dir="ltr">+1 (555) 123-4567</span>

<!-- Force specific direction for ambiguous content -->
<bdi>{{ userName }}</bdi>  <!-- Auto-detects direction per user -->

<!-- Unicode direction marks (use sparingly) -->
<!-- LTR mark: &#x200E;  RTL mark: &#x200F; -->
```

---

## CSS Logical Properties

**Always use logical CSS properties** for RTL compatibility. They automatically flip for RTL.

| Physical (Avoid) | Logical (Use) | Notes |
|-----------------|---------------|-------|
| `margin-left` | `margin-inline-start` | — |
| `margin-right` | `margin-inline-end` | — |
| `padding-left` | `padding-inline-start` | — |
| `padding-right` | `padding-inline-end` | — |
| `border-left` | `border-inline-start` | — |
| `border-right` | `border-inline-end` | — |
| `left: 0` | `inset-inline-start: 0` | — |
| `right: 0` | `inset-inline-end: 0` | — |
| `text-align: left` | `text-align: start` | — |
| `text-align: right` | `text-align: end` | — |
| `float: left` | `float: inline-start` | — |
| `border-radius: 12px 0 0 12px` | `border-start-start-radius: 12px` | — |

**Flexbox direction:**
```css
/* This automatically adjusts in RTL — no changes needed */
.flex-row { display: flex; flex-direction: row; }

/* 'row' in RTL flows right-to-left automatically */
/* Never hardcode flex-direction: row-reverse as RTL fix */
```

---

## Component RTL Specifications

### Navigation
```css
/* LTR: Logo left, links center, CTA right */
/* RTL: Logo right, links center, CTA left */
/* Flexbox handles this automatically with dir="rtl" */

[dir="rtl"] .nav-active-indicator {
  border-right: none;
  border-left: 2px solid var(--color-primary); /* Mirror */
}
```

### Sidebar Navigation
```css
/* Active item left border → right border in RTL */
[dir="rtl"] .nav-item-active {
  border-inline-start: 3px solid var(--color-brand-300);
  /* border-inline-start = border-left in LTR, border-right in RTL */
}

/* Sidebar opens from right in RTL */
[dir="rtl"] .sidebar {
  inset-inline-end: 0;  /* right: 0 in LTR, left: 0 in RTL */
  inset-inline-start: auto;
}
```

### Icons — Directional Icons Must Flip

**Icons that MUST be mirrored in RTL:**
- Arrows: →, ←, ↗, ↙
- Chevrons: ›, ‹
- Back/Forward navigation
- Progress arrows
- "Send" icon (paper plane)

**Icons that stay the same in RTL:**
- Question mark, info circle, warning triangle
- Checkmark, X, plus, minus
- Lock, bell, settings, camera
- Person/avatar icons
- Star, heart, bookmark (non-directional)

```css
/* CSS mirror for directional icons */
[dir="rtl"] .icon-directional {
  transform: scaleX(-1);
}

/* React/Tailwind utility */
/* Add to icon component: className={isRTL ? 'scale-x-[-1]' : ''} */
```

### Forms & Inputs
```css
/* Input text aligns to start automatically with dir="rtl" */
[dir="rtl"] input,
[dir="rtl"] textarea {
  text-align: start; /* Right in RTL */
}

/* Placeholder direction */
[dir="rtl"] input::placeholder {
  text-align: end; /* Left in RTL → right side */
  /* Actually: text-align: start works here too */
}

/* Prefix/suffix icons swap sides */
/* In LTR: prefix icon on left → in RTL: prefix icon on right */
[dir="rtl"] .input-prefix-icon {
  inset-inline-start: auto;
  inset-inline-end: 12px;
}
[dir="rtl"] .input-suffix-icon {
  inset-inline-end: auto;
  inset-inline-start: 12px;
}
```

### Cards with Directional Elements
```css
/* Status indicator border: left in LTR, right in RTL */
.lead-card {
  border-inline-start: 3px solid var(--color-primary);
}
/* border-inline-start handles both LTR/RTL automatically */
```

### Progress Bar
```css
/* LTR: fills left to right. RTL: fills right to left */
[dir="rtl"] .progress-fill {
  /* Using logical direction, margin-inline-start auto-applies */
  /* If using transform-based animation, flip direction: */
  transform-origin: right center; /* instead of left center */
}
```

### Dropdowns / Menus
```css
/* LTR: menu opens aligned to left of trigger */
/* RTL: menu opens aligned to right of trigger */
[dir="rtl"] .dropdown-menu {
  inset-inline-start: auto;
  inset-inline-end: 0;
}
```

### Toast Notifications
```css
/* LTR: bottom-right. RTL: bottom-left */
.toast-container {
  inset-inline-end: 24px; /* right in LTR, left in RTL */
  bottom: 24px;
}
```

### Modal / Dialog
```css
/* Close button: LTR top-right → RTL top-left */
.modal-close {
  inset-inline-end: 16px; /* Logical: auto-flips */
  top: 16px;
}

/* Footer buttons: LTR right-aligned → RTL left-aligned */
.modal-footer {
  justify-content: flex-end;
  /* flex-end in RTL = left side visually (correct for Hebrew) */
}
```

---

## Number & Date Formatting

```js
// Numbers: Use Intl.NumberFormat
const formatNumber = (n) => new Intl.NumberFormat('he-IL').format(n);
// → "1,247" (Hebrew uses same comma separator)

// Currency
const formatCurrency = (n) => new Intl.NumberFormat('he-IL', {
  style: 'currency',
  currency: 'ILS', // Israeli Shekel: ₪
  // or 'USD' for dollar
}).format(n);
// → "₪1,247.00"

// Dates
const formatDate = (d) => new Intl.DateTimeFormat('he-IL', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(d);
// → "26 בפברואר 2026"
```

---

## Hebrew-Specific UI Copy Guidelines

| Context | Hebrew Style Notes |
|---------|-------------------|
| Button labels | Keep short — Hebrew words can be longer visually than English equivalents; allow extra padding |
| Error messages | Polite, direct tone. Avoid overly formal language in Hebrew SaaS |
| Placeholder text | Use a full example value, not abstract descriptions |
| Success messages | "!הפעולה בוצעה בהצלחה" — add exclamation at end (Hebrew convention) |
| Numbers in Hebrew text | Numbers render LTR within RTL text — this is correct/expected |
| English brand names | Keep in Latin script: "LeadsReviver", "AI" — do not translate to Hebrew chars |

---

## Testing RTL Implementation

### Manual Checklist
- [ ] Page title and metadata in correct language
- [ ] All text reads right-to-left
- [ ] Navigation: logo on right, links ordered right-to-left
- [ ] Sidebar: opens from right side
- [ ] Form inputs: text appears right-aligned
- [ ] Input prefix icons on right side
- [ ] Modal close button: top-left corner
- [ ] Dropdown menus: aligned to right of trigger
- [ ] Toast notifications: bottom-left
- [ ] Directional icons (arrows, chevrons) are mirrored
- [ ] Progress bars fill right-to-left
- [ ] Cards with start-border: border on right side
- [ ] Pagination: first page on right
- [ ] Scroll indicator / breadcrumbs flow right-to-left

### Browser Testing
- Test in Chrome, Firefox, and Safari — RTL rendering differs slightly
- Use Chrome DevTools → Elements → force `dir="rtl"` for quick testing

### Accessibility (RTL)
- Screen readers (NVDA, JAWS) handle `dir="rtl"` natively — ensure correct HTML `lang="he"`
- Announce language changes: use `aria-live` for dynamic language switches
- Focus order follows visual RTL order (Tab moves right-to-left visually)

---

## React Implementation Pattern

```tsx
// hooks/useRTL.ts
import { useLocale } from 'next-intl'; // or your i18n solution
export const useRTL = () => useLocale() === 'he';

// components/Icon.tsx — auto-flipping directional icons
const DIRECTIONAL_ICONS = ['ArrowRight', 'ArrowLeft', 'ChevronRight', 'ChevronLeft', 'Send'];

export const Icon = ({ name, ...props }) => {
  const isRTL = useRTL();
  const shouldFlip = isRTL && DIRECTIONAL_ICONS.includes(name);
  return (
    <LucideIcon
      name={name}
      style={shouldFlip ? { transform: 'scaleX(-1)' } : undefined}
      {...props}
    />
  );
};

// Tailwind RTL utilities (add to globals.css)
// Use [dir="rtl"]: variant in Tailwind v3.3+
// <div className="ml-4 [dir=rtl]:mr-4 [dir=rtl]:ml-0">
```

---

## i18n File Structure

```
src/
  locales/
    en.json    ← English strings
    he.json    ← Hebrew strings
```

```json
// he.json example (partial)
{
  "nav": {
    "home": "בית",
    "features": "תכונות",
    "pricing": "תמחור",
    "about": "אודות",
    "login": "כניסה",
    "startFree": "התחל בחינם"
  },
  "hero": {
    "overline": "פלטפורמת ניהול לידים",
    "headline": "הפוך לידים קפואים להכנסות",
    "subhead": "בינה מלאכותית מחדשת קשר עם לקוחות פוטנציאליים באופן אוטומטי"
  },
  "status": {
    "hot": "חם",
    "warm": "חמים",
    "cold": "קר",
    "converted": "המיר",
    "unresponsive": "לא מגיב"
  }
}
```
