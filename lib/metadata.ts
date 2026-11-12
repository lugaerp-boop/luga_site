import type { Metadata } from 'next';
import { siteUrl } from './site';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = title.includes('Luga ERP') ? title : `${title} | Luga ERP`;
  const images = [{ url: siteUrl('/og-image.png'), width: 1200, height: 630,
    alt: 'Luga ERP — Gestão completa. Resultados reais.' }];
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: siteUrl(path) },
    openGraph: { type: 'website', locale: 'pt_BR', siteName: 'Luga ERP',
      title: fullTitle, description, url: siteUrl(path), images },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images },
  };
}
