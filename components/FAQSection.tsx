import { faqs } from '@/lib/content';

import { SectionHeader } from './SectionHeader';

export function FAQSection() {
  return (
    <section className="border-y border-brand-border px-5 py-20 md:py-32" id="preguntas">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          description="Aquí no hay letras chicas. Queremos que te sientas tranquilo desde el primer instante."
          title="Respuestas con total claridad"
        />

        <div className="mt-10 space-y-3 md:mt-12">
          {faqs.map((faq) => (
            <details
              className="group rounded-3xl border border-brand-border bg-white p-5 shadow-[0_12px_40px_rgba(25,45,96,0.04)] transition duration-300 open:border-brand-blue/20 open:shadow-[0_18px_55px_rgba(25,45,96,0.07)] hover:border-foreground/15 md:p-6"
              key={faq.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-semibold tracking-[-0.015em] text-brand-navy focus-visible:outline-brand-blue">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-brand-blue transition duration-300 group-open:rotate-45 group-open:bg-brand-blue group-open:text-white"
                >
                  +
                </span>
              </summary>
              <p className="mt-5 border-t border-brand-border pt-5 font-light leading-7 text-foreground/70 md:text-lg md:leading-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
