# Colors & Units

## Ways to write a color

```css
.demo {
  /* 1. Keywords: quick experiments */
  color: tomato;

  /* 2. Hex: the most common, #RRGGBB */
  color: #3b82f6;
  color: #fff; /* three-digit shorthand, same as #ffffff */

  /* 3. rgb / rgba: a = opacity from 0 to 1 */
  color: rgb(59, 130, 246);
  background: rgba(0, 0, 0, 0.5); /* translucent black — classic overlay */

  /* 4. hsl: hue (0-360), saturation, lightness — intuitive to tune */
  color: hsl(217, 91%, 60%);
}
```

::: tip Why hsl is nice
Keep the hue, adjust lightness, and you get a harmonious family: `hsl(217, 91%, 60%)` as the primary, `hsl(217, 91%, 95%)` as its light background tint. Far more intuitive than juggling hex codes.
:::

### opacity vs rgba

```css
.a {
  background: rgba(255, 0, 0, 0.5); /* only the background is translucent */
}
.b {
  background: red;
  opacity: 0.5; /* the WHOLE element — text and children included — fades */
}
```

## Length units

### Absolute: px

`px` is the most tangible — use it freely while learning. Borders, shadows, and small gaps suit px well.

### Relative: em and rem (important)

- `em`: relative to **the element's own font size**.
- `rem`: relative to **the root (html) font size**, 16px by default.

```css
html {
  font-size: 16px;
}

.card {
  font-size: 20px;
  padding: 1em;    /* = 20px, follows its own font size */
  margin: 1rem;    /* = 16px, follows the root — stable and predictable */
}
```

::: warning The em nesting trap
`em` on `font-size` is relative to the **parent's** font size, so nested elements compound and become hard to reason about. Modern practice: **prefer rem for spacing and font sizes**; use em only when you want something to scale with the component's own text.
:::

The real payoff of rem: when a user raises the default font size in browser settings (many older users do), the whole page scales proportionally instead of breaking.

### Percentages

Relative to the **parent element**:

```css
.child {
  width: 50%; /* half the parent's width */
}
```

### Viewport units: vw / vh

Relative to the browser window: `1vw` = 1% of viewport width, `1vh` = 1% of viewport height.

```css
.hero {
  height: 100vh; /* full-screen hero section */
}
```

## Choosing units: a cheat sheet

| Situation | Use |
| --- | --- |
| Font sizes, paragraph spacing | `rem` |
| Borders, shadows, radii | `px` |
| Container widths | `%` + `max-width` |
| Full-screen sections | `vh` / `vw` |
| Line height | **unitless number**, e.g. `line-height: 1.6` |

```css
/* A combined example */
.container {
  width: 90%;
  max-width: 1200px; /* caps at 1200px, shrinks on small screens */
  margin: 0 auto;    /* horizontal centering */
}
body {
  font-size: 1rem;
  line-height: 1.6;  /* 1.6 × own font size; the unitless form inherits correctly */
}
```

## Exercises

1. Pick a primary color in hsl, derive a darker variant (lower lightness) and a pale background tint (higher lightness), and use them for a button's default, hover, and disabled states.
2. Add `html { font-size: 20px; }` and watch every rem-based space scale while px-based parts stay put.
3. Build a `height: 100vh` hero with a title and one-liner; resize the window and observe the behavior.
