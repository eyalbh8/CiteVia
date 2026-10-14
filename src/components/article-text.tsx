import Link from 'next/link';
import { Fragment } from 'react';
import { parseArticleText } from '@/lib/article-text';

export function ArticleText({ children }: { children: string }) {
  return parseArticleText(children).map((part, index) => {
    if (!part.href) return <Fragment key={index}>{part.text}</Fragment>;
    return part.href.startsWith('/') ? (
      <Link href={part.href} key={index}>
        {part.text}
      </Link>
    ) : (
      <a href={part.href} key={index}>
        {part.text}
      </a>
    );
  });
}
