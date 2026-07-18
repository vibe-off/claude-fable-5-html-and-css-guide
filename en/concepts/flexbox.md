# Flexbox

Flexbox is a **one-dimensional layout** system: arrange, align, and distribute a set of items along a row or a column. Navbars, card rows, centering — it elegantly solves 80% of everyday layout needs.

## Two roles, one axis

```css
.container {
  display: flex; /* it becomes a flex container; direct children become flex items */
}
```

- **Main axis**: the direction items flow — horizontal by default.
- **Cross axis**: perpendicular to the main axis.

**Container properties govern the overall arrangement; item properties govern individuals.** That's the master key to Flexbox.

## Container properties

### flex-direction: main axis direction

```css
.container {
  flex-direction: row;    /* default: horizontal */
  flex-direction: column; /* vertical */
}
```

### justify-content: distribution along the main axis

```css
.container {
  justify-content: flex-start;    /* default: packed at the start */
  justify-content: center;        /* centered */
  justify-content: flex-end;      /* packed at the end */
  justify-content: space-between; /* flush ends, equal gaps between */
  justify-content: space-around;  /* equal space around each item */
}
```

### align-items: alignment on the cross axis

```css
.container {
  align-items: stretch;    /* default: stretch to fill container height */
  align-items: center;     /* centered (the vertical-centering hero) */
  align-items: flex-start; /* at the cross-axis start */
}
```

### gap: spacing between items

```css
.container {
  gap: 16px; /* goodbye to margin hacks and special-casing the last item */
}
```

### flex-wrap: wrap or squeeze?

```css
.container {
  flex-wrap: wrap; /* the default nowrap crushes items onto one line */
}
```

## Perfect centering: memorize this

```css
.center {
  display: flex;
  justify-content: center; /* main axis (horizontal) */
  align-items: center;     /* cross axis (vertical) */
}
```

Before Flexbox, vertical centering was CSS's most notorious problem. Now it's three lines.

## Item properties

### flex-grow / shrink / basis and the flex shorthand

```css
.item {
  flex-grow: 1;   /* share of leftover space to take */
  flex-shrink: 1; /* share of shrinkage when space is short */
  flex-basis: 200px; /* starting size before distribution */

  /* shorthand: grow shrink basis */
  flex: 1;        /* = 1 1 0 — the most common: share space equally */
  flex: 0 0 200px; /* fixed 200px, never grows or shrinks (classic sidebar) */
}
```

### align-self: one item marching to its own beat

```css
.item-special {
  align-self: flex-end; /* everyone else centered; this one sinks to the bottom */
}
```

## Three high-frequency patterns

### 1. Navbar: logo left, menu right

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}
```

### 2. Sidebar + fluid main area

```css
.layout {
  display: flex;
}
.sidebar {
  flex: 0 0 240px; /* fixed 240px */
}
.main {
  flex: 1; /* takes all remaining space */
}
```

### 3. Equal-width cards that wrap

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card {
  flex: 1 1 280px; /* 280px basis, flexes with space, wraps when tight */
}
```

::: tip Debugging aid
In DevTools, flex containers show a "flex" badge; clicking it overlays the axes, gaps, and alignment visually.
:::

## Exercises

1. Build the navbar above: site name left, four links right in a row with 24px gaps, all vertically centered.
2. Build a full-screen (`100vh`) login page with the login box dead-center.
3. Build the sidebar + main layout; try different `flex-basis` values. Then paste a very long unbroken word (300 letters) into the main area, watch it overflow, and fix it with `min-width: 0` — remember this trap, you'll meet it again at work.
