'use client';

import BookMeeting from './BookMeeting.jsx';
import { Link } from './Link.jsx';

export default function FloatingCal() {
  return (
    <nav className="floating-contact" aria-label="Contact and booking">
      <Link className="floating-contact__link" to="/contact">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4 7 8 6 8-6" />
        </svg>
        <span>Contact us</span>
      </Link>
      <BookMeeting
        className="floating-cal"
        placement="floating"
        aria-label="Book on Cal.com (opens in a new tab)"
      >
        <span className="floating-cal__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="16" rx="3" />
            <path d="M3 9h18M8 3v4M16 3v4" />
          </svg>
        </span>
        <span className="floating-cal__label">Book on Cal.com</span>
      </BookMeeting>
    </nav>
  );
}
