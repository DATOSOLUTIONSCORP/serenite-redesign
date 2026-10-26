# Serenité — Atelier client preview

Atelier is the main design. The homepage now focuses on signature treatments, the team, a first-visit explanation and a consultation action. The introduction video opens only when requested, with playback controls and keyboard focus handling.

The phone navigation uses a menu instead of a scrolling link row. The review controls are collapsed by default; open **Review options** to browse the 40 pages or compare the retained Clinic and Gold Hour designs. The browser Back and Forward buttons follow page navigation.

## Run locally

```sh
python3 -m http.server 8847 --bind 127.0.0.1
```

Open [the local Atelier preview](http://127.0.0.1:8847/). No package installation or build step is required. Keep `app.js`, `styles.css`, `img/` and `video/` beside `index.html`.

## Booking preview

The consultation form uses sample details only. It validates required fields locally, clearly states that no appointment is booked, and does not send or persist input. It does not connect to clinic systems. External account, cart, store and contact links retain their existing clinic destinations.

## Content status

On October 26, 2026, the user confirmed that the supplied prices, staff credentials, Center of Excellence labels, review counts/ratings and media permissions are approved and cleared. This is USER-ATTESTED approval, not an independent audit.

The revised Morpheus8, Attiva and hair pages avoid promises of no risk, no downtime or guaranteed growth. The Morpheus8 and hair pages link to the relevant FDA guidance. Revised medical wording remains a draft for clinical review; this preview is not clinical advice or production signoff.

## Source and validation

The original embedded content, fonts, 188 images and 14 videos are retained. `app.js` and `styles.css` now hold the page behavior and styling. `ASSET-MANIFEST.json` records current source hashes and the original recovery hash where a source file changed. The original recovery is preserved in Git commit `9aff48ff18311484ad4c52d560e957a584b1432f`.

The public client demo is [serenite-redesign.vercel.app](https://serenite-redesign.vercel.app/). Release revisions are recorded through the `codex/atelier-client-preview` branch and its pull request. The site retains its no-index directives.

The repeatable local release profile is `.codex-qa/profile.json`. Its generated evidence stays local and is excluded from Git. The static site has no application package dependencies.
