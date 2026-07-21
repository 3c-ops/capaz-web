import { transparencyItems } from '@/lib/content';

import { SectionHeader } from './SectionHeader';

type TransparencyListProps = {
  items: readonly { title: string; description: string }[];
  tone: 'positive' | 'limited';
};

function TransparencyList({ items, tone }: TransparencyListProps) {
  const markerClass =
    tone === 'positive'
      ? 'border-brand-blue/20 bg-brand-blue/5 text-brand-blue'
      : 'border-foreground/10 bg-surface-muted text-foreground/55';

  return (
    <ul className="mt-7 space-y-3.5">
      {items.map((item, index) => (
        <li
          className="group relative rounded-2xl border border-brand-border/80 bg-background/55 px-4 py-4 transition duration-300 ease-out hover:border-brand-blue/20 hover:bg-white hover:shadow-[0_14px_34px_rgba(25,45,96,0.055)]"
          key={item.title}
        >
          <div className="flex items-start gap-4">
            <span
              className={`mt-0.5 flex h-7 min-w-10 items-center justify-center rounded-full border text-[0.68rem] font-semibold tracking-[0.08em] ${markerClass}`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>
              <strong className="block text-base font-semibold tracking-[-0.01em] text-foreground">
                {item.title}
              </strong>
              <span className="mt-1.5 block text-sm leading-6 text-foreground/62">
                {item.description}
              </span>
            </span>
          </div>
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
          <article className="case-card case-card-positive p-6 md:p-8">
            <div className="flex items-start justify-between gap-5 border-b border-brand-border/80 pb-5">
              <div>
                <p className="case-label text-brand-blue">Ficha de revisión</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-brand-navy">
                  Donde sí podemos aportar
                </h3>
              </div>
              <span className="rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 text-xs font-semibold text-brand-blue">
                Vigente
              </span>
            </div>
            <TransparencyList items={transparencyItems.canHelp} tone="positive" />
          </article>

          <article className="case-card p-6 md:p-8">
            <div className="flex items-start justify-between gap-5 border-b border-brand-border/80 pb-5">
              <div>
                <p className="case-label text-foreground/45">Límites actuales</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-brand-navy">
                  Donde hoy no podemos ayudarte
                </h3>
              </div>
              <span className="rounded-full border border-foreground/10 bg-surface-muted px-3 py-1 text-xs font-semibold text-foreground/55">
                En pausa
              </span>
            </div>
            <TransparencyList items={transparencyItems.cannotHelp} tone="limited" />
            <p className="mt-7 rounded-2xl border border-brand-border/80 bg-background/70 px-4 py-3 text-xs leading-5 text-foreground/50">
              Los proyectos, precios y disponibilidad pueden cambiar.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
