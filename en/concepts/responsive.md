# Responsive Design

Your page may open on a 6-inch phone, a 13-inch laptop, or a 27-inch monitor. **Responsive design** makes one codebase present sensibly on all of them. With mobile traffic dominating, this isn't a bonus skill — it's table stakes.

## Prerequisite: the viewport meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Without this line, mobile browsers pretend to be a 980px-wide desktop screen and scale the result down — none of your responsive code will take effect. **This line is the on-switch**; put it in every page's `<head>`.

## Media queries: styles by screen width

```css
/* Base styles: all screens */
.cards {
  display: grid;
  grid-template-columns: 1fr; /* phones: one column */
  gap: 16px;
}

/* Screens ≥ 640px */
@media (min-width: 640px) {
  .cards {
    grid-template-columns: repeat(2, 1fr); /* tablets: two columns */
  }
}

/* Screens ≥ 1024px */
@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr); /* desktop: three columns */
  }
}
```

## Mobile first

The pattern above is **mobile first**: default styles target the smallest screen; `min-width` queries enhance upward.

Why it's the recommended approach:

1. Small screens have the most constraints — solve the hard case first; enlarging is easy.
2. Phone layouts are usually simplest (single column), making them the cheapest "default".
3. It matches industry practice (Bootstrap and Tailwind are both min-width systems).

Reference breakpoints (don't memorize — adapt):

| Breakpoint | Devices |
| --- | --- |
| `640px` | Large phones / small tablets |
| `768px` | Tablets, portrait |
| `1024px` | Tablets landscape / small laptops |
| `1280px` | Desktops |

::: warning Breakpoints aren't tied to iPhone models
Breakpoints should come from your **content**: drag the window; wherever the layout starts looking wrong is where a breakpoint belongs. Device models change yearly; content-driven breakpoints don't expire.
:::

## Fluid layout: avoid media queries when you can

Responsive ≠ a pile of media queries. An elastic base layout absorbs most size changes on its own:

```css
/* Container: full width on small screens, capped and centered on large */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Images: never overflow their container (essential global rule) */
img {
  max-width: 100%;
  height: auto;
}

/* Card wall: zero-media-query responsiveness (from the Grid chapter) */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
```

Priority order: **let flexible layout (%, max-width, flex, grid, minmax) absorb change first; reach for media queries only when it can't.**

## Common responsive patterns

```css
/* Nav: horizontal on desktop, vertical on phones */
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
@media (min-width: 768px) {
  .nav-links {
    flex-direction: row;
    gap: 24px;
  }
}

/* Hide secondary content on phones */
.sidebar-ads {
  display: none;
}
@media (min-width: 1024px) {
  .sidebar-ads {
    display: block;
  }
}
```

## Testing with DevTools

Press F12, then click the **device toolbar** icon (phone/tablet symbol) to:

- Simulate popular phone screen sizes
- Drag freely and watch breakpoints flip
- Simulate touch input

Build the habit: **after every layout change, drag the width from 320px to 1400px** and make sure nothing breaks.

## Exercises

1. Add mobile-first media queries to your card wall, then compare with the auto-fill version — two philosophies, same goal.
2. Make your "about me" page responsive: single column on phones; sidebar (avatar + contacts) plus main content on desktop.
3. Check your page at iPhone SE (375px) and iPad (768px) sizes in the device toolbar, and eliminate every horizontal scrollbar — one usually means some element's width overflows.
