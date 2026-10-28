# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + TypeScript, animation libraries (GSAP / Motion / Lenis) only where an interaction needs them. Deployed on Vercel. Figma is not used; design tokens live in code.

## Users

Inferred, to confirm: technical recruiters, engineering leads and hiring managers evaluating Wenqiang He for backend / full-stack roles, plus engineers who open the GitHub repos linked from the page. They arrive from a CV, LinkedIn or GitHub link and decide in minutes whether the work is serious.

## Product Purpose

Personal portfolio of Wenqiang He, Software Engineering student (UPC, 2023–present) working in backend and full-stack. It must show, with real material only, how he designs systems: architecture, type-driven design and security, through his projects and internships. Success: a technical reader understands his level of engineering and contacts him or opens the repos.

## Positioning

A backend and security-minded engineer, not a frontend showcase. The proof is architecture: Tormel's 4-layer Rust backend with Argon2, XChaCha20-Poly1305 and a SHA-256 hash chain for VeriFactu; Fenced's AI isolated in the service layer behind a deterministic time-blocking planner that needs user confirmation.

## Operating Context

Source of truth for all content: `cv_wenqiang_he.md`. Languages: Spanish (default), Catalan, English, Chinese, all four as full site locales. Visitors read on desktop and mobile.

## Capabilities and Constraints

- Sections: Hero, Experience, Projects (each an interactive case study: stack, architecture/security challenges, direct links), Skills/stack, Contact. No PDF CV, no blog, no separate education section, no per-project routes.
- Interactivity: micro-interactions, smooth transitions, scroll-linked animation, plus easter eggs or small playful mechanics (not a full game like snake).
- Must stay performant and accessible (reduced motion honored).
- NTT DATA internship is described generically (industrial production planning with MILP optimization on Snowflake/Azure, FastAPI clean architecture); internal project names (Big Rock 4, DataGarage, PPA, ARES, BKM) are not published.
- Phone number is not published. Contact: email, LinkedIn, GitHub.

## Brand Commitments

Name: Wenqiang He. Links: github.com/wenqiange, linkedin.com/in/wenqiang-he. The previous blueprint-drawing portfolio was deliberately deleted; it is not to be continued.

## Evidence on Hand

- CV facts in `cv_wenqiang_he.md` (experience, projects, stack, languages: Spanish, Chinese HSK6, English C1).
- Public repos: github.com/wenqiange/Tormel, github.com/wenqiange/Fenced.
- No screenshots, demos, portrait or metrics yet; the user will add assets later. Do not invent metrics, test counts, users or performance numbers.

## Product Principles

1. Show the mechanism, not adjectives: architecture and security decisions are the content.
2. Every fact traceable to the CV or the repos.
3. Playfulness rewards curiosity but never hides content.
4. Fast and accessible first; motion is earned.
