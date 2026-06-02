# Website restructure — audit-led v2.0 (as-built reference)

Records hiradatasolutions.com **as it was actually built** in the v2.0 restructure (plus the
follow-on nav-IA pass): a ~9-page audit-led static site replacing the old single-page, assistant-led
site. Keep in sync with
`brand/website-guidelines.md` (canonical: `website/index.html`). This supersedes the original
forward-looking plan of the same name.

This file now carries **two layers**: *as-built* (what exists today) and *agreed changes pending*
(the home-page content pass + CTA consolidation agreed in the content review — see the relevant
sections; decided but **not yet built**).

## Why
Strategy v2.0 + the MTF flyer moved Hira to an **audit-led** model: the Audit is the lead offer;
Data Assistant and Deep-Dive Sprint are conversions from it; the differentiator is the human
"interrogation work" no AI plug-in can do. Re-architecture + copy realignment; the visual system
(palette, Outfit, cards, chat mockups, animations) is unchanged.

## Architecture as built
- **Shared layer:** `styles.css` (tokens, nav + Services dropdown, buttons, section primitives,
  hero/chat mock, data-flow chips, cards, CTA band, footer, `.reveal`, two breakpoints) + `app.js`
  (scroll-aware nav, hamburger, mobile Services-submenu toggle, IntersectionObserver reveal).
  Linked by every homepage-family page via `/styles.css` and `/app.js`. **No inline `<style>` on
  the 9 main pages.** No build step, no framework, no JS library.
- **Case-study pages keep their own inline archetype CSS** (guidelines §14) — a deliberately
  distinct page type; their asset/nav/CTA paths are root-absolute and their nav/footer were brought
  onto the v2.0 IA (plain Services link, no dropdown).
- **Per-page-type archetypes:** the composition system that extends §14 to every page type (offer,
  gallery, editorial, conversion) is documented in `brand/page-archetypes.md`.
- **Root-absolute asset paths site-wide:** `/styles.css`, `/app.js`, `/Logo Navy.png`,
  `/Logo White.png`, `/Favicon.png`. Resolve identically from `/`, `/audit`, `/mtf`,
  `/our-work/[slug]` **when served with `website/` as root.**
- **Two breakpoints only:** 900px / 600px. `em` is non-italic purple. Palette `var(--token)`
  only (third-party brand colours — Salesforce blue etc. — the sole exception).

## Sitemap + nav
| URL | File |
|---|---|
| `/` | `index.html` |
| `/services` | `services.html` (offers overview) |
| `/audit` | `audit.html` |
| `/data-assistant` | `data-assistant.html` |
| `/deep-dive-sprints` | `deep-dive-sprints.html` |
| `/our-work/` | `our-work/index.html` |
| `/our-work/[slug]` | `our-work/[slug].html` (×5, relocated + renamed from `case-studies/`) |
| `/about` | `about.html` |
| `/contact` | `contact.html` |
| `/mtf` | `mtf/index.html` (hidden, `robots noindex,nofollow`, not in nav) |

Old `/case-studies/*` → `/our-work/*` (301) via `website/_redirects` (Cloudflare Pages).

Identical nav on every page: logo → `/` · Home · **Services** · Our Work · About · Contact ·
**Book a call** (`.nav-cta` → `BOOKING_URL`); mobile drawer mirrors it. **Services** links to the
`/services` overview and, on the homepage-family pages, reveals a CSS-only dropdown (`.nav-item.
has-dropdown` → `.nav-dropdown`, on `:hover`/`:focus-within`) listing the three offers — Data Audit
(`/audit`) · Data Assistant (`/data-assistant`) · Deep-Dive Sprints (`/deep-dive-sprints`). The
mobile drawer uses a `.mm-toggle` (`#mmServicesToggle`, JS-driven) to expand the same three. The
five case-study pages (inline-CSS archetype) carry the same nav but with a **plain** Services link,
no dropdown, to avoid duplicating dropdown CSS across five inline stylesheets. Offer detail-page
URLs are unchanged (`/audit` etc.); only the audit's nav/footer **label** became "Data Audit".

## Agreed decisions (locked)
- **No prices anywhere** on the site. (Verified: none present.)
- **Audit = two published tiers by scope only** (Basic ≤3 sources ~1–2 wks; Advanced ≤6 sources
  ~2–3 wks). Strategic/Custom audit is a **single "by request" note line**, not a third tier.
- **No emoji** (inline SVG / geometric only). **No banned buzzwords** ("move the needle",
  "leverage", "synergies", "unlock potential", "cutting-edge").
- **Founding year is 2023** (owner-confirmed).
- **Case-study content/anonymisation is not rewritten** — relocation reconciled paths only.
- **Lead-capture form on `/contact` + `/mtf` only.** Every other page (home, the three offer pages,
  Our Work, About) gets a **slim, button-only CTA band** (Book a call → `BOOKING_URL`; Get in touch
  → `/contact`) — no inline form. Overturns the earlier "Contact is not a page": `/contact` is the
  canonical conversion hub and the single home for the `FORM_*` placeholders + the UK-GDPR line.
  `/mtf` keeps its inline capture form (on-the-spot capture is its purpose). *(Build state: the form
  is currently duplicated in CTA bands site-wide — consolidation pending.)*
- **Home page is light-touch on the offers** (see "Home page section order"). Depth and hierarchy
  live on `/services` (hub) + the three offer pages; the home only *teases* the **audit-first
  sequence** (Audit → Assistant/Sprint), **never three equal blocks**, and the five audit
  deliverables are not on the home.

## Home page section order (agreed in review; pending build)
The as-built home does **not** yet follow this; the home-page content pass reorders and trims it.

1. **Hero** — headline + sub + Book-a-call. **Decision:** restore the chat mockup (the right column
   is currently dead space) or commit to an intentionally clean text hero. The build dropped the
   planned mockup; either is fine, but make it deliberate.
2. **Belief / POV bridge** *(new)* — short, customer-first thesis, **not** a "we are a company"
   intro: you already have the data; the gap is getting to it; we bring big-company rigour to SMBs
   that can't justify a Head of Data. ≤1 line of pedigree; the full founder story stays on `/about`.
   Sets up the problem.
3. **The problem** — unchanged (scattered systems / numbers don't agree / AI sits on top of the mess).
4. **How we typically work** — **light-touch, audit-first sequence** that routes to `/services` +
   `/audit` for depth. A line such as: "Everything starts with a Hira Audit; from there most clients
   move into a Data Assistant build, a Deep-Dive Sprint, or both." **Not three equal blocks.** The
   five audit deliverables move OFF the home onto `/audit` + `/services`. Replaces the as-built
   "Start with the Audit" block + separate "What comes next" two-card block (merged + trimmed).
5. **Why this works** — the existing dark "What an AI plug-in can't do" section, framed as the
   why-us / differentiation beat.
6. **Work we've done** — relabel the "Proof / Questions we've answered" section; state explicitly
   these are **Deep-Dive Sprint** results (cards already tag the variant). Avoid "success we've done".
7. **Who we work with** — the sector strip, **moved down to here** from its as-built spot right
   after the hero.
8. **About teaser** — one line + "More about Hira" → `/about`. Replaces the full as-built founders
   block (don't duplicate `/about`); the pedigree line can live here.
9. **Slim CTA band** — button-only (Book a call → `BOOKING_URL`; Get in touch → `/contact`).
   **No inline form** (it now lives on `/contact`).
10. **Footer** — unchanged.

**Testimonial:** the as-built "game-changer / Leadership Team" quote is breezy (against voice §5.3)
and vaguely attributed — sharpen or cut. Optional, not blocking.

**Deltas vs as-built home:** move sector strip down (was #2, now #7); add belief bridge; merge the
Audit block + "What comes next" into one light-touch audit-first beat and move the five deliverables
off-home; relabel Proof → "Work we've done" (tie to Sprints); slim the founders block → About teaser;
strip the inline form from the final CTA (→ `/contact`); decide the hero mockup.

## Booking + lead-capture scaffold (owner supplies before launch)
`Book a call` → `BOOKING_URL` appears on **every** page. The **lead-capture form** appears on
`/contact` + `/mtf` **only** (all other pages get the slim button-only CTA band — see locked
decisions). Form:
`action="FORM_ENDPOINT"` with hidden `access_key=FORM_ACCESS_KEY`, fields name / business /
email, honeypot, one-line UK-GDPR consent. Web3Forms-style, no JS. Plug in `BOOKING_URL`,
`FORM_ACCESS_KEY`, `FORM_ENDPOINT` (default `https://api.web3forms.com/submit`). The `/contact`
page adds an **`EMAIL_ADDRESS`** placeholder (used in two `mailto:EMAIL_ADDRESS` links) — owner
supplies a real address before launch; nothing is invented.

## Open items / flagged for owner
1. **Founder bios were rewritten, not left as-is.** Both now read "telecoms, fintech, automotive
   and consumer tech" (from the MTF flyer). This conflicts with README §8 canonical
   (Qasim = telecoms / edtech / hospitality) and was flagged in the brief as a "leave as-is"
   item. Qasim's bio has no flag comment; Haider's has a placeholder. **Decision needed:** which
   bio source is canonical, and reconcile README §8 ↔ the site.
2. **"MENA" was removed** from the testimonial (now "On-demand delivery platform"). Brief listed
   it as a "leave as-is and flag" fact. **Decision needed:** restore + flag, or keep removed.
3. **Local preview renders unstyled via file://** — root-absolute paths require serving with
   `website/` as root. Preview: `python -m http.server 8099 -d website`. (No fix needed for
   Cloudflare, where `/` = `website/`.)
4. **Unencoded spaces** in `/Logo *.png` and the absolute `og:image` URL — consider `%20` for the
   og:image to be safe with link-preview scrapers.
5. **Footer copy drift — resolved.** The nav-restructure pass brought the five case-study footers
   onto the standard footer, so all pages now read the audit-led "…Based in the UK." brand line.
6. `case-studies/published/` is **retired**; rendered pages now live at `website/our-work/`
   (renamed from `website/case-studies/` in the nav-restructure pass; `_redirects` 301s the old path).
7. **Copy not yet signed off.** The owner will review website content **page by page** and
   propose changes; all copy is provisional until that pass is complete. New `/services` and
   `/contact` copy, and the "Data Audit" nav/footer label, are provisional too.
8. **Nav restructure done.** Top-level IA is now Home · Services (overview + dropdown) · Our Work ·
   About · Contact · Book a call. New pages `services.html` + `contact.html`; `/case-studies/`
   renamed to `/our-work/`. The five case-study pages were also reconciled onto this nav (they had
   carried a stale "Services/Results" nav + "What We Do" footer that predated the v2.0 set).
9. **Founding year vs canonical docs.** The site + this plan use **2023** (owner-confirmed), but
   README §1/§8 and the strategy doc still say "early 2026" (note: Company No. 14832706 dates to
   ~2023). Update README + strategy to 2023 so they stop contradicting the site — or re-confirm if
   2026 is the intended date. Same site-vs-README pattern as the founder-bio conflict in item 1.

## Verification (as run)
1. Serve rooted at `website/`; load all 9 main pages + 5 studies; zero failed requests.
2. Nav/footer logos render; `.scrolled` toggles; hamburger opens/closes; `.reveal` gains `.in`.
3. **Services dropdown:** desktop `:hover` and keyboard `:focus-within` both reveal the three
   offers; mobile burger → drawer → Services toggle expands the same three. Each link resolves.
4. **Our Work rename:** grep confirms no `/case-studies/` links remain in `website/*.html`; old
   `/case-studies/[slug]` 301-redirects via `_redirects`; home Proof/Sprints/index → the 5 studies.
5. Grep: no emoji, no banned buzzwords, no client names (Presto/Lebara/ASI); `£2.9M` framing on
   the delivery teaser; only two breakpoints.
6. Booking/form placeholders present and named (incl. `EMAIL_ADDRESS` on `/contact`); `/mtf`
   ordered book → capture → full-site.
