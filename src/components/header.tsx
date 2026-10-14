'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Brand } from './brand';

export function Header({
  links,
  services,
  bookingUrl,
}: {
  links: { href: string; label: string }[];
  services: { href: string; label: string }[];
  bookingUrl: string;
}) {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (menu.current) menu.current.open = false;
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    function close(event: PointerEvent) {
      if (!dropdown.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);
  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('citevia-theme', theme);
    } catch {}
  }
  const navLinks = links.map((link) => (
    <Link
      href={link.href}
      key={link.href}
      aria-current={pathname === link.href ? 'page' : undefined}
    >
      {link.label}
    </Link>
  ));
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/blog">Insights</Link>
          <div
            className="service-nav"
            ref={dropdown}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setOpen(false);
                trigger.current?.focus();
              }
            }}
          >
            <div className="service-nav-trigger">
              <Link
                href="/services"
                aria-current={pathname.startsWith('/services') ? 'page' : undefined}
              >
                Services
              </Link>
              <button
                ref={trigger}
                aria-label="Show service pages"
                aria-expanded={open}
                aria-controls="service-menu"
                onClick={() => setOpen(!open)}
              >
                <span aria-hidden="true" className={open ? 'chevron open' : 'chevron'}>
                  ⌄
                </span>
              </button>
            </div>
            {open && (
              <div className="service-dropdown" id="service-menu">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setOpen(false)}>
                    {s.label}
                  </Link>
                ))}
                <Link className="all-services-link" href="/services" onClick={() => setOpen(false)}>
                  All services <span>↗</span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/methodology">Methodology</Link>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            aria-label="Toggle light or dark theme"
            onClick={toggleTheme}
          >
            <span className="sun-icon" aria-hidden="true">
              ☀
            </span>
            <span className="moon-icon" aria-hidden="true">
              ☾
            </span>
          </button>
          <a className="button button-small button-primary header-cta" href={bookingUrl}>
            Private assessment <span aria-hidden="true">↗</span>
          </a>
          <details
            className="mobile-menu"
            ref={menu}
            onKeyDown={(event) => {
              if (event.key === 'Escape' && menu.current) {
                menu.current.open = false;
                menu.current.querySelector('summary')?.focus();
              }
            }}
          >
            <summary aria-label="Navigation menu">
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              {navLinks}
              <div className="mobile-service-links">
                <span>Services</span>
                {services.map((s) => (
                  <Link key={s.href} href={s.href}>
                    {s.label}
                  </Link>
                ))}
              </div>
              <Link href="/industries">Industries</Link>
              <Link href="/case-studies">Case studies</Link>
              <Link href="/private-ai-visibility-assessment">Private assessment ↗</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
