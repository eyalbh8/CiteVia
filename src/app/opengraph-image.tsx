import { ImageResponse } from 'next/og';

export const alt = 'Citevia — When buyers ask AI, be the answer.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '62px 75px',
        color: '#151940',
        background: 'linear-gradient(125deg, #ffffff 30%, #eaf2ff 100%)',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 34, letterSpacing: '-1px' }}>
        citevia<span style={{ color: '#00b8dd' }}>.</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 76,
          lineHeight: 1.1,
          letterSpacing: '-3px',
          fontWeight: 700,
        }}
      >
        <span>When buyers ask AI,</span>
        <span style={{ color: '#3930e9' }}>be the answer.</span>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', fontSize: 19, color: '#545d7c' }}
      >
        <span>GEO · Content · Technical SEO · Measurement</span>
        <span>CITEVIA</span>
      </div>
    </div>,
    size,
  );
}
