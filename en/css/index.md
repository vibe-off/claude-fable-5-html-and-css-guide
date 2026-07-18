# Getting to Know CSS

CSS (Cascading Style Sheets) controls a page's **appearance**: colors, fonts, spacing, layout, animation. HTML decides *what's there*; CSS decides *what it looks like*.

## The syntax of a CSS rule

```css
selector {
  property: value;
}
```

A real rule:

```css
p {
  color: #333;
  line-height: 1.6;
}
```

- **Selector**: `p` — targets every paragraph on the page.
- **Declaration block**: everything inside the braces.
- **Declaration**: `color: #333;` — property name, colon, value, semicolon.

::: warning The two most common syntax errors
1. Missing semicolon: leaving it off `color: #333` **silently kills the next declaration too**.
2. Misspelled property: `colour`, `font-weigth` — CSS throws no error, it just ignores the line. When a style "doesn't work", check spelling first (DevTools flags invalid properties with a yellow warning icon).
:::

## Three ways to apply CSS

### 1. External stylesheet (recommended — the real-world standard)

```html
<!-- in the head of index.html -->
<link rel="stylesheet" href="./styles.css" />
```

```css
/* styles.css */
h1 {
  color: steelblue;
}
```

Structure and style stay separate, multiple pages can share one stylesheet, and the browser can cache it.

### 2. Internal stylesheet

```html
<head>
  <style>
    h1 {
      color: steelblue;
    }
  </style>
</head>
```

Fine for single-file demos and exercises.

### 3. Inline styles (avoid)

```html
<h1 style="color: steelblue;">Heading</h1>
```

Style tangled into structure, zero reuse, and a specificity so high it's painful to override. Legitimate uses are rare (e.g. values computed by JavaScript at runtime).

::: tip For your exercises
Use an external stylesheet: get into the `index.html` + `styles.css` habit — that pair is the minimal structure of a real project.
:::

## Comments

```css
/* CSS has only this comment style — no double-slash comments */
p {
  color: #333; /* can sit at the end of a line */
}
```

## What "cascading" means

The C in CSS stands for Cascading: **multiple rules can apply to the same element, and the browser resolves conflicts by a fixed set of rules**.

```css
p {
  color: blue;
}

p {
  color: red; /* later rule wins: paragraphs end up red */
}
```

For now, remember just this simplest case: "later wins". The full rules (specificity, inheritance) are a key-concepts topic: [Cascade, Specificity & Inheritance](/en/concepts/cascade).

## Formatting conventions

```css
/* Recommended: space before the brace, one declaration per line, indented */
.card {
  padding: 16px;
  border-radius: 8px;
}
```

Let Prettier auto-format and never argue about style again.

## Exercises

1. Create `styles.css` for your "about me" page and link it. Change the `h1` color, and set `font-family: sans-serif;` on `body`.
2. Write two rules with different colors for `h1` in the same file and verify "later wins".
3. Deliberately drop a semicolon, watch the following declaration fail, then find how DevTools marks the error in the Elements panel.
