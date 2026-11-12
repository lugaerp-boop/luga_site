export interface FAQ { question: string; answer: string; }
interface FAQSectionProps { faqs: FAQ[]; title?: string; }

export default function FAQSection({ faqs, title = "Perguntas frequentes" }: FAQSectionProps) {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
  return <section className="bg-luga-bg py-16 sm:py-20">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-luga-dark text-center mb-10">{title}</h2>
      <div className="space-y-3">
        {faqs.map(faq => <details key={faq.question} className="border border-gray-200 rounded-xl bg-white group">
          <summary className="cursor-pointer px-6 py-4 font-semibold text-luga-dark text-sm rounded-xl hover:bg-luga-bg">{faq.question}</summary>
          <div className="px-6 pb-5 text-sm text-luga-text-secondary leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
        </details>)}
      </div>
    </div>
  </section>;
}
