export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5521XXXXXXXXX";

const DEFAULT_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Olá, quero agendar uma demonstração do Luga ERP. Minha empresa é do segmento:";

export function whatsappUrl(message?: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message ?? DEFAULT_MESSAGE)}`;
}
