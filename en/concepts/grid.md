# Grid

Grid is a **two-dimensional layout** system: rows and columns at once. For whole-page frames, photo walls, and dashboards — anything where both axes must line up — Grid is more direct than Flexbox.

## Defining a grid

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr; /* 3 cols: fixed 200px + remaining space split in two */
  grid-template-rows: 60px auto;        /* 2 rows: 60px + content-sized */
  gap: 16px;
}
```

### The fr unit and repeat()

- `fr` (fraction): a share of leftover space — Grid's own unit.
- `repeat()`: shorthand for repetition.

```css
.container {
  grid-template-columns: repeat(3, 1fr);       /* three equal columns */
  grid-template-columns: repeat(4, 1fr);       /* four */
  grid-template-columns: 240px repeat(2, 1fr); /* mixed */
}
```

Children **auto-fill the cells in order** — for most cases that's already enough.

## Spanning rows and columns

```css
.item-featured {
  grid-column: 1 / 3;  /* from column line 1 to line 3 (spans 2 columns) */
  grid-row: 1 / 2;
  /* or the span syntax, more intuitive: */
  grid-column: span 2; /* span 2 columns */
}
```

::: tip Line numbers
The numbers in `1 / 3` are **grid lines**, not cells. A 3-column grid has 4 column lines, counted from 1. Click the grid badge in DevTools to draw the line numbers right on the page.
:::

## grid-template-areas: layout as ASCII art

Name the regions and draw the layout — beautifully readable:

```css
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr 48px;
  min-height: 100vh;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

This is the classic "admin dashboard" layout: full-width header, left sidebar, main area, full-width footer — you'll reuse it constantly in Vue admin projects later.

## The self-adapting card wall: one magic line

No media queries at all — the column count adapts to the screen:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
```

Reading: each column at least 240px, at most 1fr; fit as many as possible, wrap the rest. **Memorize this line** — product lists, albums, card feeds all run on it.

## Alignment

```css
.container {
  justify-items: center;   /* items within their cells, horizontally */
  align-items: center;     /* vertically */
  justify-content: center; /* the whole grid within the container (when smaller) */
  align-content: center;
}
```

Anchor: `-items` aligns things inside cells; `-content` aligns the grid itself.

## Flexbox or Grid?

| Scenario | Choice |
| --- | --- |
| One row/column: navs, button groups, tag lists | Flexbox |
| Two-dimensional alignment: page frames, photo walls | Grid |
| Unknown item count, "fit what you can" | Either; Grid's auto-fill wall is less work |

They're not rivals: **Grid for the page frame, Flexbox inside components** is the common combination.

## Exercises

1. Build the admin layout with `grid-template-areas` and stretch the window to verify it.
2. Build a 12-card "course list" with the auto-fill wall; resize and watch the columns change.
3. Build a 4×4 photo wall where the first photo spans 2×2 and the rest auto-place.
