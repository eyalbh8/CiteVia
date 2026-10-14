export type InlinePart = { text: string; href?: string };

// Editorial copy supports Markdown links only. React renders all other text literally.
export function parseArticleText(value: string): InlinePart[] {
  const parts: InlinePart[] = [];
  const links = /\[([^\]\n]+)\]\(([^\s)]+)\)/g;
  let offset = 0;

  for (const match of value.matchAll(links)) {
    const index = match.index!;
    if (index > offset) parts.push({ text: value.slice(offset, index) });
    const [, text, href] = match;
    const internal = href.startsWith('/') && !href.startsWith('//');
    let external = false;
    try {
      const url = new URL(href);
      external = ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password;
    } catch {
      // Relative paths are handled separately.
    }
    const allowed = (internal || external) && !/[\\\u0000-\u0020]/.test(href);
    parts.push(allowed ? { text, href } : { text });
    offset = index + match[0].length;
  }
  if (offset < value.length) parts.push({ text: value.slice(offset) });
  return parts;
}

export function articlePlainText(value: string) {
  return parseArticleText(value)
    .map((part) => part.text)
    .join('');
}
