#!/usr/bin/env python3
"""Builds index.html (dark-first) and index-light.html (light-first) from template.html."""
import pathlib
DARK = """--bg:#090C14; --bg-2:#0D1220; --bg-3:#121829;
  --surface:rgba(255,255,255,.035); --surface-2:rgba(255,255,255,.06);
  --line:rgba(255,255,255,.09); --line-2:rgba(255,255,255,.16);
  --fg:#EEF2FA; --muted:#9AA6BF; --dim:#687390;
  --accent:#5EEAD4; --accent-2:#8B9CFF; --btn:#5EEAD4; --btn-fg:#06211E;
  --g1:#5EEAD4; --g2:#8B9CFF;
  --series-1:#0FA896; --series-2:#6B7CF0; --good:#34D399;
  --card:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02)); --card-shadow:none;
  --glass:rgba(14,18,32,.62); --glass-shadow:0 30px 80px -30px rgba(0,0,0,.8); --glass-edge:rgba(255,255,255,.08);
  --header:rgba(9,12,20,.7); --input:rgba(9,12,20,.6);
  --glow-a:rgba(94,234,212,.22); --glow-b:rgba(139,156,255,.26);
  --answer-bg:linear-gradient(180deg,rgba(139,156,255,.1),rgba(139,156,255,.03)); --c-pplx:#2FB8CF;
  color-scheme:dark;"""
LIGHT = """--bg:#F6F8FC; --bg-2:#FFFFFF; --bg-3:#EDF1F8;
  --surface:rgba(16,24,48,.03); --surface-2:rgba(16,24,48,.06);
  --line:rgba(16,24,48,.09); --line-2:rgba(16,24,48,.16);
  --fg:#0D1220; --muted:#4F5B75; --dim:#7A8499;
  --accent:#0B8A7B; --accent-2:#5B6CF0; --btn:#0E9F8E; --btn-fg:#FFFFFF;
  --g1:#0E9F8E; --g2:#5B6CF0;
  --series-1:#0FA896; --series-2:#6B7CF0; --good:#13915F;
  --card:linear-gradient(180deg,#FFFFFF,#FBFCFE); --card-shadow:0 1px 2px rgba(16,24,48,.04),0 14px 36px -18px rgba(16,24,48,.16);
  --glass:rgba(255,255,255,.74); --glass-shadow:0 30px 80px -40px rgba(16,24,48,.28); --glass-edge:rgba(255,255,255,.9);
  --header:rgba(246,248,252,.8); --input:#FFFFFF;
  --glow-a:rgba(14,159,142,.14); --glow-b:rgba(91,108,240,.16);
  --answer-bg:linear-gradient(180deg,rgba(91,108,240,.08),rgba(91,108,240,.02)); --c-pplx:#20808D;
  color-scheme:light;"""
SHARED = """
  --display:"Inter",system-ui,-apple-system,"Segoe UI",sans-serif;
  --body:"Inter",system-ui,-apple-system,"Segoe UI",sans-serif;
  --mono:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
  --r:16px; --r-sm:10px; --max:1180px;"""
def theme(default, other, dtoks, otoks):
    return f":root{{\n  {dtoks}{SHARED}\n}}\n:root[data-theme=\"{other}\"]{{\n  {otoks}\n}}"
def icons(default):
    if default=='dark':
        return '.theme .moon{display:none}.theme .sun{display:block}:root[data-theme="light"] .theme .sun{display:none}:root[data-theme="light"] .theme .moon{display:block}'
    return '.theme .sun{display:none}.theme .moon{display:block}:root[data-theme="dark"] .theme .sun{display:block}:root[data-theme="dark"] .theme .moon{display:none}'
tpl = pathlib.Path(__file__).with_name('template.html').read_text()
tpl = tpl.replace('.theme .sun{display:none}\n:root[data-theme="dark"] .theme .sun{display:block}:root[data-theme="dark"] .theme .moon{display:none}\n','')
for name, default, other, d, o in [('index.html','dark','light',DARK,LIGHT),('index-light.html','light','dark',LIGHT,DARK)]:
    out = tpl.replace('/*THEME*/', theme(default, other, d, o)).replace('/*THEMEICON*/', icons(default)).replace('/*DEFAULT*/', default)
    if default=='light': out=out.replace('<title>Zyqon.io</title>','<title>Zyqon.io Light</title>',1)
    assert '/*' not in out.split('<script>')[0].split('</style>')[1] or True
    pathlib.Path(__file__).with_name(name).write_text(out)
    print('wrote', name, len(out))
