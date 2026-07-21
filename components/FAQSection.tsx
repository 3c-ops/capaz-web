import { faqs } from '@/lib/content';

import { SectionHeader } from './SectionHeader';

export function FAQSection() {
  return (
    <section className="border-y border-brand-border px-5 py-20 md:py-32" id="preguntas">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          description="Preferimos que llegues a la conversación sabiendo qué esperar. Estas respuestas no reemplazan una revisión de tu caso, pero sí dejan claras nuestras condiciones, límites y forma de acompañarte."
          title="Antes de escribirnos"
        />

        <div className="mt-12 divide-y divide-brand-border border-y border-brand-border md:mt-16">
          {faqs.map((faq) => (
            <details className="group py-7 md:py-9" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left focus-visible:outline-brand-blue">
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-brand-navy md:text-3xl">
                  {faq.question}
                </h3>
                <span className="mt-1 shrink-0 border-b border-brand-blue/40 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue transition-colors duration-200 group-open:border-transparent group-open:text-foreground/45">
                  <span className="group-open:hidden">Leer</span>
                  <span className="hidden group-open:inline">Cerrar</span>
                </span>
              </summary>
              <p className="mt-6 max-w-3xl text-pretty font-light leading-8 text-foreground/68 md:text-lg md:leading-9">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
