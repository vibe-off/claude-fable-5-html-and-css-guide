# DevTools & Debugging

Browser developer tools (DevTools) are the tool front-end engineers use **more than any other** — full stop. "Can you drive DevTools?" is practically a proxy for "can you do the job?" This chapter uses Chrome/Edge.

## Opening it

- `F12`, or `Ctrl + Shift + I` (macOS: `Cmd + Option + I`)
- **Right-click an element → Inspect**: jumps straight to that element — the most-used entry point

## The Elements panel: an operating table for HTML & CSS

### Left: the DOM tree

Shows what the browser **actually rendered** — not your source (remember how browsers "repair" bad nesting? that diff is often exactly where the bug is).

- Click the **arrow icon** top-left, then click anything on the page to select it
- Double-click tag names and attributes to edit in place
- `Delete` removes elements; drag to reorder — all page-only, refresh restores everything

### Right: the Styles panel

For the selected element, every CSS rule that matches it, ordered by precedence:

| What you see | What it means |
| --- | --- |
| Struck-through declaration | Overridden by a higher-precedence rule |
| Yellow warning icon | Invalid property name or value (usually a typo) |
| filename:line at the rule's top right | Where the rule lives; click to jump |
| `element.style` | Inline styles |

**Everything is editable live**: click a value to change it, click a swatch for the color picker, toggle declarations with checkboxes — the page updates in real time. The correct styling workflow: **experiment in DevTools until it looks right, then copy the values back to source** — not the edit-save-refresh death loop.

### Forcing pseudo-class states

The `:hov` button in the Styles panel forces `:hover`, `:focus`, and friends — no more keeping the mouse frozen over the element to debug hover styles.

### The box-model diagram

At the bottom of the Styles panel (or the Computed tab): the live box-model diagram — content/padding/border/margin with real numbers. **Spacing problems? Look here first.**

## The Console panel: first responder for errors

Red errors are mostly JavaScript, but also: 404s for missing resources (bad image paths), CORS failures, and more. **When a page misbehaves, check the Console for red text first.**

## The Network panel: a ledger of every request

Refresh with it open and every loaded file is listed:

- **Red rows**: failed loads. Image missing? Look here — usually a 404 from a wrong path.
- Click a request for details: full URL, status code, response body.
- Throttling menu simulates slow networks — experience your page as users on weak connections do.

## The device toolbar: mobile emulation

`Ctrl + Shift + M` toggles device emulation — essential for responsive testing (see [Responsive Design](/en/concepts/responsive)).

## High-frequency debugging scenarios

| Symptom | Path |
| --- | --- |
| Style not applying | Select element → Styles: does the selector match? struck through? yellow icon? |
| Spacing looks wrong | Box-model diagram → whose margin/padding? remember collapse |
| Image not showing | Console/Network for the red 404 → fix the path |
| Element in a weird place | Check position/float in Styles; open the flex/grid overlay |
| Horizontal scrollbar appeared | Walk down from body to find whose width overflows |
| CSS edits not taking effect | Hard refresh `Ctrl + F5` (cache); confirm you edited the file actually linked |

## DevTools as a learning tool

Open any site you admire → right-click its navbar/card/button → Inspect → study the HTML structure and CSS. **Every page on the web is your textbook.** Even better with AI: paste CSS you don't understand and ask for a line-by-line explanation.

## Exercises

1. Open a shopping site and use DevTools to change the homepage banner headline to your name. Screenshot it (a refresh undoes everything — this is harmless).
2. On your own exercise page, force-check every hover effect via `:hov`, and measure the navbar's real height with the box-model diagram.
3. Break an image path on purpose and run the full drill: Console error → red Network request → fix → verify.
