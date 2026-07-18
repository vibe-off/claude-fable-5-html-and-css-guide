# CSS Variables & Theming

CSS custom properties (commonly **CSS variables**) let you define once and use everywhere. They are the backbone of modern CSS architecture and the standard mechanism for theming and dark mode.

## Basic syntax

```css
/* Define: names start with --; usually on :root (the html element) for global scope */
:root {
  --color-primary: #2563eb;
  --color-text: #333;
  --spacing: 16px;
  --radius: 8px;
}

/* Use: the var() function */
.button {
  background: var(--color-primary);
  padding: var(--spacing);
  border-radius: var(--radius);
}

.link {
  color: var(--color-primary); /* same primary color; change one line, update everywhere */
}
```

## Why they're worth it

Changing the primary color in a project without variables means find-and-replace across dozens of `#2563eb`s — with collateral damage likely. With variables, it's one line. Variables express **design decisions** — "this is the primary color", "this is standard spacing" — instead of scattered magic numbers.

## Fallback values

```css
.button {
  background: var(--color-primary, #2563eb); /* used when the variable is undefined */
}
```

## Scoping and overriding

Variables follow the normal cascade and inheritance — **redefine them in a more specific scope for local overrides**:

```css
:root {
  --card-bg: white;
}

.card {
  background: var(--card-bg);
}

/* Local override: every card inside the VIP section turns gold automatically */
.vip-section {
  --card-bg: gold;
}
```

This is exactly where they beat preprocessor variables (Sass/Less): **they live at runtime, are readable/writable from JavaScript, and participate in the cascade**, while preprocessor variables vanish at compile time.

## In practice: dark mode

Option one — follow the system setting:

```css
:root {
  --bg: #ffffff;
  --text: #1f2937;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #111827;
    --text: #e5e7eb;
  }
}

body {
  background: var(--bg);
  color: var(--text);
}
```

Option two — a manual toggle (one line of JavaScript adds a class to `html`):

```css
:root {
  --bg: #ffffff;
  --text: #1f2937;
}

.dark {
  --bg: #111827;
  --text: #e5e7eb;
}
```

Both share the same idea: **business styles only reference variables; switching themes only changes variables.** Styles and themes decoupled — an architectural insight worth savoring.

## A respectable starter set of variables

Even small projects benefit from defining these up front:

```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-text: #333;
  --color-text-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-bg: #fff;

  /* Spacing (a scale — no more random 13px and 17px) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 40px;

  /* Misc */
  --radius: 8px;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

When you later meet component libraries like Element Plus, you'll find their entire theme is a few hundred CSS variables — what you're learning here is the industry-standard technique.

## Exercises

1. Refactor one of your earlier exercise pages: extract all colors and spacing into variables.
2. Implement `prefers-color-scheme` dark mode and verify it in DevTools (the Rendering panel can emulate dark mode).
3. Build a theme-color switcher demo: three buttons put different classes on `html` (red/green/blue themes) and all buttons and links follow. The JS is one line — `document.documentElement.className = 'theme-red'` — feel free to get it from AI, but design the CSS variable structure yourself.
