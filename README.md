# Zyqon.io — website

Marketing site for Zyqon.io, a Generative Engine Optimization (GEO) agency. Single-page, no build tooling beyond Python.

## Files

| Path | What it is |
|---|---|
| `template.html` | The single source for the site. Edit this. |
| `build.py` | Generates `index.html` (dark-first) and `index-light.html` (light-first) from the template. |
| `index.html`, `index-light.html` | Generated output. Do not edit by hand. |
| `serve.js` | Local preview server. |
| `logo/` | Logo mark and lockups (SVG + PNG) and `export.html`, which re-renders the PNGs. |
| `BRIEF.md` | Copy, palette, type and logo brief. |

## Edit and preview

```bash
python3 build.py
node serve.js
```

Then open http://localhost:8766 (dark) or http://localhost:8766/light.

The generated pages are written in the Claude artifact format (no `<html>`/`<head>` wrapper); `serve.js` adds the wrapper on the fly. For any other host, prepend a standard HTML skeleton with a viewport meta.
