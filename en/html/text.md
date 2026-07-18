# Text & Headings

Most of a web page is text. HTML provides tags that describe the **structure and meaning** of text — note: meaning, not appearance.

## Headings: h1 through h6

```html
<h1>Level 1: the page topic</h1>
<h2>Level 2: major sections</h2>
<h3>Level 3: subsections</h3>
<h4>Level 4</h4>
<h5>Level 5</h5>
<h6>Level 6</h6>
```

Heading tags express the **outline of the document**, like chapter numbering in a paper.

::: warning Common mistake
Never pick `h3` because "its font size looks right" — font size is CSS's job. Heading levels should read like a paper's table of contents: usually one `<h1>` per page, and no skipping levels (no `h4` directly under an `h1`). Search engines and screen readers both rely on heading structure to understand your page.
:::

## Paragraphs and line breaks

```html
<p>This is a paragraph. Paragraphs have default spacing between them.</p>
<p>This is another paragraph.</p>

<p>Address: 1 Example Road<br />Example City</p>

<hr />
<!-- hr is a thematic break — a shift in topic -->
```

Use `<br />` only when **the content itself demands a line break** (addresses, poetry). To control paragraph spacing, use CSS `margin`, not a stack of `<br />` tags.

## Emphasis and importance

```html
<p>The deadline is <strong>Friday 18:00</strong>. Please submit <em>on time</em>.</p>
```

- `<strong>`: the content is important (renders bold by default).
- `<em>`: spoken-stress emphasis (renders italic by default).
- `<b>` and `<i>` convey only the visual effect with no semantics. Prefer `strong` and `em` in modern code.

## div and span: containers without meaning

```html
<div>
  <p>div is a block-level container that groups content together.</p>
</div>

<p>span is an <span class="highlight">inline container</span> for styling a snippet of text.</p>
```

They carry no semantics at all — they exist purely as hooks for CSS and JavaScript. **Prefer semantic tags when one fits**; see [Semantic HTML](/en/html/semantic).

## Quotes and code

```html
<blockquote>
  <p>Any sufficiently advanced technology is indistinguishable from magic.</p>
</blockquote>

<p>Inline code uses the <code>code</code> tag, e.g. <code>console.log()</code>.</p>

<pre><code>// pre preserves whitespace and line breaks — good for multi-line code
function hello() {
  console.log("Hello");
}</code></pre>
```

## Character entities

Some characters have special meaning in HTML. To display them literally, use **character entities**:

| To display | Write | Name |
| --- | --- | --- |
| `<` | `&lt;` | less than |
| `>` | `&gt;` | greater than |
| `&` | `&amp;` | ampersand |
| non-collapsing space | `&nbsp;` | non-breaking space |
| `"` | `&quot;` | quote |

```html
<p>In HTML, &lt;p&gt; means a paragraph tag.</p>
```

## Exercises

1. Build an "about me" page with headings and paragraphs: your name as `h1`, sections like "Education" and "Hobbies" as `h2`, each with a paragraph or two.
2. Use `strong` to mark the one sentence you most want readers to notice.
3. Write a paragraph that displays this literal text on the page: `HTML tags look like <tagname>content</tagname>` (hint: character entities).
