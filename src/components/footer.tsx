import Link from 'next/link';
import { Brand } from './brand';
import { site } from '@/lib/site';
import { primaryServices } from '@/content/services';
import { industries } from '@/content/industries';
import { ArrowIcon } from './icons';
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Brand footer />
              <p>
                Clarity for your buyers.
                <br />
                Visibility for your brand.
              </p>
              <a href={`mailto:${site.email}`} className="footer-email">
                {site.email}
                <ArrowIcon />
              </a>
            </div>
            <div>
              <h2>Explore</h2>
              <Link href="/blog">Blog</Link>
              <Link href="/case-studies">Example case studies</Link>
              <Link href="/methodology">Methodology</Link>
              <Link href="/solutions">B2B solutions</Link>
              <Link href="/about">About Citevia</Link>
              <Link href="/resources">Resources & glossary</Link>
              <Link href="/ai-info">Company facts</Link>
            </div>
            <div>
              <h2>Services</h2>
              {primaryServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  {s.shortName}
                </Link>
              ))}
              <Link href="/services">All services ↗</Link>
            </div>
            <div>
              <h2>Industries</h2>
              {industries.map((i) => (
                <Link key={i.slug} href={`/industries/${i.slug}`}>
                  {i.name}
                </Link>
              ))}
              <Link href="/industries">All industries ↗</Link>
            </div>
            <div>
              <h2>Enquiries</h2>
              <Link href="/private-ai-visibility-assessment">Private assessment</Link>
              <Link href="/contact">Contact Citevia</Link>
              <a href={`mailto:${site.email}`}>Email our team ↗</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getUTCFullYear()} Citevia. All rights reserved.</span>
            <div>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="/sitemap.xml">Sitemap</a>
              <a href="/robots.txt">Robots</a>
              <a href="/llms.txt">LLM index</a>
            </div>
            <span className="footer-signoff">
              <span className="signal-dot" />
              Built for the next era of search.
            </span>
          </div>
        </div>
      </footer>
      <Link className="floating-booking" href="/private-ai-visibility-assessment">
        <span aria-hidden="true">▣</span>Private assessment <ArrowIcon />
      </Link>
    </>
  );
}
