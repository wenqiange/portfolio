# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Tech recruiters and hiring managers screening Wenqiang He for junior / intern software roles (backend or full-stack). They scan fast, often between other candidates, and need to decide whether to reach out. Success: they understand who Wenqiang is, see real shipped work, and contact via LinkedIn or email.

## Product Purpose
A personal portfolio for Wenqiang He: Computer Engineering student (Software Engineering specialization) at UPC Barcelona, currently a junior PHP/Laravel developer at ATLS. It presents profile, personal projects, work experience, skills, and contact links, and should make a recruiter want to start a conversation.

## Positioning
A junior developer whose personal projects go well past tutorial scope: an offline-first Rust/Tauri POS with fiscal compliance (VeriFactu), and a NestJS backend built with DDD and hexagonal architecture. Combined with four working languages (Catalan, Spanish, English C1, Chinese HSK6), that profile is specific to Wenqiang, not generic.

## Operating Context
Visitors arrive from a CV, LinkedIn, or GitHub link, on desktop or phone. Deployed as a static site on GitHub Pages under `/portfolio/` (built with `VITE_BASE_PATH`).

## Capabilities and Constraints
- Stack: React 19 + Vite + Tailwind CSS 3; no backend.
- Bilingual: Spanish (default) and English, with a language switch. All content lives in `src/data/content.js`.
- Light and dark theme, following system preference by default.
- **Redesign requested (2026-10-26):** the user wants a complete redesign from scratch, keeping all information. The current chat-interface concept (pick a topic, receive a streamed answer) is *not* binding. Desired direction: a fully animated portfolio with smooth animations.

## Brand Commitments
- Name: Wenqiang He ("Wen").
- The TT Octosquares fonts in `/fonts` are a TypeType trial license and are **not** to be used on the site.

## Evidence on Hand
Content in `src/data/content.js` (ES + EN), to be preserved:
- **Profile:** education (UPC, Software Engineering), current role (junior PHP/Laravel at ATLS), focus (scalable apps, performance, clean code), languages.
- **Projects:** Tormel POS (Rust, Tauri 2, React, TS, SQLite; github.com/wenqiange/Tormel), Syncly (NestJS, DDD, hexagonal; github.com/wenqiange/Syncly), Tribus (github.com/wenqiange/tribus), Toolsy (live at toolsy-dun.vercel.app; github.com/wenqiange/Toolsy).
- **Experience:** junior PHP/Laravel developer at ATLS; IT support internship at UPC.
- **Skills:** languages, frameworks and libraries, databases, tools.
- **Contact:** GitHub (wenqiange), LinkedIn (wenqiang-he), email.

Absent, and not to be fabricated: testimonials, metrics or user counts, employer logos, screenshots of projects (`src/assets/hero.png` is the Vite template image), a headshot.

## Product Principles
1. Recruiter-first: who, what, and how to contact must be clear within seconds, before any animation finishes.
2. Show shipped work over adjectives: project depth and real links are the strongest evidence.
3. Motion supports reading, never gates it: content is reachable without waiting, and reduced-motion is respected.
4. Spanish and English are equal citizens; every string exists in both.

## Accessibility & Inclusion
Respect `prefers-reduced-motion` for all animation. No other product-specific requirement established.
