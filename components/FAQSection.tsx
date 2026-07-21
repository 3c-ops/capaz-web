import { faqs } from '@/lib/content';

import { SectionHeader } from './SectionHeader';

export function FAQSection() {
  return (
    <section className="border-y border-brand-border px-5 py-20 md:py-32" id="preguntas">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              description="Preferimos que llegues a la conversación sabiendo qué esperar. Estas respuestas no reemplazan una revisión de tu caso, pero sí dejan claras nuestras condiciones, límites y forma de acompañarte."
              title="Antes de escribirnos"
            />
            <p className="mt-8 max-w-xl border-l border-brand-border pl-5 text-sm font-light leading-7 text-foreground/55 md:text-base md:leading-8">
              Si algo no calza con tu situación, igual puedes contarnos. Te responderemos con honestidad,
              sin presionarte ni hacerte perder tiempo.
            </p>
          </div>

          <div className="space-y-5 md:space-y-6">
            {faqs.map((faq, index) => (
              <article
                className="rounded-[2rem] border border-brand-border bg-white p-6 shadow-[0_18px_60px_rgba(25,45,96,0.045)] md:p-8"
                key={faq.question}
              >
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-xs font-semibold tracking-[0.18em] text-brand-blue/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug tracking-[-0.025em] text-brand-navy md:text-2xl">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-pretty font-light leading-7 text-foreground/68 md:text-lg md:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
