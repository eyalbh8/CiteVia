'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteStyles({ href }: { href: string }) {
  const pathname = usePathname();
  const link = useRef<HTMLLinkElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [transitionsReady, setTransitionsReady] = useState(false);
  useEffect(() => {
    // A cached stylesheet may finish before React installs its load handler.
    if (link.current?.sheet) setLoaded(true);
  }, [href]);
  useEffect(() => {
    if (!loaded) return;
    // Apply the complete styles before enabling transitions. Otherwise every
    // below-fold border/color animates from its unstyled state during startup.
    let secondFrame: number;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => setTransitionsReady(true));
    });
    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [loaded]);
  return (
    <>
      {!transitionsReady && (
        <style>
          {
            '.arielos-home *,.arielos-home *::before,.arielos-home *::after{transition:none!important}'
          }
        </style>
      )}
      <link
        ref={link}
        rel="stylesheet"
        href={href}
        media={loaded || pathname !== '/' ? 'all' : 'print'}
        onLoad={() => setLoaded(true)}
      />
      <noscript>
        <link rel="stylesheet" href={href} />
      </noscript>
    </>
  );
}
