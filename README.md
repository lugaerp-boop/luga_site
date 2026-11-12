# Luga ERP — Site institucional

Next.js 14 App Router, TypeScript e Tailwind CSS. O site comercial e o ERP são projetos separados.

## Desenvolvimento e verificação

Use Node.js 24 LTS (ou Node 22.18+ para os testes que importam TypeScript nativamente).

```bash
npm ci
cp .env.local.example .env.local
npm run dev
npm run lint
npm test
npm run build
npm start
```

Os testes cobrem telefone, atribuição de campanhas, storage indisponível/corrompido, expiração e configuração de URL. Validar também no navegador: navegação e modais com teclado, formulário inválido, mobile em 360/390/430 px, preferências de movimento reduzido e metadados da publicação.

## Endereço oficial e publicação

`lib/site.ts` centraliza a URL e os dados institucionais. `NEXT_PUBLIC_SITE_URL` deve receber a origem pública do **site comercial**, incluindo protocolo. Canonicals, Open Graph, Twitter, Schema, sitemap e robots usam essa configuração.

O fallback mantém `https://lugaerp.com.br`, endereço anteriormente declarado. A escolha final do domínio comercial, o endereço do ERP e as alterações na Vercel/DNS continuam pendentes. Configurar a variável no ambiente da hospedagem e reconstruir o projeto após a mudança. Não é necessário alterar as páginas individualmente. Não trocar o endereço do ERP pelo código deste projeto.

A hospedagem existente é Vercel; a publicação da `main` pode atualizar produção automaticamente. Branches de revisão devem ser avaliadas antes do merge. A configuração de URL não cria domínio nem altera DNS.

## Rotas

| Rota | Conteúdo |
| --- | --- |
| `/` | Home, segmentos (`#segmentos`), módulos (`#modulos`) e planos (`#planos`) |
| `/funcionalidades` | Módulos e explicação da demonstração |
| `/demonstracao` | Solicitação de demonstração, com formulário no primeiro bloco |
| `/contato` | Contatos e mensagem pré-preenchida no WhatsApp |
| `/sobre` | História e posicionamento |
| `/erp-para-ceasa` | Página setorial |
| `/erp-para-distribuidoras` | Página setorial |
| `/erp-para-hortifruti` | Página setorial |
| `/og-image.png` | Imagem social de 1200 × 630 gerada no build |
| `/robots.txt`, `/sitemap.xml` | Referências de indexação |
| `/precos` | Redireciona para `/#planos` |

## Formulários e recebimento de contatos

- `LeadForm` envia pelo EmailJS. Configure service, template e public key da hospedagem. Não são credenciais de servidor; restringir origens e configurar proteção contra abuso no serviço.
- Template: `from_name`, `company`, `phone`, `segment`, `main_pain`, `current_system`, `to_email`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `first_utm_source`, `first_utm_medium`, `first_utm_campaign`, `first_utm_content`, `first_utm_term`, `landing_page` e `conversion_page`.
- Os dados opcionais não precisam estar no template antigo; para recebê-los, atualizar o template no EmailJS. O destinatário atual é `lugaerp@gmail.com`.
- Nome, empresa e telefone com DDD são obrigatórios na solicitação. Informações adicionais ficam opcionais.
- `WhatsAppForm` valida os dados e abre uma conversa. E-mail é opcional. **A pessoa ainda precisa enviar a mensagem no WhatsApp.** Abertura da conversa não equivale a mensagem recebida.
- Há fallback explícito para WhatsApp se o EmailJS falhar ou não estiver configurado. Não há banco de leads, CRM nem confirmação de entrega na caixa de entrada neste projeto.
- A aprovação operacional ainda depende de um teste autorizado ponta a ponta com as configurações reais: solicitação → serviço → caixa de entrada → responsável comercial. Os testes automatizados não enviam e-mail ou WhatsApp.

## Campanhas

O tracker armazena somente as cinco UTMs e o caminho da página em `sessionStorage`, sem armazenar campos de contato, referrer completo ou query string inteira. Guarda primeira origem e campanha mais recente, preserva navegação interna e expira após 30 minutos sem atividade registrada. Com storage indisponível, usa memória; nesse caso, recarregar a página perde a atribuição. Valores de UTM são limitados a 200 caracteres.

Não há Analytics/Meta Pixel instalado. Os atributos `data-event` são pontos de instrumentação, não envio efetivo de eventos. Configuração e política de mensuração dependem da empresa.

## Acessibilidade e movimento

Dialogs nativos oferecem fundo inerte e contenção de foco. O hook compartilhado controla abertura, bloqueio de rolagem e retorno do foco. Escape fecha o diálogo. O menu fecha ao navegar ou ao mudar para desktop.

Animações respeitam `prefers-reduced-motion`; conteúdo e valores finais ficam disponíveis sem JavaScript. FAQ usa `details/summary` nativo, com Schema gerado das mesmas perguntas e respostas visíveis. A marcação não garante destaque nos resultados de busca.

No celular, o contato fixo ocupa uma barra com espaço reservado no documento e safe area. Verificar teclado virtual e zoom em dispositivos reais.

## Marca e imagens

A logo original foi preservada, com recorte de margens e exportação WebP sem perdas. Os PNGs de origem continuam recuperáveis no histórico Git anterior à Etapa 1. Nenhum símbolo foi redesenhado.

- Header: recorte do original `logo-header.png` em x=280, y=270, 980 × 430.
- Footer: recorte do original `logo-footer.png` em x=300, y=280, 940 × 360.
- `logo-social.png`: mesmo recorte do header, reduzido para 560 px, usado no gerador social.
- `hero.webp`: versão otimizada da imagem anteriormente usada; no celular o hero prioriza texto sobre fundo institucional.
- Carrossel desfocado e imagens sem referências foram removidos. Prints reais e vídeo continuam pendentes; o botão agora explica a demonstração ao vivo.

## Conteúdo e decisões pendentes

1. Definir domínio comercial e domínio do ERP; configurar hospedagem e DNS.
2. Aprovar textos de Privacidade e Termos. Os antigos links para `/sobre` foram removidos; inserir documentos e avisos adequados depois da aprovação.
3. Fornecer prints reais, vídeo e depoimentos autorizados; comprovar números públicos.
4. Confirmar a matriz de recursos, integrações, bancos e condições efetivamente disponíveis no ERP antes de revisar as promessas comerciais.
5. Definir registro central de leads/CRM, responsável, política de retorno e mensuração.
6. Configurar e testar EmailJS; decidir e-mail corporativo e IDs de analytics, quando aplicável.
