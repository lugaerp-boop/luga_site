const KEY = 'luga.attribution.v1';
const TTL = 30 * 60 * 1000;
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
type Campaign = Record<(typeof UTM_KEYS)[number], string>;
type Attribution = { first: Campaign; last: Campaign; landing_page: string; updated: number };
let memory: Attribution | null = null;

function campaign(search: string): Campaign {
  const params = new URLSearchParams(search);
  return Object.fromEntries(UTM_KEYS.map(key => [key, (params.get(key) || '').slice(0, 200)])) as Campaign;
}

function isAttribution(value: unknown): value is Attribution {
  if (!value || typeof value !== 'object') return false;
  const data = value as Attribution;
  return typeof data.updated === 'number' && Number.isFinite(data.updated) &&
    typeof data.landing_page === 'string' && [data.first, data.last].every(item =>
      item && UTM_KEYS.every(key => typeof item[key] === 'string' && item[key].length <= 200));
}

/** Session-only campaign attribution. Never store contact fields or the complete query string. */
export function captureAttribution() {
  if (typeof window === 'undefined') return null;
  let stored = memory;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    if (isAttribution(parsed)) stored = parsed;
  } catch { /* Memory fallback when storage is blocked or corrupt. */ }
  const now = Date.now();
  const current = campaign(window.location.search);
  const hasCampaign = Object.values(current).some(Boolean);
  if (!stored || now - stored.updated > TTL || stored.updated > now) {
    stored = { first: current, last: current, landing_page: window.location.pathname, updated: now };
  } else {
    stored = { ...stored, last: hasCampaign ? current : stored.last, updated: now };
  }
  memory = stored;
  try { window.sessionStorage.setItem(KEY, JSON.stringify(stored)); } catch { /* Nonessential storage. */ }
  return stored;
}

export function attributionFields() {
  const data = captureAttribution();
  return {
    ...campaign(''), ...data?.last,
    ...Object.fromEntries(UTM_KEYS.map(key => [`first_${key}`, data?.first[key] || ''])),
    landing_page: data?.landing_page || '',
    conversion_page: typeof window === 'undefined' ? '' : window.location.pathname,
  };
}
