# Naming & Code Organization

Code is written for humans and incidentally executed by machines. Messy naming costs nothing in a solo demo; on a team, **naming and organization are your professional calling card** — and the thing code reviews nitpick most.

## The first rule: name the purpose, not the appearance

```css
/* ❌ Named after looks: one design change and the name is a lie */
.red-text { color: red; }
.left-box { float: left; }

/* ✅ Named after purpose: survives any restyle */
.error-message { color: red; }
.sidebar { }
```

Picture the irony of `.red-text { color: orange; }` — and know that bad codebases are full of exactly that.

## BEM: Block, Element, Modifier

BEM is the most widely adopted CSS naming convention:

```
.block            Block: a standalone component
.block__element   Element: a part of the block (double underscore)
.block--modifier  Modifier: a variant or state (double hyphen)
```

A complete example:

```html
<div class="card card--featured">
  <img class="card__cover" src="cover.jpg" alt="Course cover" />
  <div class="card__body">
    <h3 class="card__title">Course title</h3>
    <p class="card__desc">Course description…</p>
    <button class="card__btn card__btn--disabled">Unavailable</button>
  </div>
</div>
```

```css
.card { }
.card--featured { border-color: gold; }   /* featured variant */
.card__title { font-size: 1.125rem; }
.card__btn--disabled { opacity: 0.5; }
```

### What BEM buys you

1. **Structure readable from the class name**: `card__title` necessarily lives inside a `card`.
2. **Every selector is a single class**: flat specificity, no override wars.
3. **Fearless changes**: `.card__title` can only affect card titles, while a bare `.title` could hit who-knows-what.

::: tip
BEM names are long on purpose — they encode the nesting relationship into the name, buying flat selectors in exchange. Ugly at first sight; indispensable once used. Vue's scoped styles solve part of the isolation problem, but BEM-style thinking still rules within components.
:::

## File organization

Past a few hundred lines, split your CSS. A typical small-project layout:

```
styles/
├── base.css       /* reset, body typography, global variables */
├── layout.css     /* page frame: header, footer, grid */
├── components.css /* buttons, cards, forms */
└── pages.css      /* styles specific to single pages */
```

```html
<link rel="stylesheet" href="./styles/base.css" />
<link rel="stylesheet" href="./styles/layout.css" />
<link rel="stylesheet" href="./styles/components.css" />
```

Once you reach Vue, styles move into single-file components — but the "divide by responsibility" principle is identical.

## Field rules

1. **Nest selectors at most 2 levels.** `.sidebar .menu li a span` is brittle and hard to override.
2. **Never style by id** — the specificity is punishing.
3. **Comment your magic numbers**: `margin-top: 37px; /* aligns with the banner's angled edge */` — an unexplained 37px is untouchable three months later.
4. **Extract on the third repetition**: writing the same button styles a third time means stop and make a `.btn` class or a variable.
5. **Let Prettier handle formatting**; spend your judgment on names and structure.

## A note for the AI era

AI-generated CSS fails at precisely these points: class-name sprawl (`.container1`, `.wrapper2`), unextracted repetition, the occasional inline style. **Reviewing AI output against this chapter's standards** is excellent practice — spotting the problems proves you've internalized the material; not spotting them tells you what to revisit.

## Exercises

1. Rename every class in your "product card" exercise using BEM.
2. Split your largest exercise page's CSS into base / layout / components files.
3. Ask AI to generate a button component (icon support, disabled state, primary/secondary variants), then code-review it against this chapter's field rules — list the issues and fix them.
