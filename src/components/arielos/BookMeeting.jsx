import { Link } from './Link.jsx';
import { useHomeSettings } from './settings.jsx';

export default function BookMeeting({
  className = 'button button--primary',
  placement,
  children,
  ...props
}) {
  const { bookingUrl } = useHomeSettings();
  return (
    <Link className={className} to={bookingUrl} {...props}>
      {children}
    </Link>
  );
}
