# Cascade, Specificity & Inheritance

"I wrote the style — why isn't it applying?!" This chapter is how you answer that question. It is also the most underrated part of CSS and an interviewer favorite.

## Conflict is the normal state

When several rules hit the same element and property, the browser arbitrates in this order:

1. **Origin and importance**: `!important` > normal declarations (more below)
2. **Specificity**: the more "specific" selector wins
3. **Source order**: all else equal, the later rule wins

## Calculating specificity

Break a selector into three tiers, forming a triple `(a, b, c)` — think hundreds-tens-ones:

| Tier | Counts | Examples |
| --- | --- | --- |
| a | id selectors | `#header` |
| b | classes, attributes, pseudo-classes | `.card`, `[type="text"]`, `:hover` |
| c | elements, pseudo-elements | `p`, `::before` |

Compare high tier first; a higher tier wins outright:

```css
p { }                  /* (0,0,1) */
.intro { }             /* (0,1,0) beats any number of element selectors */
p.intro { }            /* (0,1,1) */
#main p { }            /* (1,0,1) */
```

```css
/* Which wins? */
#main p {
  color: blue; /* (1,0,1) → wins */
}
.article .intro {
  color: red; /* (0,2,0) */
}
```

Two more facts:

- **Inline styles** (`style="..."`) beat any selector.
- **The universal selector `*` and inherited values** rank lowest.

## !important: the last resort

```css
p {
  color: red !important; /* overrides every normal declaration */
}
```

::: danger Use !important sparingly
It starts an arms race: the only thing that beats an `!important` is another `!important`. When a style won't apply, the right move is opening DevTools to find **what is overriding it**, then winning with a slightly more specific — and reasonable — selector. Almost the only legitimate use: overriding third-party styles you cannot edit.
:::

## Inheritance

Some properties flow automatically from parent to child — mostly **text properties**:

| Inherited | Not inherited |
| --- | --- |
| `color`, `font-*`, `line-height`, `text-align`, `letter-spacing` | `width`, `height`, `margin`, `padding`, `border`, `background` |

That's why setting the font on `body` affects the whole page:

```css
body {
  font-family: sans-serif;
  color: #333;
  line-height: 1.6;
}
```

Rule of thumb: **typography inherits; box and layout properties never do** (imagine the chaos if padding were inherited).

### Controlling inheritance explicitly

```css
.child {
  color: inherit;  /* force-inherit from parent (e.g. links matching body text) */
  color: initial;  /* reset to the property's default */
}
```

## A debugging routine that works

When a style doesn't apply, check in this order (the DevTools Styles panel shows it all):

1. **Did the selector match the element at all?** No → check selector and class spelling.
2. **Is the declaration struck through?** Yes → find the higher-specificity rule overriding it.
3. **Yellow warning icon next to the property?** Yes → property name or value is invalid.
4. **Is the value inherited?** The Computed panel shows every property's final value and its source.

## Exercises

1. Without peeking, compute the specificity triples of: `nav ul li`, `.menu > li.active`, `#app .btn:hover`, `header nav a`.
2. Manufacture an override: `.text` sets blue, `p.text` sets red — then find the struck-through declaration in DevTools.
3. Make a link inherit the body text color (hint: `inherit`), turning blue only on hover.
