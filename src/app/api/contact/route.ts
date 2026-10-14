import { NextRequest, NextResponse } from 'next/server';
import { validateContact } from '@/lib/contact';
import { site } from '@/lib/site';

export const runtime = 'nodejs';
const MAX_BYTES = 16000;

function error(message: string, status: number) {
  return NextResponse.json(
    { error: message },
    { status, headers: { 'Cache-Control': 'no-store' } },
  );
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (!origin || (origin !== request.nextUrl.origin && origin !== site.url))
    return error('This request must be sent from the Citevia website.', 403);
  if (!request.headers.get('content-type')?.includes('application/json'))
    return error('Unsupported request format.', 415);
  if (Number(request.headers.get('content-length')) > MAX_BYTES)
    return error('Your message is too long.', 413);

  let input: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return error('Please provide your contact details.', 400);
    const decoder = new TextDecoder();
    let bytes = 0;
    let text = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BYTES) {
        await reader.cancel();
        return error('Your message is too long.', 413);
      }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
    input = JSON.parse(text);
  } catch {
    return error('We could not read your request. Please try again.', 400);
  }

  const result = validateContact(input);
  if (result.error || !result.data) return error(result.error || 'Please check your details.', 400);
  if (result.data.companyFax)
    return error('Your request could not be accepted. Please email us directly.', 400);

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint)
    return error(`Direct delivery is not configured. Please email ${site.email}.`, 503);
  let webhook: URL;
  try {
    webhook = new URL(endpoint);
    if (webhook.protocol !== 'https:' || webhook.username || webhook.password) throw new Error();
  } catch {
    return error(`Direct delivery is unavailable. Please email ${site.email}.`, 503);
  }

  try {
    const { companyFax: _honeypot, ...contact } = result.data;
    const response = await fetch(webhook, {
      method: 'POST',
      redirect: 'error',
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.CONTACT_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        ...contact,
        source: 'citevia-contact',
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!response.ok)
      return error(`Delivery could not be confirmed. Please email ${site.email}.`, 502);
    return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return error(`Delivery could not be confirmed. Please email ${site.email}.`, 502);
  }
}
