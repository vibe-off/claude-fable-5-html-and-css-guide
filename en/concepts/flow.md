# Document Flow & Positioning

How does the browser place elements when you write no layout code at all? And how do you move an element somewhere else? This chapter answers both.

## Normal flow

The default rules are simple:

- **Block-level elements**: take a full line, stacking top to bottom — `div`, `p`, `h1`, `ul`, `section`.
- **Inline elements**: flow left to right within a line, wrapping when full — `span`, `a`, `strong`, `em`.

## display: changing how an element behaves

```css
span {
  display: block;        /* inline → block */
}
li {
  display: inline-block; /* flows inline, but accepts width/height */
}
.hidden {
  display: none;         /* gone entirely — takes no space */
}
```

The three basic values:

| | Own line | Width/height | Vertical margin/padding |
| --- | --- | --- | --- |
| `block` | ✅ | ✅ | ✅ |
| `inline` | ❌ | ❌ | ❌ (padding draws but pushes nothing) |
| `inline-block` | ❌ | ✅ | ✅ |

::: tip display: none vs visibility: hidden
`display: none` removes the element from layout — no space reserved. `visibility: hidden` merely hides it — the gap remains.
:::

Two more crucial `display` values — `flex` and `grid` — get their own chapters next.

## position: moving elements around

```css
.box {
  position: static;   /* default: stays in flow; top/left etc. do nothing */
  position: relative; /* relative positioning */
  position: absolute; /* absolute positioning */
  position: fixed;    /* fixed to the viewport */
  position: sticky;   /* sticks at a threshold */
}
```

Used together with `top` / `right` / `bottom` / `left`.

### relative: offset from its own original spot

```css
.badge {
  position: relative;
  top: -4px; /* nudged 4px up; its original space is still reserved */
}
```

Its more important role is the next one — **serving as the reference for absolute children**.

### absolute: out of the flow, anchored to a positioned ancestor

```css
.card {
  position: relative; /* the anchor */
}
.card .corner-tag {
  position: absolute;
  top: 8px;
  right: 8px; /* relative to .card's top-right corner */
}
```

The rule (**exam favorite**): an absolute element is positioned relative to its **nearest ancestor whose position is not static**; if none exists, the page itself. Hence the classic pairing:

> **Absolute child, relative parent.**

Absolutely positioned elements leave the flow completely: they occupy no space and other elements act as if they don't exist. Perfect for badges, dropdown menus, text over cover images — anything "layered on top".

### fixed: pinned to the browser window

```css
.back-to-top {
  position: fixed;
  right: 24px;
  bottom: 24px; /* stays put while scrolling — e.g. a back-to-top button */
}
```

### sticky: scrolls, then sticks

```css
.table-header {
  position: sticky;
  top: 0; /* sticks when it reaches 0px from the viewport top — sticky navs, table headers */
}
```

## z-index: who covers whom

When positioned elements overlap, `z-index` controls stacking — higher is on top:

```css
.modal {
  position: fixed;
  z-index: 100;
}
```

::: warning
`z-index` only works on elements with a `position` other than static (or flex/grid children). "My z-index isn't working" — check this first.
:::

## float: history you should recognize

`float` was designed for wrapping text around images, then widely abused for whole-page layouts (with `clear` to clean up) before Flexbox existed. **All new layout code should use Flexbox / Grid**; you learn float to read old codebases:

```css
img {
  float: left;
  margin-right: 16px; /* text wraps around the image — float's actual job */
}
```

## Which tool when?

| Need | Tool |
| --- | --- |
| Regular layout: page structure, lists, navs | Flexbox / Grid (next chapters) |
| Layering: badges, overlays, dropdowns | absolute child, relative parent |
| Sticky nav, back-to-top | sticky / fixed |
| Text wrapping an image | float |

## Exercises

1. Build a product card with a red "SALE" badge in the top-right corner using absolute-child-relative-parent.
2. Add a `position: fixed` back-to-top button; make the page long enough to scroll and verify.
3. Give a news list sticky date headers and watch consecutive sticky elements replace each other as you scroll.
