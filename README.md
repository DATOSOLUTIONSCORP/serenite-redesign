# Serenité — Atelier client preview

Atelier is the main design. The homepage focuses on signature treatments, a first-visit explanation and a consultation action. The introduction video opens only when requested, with playback controls and keyboard focus handling.

The approved October 27 revision removes clinician portraits and homepage team cards. Our team opens a separate text-only directory; names, listed credentials, roles and profile biographies remain available. Original image files and recovered source content are preserved. The user authorized committing, pushing and deploying this reviewed version through the existing branch and preview workflow. The replacement opening film remains excluded.

The reviewed October 27 release includes the local review fixes and typography refinements. The user authorized committing, pushing and deploying this version through the existing branch and separate-preview workflow. `content-refinements.js` supplies draft copy over the unchanged recovered content: consultation-first treatment wording, explicit Pico price units, a demo-specific privacy notice and short staff role details. The replacement video remains excluded.

The typography pass keeps Cormorant Garamond and Jost, with unchanged local font binaries. Their normal variable-weight declarations now match the measured font axes; the separate 500 italic remains. Functional facts and prices use Jost, annual payments have explicit emphasis, mobile price units stay together, and document headings use a clearer scale. Phone tier navigation is a 2×2 grid. Currency grouping spaces are normalized for display without changing any amount. Buttons and form layouts wrap or shrink when text is enlarged. Clinician portraits and the replacement opening film remain excluded.

The phone navigation uses a menu instead of a scrolling link row. The client view hides review controls. Use the footer’s **Design review** link (or add ?review=1) to browse all 41 pages (the original 40 plus a team overview) and compare the retained Clinic and Gold Hour designs. The browser Back and Forward buttons follow page navigation.

## Run locally

```sh
node scripts/build-static.mjs
python3 scripts/preview_server.py --port 8847
```

Open [the local Atelier preview](http://127.0.0.1:8847/). No application package installation is required. The dependency-free build uses Node.js and writes the HTML pages and sitemap in this checkout. Keep the generated pages, site-runtime.js, app.js, content-data.js, content-refinements.js, routes.js, styles.css, fonts.css, fonts/, img/ and video/ together.

## Booking preview

The consultation form uses sample details only. It validates required fields locally, clearly states that no appointment is booked, and does not send or persist input. Sample values remain only in page memory across local navigation and Back/Forward. Completion or reload clears the draft; no browser storage or request endpoint is used. It does not connect to clinic systems. External account, cart, store and contact links retain their existing clinic destinations.

## Content status

On October 26, 2026, the user confirmed that the supplied prices, staff credentials, Center of Excellence labels, review counts/ratings and media permissions are approved and cleared. This is USER-ATTESTED approval, not an independent audit.

On October 27, the user confirmed that Gold package 2 includes all three listed services and session counts for $3,456 annually. The supplied Gold package values remain $4,800–$5,700 by package. Membership cards show those listed package values and annual payment separately from the included session list. Individual item valuations remain in the recovered data and are omitted from package presentation. This clarification is USER-ATTESTED.

The revised Morpheus8, Attiva and hair pages avoid promises of no risk, no downtime or guaranteed growth. The Morpheus8 and hair pages link to the relevant FDA guidance. Revised medical wording remains a draft for clinical review; this preview is not clinical advice or production signoff.

## Source and validation

The original embedded content, fonts, 188 images and 14 videos are retained. `app.js` and `styles.css` now hold the page behavior and styling. `ASSET-MANIFEST.json` records current source hashes and the original recovery hash where a source file changed. The original recovery is preserved in Git commit `9aff48ff18311484ad4c52d560e957a584b1432f`.

The public client demo is [serenite-redesign.vercel.app](https://serenite-redesign.vercel.app/). Release revisions are recorded through the `codex/atelier-client-preview` branch and its pull request. The site retains its no-index directives.

The repeatable local release profile is `.codex-qa/profile.json`. Its generated evidence stays local and is excluded from Git. The static site has no application package dependencies.

## Refinement, October 26, 2026

The user authorized committing, pushing and deploying this revision to the existing public client demo. The replacement opening film remains excluded until separately reviewed. This release keeps the original introduction and sample-only booking behavior.

The header uses keyboard-accessible native disclosure navigation. Search announces result counts, offers Clear, and provides useful empty-state links. The sample consultation form has linked error summaries, inline errors and preserved input after validation failures. The introduction has loading, ready and failure feedback plus a retry action. It stays user-initiated and retains the original video while the replacement is pending.

Atelier retains Cormorant Garamond and Jost. The October 26 pass deduplicated the original font sources into seven byte-identical local WOFF2 files. The current typography pass consolidates the normal Cormorant/Jost declarations into their measured variable ranges, leaving twelve font-face declarations and the same seven files. The original embedded page content and all 202 original media files are preserved.

Open Graph and Twitter metadata reference the new 1200 × 630 branded share image. Sharing-platform cache and scraper behavior have not been independently verified. No analytics, advertising pixels, CRM or real booking integration was added. Demo form completion is not a patient lead.

## Technical SEO and site architecture

The 40 existing pages now have extensionless URLs and generated HTML; the new team overview makes 41 pages. The route catalog preserves 39 observed clinic paths. Key Concepts and the team overview use explicit local paths. Old design links such as /#a-morpheus8 remain supported and normalize to the clean URL. Other retained designs use ?design=b or ?design=c. Review controls remain hidden unless ?review=1 is selected.

Each HTML page includes its own title, description, self-canonical URL, Open Graph/Twitter metadata and matching WebPage/MedicalClinic markup. Inner pages add breadcrumb markup. The clinic markup uses the visible approved name, address and telephone; it adds no ratings, exact opening times, profile-ownership assertions or inferred clinical affiliations. Services link to more information, pricing and the team. The recovered clinical wording remains preserved in content-data.js. Selected visible copy uses the local draft refinements and still requires clinical review before any clinical-production use.

The build defaults to https://serenite-redesign.vercel.app as the named public demo origin. Generated canonicals, social metadata and sitemap.xml use that address. For an isolated local origin, pass --origin=http://127.0.0.1:PORT to the build. The HTML, local server and Vercel configuration retain noindex; robots.txt still disallows crawling. No sitemap submission or indexing/account change is included. Test the same committed source in a separate deployment before promoting it through the existing branch/PR release workflow.

The local server provides clean URLs, true 404 responses and equivalent .html redirects. Vercel uses cleanUrls and no trailing slashes; verify those routes in the deployment before promotion. The recovered JSON content was moved byte for byte into content-data.js. All original images and video files remain preserved. Sample form fields are disabled in generated HTML; JavaScript renders the usable sample-only form, whose completion still sends and stores nothing.

Rebuild with node scripts/build-static.mjs after changing templates, route metadata or content. Generated pages are outputs of page-shell.html, app.js, routes.js, content-data.js and content-refinements.js; edit these sources rather than individual generated HTML files.

## Visual correction

The current Atelier pass standardizes the existing inline SVG family, visible states and 44px controls, strengthens the Cormorant/Jost hierarchy, improves card and mobile action spacing, makes business contact links actionable, and replaces bitmap rating text with readable HTML and vector stars. Decorative content reveals were removed so content stays visible during navigation and scrolling. Clinician portraits and initials remain excluded. Staff pages retain names, roles and listed credentials.

The hero and three featured service illustrations now use unmodified 1920px-wide assets downloaded from the existing clinic website. Source URLs, native dimensions and SHA-256 values are retained in work/atelier-visual-polish-20261026-v1/SOURCE-IMAGES.json outside this checkout. These are illustrative images; no new patient result, staff portrait or clinical approval is implied. Source-limited clinical/staff photographs remain preserved. Original images and videos are unchanged.

This remains a noindex public design demo. The replacement opening video remains excluded until William reviews it. No new UI/icon library, external font request, image generator, analytics or integration was added.

The static build also creates site-runtime.js from the preserved content, route catalog and application sources. One deferred entry script keeps those dependencies together and prevents partial initialization if separate script loading is interrupted. Edit the source files and rebuild; do not edit the generated runtime.
