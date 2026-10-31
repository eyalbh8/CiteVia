import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

// Compile the shared validator with the project's TypeScript version, including on Node 20.
const source = await readFile(new URL('../src/lib/contact.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
});
const { validateContact, validatePartnerReferral } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
);
const contact = {
  name: 'Mobile QA',
  email: 'qa@example.com',
  company: 'Example Company',
  website: '',
  interest: 'Something else',
  message: '',
  companyFax: '',
};

test('contact requests work with omitted, blank, and international phone numbers', () => {
  for (const phone of [undefined, '', ' +357 22 123456 ']) {
    const result = validateContact({ ...contact, phone });
    assert.equal(result.error, undefined);
    assert.equal(result.data.phone, (phone || '').trim());
  }
});

test('contact validation rejects invalid required fields and oversized phone numbers', () => {
  for (const change of [
    { name: '' },
    { email: 'invalid' },
    { company: '' },
    { phone: '1'.repeat(51) },
  ]) {
    assert.ok(validateContact({ ...contact, ...change }).error);
  }
});

test('assessment requests remain valid without the optional contact phone field', () => {
  const result = validateContact({
    ...contact,
    interest: 'Private AI visibility assessment',
    website: 'https://example.com',
    role: 'Founder / owner',
    industry: 'Private aviation',
    markets: 'Cyprus',
  });
  assert.equal(result.error, undefined);
  assert.equal(result.data.role, 'Founder / owner');
  assert.equal(result.data.phone, '');
});

const referral = {
  name: 'Alex Partner',
  email: 'partner@example.com',
  leadCompany: 'Example Lead',
  leadName: 'Jordan Client',
  leadEmail: 'lead@example.com',
  notes: 'Interested in SEO.',
  companyFax: '',
};

test('referrals preserve partner attribution and lead details in the contact delivery payload', () => {
  const { data, error } = validatePartnerReferral(referral);
  assert.equal(error, undefined);
  assert.equal(data.name, referral.name);
  assert.equal(data.email, referral.email);
  assert.equal(data.company, referral.leadCompany);
  assert.equal(data.interest, 'Partner referral');
  for (const detail of [referral.leadName, referral.leadEmail, referral.notes])
    assert.ok(data.message.includes(detail));
  assert.equal(validateContact(data).error, undefined);
});

test('referrals reject missing lead details, invalid email, and oversized context', () => {
  for (const change of [
    { leadName: '' },
    { leadCompany: '' },
    { leadEmail: 'invalid' },
    { email: 'invalid' },
    { notes: 'x'.repeat(1501) },
  ])
    assert.ok(validatePartnerReferral({ ...referral, ...change }).error);
  assert.equal(validatePartnerReferral({ ...referral, notes: '' }).error, undefined);
});
