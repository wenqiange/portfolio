---
name: Wenqiang He
description: Backend and security engineer's portfolio, played as a CRT arcade cabinet in attract mode.
colors:
  phosphor-black: "#07070d"
  cabinet-navy: "#0d1033"
  cabinet-navy-raised: "#151a4a"
  arcade-blue: "#2b4cff"
  scan-cyan: "#3fd6ff"
  verified-green: "#3ddc68"
  marquee-yellow: "#ffd23f"
  threat-red: "#ff4b3e"
  ember-red: "#b3261e"
  insert-coin-magenta: "#ff4fa3"
  chip-violet: "#6b3fd6"
  chip-lilac: "#b9a3ff"
  pixel-white: "#f4f4f8"
  screen-text: "#e3e4ee"
  steel: "#9a9fbb"
  power-up-gold: "#ffe9a8"
typography:
  display:
    fontFamily: "'Press Start 2P', 'Fusion Pixel ZH', monospace"
    fontSize: "5rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0"
  headline:
    fontFamily: "'Press Start 2P', 'Fusion Pixel ZH', monospace"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0"
  title:
    fontFamily: "'Atkinson Hyperlegible', 'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "'Atkinson Hyperlegible', 'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Press Start 2P', 'Fusion Pixel ZH', monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  headline-phone:
    fontFamily: "'Press Start 2P', 'Fusion Pixel ZH', monospace"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0"
  label-large:
    fontFamily: "'Press Start 2P', 'Fusion Pixel ZH', monospace"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  title-small:
    fontFamily: "'Atkinson Hyperlegible', 'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  lead:
    fontFamily: "'Atkinson Hyperlegible', 'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "'Atkinson Hyperlegible', 'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  unit: "8px"
  gutter-phone: "16px"
  gutter: "32px"
  section-phone: "96px"
  section: "128px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.arcade-blue}"
    textColor: "{colors.pixel-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.scan-cyan}"
    textColor: "{colors.phosphor-black}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.insert-coin-magenta}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.insert-coin-magenta}"
    textColor: "{colors.phosphor-black}"
  panel:
    backgroundColor: "{colors.cabinet-navy}"
    textColor: "{colors.screen-text}"
    rounded: "{rounded.none}"
    padding: "24px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.chip-lilac}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 10px"
  world-tile:
    backgroundColor: "{colors.cabinet-navy}"
    textColor: "{colors.pixel-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  world-tile-hover:
    backgroundColor: "{colors.cabinet-navy-raised}"
  level-tile:
    backgroundColor: "{colors.phosphor-black}"
    textColor: "{colors.pixel-white}"
    rounded: "{rounded.none}"
    padding: "16px"
  hud:
    backgroundColor: "{colors.phosphor-black}"
    textColor: "{colors.screen-text}"
    typography: "{typography.label}"
    height: "56px"
  toast:
    backgroundColor: "{colors.phosphor-black}"
    textColor: "{colors.marquee-yellow}"
    rounded: "{rounded.none}"
    padding: "14px 18px"
---

# Design System: Wenqiang He

## Overview

**Creative North Star: "The Attract-Mode Cabinet"**

The portfolio is an arcade cabinet left running in attract mode. The ground is phosphor black, every surface is a deep-navy panel inside a square 3px pixel frame, and the light comes from the screen itself: a phosphor bloom on lit elements and a scanline overlay the visitor can switch off. Each section is a world with a code (1-1, 1-2, 2, BONUS), and the signature device is the level map. A project's architecture is a row of tiles, and a player sprite walks its request path as the visitor scrolls. The security challenge is the boss tile.

Two type voices share the screen and never trade jobs. The pixel caps face is the cabinet: HUD, marquee, world codes, labels, buttons. A highly legible humanist sans carries everything a recruiter actually reads. The world is playful, but it always yields to the content. Easter eggs (Konami power-up, typed commands, insert-coin credits, the firewall mini-game) reward curiosity and never gate a fact.

The world rejects the dark bento developer grid and the previous blueprint-drawing portfolio. Nothing here is rounded, blurred or glassy.

**Key Characteristics:**
- Phosphor-black ground, navy panels, 3px square pixel frames, zero radii.
- A 16-colour cabinet palette where each hue has one job.
- Pixel caps (Press Start 2P, Fusion Pixel ZH for Chinese) only at sizes on the 8px grid. Long text is set in Atkinson Hyperlegible.
- Phosphor bloom and scanlines are one FX layer, and one HUD toggle turns both off.
- Sprites are authored as palette-key pixel rows and rendered as crisp SVG at whole-pixel sizes.
- Stepped motion: the level map scrubs with scroll, START blinks a few times and stops, and a player patrols the world row. All of it switches off under reduced motion.

## Colors

A saturated 16-colour cabinet palette on near-black, where each hue is assigned one meaning and keeps it everywhere.

### Primary
- **Marquee Yellow** (marquee-yellow): titles and the primary signal. Used for the marquee name, section headlines, company names, the email address, the toast, the skip link, focus-lifted world tiles and score digits.
- **Arcade Blue** (arcade-blue): the cabinet frame. Used for panel borders, the HUD and footer rules, the primary button fill, the level-map rail and the scrollbar.

### Secondary
- **Scan Cyan** (scan-cyan): links, focus and the player. Used for every focus ring, link colour, world codes, tile indices, lit level tiles, the player sprite, the subtitle and the primary-button hover.
- **Insert-Coin Magenta** (insert-coin-magenta): the secondary voice. Used for the ghost button, the BONUS world, section codes in headlines, list bullets, the active language and the mini-game frame.

### Tertiary
- **Verified Green** (verified-green): confirmed, on, cleared. Used for LEVEL CLEAR, the FX toggle in its on state, and safe packets in the firewall game.
- **Threat Red** (threat-red): security and threats. Used for the boss tile, the lock sprite, the 1UP mark and hostile packets.
- **Ember Red** (ember-red): the shadow of red. Used for the hard drop under the marquee name, the unlit boss-tile border and the lock body.
- **Chip Violet / Chip Lilac** (chip-violet, chip-lilac): reserved for the stack chip, with a violet frame and lilac text. They appear nowhere else.
- **Power-Up Gold** (power-up-gold): appears only during the Konami power-up, when it repaints panel frames and headlines.

### Neutral
- **Phosphor Black** (phosphor-black): the page ground, unlit level tiles, the HUD bar, the toast and canvas backgrounds.
- **Cabinet Navy** (cabinet-navy): the fill for panels and world tiles.
- **Cabinet Navy Raised** (cabinet-navy-raised): inner bevel hairlines, hovered tiles, unlit tile borders and dashed dividers.
- **Pixel White** (pixel-white): names, roles, button text and high-emphasis copy.
- **Screen Text** (screen-text): the default body copy.
- **Steel** (steel): metadata such as periods, hints, the credit counter, the footer and unlit tile indices.

### Named Rules
**The One Job Rule.** Each hue means one thing: yellow is title and primary, cyan is link, focus and player, magenta is secondary, green is verified, red is security and threat, and gold is the power-up. A new element takes the hue of its job. It never picks a hue because that hue looks nice.

**The Gold Is Earned Rule.** Power-Up Gold appears only while the Konami power-up is active. It never ships in the resting state.

## Typography

**Display Font:** Press Start 2P, with Fusion Pixel ZH for Chinese and monospace as the fallback.
**Body Font:** Atkinson Hyperlegible, with Microsoft YaHei, PingFang SC and Noto Sans SC for Chinese and system-ui as the fallback.

**Character:** A blocky 8-bit caps face for the cabinet's voice beside a humanist sans built for legibility. The first is set dressing; the second does the reading.

### Hierarchy
- **Display** (400, 2rem phone / 3rem from 560px / 5rem from 960px, line-height 1.15): the marquee name only, in yellow with an ember drop and bloom.
- **Headline** (400, 2rem phone / 3rem from 720px, line-height 1.25): section headlines, each prefixed with its magenta world code.
- **Title** (Atkinson 700, 1.25 to 1.375rem, line-height 1.3): job roles and challenge titles, set in the reading face.
- **Body** (Atkinson 400, 1.0625rem, line-height 1.6, 62 to 70ch): all case and experience prose. Lead paragraphs use 1.1875rem and metadata uses 0.9375rem.
- **Label** (pixel 400, 1rem, line-height 1.5 to 1.8, uppercase, no tracking): HUD, buttons, chips, world tiles, tile names, subheads, hints and LEVEL CLEAR.

### Named Rules
**The Pixel Grid Rule.** The pixel face is set only at whole multiples of its 8px grid (16, 24, 32, 48 and 80px), so every glyph pixel lands on a device pixel. No other sizes and no fluid clamps.

**The Two Voices Rule.** Pixel caps are for the cabinet: HUD, titles, labels, codes and buttons. Any sentence a recruiter must read is set in Atkinson Hyperlegible.

**The CJK Pixel Rule.** Chinese pixel text uses Fusion Pixel ZH, the 12px proportional face renamed with `size-adjust: 150%`, so that 16px text renders its 12px grid at exactly 2x. It sits in the same stack as Press Start 2P and is selected through unicode-range.

## Layout

Single page, single column of worlds inside a 1200px container, with a 16px gutter on phones and 32px from 720px. Everything sits on an 8px unit. Sections are padded 96px vertically on phones and 128px from 720px, and section heads keep a 16px gap and a 40px bottom margin. A sticky HUD (56px, two rows and 104px under 560px) carries 1UP and the name, world links from 960px, the language selector and the FX toggle. Anchor scrolling clears the HUD.

The title screen fills the first viewport. On phones and tablets (below 1100px) START is ordered before the world list so the primary action stays above the fold. From 1100px the world tiles become a single centred, wrapping row whose labels never break mid-label.

Level maps are vertical on phones, with a dashed rail at the left and tiles stacked beside it. From 900px they turn horizontal, with the rail across the top and tiles in equal columns. Case bodies split 1.6fr / 1fr from 900px. The inventory grid runs one, two and three columns at 720 and 1100px.

## Elevation & Depth

There is no ambient drop shadow and no blur. Depth is pixel-built, in three ways: inset bevels that light the top-left edge and shade the bottom-right, the hard ember offset under the marquee name, and phosphor bloom as emitted light rather than cast shadow. Bloom is the custom property `--bloom` (`0 0 10px`), and the FX toggle (`html.no-scan`) zeroes it together with the scanlines, so the glow and the CRT overlay always come and go together.

### Shadow Vocabulary
- **Panel bevel** (`box-shadow: inset 0 0 0 1px #07070d, inset 0 0 0 2px #151a4a`): a hairline inner frame on every panel.
- **Button bevel** (`inset 3px 3px 0 <light>, inset -3px -3px 0 <shade>`): the raised key look, with light and shade picked one step either side of the button fill.
- **Marquee drop** (`text-shadow: 4px 4px 0 #b3261e`, 6px from 560px, 8px from 960px): used only on the title name.
- **Phosphor bloom** (`var(--bloom) <hue at 0.3 to 0.5 alpha>`): the glow of a lit element, always in that element's own hue. Used on headlines, lit tiles, buttons, active toggles and LEVEL CLEAR.

### Named Rules
**The Bloom Follows FX Rule.** Every glow is written as `var(--bloom) <colour>`, never as a literal blur, so that switching FX off darkens the whole cabinet at once.

**The Light Not Lift Rule.** Elements are never raised with soft shadows. A state change shows as a frame colour change, a bloom or a stepped 2 to 4px translate.

## Shapes

Every corner is square (0px). Frames are solid 3px borders for panels, buttons, tiles, the HUD rule and the toast, or 2px for chips, language links, the FX toggle and the game screen. Dividers are 2px solid or 1px dashed in Cabinet Navy Raised. Bullets are 8px solid squares. The level rail is a 6px dash track (6px on, 6px off). Sprites sit on 8x8 (or 4x5 and 8x4) pixel grids with `shape-rendering: crispEdges`, and canvases use `image-rendering: pixelated`.

### Named Rules
**The Square Pixel Rule.** No border-radius anywhere. A round corner would break the pixel grid the whole cabinet is drawn on.

## Components

### Buttons
Tactile arcade keys.
- **Shape:** square, with a 3px frame.
- **Primary:** an Arcade Blue fill with a Scan Cyan frame, Pixel White label caps, 16px 24px padding, a bevel and cyan bloom.
- **Hover / Focus / Active:** hover snaps to a cyan fill with black text and a re-tuned bevel. Transitions are `120ms steps(2)`, so the change clicks rather than fades. Active presses down 2px. Focus is the global 3px cyan outline with a 3px offset.
- **Ghost:** a transparent fill with a magenta frame and text and magenta bloom. On hover it becomes a magenta fill with black text and a magenta bevel.

### Chips
- **Style:** pixel caps at 16px in Chip Lilac inside a 2px Chip Violet frame, with no fill. Used for stack lists only.

### Cards / Containers
- **Corner Style:** square.
- **Background:** Cabinet Navy.
- **Shadow Strategy:** the panel bevel only (see Elevation & Depth).
- **Border:** 3px Arcade Blue. During the power-up it turns Power-Up Gold. The mini-game panel swaps the frame to magenta.
- **Internal Padding:** 24px by default, 20px 24px for inventory groups and 32px 24px for experience runs (40px from 900px).

### Navigation
- **HUD:** a sticky black bar with a 3px blue bottom rule. All labels are 16px pixel caps. Nav and language links sit in a transparent 2px frame that turns cyan on hover. The active language is a magenta fill with black text and magenta bloom. The FX toggle is a 2px-framed steel button that turns green with green bloom when `aria-pressed="true"`.
- **World tiles (title screen):** navy panels in a 3px blue frame with a cyan code and white label. Hover and focus lift them 4px with a yellow frame and yellow bloom. The BONUS tile is framed and coded in magenta.

### Level Map (signature)
A project's architecture drawn as tiles along a dashed blue rail. Each tile is black with a 3px Cabinet Navy Raised frame. Its name is a two-column grid (auto | 1fr) with the cyan index or lock sprite in the fixed column, so the name wraps beside it and never under it. Under JS, tiles wait unlit, with a steel index and sprites at 50% opacity, and light in cyan with bloom as the player sprite reaches them. GSAP ScrollTrigger scrubs the walk with `scrub: 0.4`. The boss tile is the security challenge. It carries an ember frame (red when lit), the lock sprite and a red name, and its "boss" word is screen-reader-only text. LEVEL CLEAR appears in green with bloom at full progress. Without JS, or under reduced motion, the map renders complete and lit.

### Sprites
Pixel art is authored as rows of palette keys (`'..cccc..'`, with `.` meaning transparent) in `sprites.ts` and rendered by the Sprite component as one `<rect>` per pixel inside a crisp-edged SVG. The `size` prop sets the rendered width (16, 24 or 32px, a whole multiple of the grid) and the height follows the aspect ratio. Sprites are decorative (`aria-hidden`) unless they are given a `label`. They are never replaced with glyph icons or emoji.

### Toast
Easter-egg feedback. Yellow pixel caps on black inside a 3px yellow frame, fixed bottom-centre, sliding up over `280ms` on the standard ease-out. It is a `role="status"` live region.

## Do's and Don'ts

### Do:
- **Do** pick a colour by its job (The One Job Rule). Yellow is title and primary, cyan is link, focus and player, magenta is secondary, green is verified, red is threat.
- **Do** set pixel type only at 16, 24, 32, 48 or 80px, and set all reading text in Atkinson Hyperlegible.
- **Do** write every glow as `var(--bloom) <hue>` so the FX toggle governs it.
- **Do** frame surfaces with square 3px borders (2px for small controls) and build depth from bevels.
- **Do** author new pixel art as palette-key rows through the Sprite component at whole-pixel sizes.
- **Do** use stepped transitions (`120ms steps(2)`) for state changes, give any blink a finite count, and make sure every animation stops under `prefers-reduced-motion`. Scripted reveals must render complete without JS.
- **Do** add every new UI string to all four locales (es, ca, en, zh). `scripts/check-i18n.ts` fails the build when their shapes drift from Spanish.

### Don't:
- **Don't** round a corner, blur a backdrop or cast a soft ambient shadow.
- **Don't** set the pixel face at off-grid or fluid sizes, or use it for paragraphs.
- **Don't** use Power-Up Gold outside the Konami power-up.
- **Don't** use the hard ember offset anywhere except the marquee name.
- **Don't** hide content behind play. Easter eggs reward curiosity, and every fact is reachable without them.
- **Don't** fall back to the dark bento developer grid or the deleted blueprint-drawing look.
