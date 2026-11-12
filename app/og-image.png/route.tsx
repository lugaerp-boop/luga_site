import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';
export const dynamic = 'force-static';

export async function GET() {
  const logo = await readFile(join(process.cwd(), 'public/logo-social.png'));
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
      background: '#0D1B4B', padding: '52px 68px', color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', background: 'white', borderRadius: 16, padding: '4px 16px' }}>
          {/* A deterministic crop of the original brand asset. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/png;base64,${logo.toString('base64')}`} width={245} height={108} alt="Luga ERP" />
        </div>
        <span style={{ fontSize: 24, color: '#9bd1ff' }}>Do mercado para o mercado.</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 42 }}>
        <span style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.12 }}>Gestão para quem</span>
        <span style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.12, color: '#75bfff' }}>distribui e vende hortifruti.</span>
        <span style={{ fontSize: 28, lineHeight: 1.4, marginTop: 25, color: '#e2e8f0' }}>Vendas, estoque e financeiro no mesmo sistema.</span>
      </div>
      <div style={{ display: 'flex', marginTop: 'auto', paddingTop: 24, borderTop: '1px solid #435278',
        fontSize: 23, justifyContent: 'space-between', color: '#e2e8f0' }}>
        <span>100% web</span><span>Sem cobrança por usuário</span><span>Conheça o Luga ERP</span>
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
