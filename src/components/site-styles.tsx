'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteStyles({ href }: { href: string }) {
  const pathname = usePathname();
  const link = useRef<HTMLLinkElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // A cached stylesheet may finish before React installs its load handler.
    if (link.current?.sheet) setLoaded(true);
  }, [href]);
  return (
    <>
      <link
        ref={link}
        data-citevia-styles=""
        suppressHydrationWarning
        rel="stylesheet"
        href={href}
        media={loaded || pathname !== '/' ? 'all' : 'print'}
        onLoad={() => setLoaded(true)}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(()=>{const l=document.querySelector('link[data-citevia-styles]');if(!l)return;const apply=()=>{l.media='all'};if(l.sheet)apply();else l.addEventListener('load',apply,{once:true})})()`,
        }}
      />
      <noscript>
        <link rel="stylesheet" href={href} />
      </noscript>
    </>
  );
}
