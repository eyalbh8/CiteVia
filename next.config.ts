import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index-light.html', destination: '/', permanent: true },
      { source: '/light', destination: '/', permanent: true },
      { source: '/approach', destination: '/methodology', permanent: true },
      { source: '/services/technical-seo', destination: '/services/seo', permanent: true },
      {
        source: '/services/content-and-comparison-pages',
        destination: '/services/content-creation',
        permanent: true,
      },
      {
        source: '/services/authority-and-digital-pr',
        destination: '/services/strategic-pr-placement',
        permanent: true,
      },
      {
        source: '/services/conversion-landing-pages',
        destination: '/services/conversion-rate-optimization',
        permanent: true,
      },
      { source: '/insights', destination: '/blog', permanent: true },
      { source: '/insights/:slug', destination: '/blog/:slug', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Link', value: '</llms.txt>; rel="describedby"' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
