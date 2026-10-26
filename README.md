# Serenité website redesign demo

A complete static copy of the Serenité Wellness Medicine redesign demo, recovered from Vercel deployment `8yAXSNHEd7sZ45yeHXWCCHMRXEJS` on October 26, 2026.

- Three design versions: Atelier, Clinic and Gold Hour.
- Forty selectable pages covering treatments, programs, clinic information and team profiles.
- All 188 image files and 14 video files from the source tree.
- Original HTML, CSS, JavaScript, crawler rules and Vercel configuration.

## Run locally

From this repository folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [the local demo](http://127.0.0.1:8000/). No package installation or build step is required.

Use the controls at the top to choose a design version and page. Keep the `img/` and `video/` folders beside `index.html`.

## Recovery checks

All 205 original source files are present. Every raster image decoded, both SVG files parsed, and all 14 videos passed full audio/video decoding. JavaScript syntax and embedded JSON parsing passed. All 120 combinations of page and design version opened locally. `ASSET-MANIFEST.json` records source file sizes and SHA-256 hashes.

The original `index.html` is unchanged. The two configuration files preserve the text shown in Vercel; their original trailing newline was not established. No clinic content, prices, claims, testimonials or design details were revised.

## Demo limits

This is a design and content demo. Clinical accuracy, organizational details, media rights and production authorization have not been independently verified by this recovery. Existing booking, account, store and contact links retain their original destinations or demo behavior. No live form submission or clinic integration was tested.

The original layout has some horizontal overflow at tablet and mobile widths. The source remains intact for review. Crawler rules still request no indexing; those rules do not restrict access to this public repository. Vercel authentication settings were not changed.
