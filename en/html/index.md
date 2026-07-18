# Getting to Know HTML

HTML (HyperText Markup Language) is not a programming language — it is a **markup language**: a set of "tags" that annotate text content, telling the browser "this is a heading", "this is a paragraph", "this is an image".

## Tags, elements, and attributes

```html
<a href="https://www.example.com">Visit the example site</a>
```

This one line contains three core concepts:

- **Tag**: `<a>` is the opening tag, `</a>` the closing tag.
- **Element**: everything from opening to closing tag, content included.
- **Attribute**: `href="https://www.example.com"` sits inside the opening tag and provides extra information. Attribute name, equals sign, value in quotes.

Some elements have no content and therefore no closing tag — these are **void (self-closing) elements**:

```html
<img src="photo.jpg" alt="A photo" />
<br />
<input type="text" />
```

::: tip
The trailing slash on void elements is optional (`<br>` and `<br />` are equivalent). Just be consistent within a team.
:::

## The skeleton of an HTML document

Every HTML file should have this structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- Everything visible on the page goes here -->
  </body>
</html>
```

Line by line:

| Code | Purpose |
| --- | --- |
| `<!DOCTYPE html>` | Document type declaration — "this is modern HTML". Must be the first line |
| `<html lang="en">` | Root element; `lang` declares the page language for search engines and screen readers |
| `<head>` | Metadata area — content here is not rendered on the page |
| `<meta charset="UTF-8">` | Character encoding; omit it and non-ASCII text may turn into mojibake |
| `<meta name="viewport" ...>` | The switch for mobile adaptation — see [Responsive Design](/en/concepts/responsive) |
| `<title>` | The text shown in the browser tab |
| `<body>` | Container for all visible content |

::: warning Garbled characters?
If accented or non-Latin characters render as garbage, it is almost always a missing `<meta charset="UTF-8">` or a file not saved as UTF-8 (VS Code uses UTF-8 by default).
:::

## Nesting rules

Elements can nest, but they must **open and close in order, fully contained**:

```html
<!-- ✅ Correct: p fully wraps strong -->
<p>This sentence has an <strong>important</strong> word.</p>

<!-- ❌ Wrong: tags cross over each other -->
<p>This sentence has an <strong>important</p></strong>
```

Browsers are extremely "forgiving" of bad nesting — they don't throw errors, they silently repair the markup, and the result is often not what you intended. **"The page renders without errors" ≠ "the code is correct."**

## Comments

```html
<!-- This is a comment. Browsers ignore it, but anyone viewing source can read it -->
```

## Whitespace collapsing

Consecutive spaces and line breaks in HTML collapse into a single space:

```html
<p>Hello,
      world</p>
<!-- Renders as: Hello, world -->
```

So feel free to use line breaks and indentation to format your code — it won't affect rendering. When you need real spacing, use CSS, not a pile of `&nbsp;`.

## Exercises

1. Hand-type the full HTML skeleton (no Emmet) until you can write it from memory.
2. Remove `<meta charset="UTF-8">`, add some non-English text (e.g. `你好` or `café`), and see what the browser does.
3. Write some deliberately mis-nested code, right-click → Inspect, and see how the browser repaired it.
