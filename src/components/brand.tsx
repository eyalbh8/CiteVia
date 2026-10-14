import Image from 'next/image';
import Link from 'next/link';

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/" className={`brand${footer ? ' brand-footer' : ''}`} aria-label="Citevia home">
      <span className="brand-mark" aria-hidden="true">
        <Image
          className="brand-image brand-image-dark"
          src="/logo/citevia-logo-dark.png"
          alt=""
          width={1254}
          height={1254}
          sizes="90px"
        />
        <Image
          className="brand-image brand-image-light"
          src="/logo/citevia-mark-on-white.png"
          alt=""
          width={1254}
          height={1254}
          sizes="90px"
        />
      </span>
      <span>
        citevia<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
