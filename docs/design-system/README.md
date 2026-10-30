# Juan Carvajal — Brand and interaction system

## Source and implementation

Palette inspected on https://juancarvajal.site on 2026-10-30 and cross-checked
against the preserved original stylesheet. Brand primitives: orange `#F93202`,
violet `#7C40FF`, carbon `#161616`, white `#FFFFFF`.

`public/tokens.css` is the source of truth for primitive/semantic colors, spacing,
radii, fonts, focus and motion. `public/experience.css` applies those tokens to
the interface. Light and dark themes use the same brand accents. Small orange
text on white uses `#B72400`; large display lettering uses original orange.

Live component documentation is at `/design-system/` and `/en/design-system/`:
color swatches, typography, button states, native disclosures, fields, spacing,
radii and motion guidance. Both pages use the actual site styles.

## Reference patterns

Reference: https://templates-preview.oxvo.app/t/oxvo-original-studio-max-commerce-3d/latest/#/

The inspected reference uses a sticky chapter sequence, an object with depth,
drag/keyboard rotation, reset controls, restrained type, and a floating header.
These patterns are adapted to five portfolio chapters and a layered interface
composition using the existing Disney project image. No reference code, 3D model,
commerce flow, or product branding is included.

- Desktop: native scrolling selects chapters; chapter buttons jump to their
  corresponding scroll position. No wheel interception or scroll lock.
- Below 1000px: a normal document flow and explicit chapter buttons.
- Object: drag or arrow keys to rotate; Home or Reset restores chapter pose.
- Reduced motion: no scroll-driven chapter changes or animated transitions;
  chapter buttons and direct rotation remain functional.
- No JavaScript: first chapter, content and contact links remain visible.

Motion durations: 160ms feedback, 300ms component, 700ms chapter/pose; easing
`cubic-bezier(.22,1,.36,1)`. Native focus outlines use violet, 44px touch targets
are used for scene controls, and all original archive files stay unchanged.

## Validation

Build with `npm run build`. Preserve the original Hostinger snapshot with
`python3 scripts/verify-hostinger-archive.py --build`. Browser checks cover chapter
selection, keyboard rotation/reset, responsive overflow, menu dismissal, theme
persistence, reduced motion and bilingual component documentation.
