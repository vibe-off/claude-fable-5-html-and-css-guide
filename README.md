# HTML & CSS Learning Guide

**English** | [简体中文](./README.zh-CN.md)

A front-end starter course for college students, built with [VitePress](https://vitepress.dev/).

**Read online**: <https://vibe-off.github.io/claude-fable-5-html-and-css-guide/>

**Bilingual (i18n)**: Simplified Chinese is the default locale (`/`); the full English version lives at [`/en/`](https://vibe-off.github.io/claude-fable-5-html-and-css-guide/en/). Switch languages any time from the navbar — the two versions mirror each other page for page.

## Contents

- **Before You Start**: how to use the guide, dev environment, how the web works
- **Part 1 · HTML Fundamentals**: text, links & images, lists & tables, forms, semantic HTML
- **Part 2 · CSS Fundamentals**: selectors, colors & units, text & fonts
- **Part 3 · Key Concepts**: box model, cascade & specificity, document flow & positioning, Flexbox, Grid, responsive design
- **Part 4 · Extended Topics**: CSS variables, animations, modern CSS, BEM naming, DevTools debugging, learning with AI, capstone projects

## Local development

```bash
npm install       # first run: install dependencies
npm run docs:dev  # start the dev server
```

> Note: to work on GitHub Pages, the site sets `base: '/claude-fable-5-html-and-css-guide/'`,
> so the local dev URL is `http://localhost:5173/claude-fable-5-html-and-css-guide/`.

## Build & deploy

```bash
npm run docs:build    # build the static site into .vitepress/dist
npm run docs:preview  # preview the built output locally
```

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages automatically.

## Project structure

```
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── .vitepress/config.mts         # site config (bilingual nav, sidebar, search)
├── public/favicon.svg            # site favicon
├── index.md                      # Chinese home page
├── start/  html/  css/  concepts/  advanced/   # Chinese content
└── en/                           # English version, mirroring the Chinese structure
    ├── index.md
    └── start/  html/  css/  concepts/  advanced/
```

## Acknowledgments

This guide was built with **Claude Fable 5** (Anthropic) — from drafting the bilingual content and site configuration to deployment. Thank you, Claude Fable 5, for the contribution. 🙏
