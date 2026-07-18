# Semantic HTML

"Semantic" means **using tags whose meaning matches the content**, instead of wrapping everything in `<div>`. This is the dividing line between "can write HTML" and "writes it professionally".

## Why it matters

1. **Readability**: `<nav>` is obviously navigation; `<div class="nav">` requires guessing from the name.
2. **SEO**: search engines rely on semantic tags to understand page structure — it affects indexing and ranking.
3. **Accessibility**: screen readers navigate pages for visually impaired users via semantic landmarks.
4. **Interviews**: "talk about semantic HTML" is a front-end interview regular.

## Page-level semantic tags

The skeleton of a typical page:

```html
<body>
  <header>
    <h1>Site Title</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Article title</h2>
      <p>Article body…</p>
    </article>

    <aside>
      <h3>Related reading</h3>
      <ul>
        <li><a href="#">Another article</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>© 2026 Example Site</p>
  </footer>
</body>
```

| Tag | Meaning | Usage notes |
| --- | --- | --- |
| `<header>` | Header: title, logo, navigation | Valid on the page and inside an article |
| `<nav>` | Navigation links | For primary navigation — not every pile of links |
| `<main>` | The main content | **Exactly one per page** |
| `<article>` | Self-contained content | Test: would it still make sense syndicated on its own (e.g. RSS)? |
| `<section>` | A thematic grouping | Should normally have its own heading |
| `<aside>` | Tangential content | Ads, related links, author bio |
| `<footer>` | Footer: copyright, contact | |

## Div soup vs. semantics

The same structure, two ways:

```html
<!-- ❌ Div soup: hard for machines and humans alike -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="content">...</div>
<div class="footer">...</div>

<!-- ✅ Semantic: structure at a glance -->
<header>
  <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>
```

`<div>` is not deprecated — when **no semantic tag fits** and you just need a layout container, `<div>` is exactly right. The rule: **reach for a semantic tag first; fall back to div**.

## section or div?

- The content is a themed "chapter", usually with a heading → `<section>`
- Purely a wrapper for layout or styling → `<div>`

## The accessibility minimum

Even as a beginner, always:

1. Write `alt` for every meaningful image (see [Images](/en/html/links-images)).
2. Link every input to a `<label>` (see [Forms](/en/html/forms)).
3. Keep heading levels in order; one `<h1>` per page.
4. Make link text meaningful: "View course details", not "click here".
5. Never rely on color alone (when red = error, also show a text message).

::: tip A quick test
Strip all the CSS (or disable styles in DevTools). Does the page still read like a well-structured document? If yes, your HTML is in good shape.
:::

## Exercises

1. Refactor your "about me" page semantically: `header` (name + nav), `main` (sections: education, skills, hobbies), `footer` (contact info).
2. Open a site you visit often, right-click → Inspect, and check what tags its header, nav, and main content use. Semantic or div soup?
3. Ask an AI for the HTML of an "event landing page", then review its semantics and list three concrete improvements — your first code review of an AI.
