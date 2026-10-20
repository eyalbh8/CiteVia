"""Regenerate checked-in first-screen fonts with fonttools[woff]==4.60.1.

This is an asset-maintenance command, not part of the production build.
Run from the repository root after installing FontTools in a temporary venv.
"""
from pathlib import Path
import json
from fontTools import subset
from fontTools.ttLib import TTFont

ascii = list(range(32, 127)) + [0xA0, 0xB7, 0x2014, 0x2019, 0x2192]
# Spanish and Turkish text is translated in the browser, so the accented letters
# it uses must be embedded too; otherwise capitals such as Ó and É paint in the
# metric-adjusted fallback face while the surrounding ASCII paints in the brand face.
latin1 = [0xA1, 0xAB, 0xBB, 0xBF] + list(range(0xC0, 0xD7)) + list(range(0xD8, 0xF7)) + list(range(0xF8, 0x100))
punctuation = [0x131, 0x2013, 0x2018, 0x201C, 0x201D, 0x2026, 0x20AC]
characters = ascii + latin1 + punctuation
# Ğ ğ İ Ş ş live in the Latin Extended-A block, which the fontsource "latin" files omit.
turkish = [0x11E, 0x11F, 0x130, 0x15E, 0x15F]
sources = [
    ("Citevia Open Sauce", 400, "public/fonts/arielos/open-sauce-one-latin-400-normal.woff2", "open-sauce-latin-400.woff2", characters + turkish),
    ("Citevia Instrument", 400, "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2", "instrument-serif-latin-400.woff2", characters),
    ("Citevia Instrument", 400, "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-ext-400-normal.woff2", "instrument-serif-turkish-400.woff2", turkish),
    ("Citevia Poppins", 600, "public/fonts/arielos/poppins-latin-600-normal.woff2", "poppins-latin-600.woff2", characters),
    ("Citevia Poppins", 600, "node_modules/@fontsource/poppins/files/poppins-latin-ext-600-normal.woff2", "poppins-turkish-600.woff2", turkish),
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
