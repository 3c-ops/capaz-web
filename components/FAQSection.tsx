'use client';

import { useState } from 'react';

import { faqs } from '@/lib/content';

import { SectionHeader } from './SectionHeader';

export function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <section className="border-y border-brand-border px-5 py-20 md:py-32" id="preguntas">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          description="Preferimos que llegues a la conversación sabiendo qué esperar. Estas respuestas no reemplazan una revisión de tu caso, pero sí dejan claras nuestras condiciones, límites y forma de acompañarte."
          title="Antes de escribirnos"
        />

        <div className="mt-12 divide-y divide-brand-border border-y border-brand-border md:mt-16">
          {faqs.map((faq) => {
            const isOpen = openQuestion === faq.question;

            return (
              <details
                className="group py-7 md:py-9"
                key={faq.question}
                onToggle={(event) => {
                  if (event.currentTarget.open) {
                    setOpenQuestion(faq.question);
                  }
                }}
                open={isOpen}
              >
                <summary
                  className="flex cursor-pointer list-none items-start justify-between gap-6 text-left focus-visible:outline-brand-blue"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenQuestion(isOpen ? null : faq.question);
                  }}
                >
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-brand-navy md:text-3xl">
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-brand-border text-brand-blue transition-transform duration-200 group-open:rotate-180"
                  >
                    ↓
                  </span>
                </summary>
                <p className="mt-6 max-w-3xl text-pretty font-light leading-8 text-foreground/68 md:text-lg md:leading-9">
                  {faq.answer}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
