# Site Motion Runbook

## Lightweight Mirror Strategy

- Keep GitHub Pages as the canonical lightweight mirror for this repository.
- Use only native CSS and a tiny vanilla JS file (`assets/motion.js`) for motion.
- Do not add heavy animation libraries to the mirror version.
- If a full Next.js primary site is introduced later, mirror only key pages/content here and keep the same motion language with simplified effects.

## Motion QA Checklist

- Verify section reveal animations trigger once and do not stutter on scroll.
- Verify hover effects stay subtle: cards and buttons should not shift more than a few pixels.
- Verify top progress line tracks scroll correctly and remains unobtrusive.
- Verify `prefers-reduced-motion: reduce` disables sweeps/reveals/transitions.
- Verify mobile behavior: no aggressive parallax-like feel and no hover-only dependency.
- Verify readability: background sweep and gradients must not reduce text contrast.
- Verify performance manually in browser devtools:
  - smooth scrolling/interactions with no obvious frame drops
  - no long-running scripting spikes from `assets/motion.js`
