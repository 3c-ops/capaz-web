import { processSteps } from '@/lib/content';

import { SectionHeader } from './SectionHeader';

export function ProcessSection() {
  return (
    <section
      className="border-t border-brand-border bg-white px-5 py-20 md:py-32"
      id="como-trabajamos"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          description="Es simple. No hay formularios eternos, llamadas de ventas agresivas ni cobros ocultos."
          title="¿Cómo funciona nuestra conversación?"
        />

        <ol className="mt-12 space-y-8 border-l border-brand-border pl-7 md:mt-16 md:space-y-10 md:pl-10">
          {processSteps.map((step, index) => (
            <li className="group relative rounded-2xl py-1 md:py-2" key={step.title}>
              <span
                aria-hidden="true"
                className="absolute -left-[43px] flex size-8 items-center justify-center rounded-full border border-brand-blue/30 bg-white text-sm font-semibold text-brand-blue shadow-[0_8px_24px_rgba(30,70,223,0.08)] transition duration-300 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white md:-left-[57px]"
              >
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-navy md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-2xl font-light leading-7 text-foreground/70 md:text-lg md:leading-8">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
