import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function brandIcon(size: number) {
  const image = await readFile(join(process.cwd(), 'public/logo/citevia-mark-on-white.png'));
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: size,
        height: size,
        background: 'white',
        borderRadius: size * 0.18,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img
        alt=""
        src={`data:image/png;base64,${image.toString('base64')}`}
        width={size * 1.25}
        height={size * 1.25}
        style={{ position: 'absolute', left: -size * 0.142, top: -size * 0.12 }}
      />
    </div>,
    { width: size, height: size },
  );
}
