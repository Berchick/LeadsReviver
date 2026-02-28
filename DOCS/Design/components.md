# LeadsReviver — Component Specifications
**Brand: WW A.I Solutions** | Version 1.0.0

Component specs are framework-agnostic. React/Next.js + Tailwind CSS is the recommended stack.

---

## Navigation

### Top Navigation Bar

```
┌─────────────────────────────────────────────────────────────┐
│  ◈ LeadsReviver   Home  Features ∨  Pricing  About  [Login] │
└─────────────────────────────────────────────────────────────┘
```

**Structure:**
- Height: `68px`
- Background: `rgba(255,255,255,0.96)` + `backdrop-filter: blur(12px)`
- Border bottom: `1px solid var(--color-border-subtle)`
- Shadow: `var(--shadow-nav)`
- Position: `sticky top-0`, z-index: `var(--z-sticky)`
- Max-width: `1280px`, centered with `margin: 0 auto`

**Logo:**
- Height: `32px`
- Left padding: `var(--space-8)` (desktop), `var(--space-4)` (mobile)

**Nav Links:**
- Font: `Plus Jakarta Sans`, `15px`, `font-weight: 500`
- Color: `var(--color-text-primary)` default, `var(--color-primary)` active/hover
- Transition: `color 200ms ease-out`
- Active indicator: `color: brand-500` + optional `2px bottom border`

**CTA Button** (rightmost):
- Style: Primary button (see Buttons)
- Label: "Start Free" or "Login"

**RTL:** Logo moves to right, nav links to left, CTA to leftmost position. Use `flex-direction: row-reverse` or logical properties.

**Mobile (< 768px):** Hamburger menu, full-width slide-down drawer.

---

## Buttons

### Variants

#### Primary Button
```css
background: var(--color-primary);           /* #2563EB */
color: white;
border-radius: var(--radius-button);        /* 12px */
font-weight: var(--font-semibold);
box-shadow: var(--shadow-brand);
transition: all 200ms ease-out;

:hover {
  background: var(--color-primary-hover);   /* #3B82F6 */
  box-shadow: var(--shadow-brand-hover);
  transform: translateY(-1px);
}
:active {
  background: var(--color-primary-active);  /* #1E3A8A */
  transform: translateY(0);
}
:focus-visible {
  outline: 3px solid var(--color-brand-200);
  outline-offset: 2px;
}
:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
```

#### Secondary Button (Outlined)
```css
background: transparent;
color: var(--color-primary);
border: 1.5px solid var(--color-brand-300);
border-radius: var(--radius-button);

:hover {
  background: var(--color-brand-50);
  border-color: var(--color-primary);
}
```

#### Ghost Button
```css
background: transparent;
color: var(--color-text-secondary);
border: none;

:hover {
  color: var(--color-primary);
  background: var(--color-brand-50);
}
```

#### Destructive Button
```css
background: var(--color-error-500);
color: white;
box-shadow: 0 4px 14px rgba(239,68,68,0.35);
```

### Sizes

| Size | Height | Padding | Font |
|------|--------|---------|------|
| `sm` | 32px | `8px 12px` | 13px |
| `md` | 40px | `10px 20px` | 14px |
| `lg` | 48px | `12px 24px` | 16px |
| `xl` | 56px | `14px 32px` | 18px |

### Icon Buttons
- Icon-only: Same height as size, width = height (square)
- Icon + label: `gap: 8px` between icon and text
- Icon size: always 16px (sm), 18px (md/lg), 20px (xl)

---

## Cards

### Service Card (Feature Card)
Used on landing/home to showcase features (like the AI Consulting, AI Agents, Voice AI pattern)

```
┌────────────────────────────┐
│                            │
│   [◈ Icon]                 │
│                            │
│   Card Title               │
│   Description text that    │
│   spans multiple lines     │
│                            │
│   → Learn More             │
└────────────────────────────┘
```

**Specs:**
- Background: `white`
- Border: `1px solid var(--color-border-default)`
- Border radius: `var(--radius-card)` — `16px`
- Padding: `var(--card-padding)` — `32px`
- Shadow: `var(--shadow-card)`
- Hover shadow: `var(--shadow-card-hover)`
- Hover transform: `translateY(-4px)`
- Transition: `box-shadow 300ms ease-out, transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1)`

**Icon container:**
- Size: `48×48px`
- Background: `var(--color-brand-100)`
- Border radius: `12px`
- Icon color: `var(--color-brand-500)`
- Margin-bottom: `20px`

**Title:** `h3`, Syne/Heebo, `20px`, `font-weight: 700`, `color: neutral-900`
**Description:** `16px`, `color: neutral-600`, `line-height: 1.6`, `margin-top: 8px`
**Link/CTA:** `14px`, `font-weight: 600`, `color: brand-500`, arrow icon, `margin-top: 24px`

### Lead Card (Data Card)
Used in dashboard/list views for individual leads

```
┌──────────────────────────────────────────────┐
│  ● John Smith          [Hot]    [Send Email ▶]│
│    john@company.com · +1 555 0123             │
│    Company Inc. · Last contact: 2 weeks ago   │
│    Score: ████████░░ 80%                      │
└──────────────────────────────────────────────┘
```

**Specs:**
- Background: white
- Border-left: `3px solid var(--color-primary)` (or status color)
- Border radius: `12px`
- Padding: `16px 20px`
- Hover: `background: brand-50`, border-left color unchanged

### Stat Card (KPI/Metric Card)
```
┌───────────────────┐
│  1,247            │
│  Active Leads     │
│  ↑ 12% this week  │
└───────────────────┘
```

- Background: white (or `brand-700` inverted variant)
- Padding: `24px`
- Border radius: `16px`
- Number: `3xl`, Syne, `font-weight: 800`, `neutral-900`
- Label: `sm`, `neutral-500`
- Trend: `xs`, success-500 (up) or error-500 (down)

---

## Forms & Inputs

### Text Input

```
Label Text
┌────────────────────────────────┐
│  Placeholder text          [✕] │
└────────────────────────────────┘
  Helper text or error message
```

**States:**

| State | Border | Shadow | Background |
|-------|--------|--------|-----------|
| Default | `neutral-300` | none | white |
| Hover | `neutral-400` | none | white |
| Focus | `brand-500` | `0 0 0 3px rgba(37,99,235,0.2)` | white |
| Error | `error-500` | `0 0 0 3px rgba(239,68,68,0.2)` | white |
| Disabled | `neutral-200` | none | `neutral-50` |

**Specs:**
- Height: `44px`
- Padding: `0 16px`
- Border: `1.5px solid`
- Border radius: `12px`
- Font: `Plus Jakarta Sans`, `15px`, `neutral-900`
- Placeholder: `neutral-400`
- Transition: `border-color 150ms ease, box-shadow 150ms ease`

### Label
- Font: `14px`, `font-weight: 600`, `neutral-700`
- Margin-bottom: `6px`
- Required marker: `color: error-500`, ` *` after label text

### Helper / Error Text
- Font: `13px`, `neutral-500` (helper), `error-500` (error)
- Margin-top: `6px`
- Error: include icon ⚠ before message

### Select
Same as input, with custom chevron icon replacing browser default.

### Textarea
Same as input, `min-height: 120px`, `resize: vertical`.

### Checkbox / Radio
- Size: `18×18px`
- Checked: `brand-500` fill, white checkmark
- Border radius: `4px` (checkbox), `50%` (radio)
- Focus ring: `shadow-input-focus`

### Toggle (Switch)
- Track width: `44px`, height: `24px`
- Thumb: `20×20px`, white, `shadow-sm`
- Off: `neutral-300` track
- On: `brand-500` track
- Transition: `200ms spring`

---

## Badges & Status Chips

```css
/* Base badge */
display: inline-flex;
align-items: center;
padding: 3px 10px;
border-radius: 9999px;
font-size: 12px;
font-weight: 600;
```

| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| Default | `neutral-100` | `neutral-700` | — |
| Brand | `brand-100` | `brand-700` | — |
| Success | `success-100` | `success-700` | — |
| Warning | `warning-100` | `warning-700` | — |
| Error | `error-100` | `error-700` | — |
| Info | `info-100` | `info-700` | — |
| Outline | transparent | `neutral-700` | `1px solid neutral-300` |

**Lead Status Badges:**
- Hot → Error/red
- Warm → Warning/orange
- Cold → Info/cyan
- Converted → Success/green
- Unresponsive → Default/gray

---

## Data Table

Used for leads list, campaign results, analytics

```
┌───────────────────────────────────────────────────────────┐
│ [Search...]            [Filter ▼]  [Export]  [+ Add Lead] │
├─────────┬──────────────┬──────────┬───────┬───────────────┤
│ ☐  Name │ Company      │ Status   │ Score │ Last Contact  │
├─────────┼──────────────┼──────────┼───────┼───────────────┤
│ ☐  John │ Acme Corp    │ 🔥 Hot   │  92%  │ 2 days ago    │
│ ☐  Sara │ Beta Inc     │ ❄ Cold   │  34%  │ 3 weeks ago   │
└─────────┴──────────────┴──────────┴───────┴───────────────┘
│ Showing 1–20 of 1,247     [< 1 2 3 ... 63 >]             │
```

**Specs:**
- Header: `14px`, `font-weight: 600`, `neutral-500`, `neutral-50` background
- Row height: `52px`
- Row border: `1px solid neutral-100`
- Row hover: `brand-50` background
- Selected row: `brand-50` bg + `brand-200` left border
- Cell padding: `0 16px`
- Sort icon: Chevron, `neutral-400` default, `brand-500` active
- Pagination: 32px button height, current page: `brand-500`

---

## Modal / Dialog

```
          ┌────────────────────────────────┐
          │  Dialog Title             [✕] │
          │  ─────────────────────────    │
          │  Content area...              │
          │                               │
          │  [Cancel]        [Confirm →]  │
          └────────────────────────────────┘
```

**Overlay:** `rgba(0,0,0,0.5)`, `backdrop-filter: blur(4px)`
**Container:**
- Max-width: `560px` (sm), `720px` (md), `960px` (lg)
- Border radius: `var(--radius-modal)` — 24px
- Padding: `32px`
- Shadow: `var(--shadow-modal)`
- Animation: `scale(0.95) opacity(0)` → `scale(1) opacity(1)`, `300ms spring`

**Header:** Title `h4`, close button top-right, `padding-bottom: 20px`, border-bottom
**Body:** `padding: 20px 0`
**Footer:** `padding-top: 20px`, border-top, flex row, buttons right-aligned
**RTL:** Close button top-left, footer buttons left-aligned (left = end in RTL)

---

## Toast / Notification

```
┌──────────────────────────────────────────────┐
│ ✓  Lead sequence activated successfully. [✕] │
└──────────────────────────────────────────────┘
```

- Position: `bottom-right` (LTR), `bottom-left` (RTL)
- Min-width: `320px`, max-width: `480px`
- Border radius: `12px`
- Shadow: `var(--shadow-xl)`
- Icon left: status-colored, `20px`
- Animation: slide-in from bottom + fade
- Auto-dismiss: 4s (info/success), 6s (warning/error), manual (action required)

---

## Sidebar Navigation (Dashboard)

```
┌──────────┐
│ ◈ Logo   │
├──────────┤
│ ⊞ Dashboard   │
│ 👥 Leads      │
│ 📧 Campaigns  │
│ 📊 Analytics  │
│ ⚙  Settings   │
├──────────┤
│ 👤 Profile    │
└──────────┘
```

**Specs:**
- Width: `240px` (expanded), `64px` (collapsed)
- Background: `neutral-900` or `brand-900` (dark variant)
- Text: white, `opacity: 0.7` default, `opacity: 1` + `brand-300` active
- Active item: `brand-700` background, `border-left: 3px solid brand-300`
- Icon size: `20px`
- Item height: `44px`
- Item padding: `0 16px`
- Gap between icon and text: `12px`
- RTL: border-left → border-right, expand from left

---

## Progress Bar

```
Lead Score  ████████░░  82%
```

- Track: `neutral-100`, height `8px`, border-radius `full`
- Fill: gradient `brand-500` → `brand-400`
- Animated fill on mount: width from `0` to value, `600ms ease-out`
- Label: `13px`, `neutral-600`, shown right of track

---

## Avatar

| Size | Dimension | Font Size |
|------|-----------|-----------|
| `xs` | 24×24px | 10px |
| `sm` | 32×32px | 13px |
| `md` | 40×40px | 15px |
| `lg` | 48×48px | 18px |
| `xl` | 64×64px | 24px |

- Border radius: `50%`
- Fallback: initials on `brand-100` bg, `brand-600` text
- Online indicator: `10px` circle, `success-500`, positioned bottom-right

---

## Dropdown Menu

```
          ┌──────────────────┐
          │ ○ Option One     │
          │ ○ Option Two     │
          │ ─────────────    │
          │ ⚠ Danger Action  │
          └──────────────────┘
```

- Background: white
- Border: `1px solid neutral-200`
- Border radius: `12px`
- Shadow: `var(--shadow-xl)`
- Item height: `40px`
- Item padding: `0 12px`
- Item hover: `brand-50` bg, `brand-700` text
- Divider: `1px solid neutral-100`
- Danger item: `error-500` text
- Animation: `scale(0.95)` + `opacity(0)` → `100%`, `150ms ease-out`
- Origin: top-left (LTR dropdown), top-right (RTL dropdown)

---

## Empty State

```
          [   Illustration   ]

          No leads found

          Import your first lead list to
          start reviving opportunities.

                [Import Leads]
```

- Illustration: `180px` SVG or image
- Title: `h4`, `neutral-900`
- Description: `15px`, `neutral-500`, `max-width: 320px`, centered
- CTA: Primary button, `margin-top: 24px`
- Padding: `64px 32px`

---

## Loading States

### Skeleton Loader
```css
background: linear-gradient(90deg,
  var(--color-neutral-100) 25%,
  var(--color-neutral-50)  50%,
  var(--color-neutral-100) 75%
);
background-size: 200% 100%;
animation: skeleton-shimmer 1.5s infinite;
border-radius: var(--radius-md);
```

### Spinner
- Size: `16px` (inline), `24px` (button), `40px` (page)
- Color: current color (`currentColor`)
- Animation: `rotate 600ms linear infinite`

---

## Hero Section (Landing Page)

```
┌─────────────────────────────────────────────────────┐
│ [Nav]                                               │
│                                                     │
│     LEAD INTELLIGENCE PLATFORM                      │
│  Transform Dead Leads Into Revenue                  │
│                                                     │
│  AI re-engages cold prospects automatically         │
│  so your team focuses only on ready buyers.         │
│                                                     │
│  [Start Free Trial]     [Watch Demo →]              │
│                                                     │
│  ─────────────────────────────────────────          │
│  1,200+ companies   82% re-engagement rate   4.9★   │
└─────────────────────────────────────────────────────┘
```

**Background:** `var(--gradient-hero-mesh)`
**Overline:** `12px`, `tracking-widest`, `brand-300`, `font-weight: 600`, ALL CAPS
**Headline:** `hero` size, Syne 800, white, `line-height: 1.1`, `tracking-tighter`
**Subhead:** `body-lg`, `rgba(255,255,255,0.75)`, `max-width: 560px`
**CTA row:** gap `16px`, centered (mobile), left-aligned (desktop)
**Social proof bar:** `border-top: 1px solid rgba(255,255,255,0.15)`, `padding-top: 32px`
**Section padding:** `120px` top, `100px` bottom (desktop); `80px`/`60px` (mobile)

---

## Tailwind CSS Config Reference

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#93C5FD',
          300: '#60A5FA',
          400: '#3B82F6',
          500: '#2563EB',
          600: '#1E3A8A',
          700: '#1A2B8A',
          800: '#152070',
          900: '#0D1B5C',
        },
      },
      fontFamily: {
        display: ['Syne', 'Heebo', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'Heebo', 'sans-serif'],
        hebrew:  ['Heebo', 'Assistant', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'xl':  '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'brand':      '0 4px 14px rgba(37,99,235,0.35)',
        'brand-hover':'0 8px 20px rgba(37,99,235,0.45)',
        'card':       '0 2px 8px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
```
