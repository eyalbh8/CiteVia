import { ThankYouPage } from '@/components/arielos/Pages';
import { pageMetadata } from '@/lib/seo';
export const metadata = {
  ...pageMetadata({
    title: 'What happens next',
    description: 'Next steps for your private AI visibility assessment enquiry.',
    path: '/thank-you',
  }),
  robots: { index: false, follow: true },
};
export default function Page() {
  return (
    <div className="arielos-home">
      <ThankYouPage />
    </div>
  );
}
