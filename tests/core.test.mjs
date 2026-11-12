import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidPhone } from '../lib/form-validation.ts';

const makeWindow = (search = '', saved = null) => {
  let value = saved;
  return { location: { pathname: '/', search }, sessionStorage: {
    getItem() { return value; }, setItem(_key, next) { value = next; },
  } };
};
let instance = 0;
const attribution = () => import(`../lib/attribution.ts?test=${instance++}`);

test('accepts Brazilian landlines, mobiles and country codes; rejects incomplete/repeated phones', () => {
  for (const phone of ['(21) 99999-9999', '+55 21 99999-9999', '1132345678', '21996452396']) assert.equal(isValidPhone(phone), true, phone);
  for (const phone of ['', '123', '11111111111', '00999999999', '2191234567', '2199999999999999', 'a21999999999', '++5521999999999']) assert.equal(isValidPhone(phone), false, phone);
});

test('campaign attribution survives navigation and keeps first touch separately', async () => {
  global.window = makeWindow('?utm_source=instagram&utm_campaign=lancamento&email=private');
  const mod = await attribution();
  mod.captureAttribution();
  window.location = { pathname: '/demonstracao', search: '' };
  assert.equal(mod.attributionFields().utm_campaign, 'lancamento');
  assert.equal(mod.attributionFields().landing_page, '/');
  assert.equal(mod.attributionFields().conversion_page, '/demonstracao');
  window.location.search = '?utm_source=google&utm_campaign=busca';
  const data = mod.attributionFields();
  assert.equal(data.utm_source, 'google');
  assert.equal(data.first_utm_source, 'instagram');
  assert.ok(!JSON.stringify(data).includes('private'));
  assert.ok(!window.sessionStorage.getItem().includes('email'));
});

test('campaign values are bounded and malformed storage does not break forms', async () => {
  global.window = makeWindow(`?utm_source=${'x'.repeat(500)}`, '{broken');
  const mod = await attribution();
  assert.equal(mod.attributionFields().utm_source.length, 200);
});

test('blocked storage falls back to memory across route changes', async () => {
  global.window = makeWindow('?utm_source=referral');
  window.sessionStorage = { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); } };
  const mod = await attribution();
  mod.captureAttribution();
  window.location = { pathname: '/demonstracao', search: '' };
  assert.equal(mod.attributionFields().utm_source, 'referral');
});

test('expired session starts fresh rather than attributing a later lead to an old campaign', async () => {
  const campaign = { utm_source: 'old', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '' };
  global.window = makeWindow('', JSON.stringify({ first: campaign, last: campaign, landing_page: '/', updated: Date.now() - 31 * 60 * 1000 }));
  const mod = await attribution();
  assert.equal(mod.attributionFields().utm_source, '');
});

test('attribution is safe during server rendering', async () => {
  delete global.window;
  const mod = await attribution();
  assert.equal(mod.captureAttribution(), null);
  assert.equal(mod.attributionFields().conversion_page, '');
});

test('site URL is centralized, normalized, and used to resolve public assets', async () => {
  const previous = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://commercial.example.com/path/?test=1';
    const mod = await import('../lib/site.ts?test=custom');
    assert.equal(mod.SITE_URL, 'https://commercial.example.com');
    assert.equal(mod.siteUrl('/og-image.png'), 'https://commercial.example.com/og-image.png');
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
    else process.env.NEXT_PUBLIC_SITE_URL = previous;
  }
});

test('misconfigured site URL fails clearly instead of emitting non-HTTP canonicals', async () => {
  const previous = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    process.env.NEXT_PUBLIC_SITE_URL = 'javascript:alert(1)';
    await assert.rejects(import('../lib/site.ts?test=invalid'), /absolute HTTP/);
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
    else process.env.NEXT_PUBLIC_SITE_URL = previous;
  }
});
