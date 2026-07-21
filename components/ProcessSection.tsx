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

        <ol className="mt-12 space-y-4 md:mt-16">
          {processSteps.map((step, index) => (
            <li className="group relative rounded-[1.65rem] border border-brand-border bg-background/55 p-5 transition duration-300 ease-out hover:border-brand-blue/20 hover:bg-white hover:shadow-[0_16px_44px_rgba(25,45,96,0.055)] md:p-6" key={step.title}>
              <span
                aria-hidden="true"
                className="mb-5 flex h-8 w-fit items-center justify-center rounded-full border border-brand-blue/20 bg-white px-3 text-xs font-semibold tracking-[0.14em] text-brand-blue shadow-[0_8px_24px_rgba(30,70,223,0.06)] transition duration-300 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white"
              >
                PASO {String(index + 1).padStart(2, '0')}
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
