import { transparencyItems } from '@/lib/content';

import { SectionHeader } from './SectionHeader';

function TransparencyList({
  items,
}: {
  items: readonly { title: string; description: string }[];
}) {
  return (
    <ul className="mt-8 space-y-5">
      {items.map((item, index) => (
        <li className="group flex gap-4" key={item.title}>
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-surface-muted text-xs font-semibold text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>
            <strong className="block text-base font-semibold text-foreground">{item.title}</strong>
            <span className="mt-1 block text-sm leading-6 text-foreground/60">
              {item.description}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TransparencySection() {
  return (
    <section className="px-5 py-20 md:py-32" id="transparencia">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          description="Preferimos decir la verdad desde el inicio. Así no te hacemos perder tiempo y nos enfocamos donde realmente podemos generar una alternativa real."
          title="¿Hoy con qué podemos ayudarte?"
        />

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6 lg:gap-8">
          <article className="rounded-[2rem] border border-brand-border bg-white p-7 shadow-[0_22px_70px_rgba(30,70,223,0.10),0_3px_14px_rgba(30,70,223,0.04)] transition duration-300 ease-out hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-[0_30px_90px_rgba(30,70,223,0.14),0_6px_20px_rgba(30,70,223,0.06)] motion-reduce:hover:translate-y-0 md:p-10">
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-navy">
              Donde sí podemos aportar
            </h3>
            <TransparencyList items={transparencyItems.canHelp} />
          </article>

          <article className="rounded-[2rem] border border-brand-border bg-white p-7 shadow-[0_22px_70px_rgba(30,70,223,0.09),0_3px_14px_rgba(30,70,223,0.035)] transition duration-300 ease-out hover:-translate-y-1 hover:border-brand-blue/15 hover:shadow-[0_30px_90px_rgba(30,70,223,0.13),0_6px_20px_rgba(30,70,223,0.055)] motion-reduce:hover:translate-y-0 md:p-10">
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-navy">
              Donde hoy no podemos ayudarte
            </h3>
            <TransparencyList items={transparencyItems.cannotHelp} />
            <p className="mt-8 border-t border-brand-border pt-5 text-xs leading-5 text-foreground/50">
              Los proyectos, precios y disponibilidad pueden cambiar.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
