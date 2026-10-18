"""Regenerate checked-in first-screen fonts with fonttools[woff]==4.60.1.

This is an asset-maintenance command, not part of the production build.
Run from the repository root after installing FontTools in a temporary venv.
"""
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

sources = {
    "public/fonts/arielos/open-sauce-one-latin-400-normal.woff2": "open-sauce-ascii-400.woff2",
    "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2": "instrument-serif-ascii-400.woff2",
}
characters = list(range(32, 127)) + [0xA0, 0xB7, 0x2014, 0x2019, 0x2192]
destination = Path("public/fonts/critical")
destination.mkdir(parents=True, exist_ok=True)
for source, filename in sources.items():
    font = TTFont(source)
    options = subset.Options()
    options.flavor = "woff2"
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=characters)
    subsetter.subset(font)
    font.save(destination / filename)
