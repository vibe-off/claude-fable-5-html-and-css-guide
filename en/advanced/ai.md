# Learning Frontend with AI

AI can already write quite good HTML and CSS — that's a fact, and pretending otherwise is self-deception. But the conclusion is not "no need to learn frontend"; it's that **both your learning and your future work will have AI in the loop**. This chapter is about doing that well.

## A question you must think through

> If AI can write the code, why would a company hire you?

Because companies never bought "typing" — they buy **responsibility**: changing code when requirements change, fixing production bugs, judging whether AI's output is correct and shippable. Every one of those judgments rests on fundamentals.

Two roads diverge here:

- **Solid fundamentals + AI**: AI generates a page in ten seconds; you spot its semantic flaws and layout risks in three minutes, fix them, ship. You are AI's **commander**.
- **Prompt-only skills + AI**: AI generates a page; you can't see what's wrong with it; the layout collapses on phones in production; all you can do is paste the error back and pray. You are AI's **messenger** — and messengers are the easiest role to replace.

**AI is an amplifier: fundamentals × AI = output. When fundamentals approach zero, the product is still zero.**

## Four correct ways to use AI while learning

### 1. As a 24/7 tutor

Ask about anything you don't understand, and keep drilling until you do — no classroom offers this:

> "I don't understand CSS margin collapse. Explain it for a beginner, then give me a minimal example I can reproduce myself."

### 2. As a line-by-line explainer

For code you can't read (someone else's, scraped from DevTools, or AI's own):

> "Explain this CSS line by line — especially what each of the three values in `flex: 1 1 280px` controls."

### 3. As an examiner

After finishing a topic, let AI test you:

> "I just learned CSS selector specificity. Quiz me with 5 questions from easy to hard. Don't reveal answers up front."

### 4. As a code-review subject (highly recommended)

Have AI generate code, then **you find the flaws**: Is it semantic? Are the names sound? Any table-layout dinosaurs? This trains reading and judgment at once — and you'll discover AI genuinely makes mistakes, which is itself the vaccination.

::: danger The one forbidden use
Having AI do your homework and submitting it untouched. Short-term you save two hours; long-term you walk naked into practical exams and whiteboard interviews. The assignment was never about the HTML file — it's about what writing it leaves in your head.
:::

## Prompt quality is vocabulary

Compare these two prompts:

> ❌ "Make me a nice web page with pictures and text."

> ✅ "Build a course-card list: semantic HTML; Grid layout with `repeat(auto-fill, minmax(240px, 1fr))` for adaptive columns; each card has a 16:9 cover (`object-fit: cover`), a single-line-ellipsis title, a two-line-clamped description, and a price; on hover the card lifts 4px with a shadow, 0.2s transition; mobile-first; BEM naming; theme colors via CSS variables."

Every term in the second prompt comes from earlier chapters of this guide. **Your front-end vocabulary is the ceiling of your prompts** — which is why "learning prompting" cannot bypass "learning frontend".

## Debugging with AI, done right

Treat AI as a pair-debugging colleague, not a dumping ground:

1. **Localize first**: use [DevTools](/en/advanced/devtools) to narrow it down — which element? which rule?
2. **Provide context**: the relevant code + expected behavior + actual behavior + what you've ruled out. "Layout's broken, fix it" is the least effective prompt in existence.
3. **Understand before accepting**: when AI proposes a fix, ask yourself (or ask it) "why does this work?" — a fix you can't explain will break again.
4. **Verify**: confirm with your own eyes, including at phone sizes. AI doesn't carry responsibility. You do.

## Three things to stay vigilant about

1. **AI hallucinates with confidence**: inventing properties, offering outdated syntax. Cross-check against MDN and caniuse.
2. **AI's default taste is mediocre**: its interfaces look like the average of all websites. Aesthetic judgment and product sense — you grow those yourself.
3. **Dependence creeps**: reserve some AI-free time weekly to hand-build a small page from scratch. Like the gym, the muscle only stays if you use it.

## Exercises

1. Examiner mode: have AI quiz you with 5 box-model questions; relearn whatever you miss.
2. Have AI generate a sign-up form page, then run a full solo code review: semantics, label associations, naming, responsiveness. Write at least 5 improvement points and implement them.
3. Take an exercise you wrote yourself, ask AI for improvement suggestions, and for each one decide: accept or reject — with written reasons. **That's how judgment gets built.**
