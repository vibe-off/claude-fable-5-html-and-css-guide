# Forms

Forms are how web pages collect user input: sign-in, registration, search, surveys — none work without them. Forms are also the most attribute-dense, detail-heavy part of HTML.

## Basic structure

```html
<form action="/api/register" method="post">
  <label for="username">Username</label>
  <input type="text" id="username" name="username" required />

  <button type="submit">Register</button>
</form>
```

- `action`: where the data is submitted.
- `method`: how. `get` appends data to the URL (fine for search); `post` puts it in the request body (use for registration, login, etc.).
- `name`: **the field name used when submitting**. An input without a `name` is silently excluded from submission — a classic beginner bug.

## label: clickable and screen-reader friendly

A `label`'s `for` attribute matches the input's `id`. Once linked: clicking the text focuses the input, and screen readers announce it correctly.

```html
<!-- Style 1: for + id -->
<label for="email">Email</label>
<input type="email" id="email" name="email" />

<!-- Style 2: wrapping -->
<label>
  <input type="checkbox" name="agree" />
  I have read and accept the terms
</label>
```

::: warning placeholder is not a label
`placeholder` is the gray hint inside the box — it disappears as soon as the user types. Forms with only placeholders and no labels leave users halfway through wondering what a field was for. Use both together.
:::

## Common input types

The `type` attribute determines an input's shape and behavior:

```html
<input type="text" placeholder="Plain text" />
<input type="password" placeholder="Password (masked as dots)" />
<input type="email" placeholder="Email (format-checked on submit)" />
<input type="number" min="0" max="120" placeholder="Number" />
<input type="date" />
<input type="file" accept="image/*" />
<input type="search" placeholder="Search" />
```

### Radio buttons and checkboxes

```html
<!-- Radios sharing a name are mutually exclusive -->
<label><input type="radio" name="degree" value="bachelor" checked /> Bachelor</label>
<label><input type="radio" name="degree" value="master" /> Master</label>

<!-- Checkboxes -->
<label><input type="checkbox" name="skills" value="html" /> HTML</label>
<label><input type="checkbox" name="skills" value="css" /> CSS</label>
```

Radio groups are formed by a **shared `name`**; `value` is what actually gets submitted.

## Multi-line text and dropdowns

```html
<textarea name="bio" rows="4" placeholder="Tell us about yourself"></textarea>

<select name="city">
  <option value="">Choose a city</option>
  <option value="nyc">New York</option>
  <option value="sf" selected>San Francisco</option>
  <option value="chi">Chicago</option>
</select>
```

## Buttons

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Plain button (handled by JavaScript)</button>
```

::: danger Pitfall
Inside a `<form>`, a `<button>` **defaults to `type="submit"`**. If you add a button meant for JavaScript and forget `type="button"`, clicking it will submit the form and reload the page — one of the most classic bugs in frontend.
:::

## Built-in validation attributes

Basic validation without a single line of JavaScript:

| Attribute | Effect |
| --- | --- |
| `required` | Must be filled |
| `minlength` / `maxlength` | Text length range |
| `min` / `max` / `step` | Numeric range and step |
| `pattern` | Regular-expression check |
| `disabled` / `readonly` | Disabled / read-only |

## Grouping: fieldset

Long forms can be sectioned with `fieldset` + `legend`:

```html
<fieldset>
  <legend>Contact details</legend>
  <label for="phone">Phone</label>
  <input type="tel" id="phone" name="phone" />
</fieldset>
```

## Exercises

1. Build a "course sign-up form": name (required), email, gender (radio), courses of interest (checkboxes), self-introduction (textarea), submit button. Every input must have a correctly linked label.
2. Set the method to `get`, submit, and look at the address bar — can you see your own data? Now you understand why passwords must never travel via `get`.
3. Remove the `name` from one input and submit again. Is its data still in the URL?
