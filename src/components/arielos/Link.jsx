'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';

// Small adapter keeps the supplied source's links while using the Next.js router.
export const Link = forwardRef(function Link({ to, href, children, ...props }, ref) {
  return (
    <NextLink href={href || to} ref={ref} {...props}>
      {children}
    </NextLink>
  );
});
export function NavLink({ to, end, className, children, ...props }) {
  const pathname = usePathname();
  const isActive = end ? pathname === to : pathname === to || pathname.startsWith(to + '/');
  return (
    <Link
      to={to}
      className={typeof className === 'function' ? className({ isActive }) : className}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
export function useLocation() {
  return { pathname: usePathname(), hash: '' };
}
