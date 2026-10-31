export const contactInterests = [
  'AI visibility audit',
  'Private AI visibility assessment',
  'GEO strategy',
  'Content and technical SEO',
  'Ongoing GEO support',
  'Partner referral',
  'Something else',
] as const;
export type ContactInput = {
  role: string;
  industry: string;
  markets: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  interest: string;
  message: string;
  companyFax: string;
};

export function validateContact(input: unknown): { data?: ContactInput; error?: string } {
  if (!input || typeof input !== 'object' || Array.isArray(input))
    return { error: 'Please provide your contact details.' };
  const raw = input as Record<string, unknown>;
  const fields = [
    'name',
    'email',
    'company',
    'website',
    'interest',
    'message',
    'companyFax',
  ] as const;
  const result = {} as ContactInput;
  for (const field of fields) {
    if (typeof raw[field] !== 'string') return { error: 'Please complete the required fields.' };
    result[field] = raw[field].trim();
  }
  for (const field of ['role', 'industry', 'markets'] as const) {
    const value = raw[field] ?? '';
    if (typeof value !== 'string' || value.length > 200)
      return { error: 'Please keep role, industry, and market details under 200 characters each.' };
    result[field] = value.trim();
  }
  const phone = raw.phone ?? '';
  if (typeof phone !== 'string' || phone.trim().length > 50)
    return { error: 'Please keep your phone number under 50 characters.' };
  result.phone = phone.trim();
  if (result.name.length < 2 || result.name.length > 100)
    return { error: 'Please enter a name between 2 and 100 characters.' };
  if (result.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.email))
    return { error: 'Please enter a valid email address.' };
  if (result.company.length < 2 || result.company.length > 150)
    return { error: 'Please enter your company name (2–150 characters).' };
  if (result.website.length > 500) return { error: 'Please enter a shorter website URL.' };
  if (result.website) {
    try {
      const url = new URL(result.website);
      if (
        !['http:', 'https:'].includes(url.protocol) ||
        !url.hostname.includes('.') ||
        url.username ||
        url.password
      )
        throw new Error();
    } catch {
      return { error: 'Enter a complete website address, such as https://example.com.' };
    }
  }
  if (!(contactInterests as readonly string[]).includes(result.interest))
    return { error: 'Please choose what you would like help with.' };
  if (result.message.length > 3000)
    return { error: 'Please keep your message under 3,000 characters.' };
  return { data: result };
}

export function validatePartnerReferral(input: Record<string, unknown>) {
  const leadCompany = typeof input.leadCompany === 'string' ? input.leadCompany.trim() : '';
  const leadName = typeof input.leadName === 'string' ? input.leadName.trim() : '';
  const leadEmail = typeof input.leadEmail === 'string' ? input.leadEmail.trim() : '';
  const notes = typeof input.notes === 'string' ? input.notes.trim() : '';
  if (leadCompany.length < 2 || leadCompany.length > 150)
    return { error: 'Please enter the lead’s company name (2–150 characters).' };
  if (leadName.length < 2 || leadName.length > 100)
    return { error: 'Please enter the lead’s contact name (2–100 characters).' };
  if (leadEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadEmail))
    return { error: 'Please enter a valid email address for the lead.' };
  if (notes.length > 1500) return { error: 'Please keep referral notes under 1,500 characters.' };
  return validateContact({
    name: input.name,
    email: input.email,
    company: leadCompany,
    companyFax: input.companyFax,
    website: '',
    interest: 'Partner referral',
    message: `Partner referral\n\nLead contact: ${leadName}\nLead email: ${leadEmail}${notes ? `\n\nReferral notes:\n${notes}` : ''}`,
  });
}
