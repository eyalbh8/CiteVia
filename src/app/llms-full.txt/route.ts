import { llmsFullText, textHeaders } from '@/lib/llms';
export const dynamic = 'force-static';
export function GET() {
  return new Response(llmsFullText(), { headers: textHeaders });
}
