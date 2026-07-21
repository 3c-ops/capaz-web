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

        <div className="mt-12 space-y-3 md:mt-16">
          {faqs.map((faq) => {
            const isOpen = openQuestion === faq.question;
            const answerId = `faq-answer-${faq.question.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`;

            return (
              <article className="rounded-[1.65rem] border border-brand-border bg-white px-5 py-5 shadow-[0_12px_40px_rgba(25,45,96,0.035)] transition duration-300 ease-out hover:border-brand-blue/20 md:px-6 md:py-6" key={faq.question}>
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-start justify-between gap-6 text-left focus-visible:outline-brand-blue"
                  onClick={() => {
                    setOpenQuestion(isOpen ? null : faq.question);
                  }}
                  type="button"
                >
                  <span className="flex items-start gap-4">
                    <span className="mt-1 hidden h-6 min-w-6 items-center justify-center rounded-full border border-brand-blue/15 bg-brand-blue/5 text-[0.65rem] font-bold text-brand-blue sm:flex">
                      ?
                    </span>
                    <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] text-brand-navy md:text-2xl">
                      {faq.question}
                    </h3>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-brand-border bg-background text-brand-blue transition-transform duration-300 ease-out ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                  id={answerId}
                >
                  <div className="overflow-hidden">
                    <p className="ml-0 max-w-3xl pt-5 text-pretty font-light leading-8 text-foreground/68 md:ml-10 md:text-lg md:leading-9">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
