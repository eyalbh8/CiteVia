import { Link } from './Link.jsx';
import { useHomeSettings } from './settings.jsx';

export default function BookMeeting({
  className = 'button button--primary',
  placement,
  children,
  ...props
}) {
  const { bookingUrl } = useHomeSettings();
  const external = /^https?:\/\//.test(bookingUrl);
  return (
    <Link
      className={className}
      to={bookingUrl}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
