---
name: Wenqiang He — Portfolio
description: A junior developer's portfolio drawn as a cyanotype engineering drawing set.
colors:
  paper: "rgb(22 70 127)"
  paper-deep: "rgb(15 56 106)"
  line: "rgb(238 244 251)"
  mid: "rgb(169 198 232)"
  mark: "rgb(255 107 85)"
  paper-night: "rgb(10 40 75)"
  paper-deep-night: "rgb(6 30 58)"
  line-night: "rgb(220 232 246)"
  mid-night: "rgb(152 184 224)"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.5rem, min(23cqi, 30svh), 16rem)"
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: "normal"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.85
    letterSpacing: "normal"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "normal"
  control:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body-lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  frame-sm: "10px"
  frame-md: "16px"
  frame-xl: "20px"
  pad-sm: "24px"
  pad-md: "40px"
  pad-xl: "56px"
  grid-minor: "24px"
  grid-major: "120px"
  rail: "340px"
components:
  button-ref:
    backgroundColor: "transparent"
    textColor: "{colors.line}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  button-ref-hover:
    backgroundColor: "{colors.line}"
    textColor: "{colors.paper}"
  toggle-option:
    backgroundColor: "transparent"
    textColor: "{colors.line}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  toggle-option-pressed:
    backgroundColor: "{colors.line}"
    textColor: "{colors.paper}"
  nav-item:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.line}"
    rounded: "{rounded.none}"
    padding: "12px 12px"
  nav-item-current:
    backgroundColor: "{colors.line}"
    textColor: "{colors.paper}"
  schedule-cell:
    backgroundColor: "transparent"
    textColor: "{colors.line}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
  drawing-frame:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.none}"
    padding: "6px"
---

# Design System: Wenqiang He — Portfolio

## Overview

**Creative North Star: "The Issued Drawing Set"**

The whole site is one cyanotype drawing set: blue paper from edge to edge, white technical linework, a faint drafting grid, and every section drawn as a numbered sheet with a double border and zone markers. Content is presented the way an engineer documents a build. Facts sit in leader-line notes, stacks in bills of materials, history in a revision table, and projects as detail drawings with their own architecture diagrams.

The world has two pens and one marker. White ink (line) carries everything that is final. Construction blue (mid) carries what is secondary, unfinished, or annotative. Red pencil (mark) is a checker's mark, used only to flag. Emphasis comes from scale and condensed weight, not from colour. Depth is flat paper. The one exception is the title block, which floats over the sheets at wide viewports.

Motion follows the drafting process. Each sheet starts in pencil (outlined lettering and undrawn strokes) and inks in when it scrolls into view. The contact sheet then goes one step further to issued, and the stamp lands. Reduced motion skips straight to the final state, and nothing is ever gated behind the animation.

**Key Characteristics:**
- Full-bleed cyanotype blue, a 24px minor and 120px major drafting grid, and a double sheet border with A–F / 1–4 zone markers.
- Condensed uppercase display lettering at very large scale; Barlow body text in white.
- Square corners everywhere; structure is drawn with 1–2px rules, never with fills or cards.
- Drafting devices used for real information: dimension lines, leaders, callout bubbles, BOM and revision tables, crossed "to be supplied" frames.
- Three states, pencil → inked → issued, driven by `data-state` on each sheet.

## Colors

A monochrome cyanotype (blue paper, white and pale-blue ink) plus a single red pencil reserved for marks.

### Primary
- **Drafting White** (line): all final ink, including body text, headings, sheet borders, table rules, diagram strokes, focus outlines, and the filled state of controls (pressed toggle, current nav item, hovered reference button).

### Secondary
- **Construction Blue** (mid): pencil-state lettering outlines, labels, zone markers, inner sheet border (55% alpha), secondary rules (25–50% alpha), dimension values, inactive project names, stack summaries, and dashed construction lines (45% alpha).

### Tertiary
- **Red Pencil** (mark): only the revision cloud around the open project and the stamp border on the contact sheet.

### Neutral
- **Cyanotype Paper** (paper): the page ground for every sheet, and the fill of the title block and of any label that has to knock out linework behind it.
- **Deep Wash** (paper-deep): recessed image wells (at 60% alpha) and the scrollbar track.
- **Night Print** (paper-night, paper-deep-night, line-night, mid-night): the `:root.dark` remap of the same four roles to a darker blueprint. Red pencil is not remapped.

### Named Rules
**The Red Pencil Rule.** Red marks things; it never writes them. It may stroke a cloud or a stamp border, but it is never text colour, never a fill, and never a button.

**The Two Pens Rule.** White is final and blue is provisional or annotative. If an element is the thing itself, it's white. If it describes, labels, or is not yet drawn, it's construction blue.

## Typography

**Display Font:** Barlow Condensed (sans-serif fallback), self-hosted via @fontsource at 500/600/700
**Body Font:** Barlow (system-ui fallback), self-hosted at 400/500/600

**Character:** Condensed technical lettering does the shouting and plain Barlow does the reading, the way a drawing pairs title lettering with general notes. All display is uppercase, and emphasis comes from scale, not colour.

### Hierarchy
- **Display** (700, `clamp(3.5rem, min(23cqi, 30svh), 16rem)`, 0.8): the hero name only, sized against its container so it spans most of the sheet. The contact title uses the same role at `clamp(4rem, 16vw, 13rem)`.
- **Headline** (700, `clamp(2.75rem, 8vw, 6rem)`, 0.85): sheet titles, always followed by the double title rule and a right-aligned scale label.
- **Title** (700, `clamp(2.25rem, 6vw, 4.5rem)`, 0.9): project row names. Experience entries step down to `clamp(1.75rem, 4vw, 3rem)` and core skills to `clamp(1.375rem, 2.4vw, 2rem)` at 600.
- **Control** (600, 1–1.125rem, 0.06–0.08em, uppercase): reference buttons, toggles, nav items, figure captions.
- **Body** (400, 1.0625rem, 1.55): running text, capped at 60–70ch. **Body lead** (1.25rem, relaxed) is for project descriptions and the contact intro.
- **Label** (600, 0.75rem, 0.16em, uppercase, construction blue): drawing-field names such as general notes, scale, BOM headers, scope, and note labels.

### Named Rules
**The Lettering Rule.** Display text is Barlow Condensed in uppercase at 700, with tight leading (0.8–0.95). No other display face.

**The Field Label Rule.** A label names a field on the drawing (general notes, scale, BOM, revision, status). It is never a teaser line stacked above a headline.

## Layout

Each section is a full-width sheet. The frame is inset by `--frame` (10 / 16 / 20px at base / md / xl), and content is padded by `--pad` (24 / 40 / 56px) inside it. The drafting grid is drawn as background gradients at 24px (4.5% alpha) and 120px (9% alpha).

From xl (1280px) up, a sheet is a two-column grid: content plus a 340px rail (gap 56px) for general notes or the portrait. Below xl the rail stacks under the content. The hero is at least one viewport tall (`min-h-svh`), with the name across most of its width and four leader notes in a staggered row at lg.

The title block is the navigation. At xl+ it is a corner panel the width of the rail, fixed above the bottom-right frame. At lg it is a single-row strip along the bottom edge. Below lg it is a two-row strip: five sheet links on top, the revision and print toggles beneath. `main` reserves bottom padding to match (7rem below lg, 3.5rem at lg).

Project architecture diagrams render as SVG (viewBox 880×280) at md+. Below md they become a stacked schedule: boxes listed down a single white spine with tick connectors. Tables use the same breakpoint, so the revision table drops its header row and status column below md.

## Elevation & Depth

The paper is flat. Depth comes from line weight (a 2px primary rule against a 1px construction rule), from the double border, and from alpha steps of construction blue. A label that crosses linework knocks it out with a paper-coloured fill instead of floating above it.

### Shadow Vocabulary
- **Title block lift** (`box-shadow: 0 18px 40px -12px rgb(0 0 0 / 0.45)`): xl+ corner panel only, so the fixed nav reads as a separate plate lying over the sheets it scrolls past.

### Named Rules
**The Flat Paper Rule.** Nothing on a sheet casts a shadow. The only lifted object is the title block, because it is the only thing that isn't drawn on the sheet.

## Shapes

All corners are square (0px). Form comes from drafting conventions: the double sheet border (2px line, with a 1px construction line inset 5px), the double title rule (2px over 1px, 6px apart), oblique 45° dimension ticks, circular callout bubbles split by a horizontal rule (detail number over sheet number), triangular revision markers, a scalloped red revision cloud built from ~28px arcs, and a double-bordered stamp rotated −7°. Arrows are drawn leader arrowheads (SVG strokes at 1.5).

## Components

### Buttons
Reference links drawn as outlined boxes.
- **Shape:** square, 2px white border.
- **Primary (reference):** transparent with white Barlow Condensed 600 uppercase lettering, 8px 16px padding, and a trailing leader arrow.
- **Hover / Focus:** fills white with paper-coloured text (colour transition). Focus is a 2px white outline offset 3px.
- **Project row toggle:** a full-width grid row with callout bubble, name, stack summary, and a plus that rotates 45° into a close mark over 500ms. The name is construction blue when closed and white when hovered or open.

### Segmented toggles
- **Style:** two options inside a 1px white border, Barlow Condensed 600 uppercase at 0.06em.
- **State:** the pressed option (`aria-pressed`) fills white with paper text. Hover tints to white at 15%. Captioned "revision" (ES/EN) and "print" (day/night).

### Navigation (title block)
- **Style:** paper fill, 2px white border. At xl it has a header with the name in display lettering plus a role label, numbered sheet links (01–05) in a 2-column grid, a "sheet N of 5" cell, and the toggles.
- **States:** hover tints to white at 15%. The current sheet (`aria-current="location"`) fills white with paper text.
- **Mobile:** a bottom strip of five equal cells with the number stacked over the name, toggles on a second row.

### Tables and schedules
- **BOM and revision table:** 2px white outer border and header rule, 1px construction-blue internal rules, label-style headers, tabular numerals in construction blue.
- **Schedules (skills):** a cell grid with 2px white rules on every side, auto-filling at a 9.5rem minimum.

### Drawing frame
An image well: 2px white border, 6px deep-wash mat, 1px inner construction border. With no image it shows the drafting "to be supplied" convention: dashed diagonal crosses and a centred label knocked out on paper.

### Signature: sheet states
`Sheet` holds `data-state`: `pencil` on mount, then `inked` when it scrolls into view (25% bottom margin), or `issued` on the contact sheet.
- **Pencil:** lettering is transparent with a 1px construction-blue text stroke. SVG strokes use `pathLength="1"` and sit fully dashed-off, and the title rule is scaled to 20%.
- **Inked:** lettering fills white over 1.1s (0.2s delay), strokes draw in over 1.6s, and the title rule extends over 1.4s.
- **Issued:** the stamp scales from 1.35 to 1 and fades in after a 0.9s delay.
- Project details re-ink each time they open, and the red cloud draws around the open detail over 1.2s.
- `prefers-reduced-motion` sets the final state immediately and zeroes all transitions.

### Signature: dimension line and leaders
A live dimension line measures the element below it and prints the rounded pixel width in construction blue, knocked out on paper. Hero leaders run at an angle from the name's baseline to a short shoulder over each note. Hovering a note thickens its leader to 2.25 and dims the others to 25%.

## Do's and Don'ts

### Do:
- **Do** draw every section as a `Sheet` with frame, zone markers, headline, double title rule, and scale label.
- **Do** carry information in drafting devices (leaders, dimension lines, BOM and revision tables, callout bubbles) and keep them truthful to the content.
- **Do** give every new inked SVG path `pathLength="1"` and the ink class so it takes part in pencil → inked.
- **Do** keep text in white or construction blue, rules at 1px or 2px, and corners square.
- **Do** provide a stacked, non-SVG form below md for any new diagram.

### Don't:
- **Don't** use red (mark) for text, fills, or controls. It is for clouds and stamp borders only.
- **Don't** add rounded corners, cards, gradients, or shadows on sheet content.
- **Don't** use the TT Octosquares fonts in `/fonts`. They are a trial license.
- **Don't** gate content behind the ink animation. Reduced motion must land on the final state at once.
- **Don't** stack a label above a headline as a teaser. Labels name drawing fields.
