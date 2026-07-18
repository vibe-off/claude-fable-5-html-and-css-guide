# The Box Model

**Every element on a page is a rectangular box.** Understanding what a box consists of and how its size is computed is the first cornerstone of CSS layout — and a guaranteed interview question.

## The four layers

From inside out:

```
┌─────────────────── margin ────────────────────────────┐
│  ┌───────────────── border ─────────────────────────┐ │
│  │  ┌────────────── padding ──────────────────────┐ │ │
│  │  │                                             │ │ │
│  │  │            content                          │ │ │
│  │  │                                             │ │ │
│  │  └─────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

- **content**: the actual text or image; `width`/`height` control this area by default.
- **padding**: breathing room between content and border; background color extends into it.
- **border**: the border.
- **margin**: distance to neighboring boxes — **transparent**, not part of the box itself.

```css
.card {
  width: 300px;
  padding: 16px;
  border: 2px solid #ddd;
  margin: 24px;
}
```

## Shorthand syntax

`padding` and `margin` accept 1–4 values, **clockwise (top right bottom left)**:

```css
.box {
  padding: 10px;                 /* all four sides */
  padding: 10px 20px;            /* vertical 10, horizontal 20 */
  padding: 10px 20px 30px;       /* top 10, sides 20, bottom 30 */
  padding: 10px 20px 30px 40px;  /* top, right, bottom, left */
}
```

## box-sizing: how wide is this box, really?

By default (`box-sizing: content-box`):

```
actual width = width + left/right padding + left/right border
```

The `.card` above is `300 + 16×2 + 2×2 = 336px` wide — you wrote 300 but it occupies 336. This mismatch is the root of countless layout bugs.

The fix: make `width` mean "total width including border":

```css
/* The modern standard — first lines of every project */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Now `width: 300px` occupies exactly 300px; padding and border squeeze the content inward. **Start every exercise project with this rule from today on.**

## Two special behaviors of margin

### 1. Horizontal centering

```css
.container {
  max-width: 960px;
  margin: 0 auto; /* 0 vertical, auto splits leftover space → centered */
}
```

The classic way to center a block element (it needs a width).

### 2. Margin collapse

**Vertically** adjacent margins merge into one, taking the larger value:

```css
p {
  margin-top: 20px;
  margin-bottom: 20px;
}
/* The gap between two adjacent paragraphs is 20px, not 40px */
```

It also happens between parent and child: a child's `margin-top` can "leak" outside its parent. If "I gave the child a margin-top and the whole parent moved down" ever bites you — this is why. Padding on the parent, a border, or a Flexbox/Grid container (no collapsing inside those) all fix it.

::: warning
Margin collapse is vertical-only. Horizontal margins never collapse.
:::

## min / max sizing

```css
.container {
  width: 90%;
  max-width: 1200px; /* capped on large screens */
  min-height: 400px; /* keeps shape even with little content */
}
```

## overflow: when content doesn't fit

```css
.box {
  height: 200px;
  overflow: visible; /* default: content spills out (the classic "text escaping the box") */
  overflow: hidden;  /* clip it */
  overflow: auto;    /* scrollbars when needed */
}
```

## Seeing the box model in DevTools

Right-click an element → Inspect → at the bottom of the Styles panel sits a colored box-model diagram: blue content, green padding, yellow margin. **Debug spacing issues by looking here first** — who occupies what becomes obvious.

## Exercises

1. Build a product card: fixed width, padding, 1px border, rounded corners (`border-radius`), and a shadow on hover (`box-shadow`). Compute its real width without `box-sizing: border-box` first, then add the rule and compare.
2. Stack two paragraphs with `margin-bottom: 30px` and `margin-top: 20px`; measure the actual gap in DevTools to confirm margin collapse.
3. Center an article container with `max-width + margin: 0 auto` and drag the window edge to watch it behave.
