# Modern CSS at a Glance

CSS has evolved at speed lately: many needs that once required JavaScript or arcane hacks are now one line of CSS. This chapter is a quick tour of features you can safely use today — the goal is that you **know they exist** and can look them up when needed.

## aspect-ratio: fixed proportions

```css
.video-cover {
  width: 100%;
  aspect-ratio: 16 / 9; /* height computed automatically */
}
.avatar {
  width: 64px;
  aspect-ratio: 1; /* square */
  border-radius: 50%;
}
```

This used to require the "padding-top percentage" dark art. One line now.

## object-fit: how images fill their box

```css
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover; /* crop to fill without distortion — essential for card covers */
}
```

`cover` crops to fill, `contain` letterboxes, `fill` (default) stretches and distorts. Distorted images are the #1 reason beginner pages look amateurish; `object-fit: cover` is the cure.

## clamp(): fluid values with limits

```css
h1 {
  /*        min    ideal  max */
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

The size follows the viewport but stays pinched between 1.5rem and 3rem — fluid typography in one line, no media queries.

## Multi-line text truncation

Beyond the single-line trio, multi-line clamping has a standard recipe:

```css
.summary {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* show at most 3 lines, then … */
  overflow: hidden;
}
```

The `-webkit-` prefix looks scary but every major browser supports it. Use freely.

## :has(): the "parent selector" at last

Select a parent based on **its children** — the power CSS waited twenty years for:

```css
/* Cards containing an image lose their padding (full-bleed image) */
.card:has(img) {
  padding: 0;
}

/* When the input is invalid, color the whole field's label red */
.form-field:has(input:invalid) label {
  color: red;
}
```

## Native nesting

No preprocessor needed anymore:

```css
.card {
  padding: 16px;

  & .title {
    font-weight: 700;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}
```

Shallow nesting aids readability — but keep it shallow (remember specificity?).

## Container queries: components responding to their own width

Media queries watch the **viewport**; container queries watch the **parent container**. The same card can lay out horizontally in a wide column and vertically in a narrow sidebar — adapting by itself:

```css
.card-wrapper {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row; /* image beside text when the container allows */
  }
}
```

A perfect match for component-based development (hello, Vue components).

## Scroll behavior

```css
html {
  scroll-behavior: smooth; /* anchor jumps become smooth scrolls */
}
.section {
  scroll-margin-top: 80px; /* leave room for a sticky header when anchoring */
}
```

## Keeping up with CSS

1. **Check support**: type a feature name into [caniuse.com](https://caniuse.com) for per-browser support tables.
2. **Check usage**: MDN is the authoritative dictionary.
3. **Ask AI**: "Does CSS have a native way to do X now?" — AI answers this genre well, but **verify support data on caniuse**; training data lags.

## Exercises

1. Build a video-cover card: `aspect-ratio: 16/9` + `object-fit: cover` + three-line clamped summary.
2. Use `clamp()` to scale your page's main title smoothly between phone and desktop; drag the window to verify.
3. Use `:has()` to gray out the submit button until the "agree to terms" checkbox is ticked (hint: style via `form:has(input:checked)`).
