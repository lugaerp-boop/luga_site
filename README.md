# Luga ERP — Site Institucional

Site institucional da **Luga ERP**, desenvolvido com Next.js 14, TypeScript, Tailwind CSS.

## Pré-requisitos

- Node.js 18+
- npm

---

## Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com suas credenciais do EmailJS

# 3. Iniciar o servidor de desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Configurar EmailJS (formulário de contato)

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/)
2. Crie um **Service** conectado à sua conta Gmail (`lugaerp@gmail.com`)
3. Crie um **Template** com as variáveis:
   - `from_name`, `from_email`, `phone`, `company`, `segment`, `message`, `to_email`
4. Copie o **Service ID**, **Template ID** e **Public Key**
5. Cole no arquivo `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

---

## Deploy na Vercel

1. Faça push do repositório para o GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. Na seção **Environment Variables**, adicione as 3 variáveis do EmailJS
4. Deploy automático a cada push na branch `main`

> O domínio padrão será `luga-erp.vercel.app`. Configure um domínio customizado em **Settings → Domains**.

---

## Estrutura de arquivos

```
app/
├── layout.tsx              # Layout global, fonts, metadata, Schema.org
├── page.tsx                # Home
├── globals.css             # CSS global (Tailwind + custom classes)
├── sitemap.ts              # Sitemap gerado automaticamente
├── robots.ts               # robots.txt gerado automaticamente
├── funcionalidades/page.tsx
├── precos/page.tsx
├── sobre/page.tsx
└── contato/page.tsx

components/
├── layout/
│   ├── Header.tsx          # Navbar fixa com hamburger mobile
│   └── Footer.tsx          # Footer com 4 colunas
├── home/
│   ├── Hero.tsx            # Hero com dashboard mockup
│   ├── Stats.tsx           # Barra de credibilidade com CountUp
│   ├── ForWho.tsx          # "Para quem é?" — 4 segmentos
│   ├── Modules.tsx         # Grid de módulos
│   ├── HowItWorks.tsx      # Timeline "3 passos"
│   ├── WhyLuga.tsx         # Tabela comparativa
│   ├── Testimonials.tsx    # 3 depoimentos
│   └── FinalCTA.tsx        # CTA final
├── shared/
│   ├── AnimatedSection.tsx # Animações de entrada no scroll
│   └── CountUp.tsx         # Contador animado
└── contact/
    └── ContactForm.tsx     # Formulário com integração EmailJS

lib/
└── emailjs.ts              # Configuração EmailJS (lê de .env.local)

public/
└── (favicon.ico, logo.png, og-image.jpg — adicionar manualmente)
```

---

## Como atualizar conteúdo

| O que atualizar | Onde editar |
|---|---|
| Texto da Home (hero, CTAs) | `components/home/Hero.tsx` |
| Módulos na Home | `components/home/Modules.tsx` |
| Depoimentos | `components/home/Testimonials.tsx` |
| Comparativo WhyLuga | `components/home/WhyLuga.tsx` |
| Módulos detalhados | `app/funcionalidades/page.tsx` (array `modules`) |
| Lista do que incluso (Preços) | `app/precos/page.tsx` (array `included`) |
| FAQ | `app/precos/page.tsx` (array `faq`) |
| Texto "Sobre" | `app/sobre/page.tsx` |
| Links do Footer | `components/layout/Footer.tsx` |
| Cores e tipografia | `tailwind.config.ts` + `app/globals.css` |
| Metadata SEO por página | `export const metadata` no topo de cada `page.tsx` |

---

## Scripts disponíveis

```bash
npm run dev      # Desenvolvimento (localhost:3000)
npm run build    # Build de produção
npm run start    # Servidor de produção local
npm run lint     # Verificar erros de lint
```
