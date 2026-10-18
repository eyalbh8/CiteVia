'use client';

import { criticalCss } from '@/generated/site-styles';

// SSR still puts the styles in <head>. The client boundary keeps the large font
// strings out of the duplicated RSC payload and lets subsequent pages cache them.
export default function CriticalStyles() {
  return <style data-citevia-critical dangerouslySetInnerHTML={{ __html: criticalCss }} />;
}
