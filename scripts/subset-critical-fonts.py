"""Regenerate checked-in first-screen fonts with fonttools[woff]==4.60.1.

This is an asset-maintenance command, not part of the production build.
Run from the repository root after installing FontTools in a temporary venv.
"""
from pathlib import Path
import json
from fontTools import subset
from fontTools.ttLib import TTFont

characters = list(range(32, 127)) + [0xA0, 0xB7, 0x2014, 0x2019, 0x2192]
sources = [
    ("Citevia Open Sauce", 400, "public/fonts/arielos/open-sauce-one-latin-400-normal.woff2", "open-sauce-ascii-400.woff2", characters),
    ("Citevia Instrument", 400, "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2", "instrument-serif-heading-400.woff2", sorted(set(map(ord, "AI Search Marketing Infrastructure.")))),
    ("Citevia Poppins", 600, "public/fonts/arielos/poppins-latin-600-normal.woff2", "poppins-ascii-600.woff2", characters),
]
destination = Path("public/fonts/critical")
destination.mkdir(parents=True, exist_ok=True)
manifest = []
for family, weight, source, filename, codepoints in sources:
    font = TTFont(source)
    options = subset.Options()
    options.flavor = "woff2"
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=codepoints)
    subsetter.subset(font)
    font.save(destination / filename)
    manifest.append({
        "family": family, "weight": weight, "file": filename,
        "unicodeRange": ",".join(f"U+{codepoint:X}" for codepoint in sorted(font.getBestCmap())),
    })
(destination / "subsets.json").write_text(json.dumps(manifest, indent=2) + "\n")
