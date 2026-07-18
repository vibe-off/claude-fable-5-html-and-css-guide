# Selectors

Selectors decide *who* a style applies to. Precise selectors mean less CSS and clearer CSS.

## Basic selectors

```css
/* Element selector: every p */
p {
  line-height: 1.6;
}

/* Class selector: every element whose class includes card (your workhorse!) */
.card {
  border: 1px solid #ddd;
}

/* id selector: the single element with id="site-logo" */
#site-logo {
  width: 120px;
}

/* Universal selector: everything (common in resets) */
* {
  box-sizing: border-box;
}
```

The matching HTML:

```html
<div class="card">A card</div>
<div class="card highlight">An element can have several classes, space-separated</div>
<img id="site-logo" src="logo.png" alt="Site logo" />
```

::: tip class or id?
Day-to-day styling **almost always uses classes**: reusable, moderate specificity. An `id` must be unique per page and its specificity is hard to override — leave ids for anchors and JavaScript.
:::

## Combining selectors

```css
/* Grouping: several selectors, comma-separated */
h1,
h2,
h3 {
  font-family: Georgia, serif;
}

/* Descendant (space): every a anywhere inside .card */
.card a {
  color: steelblue;
}

/* Child (>): li elements that are direct children of .menu */
.menu > li {
  display: inline-block;
}

/* Adjacent sibling (+): the first p immediately after an h2 */
h2 + p {
  margin-top: 0;
}

/* Compound: elements having BOTH classes (no space between!) */
.card.active {
  border-color: orange;
}
```

::: warning `.card.active` vs `.card .active` — completely different
No space: one element carrying both classes. With space: an `.active` descendant inside a `.card`. That single space is a top source of beginner bugs.
:::

## Attribute selectors

```css
/* inputs that have a disabled attribute */
input[disabled] {
  background: #eee;
}

/* inputs whose type is exactly checkbox */
input[type="checkbox"] {
  width: 18px;
}
```

## Pseudo-classes: element states

```css
/* Mouse hover */
a:hover {
  text-decoration: underline;
}

/* Keyboard focus (accessibility matters — don't casually remove outline) */
input:focus {
  outline: 2px solid steelblue;
}

/* Structural pseudo-classes */
li:first-child {
  font-weight: bold;
}
li:last-child {
  border-bottom: none;
}
tr:nth-child(even) {
  background: #f7f7f7; /* zebra-striped tables */
}

/* Negation */
button:not(.primary) {
  background: #eee;
}
```

## Pseudo-elements: creating "virtual elements"

```css
/* Insert content before/after an element's content */
.required::before {
  content: "* ";
  color: red;
}

/* First line / selected text / placeholder */
p::first-line {
  font-weight: bold;
}
::selection {
  background: gold;
}
input::placeholder {
  color: #aaa;
}
```

Mnemonic: pseudo-classes use one colon (states); pseudo-elements use two (virtual elements).

## Selector guidelines

1. **Default to classes**, named for purpose (`.price`, not `.red-text`).
2. **Keep nesting shallow**: `.sidebar .menu li a span` is long and brittle — usually a single class on the target element is better.
3. Before asking "why isn't my style applying", confirm the selector actually matches the element — click it in DevTools to verify.

## Exercises

1. Build a five-link navigation list: gray by default, blue with underline on hover, and bold for the current page (an `.active` class).
2. Use `nth-child` to zebra-stripe your timetable from the HTML chapter, plus a hover highlight on rows.
3. Use `::before` to add a red asterisk to every `.required` form label.
