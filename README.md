# docs/public — the static marketing site (cformly.com)

Plain HTML/CSS/JS, served by GitHub Pages from this directory. No build
framework, no dependencies.

## Per-language pages (roadmap 93)

`<lang>/index.html`, `<lang>/setup.html`, `<lang>/privacy.html`,
`<lang>/trust.html`, and `<lang>/form-c.html` (for the 11 non-English
locales) are **generated** — do not edit them by hand. They are the
server-rendered equivalents of what `app.js` does at runtime: the locale's
translations are applied to the `data-i18n` markup ahead of time, so
search engines see the Indic content and visitors get real per-language
URLs with full hreflang clusters. They carry no `app.js` and no
all-languages dict payload — only a tiny language-menu script.

`compress.html`, `ext.html`, `terms.html`, and `hotel-registration.html`
are root-only and use the runtime picker (all 12 languages, applied
client-side by `app.js`), the same posture as before the generator existed.
`hotel-registration.html` (roadmap 59) is root-only because the CI bundle
budget (~2200 KB, currently near it) cannot fit an 11th page × 12 locales;
promote it to PAGES in `scripts/build-site.mjs` only if the budget allows.

## Regenerate after edits

From the repo root:

```sh
node scripts/build-site.mjs
```

(or `node ../../scripts/build-site.mjs` from inside this directory).

Run it after ANY edit to `*.html` here or to any `i18n/*.js` dict, and
commit the regenerated files together with the edit — `sitemap.xml` is
regenerated too.

The build **fails** if a `data-i18n`-referenced key is missing from any
locale dict (the parity gate), so a half-translated page can never ship.

## Rules this site keeps

- Static only: no trackers, no analytics, no server.
- Personal data never touches this site (on-device only, DPDP Act 2023).
- Every factual claim traces to in-repo copy; new claims cite their
  source in an HTML comment.
