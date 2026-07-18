# Projects & Practice

Understanding ≠ ability. Here is a project ladder from easy to hard; each one integrates multiple chapters. **Finish all five and HTML & CSS are genuinely yours.**

## Universal requirements (every project)

- [ ] Semantic tags; one `h1` per page; no skipped heading levels
- [ ] `alt` on every image; a linked `label` for every input
- [ ] Global `box-sizing: border-box`
- [ ] Colors and spacing managed with CSS variables
- [ ] Class names follow BEM, or at minimum "name the purpose"
- [ ] No layout breakage and no horizontal scrollbar anywhere from 320px to 1400px wide
- [ ] Self-check in DevTools: clean Console, no 404s in Network

## Project 1: Personal profile card ⭐

**Integrates**: HTML skeleton, text, images, box model, typography

A centered card: round avatar, name, one-line bio, a few social links. Rounded corners, shadow, subtle hover motion.

**Acceptance**: the card is dead-center (horizontally *and* vertically); avatar built with `aspect-ratio: 1` + `border-radius: 50%` + `object-fit: cover`.

## Project 2: Recipe / article page ⭐⭐

**Integrates**: semantics, lists, images, typography, centered container

A long-form illustrated article: title, cover image, ingredients as an unordered list, steps as an ordered list, tips in a blockquote. Body container centered with `max-width`, comfortable line height.

**Acceptance**: with CSS stripped, the document structure still reads clearly (the litmus test of semantics); pleasant reading experience (compare against `line-height: 1` to feel the difference).

## Project 3: Survey sign-up form ⭐⭐⭐

**Integrates**: the full form toolbox, pseudo-classes, selectors

A complete event registration form: text, email, radios, checkboxes, a select, a textarea, an agree-to-terms checkbox, submit. Sections via `fieldset`, native validation attributes throughout.

**Acceptance**: clicking any text label focuses its input; `:focus` states clearly visible; try `:has()` to keep the submit button gray until terms are accepted.

## Project 4: Responsive course list page ⭐⭐⭐⭐

**Integrates**: Flexbox, Grid, responsive, motion, modern CSS

Structure: sticky navbar (Flexbox) + hero (headline sized with `clamp()`) + course card wall (Grid `auto-fill`) + footer. Cards: 16:9 cover, single-line-ellipsis title, multi-line-clamped description, hover lift.

**Acceptance**: single column on phones flowing smoothly to multi-column desktop; nav sticks via `position: sticky`; every animation uses only `transform` and `opacity`.

## Project 5: Clone a real page ⭐⭐⭐⭐⭐

Pick one screenful of a real site you like (a news homepage header, a product page hero, an app landing section…) and **clone it pixel-close**. Inspecting with DevTools is allowed; copying its code is not.

This is the rite of passage: a real page's complexity will expose every blind spot you have. Afterwards, "I know CSS" will carry both new humility and new confidence.

## The standard workflow for every project

1. **Sketch the structure first**: block out regions on paper, label the semantic tags — think before typing.
2. **HTML before CSS**: complete the structure, verify the content in the browser, then style.
3. **Outside in**: frame the big layout (Grid/Flexbox) first, then polish component details.
4. **Mobile first**: start narrow, enhance upward.
5. **AI checkpoints**: stuck for 20+ minutes → ask AI, bringing your code and what you've ruled out (see [Learning Frontend with AI](/en/advanced/ai)); when done, have AI review it and judge which suggestions to accept.
6. **Checklist**: run through the universal requirements at the top.

## Self-assessment: are you ready to move on?

If every answer is "yes", you can start JavaScript with confidence:

- [ ] I can hand-write the HTML skeleton and a semantic page frame without references
- [ ] I can explain the box model and what `border-box` fixes
- [ ] Given two selectors, I can tell which wins on specificity
- [ ] I can write Flexbox centering and "fixed sidebar + fluid main" from memory
- [ ] I can build an adaptive card wall with Grid and explain every argument of `minmax`
- [ ] When a page breaks, my first reflex is DevTools, not staring
- [ ] I can spot at least three classes of common problems in AI-generated code

## What's next

HTML/CSS are the static bones and skin; **JavaScript** adds behavior — clicks, data fetching, dynamic rendering. After JS basics you'll enter the world of **Vue 3** and build real web applications from components. Everything you learned here — semantics, the box model, Flexbox, BEM, CSS variables — shows up daily in component development.

Happy coding. 💪
