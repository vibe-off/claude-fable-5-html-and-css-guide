# Links, Images & Media

The "hyper" in hypertext means pages can link to each other. Links and images are the most fundamental building blocks of the web.

## Links: the a tag

```html
<!-- External link -->
<a href="https://developer.mozilla.org/">MDN Web Docs</a>

<!-- Open in a new tab -->
<a href="https://www.example.com" target="_blank" rel="noopener">Open in new tab</a>

<!-- Relative link within the site -->
<a href="./about.html">About us</a>

<!-- In-page anchor: jump to the element with id="section-2" -->
<a href="#section-2">Jump to section 2</a>

<!-- Email and phone -->
<a href="mailto:hello@example.com">Email me</a>
<a href="tel:+15550000000">Call us</a>
```

::: tip A safety habit for target="_blank"
Add `rel="noopener"` to links that open in a new tab, preventing the new page from reaching back via `window.opener`. Modern browsers handle this by default, but writing it is good hygiene.
:::

## Understanding paths

Half of all beginner "my image doesn't show" problems are path problems. Given this structure:

```
project/
├── index.html
├── about/
│   └── team.html
└── images/
    └── logo.png
```

| From this file | To reference logo.png | Write |
| --- | --- | --- |
| `index.html` | images folder at same level | `./images/logo.png` or `images/logo.png` |
| `about/team.html` | images one level up | `../images/logo.png` |

- `./` current directory (can be omitted)
- `../` one directory up
- A leading `/` means the site root (this breaks when double-clicking files locally — another reason to use Live Server)

## Images: the img tag

```html
<img src="./images/cat.jpg" alt="An orange cat sunbathing on a windowsill" width="600" height="400" />
```

- `src`: the image location.
- `alt`: **alternative text** — shown if the image fails to load; read aloud by screen readers; used by search engines to understand the image. **Every meaningful image must have alt**; purely decorative images get `alt=""`.
- `width` / `height`: declaring dimensions up front lets the browser reserve space, preventing content from jumping around while loading.

::: warning
`alt` is not optional. Interviewers and code reviewers use it to judge whether you're professional. Describe what's in the image — don't write useless text like "image" or "photo".
:::

### Captioned figures

```html
<figure>
  <img src="./images/chart.png" alt="Bar chart of quarterly sales in 2025; Q4 is highest" />
  <figcaption>Figure 1: Quarterly sales trend, 2025</figcaption>
</figure>
```

## Audio and video

```html
<video src="./media/intro.mp4" controls width="640" poster="./images/cover.jpg">
  Your browser does not support the video tag.
</video>

<audio src="./media/podcast.mp3" controls>
  Your browser does not support the audio tag.
</audio>
```

`controls` shows playback controls; `poster` is the video cover; the inner text is the fallback for unsupported browsers.

## Embedded pages: iframe

```html
<iframe
  src="https://www.example.com"
  width="800"
  height="450"
  title="Embedded example page"
></iframe>
```

Commonly used to embed maps or video players. Note that many sites forbid being embedded for security reasons.

## Exercises

1. Recreate the folder structure above, reference `images/logo.png` correctly from `about/team.html`, and add a link back to `index.html`.
2. Add a photo to your "about me" page from the previous section, with a properly written `alt`.
3. Deliberately break the `src` path and observe how the `alt` text is displayed; then open the DevTools Network panel and find the red failed request.
