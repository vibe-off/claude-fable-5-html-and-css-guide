# Lists & Tables

## Unordered lists: ul

When order doesn't matter (navigation menus, feature lists):

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

## Ordered lists: ol

When order carries meaning (steps, rankings):

```html
<ol>
  <li>Open your editor</li>
  <li>Write the code</li>
  <li>Save and view it in the browser</li>
</ol>
```

`<ol>` supports `start="5"` (begin numbering at 5) and `reversed`.

## Nested lists

Lists can nest — the child list must go **inside** an `<li>`:

```html
<ul>
  <li>
    Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>
```

::: warning
The only valid direct children of `<ul>` and `<ol>` are `<li>` elements. Putting a `<p>` or `<div>` directly inside a `<ul>` is invalid HTML.
:::

## Description lists: dl

For term–definition pairs:

```html
<dl>
  <dt>HTML</dt>
  <dd>Handles the structure and content of a page.</dd>
  <dt>CSS</dt>
  <dd>Handles the styling and layout of a page.</dd>
</dl>
```

## Tables: presenting two-dimensional data

```html
<table>
  <caption>This semester's timetable (excerpt)</caption>
  <thead>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Wednesday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Morning</td>
      <td>Web Development</td>
      <td>Databases</td>
    </tr>
    <tr>
      <td>Afternoon</td>
      <td>PE</td>
      <td>Web Development (Lab)</td>
    </tr>
  </tbody>
</table>
```

Structure:

| Tag | Meaning |
| --- | --- |
| `<table>` | Table container |
| `<caption>` | Table title |
| `<thead>` / `<tbody>` / `<tfoot>` | Header / body / footer groups |
| `<tr>` | A table row |
| `<th>` | Header cell (bold and centered by default, semantically meaningful) |
| `<td>` | Data cell (table data) |

### Merging cells

- `colspan="2"`: merge horizontally, spanning two columns.
- `rowspan="2"`: merge vertically, spanning two rows.

```html
<tr>
  <th colspan="2">A header spanning two columns</th>
</tr>
```

After merging, remember to delete the cells whose spots were taken — miscounting here is the classic beginner slip. Sketch the grid on paper first.

::: danger Never use tables for page layout
Before CSS layout matured (around 2005), people built entire page layouts with `<table>`. That approach is long dead: bloated markup, impossible to make responsive, terrible accessibility. **Tables are for genuinely tabular data** (timetables, transcripts, price lists). Page layout belongs to Flexbox and Grid.
:::

## Exercises

1. Write "how to properly make instant noodles" as an ordered list, with a nested unordered list of optional toppings inside one step.
2. Turn your own weekly timetable into an HTML table, using `colspan` or `rowspan` at least once.
3. Tables have no border lines by default. Note the problem now, and come back to add borders and zebra striping after [CSS Fundamentals](/en/css/).
