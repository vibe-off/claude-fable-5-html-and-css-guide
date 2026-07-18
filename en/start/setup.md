# Setup & How the Web Works

## What you need to install

The barrier to entry for frontend is remarkably low. You need exactly two things:

1. **A modern browser**: Chrome or Edge, which ship with powerful developer tools (DevTools).
2. **A code editor**: [VS Code](https://code.visualstudio.com/) — free, lightweight, huge ecosystem.

### Recommended VS Code extensions

| Extension | What it does |
| --- | --- |
| Live Server | One-click local server; the browser auto-refreshes when you save |
| Prettier | Auto-formats your code so indentation and style stay consistent |

## Your first web page

1. Create a folder, e.g. `my-first-page`, and open it in VS Code.
2. Create a file `index.html` with this content:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is the first web page I ever wrote.</p>
  </body>
</html>
```

3. Right-click the file → **Open with Live Server** (or just double-click it to open in a browser).

See the page? Congratulations — you are now a (very, very junior) front-end developer.

::: tip Shortcut
In an HTML file in VS Code, type `!` and press Tab to generate the full HTML skeleton. That's the Emmet abbreviation feature — you'll use it constantly.
:::

## How a page reaches your screen

Understanding this flow makes many concepts click into place:

1. **You enter a URL**, e.g. `https://www.example.com/index.html`.
2. **The browser sends an HTTP request** to the server behind that address.
3. **The server returns an HTML file** — essentially a plain text file.
4. **The browser parses the HTML**: when it meets a `<link>` it downloads the CSS; an `<img>` triggers an image download; a `<script>` is downloaded and executed.
5. **The browser renders the page**, combining HTML structure with CSS styles and painting it on screen.

When you use Live Server, your computer plays both roles — server and browser — at once.

## The three pillars and their jobs

| Technology | Role | Analogy |
| --- | --- | --- |
| HTML | Structure: **what is on** the page | The frame and rooms of a house |
| CSS | Presentation: **what it looks like** | Paint, decor, furniture arrangement |
| JavaScript | Behavior: **what it can do** | Plumbing, switches, appliances |

This guide focuses on the first two. **Separation of structure and presentation** is one of the most important principles in frontend: HTML handles content and meaning; styling belongs to CSS. You will keep running into this principle.

## Exercises

1. Build the "first page" above and replace the `<h1>` text with your name.
2. Delete the slash in `</h1>` (making it `<h1>`), save, and observe what happens. Then fix it.
3. Add two more `<p>` paragraphs about why you want to learn frontend.
