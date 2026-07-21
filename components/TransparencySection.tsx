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

function TransparencyBrandSignature() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-8 -top-20 bottom-[-5rem] -z-10 hidden overflow-visible md:block"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1180 520"
    >
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="720" id="capaz-soft-signature" width="1380" x="-100" y="-100">
          <feGaussianBlur stdDeviation="24" />
        </filter>
        <radialGradient cx="50%" cy="50%" id="capaz-signature-fade" r="58%">
          <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.1" />
          <stop offset="54%" stopColor="var(--brand-blue)" stopOpacity="0.075" />
          <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g filter="url(#capaz-soft-signature)" opacity="0.9">
        <path
          d="M487 70C290 32 104 95 82 244c-22 149 155 231 360 214 144-12 214-61 254-130 25-42 31-81 18-109-17-38-67-46-112-22-43 22-68 60-70 103"
          stroke="url(#capaz-signature-fade)"
          strokeLinecap="round"
          strokeWidth="92"
        />
        <path
          d="M610 188c28-58 118-71 153-24 30 41 8 89-42 118-42 24-54 42-54 80"
          stroke="url(#capaz-signature-fade)"
          strokeLinecap="round"
          strokeWidth="46"
        />
        <circle cx="667" cy="426" fill="url(#capaz-signature-fade)" r="26" />
      </g>
    </svg>
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

        <div className="relative isolate mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6 lg:gap-8">
          <TransparencyBrandSignature />
          <article className="relative rounded-[2rem] border border-brand-border bg-white p-7 shadow-[0_18px_60px_rgba(25,45,96,0.05)] transition duration-300 ease-out hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-[0_24px_70px_rgba(25,45,96,0.08)] motion-reduce:hover:translate-y-0 md:p-10">
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-navy">
              Donde sí podemos aportar
            </h3>
            <TransparencyList items={transparencyItems.canHelp} />
          </article>

          <article className="relative rounded-[2rem] border border-brand-border bg-white p-7 shadow-[0_18px_60px_rgba(25,45,96,0.05)] transition duration-300 ease-out hover:-translate-y-1 hover:border-foreground/10 hover:shadow-[0_24px_70px_rgba(25,45,96,0.08)] motion-reduce:hover:translate-y-0 md:p-10">
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
