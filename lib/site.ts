/** Change the public commercial URL here, or set NEXT_PUBLIC_SITE_URL at build time. */
function normalizeSiteUrl(value: string) {
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) {
    throw new Error('NEXT_PUBLIC_SITE_URL must be an absolute HTTP(S) URL without credentials.');
  }
  return url.origin;
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || 'https://lugaerp.com.br'
);

export const SITE_EMAIL = 'lugaerp@gmail.com';
export const SITE_DESCRIPTION =
  'ERP para distribuidoras, atacadistas e empresas de hortifruti. Vendas, estoque e financeiro integrados, com módulo fiscal no plano Completo.';

export function siteUrl(path = '/') {
  return new URL(path, `${SITE_URL}/`).toString();
}
