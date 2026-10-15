'use client';

import { useEffect, useState } from 'react';
import { HomeSettings } from './settings.jsx';
import { LanguageProvider } from '@/i18n/LanguageProvider.jsx';
import Nav from './Nav.jsx';
import { usePathname } from 'next/navigation';
import Footer from './Footer.jsx';
import FloatingCal from './FloatingCal.jsx';

function ScrollEffects() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
      });
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
    };
  }, [pathname]);
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.add('is-in');
          observer.unobserve(target);
        });
      },
      { rootMargin: '0px 0px -5% 0px' },
    );
    document
      .querySelectorAll(
        '.arielos-home .section-header, .arielos-home .market-stats li, .arielos-home .industry-card, .arielos-home .service-row, .arielos-home .research-card, .arielos-home .contact-lead__layout > *, .arielos-home .page-card',
      )
      .forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add('reveal');
        observer.observe(el);
      });
    return () => observer.disconnect();
  }, [pathname]);
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ height: `${progress * 100}%` }} />
    </div>
  );
}

export default function SiteExperience({ email, bookingUrl, directDelivery, children }) {
  return (
    <LanguageProvider>
      <HomeSettings.Provider value={{ email, bookingUrl, directDelivery }}>
        <div className="arielos-home arielos-chrome">
          <ScrollEffects />
          <Nav />
        </div>
        <main id="main-content" className="site-main" tabIndex={-1}>
          {children}
        </main>
        <div className="arielos-home arielos-chrome">
          <Footer />
          <FloatingCal />
        </div>
      </HomeSettings.Provider>
    </LanguageProvider>
  );
}
