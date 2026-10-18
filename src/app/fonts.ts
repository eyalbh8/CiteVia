import localFont from 'next/font/local';

export const openSauce = localFont({
  src: [
    {
      path: '../../public/fonts/arielos/open-sauce-one-latin-300-normal.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/arielos/open-sauce-one-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/arielos/open-sauce-one-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/arielos/open-sauce-one-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/arielos/open-sauce-one-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/arielos/open-sauce-one-latin-800-normal.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/arielos/open-sauce-one-latin-900-normal.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-open-sauce',
  display: 'swap',
  preload: false,
});

export const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/arielos/poppins-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/arielos/poppins-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/arielos/poppins-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
  preload: false,
});

export const instrument = localFont({
  src: [
    {
      path: '../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-instrument',
  display: 'swap',
  preload: true,
  adjustFontFallback: 'Times New Roman',
});
