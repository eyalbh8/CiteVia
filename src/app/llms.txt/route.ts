import { llmsIndex, textHeaders } from '@/lib/llms';
export const dynamic = 'force-static';
export function GET() {
  return new Response(llmsIndex(), { headers: textHeaders });
}
