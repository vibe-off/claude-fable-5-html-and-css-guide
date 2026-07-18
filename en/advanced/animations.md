# Transitions & Animations

The right amount of motion makes an interface feel alive; too much makes users dizzy. This chapter covers CSS's two motion tools: transitions and keyframe animations.

## transition: smoothing state changes

Without a transition, `:hover` changes snap instantly; with one, the change has duration:

```css
.button {
  background: #2563eb;
  transition: background 0.2s ease;
}

.button:hover {
  background: #1d4ed8; /* fades over 0.2s */
}
```

Full syntax:

```css
.card {
  /*           property   duration timing  delay */
  transition: transform 0.3s ease-out 0s;

  /* multiple properties, comma-separated */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

Common timing functions: `ease` (default, general purpose), `ease-out` (fast in, gentle out — the most used), `ease-in-out` (gentle both ends), `linear` (constant speed — right for spinning loaders).

## transform: move, scale, rotate

```css
.icon {
  transform: translateX(8px);          /* move */
  transform: translate(-50%, -50%);    /* the classic centering sidekick */
  transform: scale(1.05);              /* grow 5% */
  transform: rotate(45deg);            /* rotate */
  transform: translateY(-4px) scale(1.02); /* combinable, space-separated */
}
```

### Why animations prefer transform

Animating `left/top/width/margin` forces the browser to **recalculate layout** (reflow) — janky on busy pages. `transform` and `opacity` are handled in the compositor: **an order of magnitude cheaper**.

> Motion rule: if `transform` + `opacity` can express the animation, don't touch layout properties.

## In practice: the floating card

The effect nearly every modern site has:

```css
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

## animation: keyframes without interaction

Transitions need a state change to trigger; animations can play automatically and loop:

```css
/* 1. define the keyframes */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 2. apply them */
.loading-icon {
  animation: spin 1s linear infinite;
  /*         name duration timing iterations */
}
```

Multi-stage keyframes use percentages:

```css
@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.badge-new {
  animation: pulse 2s ease-in-out infinite;
}
```

The standard entrance animation:

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: fade-in-up 0.6s ease-out;
}
```

## Respecting motion preferences

Users with vestibular disorders enable "reduce motion" in their OS. The professional move is honoring it:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Knowing when to stop

- Interaction feedback (hover, click): 0.1s–0.3s — barely perceptible is correct.
- Entrance animations: 0.3s–0.6s.
- UI animations beyond 1 second are almost always a disaster (loaders excepted).
- Motion should **explain interface changes** (where things came from, where they went), not show off.

## Exercises

1. Add color transitions to all your buttons and links, and implement the floating card.
2. Build a pure-CSS loading spinner: a `border` ring with one colored segment, spinning infinitely.
3. Give your homepage title the `fade-in-up` entrance; then build a three-dot "typing…" indicator (hint: stagger each dot with `animation-delay`).
